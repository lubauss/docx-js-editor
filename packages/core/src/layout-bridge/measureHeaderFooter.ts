/**
 * Header/Footer Measurement
 *
 * Measures header/footer content to determine the space they require.
 * The measured heights are used to adjust effective margins so body
 * content doesn't overlap with headers/footers.
 */

import type {
  Paragraph,
  Table,
  TableRow as DocTableRow,
  TableCell as DocTableCell,
  HeaderFooter,
  HeaderFooterType,
  Run,
} from '../types/document';
import type {
  FlowBlock,
  Measure,
  ParagraphBlock,
  ParagraphMeasure,
  TableBlock,
  TableRow,
  TableCell,
  TableMeasure,
  CellBorders,
  CellBorderSpec,
} from '../layout-engine/types';
import { measureParagraph } from './measuring';

// =============================================================================
// TYPES
// =============================================================================

/**
 * Measured header/footer content for a single variant (default, first, even).
 */
export interface HeaderFooterMeasurement {
  /** The variant type. */
  type: HeaderFooterType;
  /** Converted flow blocks. */
  blocks: FlowBlock[];
  /** Block measurements. */
  measures: Measure[];
  /** Total height of all content. */
  totalHeight: number;
}

/**
 * All measured header/footer content for a section.
 */
export interface SectionHeaderFooterMeasurements {
  /** Header measurements by type. */
  headers: Partial<Record<HeaderFooterType, HeaderFooterMeasurement>>;
  /** Footer measurements by type. */
  footers: Partial<Record<HeaderFooterType, HeaderFooterMeasurement>>;
}

/**
 * Options for header/footer measurement.
 */
export interface MeasureHeaderFooterOptions {
  /** Maximum width for content (content area width). */
  maxWidth: number;
  /** Current page number (for token resolution). */
  pageNumber?: number;
  /** Total page count (for token resolution). */
  totalPages?: number;
}

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

// OOXML border style → CSS border-style mapping
const OOXML_TO_CSS_BORDER: Record<string, string> = {
  single: 'solid',
  double: 'double',
  dotted: 'dotted',
  dashed: 'dashed',
  thick: 'solid',
  dashSmallGap: 'dashed',
  dotDash: 'dashed',
  dotDotDash: 'dotted',
  triple: 'double',
  wave: 'solid',
  doubleWave: 'double',
  threeDEmboss: 'ridge',
  threeDEngrave: 'groove',
  outset: 'outset',
  inset: 'inset',
};

/** Convert border width from eighths of a point to pixels. */
function borderWidthToPixels(eighthsOfPoint: number): number {
  return Math.max(1, Math.round((eighthsOfPoint / 8) * 1.333));
}

/** Convert twips to pixels (96 DPI). */
function twipsToPixels(twips: number): number {
  return (twips / 1440) * 96;
}

/** Convert a BorderSpec from OOXML format to CSS-ready CellBorderSpec. */
function borderSpecToCss(border?: {
  style?: string;
  size?: number;
  color?: { rgb?: string; auto?: boolean };
}): CellBorderSpec {
  if (!border || !border.style || border.style === 'none' || border.style === 'nil') {
    return { width: 0, style: 'none' };
  }
  const spec: CellBorderSpec = {
    style: OOXML_TO_CSS_BORDER[border.style] || 'solid',
  };
  const rgb = border.color?.rgb;
  if (rgb && !border.color?.auto) {
    spec.color = `#${rgb}`;
  }
  if (border.size) {
    spec.width = borderWidthToPixels(border.size);
  }
  return spec;
}

/** Auto-increment ID for header/footer blocks. */
let hfBlockId = 0;
function nextHfBlockId(): string {
  return `hf-tbl-${hfBlockId++}`;
}

/**
 * Convert a Document TableCell to a layout TableCell.
 */
