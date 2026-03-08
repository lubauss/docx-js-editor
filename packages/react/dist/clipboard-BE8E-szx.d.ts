import React__default, { CSSProperties, ReactNode } from 'react';
import { e as Table, U as TableCell, b as Run, a as Paragraph } from './agentApi-DfsWRyrP.js';

/**
 * PageNumberIndicator Component
 *
 * Displays the current page number and total page count.
 * Can be used as a floating indicator or status bar element.
 */

/**
 * Position options for the indicator
 */
type PageIndicatorPosition =
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'top-left'
  | 'top-center'
  | 'top-right';
/**
 * Style variant for the indicator
 */
type PageIndicatorVariant = 'default' | 'minimal' | 'badge' | 'pill';
/**
 * Props for PageNumberIndicator
 */
interface PageNumberIndicatorProps {
  /** Current page number (1-indexed) */
  currentPage: number;
  /** Total number of pages */
  totalPages: number;
  /** Position of the indicator (default: 'bottom-center') */
  position?: PageIndicatorPosition;
  /** Style variant (default: 'default') */
  variant?: PageIndicatorVariant;
  /** Whether to show as floating overlay (default: true) */
  floating?: boolean;
  /** Whether to show "Page" prefix (default: true) */
  showPrefix?: boolean;
  /** Custom format function for the display text */
  formatText?: (current: number, total: number) => string;
  /** Callback when page number is clicked (for navigation) */
  onClick?: () => void;
  /** Whether the indicator is disabled */
  disabled?: boolean;
  /** Additional CSS class name */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
  /** Custom content (overrides default display) */
  children?: ReactNode;
}
/**
 * PageNumberIndicator - Displays current page and total pages
 */
declare function PageNumberIndicator({
  currentPage,
  totalPages,
  position,
  variant,
  floating,
  showPrefix,
  formatText,
  onClick,
  disabled,
  className,
  style,
  children,
}: PageNumberIndicatorProps): React__default.ReactElement;
/**
 * Format page number with ordinal suffix (1st, 2nd, 3rd, etc.)
 */
declare function formatPageOrdinal(page: number): string;
/**
 * Create a custom format function
 */
declare function createPageFormat(template: string): (current: number, total: number) => string;
/**
 * Get percentage progress through document
 */
declare function getPageProgress(current: number, total: number): number;
/**
 * Check if at first page
 */
declare function isFirstPage(current: number): boolean;
/**
 * Check if at last page
 */
declare function isLastPage(current: number, total: number): boolean;
/**
 * Calculate which page is visible given scroll position
 */
declare function calculateVisiblePage(
  scrollTop: number,
  pageHeights: number[],
  pageGap?: number
): number;
/**
 * Calculate scroll position to center a page
 */
declare function calculateScrollToPage(
  pageNumber: number,
  pageHeights: number[],
  containerHeight: number,
  pageGap?: number
): number;

/**
 * PageNavigator Component
 *
 * Provides UI for navigating between pages in a paginated document.
 * Includes:
 * - Previous/Next page buttons
 * - Current page display (clickable to show input)
 * - Page number input for direct navigation
 * - Keyboard navigation support
 */

/**
 * Position options for the navigator
 */
type PageNavigatorPosition =
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'top-left'
  | 'top-center'
  | 'top-right';
/**
 * Style variant for the navigator
 */
type PageNavigatorVariant = 'default' | 'compact' | 'minimal';
/**
 * Props for PageNavigator
 */
interface PageNavigatorProps {
  /** Current page number (1-indexed) */
  currentPage: number;
  /** Total number of pages */
  totalPages: number;
  /** Callback when page navigation is requested */
  onNavigate: (pageNumber: number) => void;
  /** Position of the navigator (default: 'bottom-center') */
  position?: PageNavigatorPosition;
  /** Style variant (default: 'default') */
  variant?: PageNavigatorVariant;
  /** Whether to show as floating overlay (default: true) */
  floating?: boolean;
  /** Whether to show previous/next buttons (default: true) */
  showButtons?: boolean;
  /** Whether the navigator is disabled */
  disabled?: boolean;
  /** Additional CSS class name */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
}
/**
 * PageNavigator - Navigation controls for paginated documents
 */
declare function PageNavigator({
  currentPage,
  totalPages,
  onNavigate,
  position,
  variant,
  floating,
  showButtons,
  disabled,
  className,
  style,
}: PageNavigatorProps): React__default.ReactElement;
/**
 * Calculate page number from keyboard input
 */
declare function parsePageInput(input: string): number | null;
/**
 * Validate page number
 */
