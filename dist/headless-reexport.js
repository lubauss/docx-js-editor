export {
  g as DEFAULT_AI_ACTIONS,
  d as comparePositions,
  a as createCollapsedRange,
  h as createCommand,
  b as createRange,
  f as getActionDescription,
  e as getActionLabel,
  c as isPositionInRange,
} from './chunk-7JSPKVOW.js';
export {
  c as DocumentAgent,
  j as buildExtendedSelectionContext,
  i as buildSelectionContext,
  g as buildSelectionContextFromContext,
  d as createAgent,
  e as createAgentFromDocument,
  b as createDocumentWithText,
  a as createEmptyDocument,
  f as getAgentContext,
  h as getDocumentSummary,
  k as getSelectionFormattingSummary,
} from './chunk-VXB7SHGH.js';
export {
  l as blendColors,
  q as colorsEqual,
  i as createRgbColor,
  h as createThemeColor,
  j as darkenColor,
  t as emuToPixels,
  v as emuToTwips,
  B as formatPx,
  f as getContrastingColor,
  y as halfPointsToPixels,
  d as isBlack,
  e as isWhite,
  k as lightenColor,
  g as parseColorString,
  u as pixelsToEmu,
  s as pixelsToTwips,
  x as pointsToPixels,
  a as resolveColor,
  b as resolveHighlightColor,
  c as resolveShadingColor,
  w as twipsToEmu,
  r as twipsToPixels,
} from './chunk-CXJ6TLVT.js';
export {
  a as detectVariables,
  b as detectVariablesDetailed,
  c as detectVariablesInBody,
  d as detectVariablesInParagraph,
  m as documentHasVariables,
  e as extractVariablesFromText,
  i as formatVariable,
  f as hasTemplateVariables,
  g as isValidVariableName,
  n as isZodSchema,
  j as parseVariable,
  l as removeVariables,
  k as replaceVariables,
  h as sanitizeVariableName,
} from './chunk-OHG7ROFC.js';
export {
  e as createDocx,
  d as repackDocx,
  b as serializeDocumentBody,
  c as serializeDocx,
  a as serializeSectionProperties,
} from './chunk-3R423EBZ.js';
export { a as executeCommand, b as executeCommands } from './chunk-JOYPFQW2.js';
export { q as parseDocx } from './chunk-DP6Q75ZD.js';
export {
  a as PluginRegistry,
  d as createPluginRegistrar,
  b as pluginRegistry,
  c as registerPlugins,
} from './chunk-2QOEHCBX.js';
export {
  j as createTemplateProcessor,
  g as getMissingVariables,
  e as getTemplateTags,
  h as previewTemplate,
  a as processTemplate,
  i as processTemplateAdvanced,
  c as processTemplateAsBlob,
  b as processTemplateDetailed,
  f as validateTemplate,
} from './chunk-CV5WFE7K.js';
import './chunk-Y6VCTLCJ.js';
function p(n) {
  let e = [];
  for (let t of n.content) t.type === 'run' ? e.push(c(t)) : t.type === 'hyperlink' && e.push(g(t));
  return e.join('');
}
function c(n) {
  return n.content
    .filter((e) => e.type === 'text')
    .map((e) => e.text)
    .join('');
}
function g(n) {
  let e = [];
  for (let t of n.children) t.type === 'run' && e.push(c(t));
  return e.join('');
}
function m(n) {
  let e = [];
  for (let t of n.rows)
    for (let o of t.cells) for (let r of o.content) r.type === 'paragraph' && e.push(p(r));
  return e.join('	');
}
function Me(n) {
  let e = [];
  for (let t of n.content)
    t.type === 'paragraph' ? e.push(p(t)) : t.type === 'table' && e.push(m(t));
  return e.join(`
`);
}
function f(n) {
  return n.split(/\s+/).filter((t) => t.length > 0).length;
}
function je(n, e = true) {
  return e ? n.length : n.replace(/\s/g, '').length;
}
function We(n) {
  let e = 0;
  for (let t of n.content)
    t.type === 'paragraph' ? (e += f(p(t))) : t.type === 'table' && (e += ze(t));
  return e;
}
function ze(n) {
  let e = 0;
  for (let t of n.rows)
    for (let o of t.cells) for (let r of o.content) r.type === 'paragraph' && (e += f(p(r)));
  return e;
}
function Ne(n) {
  let e = 0;
  for (let t of n.content)
    t.type === 'paragraph' ? (e += p(t).length) : t.type === 'table' && (e += qe(t));
  return e;
}
function qe(n) {
  let e = 0;
  for (let t of n.rows)
    for (let o of t.cells) for (let r of o.content) r.type === 'paragraph' && (e += p(r).length);
  return e;
}
function Ze(n, e, t) {
  let o = [],
    r = 0,
    i = n[e.paragraphIndex];
  if (i) {
    let s = p(i).slice(0, e.offset);
    (o.unshift(s), (r += s.length));
  }
  for (let l = e.paragraphIndex - 1; l >= 0 && r < t; l--) {
    let s = n[l];
    if (!s) continue;
    let u = p(s);
    (o.unshift(u), (r += u.length));
  }
  let a = o.join(`
`);
  return a.length > t ? '...' + a.slice(-t) : a;
}
function _e(n, e, t) {
  let o = [],
    r = 0,
    i = n[e.paragraphIndex];
  if (i) {
    let s = p(i).slice(e.offset);
    (o.push(s), (r += s.length));
  }
  for (let l = e.paragraphIndex + 1; l < n.length && r < t; l++) {
    let s = n[l];
    if (!s) continue;
    let u = p(s);
    (o.push(u), (r += u.length));
  }
  let a = o.join(`
`);
  return a.length > t ? a.slice(0, t) + '...' : a;
}
function Je(n, e) {
  let t = 0;
  for (let o of n.content)
    if (o.type === 'run') {
      let r = c(o),
        i = t + r.length;
      if (e >= t && e < i) return o.formatting || {};
      t = i;
    } else if (o.type === 'hyperlink') {
      let r = g(o),
        i = t + r.length;
      if (e >= t && e < i) {
        for (let a of o.children) if (a.type === 'run') return a.formatting || {};
      }
      t = i;
    }
  return {};
}
function Ue(n, e) {
  let t = 0;
  for (let o of n.content)
    if (o.type === 'run') {
      let r = c(o);
      t += r.length;
    } else if (o.type === 'hyperlink') {
      let r = g(o),
        i = t,
        a = t + r.length;
      if (e >= i && e < a) return true;
      t = a;
    }
  return false;
}
function Ge(n, e) {
  let t = 0;
  for (let o of n.content)
    if (o.type === 'run') {
      let r = c(o);
      t += r.length;
    } else if (o.type === 'hyperlink') {
      let r = g(o),
        i = t,
        a = t + r.length;
      if (e >= i && e < a) return o;
      t = a;
    }
}
function Ke(n) {
  return n ? n.toLowerCase().includes('heading') : false;
}
function Qe(n) {
  if (!n) return;
  let e = n.match(/heading\s*(\d)/i);
  if (e) return parseInt(e[1], 10);
}
function Xe(n) {
  for (let e of n.content)
    if (e.type === 'paragraph') {
      for (let t of e.content)
        if (t.type === 'run') {
          for (let o of t.content) if (o.type === 'drawing') return true;
        }
    }
  return false;
}
function Ye(n) {
  for (let e of n.content)
    if (e.type === 'paragraph') {
      for (let t of e.content) if (t.type === 'hyperlink') return true;
    }
  return false;
}
function $e(n) {
  return n.content.some((e) => e.type === 'table');
}
function x(n) {
  return n.content.filter((e) => e.type === 'paragraph');
}
function et(n, e) {
  return x(n)[e];
}
function tt(n, e) {
  let t = 0;
  for (let o = 0; o < n.content.length; o++)
    if (n.content[o].type === 'paragraph') {
      if (t === e) return o;
      t++;
    }
  return -1;
}
var ot = '0.0.2';
export {
  ot as VERSION,
  je as countCharacters,
  f as countWords,
  tt as getBlockIndexForParagraph,
  Ne as getBodyCharacterCount,
  Me as getBodyText,
  We as getBodyWordCount,
  Je as getFormattingAtPosition,
  Ge as getHyperlinkAtPosition,
  g as getHyperlinkText,
  et as getParagraphAtIndex,
  p as getParagraphText,
  x as getParagraphs,
  c as getRunText,
  m as getTableText,
  _e as getTextAfter,
  Ze as getTextBefore,
  Ye as hasHyperlinks,
  Xe as hasImages,
  $e as hasTables,
  Ke as isHeadingStyle,
  Ue as isPositionInHyperlink,
  Qe as parseHeadingLevel,
}; //# sourceMappingURL=headless-reexport.js.map
//# sourceMappingURL=headless-reexport.js.map
