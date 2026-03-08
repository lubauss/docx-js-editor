export { A as AgentContextOptions, S as ContextSelectionOptions, C as CreateEmptyDocumentOptions, D as DocumentAgent, E as ExtendedSelectionContext, F as FormattedTextSegment, a as FormattingSummary, I as InsertHyperlinkOptions, b as InsertImageOptions, c as InsertTableOptions, d as InsertTextOptions, P as ProcessTemplateOptions, e as ProcessTemplateResult, f as SelectionContextOptions, T as TemplateError, V as VariableDetectionResult, g as VariableOccurrence, h as blendColors, i as buildExtendedSelectionContext, j as buildSelectionContext, k as buildSelectionContextFromContext, l as colorsEqual, m as createAgent, n as createAgentFromDocument, o as createDocumentWithText, p as createDocx, q as createEmptyDocument, r as createRgbColor, s as createTemplateProcessor, t as createThemeColor, u as darkenColor, v as detectVariables, w as detectVariablesDetailed, x as detectVariablesInBody, y as detectVariablesInParagraph, z as documentHasVariables, B as emuToPixels, G as emuToTwips, H as executeCommand, J as executeCommands, K as extractVariablesFromText, L as formatPx, M as formatVariable, N as getAgentContext, O as getContrastingColor, Q as getDocumentSummary, R as getMissingVariables, U as getSelectionFormattingSummary, W as getTemplateTags, X as halfPointsToPixels, Y as hasTemplateVariables, Z as isBlack, _ as isValidVariableName, $ as isWhite, a0 as lightenColor, a1 as parseColorString, a2 as parseDocx, a3 as parseVariable, a4 as pixelsToEmu, a5 as pixelsToTwips, a6 as pointsToPixels, a7 as previewTemplate, a8 as processTemplate, a9 as processTemplateAdvanced, aa as processTemplateAsBlob, ab as processTemplateDetailed, ac as removeVariables, ad as repackDocx, ae as replaceVariables, af as resolveColor, ag as resolveHighlightColor, ah as resolveShadingColor, ai as sanitizeVariableName, aj as serializeDocumentBody, ak as serializeDocx, al as serializeSectionProperties, am as twipsToEmu, an as twipsToPixels, ao as validateTemplate } from './variableDetector-Bmz3FyBM.js';
import { D as DocumentBody, d as Paragraph, T as TextFormatting, H as Hyperlink, R as Run, e as Table, f as Position } from './types-BmzqJw_z.js';
export { A as AIAction, g as AIActionRequest, h as AgentCommand, i as AgentContext, j as AgentResponse, k as ApplyStyleCommand, l as ApplyVariablesCommand, B as BlockContent, b as CommandHandler, m as CommandResult, C as CorePlugin, n as DEFAULT_AI_ACTIONS, o as DeleteTextCommand, p as Document, q as DocxPackage, E as Endnote, F as Footnote, r as FormatParagraphCommand, s as FormatTextCommand, I as Image, t as InsertHyperlinkCommand, u as InsertImageCommand, v as InsertTableCommand, w as InsertTextCommand, J as JsonSchema, L as ListLevel, x as LoadedDocument, y as McpSession, z as McpToolAnnotations, G as McpToolContent, K as McpToolContext, M as McpToolDefinition, N as McpToolHandler, O as McpToolResult, Q as NumberingDefinitions, S as ParagraphContext, U as ParagraphFormatting, V as ParagraphOutline, C as Plugin, W as PluginCommand, b as PluginCommandHandler, X as PluginEvent, c as PluginEventListener, P as PluginOptions, a as PluginRegistrationResult, Y as Range, Z as Relationship, _ as ReplaceTextCommand, $ as RunContent, a0 as SectionInfo, a1 as SectionProperties, a2 as SelectionContext, a3 as SetVariableCommand, a4 as Style, a5 as StyleDefinitions, a6 as StyleInfo, a7 as SuggestedAction, a8 as TableCell, a9 as TableRow, aa as TextContent, ab as Theme, M as ToolDefinition, N as ToolHandler, O as ToolResult, ac as ZodSchemaLike, ad as comparePositions, ae as createCollapsedRange, af as createCommand, ag as createRange, ah as getActionDescription, ai as getActionLabel, aj as isPositionInRange, ak as isZodSchema } from './types-BmzqJw_z.js';
export { P as PluginRegistry, c as createPluginRegistrar, p as pluginRegistry, r as registerPlugins } from './registry-CPEr5utj.js';

/**
 * Shared Text Utilities for Agent Module
 *
 * Common text extraction and manipulation utilities used by
 * context.ts, selectionContext.ts, and other agent-related code.
 *
 * Consolidates duplicated helper functions into a single location.
 */

/**
 * Get plain text from a paragraph
 */
declare function getParagraphText(paragraph: Paragraph): string;
/**
 * Get plain text from a run
 */
declare function getRunText(run: Run): string;
/**
 * Get plain text from a hyperlink
 */
declare function getHyperlinkText(hyperlink: Hyperlink): string;
/**
 * Get plain text from a table
 */
declare function getTableText(table: Table): string;
/**
 * Get plain text from document body
 */
declare function getBodyText(body: DocumentBody): string;
/**
 * Count words in text
 */
declare function countWords(text: string): number;
/**
 * Count characters in text
 */
