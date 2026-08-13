import { describe, expect, mock, test } from 'bun:test';
import type { Document } from '@eigenpal/docx-core/types/document';

import { saveEditorDocument } from './saveDocument';

function documentWith(text: string): Document {
  return {
    originalBuffer: new Uint8Array([1, 2, 3]).buffer,
    package: {
      document: {
        content: [
          {
            type: 'paragraph',
            content: [{ type: 'run', content: [{ type: 'text', text }] }],
          },
        ],
      },
    },
  };
}

describe('saveEditorDocument', () => {
  test('requests exact source preservation when no document or comment changed', async () => {
    const document = documentWith('original');
    const toBuffer = mock(async () => new Uint8Array([1, 2, 3]).buffer);

    await saveEditorDocument({
      agent: { getDocument: () => document, toBuffer },
      hasDocumentChanges: false,
      comments: [],
    });

    expect(toBuffer).toHaveBeenCalledWith({ preserveOriginal: true });
  });

  test('serializes the editor content when the document changed', async () => {
    const document = documentWith('original');
    const content = [
      {
        type: 'paragraph' as const,
        content: [{ type: 'run' as const, content: [{ type: 'text' as const, text: 'edited' }] }],
      },
    ];
    const toBuffer = mock(async () => new Uint8Array([4]).buffer);

    await saveEditorDocument({
      agent: { getDocument: () => document, toBuffer },
      hasDocumentChanges: true,
      comments: [],
      editorContent: content,
    });

    expect(document.package.document.content).toEqual(content);
    expect(toBuffer).toHaveBeenCalledWith({
      modifiedHeaderFooterIds: [],
      serializeComments: false,
    });
  });

  test('serializes comment-only changes instead of returning the original package', async () => {
    const document = documentWith('original');
    const toBuffer = mock(async () => new Uint8Array([4]).buffer);
    const comments = [
      {
        id: 1,
        author: 'Reviewer',
        content: [
          {
            type: 'paragraph' as const,
            content: [
              { type: 'run' as const, content: [{ type: 'text' as const, text: 'Review' }] },
            ],
          },
        ],
      },
    ];

    await saveEditorDocument({
      agent: { getDocument: () => document, toBuffer },
      hasDocumentChanges: false,
      comments,
    });

    expect(document.package.document.comments).toEqual(comments);
    expect(toBuffer).toHaveBeenCalledWith({
      modifiedHeaderFooterIds: [],
      serializeComments: true,
    });
  });

  test('forwards only the header and footer parts intentionally edited by the user', async () => {
    const document = documentWith('original');
    const toBuffer = mock(async () => new Uint8Array([4]).buffer);

    await saveEditorDocument({
      agent: { getDocument: () => document, toBuffer },
      hasDocumentChanges: true,
      comments: [],
      modifiedHeaderFooterIds: ['rId9'],
    });

    expect(toBuffer).toHaveBeenCalledWith({
      modifiedHeaderFooterIds: ['rId9'],
      serializeComments: false,
    });
  });
});
