import { describe, expect, test } from 'bun:test';
import type { Mark } from 'prosemirror-model';

import { HyperlinkExtension } from './HyperlinkExtension';

function serializeHref(href: string) {
  const extension = HyperlinkExtension();
  const toDOM = extension.config.markSpec.toDOM;
  if (!toDOM) throw new Error('hyperlink mark has no serializer');
  return toDOM({ attrs: { href, tooltip: null, rId: null } } as unknown as Mark, false);
}

describe('HyperlinkExtension serialization', () => {
  test('keeps qualified and bookmark links interactive', () => {
    expect(serializeHref('https://example.com/evidence')).toEqual([
      'a',
      {
        href: 'https://example.com/evidence',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      0,
    ]);
    expect(serializeHref('#evidence')).toEqual([
      'a',
      { href: '#evidence', target: '_blank', rel: 'noopener noreferrer' },
      0,
    ]);
  });

  test('renders package-relative and active-content targets as passive text', () => {
    for (const href of [
      '../L1%20BRIEFING/evidence.md',
      'javascript:alert(1)',
      'data:text/html,unsafe',
    ]) {
      expect(serializeHref(href)).toEqual(['span', { 'data-docx-passive-hyperlink': 'true' }, 0]);
    }
  });
});