declare function countCharacters(text: string, includeSpaces?: boolean): number;
/**
 * Get word count from document body
 */
declare function getBodyWordCount(body: DocumentBody): number;
/**
 * Get character count from document body
 */
declare function getBodyCharacterCount(body: DocumentBody): number;
/**
 * Get text before a position
 *
 * @param paragraphs - Array of paragraphs
 * @param position - Position to get text before
 * @param maxChars - Maximum characters to return
 * @returns Text before the position
 */
declare function getTextBefore(paragraphs: Paragraph[], position: Position, maxChars: number): string;
/**
 * Get text after a position
 *
 * @param paragraphs - Array of paragraphs
 * @param position - Position to get text after
 * @param maxChars - Maximum characters to return
 * @returns Text after the position
 */
declare function getTextAfter(paragraphs: Paragraph[], position: Position, maxChars: number): string;
/**
 * Get formatting at a specific position in a paragraph
 *
 * @param paragraph - The paragraph to check
 * @param offset - Character offset in the paragraph
 * @returns Formatting at that position
 */
declare function getFormattingAtPosition(paragraph: Paragraph, offset: number): Partial<TextFormatting>;
/**
 * Check if position is within a hyperlink
 *
 * @param paragraph - The paragraph to check
 * @param offset - Character offset in the paragraph
 * @returns True if position is in a hyperlink
 */
declare function isPositionInHyperlink(paragraph: Paragraph, offset: number): boolean;
/**
 * Get hyperlink at position
 *
 * @param paragraph - The paragraph to check
 * @param offset - Character offset in the paragraph
 * @returns The hyperlink at that position, or undefined
 */
declare function getHyperlinkAtPosition(paragraph: Paragraph, offset: number): Hyperlink | undefined;
/**
 * Check if style ID represents a heading
 *
 * @param styleId - Style ID to check
 * @returns True if it's a heading style
 */
declare function isHeadingStyle(styleId?: string): boolean;
/**
 * Parse heading level from style ID
 *
 * @param styleId - Style ID to parse
 * @returns Heading level (1-9) or undefined
 */
declare function parseHeadingLevel(styleId?: string): number | undefined;
/**
 * Check if document body has images
 *
 * @param body - Document body to check
 * @returns True if contains images
 */
declare function hasImages(body: DocumentBody): boolean;
/**
 * Check if document body has hyperlinks
 *
 * @param body - Document body to check
 * @returns True if contains hyperlinks
 */
declare function hasHyperlinks(body: DocumentBody): boolean;
/**
 * Check if document body has tables
 *
 * @param body - Document body to check
 * @returns True if contains tables
 */
declare function hasTables(body: DocumentBody): boolean;
/**
 * Get all paragraphs from document body
 *
 * @param body - Document body
 * @returns Array of paragraphs
 */
declare function getParagraphs(body: DocumentBody): Paragraph[];
/**
 * Get paragraph at index from document body
 *
 * @param body - Document body
 * @param index - Paragraph index (0-indexed)
 * @returns Paragraph or undefined
 */
declare function getParagraphAtIndex(body: DocumentBody, index: number): Paragraph | undefined;
/**
 * Get block index for a paragraph index
 *
 * @param body - Document body
 * @param paragraphIndex - Paragraph index
 * @returns Block index or -1 if not found
 */
declare function getBlockIndexForParagraph(body: DocumentBody, paragraphIndex: number): number;

/**
 * Headless API Entry Point
 *
 * Provides document manipulation functionality without React/DOM dependencies.
 * Suitable for Node.js scripts, CLI tools, and server-side processing.
 *
 * @example
 * ```ts
 * import { DocumentAgent, parseDocx, pluginRegistry } from '@eigenpal/docx-editor/headless';
 * import { docxtemplaterPlugin } from '@eigenpal/docx-editor/core-plugins';
 *
 * // Register plugins
 * pluginRegistry.register(docxtemplaterPlugin);
 *
 * // Load and manipulate document
 * const buffer = fs.readFileSync('template.docx');
 * const agent = await DocumentAgent.fromBuffer(buffer);
 *
 * // Get document info
 * console.log('Word count:', agent.getWordCount());
 * console.log('Variables:', agent.getVariables());
 *
 * // Edit document
 * const newAgent = agent
 *   .insertText({ paragraphIndex: 0, offset: 0 }, 'Hello ')
 *   .applyStyle(0, 'Heading1');
 *
 * // Apply template variables
 * const finalAgent = await newAgent.applyVariables({
 *   customer_name: 'Jane Doe',
 *   date: '2024-02-15',
 * });
 *
 * // Export
 * const output = await finalAgent.toBuffer();
 * fs.writeFileSync('output.docx', Buffer.from(output));
 * ```
 */
declare const VERSION = "0.0.2";

export { DocumentBody, Hyperlink, Paragraph, Position, Run, Table, TextFormatting, VERSION, countCharacters, countWords, getBlockIndexForParagraph, getBodyCharacterCount, getBodyText, getBodyWordCount, getFormattingAtPosition, getHyperlinkAtPosition, getHyperlinkText, getParagraphAtIndex, getParagraphText, getParagraphs, getRunText, getTableText, getTextAfter, getTextBefore, hasHyperlinks, hasImages, hasTables, isHeadingStyle, isPositionInHyperlink, parseHeadingLevel };