declare function isValidPageNumber(page: number, totalPages: number): boolean;
/**
 * Clamp page number to valid range
 */
declare function clampPageNumber(page: number, totalPages: number): number;
/**
 * Get navigation info for keyboard shortcuts
 */
declare function getNavigationShortcuts(): Array<{
  key: string;
  description: string;
}>;
/**
 * Format page range for display
 */
declare function formatPageRange$1(start: number, end: number, total: number): string;
/**
 * Calculate progress percentage
 */
declare function calculateProgress(current: number, total: number): number;

/**
 * Print Utilities
 *
 * Provides print functionality with:
 * - Print button component for toolbar
 * - Print-specific CSS styles
 * - Browser print dialog trigger
 * - Page range utilities
 */

/**
 * Print options
 */
interface PrintOptions {
  /** Whether to include headers */
  includeHeaders?: boolean;
  /** Whether to include footers */
  includeFooters?: boolean;
  /** Whether to include page numbers */
  includePageNumbers?: boolean;
  /** Page range to print (null = all) */
  pageRange?: {
    start: number;
    end: number;
  } | null;
  /** Scale factor for printing (1.0 = 100%) */
  scale?: number;
  /** Whether to show background colors */
  printBackground?: boolean;
  /** Margins mode */
  margins?: 'default' | 'none' | 'minimum';
}
/**
 * PrintButton props
 */
interface PrintButtonProps {
  /** Callback when print is triggered */
  onPrint: () => void;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Button label */
  label?: string;
  /** Additional CSS class */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
  /** Show icon */
  showIcon?: boolean;
  /** Compact mode */
  compact?: boolean;
}
/**
 * PrintButton - Standalone print button for toolbar
 */
declare function PrintButton({
  onPrint,
  disabled,
  label,
  className,
  style,
  showIcon,
  compact,
}: PrintButtonProps): React__default.ReactElement;
/**
 * PrintStyles - Injects print-specific CSS
 */
declare function PrintStyles(): React__default.ReactElement;
/**
 * Trigger browser print dialog for the current document
 */
declare function triggerPrint(): void;
/**
 * Create print-optimized document view in a new window
 */
declare function openPrintWindow(title: string | undefined, content: string): Window | null;
/**
 * Get default print options
 */
declare function getDefaultPrintOptions(): PrintOptions;
/**
 * Create page range from string (e.g., "1-5", "3", "1,3,5")
 */
declare function parsePageRange(
  input: string,
  maxPages: number
): {
  start: number;
  end: number;
} | null;
/**
 * Format page range for display
 */
declare function formatPageRange(
  range: {
    start: number;
    end: number;
  } | null,
  totalPages: number
): string;
/**
 * Check if browser supports good print functionality
 */
declare function isPrintSupported(): boolean;

/**
 * TableToolbar Component
 *
 * Provides controls for editing tables:
 * - Add row above/below
 * - Add column left/right
 * - Delete row/column
 * - Merge cells
 * - Split cell
 *
 * Shows when cursor is in a table.
 */

/**
 * Table editing action types
 */
type TableAction =
  | 'addRowAbove'
  | 'addRowBelow'
  | 'addColumnLeft'
  | 'addColumnRight'
  | 'deleteRow'
  | 'deleteColumn'
  | 'mergeCells'
  | 'splitCell'
  | 'deleteTable'
  | 'selectTable'
  | 'selectRow'
  | 'selectColumn'
  | 'borderAll'
  | 'borderOutside'
  | 'borderInside'
  | 'borderNone'
  | 'borderTop'
  | 'borderBottom'
  | 'borderLeft'
  | 'borderRight'
  | {
      type: 'cellFillColor';
      color: string | null;
    }
  | {
      type: 'borderColor';
      color: string;
    }
  | {
      type: 'borderWidth';
      size: number;
    }
  | {
      type: 'cellBorder';
      side: 'top' | 'bottom' | 'left' | 'right' | 'all';
      style: string;
      size: number;
      color: string;
    }
  | {
      type: 'cellVerticalAlign';
      align: 'top' | 'center' | 'bottom';
    }
  | {
      type: 'cellMargins';
      margins: {
        top?: number;
        bottom?: number;
        left?: number;
        right?: number;
      };
    }
  | {
      type: 'cellTextDirection';
      direction: string | null;
    }
  | {
      type: 'toggleNoWrap';
    }
  | {
      type: 'rowHeight';
      height: number | null;
      rule?: 'auto' | 'atLeast' | 'exact';
    }
  | {
      type: 'toggleHeaderRow';
    }
  | {
      type: 'distributeColumns';
    }
  | {
      type: 'autoFitContents';
    }
  | {
      type: 'tableProperties';
      props: {
        width?: number | null;
        widthType?: string | null;
        justification?: 'left' | 'center' | 'right' | null;
      };
    }
  | {
      type: 'openTableProperties';
    }
  | {
      type: 'applyTableStyle';
      styleId: string;
    };