function tableDocCellToFlowCell(docCell: DocTableCell): TableCell {
  const fmt = docCell.formatting;
  const blocks: FlowBlock[] = [];

  for (const item of docCell.content) {
    if (item.type === 'paragraph') {
      blocks.push(paragraphToFlowBlock(item));
    } else if (item.type === 'table') {
      blocks.push(tableToFlowBlock(item));
    }
  }

  // Convert cell borders from OOXML to CSS-ready format
  let borders: CellBorders | undefined;
  if (fmt?.borders) {
    borders = {
      top: borderSpecToCss(fmt.borders.top),
      bottom: borderSpecToCss(fmt.borders.bottom),
      left: borderSpecToCss(fmt.borders.left),
      right: borderSpecToCss(fmt.borders.right),
    };
  }

  // Convert cell margins (twips) to pixel padding
  const margins = fmt?.margins;
  const padding = {
    top: margins?.top?.value != null ? twipsToPixels(margins.top.value) : 1,
    right: margins?.right?.value != null ? twipsToPixels(margins.right.value) : 7,
    bottom: margins?.bottom?.value != null ? twipsToPixels(margins.bottom.value) : 1,
    left: margins?.left?.value != null ? twipsToPixels(margins.left.value) : 7,
  };

  // Cell width
  const width = fmt?.width?.value
    ? fmt.width.type === 'dxa'
      ? twipsToPixels(fmt.width.value)
      : undefined
    : undefined;

  // Background color from shading
  let background: string | undefined;
  if (fmt?.shading?.fill?.rgb && !fmt.shading.fill.auto) {
    background = `#${fmt.shading.fill.rgb}`;
  }

  return {
    id: nextHfBlockId(),
    blocks,
    colSpan: fmt?.gridSpan,
    rowSpan: fmt?.vMerge === 'restart' ? undefined : undefined, // vMerge handled at row level
    width,
    verticalAlign: fmt?.verticalAlign,
    background,
    borders,
    padding,
  };
}

/**
 * Convert a Document TableRow to a layout TableRow.
 */
function tableDocRowToFlowRow(docRow: DocTableRow): TableRow {
  const cells: TableCell[] = docRow.cells.map(tableDocCellToFlowCell);
  const fmt = docRow.formatting;

  return {
    id: nextHfBlockId(),
    cells,
    height: fmt?.height?.value ? twipsToPixels(fmt.height.value) : undefined,
    heightRule: fmt?.heightRule,
    isHeader: fmt?.header,
  };
}

/**
 * Convert a Document Table to a layout TableBlock.
 */
function tableToFlowBlock(table: Table): TableBlock {
  const rows: TableRow[] = table.rows.map(tableDocRowToFlowRow);
  const columnWidths = table.columnWidths?.map(twipsToPixels);
  const fmt = table.formatting;

  return {
    kind: 'table',
    id: nextHfBlockId(),
    rows,
    columnWidths,
    width: fmt?.width?.value,
    widthType: fmt?.width?.type,
    justification: fmt?.justification,
  };
}

/**
 * Convert header/footer content to flow blocks.
 *
 * Creates flow blocks directly from Document types (Paragraph and Table).
 */
function contentToFlowBlocks(content: (Paragraph | Table)[]): FlowBlock[] {
  const blocks: FlowBlock[] = [];

  for (const item of content) {
    if (item.type === 'paragraph') {
      blocks.push(paragraphToFlowBlock(item));
    } else if (item.type === 'table') {
      blocks.push(tableToFlowBlock(item));
    }
  }

  return blocks;
}

/**
 * Map Document alignment to layout alignment.
 * 'both' in Word = 'justify' in layout.
 */
function mapAlignment(
  alignment: string | undefined
): 'left' | 'center' | 'right' | 'justify' | undefined {
  if (!alignment) return undefined;
  if (alignment === 'both') return 'justify';
  if (
    alignment === 'left' ||
    alignment === 'center' ||
    alignment === 'right' ||
    alignment === 'justify'
  ) {
    return alignment;
  }
  return undefined;
}

/**
 * Convert a Run's content to flow block runs.
 */
function processRun(run: Run, output: ParagraphBlock['runs']): void {
  for (const content of run.content) {
    if (content.type === 'text') {
      output.push({
        kind: 'text',
        text: content.text,
        fontFamily:
          run.formatting?.fontFamily?.ascii ?? run.formatting?.fontFamily?.hAnsi ?? 'Arial',
        fontSize: run.formatting?.fontSize ? run.formatting.fontSize / 2 : 12,
        bold: run.formatting?.bold,
        italic: run.formatting?.italic,
        underline: run.formatting?.underline ? true : undefined,
      });
    } else if (content.type === 'tab') {
      output.push({ kind: 'tab' });
    } else if (content.type === 'break' && content.breakType === 'textWrapping') {
      output.push({ kind: 'lineBreak' });
    }
    // Handle page number fields - they'll be resolved later
    // For now, just add placeholder text
  }
}

