import { a as a$1 } from './chunk-E2R3YBZI.js';
import { d, e } from './chunk-PCVYGHUS.js';
import { l } from './chunk-RZSO673D.js';
import { b, a as a$2 } from './chunk-4FIPZCBR.js';
import { a } from './chunk-5XGN7UAV.js';
function Y() {
  return [
    {
      styleId: 'Normal',
      type: 'paragraph',
      name: 'Normal',
      default: true,
      qFormat: true,
      uiPriority: 0,
      rPr: { fontSize: 22, fontFamily: { ascii: 'Arial', hAnsi: 'Arial' } },
      pPr: { lineSpacing: 276 },
    },
    {
      styleId: 'Title',
      type: 'paragraph',
      name: 'Title',
      basedOn: 'Normal',
      next: 'Normal',
      qFormat: true,
      uiPriority: 10,
      rPr: { fontSize: 52, bold: true, fontFamily: { ascii: 'Arial', hAnsi: 'Arial' } },
      pPr: { lineSpacing: 240 },
    },
    {
      styleId: 'Subtitle',
      type: 'paragraph',
      name: 'Subtitle',
      basedOn: 'Normal',
      next: 'Normal',
      qFormat: true,
      uiPriority: 11,
      rPr: {
        fontSize: 30,
        color: { rgb: '666666' },
        fontFamily: { ascii: 'Arial', hAnsi: 'Arial' },
      },
      pPr: { lineSpacing: 240 },
    },
    {
      styleId: 'Heading1',
      type: 'paragraph',
      name: 'Heading 1',
      basedOn: 'Normal',
      next: 'Normal',
      qFormat: true,
      uiPriority: 9,
      rPr: { fontSize: 40, bold: true, fontFamily: { ascii: 'Arial', hAnsi: 'Arial' } },
      pPr: { spaceBefore: 400, spaceAfter: 120, lineSpacing: 240 },
    },
    {
      styleId: 'Heading2',
      type: 'paragraph',
      name: 'Heading 2',
      basedOn: 'Normal',
      next: 'Normal',
      qFormat: true,
      uiPriority: 9,
      rPr: { fontSize: 32, bold: true, fontFamily: { ascii: 'Arial', hAnsi: 'Arial' } },
      pPr: { spaceBefore: 360, spaceAfter: 80, lineSpacing: 240 },
    },
    {
      styleId: 'Heading3',
      type: 'paragraph',
      name: 'Heading 3',
      basedOn: 'Normal',
      next: 'Normal',
      qFormat: true,
      uiPriority: 9,
      rPr: { fontSize: 28, bold: true, fontFamily: { ascii: 'Arial', hAnsi: 'Arial' } },
      pPr: { spaceBefore: 320, spaceAfter: 80, lineSpacing: 240 },
    },
    {
      styleId: 'Heading4',
      type: 'paragraph',
      name: 'Heading 4',
      basedOn: 'Normal',
      next: 'Normal',
      qFormat: true,
      uiPriority: 9,
      rPr: { fontSize: 24, bold: true, fontFamily: { ascii: 'Arial', hAnsi: 'Arial' } },
      pPr: { spaceBefore: 280, spaceAfter: 80, lineSpacing: 240 },
    },
  ];
}
function J() {
  return {
    pageWidth: 12240,
    pageHeight: 15840,
    orientation: 'portrait',
    marginTop: 1440,
    marginBottom: 1440,
    marginLeft: 1440,
    marginRight: 1440,
    headerDistance: 720,
    footerDistance: 720,
    gutter: 0,
    columnCount: 1,
    columnSpace: 720,
    equalWidth: true,
    sectionStart: 'nextPage',
    verticalAlign: 'top',
  };
}
function Q(n = {}) {
  let t = J();
  (n.pageWidth !== void 0 && (t.pageWidth = n.pageWidth),
    n.pageHeight !== void 0 && (t.pageHeight = n.pageHeight),
    n.orientation !== void 0 && (t.orientation = n.orientation),
    n.marginTop !== void 0 && (t.marginTop = n.marginTop),
    n.marginBottom !== void 0 && (t.marginBottom = n.marginBottom),
    n.marginLeft !== void 0 && (t.marginLeft = n.marginLeft),
    n.marginRight !== void 0 && (t.marginRight = n.marginRight));
  let e = { type: 'text', text: n.initialText || '' };
  return {
    package: {
      document: {
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'run',
                content: n.initialText ? [e] : [],
                formatting: { fontSize: 22, fontFamily: { ascii: 'Arial', hAnsi: 'Arial' } },
              },
            ],
            formatting: { lineSpacing: 276 },
          },
        ],
        finalSectionProperties: t,
      },
      styles: {
        docDefaults: {
          rPr: { fontSize: 22, fontFamily: { ascii: 'Arial', hAnsi: 'Arial' } },
          pPr: { lineSpacing: 276 },
        },
        styles: Y(),
      },
    },
    templateVariables: [],
    warnings: [],
  };
}
function Bt(n, t = {}) {
  return Q({ ...t, initialText: n });
}
var k = class n {
  constructor(t) {
    a(this, '_document');
    a(this, '_pendingVariables');
    (t instanceof ArrayBuffer || ArrayBuffer.isView(t)
      ? (this._document = {
          package: { document: { content: [] } },
          originalBuffer: t instanceof ArrayBuffer ? t : t.buffer,
        })
      : (this._document = t),
      (this._pendingVariables = {}));
  }
  static async fromBuffer(t) {
    let e = await l(t);
    return new n(e);
  }
  static fromDocument(t) {
    return new n(t);
  }
  getDocument() {
    return this._document;
  }
  getText() {
    let t = this._document.package.document;
    return this._getBodyText(t);
  }
  getFormattedText() {
    let t = [],
      e = this._document.package.document;
    for (let r of e.content) r.type === 'paragraph' && this._extractParagraphSegments(r, t);
    return t;
  }
  getVariables() {
    return a$1(this._document);
  }
  getStyles() {
    let t = this._document.package.styles;
    if (!t?.styles) return [];
    let e = [];
    for (let [r, o] of Object.entries(t.styles))
      if (typeof o == 'object' && o !== null) {
        let a = o;
        e.push({
          id: r,
          name: a.name || r,
          type: a.type === 'numbering' ? 'paragraph' : a.type || 'paragraph',
          builtIn: a.default,
        });
      }
    return e;
  }
  getPageCount() {
    let t = this.getWordCount();
    return Math.max(1, Math.ceil(t / 500));
  }
  getWordCount() {
    return this.getText()
      .split(/\s+/)
      .filter((r) => r.length > 0).length;
  }
  getCharacterCount(t = true) {
    let e = this.getText();
    return t ? e.length : e.replace(/\s/g, '').length;
  }
  getParagraphCount() {
    return this._document.package.document.content.filter((t) => t.type === 'paragraph').length;
  }
  getTableCount() {
    return this._document.package.document.content.filter((t) => t.type === 'table').length;
  }
  getAgentContext(t = 100) {
    let e = this._document.package.document,
      r = e.content.filter((i) => i.type === 'paragraph'),
      o = r.map((i, s) => {
        let c = this._getParagraphText(i),
          u = i.formatting?.styleId;
        return {
          index: s,
          preview: c.slice(0, t),
          style: u,
          isHeading: u?.toLowerCase().includes('heading') || false,
          headingLevel: this._parseHeadingLevel(u),
          isListItem: !!i.listRendering,
          isEmpty: c.trim().length === 0,
        };
      }),
      a = (e.sections || []).map((i, s) => ({
        index: s,
        paragraphCount: i.content?.length || 0,
        pageSize:
          i.properties?.pageWidth && i.properties?.pageHeight
            ? { width: i.properties.pageWidth, height: i.properties.pageHeight }
            : void 0,
        isLandscape: i.properties?.orientation === 'landscape',
        hasHeader: !!i.properties?.headerReferences?.length,
        hasFooter: !!i.properties?.footerReferences?.length,
      }));
    return {
      paragraphCount: r.length,
      wordCount: this.getWordCount(),
      characterCount: this.getCharacterCount(),
      variables: this.getVariables(),
      variableCount: this.getVariables().length,
      availableStyles: this.getStyles(),
      outline: o,
      sections: a,
      hasTables: this.getTableCount() > 0,
      hasImages: this._hasImages(),
      hasHyperlinks: this._hasHyperlinks(),
    };
  }
  insertText(t, e, r = {}) {
    let o = { type: 'insertText', position: t, text: e, formatting: r.formatting };
    return this._executeCommand(o);
  }
  replaceRange(t, e, r = {}) {
    let o = { type: 'replaceText', range: t, text: e, formatting: r.formatting };
    return this._executeCommand(o);
  }
  deleteRange(t) {
    let e = { type: 'deleteText', range: t };
    return this._executeCommand(e);
  }
  applyFormatting(t, e) {
    let r = { type: 'formatText', range: t, formatting: e };
    return this._executeCommand(r);
  }
  applyStyle(t, e) {
    let r = { type: 'applyStyle', paragraphIndex: t, styleId: e };
    return this._executeCommand(r);
  }
  applyParagraphFormatting(t, e) {
    let r = { type: 'formatParagraph', paragraphIndex: t, formatting: e };
    return this._executeCommand(r);
  }
  insertTable(t, e, r, o = {}) {
    let a = {
      type: 'insertTable',
      position: t,
      rows: e,
      columns: r,
      data: o.data,
      hasHeader: o.hasHeader,
    };
    return this._executeCommand(a);
  }
  insertImage(t, e, r = {}) {
    let o = {
      type: 'insertImage',
      position: t,
      src: e,
      width: r.width,
      height: r.height,
      alt: r.alt,
    };
    return this._executeCommand(o);
  }
  insertHyperlink(t, e, r = {}) {
    let o = {
      type: 'insertHyperlink',
      range: t,
      url: e,
      displayText: r.displayText,
      tooltip: r.tooltip,
    };
    return this._executeCommand(o);
  }
  removeHyperlink(t) {
    let e = { type: 'removeHyperlink', range: t };
    return this._executeCommand(e);
  }
  insertParagraphBreak(t) {
    let e = { type: 'insertParagraphBreak', position: t };
    return this._executeCommand(e);
  }
  mergeParagraphs(t, e) {
    let r = { type: 'mergeParagraphs', paragraphIndex: t, count: e };
    return this._executeCommand(r);
  }
  setVariable(t, e) {
    return ((this._pendingVariables[t] = e), this);
  }
  setVariables(t) {
    for (let [e, r] of Object.entries(t)) this._pendingVariables[e] = r;
    return this;
  }
  getPendingVariables() {
    return { ...this._pendingVariables };
  }
  clearPendingVariables() {
    return ((this._pendingVariables = {}), this);
  }
  async applyVariables(t) {
    let e = { ...this._pendingVariables, ...t };
    if (Object.keys(e).length === 0) return this;
    let r = this._document.originalBuffer;
    if (!r) throw new Error('Cannot apply variables: no original buffer for processing');
    let { processTemplate: o } = await import('./processTemplate-P5AKLVQ5.js'),
      a = o(r, e),
      i = await l(a),
      s = new n(i);
    return ((s._pendingVariables = {}), s);
  }
  async toBuffer() {
    return this._document.originalBuffer ? d(this._document) : e(this._document);
  }
  async toBlob(t = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
    let e = await this.toBuffer();
    return new Blob([e], { type: t });
  }
  executeCommands(t) {
    return new n(b(this._document, t));
  }
  _executeCommand(t) {
    let e = new n(a$2(this._document, t));
    return ((e._pendingVariables = { ...this._pendingVariables }), e);
  }
  _getBodyText(t) {
    let e = [];
    for (let r of t.content)
      r.type === 'paragraph'
        ? e.push(this._getParagraphText(r))
        : r.type === 'table' && e.push(this._getTableText(r));
    return e.join(`
`);
  }
  _getParagraphText(t) {
    let e = [];
    for (let r of t.content)
      r.type === 'run'
        ? e.push(this._getRunText(r))
        : r.type === 'hyperlink' && e.push(this._getHyperlinkText(r));
    return e.join('');
  }
  _getRunText(t) {
    return t.content
      .filter((e) => e.type === 'text')
      .map((e) => e.text)
      .join('');
  }
  _getHyperlinkText(t) {
    let e = [];
    for (let r of t.children) r.type === 'run' && e.push(this._getRunText(r));
    return e.join('');
  }
  _getTableText(t) {
    let e = [];
    for (let r of t.rows)
      for (let o of r.cells)
        for (let a of o.content) a.type === 'paragraph' && e.push(this._getParagraphText(a));
    return e.join('	');
  }
  _extractParagraphSegments(t, e) {
    for (let r of t.content)
      if (r.type === 'run') {
        let o = this._getRunText(r);
        o && e.push({ text: o, formatting: r.formatting });
      } else if (r.type === 'hyperlink') {
        let o = r.href || '';
        for (let a of r.children)
          if (a.type === 'run') {
            let i = this._getRunText(a);
            i && e.push({ text: i, formatting: a.formatting, isHyperlink: true, hyperlinkUrl: o });
          }
      }
  }
  _parseHeadingLevel(t) {
    if (!t) return;
    let e = t.match(/heading\s*(\d)/i);
    if (e) return parseInt(e[1], 10);
  }
  _hasImages() {
    let t = this._document.package.document;
    for (let e of t.content)
      if (e.type === 'paragraph') {
        for (let r of e.content)
          if (r.type === 'run') {
            for (let o of r.content) if (o.type === 'drawing') return true;
          }
      }
    return false;
  }
  _hasHyperlinks() {
    let t = this._document.package.document;
    for (let e of t.content)
      if (e.type === 'paragraph') {
        for (let r of e.content) if (r.type === 'hyperlink') return true;
      }
    return false;
  }
};
async function jt(n) {
  return k.fromBuffer(n);
}
function Wt(n) {
  return k.fromDocument(n);
}
function Z(n, t = {}) {
  let { outlineMaxChars: e = 100, maxOutlineParagraphs: r = 50 } = t,
    o = n.package.document,
    a = o.content.filter((b) => b.type === 'paragraph'),
    i = tt(a, e, r),
    s = a$1(n),
    c = et(n),
    u = nt(o),
    l = rt(o),
    x = ot(o),
    f = o.content.some((b) => b.type === 'table'),
    y = st(o),
    p = ct(o);
  return {
    paragraphCount: a.length,
    wordCount: l,
    characterCount: x,
    variables: s,
    variableCount: s.length,
    availableStyles: c,
    outline: i,
    sections: u,
    hasTables: f,
    hasImages: y,
    hasHyperlinks: p,
  };
}
function Gt(n, t, e = {}) {
  let { contextChars: r = 200, includeSuggestions: o = true } = e,
    i = n.package.document.content.filter((d) => d.type === 'paragraph'),
    s = i[t.start.paragraphIndex];
  if (!s) throw new Error(`Paragraph not found at index ${t.start.paragraphIndex}`);
  let c = g(s),
    u = '';
  if (t.start.paragraphIndex === t.end.paragraphIndex) u = c.slice(t.start.offset, t.end.offset);
  else {
    let d = [];
    for (let T = t.start.paragraphIndex; T <= t.end.paragraphIndex; T++) {
      let L = i[T];
      if (!L) continue;
      let E = g(L);
      T === t.start.paragraphIndex
        ? d.push(E.slice(t.start.offset))
        : T === t.end.paragraphIndex
          ? d.push(E.slice(0, t.end.offset))
          : d.push(E);
    }
    u = d.join(`
`);
  }
  let l = pt(i, t.start.paragraphIndex, t.start.offset, r),
    x = gt(i, t.end.paragraphIndex, t.end.offset, r),
    f = mt(s, t.start.offset),
    y = s.formatting || {},
    p = {
      index: t.start.paragraphIndex,
      fullText: c,
      style: s.formatting?.styleId,
      wordCount: B(c),
    },
    b = false,
    D = ft(s, t.start.offset),
    R = o ? dt(u) : [];
  return {
    selectedText: u,
    range: t,
    formatting: f,
    paragraphFormatting: y,
    textBefore: l,
    textAfter: x,
    paragraph: p,
    inTable: b,
    inHyperlink: D,
    suggestedActions: R,
  };
}
function U(n) {
  let t = Z(n, { outlineMaxChars: 50, maxOutlineParagraphs: 10 }),
    e = [`Document with ${t.paragraphCount} paragraphs, ${t.wordCount} words.`];
  (t.hasTables && e.push('Contains tables.'),
    t.hasImages && e.push('Contains images.'),
    t.hasHyperlinks && e.push('Contains hyperlinks.'),
    t.variableCount > 0 &&
      e.push(`Has ${t.variableCount} template variables: ${t.variables.join(', ')}`));
  let r = t.outline.filter((o) => o.isHeading);
  if (r.length > 0) {
    e.push(`
Headings:`);
    for (let o of r.slice(0, 5)) {
      let a = o.headingLevel || 1;
      e.push(`${'  '.repeat(a - 1)}- ${o.preview}`);
    }
    r.length > 5 && e.push(`  ... and ${r.length - 5} more headings`);
  }
  return e.join(' ');
}
function tt(n, t, e) {
  let r = [];
  for (let o = 0; o < Math.min(n.length, e); o++) {
    let a = n[o],
      i = g(a),
      s = a.formatting?.styleId;
    r.push({
      index: o,
      preview: i.slice(0, t),
      style: s,
      isHeading: ut(s),
      headingLevel: lt(s),
      isListItem: !!a.listRendering,
      isEmpty: i.trim().length === 0,
    });
  }
  return r;
}
function et(n) {
  let t = n.package.styles;
  if (!t?.styles) return [];
  let e = [];
  for (let [r, o] of Object.entries(t.styles))
    if (typeof o == 'object' && o !== null) {
      let a = o;
      e.push({
        id: r,
        name: a.name || r,
        type: a.type === 'numbering' ? 'paragraph' : a.type || 'paragraph',
        builtIn: a.default,
      });
    }
  return e;
}
function nt(n) {
  return n.sections
    ? n.sections.map((t, e) => ({
        index: e,
        paragraphCount: t.content?.length || 0,
        pageSize:
          t.properties?.pageWidth && t.properties?.pageHeight
            ? { width: t.properties.pageWidth, height: t.properties.pageHeight }
            : void 0,
        isLandscape: t.properties?.orientation === 'landscape',
        hasHeader: !!t.properties?.headerReferences?.length,
        hasFooter: !!t.properties?.footerReferences?.length,
      }))
    : [];
}
function rt(n) {
  let t = 0;
  for (let e of n.content)
    if (e.type === 'paragraph') {
      let r = g(e);
      t += B(r);
    } else e.type === 'table' && (t += at(e));
  return t;
}
function B(n) {
  return n.split(/\s+/).filter((e) => e.length > 0).length;
}
function ot(n) {
  let t = 0;
  for (let e of n.content)
    if (e.type === 'paragraph') {
      let r = g(e);
      t += r.length;
    } else e.type === 'table' && (t += it(e));
  return t;
}
function at(n) {
  let t = 0;
  for (let e of n.rows)
    for (let r of e.cells)
      for (let o of r.content)
        if (o.type === 'paragraph') {
          let a = g(o);
          t += B(a);
        }
  return t;
}
function it(n) {
  let t = 0;
  for (let e of n.rows)
    for (let r of e.cells)
      for (let o of r.content)
        if (o.type === 'paragraph') {
          let a = g(o);
          t += a.length;
        }
  return t;
}
function g(n) {
  let t = [];
  for (let e of n.content) e.type === 'run' ? t.push(I(e)) : e.type === 'hyperlink' && t.push(O(e));
  return t.join('');
}
function I(n) {
  return n.content
    .filter((t) => t.type === 'text')
    .map((t) => t.text)
    .join('');
}
function O(n) {
  let t = [];
  for (let e of n.children) e.type === 'run' && t.push(I(e));
  return t.join('');
}
function st(n) {
  for (let t of n.content)
    if (t.type === 'paragraph') {
      for (let e of t.content)
        if (e.type === 'run') {
          for (let r of e.content) if (r.type === 'drawing') return true;
        }
    }
  return false;
}
function ct(n) {
  for (let t of n.content)
    if (t.type === 'paragraph') {
      for (let e of t.content) if (e.type === 'hyperlink') return true;
    }
  return false;
}
function ut(n) {
  return n ? n.toLowerCase().includes('heading') : false;
}
function lt(n) {
  if (!n) return;
  let t = n.match(/heading\s*(\d)/i);
  if (t) return parseInt(t[1], 10);
}
function pt(n, t, e, r) {
  let o = [],
    a = 0,
    i = n[t];
  if (i) {
    let u = g(i).slice(0, e);
    (o.unshift(u), (a += u.length));
  }
  for (let c = t - 1; c >= 0 && a < r; c--) {
    let u = n[c];
    if (!u) continue;
    let l = g(u);
    (o.unshift(l), (a += l.length));
  }
  let s = o.join(`
`);
  return s.length > r ? '...' + s.slice(-r) : s;
}
function gt(n, t, e, r) {
  let o = [],
    a = 0,
    i = n[t];
  if (i) {
    let u = g(i).slice(e);
    (o.push(u), (a += u.length));
  }
  for (let c = t + 1; c < n.length && a < r; c++) {
    let u = n[c];
    if (!u) continue;
    let l = g(u);
    (o.push(l), (a += l.length));
  }
  let s = o.join(`
`);
  return s.length > r ? s.slice(0, r) + '...' : s;
}
function mt(n, t) {
  let e = 0;
  for (let r of n.content)
    if (r.type === 'run') {
      let o = I(r),
        a = e,
        i = e + o.length;
      if (t >= a && t < i) return r.formatting || {};
      e = i;
    } else if (r.type === 'hyperlink') {
      let o = O(r),
        a = e,
        i = e + o.length;
      if (t >= a && t < i) {
        for (let s of r.children) if (s.type === 'run') return s.formatting || {};
      }
      e = i;
    }
  return {};
}
function ft(n, t) {
  let e = 0;
  for (let r of n.content)
    if (r.type === 'run') {
      let o = I(r);
      e += o.length;
    } else if (r.type === 'hyperlink') {
      let o = O(r),
        a = e,
        i = e + o.length;
      if (t >= a && t < i) return true;
      e = i;
    }
  return false;
}
function dt(n, t, e) {
  let r = [];
  return (
    n.length > 0 &&
      (r.push(
        { id: 'rewrite', label: 'Rewrite', description: 'Rewrite this text', priority: 10 },
        { id: 'summarize', label: 'Summarize', description: 'Summarize this text', priority: 9 }
      ),
      n.length > 200 &&
        r.push({
          id: 'summarize',
          label: 'Summarize',
          description: 'Create a shorter version',
          priority: 8,
        }),
      n.length < 50 &&
        n.split(/\s+/).length < 10 &&
        r.push({ id: 'expand', label: 'Expand', description: 'Add more details', priority: 8 }),
      r.push({
        id: 'fixGrammar',
        label: 'Fix Grammar',
        description: 'Fix grammar and spelling',
        priority: 7,
      }),
      r.push({
        id: 'translate',
        label: 'Translate',
        description: 'Translate to another language',
        priority: 6,
      }),
      r.push(
        { id: 'makeFormal', label: 'Make Formal', description: 'Use formal tone', priority: 5 },
        { id: 'makeCasual', label: 'Make Casual', description: 'Use casual tone', priority: 4 }
      )),
    r.sort((o, a) => (a.priority || 0) - (o.priority || 0)),
    r
  );
}
function ht(n, t, e = {}) {
  let { contextCharsBefore: r = 200, contextCharsAfter: o = 200, includeSuggestions: a = true } = e,
    i = n.package.document,
    s = i.content.filter((d) => d.type === 'paragraph');
  if (t.start.paragraphIndex >= s.length)
    throw new Error(`Invalid start paragraph index: ${t.start.paragraphIndex}`);
  let c = s[t.start.paragraphIndex],
    u = xt(s, t),
    l = yt(s, t.start, r),
    x = bt(s, t.end, o),
    f = Ct(c, t.start.offset),
    y = c.formatting || {},
    p = {
      index: t.start.paragraphIndex,
      fullText: h(c),
      style: c.formatting?.styleId,
      wordCount: V(h(c)),
    },
    b = Pt(i, t.start),
    D = St(c, t.start.offset),
    R = a ? kt(u) : [];
  return {
    selectedText: u,
    range: t,
    formatting: f,
    paragraphFormatting: y,
    textBefore: l,
    textAfter: x,
    paragraph: p,
    inTable: b,
    inHyperlink: D,
    suggestedActions: R,
  };
}
function Kt(n, t, e = {}) {
  let r = ht(n, t, e),
    { includeDocumentSummary: o = true } = e,
    i = n.package.document.content.filter((p) => p.type === 'paragraph'),
    s = V(r.selectedText),
    c = r.selectedText.length,
    u = t.start.paragraphIndex !== t.end.paragraphIndex,
    l = [];
  for (let p = t.start.paragraphIndex; p <= t.end.paragraphIndex; p++) l.push(p);
  let x = It(i, t),
    f = o ? U(n) : void 0,
    y = At(r.selectedText);
  return {
    ...r,
    documentSummary: f,
    wordCount: s,
    characterCount: c,
    isMultiParagraph: u,
    paragraphIndices: l,
    detectedLanguage: y,
    contentType: x,
  };
}
function Yt(n, t) {
  let r = n.package.document.content.filter((s) => s.type === 'paragraph'),
    o = [];
  for (let s = t.start.paragraphIndex; s <= t.end.paragraphIndex; s++) {
    let c = r[s];
    if (!c) continue;
    let u = s === t.start.paragraphIndex ? t.start.offset : 0,
      l = s === t.end.paragraphIndex ? t.end.offset : 1 / 0;
    Tt(c, u, l, o);
  }
  let a = o.length <= 1 || o.every((s) => _t(s, o[0]));
  return { predominant: o.length > 0 ? o[0] : {}, isConsistent: a, allFormatting: o };
}
function xt(n, t) {
  if (t.start.paragraphIndex === t.end.paragraphIndex) {
    let r = n[t.start.paragraphIndex];
    return r ? h(r).slice(t.start.offset, t.end.offset) : '';
  }
  let e = [];
  for (let r = t.start.paragraphIndex; r <= t.end.paragraphIndex; r++) {
    let o = n[r];
    if (!o) continue;
    let a = h(o);
    r === t.start.paragraphIndex
      ? e.push(a.slice(t.start.offset))
      : r === t.end.paragraphIndex
        ? e.push(a.slice(0, t.end.offset))
        : e.push(a);
  }
  return e.join(`
`);
}
function yt(n, t, e) {
  let r = [],
    o = 0,
    a = n[t.paragraphIndex];
  if (a) {
    let c = h(a).slice(0, t.offset);
    (r.unshift(c), (o += c.length));
  }
  for (let s = t.paragraphIndex - 1; s >= 0 && o < e; s--) {
    let c = n[s];
    if (!c) continue;
    let u = h(c);
    (r.unshift(u), (o += u.length));
  }
  let i = r.join(`
`);
  return i.length > e ? '...' + i.slice(-e) : i;
}
function bt(n, t, e) {
  let r = [],
    o = 0,
    a = n[t.paragraphIndex];
  if (a) {
    let c = h(a).slice(t.offset);
    (r.push(c), (o += c.length));
  }
  for (let s = t.paragraphIndex + 1; s < n.length && o < e; s++) {
    let c = n[s];
    if (!c) continue;
    let u = h(c);
    (r.push(u), (o += u.length));
  }
  let i = r.join(`
`);
  return i.length > e ? i.slice(0, e) + '...' : i;
}
function Ct(n, t) {
  let e = 0;
  for (let r of n.content)
    if (r.type === 'run') {
      let o = P(r),
        a = e + o.length;
      if (t >= e && t < a) return r.formatting || {};
      e = a;
    } else if (r.type === 'hyperlink') {
      let o = A(r),
        a = e + o.length;
      if (t >= e && t < a) {
        for (let i of r.children) if (i.type === 'run') return i.formatting || {};
      }
      e = a;
    }
  return {};
}
function Tt(n, t, e, r) {
  let o = 0;
  for (let a of n.content)
    if (a.type === 'run') {
      let i = P(a),
        s = o,
        c = o + i.length;
      (c > t && s < e && a.formatting && r.push({ ...a.formatting }), (o = c));
    } else if (a.type === 'hyperlink') {
      let i = A(a),
        s = o,
        c = o + i.length;
      if (c > t && s < e)
        for (let u of a.children) u.type === 'run' && u.formatting && r.push({ ...u.formatting });
      o = c;
    }
}
function Pt(n, t) {
  return false;
}
function St(n, t) {
  let e = 0;
  for (let r of n.content)
    if (r.type === 'run') {
      let o = P(r);
      e += o.length;
    } else if (r.type === 'hyperlink') {
      let o = A(r),
        a = e,
        i = e + o.length;
      if (t >= a && t < i) return true;
      e = i;
    }
  return false;
}
function kt(n, t, e) {
  let r = [];
  if (!n || n.trim().length === 0) return r;
  r.push(
    { id: 'askAI', label: 'Ask AI', description: 'Ask AI about this text', priority: 11 },
    { id: 'rewrite', label: 'Rewrite', description: 'Rewrite this text differently', priority: 10 }
  );
  let o = V(n);
  return (
    o > 50 &&
      r.push({
        id: 'summarize',
        label: 'Summarize',
        description: 'Create a shorter version',
        priority: 9,
      }),
    o < 20 &&
      r.push({ id: 'expand', label: 'Expand', description: 'Add more details', priority: 9 }),
    r.push(
      {
        id: 'fixGrammar',
        label: 'Fix Grammar',
        description: 'Fix grammar and spelling',
        priority: 7,
      },
      {
        id: 'translate',
        label: 'Translate',
        description: 'Translate to another language',
        priority: 6,
      },
      { id: 'explain', label: 'Explain', description: 'Explain what this means', priority: 5 }
    ),
    r.push(
      { id: 'makeFormal', label: 'Make Formal', description: 'Use formal tone', priority: 4 },
      { id: 'makeCasual', label: 'Make Casual', description: 'Use casual tone', priority: 3 }
    ),
    r.sort((a, i) => (i.priority || 0) - (a.priority || 0)),
    r
  );
}
function It(n, t) {
  let e = new Set();
  for (let r = t.start.paragraphIndex; r <= t.end.paragraphIndex; r++) {
    let o = n[r];
    o &&
      (o.listRendering
        ? e.add('list')
        : o.formatting?.styleId?.toLowerCase().includes('heading')
          ? e.add('heading')
          : e.add('prose'));
  }
  return e.size > 1 ? 'mixed' : e.has('list') ? 'list' : e.has('heading') ? 'heading' : 'prose';
}
function At(n) {
  return /[а-яА-ЯёЁ]/.test(n)
    ? 'ru'
    : /[一-龯]/.test(n)
      ? 'zh'
      : /[ひらがなカタカナ]/.test(n) || /[\u3040-\u309F\u30A0-\u30FF]/.test(n)
        ? 'ja'
        : /[가-힣]/.test(n)
          ? 'ko'
          : /[àâäéèêëïîôùûüç]/i.test(n)
            ? 'fr'
            : /[äöüß]/i.test(n)
              ? 'de'
              : /[áéíóúñ]/i.test(n)
                ? 'es'
                : 'en';
}
function h(n) {
  let t = [];
  for (let e of n.content) e.type === 'run' ? t.push(P(e)) : e.type === 'hyperlink' && t.push(A(e));
  return t.join('');
}
function P(n) {
  return n.content
    .filter((t) => t.type === 'text')
    .map((t) => t.text)
    .join('');
}
function A(n) {
  let t = [];
  for (let e of n.children) e.type === 'run' && t.push(P(e));
  return t.join('');
}
function V(n) {
  return n.split(/\s+/).filter((t) => t.length > 0).length;
}
function _t(n, t) {
  let e = Object.keys(n),
    r = Object.keys(t);
  return e.length !== r.length
    ? false
    : e.every((o) => {
        let a = n[o],
          i = t[o];
        return a === i;
      });
}
function Qt(n) {
  return (n / 1440) * 96;
}
function Zt(n) {
  return (n / 96) * 1440;
}
function te(n) {
  return (n / 914400) * 96;
}
function ee(n) {
  return (n / 96) * 914400;
}
function ne(n) {
  return (n / 914400) * 1440;
}
function re(n) {
  return (n / 1440) * 914400;
}
function oe(n) {
  return (n / 72) * 96;
}
function ae(n) {
  return (n / 144) * 96;
}
function Ft(n, t = 2) {
  let e = Math.pow(10, t);
  return Math.round(n * e) / e;
}
function ie(n) {
  return `${Ft(n)}px`;
}
var _ = {
    dk1: '000000',
    lt1: 'FFFFFF',
    dk2: '44546A',
    lt2: 'E7E6E6',
    accent1: '4472C4',
    accent2: 'ED7D31',
    accent3: 'A5A5A5',
    accent4: 'FFC000',
    accent5: '5B9BD5',
    accent6: '70AD47',
    hlink: '0563C1',
    folHlink: '954F72',
  },
  Ht = {
    black: '000000',
    blue: '0000FF',
    cyan: '00FFFF',
    darkBlue: '00008B',
    darkCyan: '008B8B',
    darkGray: 'A9A9A9',
    darkGreen: '006400',
    darkMagenta: '8B008B',
    darkRed: '8B0000',
    darkYellow: '808000',
    green: '00FF00',
    lightGray: 'D3D3D3',
    magenta: 'FF00FF',
    red: 'FF0000',
    white: 'FFFFFF',
    yellow: 'FFFF00',
    none: '',
  },
  N = {
    dk1: 'dk1',
    lt1: 'lt1',
    dk2: 'dk2',
    lt2: 'lt2',
    accent1: 'accent1',
    accent2: 'accent2',
    accent3: 'accent3',
    accent4: 'accent4',
    accent5: 'accent5',
    accent6: 'accent6',
    hlink: 'hlink',
    folHlink: 'folHlink',
    dark1: 'dk1',
    light1: 'lt1',
    dark2: 'dk2',
    light2: 'lt2',
    hyperlink: 'hlink',
    followedHyperlink: 'folHlink',
    background1: 'lt1',
    text1: 'dk1',
    background2: 'lt2',
    text2: 'dk2',
    tx1: 'dk1',
    tx2: 'dk2',
    bg1: 'lt1',
    bg2: 'lt2',
  };
