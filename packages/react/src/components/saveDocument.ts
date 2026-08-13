import type { BlockContent, Comment } from '@eigenpal/docx-core/types/content';
import type { Document } from '@eigenpal/docx-core/types/document';

export interface EditorExportAgent {
  getDocument(): Document;
  toBuffer(options?: { preserveOriginal?: boolean }): Promise<ArrayBuffer>;
}

export interface SaveEditorDocumentInput {
  agent: EditorExportAgent;
  hasDocumentChanges: boolean;
  comments: Comment[];
  editorContent?: BlockContent[];
}

export async function saveEditorDocument({
  agent,
  hasDocumentChanges,
  comments,
  editorContent,
}: SaveEditorDocumentInput): Promise<ArrayBuffer> {
  const document = agent.getDocument();
  const initialComments = document.package.document.comments ?? [];
  const commentsChanged = JSON.stringify(comments) !== JSON.stringify(initialComments);

  if (!hasDocumentChanges && !commentsChanged) {
    return agent.toBuffer({ preserveOriginal: true });
  }

  if (editorContent) document.package.document.content = editorContent;
  document.package.document.comments = comments;
  return agent.toBuffer();
}