/**
 * Convert a Document Paragraph to a FlowBlock.
 */
function paragraphToFlowBlock(para: Paragraph): ParagraphBlock {
  const fmt = para.formatting;

  const block: ParagraphBlock = {
    kind: 'paragraph',
    id: `hf-${para.paraId ?? Math.random().toString(36).slice(2)}`,
    pmStart: 0,
    pmEnd: 0,
    runs: [],
    attrs: {
      alignment: mapAlignment(fmt?.alignment),
      spacing: fmt
        ? {
            before: fmt.spaceBefore,
            after: fmt.spaceAfter,
            line: fmt.lineSpacing,
            lineRule: fmt.lineSpacingRule,
          }
        : undefined,
      indent: fmt
        ? {
            left: fmt.indentLeft,
            right: fmt.indentRight,
            firstLine: fmt.hangingIndent ? undefined : fmt.indentFirstLine,
            hanging: fmt.hangingIndent ? fmt.indentFirstLine : undefined,
          }
        : undefined,
    },
  };

  // Convert paragraph content to runs
  for (const item of para.content) {
    if (item.type === 'run') {
      processRun(item, block.runs);
    } else if (item.type === 'hyperlink') {
      // Convert hyperlink children (runs) to flow block runs
      for (const child of item.children) {
        if (child.type === 'run') {
          // Mark hyperlink runs with underline
          const hyperlinkRun: Run = {
            ...child,
            formatting: {
              ...child.formatting,
              underline: child.formatting?.underline ?? { style: 'single' },
            },
          };
          processRun(hyperlinkRun, block.runs);
        }
      }
    }
  }

  // Ensure at least one run for empty paragraphs
  if (block.runs.length === 0) {
    block.runs.push({
      kind: 'text',
      text: '',
      fontFamily: 'Arial',
      fontSize: 12,
    });
  }

  return block;
}

/**
 * Measure a single table block for header/footer sizing.
 * Mirrors the full measureTableBlock() in PagedEditor.tsx so that initial
 * render measurements match post-edit measurements exactly.
 */