function G(n) {
  if (!n) return 1;
  let t = parseInt(n, 16);
  return isNaN(t) ? 1 : t / 255;
}
function C(n) {
  let t = n.padStart(6, '0').slice(0, 6),
    e = parseInt(t.slice(0, 2), 16),
    r = parseInt(t.slice(2, 4), 16),
    o = parseInt(t.slice(4, 6), 16);
  return { r: isNaN(e) ? 0 : e, g: isNaN(r) ? 0 : r, b: isNaN(o) ? 0 : o };
}
function M(n, t, e) {
  let r = (o) =>
    Math.max(0, Math.min(255, Math.round(o)))
      .toString(16)
      .padStart(2, '0');
  return `${r(n)}${r(t)}${r(e)}`.toUpperCase();
}
function X(n, t, e) {
  ((n /= 255), (t /= 255), (e /= 255));
  let r = Math.max(n, t, e),
    o = Math.min(n, t, e),
    a = (r + o) / 2;
  if (r === o) return { h: 0, s: 0, l: a };
  let i = r - o,
    s = a > 0.5 ? i / (2 - r - o) : i / (r + o),
    c;
  switch (r) {
    case n:
      c = ((t - e) / i + (t < e ? 6 : 0)) / 6;
      break;
    case t:
      c = ((e - n) / i + 2) / 6;
      break;
    case e:
      c = ((n - t) / i + 4) / 6;
      break;
    default:
      c = 0;
  }
  return { h: c * 360, s, l: a };
}
function q(n, t, e) {
  if (((n = n / 360), t === 0)) {
    let i = Math.round(e * 255);
    return { r: i, g: i, b: i };
  }
  let r = (i, s, c) => (
      c < 0 && (c += 1),
      c > 1 && (c -= 1),
      c < 1 / 6
        ? i + (s - i) * 6 * c
        : c < 1 / 2
          ? s
          : c < 2 / 3
            ? i + (s - i) * (2 / 3 - c) * 6
            : i
    ),
    o = e < 0.5 ? e * (1 + t) : e + t - e * t,
    a = 2 * e - o;
  return {
    r: Math.round(r(a, o, n + 1 / 3) * 255),
    g: Math.round(r(a, o, n) * 255),
    b: Math.round(r(a, o, n - 1 / 3) * 255),
  };
}
function F(n, t) {
  if (t <= 0 || t >= 1) return t >= 1 ? 'FFFFFF' : n;
  let e = C(n),
    r = X(e.r, e.g, e.b);
  r.l = r.l + (1 - r.l) * t;
  let o = q(r.h, r.s, r.l);
  return M(o.r, o.g, o.b);
}
function H(n, t) {
  if (t <= 0 || t >= 1) return t <= 0 ? '000000' : n;
  let e = C(n),
    r = X(e.r, e.g, e.b);
  r.l = r.l * t;
  let o = q(r.h, r.s, r.l);
  return M(o.r, o.g, o.b);
}
function Dt(n, t) {
  let e = N[t] ?? t,
    r = [
      'dk1',
      'lt1',
      'dk2',
      'lt2',
      'accent1',
      'accent2',
      'accent3',
      'accent4',
      'accent5',
      'accent6',
      'hlink',
      'folHlink',
    ],
    o = (a) => r.includes(a);
  return n?.colorScheme
    ? o(e)
      ? (n.colorScheme[e] ?? _[e] ?? '000000')
      : '000000'
    : o(e)
      ? (_[e] ?? '000000')
      : '000000';
}
function K(n) {
  if (!n) return null;
  let t = n.toLowerCase();
  return N[n] ?? N[t] ?? null;
}
function m(n, t, e = '000000') {
  if (!n) return `#${e}`;
  if (n.auto) return `#${e}`;
  let r;
  if (n.themeColor) {
    let o = K(n.themeColor);
    if ((o ? (r = Dt(t, o)) : (r = n.rgb ?? e), n.themeTint)) {
      let a = G(n.themeTint);
      r = F(r, a);
    } else if (n.themeShade) {
      let a = G(n.themeShade);
      r = H(r, a);
    }
  } else n.rgb ? (r = n.rgb) : (r = e);
  return `#${r.toUpperCase().replace(/^#/, '')}`;
}
function Rt(n) {
  if (!n || n === 'none') return '';
  let t = Ht[n];
  return t ? `#${t}` : '';
}
function ce(n, t) {
  return n ? (n.auto ? 'transparent' : m(n, t)) : '';
}
function ue(n, t) {
  if (!n) return false;
  if (n.auto) return true;
  let r = m(n, t).replace(/^#/, '').toLowerCase(),
    o = C(r);
  return (o.r + o.g + o.b) / 3 < 20;
}
function le(n, t) {
  if (!n) return false;
  let r = m(n, t).replace(/^#/, '').toLowerCase(),
    o = C(r);
  return (o.r + o.g + o.b) / 3 > 235;
}
function pe(n, t) {
  if (!n) return '#000000';
  let r = m(n, t).replace(/^#/, ''),
    o = C(r);
  return (0.299 * o.r + 0.587 * o.g + 0.114 * o.b) / 255 > 0.5 ? '#000000' : '#FFFFFF';
}
function ge(n) {
  if (!n) return;
  let t = n.trim();
  if (t.toLowerCase() === 'auto') return { auto: true };
  let e = K(t);
  if (e) return { themeColor: e };
  let r = t.replace(/^#/, '').toUpperCase();
  return /^[0-9A-F]{6}$/i.test(r)
    ? { rgb: r }
    : /^[0-9A-F]{3}$/i.test(r)
      ? {
          rgb: r
            .split('')
            .map((a) => a + a)
            .join(''),
        }
      : { rgb: r.padStart(6, '0').slice(0, 6) };
}
function me(n, t, e) {
  let r = { themeColor: n };
  return (
    t !== void 0 &&
      t > 0 &&
      t < 1 &&
      (r.themeTint = Math.round(t * 255)
        .toString(16)
        .toUpperCase()
        .padStart(2, '0')),
    e !== void 0 &&
      e > 0 &&
      e < 1 &&
      (r.themeShade = Math.round(e * 255)
        .toString(16)
        .toUpperCase()
        .padStart(2, '0')),
    r
  );
}
function fe(n) {
  return { rgb: n.replace(/^#/, '').toUpperCase() };
}
function de(n, t, e) {
  let o = m(n, t).replace(/^#/, ''),
    a = 1 - e / 100;
  return `#${H(o, a)}`;
}
function he(n, t, e) {
  let o = m(n, t).replace(/^#/, ''),
    a = e / 100;
  return `#${F(o, a)}`;
}
function xe(n, t, e, r) {
  let o = m(n, r).replace(/^#/, ''),
    a = m(t, r).replace(/^#/, ''),
    i = C(o),
    s = C(a),
    c = {
      r: Math.round(i.r * (1 - e) + s.r * e),
      g: Math.round(i.g * (1 - e) + s.g * e),
      b: Math.round(i.b * (1 - e) + s.b * e),
    };
  return `#${M(c.r, c.g, c.b)}`;
}
function Et(n) {
  return n.startsWith('#') ? n : `#${n}`;
}
function ye(n) {
  return Rt(n) || Et(n);
}
var vt = [
    { slot: 'lt1', name: 'Background 1' },
    { slot: 'dk1', name: 'Text 1' },
    { slot: 'lt2', name: 'Background 2' },
    { slot: 'dk2', name: 'Text 2' },
    { slot: 'accent1', name: 'Accent 1' },
    { slot: 'accent2', name: 'Accent 2' },
    { slot: 'accent3', name: 'Accent 3' },
    { slot: 'accent4', name: 'Accent 4' },
    { slot: 'accent5', name: 'Accent 5' },
    { slot: 'accent6', name: 'Accent 6' },
  ],
  wt = [
    { type: 'base', value: 0, hexValue: '', labelSuffix: '' },
    { type: 'tint', value: 0.8, hexValue: 'CC', labelSuffix: ', Lighter 80%' },
    { type: 'tint', value: 0.6, hexValue: '99', labelSuffix: ', Lighter 60%' },
    { type: 'tint', value: 0.4, hexValue: '66', labelSuffix: ', Lighter 40%' },
    { type: 'shade', value: 0.75, hexValue: 'BF', labelSuffix: ', Darker 25%' },
    { type: 'shade', value: 0.5, hexValue: '80', labelSuffix: ', Darker 50%' },
  ];
function be(n, t, e) {
  return t === 'tint' ? F(n, e) : H(n, e);
}
function Ce(n) {
  let t = n ?? _;
  return wt.map((e) =>
    vt.map((r) => {
      let o = t[r.slot] ?? _[r.slot] ?? '000000',
        a;
      e.type === 'base'
        ? (a = o.toUpperCase())
        : e.type === 'tint'
          ? (a = F(o, e.value))
          : (a = H(o, e.value));
      let i = { hex: a, themeSlot: r.slot, label: `${r.name}${e.labelSuffix}` };
      return (
        e.type === 'tint' && e.hexValue
          ? (i.tint = e.hexValue)
          : e.type === 'shade' && e.hexValue && (i.shade = e.hexValue),
        i
      );
    })
  );
}
function Te(n, t, e) {
  if (!n && !t) return true;
  if (!n || !t) return false;
  let r = m(n, e).toUpperCase(),
    o = m(t, e).toUpperCase();
  return r === o;
}
export {
  ge as A,
  me as B,
  fe as C,
  de as D,
  he as E,
  xe as F,
  Et as G,
  ye as H,
  be as I,
  Ce as J,
  Te as K,
  Q as a,
  Bt as b,
  k as c,
  jt as d,
  Wt as e,
  Z as f,
  Gt as g,
  U as h,
  ht as i,
  Kt as j,
  Yt as k,
  Qt as l,
  Zt as m,
  te as n,
  ee as o,
  ne as p,
  re as q,
  oe as r,
  ae as s,
  ie as t,
  m as u,
  Rt as v,
  ce as w,
  ue as x,
  le as y,
  pe as z,
}; //# sourceMappingURL=chunk-7MS7BADP.js.map
//# sourceMappingURL=chunk-7MS7BADP.js.map
