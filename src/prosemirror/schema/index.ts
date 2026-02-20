/**
 * ProseMirror Schema for DOCX Editor
 *
 * Lazy singleton ExtensionManager that builds the schema and initializes runtime
 * on first access. Legacy code imports `schema` and commands from here; new code
 * should use ExtensionManager directly.
 */

import { createStarterKit } from '../extensions/StarterKit';
import { ExtensionManager } from '../extensions/ExtensionManager';
import type { Schema } from 'prosemirror-model';

// Re-export type interfaces (used by toProseDoc, fromProseDoc, and other modules)
export type {
  ParagraphAttrs,
  ImageAttrs,
  ImagePositionAttrs,
  TableAttrs,
  TableRowAttrs,
  TableCellAttrs,
} from './nodes';
export type {
  TextColorAttrs,
  UnderlineAttrs,
  FontSizeAttrs,
  FontFamilyAttrs,
  HyperlinkAttrs,
} from './marks';

/**
 * Lazy singleton — only built on first access
 */
let _manager: ExtensionManager | null = null;
let _schema: Schema | null = null;

export function getSingletonManager(): ExtensionManager {
  if (!_manager) {
    _manager = new ExtensionManager(createStarterKit());
    _manager.buildSchema();
    _manager.initializeRuntime();
    _schema = _manager.getSchema();
  }
  return _manager;
}

function getSchema(): Schema {
  if (!_schema) {
    getSingletonManager();
  }
  return _schema!;
}

/**
 * Backwards-compatible exports — these are getters so the singleton is lazy
 */
export const singletonManager = new Proxy({} as ExtensionManager, {
  get(_target, prop, receiver) {
    return Reflect.get(getSingletonManager(), prop, receiver);
  },
});

export const schema = new Proxy({} as Schema, {
  get(_target, prop, receiver) {
    return Reflect.get(getSchema(), prop, receiver);
  },
});

/**
 * Export types for convenience
 */
export type DocxSchema = Schema;
export type DocxNode = ReturnType<Schema['node']>;
export type DocxMark = ReturnType<Schema['mark']>;