function measureTableBlockSimple(block: TableBlock, maxWidth: number): TableMeasure {
  const DEFAULT_CELL_PADDING_X = 7; // Word default: 108 twips ≈ 7px
  const DEFAULT_CELL_PADDING_Y = 1; // OOXML spec says 0 but Word renders ~1px internal leading
  const TABLE_MIN_ROW_HEIGHT = 24;

  // Resolve column widths
  let columnWidths = block.columnWidths ?? [];

  if (columnWidths.length === 0 && block.rows.length > 0) {
    const colCount = block.rows[0].cells.reduce((sum, cell) => sum + (cell.colSpan ?? 1), 0);
    const equalWidth = maxWidth / Math.max(1, colCount);
    columnWidths = Array(colCount).fill(equalWidth);
  }

  const totalWidth = columnWidths.reduce((sum, w) => sum + w, 0);

  // Build a map of columns occupied by spanning cells from previous rows
  const occupiedColumnsPerRow = new Map<number, Set<number>>();
  for (let rowIdx = 0; rowIdx < block.rows.length; rowIdx++) {
    const row = block.rows[rowIdx];
    if (!row) continue;
    let colIdx = 0;
    const occupied = occupiedColumnsPerRow.get(rowIdx) ?? new Set<number>();
    while (occupied.has(colIdx)) colIdx++;

    for (const cell of row.cells) {
      const colSpan = cell.colSpan ?? 1;
      const rowSpan = cell.rowSpan ?? 1;

      if (rowSpan > 1) {
        for (let r = rowIdx + 1; r < rowIdx + rowSpan; r++) {
          if (!occupiedColumnsPerRow.has(r)) occupiedColumnsPerRow.set(r, new Set());
          const occSet = occupiedColumnsPerRow.get(r)!;
          for (let c = 0; c < colSpan; c++) {
            occSet.add(colIdx + c);
          }
        }
      }

      colIdx += colSpan;
      while (occupied.has(colIdx)) colIdx++;
    }
  }

  // Calculate cell widths and measure content
  const rows = block.rows.map((row, rowIdx) => {
    let columnIndex = 0;
    const occupied = occupiedColumnsPerRow.get(rowIdx) ?? new Set<number>();
    while (occupied.has(columnIndex)) columnIndex++;

    const cells = row.cells.map((cell) => {
      const colSpan = cell.colSpan ?? 1;
      // Calculate cell width as sum of spanned columns
      let cellWidth = 0;
      for (let c = 0; c < colSpan && columnIndex + c < columnWidths.length; c++) {
        cellWidth += columnWidths[columnIndex + c] ?? 0;
      }
      if (cellWidth === 0) {
        cellWidth = cell.width ?? 100;
      }
      columnIndex += colSpan;
      while (occupied.has(columnIndex)) columnIndex++;

      // Use actual cell padding instead of hardcoded value
      const padLeft = cell.padding?.left ?? DEFAULT_CELL_PADDING_X;
      const padRight = cell.padding?.right ?? DEFAULT_CELL_PADDING_X;
      const cellContentWidth = Math.max(1, cellWidth - padLeft - padRight);

      let cellHeight = 0;
      const cellMeasures: Measure[] = [];

      for (const cellBlock of cell.blocks) {
        if (cellBlock.kind === 'paragraph') {
          const m = measureParagraph(cellBlock as ParagraphBlock, cellContentWidth);
          cellHeight += m.totalHeight;
          cellMeasures.push(m);
        } else if (cellBlock.kind === 'table') {
          const m = measureTableBlockSimple(cellBlock as TableBlock, cellContentWidth);
          cellHeight += m.totalHeight;
          cellMeasures.push(m);
        }
      }

      // Add vertical padding
      const padTop = cell.padding?.top ?? DEFAULT_CELL_PADDING_Y;
      const padBottom = cell.padding?.bottom ?? DEFAULT_CELL_PADDING_Y;
      cellHeight += padTop + padBottom;

      return {
        width: cellWidth,
        height: cellHeight,
        blocks: cellMeasures,
        measures: cellMeasures,
      };
    });

    // Calculate max cell height for the row
    let maxCellHeight = 0;
    for (const cell of cells) {
      maxCellHeight = Math.max(maxCellHeight, cell.height);
    }

    // Apply heightRule from the source row
    if (row.height && row.heightRule === 'exact') {
      maxCellHeight = row.height;
    } else if (row.height && row.heightRule === 'atLeast') {
      maxCellHeight = Math.max(maxCellHeight, row.height);
    } else {
      maxCellHeight = Math.max(maxCellHeight, TABLE_MIN_ROW_HEIGHT);
    }

    return {
      cells,
      height: maxCellHeight,
    };
  });

  const totalHeight = rows.reduce((h, r) => h + r.height, 0);

  return {
    kind: 'table',
    rows,
    columnWidths,
    totalWidth,
    totalHeight,
  };
}

/**
 * Measure a single block.
 */
function measureBlock(block: FlowBlock, maxWidth: number): Measure {
  if (block.kind === 'paragraph') {
    return measureParagraph(block as ParagraphBlock, maxWidth);
  }

  if (block.kind === 'table') {
    return measureTableBlockSimple(block as TableBlock, maxWidth);
  }

  // For other block types, return minimal measure
  return {
    kind: 'paragraph',
    lines: [],
    totalHeight: 0,
  };
}

/**
 * Calculate total height from measurements.
 */
function calculateTotalHeight(measures: Measure[]): number {
  return measures.reduce((total, measure) => {
    if (measure.kind === 'paragraph') {
      return total + (measure as ParagraphMeasure).totalHeight;
    }
    if (measure.kind === 'table') {
      return total + (measure as TableMeasure).totalHeight;
    }
    return total;
  }, 0);
}

// =============================================================================
// MAIN FUNCTIONS
// =============================================================================