/**
 * Selection within a table
 */
interface TableSelection {
  /** Index of the table in the document */
  tableIndex: number;
  /** Row index (0-indexed) */
  rowIndex: number;
  /** Column index (0-indexed) */
  columnIndex: number;
  /** Selected cell range for multi-cell selection */
  selectedCells?: {
    startRow: number;
    startCol: number;
    endRow: number;
    endCol: number;
  };
}
/**
 * Context for table operations
 */
interface TableContext {
  /** The table being edited */
  table: Table;
  /** Current selection within the table */
  selection: TableSelection;
  /** Whether multiple cells are selected (for merge) */
  hasMultiCellSelection: boolean;
  /** Whether current cell can be split */
  canSplitCell: boolean;
  /** Total number of rows */
  rowCount: number;
  /** Total number of columns */
  columnCount: number;
}
/**
 * Props for TableToolbar component
 */
interface TableToolbarProps {
  /** Current table context (null if cursor not in table) */
  context: TableContext | null;
  /** Callback when a table action is triggered */
  onAction?: (action: TableAction, context: TableContext) => void;
  /** Whether the toolbar is disabled */
  disabled?: boolean;
  /** Additional CSS class name */
  className?: string;
  /** Additional inline styles */
  style?: CSSProperties;
  /** Show labels next to icons */
  showLabels?: boolean;
  /** Compact mode */
  compact?: boolean;
  /** Position of the toolbar */
  position?: 'top' | 'floating';
  /** Custom render for additional buttons */
  children?: ReactNode;
}
/**
 * TableToolbar - Shows table manipulation controls when cursor is in a table
 */
declare function TableToolbar({
  context,
  onAction,
  disabled,
  className,
  style,
  showLabels,
  compact,
  position,
  children,
}: TableToolbarProps): React__default.ReactElement | null;
/**
 * Create a table context from a table and selection
 */
declare function createTableContext(table: Table, selection: TableSelection): TableContext;
/**
 * Get column count from a table
 */
declare function getColumnCount(table: Table): number;
/**
 * Get cell at specific row and column index
 */
declare function getCellAt(table: Table, rowIndex: number, columnIndex: number): TableCell | null;
/**
 * Add a row to a table at the specified index
 */
declare function addRow(table: Table, atIndex: number, position?: 'before' | 'after'): Table;
/**
 * Delete a row from a table
 */
declare function deleteRow(table: Table, rowIndex: number): Table;
/**
 * Add a column to a table at the specified index
 */
declare function addColumn(table: Table, atIndex: number, position?: 'before' | 'after'): Table;
/**
 * Delete a column from a table
 */
declare function deleteColumn(table: Table, columnIndex: number): Table;
/**
 * Merge cells in a selection
 */
declare function mergeCells(table: Table, selection: TableSelection): Table;
/**
 * Split a merged cell
 */
declare function splitCell(table: Table, rowIndex: number, columnIndex: number): Table;

/**
 * Clipboard utilities for copy/paste with formatting
 *
 * Handles:
 * - Copy: puts formatted HTML and plain text on clipboard
 * - Paste: reads HTML clipboard, converts to runs with formatting
 * - Handles paste from Word (cleans up Word HTML)
 * - Ctrl+C, Ctrl+V, Ctrl+X keyboard shortcuts
 */

/**
 * Clipboard content format
 */
interface ClipboardContent {
  /** Plain text representation */
  plainText: string;
  /** HTML representation */
  html: string;
  /** Internal format (JSON) for preserving full formatting */
  internal?: string;
}
/**
 * Parsed clipboard content
 */
interface ParsedClipboardContent {
  /** Runs parsed from clipboard */
  runs: Run[];
  /** Whether content came from Word */
  fromWord: boolean;
  /** Whether content came from our editor */
  fromEditor: boolean;
  /** Original plain text */
  plainText: string;
}
/**
 * Options for clipboard operations
 */
interface ClipboardOptions {
  /** Whether to include formatting in copy */
  includeFormatting?: boolean;
  /** Whether to clean Word-specific formatting */
  cleanWordFormatting?: boolean;
  /** Callback for handling errors */
  onError?: (error: Error) => void;
}
/**
 * Custom MIME type for internal clipboard format
 */
declare const INTERNAL_CLIPBOARD_TYPE = 'application/x-docx-editor';
/**
 * Standard clipboard MIME types
 */
