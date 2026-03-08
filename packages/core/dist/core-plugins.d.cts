import { C as CorePlugin } from './types-BmzqJw_z.cjs';
export { b as CommandHandler, m as CommandResult, az as ExtractCommand, J as JsonSchema, x as LoadedDocument, y as McpSession, z as McpToolAnnotations, G as McpToolContent, K as McpToolContext, M as McpToolDefinition, aA as McpToolExample, N as McpToolHandler, O as McpToolResult, W as PluginCommand, b as PluginCommandHandler, X as PluginEvent, c as PluginEventListener, P as PluginOptions, a as PluginRegistrationResult, M as ToolDefinition, N as ToolHandler, O as ToolResult, aB as TypedCommandHandler, ac as ZodSchemaLike, ak as isZodSchema } from './types-BmzqJw_z.cjs';
export { P as PluginRegistry, c as createPluginRegistrar, p as pluginRegistry, r as registerPlugins } from './registry-CQEFMXeb.cjs';

/**
 * Docxtemplater Plugin
 *
 * Core plugin for template variable functionality using docxtemplater.
 *
 * **Command handlers** — `insertTemplateVariable` and `replaceWithTemplateVariable`
 * allow DocumentAgent to programmatically insert `{variable}` placeholders.
 *
 * @example
 * ```ts
 * import { pluginRegistry } from '@eigenpal/docx-editor/core-plugins';
 * import { docxtemplaterPlugin } from '@eigenpal/docx-editor/core-plugins/docxtemplater';
 *
 * pluginRegistry.register(docxtemplaterPlugin);
 * ```
 */

/**
 * Docxtemplater plugin for template variable functionality.
 *
 * Dependency validation is handled lazily by `processTemplate` at call time,
 * so no eager `initialize()` is needed.
 */
declare const docxtemplaterPlugin: CorePlugin;

export { CorePlugin, CorePlugin as Plugin, docxtemplaterPlugin };
