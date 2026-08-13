import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import JSZip from 'jszip';

import { DocumentAgent } from '../agent/DocumentAgent';
import { parseDocx } from './parser';
import { repackDocx } from './rezip';

function fixture(name: string): ArrayBuffer {
  const bytes = readFileSync(new URL(`../../../../e2e/fixtures/${name}`, import.meta.url));
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
}

async function entryBytes(zip: JSZip, path: string): Promise<Uint8Array> {
  const entry = zip.file(path);
  if (!entry) throw new Error(`missing fixture entry: ${path}`);
  return entry.async('uint8array');
}

function collectText(value: unknown, result: string[] = []): string[] {
  if (Array.isArray(value)) {
    for (const item of value) collectText(item, result);
    return result;
  }
  if (!value || typeof value !== 'object') return result;
  const record = value as Record<string, unknown>;
  if (record.type === 'text' && typeof record.text === 'string') result.push(record.text);
  for (const child of Object.values(record)) collectText(child, result);
  return result;
}

function replaceFirstText(value: unknown, from: string, to: string): boolean {
  if (Array.isArray(value)) {
    for (const item of value) if (replaceFirstText(item, from, to)) return true;
    return false;
  }
  if (!value || typeof value !== 'object') return false;
  const record = value as Record<string, unknown>;
  if (record.type === 'text' && record.text === from) {
    record.text = to;
    return true;
  }
  for (const child of Object.values(record)) {
    if (replaceFirstText(child, from, to)) return true;
  }
  return false;
}

function filePaths(zip: JSZip): string[] {
  return Object.values(zip.files)
    .filter((entry) => !entry.dir)
    .map((entry) => entry.name)
    .sort();
}

function semanticModel(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(semanticModel);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>)
      .filter(([key]) => key !== 'preserveSpace')
      .map(([key, child]) => [key, semanticModel(child)])
  );
}

describe('DOCX serializer fidelity', () => {
  test('returns exact accepted bytes when the editor has no changes', async () => {
    const source = fixture('example-with-image.docx');
    const document = await parseDocx(source, { preloadFonts: false });
    const agent = DocumentAgent.fromDocument(document);

    const saved = await agent.toBuffer({ preserveOriginal: true });

    expect(saved).not.toBe(source);
    expect(new Uint8Array(saved)).toEqual(new Uint8Array(source));
  });

  test('does not duplicate parsed images or mutate their relationships', async () => {
    const source = fixture('example-with-image.docx');
    const document = await parseDocx(source, { preloadFonts: false });
    const saved = await repackDocx(document, { updateModifiedDate: false });
    const [before, after] = await Promise.all([JSZip.loadAsync(source), JSZip.loadAsync(saved)]);

    const beforeMedia = Object.values(before.files)
      .filter((entry) => !entry.dir && entry.name.startsWith('word/media/'))
      .map((entry) => entry.name)
      .sort();
    const afterMedia = Object.values(after.files)
      .filter((entry) => !entry.dir && entry.name.startsWith('word/media/'))
      .map((entry) => entry.name)
      .sort();
    expect(afterMedia).toEqual(beforeMedia);
    for (const path of beforeMedia) {
      expect(await entryBytes(after, path)).toEqual(await entryBytes(before, path));
    }
    expect(await entryBytes(after, 'word/_rels/document.xml.rels')).toEqual(
      await entryBytes(before, 'word/_rels/document.xml.rels')
    );
  });

  test('changes only document.xml for a supported body-text edit', async () => {
    const source = fixture('styled-content.docx');
    const document = await parseDocx(source, { preloadFonts: false });
    const beforeText = collectText(document.package.document);
    expect(replaceFirstText(document.package.document, 'Normal text. ', 'Qualified edit. ')).toBe(
      true
    );

    const saved = await repackDocx(document, { updateModifiedDate: false });
    const [before, after] = await Promise.all([JSZip.loadAsync(source), JSZip.loadAsync(saved)]);
    expect(filePaths(after)).toEqual(filePaths(before));

    const changedEntries: string[] = [];
    for (const path of filePaths(before)) {
      const beforeEntry = await entryBytes(before, path);
      const afterEntry = await entryBytes(after, path);
      if (
        afterEntry.length !== beforeEntry.length ||
        !afterEntry.every((byte, index) => byte === beforeEntry[index])
      ) {
        changedEntries.push(path);
      }
    }
    expect(changedEntries).toEqual(['word/document.xml']);

    const reparsed = await parseDocx(saved, { preloadFonts: false });
    const afterText = collectText(reparsed.package.document);
    expect(afterText).toEqual(
      beforeText.map((text) => (text === 'Normal text. ' ? 'Qualified edit. ' : text))
    );
    expect(semanticModel(reparsed.package.document)).toEqual(
      semanticModel(document.package.document)
    );
  });

  test('preserves untouched footer and footnote parts during a body edit', async () => {
    const source = fixture('EP_ZMVZ_MULTI_v4.docx');
    const document = await parseDocx(source, { preloadFonts: false });
    const originalText = collectText(document.package.document)[0];
    expect(originalText).toBeTruthy();
    expect(replaceFirstText(document.package.document, originalText!, 'Qualified body edit')).toBe(
      true
    );

    const saved = await repackDocx(document, {
      updateModifiedDate: false,
      modifiedHeaderFooterIds: [],
      serializeComments: false,
    });
    const [before, after] = await Promise.all([JSZip.loadAsync(source), JSZip.loadAsync(saved)]);

    expect(await entryBytes(after, 'word/footer1.xml')).toEqual(
      await entryBytes(before, 'word/footer1.xml')
    );
    expect(await entryBytes(after, 'word/footnotes.xml')).toEqual(
      await entryBytes(before, 'word/footnotes.xml')
    );
  });
});
