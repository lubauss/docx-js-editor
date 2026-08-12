import { describe, expect, test } from 'bun:test';

import { isSafeHyperlinkUrl } from './hyperlinkParser';
import { normalizeShapeRgbColor } from './shapeParser';

describe('DOCX renderer security', () => {
  test('accepts only renderer-safe hyperlink protocols', () => {
    expect(isSafeHyperlinkUrl('https://example.com/path')).toBe(true);
    expect(isSafeHyperlinkUrl('mailto:support@example.com')).toBe(true);
    expect(isSafeHyperlinkUrl('#bookmark_1')).toBe(true);
    expect(isSafeHyperlinkUrl('javascript:alert(1)')).toBe(false);
    expect(isSafeHyperlinkUrl('data:text/html,unsafe')).toBe(false);
    expect(isSafeHyperlinkUrl('https://user:password@example.com')).toBe(false);
  });

  test('normalizes only exact DrawingML RGB values', () => {
    expect(normalizeShapeRgbColor('a1b2c3')).toBe('A1B2C3');
    expect(normalizeShapeRgbColor('FF0000\" onload=\"alert(1)')).toBeUndefined();
    expect(normalizeShapeRgbColor('red')).toBeUndefined();
  });
});