/**
 * Measure a single header or footer.
 *
 * @param headerFooter - The header/footer content to measure.
 * @param options - Measurement options.
 * @returns Measurement result with blocks, measures, and total height.
 */
export function measureHeaderFooter(
  headerFooter: HeaderFooter,
  options: MeasureHeaderFooterOptions
): HeaderFooterMeasurement {
  const { maxWidth } = options;

  // Convert content to flow blocks
  const blocks = contentToFlowBlocks(headerFooter.content);

  // Measure all blocks
  const measures = blocks.map((block) => measureBlock(block, maxWidth));

  // Calculate total height
  const totalHeight = calculateTotalHeight(measures);

  return {
    type: headerFooter.hdrFtrType,
    blocks,
    measures,
    totalHeight,
  };
}

/**
 * Measure all headers and footers for a section.
 *
 * @param headers - Map of header relationship IDs to HeaderFooter content.
 * @param footers - Map of footer relationship IDs to HeaderFooter content.
 * @param headerRefs - Header references in the section (rId + type).
 * @param footerRefs - Footer references in the section (rId + type).
 * @param options - Measurement options.
 * @returns All measurements organized by type.
 */
export function measureSectionHeadersFooters(
  headers: Map<string, HeaderFooter> | undefined,
  footers: Map<string, HeaderFooter> | undefined,
  headerRefs: Array<{ type: HeaderFooterType; rId: string }> | undefined,
  footerRefs: Array<{ type: HeaderFooterType; rId: string }> | undefined,
  options: MeasureHeaderFooterOptions
): SectionHeaderFooterMeasurements {
  const result: SectionHeaderFooterMeasurements = {
    headers: {},
    footers: {},
  };

  // Measure headers
  if (headers && headerRefs) {
    for (const ref of headerRefs) {
      const headerContent = headers.get(ref.rId);
      if (headerContent) {
        result.headers[ref.type] = measureHeaderFooter(headerContent, options);
      }
    }
  }

  // Measure footers
  if (footers && footerRefs) {
    for (const ref of footerRefs) {
      const footerContent = footers.get(ref.rId);
      if (footerContent) {
        result.footers[ref.type] = measureHeaderFooter(footerContent, options);
      }
    }
  }

  return result;
}

/**
 * Get the appropriate header/footer measurement for a specific page.
 *
 * @param measurements - All measurements for the section.
 * @param pageNumber - 1-indexed page number.
 * @param isFirstPage - Whether this is the first page of the section.
 * @param hasDifferentFirst - Whether the section has different first page header/footer.
 * @param hasDifferentEvenOdd - Whether the section has different even/odd headers/footers.
 * @returns The appropriate measurement, or undefined if none.
 */
export function getHeaderFooterForPage(
  measurements: Partial<Record<HeaderFooterType, HeaderFooterMeasurement>>,
  pageNumber: number,
  isFirstPage: boolean,
  hasDifferentFirst: boolean,
  hasDifferentEvenOdd: boolean
): HeaderFooterMeasurement | undefined {
  // First page
  if (isFirstPage && hasDifferentFirst && measurements.first) {
    return measurements.first;
  }

  // Even page (page 2, 4, 6, ...)
  if (hasDifferentEvenOdd && pageNumber % 2 === 0 && measurements.even) {
    return measurements.even;
  }

  // Default
  return measurements.default;
}

/**
 * Get the maximum header height across all variants.
 * Used when we need a single header height for all pages.
 */
export function getMaxHeaderHeight(
  measurements: Partial<Record<HeaderFooterType, HeaderFooterMeasurement>>
): number {
  let maxHeight = 0;

  for (const measurement of Object.values(measurements)) {
    if (measurement && measurement.totalHeight > maxHeight) {
      maxHeight = measurement.totalHeight;
    }
  }

  return maxHeight;
}

/**
 * Get the maximum footer height across all variants.
 * Used when we need a single footer height for all pages.
 */
export function getMaxFooterHeight(
  measurements: Partial<Record<HeaderFooterType, HeaderFooterMeasurement>>
): number {
  let maxHeight = 0;

  for (const measurement of Object.values(measurements)) {
    if (measurement && measurement.totalHeight > maxHeight) {
      maxHeight = measurement.totalHeight;
    }
  }

  return maxHeight;
}