declare const CLIPBOARD_TYPES: {
  readonly HTML: 'text/html';
  readonly PLAIN: 'text/plain';
};
/**
 * Copy runs to clipboard with formatting
 */
declare function copyRuns(runs: Run[], options?: ClipboardOptions): Promise<boolean>;
/**
 * Copy paragraphs to clipboard with formatting
 */
declare function copyParagraphs(
  paragraphs: Paragraph[],
  options?: ClipboardOptions
): Promise<boolean>;
/**
 * Convert runs to clipboard content (HTML and plain text)
 */
declare function runsToClipboardContent(runs: Run[], includeFormatting?: boolean): ClipboardContent;
/**
 * Convert paragraphs to clipboard content
 */
declare function paragraphsToClipboardContent(
  paragraphs: Paragraph[],
  includeFormatting?: boolean
): ClipboardContent;
/**
 * Write content to clipboard
 */
declare function writeToClipboard(content: ClipboardContent): Promise<boolean>;
/**
 * Read content from clipboard
 */
declare function readFromClipboard(
  options?: ClipboardOptions
): Promise<ParsedClipboardContent | null>;
/**
 * Handle paste event
 */
declare function handlePasteEvent(
  event: ClipboardEvent,
  options?: ClipboardOptions
): ParsedClipboardContent | null;
/**
 * Parse HTML from clipboard
 */
declare function parseClipboardHtml(
  html: string,
  plainText: string,
  cleanWordFormatting?: boolean
): ParsedClipboardContent;
/**
 * Check if HTML is from Microsoft Word
 */
declare function isWordHtml(html: string): boolean;
/**
 * Check if HTML is from our editor
 */
declare function isEditorHtml(html: string): boolean;
/**
 * Clean Microsoft Word HTML
 */
declare function cleanWordHtml(html: string): string;
/**
 * Convert HTML to runs
 */
declare function htmlToRuns(html: string, plainTextFallback: string): Run[];
/**
 * Create clipboard keyboard handlers for an editor
 */
declare function createClipboardHandlers(options: {
  onCopy?: () => {
    runs: Run[];
  } | null;
  onCut?: () => {
    runs: Run[];
  } | null;
  onPaste?: (content: ParsedClipboardContent) => void;
  clipboardOptions?: ClipboardOptions;
}): {
  handleCopy: (event: ClipboardEvent) => Promise<void>;
  handleCut: (event: ClipboardEvent) => Promise<void>;
  handlePaste: (event: ClipboardEvent) => void;
  handleKeyDown: (event: KeyboardEvent) => Promise<void>;
};

export {
  openPrintWindow as $,
  copyRuns as A,
  createClipboardHandlers as B,
  CLIPBOARD_TYPES as C,
  createPageFormat as D,
  createTableContext as E,
  deleteColumn as F,
  deleteRow as G,
  formatPageOrdinal as H,
  INTERNAL_CLIPBOARD_TYPE as I,
  formatPageRange$1 as J,
  formatPageRange as K,
  getCellAt as L,
  getColumnCount as M,
  getDefaultPrintOptions as N,
  getNavigationShortcuts as O,
  type PageIndicatorPosition as P,
  getPageProgress as Q,
  handlePasteEvent as R,
  htmlToRuns as S,
  type TableAction as T,
  isEditorHtml as U,
  isFirstPage as V,
  isLastPage as W,
  isPrintSupported as X,
  isValidPageNumber as Y,
  isWordHtml as Z,
  mergeCells as _,
  type ClipboardContent as a,
  paragraphsToClipboardContent as a0,
  parseClipboardHtml as a1,
  parsePageInput as a2,
  parsePageRange as a3,
  readFromClipboard as a4,
  runsToClipboardContent as a5,
  splitCell as a6,
  triggerPrint as a7,
  writeToClipboard as a8,
  type ClipboardOptions as b,
  type PageIndicatorVariant as c,
  PageNavigator as d,
  type PageNavigatorPosition as e,
  type PageNavigatorProps as f,
  type PageNavigatorVariant as g,
  PageNumberIndicator as h,
  type PageNumberIndicatorProps as i,
  type ParsedClipboardContent as j,
  PrintButton as k,
  type PrintButtonProps as l,
  type PrintOptions as m,
  PrintStyles as n,
  type TableContext as o,
  type TableSelection as p,
  TableToolbar as q,
  type TableToolbarProps as r,
  addColumn as s,
  addRow as t,
  calculateProgress as u,
  calculateScrollToPage as v,
  calculateVisiblePage as w,
  clampPageNumber as x,
  cleanWordHtml as y,
  copyParagraphs as z,
};
