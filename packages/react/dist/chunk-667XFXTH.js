import { a } from './chunk-YZ66KKSE.js';
import { d as d$2, e } from './chunk-NKZV4F2C.js';
import { b, a as a$1 } from './chunk-JOYPFQW2.js';
import { q as q$1 } from './chunk-OECSQ2YK.js';
import { d as d$1 } from './chunk-Y6VCTLCJ.js';
function L() {
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
function z() {
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
function W(r = {}) {
  let t = z();
  (r.pageWidth !== void 0 && (t.pageWidth = r.pageWidth),
    r.pageHeight !== void 0 && (t.pageHeight = r.pageHeight),
    r.orientation !== void 0 && (t.orientation = r.orientation),
    r.marginTop !== void 0 && (t.marginTop = r.marginTop),
    r.marginBottom !== void 0 && (t.marginBottom = r.marginBottom),
    r.marginLeft !== void 0 && (t.marginLeft = r.marginLeft),
    r.marginRight !== void 0 && (t.marginRight = r.marginRight));
  let e = { type: 'text', text: r.initialText || '' };
  return {
    package: {
      document: {
        content: [
          {
            type: 'paragraph',
            content: [
              {
                type: 'run',
                content: r.initialText ? [e] : [],
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
        styles: L(),
      },
    },
    templateVariables: [],
    warnings: [],
  };
}
function yt(r, t = {}) {
  return W({ ...t, initialText: r });
}
var A = class r {
  constructor(t) {
    d$1(this, '_document');
    d$1(this, '_pendingVariables');
    (t instanceof ArrayBuffer || ArrayBuffer.isView(t)
      ? (this._document = {
          package: { document: { content: [] } },
          originalBuffer: t instanceof ArrayBuffer ? t : t.buffer,
        })
      : (this._document = t),
      (this._pendingVariables = {}));
  }
  static async fromBuffer(t) {
    let e = await q$1(t);
    return new r(e);
  }
  static fromDocument(t) {
    return new r(t);
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
    for (let n of e.content) n.type === 'paragraph' && this._extractParagraphSegments(n, t);
    return t;
  }
  getVariables() {
    return a(this._document);
  }
  getStyles() {
    let t = this._document.package.styles;
    if (!t?.styles) return [];
    let e = [];
    for (let [n, a] of Object.entries(t.styles))
      if (typeof a == 'object' && a !== null) {
        let o = a;
        e.push({
          id: n,
          name: o.name || n,
          type: o.type === 'numbering' ? 'paragraph' : o.type || 'paragraph',
          builtIn: o.default,
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
      .filter((n) => n.length > 0).length;
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
      n = e.content.filter((i) => i.type === 'paragraph'),
      a = n.map((i, s) => {
        let c = this._getParagraphText(i),
          p = i.formatting?.styleId;
        return {
          index: s,
          preview: c.slice(0, t),
          style: p,
          isHeading: p?.toLowerCase().includes('heading') || false,
          headingLevel: this._parseHeadingLevel(p),
          isListItem: !!i.listRendering,
          isEmpty: c.trim().length === 0,
        };
      }),
      o = (e.sections || []).map((i, s) => ({
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
      paragraphCount: n.length,
      wordCount: this.getWordCount(),
      characterCount: this.getCharacterCount(),
      variables: this.getVariables(),
      variableCount: this.getVariables().length,
      availableStyles: this.getStyles(),
      outline: a,
      sections: o,
      hasTables: this.getTableCount() > 0,
      hasImages: this._hasImages(),
      hasHyperlinks: this._hasHyperlinks(),
    };
  }
  insertText(t, e, n = {}) {
    let a = { type: 'insertText', position: t, text: e, formatting: n.formatting };
    return this._executeCommand(a);
  }
  replaceRange(t, e, n = {}) {
    let a = { type: 'replaceText', range: t, text: e, formatting: n.formatting };
    return this._executeCommand(a);
  }
  deleteRange(t) {
    let e = { type: 'deleteText', range: t };
    return this._executeCommand(e);
  }
  applyFormatting(t, e) {
    let n = { type: 'formatText', range: t, formatting: e };
    return this._executeCommand(n);
  }
  applyStyle(t, e) {
    let n = { type: 'applyStyle', paragraphIndex: t, styleId: e };
    return this._executeCommand(n);
  }
  applyParagraphFormatting(t, e) {
    let n = { type: 'formatParagraph', paragraphIndex: t, formatting: e };
    return this._executeCommand(n);
  }
  insertTable(t, e, n, a = {}) {
    let o = {
      type: 'insertTable',
      position: t,
      rows: e,
      columns: n,
      data: a.data,
      hasHeader: a.hasHeader,
    };
    return this._executeCommand(o);
  }
  insertImage(t, e, n = {}) {
    let a = {
      type: 'insertImage',
      position: t,
      src: e,
      width: n.width,
      height: n.height,
      alt: n.alt,
    };
    return this._executeCommand(a);
  }
  insertHyperlink(t, e, n = {}) {
    let a = {
      type: 'insertHyperlink',
      range: t,
      url: e,
      displayText: n.displayText,
      tooltip: n.tooltip,
    };
    return this._executeCommand(a);
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
    let n = { type: 'mergeParagraphs', paragraphIndex: t, count: e };
    return this._executeCommand(n);
  }
  setVariable(t, e) {
    return ((this._pendingVariables[t] = e), this);
  }
  setVariables(t) {
    for (let [e, n] of Object.entries(t)) this._pendingVariables[e] = n;
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
    let n = this._document.originalBuffer;
    if (!n) throw new Error('Cannot apply variables: no original buffer for processing');
    let { processTemplate: a } = await import('./processTemplate-G37IM66O.js'),
      o = a(n, e),
      i = await q$1(o),
      s = new r(i);
    return ((s._pendingVariables = {}), s);
  }
  async toBuffer() {
    return this._document.originalBuffer ? d$2(this._document) : e(this._document);
  }
  async toBlob(t = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
    let e = await this.toBuffer();
    return new Blob([e], { type: t });
  }
  executeCommands(t) {
    return new r(b(this._document, t));
  }
  _executeCommand(t) {
    let e = new r(a$1(this._document, t));
    return ((e._pendingVariables = { ...this._pendingVariables }), e);
  }
  _getBodyText(t) {
    let e = [];
    for (let n of t.content)
      n.type === 'paragraph'
        ? e.push(this._getParagraphText(n))
        : n.type === 'table' && e.push(this._getTableText(n));
    return e.join(`
`);
  }
  _getParagraphText(t) {
    let e = [];
    for (let n of t.content)
      n.type === 'run'
        ? e.push(this._getRunText(n))
        : n.type === 'hyperlink' && e.push(this._getHyperlinkText(n));
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
    for (let n of t.children) n.type === 'run' && e.push(this._getRunText(n));
    return e.join('');
  }
  _getTableText(t) {
    let e = [];
    for (let n of t.rows)
      for (let a of n.cells)
        for (let o of a.content) o.type === 'paragraph' && e.push(this._getParagraphText(o));
    return e.join('	');
  }
  _extractParagraphSegments(t, e) {
    for (let n of t.content)
      if (n.type === 'run') {
        let a = this._getRunText(n);
        a && e.push({ text: a, formatting: n.formatting });
      } else if (n.type === 'hyperlink') {
        let a = n.href || '';
        for (let o of n.children)
          if (o.type === 'run') {
            let i = this._getRunText(o);
            i && e.push({ text: i, formatting: o.formatting, isHyperlink: true, hyperlinkUrl: a });
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
        for (let n of e.content)
          if (n.type === 'run') {
            for (let a of n.content) if (a.type === 'drawing') return true;
          }
      }
    return false;
  }
  _hasHyperlinks() {
    let t = this._document.package.document;
    for (let e of t.content)
      if (e.type === 'paragraph') {
        for (let n of e.content) if (n.type === 'hyperlink') return true;
      }
    return false;
  }
};
async function Tt(r) {
  return A.fromBuffer(r);
}
function St(r) {
  return A.fromDocument(r);
}
function N(r, t = {}) {
  let { outlineMaxChars: e = 100, maxOutlineParagraphs: n = 50 } = t,
    a$1 = r.package.document,
    o = a$1.content.filter((x) => x.type === 'paragraph'),
    i = M(o, e, n),
    s = a(r),
    c = q(r),
    p = $(a$1),
    u = U(a$1),
    h = G(a$1),
    m = a$1.content.some((x) => x.type === 'table'),
    y = Q(a$1),
    l = X(a$1);
  return {
    paragraphCount: o.length,
    wordCount: u,
    characterCount: h,
    variables: s,
    variableCount: s.length,
    availableStyles: c,
    outline: i,
    sections: p,
    hasTables: m,
    hasImages: y,
    hasHyperlinks: l,
  };
}
function Ft(r, t, e = {}) {
  let { contextChars: n = 200, includeSuggestions: a = true } = e,
    i = r.package.document.content.filter((f) => f.type === 'paragraph'),
    s = i[t.start.paragraphIndex];
  if (!s) throw new Error(`Paragraph not found at index ${t.start.paragraphIndex}`);
  let c = g(s),
    p = '';
  if (t.start.paragraphIndex === t.end.paragraphIndex) p = c.slice(t.start.offset, t.end.offset);
  else {
    let f = [];
    for (let b = t.start.paragraphIndex; b <= t.end.paragraphIndex; b++) {
      let B = i[b];
      if (!B) continue;
      let D = g(B);
      b === t.start.paragraphIndex
        ? f.push(D.slice(t.start.offset))
        : b === t.end.paragraphIndex
          ? f.push(D.slice(0, t.end.offset))
          : f.push(D);
    }
    p = f.join(`
`);
  }
  let u = tt(i, t.start.paragraphIndex, t.start.offset, n),
    h = et(i, t.end.paragraphIndex, t.end.offset, n),
    m = nt(s, t.start.offset),
    y = s.formatting || {},
    l = {
      index: t.start.paragraphIndex,
      fullText: c,
      style: s.formatting?.styleId,
      wordCount: w(c),
    },
    x = false,
    k = rt(s, t.start.offset),
    I = a ? at(p) : [];
  return {
    selectedText: p,
    range: t,
    formatting: m,
    paragraphFormatting: y,
    textBefore: u,
    textAfter: h,
    paragraph: l,
    inTable: x,
    inHyperlink: k,
    suggestedActions: I,
  };
}
function V(r) {
  let t = N(r, { outlineMaxChars: 50, maxOutlineParagraphs: 10 }),
    e = [`Document with ${t.paragraphCount} paragraphs, ${t.wordCount} words.`];
  (t.hasTables && e.push('Contains tables.'),
    t.hasImages && e.push('Contains images.'),
    t.hasHyperlinks && e.push('Contains hyperlinks.'),
    t.variableCount > 0 &&
      e.push(`Has ${t.variableCount} template variables: ${t.variables.join(', ')}`));
  let n = t.outline.filter((a) => a.isHeading);
  if (n.length > 0) {
    e.push(`
Headings:`);
    for (let a of n.slice(0, 5)) {
      let o = a.headingLevel || 1;
      e.push(`${'  '.repeat(o - 1)}- ${a.preview}`);
    }
    n.length > 5 && e.push(`  ... and ${n.length - 5} more headings`);
  }
  return e.join(' ');
}
function M(r, t, e) {
  let n = [];
  for (let a = 0; a < Math.min(r.length, e); a++) {
    let o = r[a],
      i = g(o),
      s = o.formatting?.styleId;
    n.push({
      index: a,
      preview: i.slice(0, t),
      style: s,
      isHeading: Y(s),
      headingLevel: Z(s),
      isListItem: !!o.listRendering,
      isEmpty: i.trim().length === 0,
    });
  }
  return n;
}
function q(r) {
  let t = r.package.styles;
  if (!t?.styles) return [];
  let e = [];
  for (let [n, a] of Object.entries(t.styles))
    if (typeof a == 'object' && a !== null) {
      let o = a;
      e.push({
        id: n,
        name: o.name || n,
        type: o.type === 'numbering' ? 'paragraph' : o.type || 'paragraph',
        builtIn: o.default,
      });
    }
  return e;
}
function $(r) {
  return r.sections
    ? r.sections.map((t, e) => ({
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
function U(r) {
  let t = 0;
  for (let e of r.content)
    if (e.type === 'paragraph') {
      let n = g(e);
      t += w(n);
    } else e.type === 'table' && (t += J(e));
  return t;
}
function w(r) {
  return r.split(/\s+/).filter((e) => e.length > 0).length;
}
function G(r) {
  let t = 0;
  for (let e of r.content)
    if (e.type === 'paragraph') {
      let n = g(e);
      t += n.length;
    } else e.type === 'table' && (t += K(e));
  return t;
}
function J(r) {
  let t = 0;
  for (let e of r.rows)
    for (let n of e.cells)
      for (let a of n.content)
        if (a.type === 'paragraph') {
          let o = g(a);
          t += w(o);
        }
  return t;
}
function K(r) {
  let t = 0;
  for (let e of r.rows)
    for (let n of e.cells)
      for (let a of n.content)
        if (a.type === 'paragraph') {
          let o = g(a);
          t += o.length;
        }
  return t;
}
function g(r) {
  let t = [];
  for (let e of r.content) e.type === 'run' ? t.push(T(e)) : e.type === 'hyperlink' && t.push(H(e));
  return t.join('');
}
function T(r) {
  return r.content
    .filter((t) => t.type === 'text')
    .map((t) => t.text)
    .join('');
}
function H(r) {
  let t = [];
  for (let e of r.children) e.type === 'run' && t.push(T(e));
  return t.join('');
}
function Q(r) {
  for (let t of r.content)
    if (t.type === 'paragraph') {
      for (let e of t.content)
        if (e.type === 'run') {
          for (let n of e.content) if (n.type === 'drawing') return true;
        }
    }
  return false;
}
function X(r) {
  for (let t of r.content)
    if (t.type === 'paragraph') {
      for (let e of t.content) if (e.type === 'hyperlink') return true;
    }
  return false;
}
function Y(r) {
  return r ? r.toLowerCase().includes('heading') : false;
}
function Z(r) {
  if (!r) return;
  let t = r.match(/heading\s*(\d)/i);
  if (t) return parseInt(t[1], 10);
}
function tt(r, t, e, n) {
  let a = [],
    o = 0,
    i = r[t];
  if (i) {
    let p = g(i).slice(0, e);
    (a.unshift(p), (o += p.length));
  }
  for (let c = t - 1; c >= 0 && o < n; c--) {
    let p = r[c];
    if (!p) continue;
    let u = g(p);
    (a.unshift(u), (o += u.length));
  }
  let s = a.join(`
`);
  return s.length > n ? '...' + s.slice(-n) : s;
}
function et(r, t, e, n) {
  let a = [],
    o = 0,
    i = r[t];
  if (i) {
    let p = g(i).slice(e);
    (a.push(p), (o += p.length));
  }
  for (let c = t + 1; c < r.length && o < n; c++) {
    let p = r[c];
    if (!p) continue;
    let u = g(p);
    (a.push(u), (o += u.length));
  }
  let s = a.join(`
`);
  return s.length > n ? s.slice(0, n) + '...' : s;
}
function nt(r, t) {
  let e = 0;
  for (let n of r.content)
    if (n.type === 'run') {
      let a = T(n),
        o = e,
        i = e + a.length;
      if (t >= o && t < i) return n.formatting || {};
      e = i;
    } else if (n.type === 'hyperlink') {
      let a = H(n),
        o = e,
        i = e + a.length;
      if (t >= o && t < i) {
        for (let s of n.children) if (s.type === 'run') return s.formatting || {};
      }
      e = i;
    }
  return {};
}
function rt(r, t) {
  let e = 0;
  for (let n of r.content)
    if (n.type === 'run') {
      let a = T(n);
      e += a.length;
    } else if (n.type === 'hyperlink') {
      let a = H(n),
        o = e,
        i = e + a.length;
      if (t >= o && t < i) return true;
      e = i;
    }
  return false;
}
function at(r, t, e) {
  let n = [];
  return (
    r.length > 0 &&
      (n.push(
        { id: 'rewrite', label: 'Rewrite', description: 'Rewrite this text', priority: 10 },
        { id: 'summarize', label: 'Summarize', description: 'Summarize this text', priority: 9 }
      ),
      r.length > 200 &&
        n.push({
          id: 'summarize',
          label: 'Summarize',
          description: 'Create a shorter version',
          priority: 8,
        }),
      r.length < 50 &&
        r.split(/\s+/).length < 10 &&
        n.push({ id: 'expand', label: 'Expand', description: 'Add more details', priority: 8 }),
      n.push({
        id: 'fixGrammar',
        label: 'Fix Grammar',
        description: 'Fix grammar and spelling',
        priority: 7,
      }),
      n.push({
        id: 'translate',
        label: 'Translate',
        description: 'Translate to another language',
        priority: 6,
      }),
      n.push(
        { id: 'makeFormal', label: 'Make Formal', description: 'Use formal tone', priority: 5 },
        { id: 'makeCasual', label: 'Make Casual', description: 'Use casual tone', priority: 4 }
      )),
    n.sort((a, o) => (o.priority || 0) - (a.priority || 0)),
    n
  );
}
function ot(r, t, e = {}) {
  let { contextCharsBefore: n = 200, contextCharsAfter: a = 200, includeSuggestions: o = true } = e,
    i = r.package.document,
    s = i.content.filter((f) => f.type === 'paragraph');
  if (t.start.paragraphIndex >= s.length)
    throw new Error(`Invalid start paragraph index: ${t.start.paragraphIndex}`);
  let c = s[t.start.paragraphIndex],
    p = it(s, t),
    u = st(s, t.start, n),
    h = ct(s, t.end, a),
    m = pt(c, t.start.offset),
    y = c.formatting || {},
    l = {
      index: t.start.paragraphIndex,
      fullText: d(c),
      style: c.formatting?.styleId,
      wordCount: R(d(c)),
    },
    x = lt(i, t.start),
    k = gt(c, t.start.offset),
    I = o ? mt(p) : [];
  return {
    selectedText: p,
    range: t,
    formatting: m,
    paragraphFormatting: y,
    textBefore: u,
    textAfter: h,
    paragraph: l,
    inTable: x,
    inHyperlink: k,
    suggestedActions: I,
  };
}
function Ht(r, t, e = {}) {
  let n = ot(r, t, e),
    { includeDocumentSummary: a = true } = e,
    i = r.package.document.content.filter((l) => l.type === 'paragraph'),
    s = R(n.selectedText),
    c = n.selectedText.length,
    p = t.start.paragraphIndex !== t.end.paragraphIndex,
    u = [];
  for (let l = t.start.paragraphIndex; l <= t.end.paragraphIndex; l++) u.push(l);
  let h = ft(i, t),
    m = a ? V(r) : void 0,
    y = dt(n.selectedText);
  return {
    ...n,
    documentSummary: m,
    wordCount: s,
    characterCount: c,
    isMultiParagraph: p,
    paragraphIndices: u,
    detectedLanguage: y,
    contentType: h,
  };
}
function Rt(r, t) {
  let n = r.package.document.content.filter((s) => s.type === 'paragraph'),
    a = [];
  for (let s = t.start.paragraphIndex; s <= t.end.paragraphIndex; s++) {
    let c = n[s];
    if (!c) continue;
    let p = s === t.start.paragraphIndex ? t.start.offset : 0,
      u = s === t.end.paragraphIndex ? t.end.offset : 1 / 0;
    ut(c, p, u, a);
  }
  let o = a.length <= 1 || a.every((s) => ht(s, a[0]));
  return { predominant: a.length > 0 ? a[0] : {}, isConsistent: o, allFormatting: a };
}
function it(r, t) {
  if (t.start.paragraphIndex === t.end.paragraphIndex) {
    let n = r[t.start.paragraphIndex];
    return n ? d(n).slice(t.start.offset, t.end.offset) : '';
  }
  let e = [];
  for (let n = t.start.paragraphIndex; n <= t.end.paragraphIndex; n++) {
    let a = r[n];
    if (!a) continue;
    let o = d(a);
    n === t.start.paragraphIndex
      ? e.push(o.slice(t.start.offset))
      : n === t.end.paragraphIndex
        ? e.push(o.slice(0, t.end.offset))
        : e.push(o);
  }
  return e.join(`
`);
}
function st(r, t, e) {
  let n = [],
    a = 0,
    o = r[t.paragraphIndex];
  if (o) {
    let c = d(o).slice(0, t.offset);
    (n.unshift(c), (a += c.length));
  }
  for (let s = t.paragraphIndex - 1; s >= 0 && a < e; s--) {
    let c = r[s];
    if (!c) continue;
    let p = d(c);
    (n.unshift(p), (a += p.length));
  }
  let i = n.join(`
`);
  return i.length > e ? '...' + i.slice(-e) : i;
}
function ct(r, t, e) {
  let n = [],
    a = 0,
    o = r[t.paragraphIndex];
  if (o) {
    let c = d(o).slice(t.offset);
    (n.push(c), (a += c.length));
  }
  for (let s = t.paragraphIndex + 1; s < r.length && a < e; s++) {
    let c = r[s];
    if (!c) continue;
    let p = d(c);
    (n.push(p), (a += p.length));
  }
  let i = n.join(`
`);
  return i.length > e ? i.slice(0, e) + '...' : i;
}
function pt(r, t) {
  let e = 0;
  for (let n of r.content)
    if (n.type === 'run') {
      let a = C(n),
        o = e + a.length;
      if (t >= e && t < o) return n.formatting || {};
      e = o;
    } else if (n.type === 'hyperlink') {
      let a = S(n),
        o = e + a.length;
      if (t >= e && t < o) {
        for (let i of n.children) if (i.type === 'run') return i.formatting || {};
      }
      e = o;
    }
  return {};
}
function ut(r, t, e, n) {
  let a = 0;
  for (let o of r.content)
    if (o.type === 'run') {
      let i = C(o),
        s = a,
        c = a + i.length;
      (c > t && s < e && o.formatting && n.push({ ...o.formatting }), (a = c));
    } else if (o.type === 'hyperlink') {
      let i = S(o),
        s = a,
        c = a + i.length;
      if (c > t && s < e)
        for (let p of o.children) p.type === 'run' && p.formatting && n.push({ ...p.formatting });
      a = c;
    }
}
function lt(r, t) {
  return false;
}
function gt(r, t) {
  let e = 0;
  for (let n of r.content)
    if (n.type === 'run') {
      let a = C(n);
      e += a.length;
    } else if (n.type === 'hyperlink') {
      let a = S(n),
        o = e,
        i = e + a.length;
      if (t >= o && t < i) return true;
      e = i;
    }
  return false;
}
function mt(r, t, e) {
  let n = [];
  if (!r || r.trim().length === 0) return n;
  n.push(
    { id: 'askAI', label: 'Ask AI', description: 'Ask AI about this text', priority: 11 },
    { id: 'rewrite', label: 'Rewrite', description: 'Rewrite this text differently', priority: 10 }
  );
  let a = R(r);
  return (
    a > 50 &&
      n.push({
        id: 'summarize',
        label: 'Summarize',
        description: 'Create a shorter version',
        priority: 9,
      }),
    a < 20 &&
      n.push({ id: 'expand', label: 'Expand', description: 'Add more details', priority: 9 }),
    n.push(
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
    n.push(
      { id: 'makeFormal', label: 'Make Formal', description: 'Use formal tone', priority: 4 },
      { id: 'makeCasual', label: 'Make Casual', description: 'Use casual tone', priority: 3 }
    ),
    n.sort((o, i) => (i.priority || 0) - (o.priority || 0)),
    n
  );
}
function ft(r, t) {
  let e = new Set();
  for (let n = t.start.paragraphIndex; n <= t.end.paragraphIndex; n++) {
    let a = r[n];
    a &&
      (a.listRendering
        ? e.add('list')
        : a.formatting?.styleId?.toLowerCase().includes('heading')
          ? e.add('heading')
          : e.add('prose'));
  }
  return e.size > 1 ? 'mixed' : e.has('list') ? 'list' : e.has('heading') ? 'heading' : 'prose';
}
function dt(r) {
  return /[а-яА-ЯёЁ]/.test(r)
    ? 'ru'
    : /[一-龯]/.test(r)
      ? 'zh'
      : /[ひらがなカタカナ]/.test(r) || /[\u3040-\u309F\u30A0-\u30FF]/.test(r)
        ? 'ja'
        : /[가-힣]/.test(r)
          ? 'ko'
          : /[àâäéèêëïîôùûüç]/i.test(r)
            ? 'fr'
            : /[äöüß]/i.test(r)
              ? 'de'
              : /[áéíóúñ]/i.test(r)
                ? 'es'
                : 'en';
}
function d(r) {
  let t = [];
  for (let e of r.content) e.type === 'run' ? t.push(C(e)) : e.type === 'hyperlink' && t.push(S(e));
  return t.join('');
}
function C(r) {
  return r.content
    .filter((t) => t.type === 'text')
    .map((t) => t.text)
    .join('');
}
function S(r) {
  let t = [];
  for (let e of r.children) e.type === 'run' && t.push(C(e));
  return t.join('');
}
function R(r) {
  return r.split(/\s+/).filter((t) => t.length > 0).length;
}
function ht(r, t) {
  let e = Object.keys(r),
    n = Object.keys(t);
  return e.length !== n.length
    ? false
    : e.every((a) => {
        let o = r[a],
          i = t[a];
        return o === i;
      });
}
export {
  W as a,
  yt as b,
  A as c,
  Tt as d,
  St as e,
  N as f,
  Ft as g,
  V as h,
  ot as i,
  Ht as j,
  Rt as k,
}; //# sourceMappingURL=chunk-667XFXTH.js.map
//# sourceMappingURL=chunk-667XFXTH.js.map
