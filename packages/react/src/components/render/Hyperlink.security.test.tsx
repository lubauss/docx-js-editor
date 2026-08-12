import { describe, expect, test } from 'bun:test';
import { renderToStaticMarkup } from 'react-dom/server';

import type { Hyperlink as HyperlinkType } from '@eigenpal/docx-core/types/document';
import { Hyperlink } from './Hyperlink';

function renderHref(href: string): string {
  const hyperlink: HyperlinkType = {
    type: 'hyperlink',
    href,
    children: [],
  };
  return renderToStaticMarkup(<Hyperlink hyperlink={hyperlink} />);
}

describe('Hyperlink renderer security', () => {
  test('omits active-content hrefs from rendered anchors', () => {
    const html = renderHref('javascript:alert(1)');
    expect(html).not.toContain('href=');
    expect(html).toContain('docx-hyperlink-disabled');
  });

  test('retains qualified HTTPS links with a fixed safe target', () => {
    const html = renderHref('https://example.com/evidence');
    expect(html).toContain('href="https://example.com/evidence"');
    expect(html).toContain('target="_blank"');
    expect(html).toContain('rel="noopener noreferrer"');
  });
});
