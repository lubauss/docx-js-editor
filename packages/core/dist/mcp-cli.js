#!/usr/bin/env node
import kt from 'pizzip';
import Rt from 'docxtemplater';
import dt from 'jszip';
import { xml2js, js2xml } from 'xml-js';
var xt = Object.defineProperty;
var kr = (e, t, n) =>
  t in e
    ? xt(e, t, { enumerable: true, configurable: true, writable: true, value: n })
    : (e[t] = n);
var bt = (e, t) => () => (e && (t = e((e = 0))), t);
var Rr = (e, t) => {
  for (var n in t) xt(e, n, { get: t[n], enumerable: true });
};
var we = (e, t, n) => kr(e, typeof t != 'symbol' ? t + '' : t, n);
var Ue,
  re,
  Fe = bt(() => {
    ((Ue = class {
      constructor() {
        we(this, 'plugins', new Map());
        we(this, 'commandHandlers', new Map());
        we(this, 'eventListeners', new Set());
        we(this, 'initialized', new Set());
      }
      register(t, n) {
        let r = [];
        if (!t.id) return { success: false, error: 'Plugin must have an id' };
        if (this.plugins.has(t.id))
          return { success: false, error: `Plugin '${t.id}' is already registered` };
        if (t.dependencies) {
          for (let o of t.dependencies)
            if (!this.plugins.has(o))
              return {
                success: false,
                error: `Plugin '${t.id}' requires '${o}' which is not registered`,
              };
        }
        if (t.commandHandlers)
          for (let [o, i] of Object.entries(t.commandHandlers)) {
            if (this.commandHandlers.has(o)) {
              let s = this.commandHandlers.get(o);
              r.push(`Command '${o}' from '${t.id}' overrides handler from '${s.pluginId}'`);
            }
            this.commandHandlers.set(o, { pluginId: t.id, handler: i });
          }
        if ((this.plugins.set(t.id, t), t.initialize && !this.initialized.has(t.id)))
          try {
            let o = t.initialize();
            o instanceof Promise
              ? o
                  .then(() => {
                    this.initialized.add(t.id);
                  })
                  .catch((i) => {
                    this.emit({ type: 'error', pluginId: t.id, error: i });
                  })
              : this.initialized.add(t.id);
          } catch (o) {
            this.emit({ type: 'error', pluginId: t.id, error: o });
          }
        return (
          n?.debug && console.log(`[PluginRegistry] Registered plugin: ${t.id}`),
          this.emit({ type: 'registered', plugin: t }),
          { success: true, plugin: t, warnings: r.length > 0 ? r : void 0 }
        );
      }
      unregister(t) {
        let n = this.plugins.get(t);
        if (!n) return false;
        for (let [r, o] of this.plugins)
          if (o.dependencies?.includes(t))
            return (console.warn(`Cannot unregister '${t}': '${r}' depends on it`), false);
        for (let [r, { pluginId: o }] of this.commandHandlers)
          o === t && this.commandHandlers.delete(r);
        if (n.destroy)
          try {
            let r = n.destroy();
            r instanceof Promise &&
              r.catch((o) => {
                this.emit({ type: 'error', pluginId: t, error: o });
              });
          } catch (r) {
            this.emit({ type: 'error', pluginId: t, error: r });
          }
        return (
          this.plugins.delete(t),
          this.initialized.delete(t),
          this.emit({ type: 'unregistered', pluginId: t }),
          true
        );
      }
      get(t) {
        return this.plugins.get(t);
      }
      getAll() {
        return Array.from(this.plugins.values());
      }
      has(t) {
        return this.plugins.has(t);
      }
      get size() {
        return this.plugins.size;
      }
      getCommandHandler(t) {
        return this.commandHandlers.get(t)?.handler;
      }
      getCommandTypes() {
        return Array.from(this.commandHandlers.keys());
      }
      hasCommandHandler(t) {
        return this.commandHandlers.has(t);
      }
      getMcpTools() {
        let t = [];
        for (let n of this.plugins.values()) n.mcpTools && t.push(...n.mcpTools);
        return t;
      }
      getMcpToolsForPlugin(t) {
        return this.plugins.get(t)?.mcpTools || [];
      }
      getMcpTool(t) {
        for (let n of this.plugins.values())
          if (n.mcpTools) {
            let r = n.mcpTools.find((o) => o.name === t);
            if (r) return r;
          }
      }
      addEventListener(t) {
        this.eventListeners.add(t);
      }
      removeEventListener(t) {
        this.eventListeners.delete(t);
      }
      emit(t) {
        for (let n of this.eventListeners)
          try {
            n(t);
          } catch (r) {
            console.error('[PluginRegistry] Event listener error:', r);
          }
      }
      clear() {
        for (let t of this.plugins.values())
          if (t.destroy)
            try {
              t.destroy();
            } catch {}
        (this.plugins.clear(), this.commandHandlers.clear(), this.initialized.clear());
      }
      getDebugInfo() {
        return {
          plugins: Array.from(this.plugins.keys()),
          commandTypes: Array.from(this.commandHandlers.keys()),
          mcpTools: this.getMcpTools().map((t) => t.name),
          initialized: Array.from(this.initialized),
        };
      }
    }),
      (re = new Ue()));
  });
var Yn = {};
Rr(Yn, { executeCommand: () => se, executeCommands: () => Bi });
function se(e, t) {
  let n = re.getCommandHandler(t.type);
  if (n) return n(e, t);
  switch (t.type) {
    case 'insertText':
      return Li(e, t);
    case 'replaceText':
      return Ni(e, t);
    case 'deleteText':
      return Xi(e, t);
    case 'formatText':
      return Hi(e, t);
    case 'formatParagraph':
      return Oi(e, t);
    case 'applyStyle':
      return ji(e, t);
    case 'insertTable':
      return zi(e, t);
    case 'insertImage':
      return Vi(e, t);
    case 'insertHyperlink':
      return Wi(e, t);
    case 'removeHyperlink':
      return _i(e, t);
    case 'insertParagraphBreak':
      return Zn(e, t);
    case 'mergeParagraphs':
      return Ui(e, t);
    case 'splitParagraph':
      return Gi(e, t);
    case 'setVariable':
      return qi(e, t);
    case 'applyVariables':
      return Ji(e, t);
    default:
      let r = t;
      throw new Error(`Unknown command type: ${r.type}`);
  }
}
function Bi(e, t) {
  return t.reduce((n, r) => se(n, r), e);
}
function V(e) {
  return JSON.parse(JSON.stringify(e));
}
function j(e, t) {
  let n = 0;
  for (let r = 0; r < e.content.length; r++)
    if (e.content[r].type === 'paragraph') {
      if (n === t) return r;
      n++;
    }
  return -1;
}
function Ce(e) {
  let t = '';
  for (let n of e.content)
    if (n.type === 'run') for (let r of n.content) r.type === 'text' && (t += r.text);
    else if (n.type === 'hyperlink') {
      for (let r of n.children)
        if (r.type === 'run') for (let o of r.content) o.type === 'text' && (t += o.text);
    }
  return t;
}
function Oe(e, t) {
  return { type: 'run', formatting: t, content: [{ type: 'text', text: e }] };
}
function je(e, t, n, r) {
  let o = [],
    i = 0,
    s = false;
  for (let a of e.content)
    if (a.type === 'run') {
      let c = a.content
          .filter((d) => d.type === 'text')
          .map((d) => d.text)
          .join(''),
        p = i,
        f = i + c.length;
      if (!s && t >= p && t <= f) {
        let d = t - p;
        (d > 0 && o.push({ ...a, content: [{ type: 'text', text: c.slice(0, d) }] }),
          o.push(Oe(n, r || a.formatting)),
          d < c.length && o.push({ ...a, content: [{ type: 'text', text: c.slice(d) }] }),
          (s = true));
      } else o.push(a);
      i = f;
    } else o.push(a);
  return (s || o.push(Oe(n, r)), o);
}
function ie(e, t, n) {
  let r = [],
    o = 0;
  for (let i of e.content)
    if (i.type === 'run') {
      let s = i.content
          .filter((p) => p.type === 'text')
          .map((p) => p.text)
          .join(''),
        a = o,
        c = o + s.length;
      if (c <= t || a >= n) r.push(i);
      else {
        let p = '';
        (a < t && (p += s.slice(0, t - a)),
          c > n && (p += s.slice(n - a)),
          p.length > 0 && r.push({ ...i, content: [{ type: 'text', text: p }] }));
      }
      o = c;
    } else r.push(i);
  return r;
}
function Jn(e, t, n, r) {
  let o = [],
    i = 0;
  for (let s of e.content)
    if (s.type === 'run') {
      let a = s.content
          .filter((f) => f.type === 'text')
          .map((f) => f.text)
          .join(''),
        c = i,
        p = i + a.length;
      if (p <= t || c >= n) o.push(s);
      else if (c >= t && p <= n) o.push({ ...s, formatting: { ...s.formatting, ...r } });
      else {
        let f = Math.max(t, c),
          d = Math.min(n, p);
        (c < f && o.push({ ...s, content: [{ type: 'text', text: a.slice(0, f - c) }] }),
          o.push({
            ...s,
            formatting: { ...s.formatting, ...r },
            content: [{ type: 'text', text: a.slice(f - c, d - c) }],
          }),
          p > d && o.push({ ...s, content: [{ type: 'text', text: a.slice(d - c) }] }));
      }
      i = p;
    } else o.push(s);
  return o;
}
function Li(e, t) {
  let n = V(e),
    r = n.package.document,
    o = j(r, t.position.paragraphIndex);
  if (o === -1) throw new Error(`Paragraph index ${t.position.paragraphIndex} not found`);
  let i = r.content[o];
  return ((i.content = je(i, t.position.offset, t.text, t.formatting)), n);
}
function Ni(e, t) {
  let n = V(e),
    r = n.package.document,
    { start: o, end: i } = t.range;
  if (o.paragraphIndex === i.paragraphIndex) {
    let s = j(r, o.paragraphIndex);
    if (s === -1) throw new Error(`Paragraph index ${o.paragraphIndex} not found`);
    let a = r.content[s];
    ((a.content = ie(a, o.offset, i.offset)), (a.content = je(a, o.offset, t.text, t.formatting)));
  } else {
    let s = j(r, o.paragraphIndex),
      a = r.content[s],
      c = Ce(a);
    ((a.content = ie(a, o.offset, c.length)), (a.content = je(a, o.offset, t.text, t.formatting)));
    let p = [];
    for (let f = o.paragraphIndex + 1; f <= i.paragraphIndex; f++) p.push(j(r, f));
    for (let f = p.length - 1; f >= 0; f--) p[f] !== -1 && r.content.splice(p[f], 1);
  }
  return n;
}
function Xi(e, t) {
  let n = V(e),
    r = n.package.document,
    { start: o, end: i } = t.range;
  if (o.paragraphIndex === i.paragraphIndex) {
    let s = j(r, o.paragraphIndex);
    if (s === -1) throw new Error(`Paragraph index ${o.paragraphIndex} not found`);
    let a = r.content[s];
    a.content = ie(a, o.offset, i.offset);
  } else {
    let s = j(r, o.paragraphIndex),
      a = r.content[s],
      c = Ce(a);
    a.content = ie(a, o.offset, c.length);
    let p = j(r, i.paragraphIndex),
      f = r.content[p];
    ((f.content = ie(f, 0, i.offset)), a.content.push(...f.content));
    let d = [];
    for (let h = o.paragraphIndex + 1; h <= i.paragraphIndex; h++) d.push(j(r, h));
    for (let h = d.length - 1; h >= 0; h--) d[h] !== -1 && r.content.splice(d[h], 1);
  }
  return n;
}
function Hi(e, t) {
  let n = V(e),
    r = n.package.document,
    { start: o, end: i } = t.range;
  if (o.paragraphIndex === i.paragraphIndex) {
    let s = j(r, o.paragraphIndex);
    if (s === -1) throw new Error(`Paragraph index ${o.paragraphIndex} not found`);
    let a = r.content[s];
    a.content = Jn(a, o.offset, i.offset, t.formatting);
  } else
    for (let s = o.paragraphIndex; s <= i.paragraphIndex; s++) {
      let a = j(r, s);
      if (a === -1) continue;
      let c = r.content[a],
        p = Ce(c),
        f = 0,
        d = p.length;
      (s === o.paragraphIndex && (f = o.offset),
        s === i.paragraphIndex && (d = i.offset),
        (c.content = Jn(c, f, d, t.formatting)));
    }
  return n;
}
function Oi(e, t) {
  let n = V(e),
    r = n.package.document,
    o = j(r, t.paragraphIndex);
  if (o === -1) throw new Error(`Paragraph index ${t.paragraphIndex} not found`);
  let i = r.content[o];
  if (((i.formatting = { ...i.formatting, ...t.formatting }), 'numPr' in t.formatting)) {
    let s = t.formatting.numPr;
    if (s && s.numId !== void 0 && s.numId !== 0) {
      let a = s.ilvl ?? 0,
        c = s.numId === 1,
        p = c ? '\u2022' : '1.';
      if (n.package.numbering) {
        let f = n.package.numbering.nums.find((d) => d.numId === s.numId);
        if (f) {
          let d = n.package.numbering.abstractNums.find((h) => h.abstractNumId === f.abstractNumId);
          if (d) {
            let h = d.levels.find((g) => g.ilvl === a);
            h && (p = h.lvlText || p);
          }
        }
      }
      i.listRendering = { level: a, numId: s.numId, marker: p, isBullet: c };
    } else delete i.listRendering;
  }
  return n;
}
function ji(e, t) {
  let n = V(e),
    r = n.package.document,
    o = j(r, t.paragraphIndex);
  if (o === -1) throw new Error(`Paragraph index ${t.paragraphIndex} not found`);
  let i = r.content[o];
  return ((i.formatting = { ...i.formatting, styleId: t.styleId }), n);
}
function zi(e, t) {
  let n = V(e),
    r = n.package.document,
    o = [];
  for (let a = 0; a < t.rows; a++) {
    let c = [];
    for (let p = 0; p < t.columns; p++) {
      let f = t.data?.[a]?.[p] || '';
      c.push({ type: 'tableCell', content: [{ type: 'paragraph', content: f ? [Oe(f)] : [] }] });
    }
    o.push({
      type: 'tableRow',
      formatting: a === 0 && t.hasHeader ? { header: true } : void 0,
      cells: c,
    });
  }
  let i = { type: 'table', rows: o },
    s = j(r, t.position.paragraphIndex);
  return (s === -1 ? r.content.push(i) : r.content.splice(s + 1, 0, i), n);
}
function Vi(e, t) {
  let n = V(e),
    r = n.package.document,
    o = j(r, t.position.paragraphIndex);
  if (o === -1) throw new Error(`Paragraph index ${t.position.paragraphIndex} not found`);
  let i = r.content[o],
    a = {
      type: 'run',
      content: [
        {
          type: 'drawing',
          image: {
            type: 'image',
            rId: `rId_img_${Date.now()}`,
            src: t.src,
            alt: t.alt,
            size: { width: (t.width || 100) * 914400, height: (t.height || 100) * 914400 },
            wrap: { type: 'inline' },
          },
        },
      ],
    },
    c = je(i, t.position.offset, '', void 0),
    p = false,
    f = 0;
  for (let d = 0; d < c.length; d++) {
    let h = c[d];
    if (h.type === 'run') {
      let g = h.content
        .filter((m) => m.type === 'text')
        .map((m) => m.text)
        .join('');
      if (((f += g.length), !p && f >= t.position.offset)) {
        (c.splice(d + 1, 0, a), (p = true));
        break;
      }
    }
  }
  return (p || c.push(a), (i.content = c), n);
}
function Wi(e, t) {
  let n = V(e),
    r = n.package.document,
    { start: o, end: i } = t.range;
  if (o.paragraphIndex !== i.paragraphIndex)
    throw new Error('Hyperlinks cannot span multiple paragraphs');
  let s = j(r, o.paragraphIndex);
  if (s === -1) throw new Error(`Paragraph index ${o.paragraphIndex} not found`);
  let a = r.content[s],
    c = Ce(a),
    p = t.displayText || c.slice(o.offset, i.offset);
  a.content = ie(a, o.offset, i.offset);
  let f = { type: 'hyperlink', href: t.url, tooltip: t.tooltip, children: [Oe(p)] },
    d = false,
    h = 0,
    g = [];
  for (let m of a.content)
    if (m.type === 'run') {
      let b = m.content
          .filter((I) => I.type === 'text')
          .map((I) => I.text)
          .join(''),
        C = h + b.length;
      if (!d && h <= o.offset && o.offset <= C) {
        let I = o.offset - h;
        (I > 0 && g.push({ ...m, content: [{ type: 'text', text: b.slice(0, I) }] }),
          g.push(f),
          I < b.length && g.push({ ...m, content: [{ type: 'text', text: b.slice(I) }] }),
          (d = true));
      } else g.push(m);
      h = C;
    } else g.push(m);
  return (d || g.push(f), (a.content = g), n);
}
function _i(e, t) {
  let n = V(e),
    r = n.package.document,
    { start: o } = t.range,
    i = j(r, o.paragraphIndex);
  if (i === -1) throw new Error(`Paragraph index ${o.paragraphIndex} not found`);
  let s = r.content[i],
    a = [];
  for (let c of s.content)
    if (c.type === 'hyperlink') for (let p of c.children) p.type === 'run' && a.push(p);
    else a.push(c);
  return ((s.content = a), n);
}
function Zn(e, t) {
  let n = V(e),
    r = n.package.document,
    o = j(r, t.position.paragraphIndex);
  if (o === -1) throw new Error(`Paragraph index ${t.position.paragraphIndex} not found`);
  let i = r.content[o],
    s = Ce(i),
    a = ie({ ...i, content: [...i.content] }, t.position.offset, s.length),
    c = ie({ ...i, content: [...i.content] }, 0, t.position.offset);
  i.content = a;
  let p = { type: 'paragraph', formatting: i.formatting, content: c };
  return (r.content.splice(o + 1, 0, p), n);
}
function Ui(e, t) {
  let n = V(e),
    r = n.package.document,
    o = j(r, t.paragraphIndex);
  if (o === -1) throw new Error(`Paragraph index ${t.paragraphIndex} not found`);
  let i = r.content[o],
    s = [];
  for (let a = 1; a <= t.count; a++) {
    let c = j(r, t.paragraphIndex + a);
    if (c !== -1) {
      let p = r.content[c];
      (i.content.push(...p.content), s.push(c));
    }
  }
  for (let a = s.length - 1; a >= 0; a--) r.content.splice(s[a], 1);
  return n;
}
function Gi(e, t) {
  return Zn(e, { position: t.position });
}
function qi(e, t) {
  let n = V(e);
  return (
    n.templateVariables || (n.templateVariables = []),
    n.templateVariables.includes(t.name) || n.templateVariables.push(t.name),
    n
  );
}
function Ji(e, t) {
  let n = V(e),
    r = n.package.document;
  function o(a) {
    for (let c of a.content)
      if (c.type === 'text')
        for (let [p, f] of Object.entries(t.values)) {
          let d = new RegExp(`\\{${p}\\}`, 'g');
          c.text = c.text.replace(d, f);
        }
  }
  function i(a) {
    for (let c of a.content)
      if (c.type === 'run') o(c);
      else if (c.type === 'hyperlink') for (let p of c.children) p.type === 'run' && o(p);
  }
  function s(a) {
    if (a.type === 'paragraph') i(a);
    else if (a.type === 'table')
      for (let c of a.rows) for (let p of c.cells) for (let f of p.content) s(f);
  }
  for (let a of r.content) s(a);
  return n;
}
var lt = bt(() => {
  Fe();
});
Fe();
function qe(e, t) {
  let n = t,
    { position: r, variableName: o } = n,
    i = JSON.parse(JSON.stringify(e)),
    a = i.package.document.content.filter((f) => f.type === 'paragraph');
  if (r.paragraphIndex >= a.length)
    throw new Error(`Paragraph index ${r.paragraphIndex} out of bounds`);
  let c = a[r.paragraphIndex],
    p = `{${o}}`;
  return (
    Tt(c, r.offset, p),
    i.templateVariables || (i.templateVariables = []),
    i.templateVariables.includes(o) || i.templateVariables.push(o),
    i
  );
}
function Je(e, t) {
  let n = t,
    { range: r, variableName: o } = n,
    i = JSON.parse(JSON.stringify(e)),
    a = i.package.document.content.filter((f) => f.type === 'paragraph');
  if (r.start.paragraphIndex !== r.end.paragraphIndex)
    throw new Error('Template variable replacement cannot span multiple paragraphs');
  if (r.start.paragraphIndex >= a.length)
    throw new Error(`Paragraph index ${r.start.paragraphIndex} out of bounds`);
  let c = a[r.start.paragraphIndex];
  Ir(c, r.start.offset, r.end.offset);
  let p = `{${o}}`;
  return (
    Tt(c, r.start.offset, p),
    i.templateVariables || (i.templateVariables = []),
    i.templateVariables.includes(o) || i.templateVariables.push(o),
    i
  );
}
function Tt(e, t, n) {
  let r = 0,
    o = false;
  for (let i = 0; i < e.content.length; i++) {
    let s = e.content[i];
    if (s.type === 'run') {
      let a = Ge(s),
        c = r,
        p = r + a.length;
      if (!o && t >= c && t <= p) {
        let f = t - c,
          d = a.slice(0, f),
          h = a.slice(f),
          g = [];
        for (let m = 0; m < i; m++) g.push(e.content[m]);
        (d &&
          g.push({ type: 'run', formatting: s.formatting, content: [{ type: 'text', text: d }] }),
          g.push({ type: 'run', formatting: s.formatting, content: [{ type: 'text', text: n }] }),
          h &&
            g.push({
              type: 'run',
              formatting: s.formatting,
              content: [{ type: 'text', text: h }],
            }));
        for (let m = i + 1; m < e.content.length; m++) g.push(e.content[m]);
        ((e.content = g), (o = true));
        break;
      }
      r = p;
    } else if (s.type === 'hyperlink')
      for (let a of s.children) a.type === 'run' && (r += Ge(a).length);
  }
  o || e.content.push({ type: 'run', content: [{ type: 'text', text: n }] });
}
function Ir(e, t, n) {
  let r = [],
    o = 0;
  for (let i of e.content)
    if (i.type === 'run') {
      let s = Ge(i),
        a = o,
        c = o + s.length;
      if (c <= t || a >= n) r.push(i);
      else {
        let p = '';
        (a < t && (p += s.slice(0, t - a)),
          c > n && (p += s.slice(n - a)),
          p.length > 0 &&
            r.push({
              type: 'run',
              formatting: i.formatting,
              content: [{ type: 'text', text: p }],
            }));
      }
      o = c;
    } else r.push(i);
  e.content = r;
}
function Ge(e) {
  return e.content
    .filter((t) => t.type === 'text')
    .map((t) => t.text)
    .join('');
}
function Ft(e) {
  let t = [],
    n = { body: [], headers: [], footers: [], footnotes: [], endnotes: [], textBoxes: [] };
  if (e.package?.document) {
    let o = Er(e.package.document);
    (o.forEach((i) => {
      t.push({ name: i, location: 'body' });
    }),
      (n.body = Array.from(new Set(o)).sort()));
  }
  if (
    (e.package?.document?.sections &&
      e.package.document.sections.forEach((o, i) => {
        o.properties.headerReferences && o.properties.headerReferences.forEach((s) => {});
      }),
    e.package?.footnotes)
  ) {
    let o = vt(e.package.footnotes);
    (o.forEach((i) => {
      t.push({ name: i, location: 'footnote' });
    }),
      (n.footnotes = Array.from(new Set(o)).sort()));
  }
  if (e.package?.endnotes) {
    let o = vt(e.package.endnotes);
    (o.forEach((i) => {
      t.push({ name: i, location: 'endnote' });
    }),
      (n.endnotes = Array.from(new Set(o)).sort()));
  }
  e.templateVariables &&
    e.templateVariables.forEach((o) => {
      t.some((i) => i.name === o) || t.push({ name: o, location: 'body' });
    });
  let r = new Set();
  return (
    t.forEach((o) => r.add(o.name)),
    { variables: Array.from(r).sort(), totalOccurrences: t.length, byLocation: n, occurrences: t }
  );
}
function Er(e) {
  let t = [];
  if ((e.content && t.push(...Ct(e.content)), e.sections))
    for (let n of e.sections) n.content && t.push(...Ct(n.content));
  return t;
}
function Ct(e) {
  let t = [];
  for (let n of e)
    n.type === 'paragraph' ? t.push(...Ze(n)) : n.type === 'table' && t.push(...Pt(n));
  return t;
}
function Ze(e) {
  let t = [];
  if (!e.content) return t;
  for (let n of e.content)
    n.type === 'run'
      ? t.push(...ye(n))
      : n.type === 'hyperlink'
        ? t.push(...Mr(n))
        : n.type === 'simpleField'
          ? t.push(...$r(n))
          : n.type === 'complexField' && t.push(...Dr(n));
  return t;
}
function ye(e) {
  let t = [];
  if (!e.content) return t;
  for (let n of e.content) n.type === 'text' && n.text && t.push(...St(n.text));
  return t;
}
function Mr(e) {
  let t = [];
  if (!e.children) return t;
  for (let n of e.children) n.type === 'run' && t.push(...ye(n));
  return t;
}
function $r(e) {
  let t = [];
  if ((e.instruction && t.push(...St(e.instruction)), e.content))
    for (let n of e.content) n.type === 'run' && t.push(...ye(n));
  return t;
}
function Dr(e) {
  let t = [];
  if (e.fieldCode) for (let n of e.fieldCode) n.type === 'run' && t.push(...ye(n));
  if (e.fieldResult) for (let n of e.fieldResult) n.type === 'run' && t.push(...ye(n));
  return t;
}
function Pt(e) {
  let t = [];
  if (!e.rows) return t;
  for (let n of e.rows) if (n.cells) for (let r of n.cells) t.push(...Ar(r));
  return t;
}
function Ar(e) {
  let t = [];
  if (!e.content) return t;
  for (let n of e.content)
    n.type === 'paragraph' ? t.push(...Ze(n)) : n.type === 'table' && t.push(...Pt(n));
  return t;
}
function vt(e) {
  let t = [];
  for (let n of e) if (n.content) for (let r of n.content) t.push(...Ze(r));
  return t;
}
var Br = /\{([a-zA-Z_][a-zA-Z0-9_\-\.]*)\}/g;
function St(e) {
  if (!e) return [];
  let t = [],
    n = new RegExp(Br),
    r;
  for (; (r = n.exec(e)) !== null; ) t.push(r[1]);
  return t;
}
function It(e, t, n = {}) {
  let { nullGetter: r = 'keep', linebreaks: o = true, delimiters: i } = n,
    s = [],
    a = [],
    c = [];
  try {
    let p = new kt(e),
      f = new Rt(p, {
        paragraphLoop: !0,
        linebreaks: o,
        nullGetter: (h) => {
          let g = h.value || '';
          if (r === 'error') throw new Error(`Undefined variable: ${g}`);
          return r === 'empty' ? (c.push(g), '') : (c.push(g), `{${g}}`);
        },
        delimiters: i ? { start: i.start || '{', end: i.end || '}' } : void 0,
      });
    return (
      Object.keys(t).forEach((h) => {
        t[h] !== void 0 && t[h] !== null && a.push(h);
      }),
      f.setData(t),
      f.render(),
      {
        buffer: f
          .getZip()
          .generate({
            type: 'arraybuffer',
            compression: 'DEFLATE',
            compressionOptions: { level: 6 },
          }),
        replacedVariables: a,
        unreplacedVariables: c,
        warnings: s,
      }
    );
  } catch (p) {
    throw Mt(p);
  }
}
function Et(e) {
  let t = [],
    n = [];
  try {
    let r = new kt(e),
      i = new Rt(r, { paragraphLoop: !0, linebreaks: !0 }).getFullText();
    n = Lr(i);
    let s = Nr(i);
    for (let a of s) t.push({ message: `Unclosed tag: ${a}`, variable: a, type: 'parse' });
    return { valid: t.length === 0, errors: t, tags: n };
  } catch (r) {
    return (t.push(Mt(r)), { valid: false, errors: t, tags: n });
  }
}
function Lr(e) {
  let t = [],
    n = /\{([^{}]+)\}/g,
    r;
  for (; (r = n.exec(e)) !== null; ) {
    let o = r[1].trim();
    o && !t.includes(o) && t.push(o);
  }
  return t.sort();
}
function Nr(e) {
  let t = [],
    n = 0,
    r = '';
  for (let o of e)
    o === '{' ? (n++, (r = '')) : o === '}' ? (n--, n < 0 && (n = 0)) : n > 0 && (r += o);
  return (n > 0 && r.trim() && t.push(r.trim()), t);
}
function Xr(e) {
  return 'properties' in e && typeof e.properties == 'object';
}
function Mt(e) {
  if (e instanceof Error) {
    if (Xr(e) && e.properties?.errors) {
      let t = e.properties.errors[0];
      return {
        message: t?.message || 'Template processing error',
        variable: t?.properties?.tag,
        type: 'render',
        originalError: e,
      };
    }
    if (e.message.includes('undefined')) {
      let t = e.message.match(/undefined (?:variable|tag):\s*(\S+)/i);
      return {
        message: e.message,
        variable: t ? t[1] : void 0,
        type: 'undefined',
        originalError: e,
      };
    }
    return e.message.includes('parse') ||
      e.message.includes('unclosed') ||
      e.message.includes('syntax')
      ? { message: e.message, type: 'parse', originalError: e }
      : { message: e.message, type: 'unknown', originalError: e };
  }
  return { message: String(e), type: 'unknown' };
}
async function $t(e) {
  let t = await dt.loadAsync(e),
    n = {
      documentXml: null,
      stylesXml: null,
      themeXml: null,
      numberingXml: null,
      fontTableXml: null,
      settingsXml: null,
      webSettingsXml: null,
      headers: new Map(),
      footers: new Map(),
      footnotesXml: null,
      endnotesXml: null,
      commentsXml: null,
      commentsExtensibleXml: null,
      documentRels: null,
      packageRels: null,
      contentTypesXml: null,
      corePropsXml: null,
      appPropsXml: null,
      customPropsXml: null,
      media: new Map(),
      fonts: new Map(),
      allXml: new Map(),
      originalZip: t,
      originalBuffer: e,
    };
  for (let [r, o] of Object.entries(t.files)) {
    if (o.dir) continue;
    let i = r.toLowerCase();
    if (i.endsWith('.xml') || i.endsWith('.rels')) {
      let s = await o.async('text');
      if ((n.allXml.set(r, s), i === 'word/document.xml')) n.documentXml = s;
      else if (i === 'word/styles.xml') n.stylesXml = s;
      else if (i === 'word/theme/theme1.xml') n.themeXml = s;
      else if (i === 'word/numbering.xml') n.numberingXml = s;
      else if (i === 'word/fonttable.xml') n.fontTableXml = s;
      else if (i === 'word/settings.xml') n.settingsXml = s;
      else if (i === 'word/websettings.xml') n.webSettingsXml = s;
      else if (i === 'word/footnotes.xml') n.footnotesXml = s;
      else if (i === 'word/endnotes.xml') n.endnotesXml = s;
      else if (i === 'word/comments.xml') n.commentsXml = s;
      else if (i === 'word/commentsextensible.xml' || i === 'word/commentsextended.xml')
        n.commentsExtensibleXml || (n.commentsExtensibleXml = s);
      else if (i === 'word/_rels/document.xml.rels') n.documentRels = s;
      else if (i === '_rels/.rels') n.packageRels = s;
      else if (i === '[content_types].xml') n.contentTypesXml = s;
      else if (i === 'docprops/core.xml') n.corePropsXml = s;
      else if (i === 'docprops/app.xml') n.appPropsXml = s;
      else if (i === 'docprops/custom.xml') n.customPropsXml = s;
      else if (i.match(/^word\/header\d+\.xml$/)) {
        let a = r.split('/').pop() || r;
        n.headers.set(a, s);
      } else if (i.match(/^word\/footer\d+\.xml$/)) {
        let a = r.split('/').pop() || r;
        n.footers.set(a, s);
      }
    } else if (i.startsWith('word/media/')) {
      let s = await o.async('arraybuffer');
      n.media.set(r, s);
    } else if (i.startsWith('word/fonts/')) {
      let s = await o.async('arraybuffer');
      n.fonts.set(r, s);
    }
  }
  return n;
}
function Dt(e) {
  switch (e.toLowerCase().split('.').pop()) {
    case 'png':
      return 'image/png';
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'gif':
      return 'image/gif';
    case 'bmp':
      return 'image/bmp';
    case 'tif':
    case 'tiff':
      return 'image/tiff';
    case 'wmf':
      return 'image/x-wmf';
    case 'emf':
      return 'image/x-emf';
    case 'svg':
      return 'image/svg+xml';
    case 'webp':
      return 'image/webp';
    default:
      return 'application/octet-stream';
  }
}
function _(e) {
  return xml2js(e, {
    compact: false,
    ignoreComment: true,
    ignoreInstruction: true,
    ignoreDoctype: true,
    alwaysArray: false,
    trim: false,
    captureSpacesBetweenElements: true,
    attributesKey: 'attributes',
    textKey: 'text',
  });
}
function At(e) {
  return js2xml({ elements: [e] }, { compact: false, spaces: 0 });
}
function Y(e) {
  try {
    let t = _(e);
    return t.elements && t.elements.length > 0
      ? (t.elements.find((n) => n.type === 'element') ?? null)
      : t;
  } catch (t) {
    return (console.warn('Failed to parse XML:', t), null);
  }
}
function Pe(e) {
  let t = e.indexOf(':');
  return t >= 0 ? e.substring(t + 1) : e;
}
function u(e, t, n) {
  if (!e || !e.elements) return null;
  let r = `${t}:${n}`;
  for (let o of e.elements)
    if (o.type === 'element' && (o.name === r || Pe(o.name || '') === n)) return o;
  return null;
}
function A(e, t, n) {
  if (!e || !e.elements) return [];
  let r = `${t}:${n}`,
    o = [];
  for (let i of e.elements)
    i.type === 'element' && (i.name === r || Pe(i.name || '') === n) && o.push(i);
  return o;
}
function X(e) {
  return !e || !e.elements ? [] : e.elements.filter((t) => t.type === 'element');
}
function l(e, t, n) {
  if (!e || !e.attributes) return null;
  let r = e.attributes;
  if (t) {
    let o = `${t}:${n}`;
    if (o in r) return r[o];
  }
  return n in r ? r[n] : null;
}
function Se(e) {
  if (!e) return '';
  if ('text' in e && typeof e.text == 'string') return e.text;
  if (!e.elements) return '';
  let t = '';
  for (let n of e.elements)
    n.type === 'text' && 'text' in n ? (t += n.text ?? '') : n.type === 'element' && (t += Se(n));
  return t;
}
function w(e, t, n, r = 1) {
  let o = l(e, t, n);
  if (o === null) return;
  let i = parseInt(o, 10);
  if (!isNaN(i)) return i * r;
}
function v(e, t = 'w') {
  if (!e) return false;
  let n = l(e, t, 'val');
  return n === null ? true : !(n === '0' || n === 'false' || n === 'off');
}
var oe = {
  hyperlink: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink',
  header: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/header',
  footer: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer',
};
function ke(e) {
  let t = new Map();
  if (!e || e.trim().length === 0) return t;
  let n = Y(e);
  if (!n) return (console.warn('Failed to parse relationships XML'), t);
  let r = X(n);
  for (let o of r) {
    let i = o.name || '';
    if (!i.endsWith('Relationship') && !i.includes(':Relationship')) continue;
    let s = l(o, null, 'Id'),
      a = l(o, null, 'Type'),
      c = l(o, null, 'Target'),
      p = l(o, null, 'TargetMode');
    if (!s || !a || !c) {
      console.warn('Relationship missing required attributes:', { id: s, type: a, target: c });
      continue;
    }
    let f = { id: s, type: a, target: c };
    (p === 'External'
      ? (f.targetMode = 'External')
      : p === 'Internal' && (f.targetMode = 'Internal'),
      t.set(s, f));
  }
  return t;
}
function Bt(e) {
  return e.type === oe.hyperlink && e.targetMode === 'External';
}
var Xt = {
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
  Re = {
    majorFont: { latin: 'Calibri Light', ea: '', cs: '', fonts: {} },
    minorFont: { latin: 'Calibri', ea: '', cs: '', fonts: {} },
  },
  Ye = { name: 'Office Theme', colorScheme: Xt, fontScheme: Re },
  zr = [
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
  ];
function Vr(e) {
  if (!e) return null;
  switch (Pe(e.name || '')) {
    case 'srgbClr':
      return l(e, 'a', 'val') ?? l(e, null, 'val') ?? null;
    case 'sysClr': {
      let n = l(e, 'a', 'lastClr') ?? l(e, null, 'lastClr');
      if (n) return n;
      switch (l(e, 'a', 'val') ?? l(e, null, 'val')) {
        case 'windowText':
        case 'menuText':
        case 'captionText':
        case 'btnText':
          return '000000';
        case 'window':
        case 'menu':
        case 'btnFace':
        case 'btnHighlight':
          return 'FFFFFF';
        case 'highlight':
          return '0078D7';
        case 'highlightText':
          return 'FFFFFF';
        case 'grayText':
          return '808080';
        default:
          return null;
      }
    }
    case 'schemeClr': {
      l(e, 'a', 'val') ?? l(e, null, 'val');
      return null;
    }
    default:
      return null;
  }
}
function Wr(e) {
  let t = { ...Xt };
  if (!e) return t;
  for (let n of zr) {
    let r = u(e, 'a', n);
    if (r) {
      let o = X(r);
      if (o.length > 0) {
        let i = Vr(o[0]);
        i && (t[n] = i);
      }
    }
  }
  return t;
}
function Lt(e) {
  let t = { latin: '', ea: '', cs: '', fonts: {} };
  if (!e) return t;
  let n = u(e, 'a', 'latin');
  n && (t.latin = l(n, 'a', 'typeface') ?? l(n, null, 'typeface') ?? '');
  let r = u(e, 'a', 'ea');
  r && (t.ea = l(r, 'a', 'typeface') ?? l(r, null, 'typeface') ?? '');
  let o = u(e, 'a', 'cs');
  o && (t.cs = l(o, 'a', 'typeface') ?? l(o, null, 'typeface') ?? '');
  let i = A(e, 'a', 'font');
  for (let s of i) {
    let a = l(s, 'a', 'script') ?? l(s, null, 'script'),
      c = l(s, 'a', 'typeface') ?? l(s, null, 'typeface');
    a && c && ((t.fonts = t.fonts || {}), (t.fonts[a] = c));
  }
  return t;
}
function _r(e) {
  let t = { ...Re };
  if (!e) return t;
  let n = u(e, 'a', 'majorFont');
  n && (t.majorFont = Lt(n));
  let r = u(e, 'a', 'minorFont');
  return (r && (t.minorFont = Lt(r)), t);
}
function Ht(e) {
  if (!e) return { ...Ye };
  try {
    let t = Y(e);
    if (!t) return { ...Ye };
    let n = l(t, 'a', 'name') ?? l(t, null, 'name') ?? 'Office Theme',
      r = u(t, 'a', 'themeElements'),
      o = u(r, 'a', 'clrScheme'),
      i = Wr(o),
      s = u(r, 'a', 'fontScheme'),
      a = _r(s);
    return { name: n, colorScheme: i, fontScheme: a };
  } catch (t) {
    return (console.warn('Failed to parse theme:', t), { ...Ye });
  }
}
function Ur(e, t = 'latin') {
  if (!e?.fontScheme?.majorFont) return Re.majorFont?.latin ?? 'Calibri Light';
  let n = e.fontScheme.majorFont;
  return t === 'latin'
    ? n.latin || 'Calibri Light'
    : t === 'ea'
      ? n.ea || ''
      : t === 'cs'
        ? n.cs || ''
        : n.fonts?.[t]
          ? n.fonts[t]
          : n.latin || 'Calibri Light';
}
function Nt(e, t = 'latin') {
  if (!e?.fontScheme?.minorFont) return Re.minorFont?.latin ?? 'Calibri';
  let n = e.fontScheme.minorFont;
  return t === 'latin'
    ? n.latin || 'Calibri'
    : t === 'ea'
      ? n.ea || ''
      : t === 'cs'
        ? n.cs || ''
        : n.fonts?.[t]
          ? n.fonts[t]
          : n.latin || 'Calibri';
}
function Z(e, t) {
  if (!t) return 'Calibri';
  let n = t.toLowerCase().includes('major'),
    r = t.toLowerCase().includes('minor'),
    o = 'latin',
    i = t.toLowerCase();
  return (
    i.includes('eastasia') ? (o = 'ea') : (i.includes('bidi') || i.includes('cs')) && (o = 'cs'),
    n ? Ur(e, o) : r ? Nt(e, o) : Nt(e, 'latin')
  );
}
function Ie(e, t) {
  if (!e) return;
  let n = {},
    r = u(e, 'w', 'b');
  r && (n.bold = v(r));
  let o = u(e, 'w', 'bCs');
  o && (n.boldCs = v(o));
  let i = u(e, 'w', 'i');
  i && (n.italic = v(i));
  let s = u(e, 'w', 'iCs');
  s && (n.italicCs = v(s));
  let a = u(e, 'w', 'u');
  if (a) {
    let M = l(a, 'w', 'val');
    if (M) {
      n.underline = { style: M };
      let E = l(a, 'w', 'color'),
        N = l(a, 'w', 'themeColor');
      (E || N) && (n.underline.color = Ke(E, N, l(a, 'w', 'themeTint'), l(a, 'w', 'themeShade')));
    }
  }
  let c = u(e, 'w', 'strike');
  c && (n.strike = v(c));
  let p = u(e, 'w', 'dstrike');
  p && (n.doubleStrike = v(p));
  let f = u(e, 'w', 'vertAlign');
  if (f) {
    let M = l(f, 'w', 'val');
    (M === 'superscript' || M === 'subscript' || M === 'baseline') && (n.vertAlign = M);
  }
  let d = u(e, 'w', 'smallCaps');
  d && (n.smallCaps = v(d));
  let h = u(e, 'w', 'caps');
  h && (n.allCaps = v(h));
  let g = u(e, 'w', 'vanish');
  g && (n.hidden = v(g));
  let m = u(e, 'w', 'color');
  m &&
    (n.color = Ke(
      l(m, 'w', 'val'),
      l(m, 'w', 'themeColor'),
      l(m, 'w', 'themeTint'),
      l(m, 'w', 'themeShade')
    ));
  let b = u(e, 'w', 'highlight');
  if (b) {
    let M = l(b, 'w', 'val');
    M && (n.highlight = M);
  }
  let C = u(e, 'w', 'shd');
  C && (n.shading = Ee(C));
  let I = u(e, 'w', 'sz');
  if (I) {
    let M = w(I, 'w', 'val');
    M !== void 0 && (n.fontSize = M);
  }
  let S = u(e, 'w', 'szCs');
  if (S) {
    let M = w(S, 'w', 'val');
    M !== void 0 && (n.fontSizeCs = M);
  }
  let F = u(e, 'w', 'rFonts');
  if (F) {
    n.fontFamily = {
      ascii: l(F, 'w', 'ascii') ?? void 0,
      hAnsi: l(F, 'w', 'hAnsi') ?? void 0,
      eastAsia: l(F, 'w', 'eastAsia') ?? void 0,
      cs: l(F, 'w', 'cs') ?? void 0,
    };
    let M = l(F, 'w', 'asciiTheme');
    M &&
      ((n.fontFamily.asciiTheme = M), t && !n.fontFamily.ascii && (n.fontFamily.ascii = Z(t, M)));
    let E = l(F, 'w', 'hAnsiTheme');
    E &&
      ((n.fontFamily.hAnsiTheme = E), t && !n.fontFamily.hAnsi && (n.fontFamily.hAnsi = Z(t, E)));
    let N = l(F, 'w', 'eastAsiaTheme');
    N &&
      ((n.fontFamily.eastAsiaTheme = N),
      t && !n.fontFamily.eastAsia && (n.fontFamily.eastAsia = Z(t, N)));
    let J = l(F, 'w', 'cstheme');
    J && ((n.fontFamily.csTheme = J), t && !n.fontFamily.cs && (n.fontFamily.cs = Z(t, J)));
  }
  let y = u(e, 'w', 'spacing');
  if (y) {
    let M = w(y, 'w', 'val');
    M !== void 0 && (n.spacing = M);
  }
  let x = u(e, 'w', 'position');
  if (x) {
    let M = w(x, 'w', 'val');
    M !== void 0 && (n.position = M);
  }
  let P = u(e, 'w', 'w');
  if (P) {
    let M = w(P, 'w', 'val');
    M !== void 0 && (n.scale = M);
  }
  let T = u(e, 'w', 'kern');
  if (T) {
    let M = w(T, 'w', 'val');
    M !== void 0 && (n.kerning = M);
  }
  let k = u(e, 'w', 'effect');
  if (k) {
    let M = l(k, 'w', 'val');
    M && (n.effect = M);
  }
  let $ = u(e, 'w', 'em');
  if ($) {
    let M = l($, 'w', 'val');
    M && (n.emphasisMark = M);
  }
  let D = u(e, 'w', 'emboss');
  D && (n.emboss = v(D));
  let B = u(e, 'w', 'imprint');
  B && (n.imprint = v(B));
  let O = u(e, 'w', 'outline');
  O && (n.outline = v(O));
  let q = u(e, 'w', 'shadow');
  q && (n.shadow = v(q));
  let ne = u(e, 'w', 'rtl');
  ne && (n.rtl = v(ne));
  let H = u(e, 'w', 'cs');
  H && (n.cs = v(H));
  let z = u(e, 'w', 'rStyle');
  if (z) {
    let M = l(z, 'w', 'val');
    M && (n.styleId = M);
  }
  return Object.keys(n).length > 0 ? n : void 0;
}
function Ke(e, t, n, r) {
  let o = {};
  return (
    e && e !== 'auto' ? (o.rgb = e) : e === 'auto' && (o.auto = true),
    t && (o.themeColor = t),
    n && (o.themeTint = n),
    r && (o.themeShade = r),
    o
  );
}
function Ee(e) {
  if (!e) return;
  let t = {},
    n = l(e, 'w', 'color');
  n && n !== 'auto' && (t.color = { rgb: n });
  let r = l(e, 'w', 'fill');
  r && r !== 'auto' && (t.fill = { rgb: r });
  let o = l(e, 'w', 'themeFill');
  o && ((t.fill = t.fill || {}), (t.fill.themeColor = o));
  let i = l(e, 'w', 'themeFillTint');
  i && t.fill && (t.fill.themeTint = i);
  let s = l(e, 'w', 'themeFillShade');
  s && t.fill && (t.fill.themeShade = s);
  let a = l(e, 'w', 'val');
  return (a && (t.pattern = a), Object.keys(t).length > 0 ? t : void 0);
}
function U(e) {
  if (!e) return;
  let t = l(e, 'w', 'val');
  if (!t) return;
  let n = { style: t },
    r = l(e, 'w', 'color'),
    o = l(e, 'w', 'themeColor');
  (r || o) && (n.color = Ke(r, o, l(e, 'w', 'themeTint'), l(e, 'w', 'themeShade')));
  let i = w(e, 'w', 'sz');
  i !== void 0 && (n.size = i);
  let s = w(e, 'w', 'space');
  s !== void 0 && (n.space = s);
  let a = l(e, 'w', 'shadow');
  a && (n.shadow = a === '1' || a === 'true');
  let c = l(e, 'w', 'frame');
  return (c && (n.frame = c === '1' || c === 'true'), n);
}
function Gr(e) {
  if (!e) return;
  let t = A(e, 'w', 'tab');
  if (t.length === 0) return;
  let n = [];
  for (let r of t) {
    let o = w(r, 'w', 'pos'),
      i = l(r, 'w', 'val');
    if (o !== void 0 && i) {
      let s = { position: o, alignment: i },
        a = l(r, 'w', 'leader');
      (a && (s.leader = a), n.push(s));
    }
  }
  return n.length > 0 ? n : void 0;
}
function Qe(e, t) {
  if (!e) return;
  let n = {},
    r = u(e, 'w', 'jc');
  if (r) {
    let x = l(r, 'w', 'val');
    x && (n.alignment = x);
  }
  let o = u(e, 'w', 'bidi');
  o && (n.bidi = v(o));
  let i = u(e, 'w', 'spacing');
  if (i) {
    let x = w(i, 'w', 'before');
    x !== void 0 && (n.spaceBefore = x);
    let P = w(i, 'w', 'after');
    P !== void 0 && (n.spaceAfter = P);
    let T = w(i, 'w', 'line');
    T !== void 0 && (n.lineSpacing = T);
    let k = l(i, 'w', 'lineRule');
    k && (n.lineSpacingRule = k);
    let $ = l(i, 'w', 'beforeAutospacing');
    $ && (n.beforeAutospacing = $ === '1' || $ === 'true');
    let D = l(i, 'w', 'afterAutospacing');
    D && (n.afterAutospacing = D === '1' || D === 'true');
  }
  let s = u(e, 'w', 'ind');
  if (s) {
    let x = w(s, 'w', 'left');
    x !== void 0 && (n.indentLeft = x);
    let P = w(s, 'w', 'right');
    P !== void 0 && (n.indentRight = P);
    let T = w(s, 'w', 'firstLine');
    T !== void 0 && (n.indentFirstLine = T);
    let k = w(s, 'w', 'hanging');
    k !== void 0 && ((n.indentFirstLine = -k), (n.hangingIndent = true));
  }
  let a = u(e, 'w', 'pBdr');
  if (a) {
    let x = {},
      P = U(u(a, 'w', 'top'));
    P && (x.top = P);
    let T = U(u(a, 'w', 'bottom'));
    T && (x.bottom = T);
    let k = U(u(a, 'w', 'left'));
    k && (x.left = k);
    let $ = U(u(a, 'w', 'right'));
    $ && (x.right = $);
    let D = U(u(a, 'w', 'between'));
    D && (x.between = D);
    let B = U(u(a, 'w', 'bar'));
    (B && (x.bar = B), Object.keys(x).length > 0 && (n.borders = x));
  }
  let c = u(e, 'w', 'shd');
  c && (n.shading = Ee(c));
  let p = u(e, 'w', 'tabs');
  p && (n.tabs = Gr(p));
  let f = u(e, 'w', 'keepNext');
  f && (n.keepNext = v(f));
  let d = u(e, 'w', 'keepLines');
  d && (n.keepLines = v(d));
  let h = u(e, 'w', 'widowControl');
  h && (n.widowControl = v(h));
  let g = u(e, 'w', 'pageBreakBefore');
  g && (n.pageBreakBefore = v(g));
  let m = u(e, 'w', 'contextualSpacing');
  m && (n.contextualSpacing = v(m));
  let b = u(e, 'w', 'numPr');
  if (b) {
    let x = u(b, 'w', 'numId'),
      P = u(b, 'w', 'ilvl');
    if (x || P) {
      if (((n.numPr = {}), x)) {
        let T = w(x, 'w', 'val');
        T !== void 0 && (n.numPr.numId = T);
      }
      if (P) {
        let T = w(P, 'w', 'val');
        T !== void 0 && (n.numPr.ilvl = T);
      }
    }
  }
  let C = u(e, 'w', 'outlineLvl');
  if (C) {
    let x = w(C, 'w', 'val');
    x !== void 0 && (n.outlineLevel = x);
  }
  let I = u(e, 'w', 'pStyle');
  if (I) {
    let x = l(I, 'w', 'val');
    x && (n.styleId = x);
  }
  let S = u(e, 'w', 'suppressLineNumbers');
  S && (n.suppressLineNumbers = v(S));
  let F = u(e, 'w', 'suppressAutoHyphens');
  F && (n.suppressAutoHyphens = v(F));
  let y = u(e, 'w', 'rPr');
  return (y && (n.runProperties = Ie(y, t)), Object.keys(n).length > 0 ? n : void 0);
}
function K(e) {
  if (!e) return;
  let t = w(e, 'w', 'w'),
    n = l(e, 'w', 'type');
  if (t !== void 0 && n) return { value: t, type: n };
}
function Vt(e) {
  if (!e) return;
  let t = {},
    n = U(u(e, 'w', 'top'));
  n && (t.top = n);
  let r = U(u(e, 'w', 'bottom'));
  r && (t.bottom = r);
  let o = U(u(e, 'w', 'left'));
  o && (t.left = o);
  let i = U(u(e, 'w', 'right'));
  i && (t.right = i);
  let s = U(u(e, 'w', 'insideH'));
  s && (t.insideH = s);
  let a = U(u(e, 'w', 'insideV'));
  return (a && (t.insideV = a), Object.keys(t).length > 0 ? t : void 0);
}
function Wt(e) {
  if (!e) return;
  let t = {},
    n = K(u(e, 'w', 'top'));
  n && (t.top = n);
  let r = K(u(e, 'w', 'bottom'));
  r && (t.bottom = r);
  let o = K(u(e, 'w', 'left'));
  o && (t.left = o);
  let i = K(u(e, 'w', 'right'));
  return (i && (t.right = i), Object.keys(t).length > 0 ? t : void 0);
}
function qr(e) {
  if (!e) return;
  let t = {},
    n = l(e, 'w', 'val');
  if (n) {
    let p = parseInt(n, 16);
    isNaN(p) ||
      ((t.firstRow = (p & 32) !== 0),
      (t.lastRow = (p & 64) !== 0),
      (t.firstColumn = (p & 128) !== 0),
      (t.lastColumn = (p & 256) !== 0),
      (t.noHBand = (p & 512) !== 0),
      (t.noVBand = (p & 1024) !== 0));
  }
  let r = l(e, 'w', 'firstColumn');
  r && (t.firstColumn = r === '1');
  let o = l(e, 'w', 'firstRow');
  o && (t.firstRow = o === '1');
  let i = l(e, 'w', 'lastColumn');
  i && (t.lastColumn = i === '1');
  let s = l(e, 'w', 'lastRow');
  s && (t.lastRow = s === '1');
  let a = l(e, 'w', 'noHBand');
  a && (t.noHBand = a === '1');
  let c = l(e, 'w', 'noVBand');
  return (c && (t.noVBand = c === '1'), Object.keys(t).length > 0 ? t : void 0);
}
function Ot(e, t) {
  if (!e) return;
  let n = {},
    r = u(e, 'w', 'tblW');
  r && (n.width = K(r));
  let o = u(e, 'w', 'jc');
  if (o) {
    let m = l(o, 'w', 'val');
    (m === 'left' || m === 'center' || m === 'right') && (n.justification = m);
  }
  let i = u(e, 'w', 'tblCellSpacing');
  i && (n.cellSpacing = K(i));
  let s = u(e, 'w', 'tblInd');
  s && (n.indent = K(s));
  let a = u(e, 'w', 'tblBorders');
  a && (n.borders = Vt(a));
  let c = u(e, 'w', 'tblCellMar');
  c && (n.cellMargins = Wt(c));
  let p = u(e, 'w', 'tblLayout');
  if (p) {
    let m = l(p, 'w', 'type');
    (m === 'fixed' || m === 'autofit') && (n.layout = m);
  }
  let f = u(e, 'w', 'tblStyle');
  if (f) {
    let m = l(f, 'w', 'val');
    m && (n.styleId = m);
  }
  let d = u(e, 'w', 'tblLook');
  d && (n.look = qr(d));
  let h = u(e, 'w', 'shd');
  h && (n.shading = Ee(h));
  let g = u(e, 'w', 'bidiVisual');
  return (g && (n.bidi = v(g)), Object.keys(n).length > 0 ? n : void 0);
}
function jt(e) {
  if (!e) return;
  let t = {},
    n = u(e, 'w', 'trHeight');
  if (n) {
    t.height = K(n);
    let a = l(n, 'w', 'hRule');
    a && (t.heightRule = a);
  }
  let r = u(e, 'w', 'tblHeader');
  r && (t.header = v(r));
  let o = u(e, 'w', 'cantSplit');
  o && (t.cantSplit = v(o));
  let i = u(e, 'w', 'jc');
  if (i) {
    let a = l(i, 'w', 'val');
    (a === 'left' || a === 'center' || a === 'right') && (t.justification = a);
  }
  let s = u(e, 'w', 'hidden');
  return (s && (t.hidden = v(s)), Object.keys(t).length > 0 ? t : void 0);
}
function zt(e, t) {
  if (!e) return;
  let n = {},
    r = u(e, 'w', 'tcW');
  r && (n.width = K(r));
  let o = u(e, 'w', 'tcBorders');
  o && (n.borders = Vt(o));
  let i = u(e, 'w', 'tcMar');
  i && (n.margins = Wt(i));
  let s = u(e, 'w', 'shd');
  s && (n.shading = Ee(s));
  let a = u(e, 'w', 'vAlign');
  if (a) {
    let m = l(a, 'w', 'val');
    (m === 'top' || m === 'center' || m === 'bottom') && (n.verticalAlign = m);
  }
  let c = u(e, 'w', 'textDirection');
  if (c) {
    let m = l(c, 'w', 'val');
    m && (n.textDirection = m);
  }
  let p = u(e, 'w', 'gridSpan');
  if (p) {
    let m = w(p, 'w', 'val');
    m !== void 0 && (n.gridSpan = m);
  }
  let f = u(e, 'w', 'vMerge');
  if (f) {
    let m = l(f, 'w', 'val');
    n.vMerge = m === 'restart' ? 'restart' : 'continue';
  }
  let d = u(e, 'w', 'tcFitText');
  d && (n.fitText = v(d));
  let h = u(e, 'w', 'noWrap');
  h && (n.noWrap = v(h));
  let g = u(e, 'w', 'hideMark');
  return (g && (n.hideMark = v(g)), Object.keys(n).length > 0 ? n : void 0);
}
function Jr(e, t) {
  let n = { styleId: l(e, 'w', 'styleId') ?? '', type: l(e, 'w', 'type') ?? 'paragraph' },
    r = l(e, 'w', 'default');
  r && (n.default = r === '1' || r === 'true');
  let o = u(e, 'w', 'name');
  o && (n.name = l(o, 'w', 'val') ?? void 0);
  let i = u(e, 'w', 'basedOn');
  i && (n.basedOn = l(i, 'w', 'val') ?? void 0);
  let s = u(e, 'w', 'next');
  s && (n.next = l(s, 'w', 'val') ?? void 0);
  let a = u(e, 'w', 'link');
  a && (n.link = l(a, 'w', 'val') ?? void 0);
  let c = u(e, 'w', 'uiPriority');
  if (c) {
    let y = w(c, 'w', 'val');
    y !== void 0 && (n.uiPriority = y);
  }
  let p = u(e, 'w', 'hidden');
  p && (n.hidden = v(p));
  let f = u(e, 'w', 'semiHidden');
  f && (n.semiHidden = v(f));
  let d = u(e, 'w', 'unhideWhenUsed');
  d && (n.unhideWhenUsed = v(d));
  let h = u(e, 'w', 'qFormat');
  h && (n.qFormat = v(h));
  let g = u(e, 'w', 'personal');
  g && (n.personal = v(g));
  let m = u(e, 'w', 'pPr');
  m && (n.pPr = Qe(m, t));
  let b = u(e, 'w', 'rPr');
  b && (n.rPr = Ie(b, t));
  let C = u(e, 'w', 'tblPr');
  C && (n.tblPr = Ot(C));
  let I = u(e, 'w', 'trPr');
  I && (n.trPr = jt(I));
  let S = u(e, 'w', 'tcPr');
  S && (n.tcPr = zt(S));
  let F = A(e, 'w', 'tblStylePr');
  if (F.length > 0) {
    n.tblStylePr = [];
    for (let y of F) {
      let x = l(y, 'w', 'type');
      if (x) {
        let P = { type: x },
          T = u(y, 'w', 'pPr');
        T && (P.pPr = Qe(T, t));
        let k = u(y, 'w', 'rPr');
        k && (P.rPr = Ie(k, t));
        let $ = u(y, 'w', 'tblPr');
        $ && (P.tblPr = Ot($));
        let D = u(y, 'w', 'trPr');
        D && (P.trPr = jt(D));
        let B = u(y, 'w', 'tcPr');
        (B && (P.tcPr = zt(B)), n.tblStylePr.push(P));
      }
    }
  }
  return n;
}
function Zr(e, t) {
  if (!e) return;
  let n = {},
    r = u(e, 'w', 'rPrDefault');
  if (r) {
    let i = u(r, 'w', 'rPr');
    i && (n.rPr = Ie(i, t));
  }
  let o = u(e, 'w', 'pPrDefault');
  if (o) {
    let i = u(o, 'w', 'pPr');
    i && (n.pPr = Qe(i, t));
  }
  return n.rPr || n.pPr ? n : void 0;
}
function _t(e, t) {
  if (!t) return e;
  if (!e) return t ? { ...t } : void 0;
  let n = { ...e };
  for (let r of Object.keys(t)) {
    let o = t[r];
    o !== void 0 && (n[r] = typeof o == 'object' && o !== null ? { ...(n[r] || {}), ...o } : o);
  }
  return n;
}
function Yr(e, t) {
  if (!t) return e;
  if (!e) return t ? { ...t } : void 0;
  let n = { ...e };
  for (let r of Object.keys(t)) {
    let o = t[r];
    if (o !== void 0)
      if (r === 'runProperties') n.runProperties = _t(n.runProperties, t.runProperties);
      else if (r === 'borders' || r === 'numPr' || r === 'frame') {
        let i = n[r],
          s = o;
        n[r] = { ...(i || {}), ...(s || {}) };
      } else r === 'tabs' && Array.isArray(o) ? (n.tabs = [...o]) : (n[r] = o);
  }
  return n;
}
function Ut(e, t, n, r = new Set()) {
  if (r.has(e.styleId) || (r.add(e.styleId), !e.basedOn)) return e;
  let o = t.get(e.basedOn);
  if (!o) return e;
  let i = Ut(o, t, n, r),
    s = { ...e, pPr: Yr(i.pPr, e.pPr), rPr: _t(i.rPr, e.rPr) };
  return (
    e.type === 'table' &&
      ((i.tblPr || e.tblPr) && (s.tblPr = { ...(i.tblPr || {}), ...(e.tblPr || {}) }),
      (i.trPr || e.trPr) && (s.trPr = { ...(i.trPr || {}), ...(e.trPr || {}) }),
      (i.tcPr || e.tcPr) && (s.tcPr = { ...(i.tcPr || {}), ...(e.tcPr || {}) })),
    s
  );
}
function et(e, t) {
  let n = new Map();
  try {
    let r = Y(e);
    if (!r) return n;
    let o = A(r, 'w', 'style');
    for (let i of o) {
      let s = Jr(i, t);
      s.styleId && n.set(s.styleId, s);
    }
    for (let [i, s] of n) {
      let a = Ut(s, n, t);
      n.set(i, a);
    }
  } catch (r) {
    console.warn('Failed to parse styles:', r);
  }
  return n;
}
function Gt(e, t) {
  let n = { styles: [] };
  try {
    let r = Y(e);
    if (!r) return n;
    let o = u(r, 'w', 'docDefaults');
    n.docDefaults = Zr(o, t);
    let i = u(r, 'w', 'latentStyles');
    i &&
      (n.latentStyles = {
        defLockedState: l(i, 'w', 'defLockedState') === '1',
        defUIPriority: w(i, 'w', 'defUIPriority'),
        defSemiHidden: l(i, 'w', 'defSemiHidden') === '1',
        defUnhideWhenUsed: l(i, 'w', 'defUnhideWhenUsed') === '1',
        defQFormat: l(i, 'w', 'defQFormat') === '1',
        count: w(i, 'w', 'count'),
      });
    let s = et(e, t);
    n.styles = Array.from(s.values());
  } catch (r) {
    console.warn('Failed to parse style definitions:', r);
  }
  return n;
}
function qt(e) {
  let t = { abstractNums: [], nums: [] };
  if (!e) return tt(t);
  let n = Y(e);
  if (!n) return tt(t);
  let r = A(n, 'w', 'abstractNum');
  for (let i of r) {
    let s = Kr(i);
    s && t.abstractNums.push(s);
  }
  let o = A(n, 'w', 'num');
  for (let i of o) {
    let s = Qr(i);
    s && t.nums.push(s);
  }
  return tt(t);
}
function Kr(e) {
  let t = l(e, 'w', 'abstractNumId');
  if (t === null) return null;
  let n = parseInt(t, 10);
  if (isNaN(n)) return null;
  let r = { abstractNumId: n, levels: [] },
    o = u(e, 'w', 'multiLevelType');
  if (o) {
    let p = l(o, 'w', 'val');
    (p === 'hybridMultilevel' || p === 'multilevel' || p === 'singleLevel') &&
      (r.multiLevelType = p);
  }
  let i = u(e, 'w', 'name');
  i && (r.name = l(i, 'w', 'val') ?? void 0);
  let s = u(e, 'w', 'numStyleLink');
  s && (r.numStyleLink = l(s, 'w', 'val') ?? void 0);
  let a = u(e, 'w', 'styleLink');
  a && (r.styleLink = l(a, 'w', 'val') ?? void 0);
  let c = A(e, 'w', 'lvl');
  for (let p of c) {
    let f = Jt(p);
    f && r.levels.push(f);
  }
  return (r.levels.sort((p, f) => p.ilvl - f.ilvl), r);
}
function Qr(e) {
  let t = l(e, 'w', 'numId');
  if (t === null) return null;
  let n = parseInt(t, 10);
  if (isNaN(n)) return null;
  let r = u(e, 'w', 'abstractNumId');
  if (!r) return null;
  let o = l(r, 'w', 'val');
  if (o === null) return null;
  let i = parseInt(o, 10);
  if (isNaN(i)) return null;
  let s = { numId: n, abstractNumId: i },
    a = A(e, 'w', 'lvlOverride');
  if (a.length > 0) {
    s.levelOverrides = [];
    for (let c of a) {
      let p = l(c, 'w', 'ilvl');
      if (p === null) continue;
      let f = parseInt(p, 10);
      if (isNaN(f)) continue;
      let d = { ilvl: f },
        h = u(c, 'w', 'startOverride');
      if (h) {
        let m = l(h, 'w', 'val');
        if (m !== null) {
          let b = parseInt(m, 10);
          isNaN(b) || (d.startOverride = b);
        }
      }
      let g = u(c, 'w', 'lvl');
      (g && (d.lvl = Jt(g) ?? void 0), s.levelOverrides.push(d));
    }
  }
  return s;
}
function Jt(e) {
  let t = l(e, 'w', 'ilvl');
  if (t === null) return null;
  let n = parseInt(t, 10);
  if (isNaN(n) || n < 0 || n > 8) return null;
  let r = { ilvl: n, numFmt: 'decimal', lvlText: '' },
    o = u(e, 'w', 'start');
  if (o) {
    let m = l(o, 'w', 'val');
    if (m !== null) {
      let b = parseInt(m, 10);
      isNaN(b) || (r.start = b);
    }
  }
  let i = u(e, 'w', 'numFmt');
  if (i) {
    let m = l(i, 'w', 'val');
    m && (r.numFmt = eo(m));
  }
  let s = u(e, 'w', 'lvlText');
  s && (r.lvlText = l(s, 'w', 'val') ?? '');
  let a = u(e, 'w', 'lvlJc');
  if (a) {
    let m = l(a, 'w', 'val');
    (m === 'left' || m === 'center' || m === 'right') && (r.lvlJc = m);
  }
  let c = u(e, 'w', 'suff');
  if (c) {
    let m = l(c, 'w', 'val');
    (m === 'tab' || m === 'space' || m === 'nothing') && (r.suffix = m);
  }
  let p = u(e, 'w', 'isLgl');
  p && (r.isLgl = v(p));
  let f = u(e, 'w', 'lvlRestart');
  if (f) {
    let m = l(f, 'w', 'val');
    if (m !== null) {
      let b = parseInt(m, 10);
      isNaN(b) || (r.lvlRestart = b);
    }
  }
  let d = u(e, 'w', 'legacy');
  d &&
    (r.legacy = {
      legacy: v(d),
      legacySpace: w(d, 'w', 'legacySpace'),
      legacyIndent: w(d, 'w', 'legacyIndent'),
    });
  let h = u(e, 'w', 'pPr');
  h && (r.pPr = to(h));
  let g = u(e, 'w', 'rPr');
  return (g && (r.rPr = oo(g)), r);
}
function eo(e) {
  return (
    {
      decimal: 'decimal',
      upperRoman: 'upperRoman',
      lowerRoman: 'lowerRoman',
      upperLetter: 'upperLetter',
      lowerLetter: 'lowerLetter',
      ordinal: 'ordinal',
      cardinalText: 'cardinalText',
      ordinalText: 'ordinalText',
      hex: 'hex',
      chicago: 'chicago',
      bullet: 'bullet',
      none: 'none',
      decimalZero: 'decimalZero',
      ganada: 'ganada',
      chosung: 'chosung',
      ideographDigital: 'ideographDigital',
      japaneseCounting: 'japaneseCounting',
      aiueo: 'aiueo',
      iroha: 'iroha',
      decimalFullWidth: 'decimalFullWidth',
      decimalHalfWidth: 'decimalHalfWidth',
      japaneseLegal: 'japaneseLegal',
      japaneseDigitalTenThousand: 'japaneseDigitalTenThousand',
      decimalEnclosedCircle: 'decimalEnclosedCircle',
      decimalFullWidth2: 'decimalFullWidth2',
      aiueoFullWidth: 'aiueoFullWidth',
      irohaFullWidth: 'irohaFullWidth',
      decimalEnclosedFullstop: 'decimalEnclosedFullstop',
      decimalEnclosedParen: 'decimalEnclosedParen',
      decimalEnclosedCircleChinese: 'decimalEnclosedCircleChinese',
      ideographEnclosedCircle: 'ideographEnclosedCircle',
      ideographTraditional: 'ideographTraditional',
      ideographZodiac: 'ideographZodiac',
      ideographZodiacTraditional: 'ideographZodiacTraditional',
      taiwaneseCounting: 'taiwaneseCounting',
      ideographLegalTraditional: 'ideographLegalTraditional',
      taiwaneseCountingThousand: 'taiwaneseCountingThousand',
      taiwaneseDigital: 'taiwaneseDigital',
      chineseCounting: 'chineseCounting',
      chineseLegalSimplified: 'chineseLegalSimplified',
      chineseCountingThousand: 'chineseCountingThousand',
      koreanDigital: 'koreanDigital',
      koreanCounting: 'koreanCounting',
      koreanLegal: 'koreanLegal',
      koreanDigital2: 'koreanDigital2',
      vietnameseCounting: 'vietnameseCounting',
      russianLower: 'russianLower',
      russianUpper: 'russianUpper',
      numberInDash: 'numberInDash',
      hebrew1: 'hebrew1',
      hebrew2: 'hebrew2',
      arabicAlpha: 'arabicAlpha',
      arabicAbjad: 'arabicAbjad',
      hindiVowels: 'hindiVowels',
      hindiConsonants: 'hindiConsonants',
      hindiNumbers: 'hindiNumbers',
      hindiCounting: 'hindiCounting',
      thaiLetters: 'thaiLetters',
      thaiNumbers: 'thaiNumbers',
      thaiCounting: 'thaiCounting',
    }[e] ?? 'decimal'
  );
}
function to(e) {
  let t = {},
    n = u(e, 'w', 'ind');
  if (n) {
    let o = w(n, 'w', 'left'),
      i = w(n, 'w', 'right'),
      s = w(n, 'w', 'firstLine'),
      a = w(n, 'w', 'hanging');
    (o !== void 0 && (t.indentLeft = o),
      i !== void 0 && (t.indentRight = i),
      a !== void 0
        ? ((t.indentFirstLine = -a), (t.hangingIndent = true))
        : s !== void 0 && (t.indentFirstLine = s));
  }
  let r = u(e, 'w', 'tabs');
  if (r) {
    t.tabs = [];
    let o = A(r, 'w', 'tab');
    for (let i of o) {
      let s = w(i, 'w', 'pos'),
        a = l(i, 'w', 'val'),
        c = l(i, 'w', 'leader');
      s !== void 0 && a && t.tabs.push({ position: s, alignment: no(a), leader: ro(c) });
    }
  }
  return t;
}
function no(e) {
  switch (e) {
    case 'left':
      return 'left';
    case 'center':
      return 'center';
    case 'right':
      return 'right';
    case 'decimal':
      return 'decimal';
    case 'bar':
      return 'bar';
    case 'clear':
      return 'clear';
    case 'num':
      return 'num';
    default:
      return 'left';
  }
}
function ro(e) {
  if (e)
    switch (e) {
      case 'none':
        return 'none';
      case 'dot':
        return 'dot';
      case 'hyphen':
        return 'hyphen';
      case 'underscore':
        return 'underscore';
      case 'heavy':
        return 'heavy';
      case 'middleDot':
        return 'middleDot';
      default:
        return;
    }
}
function oo(e) {
  let t = {},
    n = u(e, 'w', 'rFonts');
  n &&
    (t.fontFamily = {
      ascii: l(n, 'w', 'ascii') ?? void 0,
      hAnsi: l(n, 'w', 'hAnsi') ?? void 0,
      eastAsia: l(n, 'w', 'eastAsia') ?? void 0,
      cs: l(n, 'w', 'cs') ?? void 0,
    });
  let r = u(e, 'w', 'sz');
  if (r) {
    let a = w(r, 'w', 'val');
    a !== void 0 && (t.fontSize = a);
  }
  let o = u(e, 'w', 'color');
  if (o) {
    let a = l(o, 'w', 'val'),
      c = l(o, 'w', 'themeColor');
    a === 'auto'
      ? (t.color = { auto: true })
      : c
        ? (t.color = {
            themeColor: c,
            themeTint: l(o, 'w', 'themeTint') ?? void 0,
            themeShade: l(o, 'w', 'themeShade') ?? void 0,
          })
        : a && (t.color = { rgb: a });
  }
  let i = u(e, 'w', 'b');
  i && (t.bold = v(i));
  let s = u(e, 'w', 'i');
  return (s && (t.italic = v(s)), t);
}
function tt(e) {
  let t = new Map();
  for (let r of e.abstractNums) t.set(r.abstractNumId, r);
  let n = new Map();
  for (let r of e.nums) n.set(r.numId, r);
  return {
    definitions: e,
    getLevel(r, o) {
      let i = n.get(r);
      if (!i) return null;
      if (i.levelOverrides) {
        let a = i.levelOverrides.find((c) => c.ilvl === o);
        if (a) {
          if (a.lvl) return a.lvl;
          let c = t.get(i.abstractNumId);
          if (c) {
            let p = c.levels.find((f) => f.ilvl === o);
            if (p && a.startOverride !== void 0) return { ...p, start: a.startOverride };
          }
        }
      }
      let s = t.get(i.abstractNumId);
      if (!s) return null;
      if (s.numStyleLink && s.levels.length === 0) {
        for (let a of t.values())
          if (a.styleLink === s.numStyleLink && a.levels.length > 0) {
            s = a;
            break;
          }
      }
      return s.levels.find((a) => a.ilvl === o) ?? null;
    },
    getAbstract(r) {
      return t.get(r) ?? null;
    },
    hasNumbering(r) {
      return n.has(r);
    },
  };
}
function io(e) {
  if (!e) return;
  let t = parseInt(e, 10);
  if (!isNaN(t)) return t / 6e4;
}
function L(e, t) {
  let n = X(e);
  for (let r of n) if (r.name === t) return r;
  return null;
}
function so(e, t) {
  let n = X(e);
  for (let r of n) if (t.includes(r.name || '')) return r;
  return null;
}
function Zt(e) {
  if (!e) return { width: 0, height: 0 };
  let t = w(e, null, 'cx') ?? 0,
    n = w(e, null, 'cy') ?? 0;
  return { width: t, height: n };
}
function Yt(e) {
  if (!e) return;
  let t = w(e, null, 'l') ?? 0,
    n = w(e, null, 't') ?? 0,
    r = w(e, null, 'r') ?? 0,
    o = w(e, null, 'b') ?? 0;
  if (!(t === 0 && n === 0 && r === 0 && o === 0)) return { left: t, top: n, right: r, bottom: o };
}
function Kt(e) {
  if (!e) return {};
  let t = l(e, null, 'id') ?? void 0,
    n = l(e, null, 'name') ?? void 0,
    r = l(e, null, 'descr') ?? void 0,
    o = l(e, null, 'title') ?? void 0,
    i = l(e, null, 'decorative') === '1';
  return { id: t, name: n, alt: r, title: o, decorative: i || void 0 };
}
function ao(e) {
  if (!e) return;
  let t = l(e, null, 'relativeFrom') ?? 'column',
    n = L(e, 'wp:align');
  if (n) {
    let o = n.elements?.[0]?.text ?? null;
    return { relativeTo: t, alignment: o };
  }
  let r = L(e, 'wp:posOffset');
  if (r) {
    let o = String(r.elements?.[0]?.text ?? '0'),
      i = parseInt(o, 10);
    return { relativeTo: t, posOffset: isNaN(i) ? 0 : i };
  }
  return { relativeTo: t };
}
function lo(e) {
  if (!e) return;
  let t = l(e, null, 'relativeFrom') ?? 'paragraph',
    n = L(e, 'wp:align');
  if (n) {
    let o = n.elements?.[0]?.text ?? null;
    return { relativeTo: t, alignment: o };
  }
  let r = L(e, 'wp:posOffset');
  if (r) {
    let o = String(r.elements?.[0]?.text ?? '0'),
      i = parseInt(o, 10);
    return { relativeTo: t, posOffset: isNaN(i) ? 0 : i };
  }
  return { relativeTo: t };
}
var co = ['wp:wrapNone', 'wp:wrapSquare', 'wp:wrapTight', 'wp:wrapThrough', 'wp:wrapTopAndBottom'];
function uo(e, t, n) {
  if (!e) {
    let C = { type: t ? 'behind' : 'inFront' };
    return (
      n?.distT !== void 0 && (C.distT = n.distT),
      n?.distB !== void 0 && (C.distB = n.distB),
      n?.distL !== void 0 && (C.distL = n.distL),
      n?.distR !== void 0 && (C.distR = n.distR),
      C
    );
  }
  let o = (e.name || '').replace('wp:', ''),
    i = w(e, null, 'distT') ?? void 0,
    s = w(e, null, 'distB') ?? void 0,
    a = w(e, null, 'distL') ?? void 0,
    c = w(e, null, 'distR') ?? void 0,
    p = i ?? n?.distT,
    f = s ?? n?.distB,
    d = a ?? n?.distL,
    h = c ?? n?.distR,
    g = l(e, null, 'wrapText') ?? void 0,
    m;
  switch (o) {
    case 'wrapNone':
      m = t ? 'behind' : 'inFront';
      break;
    case 'wrapSquare':
      m = 'square';
      break;
    case 'wrapTight':
      m = 'tight';
      break;
    case 'wrapThrough':
      m = 'through';
      break;
    case 'wrapTopAndBottom':
      m = 'topAndBottom';
      break;
    default:
      m = 'square';
  }
  let b = { type: m };
  return (
    g && (b.wrapText = g),
    p !== void 0 && (b.distT = p),
    f !== void 0 && (b.distB = f),
    d !== void 0 && (b.distL = d),
    h !== void 0 && (b.distR = h),
    b
  );
}
function Qt(e) {
  if (!e) return;
  let t = l(e, null, 'rot'),
    n = l(e, null, 'flipH') === '1',
    r = l(e, null, 'flipV') === '1',
    o = io(t);
  if (o === void 0 && !n && !r) return;
  let i = {};
  return (o !== void 0 && (i.rotation = o), n && (i.flipH = true), r && (i.flipV = true), i);
}
function en(e) {
  let t = L(e, 'a:graphic');
  if (!t) return null;
  let n = L(t, 'a:graphicData');
  if (!n) return null;
  let r = L(n, 'pic:pic');
  if (!r) return null;
  let o = L(r, 'pic:blipFill');
  return o ? L(o, 'a:blip') : null;
}
function tn(e) {
  if (!e) return '';
  let t = l(e, 'r', 'embed');
  if (t) return t;
  let n = l(e, null, 'embed');
  if (n) return n;
  let r = l(e, 'r', 'link');
  return r || '';
}
function nn(e) {
  let t = L(e, 'a:graphic');
  if (!t) return null;
  let n = L(t, 'a:graphicData');
  if (!n) return null;
  let r = L(n, 'pic:pic');
  if (!r) return null;
  let o = L(r, 'pic:spPr');
  return o ? L(o, 'a:xfrm') : null;
}
function po(e) {
  if (!e) return e;
  let t = e.replace(/^\/+/, '');
  return (
    t.startsWith('media/') ? (t = `word/${t}`) : t.startsWith('word/') || (t = `word/${t}`),
    t
  );
}
function fo(e) {
  let t = e.split('.').pop()?.toLowerCase() ?? '';
  return (
    {
      png: 'image/png',
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
      gif: 'image/gif',
      bmp: 'image/bmp',
      tiff: 'image/tiff',
      tif: 'image/tiff',
      webp: 'image/webp',
      svg: 'image/svg+xml',
      emf: 'image/x-emf',
      wmf: 'image/x-wmf',
    }[t] ?? 'application/octet-stream'
  );
}
function rn(e, t, n) {
  if (!e || !t) return {};
  let r = t.get(e);
  if (!r) return {};
  let o = r.target;
  if (!o) return {};
  let i = po(o),
    s = o.split('/').pop(),
    a = (c, p) => {
      let f = p.toLowerCase();
      for (let [d, h] of c.entries()) if (d.toLowerCase() === f) return h;
    };
  if (n) {
    let c = a(n, i);
    if (c) return { src: c.dataUrl || c.base64, mimeType: c.mimeType, filename: s };
    let p = o.replace(/^\/+/, ''),
      f = a(n, p);
    if (f) return { src: f.dataUrl || f.base64, mimeType: f.mimeType, filename: s };
    let d = `word/${p}`,
      h = a(n, d);
    if (h) return { src: h.dataUrl || h.base64, mimeType: h.mimeType, filename: s };
  }
  return { mimeType: fo(o), filename: s };
}
function mo(e, t, n) {
  let r = L(e, 'wp:extent'),
    o = Zt(r),
    i = L(e, 'wp:effectExtent'),
    s = Yt(i),
    a = L(e, 'wp:docPr'),
    c = Kt(a),
    p = en(e),
    f = tn(p),
    d = rn(f, t, n),
    h = nn(e),
    g = Qt(h),
    m = w(e, null, 'distT') ?? void 0,
    b = w(e, null, 'distB') ?? void 0,
    C = w(e, null, 'distL') ?? void 0,
    I = w(e, null, 'distR') ?? void 0,
    S = { type: 'inline' };
  (m !== void 0 && (S.distT = m),
    b !== void 0 && (S.distB = b),
    C !== void 0 && (S.distL = C),
    I !== void 0 && (S.distR = I));
  let F = { type: 'image', rId: f, size: o, wrap: S };
  return (
    c.id && (F.id = c.id),
    c.alt && (F.alt = c.alt),
    c.title && (F.title = c.title),
    c.decorative && (F.decorative = true),
    d.src && (F.src = d.src),
    d.mimeType && (F.mimeType = d.mimeType),
    d.filename && (F.filename = d.filename),
    s && (F.padding = s),
    g && (F.transform = g),
    F
  );
}
function ho(e, t, n) {
  let r = L(e, 'wp:extent'),
    o = Zt(r),
    i = L(e, 'wp:effectExtent'),
    s = Yt(i),
    a = L(e, 'wp:docPr'),
    c = Kt(a),
    p = l(e, null, 'behindDoc') === '1',
    f = {
      distT: w(e, null, 'distT') ?? void 0,
      distB: w(e, null, 'distB') ?? void 0,
      distL: w(e, null, 'distL') ?? void 0,
      distR: w(e, null, 'distR') ?? void 0,
    },
    d = so(e, co),
    h = uo(d, p, f),
    g = L(e, 'wp:positionH'),
    m = L(e, 'wp:positionV'),
    b = ao(g),
    C = lo(m),
    I;
  (b || C) &&
    (I = { horizontal: b ?? { relativeTo: 'column' }, vertical: C ?? { relativeTo: 'paragraph' } });
  let S = en(e),
    F = tn(S),
    y = rn(F, t, n),
    x = nn(e),
    P = Qt(x),
    T = { type: 'image', rId: F, size: o, wrap: h };
  return (
    c.id && (T.id = c.id),
    c.alt && (T.alt = c.alt),
    c.title && (T.title = c.title),
    c.decorative && (T.decorative = true),
    y.src && (T.src = y.src),
    y.mimeType && (T.mimeType = y.mimeType),
    y.filename && (T.filename = y.filename),
    I && (T.position = I),
    s && (T.padding = s),
    P && (T.transform = P),
    T
  );
}
function go(e, t, n) {
  let r = X(e);
  for (let o of r) {
    let i = o.name || '';
    if (i === 'wp:inline') return mo(o, t, n);
    if (i === 'wp:anchor') return ho(o, t, n);
  }
  return null;
}
function on(e, t, n) {
  return go(e, t, n);
}
function sn(e, t, n, r) {
  let o = {};
  return (
    e && e !== 'auto' ? (o.rgb = e) : e === 'auto' && (o.auto = true),
    t && (o.themeColor = t),
    n && (o.themeTint = n),
    r && (o.themeShade = r),
    o
  );
}
function wo(e) {
  if (!e) return;
  let t = {},
    n = l(e, 'w', 'color');
  n && n !== 'auto' && (t.color = { rgb: n });
  let r = l(e, 'w', 'fill');
  r && r !== 'auto' && (t.fill = { rgb: r });
  let o = l(e, 'w', 'themeFill');
  o && ((t.fill = t.fill || {}), (t.fill.themeColor = o));
  let i = l(e, 'w', 'themeFillTint');
  i && t.fill && (t.fill.themeTint = i);
  let s = l(e, 'w', 'themeFillShade');
  s && t.fill && (t.fill.themeShade = s);
  let a = l(e, 'w', 'val');
  return (a && (t.pattern = a), Object.keys(t).length > 0 ? t : void 0);
}
function Me(e, t, n) {
  if (!e) return;
  let r = {},
    o = u(e, 'w', 'b');
  o && (r.bold = v(o));
  let i = u(e, 'w', 'bCs');
  i && (r.boldCs = v(i));
  let s = u(e, 'w', 'i');
  s && (r.italic = v(s));
  let a = u(e, 'w', 'iCs');
  a && (r.italicCs = v(a));
  let c = u(e, 'w', 'u');
  if (c) {
    let E = l(c, 'w', 'val');
    if (E) {
      r.underline = { style: E };
      let N = l(c, 'w', 'color'),
        J = l(c, 'w', 'themeColor');
      (N || J) && (r.underline.color = sn(N, J, l(c, 'w', 'themeTint'), l(c, 'w', 'themeShade')));
    }
  }
  let p = u(e, 'w', 'strike');
  p && (r.strike = v(p));
  let f = u(e, 'w', 'dstrike');
  f && (r.doubleStrike = v(f));
  let d = u(e, 'w', 'vertAlign');
  if (d) {
    let E = l(d, 'w', 'val');
    (E === 'superscript' || E === 'subscript' || E === 'baseline') && (r.vertAlign = E);
  }
  let h = u(e, 'w', 'smallCaps');
  h && (r.smallCaps = v(h));
  let g = u(e, 'w', 'caps');
  g && (r.allCaps = v(g));
  let m = u(e, 'w', 'vanish');
  m && (r.hidden = v(m));
  let b = u(e, 'w', 'color');
  b &&
    (r.color = sn(
      l(b, 'w', 'val'),
      l(b, 'w', 'themeColor'),
      l(b, 'w', 'themeTint'),
      l(b, 'w', 'themeShade')
    ));
  let C = u(e, 'w', 'highlight');
  if (C) {
    let E = l(C, 'w', 'val');
    E && (r.highlight = E);
  }
  let I = u(e, 'w', 'shd');
  I && (r.shading = wo(I));
  let S = u(e, 'w', 'sz');
  if (S) {
    let E = w(S, 'w', 'val');
    E !== void 0 && (r.fontSize = E);
  }
  let F = u(e, 'w', 'szCs');
  if (F) {
    let E = w(F, 'w', 'val');
    E !== void 0 && (r.fontSizeCs = E);
  }
  let y = u(e, 'w', 'rFonts');
  if (y) {
    r.fontFamily = {
      ascii: l(y, 'w', 'ascii') ?? void 0,
      hAnsi: l(y, 'w', 'hAnsi') ?? void 0,
      eastAsia: l(y, 'w', 'eastAsia') ?? void 0,
      cs: l(y, 'w', 'cs') ?? void 0,
    };
    let E = l(y, 'w', 'asciiTheme');
    E &&
      ((r.fontFamily.asciiTheme = E), t && !r.fontFamily.ascii && (r.fontFamily.ascii = Z(t, E)));
    let N = l(y, 'w', 'hAnsiTheme');
    N &&
      ((r.fontFamily.hAnsiTheme = N), t && !r.fontFamily.hAnsi && (r.fontFamily.hAnsi = Z(t, N)));
    let J = l(y, 'w', 'eastAsiaTheme');
    J &&
      ((r.fontFamily.eastAsiaTheme = J),
      t && !r.fontFamily.eastAsia && (r.fontFamily.eastAsia = Z(t, J)));
    let _e = l(y, 'w', 'cstheme');
    _e && ((r.fontFamily.csTheme = _e), t && !r.fontFamily.cs && (r.fontFamily.cs = Z(t, _e)));
  }
  let x = u(e, 'w', 'spacing');
  if (x) {
    let E = w(x, 'w', 'val');
    E !== void 0 && (r.spacing = E);
  }
  let P = u(e, 'w', 'position');
  if (P) {
    let E = w(P, 'w', 'val');
    E !== void 0 && (r.position = E);
  }
  let T = u(e, 'w', 'w');
  if (T) {
    let E = w(T, 'w', 'val');
    E !== void 0 && (r.scale = E);
  }
  let k = u(e, 'w', 'kern');
  if (k) {
    let E = w(k, 'w', 'val');
    E !== void 0 && (r.kerning = E);
  }
  let $ = u(e, 'w', 'effect');
  if ($) {
    let E = l($, 'w', 'val');
    E && (r.effect = E);
  }
  let D = u(e, 'w', 'em');
  if (D) {
    let E = l(D, 'w', 'val');
    E && (r.emphasisMark = E);
  }
  let B = u(e, 'w', 'emboss');
  B && (r.emboss = v(B));
  let O = u(e, 'w', 'imprint');
  O && (r.imprint = v(O));
  let q = u(e, 'w', 'outline');
  q && (r.outline = v(q));
  let ne = u(e, 'w', 'shadow');
  ne && (r.shadow = v(ne));
  let H = u(e, 'w', 'rtl');
  H && (r.rtl = v(H));
  let z = u(e, 'w', 'cs');
  z && (r.cs = v(z));
  let M = u(e, 'w', 'rStyle');
  if (M) {
    let E = l(M, 'w', 'val');
    E && (r.styleId = E);
  }
  return Object.keys(r).length > 0 ? r : void 0;
}
function yo(e) {
  let t = l(e, 'w', 'id'),
    n = t ? parseInt(t, 10) : 0,
    r = (l(e, 'w', 'author') ?? '').trim(),
    o = (l(e, 'w', 'date') ?? '').trim(),
    i = (l(e, 'w', 'rsid') ?? '').trim();
  return {
    id: Number.isInteger(n) && n >= 0 ? n : 0,
    author: r.length > 0 ? r : 'Unknown',
    date: o.length > 0 ? o : void 0,
    rsid: i.length > 0 ? i : void 0,
  };
}
function xo(e, t, n, r) {
  if (!e) return;
  let o = A(e, 'w', 'rPrChange')
    .map((i) => {
      let s = u(i, 'w', 'rPr');
      return {
        type: 'runPropertyChange',
        info: yo(i),
        previousFormatting: Me(s, t),
        currentFormatting: r,
      };
    })
    .filter((i) => i.previousFormatting || i.currentFormatting);
  return o.length > 0 ? o : void 0;
}
function bo(e) {
  let t = Se(e),
    n = l(e, 'xml', 'space') === 'preserve';
  return { type: 'text', text: t, preserveSpace: n || void 0 };
}
function To() {
  return { type: 'tab' };
}
function Co(e) {
  let t = l(e, 'w', 'type'),
    n = l(e, 'w', 'clear'),
    r = { type: 'break' };
  return (
    (t === 'page' || t === 'column' || t === 'textWrapping') && (r.breakType = t),
    (n === 'none' || n === 'left' || n === 'right' || n === 'all') && (r.clear = n),
    r
  );
}
function vo(e) {
  let t = l(e, 'w', 'font') ?? '',
    n = l(e, 'w', 'char') ?? '';
  return { type: 'symbol', font: t, char: n };
}
function Fo(e) {
  return { type: 'footnoteRef', id: w(e, 'w', 'id') ?? 0 };
}
function Po(e) {
  return { type: 'endnoteRef', id: w(e, 'w', 'id') ?? 0 };
}
function So(e) {
  let t = l(e, 'w', 'fldCharType'),
    n = l(e, 'w', 'fldLock') === 'true' || l(e, 'w', 'fldLock') === '1',
    r = l(e, 'w', 'dirty') === 'true' || l(e, 'w', 'dirty') === '1',
    o = 'begin';
  return (
    t === 'separate' ? (o = 'separate') : t === 'end' && (o = 'end'),
    { type: 'fieldChar', charType: o, fldLock: n || void 0, dirty: r || void 0 }
  );
}
function ko(e) {
  return { type: 'instrText', text: Se(e) };
}
function Ro(e, t, n) {
  let r = on(e, t ?? void 0, n ?? void 0);
  return r ? { type: 'drawing', image: r } : null;
}
function Io(e) {
  if (!e) return '';
  let t = e.indexOf(':');
  return t >= 0 ? e.substring(t + 1) : e;
}
function Eo(e, t, n) {
  let r = [],
    o = X(e);
  for (let i of o)
    switch (Io(i.name)) {
      case 't':
        r.push(bo(i));
        break;
      case 'tab':
        r.push(To());
        break;
      case 'br':
        r.push(Co(i));
        break;
      case 'sym':
        r.push(vo(i));
        break;
      case 'footnoteReference':
        r.push(Fo(i));
        break;
      case 'endnoteReference':
        r.push(Po(i));
        break;
      case 'fldChar':
        r.push(So(i));
        break;
      case 'instrText':
        r.push(ko(i));
        break;
      case 'softHyphen':
        r.push({ type: 'softHyphen' });
        break;
      case 'noBreakHyphen':
        r.push({ type: 'noBreakHyphen' });
        break;
      case 'drawing':
        let a = Ro(i, t, n);
        a && r.push(a);
        break;
      case 'pict':
      case 'object':
        break;
      case 'rPr':
        break;
      case 'lastRenderedPageBreak':
        break;
      case 'cr':
        r.push({ type: 'break', breakType: 'textWrapping' });
        break;
    }
  return r;
}
function xe(e, t, n, r = null, o = null) {
  let i = { type: 'run', content: [] },
    s = u(e, 'w', 'rPr');
  return (
    s && ((i.formatting = Me(s, n)), (i.propertyChanges = xo(s, n, t, i.formatting))),
    (i.content = Eo(e, r, o)),
    i
  );
}
function Mo(e) {
  if (!e) return '';
  let t = e.indexOf(':');
  return t >= 0 ? e.substring(t + 1) : e;
}
function $o(e) {
  let t = w(e, 'w', 'id') ?? 0,
    n = l(e, 'w', 'name') ?? '',
    r = { type: 'bookmarkStart', id: t, name: n },
    o = w(e, 'w', 'colFirst');
  o !== void 0 && (r.colFirst = o);
  let i = w(e, 'w', 'colLast');
  return (i !== void 0 && (r.colLast = i), r);
}
function Do(e) {
  return { type: 'bookmarkEnd', id: w(e, 'w', 'id') ?? 0 };
}
function an(e, t, n = null, r = null, o = null) {
  let i = { type: 'hyperlink', children: [] },
    s = l(e, 'r', 'id');
  if (s && ((i.rId = s), t)) {
    let g = t.get(s);
    g && (Bt(g), (i.href = g.target));
  }
  let a = l(e, 'w', 'anchor');
  a && ((i.anchor = a), i.href || (i.href = `#${a}`));
  let c = l(e, 'w', 'tooltip');
  c && (i.tooltip = c);
  let p = l(e, 'w', 'tgtFrame');
  p && (i.target = p);
  let f = l(e, 'w', 'history');
  (f === '1' || f === 'true') && (i.history = true);
  let d = l(e, 'w', 'docLocation');
  d && (i.docLocation = d);
  let h = X(e);
  for (let g of h)
    switch (Mo(g.name)) {
      case 'r':
        i.children.push(xe(g, n, r, t, o));
        break;
      case 'bookmarkStart':
        i.children.push($o(g));
        break;
      case 'bookmarkEnd':
        i.children.push(Do(g));
        break;
    }
  return i;
}
function ln(e) {
  let t = w(e, 'w', 'id') ?? 0,
    n = l(e, 'w', 'name') ?? '',
    r = { type: 'bookmarkStart', id: t, name: n },
    o = w(e, 'w', 'colFirst');
  o !== void 0 && (r.colFirst = o);
  let i = w(e, 'w', 'colLast');
  return (i !== void 0 && (r.colLast = i), r);
}
function cn(e) {
  return { type: 'bookmarkEnd', id: w(e, 'w', 'id') ?? 0 };
}
function Ao(e) {
  if (!e) return;
  let t = w(e, 'w', 'w') ?? 0,
    n = l(e, 'w', 'type') ?? 'dxa',
    r = 'dxa';
  return (
    (n === 'auto' || n === 'dxa' || n === 'nil' || n === 'pct') && (r = n),
    { value: t, type: r }
  );
}
function Q(e) {
  return Ao(e);
}
function pe(e) {
  let t = l(e, 'w', 'id'),
    n = t ? parseInt(t, 10) : 0,
    r = (l(e, 'w', 'author') ?? '').trim(),
    o = (l(e, 'w', 'date') ?? '').trim();
  return {
    id: Number.isInteger(n) && n >= 0 ? n : 0,
    author: r.length > 0 ? r : 'Unknown',
    date: o.length > 0 ? o : void 0,
  };
}
function nt(e) {
  let t = pe(e),
    n = (l(e, 'w', 'rsid') ?? '').trim();
  return n.length > 0 ? { ...t, rsid: n } : t;
}
function ue(e) {
  if (!e) return;
  let r = { style: l(e, 'w', 'val') ?? 'none' },
    o = w(e, 'w', 'sz');
  o !== void 0 && (r.size = o);
  let i = w(e, 'w', 'space');
  i !== void 0 && (r.space = i);
  let s = l(e, 'w', 'color'),
    a = l(e, 'w', 'themeColor'),
    c = l(e, 'w', 'themeTint'),
    p = l(e, 'w', 'themeShade');
  (s || a || c || p) &&
    (r.color = {
      rgb: s ?? void 0,
      themeColor: a,
      themeTint: c ?? void 0,
      themeShade: p ?? void 0,
    });
  let f = l(e, 'w', 'shadow');
  (f === '1' || f === 'true') && (r.shadow = true);
  let d = l(e, 'w', 'frame');
  return ((d === '1' || d === 'true') && (r.frame = true), r);
}
function un(e) {
  if (!e) return;
  let t = {},
    n = ue(u(e, 'w', 'top'));
  n && (t.top = n);
  let r = ue(u(e, 'w', 'bottom'));
  r && (t.bottom = r);
  let o = ue(u(e, 'w', 'left') ?? u(e, 'w', 'start'));
  o && (t.left = o);
  let i = ue(u(e, 'w', 'right') ?? u(e, 'w', 'end'));
  i && (t.right = i);
  let s = ue(u(e, 'w', 'insideH'));
  s && (t.insideH = s);
  let a = ue(u(e, 'w', 'insideV'));
  if ((a && (t.insideV = a), Object.keys(t).length !== 0)) return t;
}
function pn(e) {
  if (!e) return;
  let t = {},
    n = Q(u(e, 'w', 'top'));
  n && (t.top = n);
  let r = Q(u(e, 'w', 'bottom'));
  r && (t.bottom = r);
  let o = Q(u(e, 'w', 'left') ?? u(e, 'w', 'start'));
  o && (t.left = o);
  let i = Q(u(e, 'w', 'right') ?? u(e, 'w', 'end'));
  if ((i && (t.right = i), Object.keys(t).length !== 0)) return t;
}
function fn(e) {
  if (!e) return;
  let t = {},
    n = l(e, 'w', 'fill');
  n && n !== 'auto' && (t.fill = { rgb: n });
  let r = l(e, 'w', 'themeFill');
  if (r) {
    t.fill = { themeColor: r };
    let s = l(e, 'w', 'themeFillTint');
    s && t.fill && (t.fill.themeTint = s);
    let a = l(e, 'w', 'themeFillShade');
    a && t.fill && (t.fill.themeShade = a);
  }
  let o = l(e, 'w', 'color');
  o && o !== 'auto' && (t.color = { rgb: o });
  let i = l(e, 'w', 'val');
  if ((i && (t.pattern = i), Object.keys(t).length !== 0)) return t;
}
function Bo(e) {
  if (!e) return;
  let t = {},
    n = l(e, 'w', 'firstRow');
  (n === '1' || n === 'true') && (t.firstRow = true);
  let r = l(e, 'w', 'lastRow');
  (r === '1' || r === 'true') && (t.lastRow = true);
  let o = l(e, 'w', 'firstColumn');
  (o === '1' || o === 'true') && (t.firstColumn = true);
  let i = l(e, 'w', 'lastColumn');
  (i === '1' || i === 'true') && (t.lastColumn = true);
  let s = l(e, 'w', 'noHBand');
  (s === '1' || s === 'true') && (t.noHBand = true);
  let a = l(e, 'w', 'noVBand');
  (a === '1' || a === 'true') && (t.noVBand = true);
  let c = l(e, 'w', 'val');
  if (c) {
    let p = parseInt(c, 16);
    isNaN(p) ||
      (p & 32 && (t.firstRow = true),
      p & 64 && (t.lastRow = true),
      p & 128 && (t.firstColumn = true),
      p & 256 && (t.lastColumn = true),
      p & 512 && (t.noHBand = true),
      p & 1024 && (t.noVBand = true));
  }
  if (Object.keys(t).length !== 0) return t;
}
function Lo(e) {
  if (!e) return;
  let t = {},
    n = l(e, 'w', 'horzAnchor');
  (n === 'margin' || n === 'page' || n === 'text') && (t.horzAnchor = n);
  let r = l(e, 'w', 'vertAnchor');
  (r === 'margin' || r === 'page' || r === 'text') && (t.vertAnchor = r);
  let o = w(e, 'w', 'tblpX');
  o !== void 0 && (t.tblpX = o);
  let i = l(e, 'w', 'tblpXSpec');
  i && (t.tblpXSpec = i);
  let s = w(e, 'w', 'tblpY');
  s !== void 0 && (t.tblpY = s);
  let a = l(e, 'w', 'tblpYSpec');
  a && (t.tblpYSpec = a);
  let c = w(e, 'w', 'topFromText');
  c !== void 0 && (t.topFromText = c);
  let p = w(e, 'w', 'bottomFromText');
  p !== void 0 && (t.bottomFromText = p);
  let f = w(e, 'w', 'leftFromText');
  f !== void 0 && (t.leftFromText = f);
  let d = w(e, 'w', 'rightFromText');
  if ((d !== void 0 && (t.rightFromText = d), Object.keys(t).length !== 0)) return t;
}
function dn(e) {
  if (!e) return;
  let t = {},
    n = Q(u(e, 'w', 'tblW'));
  n && (t.width = n);
  let r = u(e, 'w', 'jc');
  if (r) {
    let b = l(r, 'w', 'val');
    (b === 'left' || b === 'center' || b === 'right' || b === 'start') &&
      (t.justification = b === 'start' ? 'left' : b);
  }
  let o = Q(u(e, 'w', 'tblCellSpacing'));
  o && (t.cellSpacing = o);
  let i = Q(u(e, 'w', 'tblInd'));
  i && (t.indent = i);
  let s = un(u(e, 'w', 'tblBorders'));
  s && (t.borders = s);
  let a = pn(u(e, 'w', 'tblCellMar'));
  a && (t.cellMargins = a);
  let c = u(e, 'w', 'tblLayout');
  if (c) {
    let b = l(c, 'w', 'type');
    (b === 'fixed' || b === 'autofit') && (t.layout = b);
  }
  let p = u(e, 'w', 'tblStyle');
  if (p) {
    let b = l(p, 'w', 'val');
    b && (t.styleId = b);
  }
  let f = Bo(u(e, 'w', 'tblLook'));
  f && (t.look = f);
  let d = fn(u(e, 'w', 'shd'));
  d && (t.shading = d);
  let h = u(e, 'w', 'tblOverlap');
  if (h) {
    let b = l(h, 'w', 'val');
    (b === 'never' || b === 'overlap') && (t.overlap = b);
  }
  let g = Lo(u(e, 'w', 'tblpPr'));
  if (
    (g && (t.floating = g),
    v(u(e, 'w', 'bidiVisual')) && (t.bidi = true),
    Object.keys(t).length !== 0)
  )
    return t;
}
function No(e, t) {
  if (!e) return;
  let n = A(e, 'w', 'tblPrChange')
    .map((r) => {
      let o = u(r, 'w', 'tblPr');
      return {
        type: 'tablePropertyChange',
        info: nt(r),
        previousFormatting: dn(o),
        currentFormatting: t,
      };
    })
    .filter((r) => r.previousFormatting || r.currentFormatting);
  return n.length > 0 ? n : void 0;
}
function Xo(e, t) {
  if (!e) return;
  let n = A(e, 'w', 'trPrChange')
    .map((r) => {
      let o = u(r, 'w', 'trPr');
      return {
        type: 'tableRowPropertyChange',
        info: nt(r),
        previousFormatting: mn(o),
        currentFormatting: t,
      };
    })
    .filter((r) => r.previousFormatting || r.currentFormatting);
  return n.length > 0 ? n : void 0;
}
function Ho(e, t) {
  if (!e) return;
  let n = A(e, 'w', 'tcPrChange')
    .map((r) => {
      let o = u(r, 'w', 'tcPr');
      return {
        type: 'tableCellPropertyChange',
        info: nt(r),
        previousFormatting: gn(o),
        currentFormatting: t,
      };
    })
    .filter((r) => r.previousFormatting || r.currentFormatting);
  return n.length > 0 ? n : void 0;
}
function Oo(e) {
  if (!e) return;
  let t = u(e, 'w', 'ins');
  if (t) return { type: 'tableRowInsertion', info: pe(t) };
  let n = u(e, 'w', 'del');
  if (n) return { type: 'tableRowDeletion', info: pe(n) };
}
function jo(e) {
  if (!e) return;
  let t = u(e, 'w', 'cellIns');
  if (t) return { type: 'tableCellInsertion', info: pe(t) };
  let n = u(e, 'w', 'cellDel');
  if (n) return { type: 'tableCellDeletion', info: pe(n) };
  let r = u(e, 'w', 'cellMerge');
  if (r) return { type: 'tableCellMerge', info: pe(r) };
}
function mn(e) {
  if (!e) return;
  let t = {},
    n = u(e, 'w', 'trHeight');
  if (n) {
    let c = Q(n);
    c && (t.height = c);
    let p = l(n, 'w', 'hRule');
    (p === 'auto' || p === 'atLeast' || p === 'exact') && (t.heightRule = p);
  }
  (v(u(e, 'w', 'tblHeader')) && (t.header = true),
    v(u(e, 'w', 'cantSplit')) && (t.cantSplit = true));
  let i = u(e, 'w', 'jc');
  if (i) {
    let c = l(i, 'w', 'val');
    (c === 'left' || c === 'center' || c === 'right') && (t.justification = c);
  }
  v(u(e, 'w', 'hidden')) && (t.hidden = true);
  let a = hn(u(e, 'w', 'cnfStyle'));
  if ((a && (t.conditionalFormat = a), Object.keys(t).length !== 0)) return t;
}
function hn(e) {
  if (!e) return;
  let t = {},
    n = l(e, 'w', 'firstRow');
  (n === '1' || n === 'true') && (t.firstRow = true);
  let r = l(e, 'w', 'lastRow');
  (r === '1' || r === 'true') && (t.lastRow = true);
  let o = l(e, 'w', 'firstColumn');
  (o === '1' || o === 'true') && (t.firstColumn = true);
  let i = l(e, 'w', 'lastColumn');
  (i === '1' || i === 'true') && (t.lastColumn = true);
  let s = l(e, 'w', 'oddHBand');
  (s === '1' || s === 'true') && (t.oddHBand = true);
  let a = l(e, 'w', 'evenHBand');
  (a === '1' || a === 'true') && (t.evenHBand = true);
  let c = l(e, 'w', 'oddVBand');
  (c === '1' || c === 'true') && (t.oddVBand = true);
  let p = l(e, 'w', 'evenVBand');
  (p === '1' || p === 'true') && (t.evenVBand = true);
  let f = l(e, 'w', 'firstRowFirstColumn');
  (f === '1' || f === 'true') && (t.nwCell = true);
  let d = l(e, 'w', 'firstRowLastColumn');
  (d === '1' || d === 'true') && (t.neCell = true);
  let h = l(e, 'w', 'lastRowFirstColumn');
  (h === '1' || h === 'true') && (t.swCell = true);
  let g = l(e, 'w', 'lastRowLastColumn');
  (g === '1' || g === 'true') && (t.seCell = true);
  let m = l(e, 'w', 'val');
  if (
    (m &&
      m.length === 12 &&
      (m[0] === '1' && (t.firstRow = true),
      m[1] === '1' && (t.lastRow = true),
      m[2] === '1' && (t.firstColumn = true),
      m[3] === '1' && (t.lastColumn = true),
      m[4] === '1' && (t.oddVBand = true),
      m[5] === '1' && (t.evenVBand = true),
      m[6] === '1' && (t.oddHBand = true),
      m[7] === '1' && (t.evenHBand = true),
      m[8] === '1' && (t.nwCell = true),
      m[9] === '1' && (t.neCell = true),
      m[10] === '1' && (t.swCell = true),
      m[11] === '1' && (t.seCell = true)),
    Object.keys(t).length !== 0)
  )
    return t;
}
function gn(e) {
  if (!e) return;
  let t = {},
    n = Q(u(e, 'w', 'tcW'));
  n && (t.width = n);
  let r = un(u(e, 'w', 'tcBorders'));
  r && (t.borders = r);
  let o = pn(u(e, 'w', 'tcMar'));
  o && (t.margins = o);
  let i = fn(u(e, 'w', 'shd'));
  i && (t.shading = i);
  let s = u(e, 'w', 'vAlign');
  if (s) {
    let m = l(s, 'w', 'val');
    (m === 'top' || m === 'center' || m === 'bottom') && (t.verticalAlign = m);
  }
  let a = u(e, 'w', 'textDirection');
  if (a) {
    let m = l(a, 'w', 'val');
    m && (t.textDirection = m);
  }
  let c = u(e, 'w', 'gridSpan');
  if (c) {
    let m = w(c, 'w', 'val');
    m !== void 0 && m > 1 && (t.gridSpan = m);
  }
  let p = u(e, 'w', 'vMerge');
  (p && (l(p, 'w', 'val') === 'restart' ? (t.vMerge = 'restart') : (t.vMerge = 'continue')),
    v(u(e, 'w', 'tcFitText')) && (t.fitText = true),
    v(u(e, 'w', 'noWrap')) && (t.noWrap = true),
    v(u(e, 'w', 'hideMark')) && (t.hideMark = true));
  let g = hn(u(e, 'w', 'cnfStyle'));
  if ((g && (t.conditionalFormat = g), Object.keys(t).length !== 0)) return t;
}
function zo(e, t, n, r, o, i) {
  let s = [],
    a = e.elements || [];
  for (let c of a) {
    if (!c.name) continue;
    let p = c.name.split(':').pop();
    if (p === 'p') {
      let f = G(c, t, n, r, o, i);
      s.push(f);
    } else if (p === 'tbl') {
      let f = be(c, t, n, r, o, i);
      s.push(f);
    }
  }
  return (s.length === 0 && s.push({ type: 'paragraph', content: [] }), s);
}
function Vo(e, t, n, r, o, i) {
  let s = { type: 'tableCell', content: [] },
    a = u(e, 'w', 'tcPr'),
    c = gn(a);
  return (
    c && (s.formatting = c),
    (s.propertyChanges = Ho(a, c)),
    (s.structuralChange = jo(a)),
    (s.content = zo(e, t, n, r, o, i)),
    s
  );
}
function Wo(e, t, n, r, o, i) {
  let s = { type: 'tableRow', cells: [] },
    a = u(e, 'w', 'trPr'),
    c = mn(a);
  (c && (s.formatting = c), (s.propertyChanges = Xo(a, c)), (s.structuralChange = Oo(a)));
  let p = A(e, 'w', 'tc');
  for (let f of p) {
    let d = Vo(f, t, n, r, o, i);
    s.cells.push(d);
  }
  return s;
}
function _o(e) {
  if (!e) return;
  let t = [],
    n = A(e, 'w', 'gridCol');
  for (let r of n) {
    let o = w(r, 'w', 'w') ?? 0;
    t.push(o);
  }
  return t.length > 0 ? t : void 0;
}
function be(e, t, n, r, o, i) {
  let s = { type: 'table', rows: [] },
    a = u(e, 'w', 'tblPr'),
    c = dn(a);
  (c && (s.formatting = c), (s.propertyChanges = No(a, c)));
  let p = _o(u(e, 'w', 'tblGrid'));
  p && (s.columnWidths = p);
  let f = A(e, 'w', 'tr');
  for (let d of f) {
    let h = Wo(d, t, n, r, o, i);
    s.rows.push(h);
  }
  return s;
}
function wn(e) {
  switch (e) {
    case 'first':
      return 'first';
    case 'even':
      return 'even';
    default:
      return 'default';
  }
}
function yn(e) {
  let t = l(e, 'w', 'type'),
    n = l(e, 'r', 'id') ?? '';
  return { type: wn(t), rId: n };
}
function xn(e) {
  let t = l(e, 'w', 'type'),
    n = l(e, 'r', 'id') ?? '';
  return { type: wn(t), rId: n };
}
function rt(e, t, n, r, o, i) {
  let s = [],
    a = e.elements ?? [];
  for (let c of a) {
    if (c.type !== 'element') continue;
    let p = c.name ?? '';
    if (p === 'w:p' || p.endsWith(':p')) {
      let f = G(c, t, n, r, o, i);
      s.push(f);
    } else if (p === 'w:tbl' || p.endsWith(':tbl')) {
      let f = be(c, t, n, r, o, i);
      s.push(f);
    } else if (p === 'w:sdt' || p.endsWith(':sdt')) {
      let f = (c.elements ?? []).find(
        (d) =>
          d.type === 'element' && (d.name === 'w:sdtContent' || d.name?.endsWith(':sdtContent'))
      );
      if (f) {
        let d = rt(f, t, n, r, o, i);
        s.push(...d);
      }
    }
  }
  return s;
}
function bn(e, t = 'default', n = null, r = null, o = null, i = null, s = null) {
  let a = { type: 'header', hdrFtrType: t, content: [] };
  if (!e) return a;
  let c = _(e);
  if (!c) return a;
  let p = c.elements?.find(
    (f) => f.type === 'element' && (f.name === 'w:hdr' || f.name?.endsWith(':hdr'))
  );
  return (p && (a.content = rt(p, n, r, o, i, s)), a);
}
function Tn(e, t = 'default', n = null, r = null, o = null, i = null, s = null) {
  let a = { type: 'footer', hdrFtrType: t, content: [] };
  if (!e) return a;
  let c = _(e);
  if (!c) return a;
  let p = c.elements?.find(
    (f) => f.type === 'element' && (f.name === 'w:ftr' || f.name?.endsWith(':ftr'))
  );
  return (p && (a.content = rt(p, n, r, o, i, s)), a);
}
function Cn(e) {
  switch (e) {
    case 'separator':
      return 'separator';
    case 'continuationSeparator':
      return 'continuationSeparator';
    case 'continuationNotice':
      return 'continuationNotice';
    default:
      return 'normal';
  }
}
function Uo(e, t, n, r, o, i) {
  let s = w(e, 'w', 'id') ?? 0,
    a = l(e, 'w', 'type'),
    c = Cn(a),
    f = A(e, 'w', 'p').map((d) => G(d, t, n, r, o));
  return { type: 'footnote', id: s, noteType: c, content: f };
}
function vn(e, t = null, n = null, r = null, o = null, i = null) {
  let s = new Map(),
    a = [];
  if (!e) return $e(s, a);
  let c = _(e);
  if (!c) return $e(s, a);
  let p = c.elements?.find(
    (d) => d.type === 'element' && (d.name === 'w:footnotes' || d.name?.endsWith(':footnotes'))
  );
  if (!p) return $e(s, a);
  let f = A(p, 'w', 'footnote');
  for (let d of f) {
    let h = Uo(d, t, n, r, o);
    (s.set(h.id, h), a.push(h));
  }
  return $e(s, a);
}
function $e(e, t) {
  return {
    byId: e,
    footnotes: t,
    getFootnote(n) {
      return e.get(n);
    },
    hasFootnote(n) {
      return e.has(n);
    },
    getNormalFootnotes() {
      return t.filter((n) => n.noteType === 'normal');
    },
    getSeparator() {
      return t.find((n) => n.noteType === 'separator');
    },
    getContinuationSeparator() {
      return t.find((n) => n.noteType === 'continuationSeparator');
    },
  };
}
function Go(e, t, n, r, o, i) {
  let s = w(e, 'w', 'id') ?? 0,
    a = l(e, 'w', 'type'),
    c = Cn(a),
    f = A(e, 'w', 'p').map((d) => G(d, t, n, r, o));
  return { type: 'endnote', id: s, noteType: c, content: f };
}
function Fn(e, t = null, n = null, r = null, o = null, i = null) {
  let s = new Map(),
    a = [];
  if (!e) return De(s, a);
  let c = _(e);
  if (!c) return De(s, a);
  let p = c.elements?.find(
    (d) => d.type === 'element' && (d.name === 'w:endnotes' || d.name?.endsWith(':endnotes'))
  );
  if (!p) return De(s, a);
  let f = A(p, 'w', 'endnote');
  for (let d of f) {
    let h = Go(d, t, n, r, o);
    (s.set(h.id, h), a.push(h));
  }
  return De(s, a);
}
function De(e, t) {
  return {
    byId: e,
    endnotes: t,
    getEndnote(n) {
      return e.get(n);
    },
    hasEndnote(n) {
      return e.has(n);
    },
    getNormalEndnotes() {
      return t.filter((n) => n.noteType === 'normal');
    },
    getSeparator() {
      return t.find((n) => n.noteType === 'separator');
    },
    getContinuationSeparator() {
      return t.find((n) => n.noteType === 'continuationSeparator');
    },
  };
}
function Pn(e) {
  return e
    ? {
        decimal: 'decimal',
        upperRoman: 'upperRoman',
        lowerRoman: 'lowerRoman',
        upperLetter: 'upperLetter',
        lowerLetter: 'lowerLetter',
        ordinal: 'ordinal',
        cardinalText: 'cardinalText',
        ordinalText: 'ordinalText',
        bullet: 'bullet',
        chicago: 'chicago',
        none: 'none',
      }[e]
    : void 0;
}
function qo(e) {
  switch (e) {
    case 'pageBottom':
      return 'pageBottom';
    case 'beneathText':
      return 'beneathText';
    case 'sectEnd':
      return 'sectEnd';
    case 'docEnd':
      return 'docEnd';
    default:
      return;
  }
}
function Jo(e) {
  switch (e) {
    case 'sectEnd':
      return 'sectEnd';
    case 'docEnd':
      return 'docEnd';
    default:
      return;
  }
}
function Sn(e) {
  switch (e) {
    case 'continuous':
      return 'continuous';
    case 'eachSect':
      return 'eachSect';
    case 'eachPage':
      return 'eachPage';
    default:
      return;
  }
}
function kn(e) {
  let t = {};
  if (!e) return t;
  let n = u(e, 'w', 'pos');
  if (n) {
    let s = l(n, 'w', 'val');
    t.position = qo(s);
  }
  let r = u(e, 'w', 'numFmt');
  if (r) {
    let s = l(r, 'w', 'val');
    t.numFmt = Pn(s);
  }
  let o = u(e, 'w', 'numStart');
  o && (t.numStart = w(o, 'w', 'val') ?? void 0);
  let i = u(e, 'w', 'numRestart');
  if (i) {
    let s = l(i, 'w', 'val');
    t.numRestart = Sn(s);
  }
  return t;
}
function Rn(e) {
  let t = {};
  if (!e) return t;
  let n = u(e, 'w', 'pos');
  if (n) {
    let s = l(n, 'w', 'val');
    t.position = Jo(s);
  }
  let r = u(e, 'w', 'numFmt');
  if (r) {
    let s = l(r, 'w', 'val');
    t.numFmt = Pn(s);
  }
  let o = u(e, 'w', 'numStart');
  o && (t.numStart = w(o, 'w', 'val') ?? void 0);
  let i = u(e, 'w', 'numRestart');
  if (i) {
    let s = l(i, 'w', 'val');
    t.numRestart = Sn(s);
  }
  return t;
}
function Zo(e, t, n, r) {
  if (!e && !t) return;
  let o = {};
  return (
    e && e !== 'auto' ? (o.rgb = e) : e === 'auto' && (o.auto = true),
    t && (o.themeColor = t),
    n && (o.themeTint = n),
    r && (o.themeShade = r),
    Object.keys(o).length > 0 ? o : void 0
  );
}
function Ae(e) {
  if (!e) return;
  let r = { style: l(e, 'w', 'val') ?? 'none' },
    o = w(e, 'w', 'sz');
  o !== void 0 && (r.size = o);
  let i = w(e, 'w', 'space');
  i !== void 0 && (r.space = i);
  let s = l(e, 'w', 'color'),
    a = l(e, 'w', 'themeColor'),
    c = l(e, 'w', 'themeTint'),
    p = l(e, 'w', 'themeShade'),
    f = Zo(s, a, c, p);
  f && (r.color = f);
  let d = l(e, 'w', 'shadow');
  (d === '1' || d === 'true') && (r.shadow = true);
  let h = l(e, 'w', 'frame');
  return ((h === '1' || h === 'true') && (r.frame = true), r);
}
function Yo(e) {
  switch (e) {
    case 'landscape':
      return 'landscape';
    case 'portrait':
      return 'portrait';
    default:
      return;
  }
}
function Ko(e) {
  switch (e) {
    case 'continuous':
      return 'continuous';
    case 'nextPage':
      return 'nextPage';
    case 'oddPage':
      return 'oddPage';
    case 'evenPage':
      return 'evenPage';
    case 'nextColumn':
      return 'nextColumn';
    default:
      return;
  }
}
function Qo(e) {
  switch (e) {
    case 'top':
      return 'top';
    case 'center':
      return 'center';
    case 'both':
      return 'both';
    case 'bottom':
      return 'bottom';
    default:
      return;
  }
}
function ei(e) {
  switch (e) {
    case 'continuous':
      return 'continuous';
    case 'newPage':
      return 'newPage';
    case 'newSection':
      return 'newSection';
    default:
      return;
  }
}
function Be(e, t) {
  let n = {};
  if (!e) return n;
  let r = u(e, 'w', 'pgSz');
  if (r) {
    let y = w(r, 'w', 'w');
    y !== void 0 && (n.pageWidth = y);
    let x = w(r, 'w', 'h');
    x !== void 0 && (n.pageHeight = x);
    let P = l(r, 'w', 'orient'),
      T = Yo(P);
    T && (n.orientation = T);
  }
  let o = u(e, 'w', 'pgMar');
  if (o) {
    let y = w(o, 'w', 'top');
    y !== void 0 && (n.marginTop = y);
    let x = w(o, 'w', 'bottom');
    x !== void 0 && (n.marginBottom = x);
    let P = w(o, 'w', 'left');
    P !== void 0 && (n.marginLeft = P);
    let T = w(o, 'w', 'right');
    T !== void 0 && (n.marginRight = T);
    let k = w(o, 'w', 'header');
    k !== void 0 && (n.headerDistance = k);
    let $ = w(o, 'w', 'footer');
    $ !== void 0 && (n.footerDistance = $);
    let D = w(o, 'w', 'gutter');
    D !== void 0 && (n.gutter = D);
  }
  let i = u(e, 'w', 'cols');
  if (i) {
    let y = w(i, 'w', 'num');
    y !== void 0 && (n.columnCount = y);
    let x = w(i, 'w', 'space');
    x !== void 0 && (n.columnSpace = x);
    let P = l(i, 'w', 'equalWidth');
    P === '1' || P === 'true'
      ? (n.equalWidth = true)
      : (P === '0' || P === 'false') && (n.equalWidth = false);
    let T = l(i, 'w', 'sep');
    (T === '1' || T === 'true') && (n.separator = true);
    let k = A(i, 'w', 'col');
    if (k.length > 0) {
      n.columns = [];
      for (let $ of k) {
        let D = {},
          B = w($, 'w', 'w');
        B !== void 0 && (D.width = B);
        let O = w($, 'w', 'space');
        (O !== void 0 && (D.space = O), n.columns.push(D));
      }
    }
  }
  let s = u(e, 'w', 'type');
  if (s) {
    let y = l(s, 'w', 'val'),
      x = Ko(y);
    x && (n.sectionStart = x);
  }
  let a = u(e, 'w', 'vAlign');
  if (a) {
    let y = l(a, 'w', 'val'),
      x = Qo(y);
    x && (n.verticalAlign = x);
  }
  let c = u(e, 'w', 'bidi');
  c && (n.bidi = v(c));
  let p = A(e, 'w', 'headerReference');
  p.length > 0 && (n.headerReferences = p.map((y) => yn(y)));
  let f = A(e, 'w', 'footerReference');
  f.length > 0 && (n.footerReferences = f.map((y) => xn(y)));
  let d = u(e, 'w', 'titlePg');
  d && (n.titlePg = v(d));
  let h = u(e, 'w', 'evenAndOddHeaders');
  h && (n.evenAndOddHeaders = v(h));
  let g = u(e, 'w', 'lnNumType');
  if (g) {
    n.lineNumbers = {};
    let y = w(g, 'w', 'start');
    y !== void 0 && (n.lineNumbers.start = y);
    let x = w(g, 'w', 'countBy');
    x !== void 0 && (n.lineNumbers.countBy = x);
    let P = w(g, 'w', 'distance');
    P !== void 0 && (n.lineNumbers.distance = P);
    let T = l(g, 'w', 'restart'),
      k = ei(T);
    k && (n.lineNumbers.restart = k);
  }
  let m = u(e, 'w', 'pgBorders');
  if (m) {
    n.pageBorders = {};
    let y = Ae(u(m, 'w', 'top'));
    y && (n.pageBorders.top = y);
    let x = Ae(u(m, 'w', 'bottom'));
    x && (n.pageBorders.bottom = x);
    let P = Ae(u(m, 'w', 'left'));
    P && (n.pageBorders.left = P);
    let T = Ae(u(m, 'w', 'right'));
    T && (n.pageBorders.right = T);
    let k = l(m, 'w', 'display');
    (k === 'allPages' || k === 'firstPage' || k === 'notFirstPage') && (n.pageBorders.display = k);
    let $ = l(m, 'w', 'offsetFrom');
    ($ === 'page' || $ === 'text') && (n.pageBorders.offsetFrom = $);
    let D = l(m, 'w', 'zOrder');
    (D === 'front' || D === 'back') && (n.pageBorders.zOrder = D);
  }
  let b = u(e, 'w', 'background');
  if (b) {
    n.background = {};
    let y = l(b, 'w', 'color');
    y && y !== 'auto' && (n.background.color = { rgb: y });
    let x = l(b, 'w', 'themeColor');
    x && (n.background.themeColor = x);
    let P = l(b, 'w', 'themeTint');
    P && (n.background.themeTint = P);
    let T = l(b, 'w', 'themeShade');
    T && (n.background.themeShade = T);
  }
  let C = u(e, 'w', 'footnotePr');
  if (C) {
    let y = kn(C);
    Object.keys(y).length > 0 && (n.footnotePr = y);
  }
  let I = u(e, 'w', 'endnotePr');
  if (I) {
    let y = Rn(I);
    Object.keys(y).length > 0 && (n.endnotePr = y);
  }
  let S = u(e, 'w', 'docGrid');
  if (S) {
    n.docGrid = {};
    let y = l(S, 'w', 'type');
    (y === 'default' || y === 'lines' || y === 'linesAndChars' || y === 'snapToChars') &&
      (n.docGrid.type = y);
    let x = w(S, 'w', 'linePitch');
    x !== void 0 && (n.docGrid.linePitch = x);
    let P = w(S, 'w', 'charSpace');
    P !== void 0 && (n.docGrid.charSpace = P);
  }
  let F = u(e, 'w', 'paperSrc');
  if (F) {
    let y = w(F, 'w', 'first');
    y !== void 0 && (n.paperSrcFirst = y);
    let x = w(F, 'w', 'other');
    x !== void 0 && (n.paperSrcOther = x);
  }
  return n;
}
function In() {
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
function ti(e, t) {
  return !e && !t
    ? true
    : !(
        !e ||
        !t ||
        e.bold !== t.bold ||
        e.boldCs !== t.boldCs ||
        e.italic !== t.italic ||
        e.italicCs !== t.italicCs ||
        e.strike !== t.strike ||
        e.doubleStrike !== t.doubleStrike ||
        e.smallCaps !== t.smallCaps ||
        e.allCaps !== t.allCaps ||
        e.hidden !== t.hidden ||
        e.emboss !== t.emboss ||
        e.imprint !== t.imprint ||
        e.outline !== t.outline ||
        e.shadow !== t.shadow ||
        e.rtl !== t.rtl ||
        e.cs !== t.cs ||
        e.fontSize !== t.fontSize ||
        e.fontSizeCs !== t.fontSizeCs ||
        e.spacing !== t.spacing ||
        e.position !== t.position ||
        e.scale !== t.scale ||
        e.kerning !== t.kerning ||
        e.vertAlign !== t.vertAlign ||
        e.highlight !== t.highlight ||
        e.effect !== t.effect ||
        e.emphasisMark !== t.emphasisMark ||
        e.styleId !== t.styleId ||
        !ni(e.underline, t.underline) ||
        !Le(e.color, t.color) ||
        !ri(e.shading, t.shading) ||
        !oi(e.fontFamily, t.fontFamily)
      );
}
function ni(e, t) {
  return !e && !t ? true : !e || !t || e.style !== t.style ? false : Le(e.color, t.color);
}
function Le(e, t) {
  return !e && !t
    ? true
    : !e || !t
      ? false
      : e.rgb === t.rgb &&
        e.auto === t.auto &&
        e.themeColor === t.themeColor &&
        e.themeTint === t.themeTint &&
        e.themeShade === t.themeShade;
}
function ri(e, t) {
  return !e && !t
    ? true
    : !(!e || !t || e.pattern !== t.pattern || !Le(e.color, t.color) || !Le(e.fill, t.fill));
}
function oi(e, t) {
  return !e && !t
    ? true
    : !e || !t
      ? false
      : e.ascii === t.ascii &&
        e.hAnsi === t.hAnsi &&
        e.eastAsia === t.eastAsia &&
        e.cs === t.cs &&
        e.asciiTheme === t.asciiTheme &&
        e.hAnsiTheme === t.hAnsiTheme &&
        e.eastAsiaTheme === t.eastAsiaTheme &&
        e.csTheme === t.csTheme;
}
function ii(e) {
  return e.type === 'text' || e.type === 'softHyphen' || e.type === 'noBreakHyphen';
}
function En(e) {
  return e.content.length === 0 ? true : e.content.every(ii);
}
function si(e, t) {
  let n = [];
  for (let r of e) n.push(r);
  if (n.length > 0 && t.length > 0 && n[n.length - 1].type === 'text' && t[0].type === 'text') {
    let r = n[n.length - 1],
      o = t[0];
    n[n.length - 1] = {
      type: 'text',
      text: r.text + o.text,
      preserveSpace: r.preserveSpace || o.preserveSpace || void 0,
    };
    for (let i = 1; i < t.length; i++) n.push(t[i]);
  } else for (let r of t) n.push(r);
  return n;
}
function ai(e) {
  if (e.length <= 1) return e;
  let t = [],
    n = null;
  for (let r of e)
    if (r.content.length !== 0) {
      if (n === null) {
        n = { ...r, content: [...r.content] };
        continue;
      }
      En(n) && En(r) && ti(n.formatting, r.formatting)
        ? (n = { type: 'run', formatting: n.formatting, content: si(n.content, r.content) })
        : (t.push(n), (n = { ...r, content: [...r.content] }));
    }
  return (n !== null && t.push(n), t);
}
function ot(e) {
  if (e.length <= 1) return e;
  let t = [],
    n = [];
  function r() {
    if (n.length > 0) {
      let o = ai(n);
      (t.push(...o), (n.length = 0));
    }
  }
  for (let o of e)
    if (o.type === 'run') n.push(o);
    else if ((r(), o.type === 'hyperlink')) {
      let i = { ...o, children: ot(o.children) };
      t.push(i);
    } else t.push(o);
  return (r(), t);
}
function li(e) {
  let t = { sdtType: 'richText' };
  if (!e || !e.elements) return t;
  for (let n of e.elements) {
    if (n.type !== 'element') continue;
    switch (n.name?.replace(/^w:/, '') ?? '') {
      case 'alias':
        t.alias = l(n, 'w', 'val') ?? void 0;
        break;
      case 'tag':
        t.tag = l(n, 'w', 'val') ?? void 0;
        break;
      case 'lock':
        t.lock = l(n, 'w', 'val') ?? 'unlocked';
        break;
      case 'placeholder': {
        let o = u(n, 'w', 'docPart');
        if (o) {
          let i = u(o, 'w', 'val');
          t.placeholder = i ? (l(i, 'w', 'val') ?? void 0) : void 0;
        }
        break;
      }
      case 'showingPlcHdr':
        t.showingPlaceholder = true;
        break;
      case 'text':
        t.sdtType = 'plainText';
        break;
      case 'date':
        ((t.sdtType = 'date'), (t.dateFormat = l(n, 'w', 'fullDate') ?? void 0));
        break;
      case 'dropDownList':
        ((t.sdtType = 'dropdown'), (t.listItems = Mn(n)));
        break;
      case 'comboBox':
        ((t.sdtType = 'comboBox'), (t.listItems = Mn(n)));
        break;
      case 'checkbox': {
        t.sdtType = 'checkbox';
        let o = u(n, 'w14', 'checked') ?? u(n, 'w', 'checked');
        t.checked = o ? l(o, 'w14', 'val') === '1' || l(o, 'w', 'val') === '1' : false;
        break;
      }
      case 'picture':
        t.sdtType = 'picture';
        break;
      case 'docPartObj':
        t.sdtType = 'buildingBlockGallery';
        break;
      case 'group':
        t.sdtType = 'group';
        break;
    }
  }
  return t;
}
function Mn(e) {
  let t = [];
  for (let n of e.elements ?? [])
    n.type === 'element' &&
      (n.name === 'w:listItem' || n.name?.endsWith(':listItem')) &&
      t.push({ displayText: l(n, 'w', 'displayText') ?? '', value: l(n, 'w', 'value') ?? '' });
  return t;
}
function Dn(e) {
  let t = '';
  if (e.type === 'text' && typeof e.text == 'string') return e.text;
  if (e.elements)
    for (let n of e.elements)
      if ((n.name?.replace(/^.*:/, '') ?? '') === 't' && n.elements)
        for (let o of n.elements) o.type === 'text' && typeof o.text == 'string' && (t += o.text);
      else t += Dn(n);
  return t;
}
function ci(e, t, n, r) {
  let o = {};
  return (
    e && e !== 'auto' ? (o.rgb = e) : e === 'auto' && (o.auto = true),
    t && (o.themeColor = t),
    n && (o.themeTint = n),
    r && (o.themeShade = r),
    o
  );
}
function ui(e) {
  if (!e) return;
  let t = {},
    n = l(e, 'w', 'color');
  n && n !== 'auto' && (t.color = { rgb: n });
  let r = l(e, 'w', 'fill');
  r && r !== 'auto' && (t.fill = { rgb: r });
  let o = l(e, 'w', 'themeFill');
  o && ((t.fill = t.fill || {}), (t.fill.themeColor = o));
  let i = l(e, 'w', 'themeFillTint');
  i && t.fill && (t.fill.themeTint = i);
  let s = l(e, 'w', 'themeFillShade');
  s && t.fill && (t.fill.themeShade = s);
  let a = l(e, 'w', 'val');
  return (a && (t.pattern = a), Object.keys(t).length > 0 ? t : void 0);
}
function fe(e) {
  if (!e) return;
  let t = l(e, 'w', 'val');
  if (!t) return;
  let n = { style: t },
    r = l(e, 'w', 'color'),
    o = l(e, 'w', 'themeColor');
  (r || o) && (n.color = ci(r, o, l(e, 'w', 'themeTint'), l(e, 'w', 'themeShade')));
  let i = w(e, 'w', 'sz');
  i !== void 0 && (n.size = i);
  let s = w(e, 'w', 'space');
  s !== void 0 && (n.space = s);
  let a = l(e, 'w', 'shadow');
  a && (n.shadow = a === '1' || a === 'true');
  let c = l(e, 'w', 'frame');
  return (c && (n.frame = c === '1' || c === 'true'), n);
}
function pi(e) {
  if (!e) return;
  let t = A(e, 'w', 'tab');
  if (t.length === 0) return;
  let n = [];
  for (let r of t) {
    let o = w(r, 'w', 'pos'),
      i = l(r, 'w', 'val');
    if (o !== void 0 && i) {
      let s = { position: o, alignment: i },
        a = l(r, 'w', 'leader');
      (a && (s.leader = a), n.push(s));
    }
  }
  return n.length > 0 ? n : void 0;
}
function fi(e) {
  if (!e) return;
  let t = {},
    n = w(e, 'w', 'w');
  n !== void 0 && (t.width = n);
  let r = w(e, 'w', 'h');
  r !== void 0 && (t.height = r);
  let o = l(e, 'w', 'hAnchor');
  (o === 'text' || o === 'margin' || o === 'page') && (t.hAnchor = o);
  let i = l(e, 'w', 'vAnchor');
  (i === 'text' || i === 'margin' || i === 'page') && (t.vAnchor = i);
  let s = w(e, 'w', 'x');
  s !== void 0 && (t.x = s);
  let a = w(e, 'w', 'y');
  a !== void 0 && (t.y = a);
  let c = l(e, 'w', 'xAlign');
  c && (t.xAlign = c);
  let p = l(e, 'w', 'yAlign');
  p && (t.yAlign = p);
  let f = l(e, 'w', 'wrap');
  return (f && (t.wrap = f), Object.keys(t).length > 0 ? t : void 0);
}
function An(e, t, n) {
  if (!e) return;
  let r = {},
    o = u(e, 'w', 'jc');
  if (o) {
    let T = l(o, 'w', 'val');
    T && (r.alignment = T);
  }
  let i = u(e, 'w', 'bidi');
  i && (r.bidi = v(i));
  let s = u(e, 'w', 'spacing');
  if (s) {
    let T = w(s, 'w', 'before');
    T !== void 0 && (r.spaceBefore = T);
    let k = w(s, 'w', 'after');
    k !== void 0 && (r.spaceAfter = k);
    let $ = w(s, 'w', 'line');
    $ !== void 0 && (r.lineSpacing = $);
    let D = l(s, 'w', 'lineRule');
    D && (r.lineSpacingRule = D);
    let B = l(s, 'w', 'beforeAutospacing');
    B && (r.beforeAutospacing = B === '1' || B === 'true');
    let O = l(s, 'w', 'afterAutospacing');
    O && (r.afterAutospacing = O === '1' || O === 'true');
  }
  let a = u(e, 'w', 'ind');
  if (a) {
    let T = w(a, 'w', 'left');
    T !== void 0 && (r.indentLeft = T);
    let k = w(a, 'w', 'right');
    k !== void 0 && (r.indentRight = k);
    let $ = w(a, 'w', 'firstLine');
    $ !== void 0 && (r.indentFirstLine = $);
    let D = w(a, 'w', 'hanging');
    D !== void 0 && ((r.indentFirstLine = -D), (r.hangingIndent = true));
    let B = w(a, 'w', 'start');
    B !== void 0 && r.indentLeft === void 0 && (r.indentLeft = B);
    let O = w(a, 'w', 'end');
    O !== void 0 && r.indentRight === void 0 && (r.indentRight = O);
  }
  let c = u(e, 'w', 'pBdr');
  if (c) {
    let T = {},
      k = fe(u(c, 'w', 'top'));
    k && (T.top = k);
    let $ = fe(u(c, 'w', 'bottom'));
    $ && (T.bottom = $);
    let D = fe(u(c, 'w', 'left'));
    D && (T.left = D);
    let B = fe(u(c, 'w', 'right'));
    B && (T.right = B);
    let O = fe(u(c, 'w', 'between'));
    O && (T.between = O);
    let q = fe(u(c, 'w', 'bar'));
    (q && (T.bar = q), Object.keys(T).length > 0 && (r.borders = T));
  }
  let p = u(e, 'w', 'shd');
  p && (r.shading = ui(p));
  let f = u(e, 'w', 'tabs');
  f && (r.tabs = pi(f));
  let d = u(e, 'w', 'keepNext');
  d && (r.keepNext = v(d));
  let h = u(e, 'w', 'keepLines');
  h && (r.keepLines = v(h));
  let g = u(e, 'w', 'widowControl');
  g && (r.widowControl = v(g));
  let m = u(e, 'w', 'pageBreakBefore');
  m && (r.pageBreakBefore = v(m));
  let b = u(e, 'w', 'contextualSpacing');
  b && (r.contextualSpacing = v(b));
  let C = u(e, 'w', 'numPr');
  if (C) {
    let T = u(C, 'w', 'numId'),
      k = u(C, 'w', 'ilvl');
    if (T || k) {
      if (((r.numPr = {}), T)) {
        let $ = w(T, 'w', 'val');
        $ !== void 0 && (r.numPr.numId = $);
      }
      if (k) {
        let $ = w(k, 'w', 'val');
        $ !== void 0 && (r.numPr.ilvl = $);
      }
    }
  }
  let I = u(e, 'w', 'outlineLvl');
  if (I) {
    let T = w(I, 'w', 'val');
    T !== void 0 && (r.outlineLevel = T);
  }
  let S = u(e, 'w', 'pStyle');
  if (S) {
    let T = l(S, 'w', 'val');
    T && (r.styleId = T);
  }
  let F = u(e, 'w', 'framePr');
  F && (r.frame = fi(F));
  let y = u(e, 'w', 'suppressLineNumbers');
  y && (r.suppressLineNumbers = v(y));
  let x = u(e, 'w', 'suppressAutoHyphens');
  x && (r.suppressAutoHyphens = v(x));
  let P = u(e, 'w', 'rPr');
  return (P && (r.runProperties = Me(P, t)), Object.keys(r).length > 0 ? r : void 0);
}
function it(e) {
  if (!e) return '';
  let t = e.indexOf(':');
  return t >= 0 ? e.substring(t + 1) : e;
}
function $n(e, t) {
  if (!e) return `w:${t}`;
  let n = e.indexOf(':');
  return n < 0 ? t : `${e.substring(0, n + 1)}${t}`;
}
function Bn(e) {
  if (e.type !== 'element') return e;
  let t = it(e.name),
    n = e.name;
  return (
    t === 'delText' ? (n = $n(e.name, 't')) : t === 'delInstrText' && (n = $n(e.name, 'instrText')),
    { ...e, name: n, elements: e.elements?.map(Bn) }
  );
}
function Te(e) {
  let t = l(e, 'w', 'id'),
    n = t ? parseInt(t, 10) : 0,
    r = l(e, 'w', 'author'),
    o = l(e, 'w', 'date'),
    i = r?.trim() ?? '',
    s = o?.trim() ?? '';
  return {
    id: Number.isInteger(n) && n >= 0 ? n : 0,
    author: i.length > 0 ? i : 'Unknown',
    date: s.length > 0 ? s : void 0,
  };
}
function di(e) {
  let t = Te(e),
    n = (l(e, 'w', 'rsid') ?? '').trim();
  return n.length > 0 ? { ...t, rsid: n } : t;
}
function mi(e, t, n, r) {
  if (!e) return;
  let o = A(e, 'w', 'pPrChange')
    .map((i) => {
      let s = u(i, 'w', 'pPr');
      return {
        type: 'paragraphPropertyChange',
        info: di(i),
        previousFormatting: An(s, t),
        currentFormatting: r,
      };
    })
    .filter((i) => i.previousFormatting || i.currentFormatting);
  return o.length > 0 ? o : void 0;
}
function hi(e, t, n, r, o) {
  return an(e, t, n, r, o);
}
function gi(e) {
  return ln(e);
}
function wi(e) {
  return cn(e);
}
function Ln(e) {
  let t = e.trim().match(/^\\?([A-Z]+)/i);
  if (!t) return 'UNKNOWN';
  let n = t[1].toUpperCase();
  return [
    'PAGE',
    'NUMPAGES',
    'NUMWORDS',
    'NUMCHARS',
    'DATE',
    'TIME',
    'CREATEDATE',
    'SAVEDATE',
    'PRINTDATE',
    'AUTHOR',
    'TITLE',
    'SUBJECT',
    'KEYWORDS',
    'COMMENTS',
    'FILENAME',
    'FILESIZE',
    'TEMPLATE',
    'DOCPROPERTY',
    'DOCVARIABLE',
    'REF',
    'PAGEREF',
    'NOTEREF',
    'HYPERLINK',
    'TOC',
    'TOA',
    'INDEX',
    'SEQ',
    'STYLEREF',
    'AUTONUM',
    'AUTONUMLGL',
    'AUTONUMOUT',
    'IF',
    'MERGEFIELD',
    'NEXT',
    'NEXTIF',
    'ASK',
    'SET',
    'QUOTE',
    'INCLUDETEXT',
    'INCLUDEPICTURE',
    'SYMBOL',
    'ADVANCE',
    'EDITTIME',
    'REVNUM',
    'SECTION',
    'SECTIONPAGES',
    'USERADDRESS',
    'USERNAME',
    'USERINITIALS',
  ].includes(n)
    ? n
    : 'UNKNOWN';
}
function yi(e, t, n, r, o) {
  let i = l(e, 'w', 'instr') ?? '',
    s = Ln(i),
    a = { type: 'simpleField', instruction: i, fieldType: s, content: [] },
    c = l(e, 'w', 'fldLock');
  (c === '1' || c === 'true') && (a.fldLock = true);
  let p = l(e, 'w', 'dirty');
  (p === '1' || p === 'true') && (a.dirty = true);
  let f = X(e);
  for (let d of f) it(d.name) === 'r' && a.content.push(xe(d, t, n, r, o));
  return a;
}
function de(e, t, n, r, o, i, s = 'default') {
  let a = [],
    c = X(e),
    p = false,
    f = '',
    d = [],
    h = [],
    g = false,
    m = false,
    b = false;
  for (let C of c) {
    let I = it(C.name);
    switch (I) {
      case 'r': {
        let S = s === 'deletion' ? Bn(C) : C,
          F = xe(S, t, n, o, i),
          y = false,
          x = false,
          P = false,
          T = '';
        for (let k of F.content)
          k.type === 'fieldChar'
            ? k.charType === 'begin'
              ? ((y = true), k.fldLock && (m = true), k.dirty && (b = true))
              : k.charType === 'separate'
                ? (x = true)
                : k.charType === 'end' && (P = true)
            : k.type === 'instrText' && (T += k.text);
        if (
          (y && ((p = true), (g = false), (f = ''), (d = []), (h = []), (m = false), (b = false)),
          p)
        ) {
          if (
            (T && (f += T), x && (g = true), g && !P ? x || h.push(F) : !g && !y && d.push(F), P)
          ) {
            let k = {
              type: 'complexField',
              instruction: f.trim(),
              fieldType: Ln(f),
              fieldCode: d,
              fieldResult: h,
            };
            (m && (k.fldLock = true), b && (k.dirty = true), a.push(k), (p = false));
          }
        } else a.push(F);
        break;
      }
      case 'hyperlink':
        a.push(hi(C, o, t, n, i));
        break;
      case 'bookmarkStart':
        a.push(gi(C));
        break;
      case 'bookmarkEnd':
        a.push(wi(C));
        break;
      case 'fldSimple':
        a.push(yi(C, t, n, o, i));
        break;
      case 'pPr':
        break;
      case 'proofErr':
      case 'permStart':
      case 'permEnd':
      case 'customXml':
        break;
      case 'sdt': {
        let S = (C.elements ?? []).find(
            (y) => y.type === 'element' && (y.name === 'w:sdtPr' || y.name?.endsWith(':sdtPr'))
          ),
          F = (C.elements ?? []).find(
            (y) =>
              y.type === 'element' && (y.name === 'w:sdtContent' || y.name?.endsWith(':sdtContent'))
          );
        if (F) {
          let y = de(F, t, n, null, o, i, s),
            P = {
              type: 'inlineSdt',
              properties: li(S ?? null),
              content: y.filter((T) => T.type === 'run' || T.type === 'hyperlink'),
            };
          a.push(P);
        }
        break;
      }
      case 'ins': {
        let S = Te(C),
          F = de(C, t, n, null, o, i),
          y = {
            type: 'insertion',
            info: S,
            content: F.filter((x) => x.type === 'run' || x.type === 'hyperlink'),
          };
        a.push(y);
        break;
      }
      case 'del': {
        let S = Te(C),
          F = de(C, t, n, null, o, i, 'deletion'),
          y = {
            type: 'deletion',
            info: S,
            content: F.filter((x) => x.type === 'run' || x.type === 'hyperlink'),
          };
        a.push(y);
        break;
      }
      case 'moveFrom': {
        let S = Te(C),
          F = de(C, t, n, null, o, i, 'deletion'),
          y = {
            type: 'moveFrom',
            info: S,
            content: F.filter((x) => x.type === 'run' || x.type === 'hyperlink'),
          };
        a.push(y);
        break;
      }
      case 'moveTo': {
        let S = Te(C),
          F = de(C, t, n, null, o, i),
          y = {
            type: 'moveTo',
            info: S,
            content: F.filter((x) => x.type === 'run' || x.type === 'hyperlink'),
          };
        a.push(y);
        break;
      }
      case 'smartTag':
        break;
      case 'moveFromRangeStart': {
        let S = parseInt(l(C, 'w', 'id') ?? '0', 10),
          F = l(C, 'w', 'name') ?? '';
        a.push({ type: 'moveFromRangeStart', id: S, name: F });
        break;
      }
      case 'moveFromRangeEnd': {
        let S = parseInt(l(C, 'w', 'id') ?? '0', 10);
        a.push({ type: 'moveFromRangeEnd', id: S });
        break;
      }
      case 'moveToRangeStart': {
        let S = parseInt(l(C, 'w', 'id') ?? '0', 10),
          F = l(C, 'w', 'name') ?? '';
        a.push({ type: 'moveToRangeStart', id: S, name: F });
        break;
      }
      case 'moveToRangeEnd': {
        let S = parseInt(l(C, 'w', 'id') ?? '0', 10);
        a.push({ type: 'moveToRangeEnd', id: S });
        break;
      }
      case 'commentRangeStart': {
        let S = parseInt(l(C, 'w', 'id') ?? '0', 10);
        a.push({ type: 'commentRangeStart', id: S });
        break;
      }
      case 'commentRangeEnd': {
        let S = parseInt(l(C, 'w', 'id') ?? '0', 10);
        a.push({ type: 'commentRangeEnd', id: S });
        break;
      }
      case 'oMath':
      case 'oMathPara': {
        let S = I === 'oMathPara',
          F = At(C),
          y = Dn(C),
          x = {
            type: 'mathEquation',
            display: S ? 'block' : 'inline',
            ommlXml: F,
            plainText: y || void 0,
          };
        a.push(x);
        break;
      }
    }
  }
  return a;
}
function G(e, t, n, r, o = null, i = null) {
  let s = { type: 'paragraph', content: [] },
    a = l(e, 'w14', 'paraId') ?? l(e, 'w', 'paraId');
  a && (s.paraId = a);
  let c = l(e, 'w14', 'textId') ?? l(e, 'w', 'textId');
  c && (s.textId = c);
  let p = u(e, 'w', 'pPr');
  if (p) {
    ((s.formatting = An(p, n)), (s.propertyChanges = mi(p, n, t, s.formatting)));
    let h = u(p, 'w', 'sectPr');
    h && (s.sectionProperties = Be(h));
  }
  let f = de(e, t, n, r, o, i);
  s.content = ot(f);
  let d = s.formatting?.numPr;
  if (!d && s.formatting?.styleId && t) {
    let h = t.get(s.formatting.styleId);
    h?.pPr?.numPr &&
      ((d = h.pPr.numPr), s.formatting || (s.formatting = {}), (s.formatting.numPr = d));
  }
  if (d && r) {
    let { numId: h, ilvl: g = 0 } = d;
    if (h !== void 0 && h !== 0) {
      let m = r.getLevel(h, g);
      if (
        m &&
        ((s.listRendering = {
          level: g,
          numId: h,
          marker: m.lvlText,
          isBullet: m.numFmt === 'bullet',
          numFmt: m.numFmt,
        }),
        m.pPr)
      ) {
        s.formatting || (s.formatting = {});
        let b = p ? u(p, 'w', 'ind') : null,
          C = b != null && (l(b, 'w', 'left') !== null || l(b, 'w', 'start') !== null),
          I = b != null && (l(b, 'w', 'firstLine') !== null || l(b, 'w', 'hanging') !== null);
        (!C && m.pPr.indentLeft !== void 0 && (s.formatting.indentLeft = m.pPr.indentLeft),
          I ||
            (m.pPr.indentFirstLine !== void 0 &&
              (s.formatting.indentFirstLine = m.pPr.indentFirstLine),
            m.pPr.hangingIndent !== void 0 && (s.formatting.hangingIndent = m.pPr.hangingIndent)));
      }
    }
  }
  return s;
}
function st(e) {
  let t = '';
  for (let n of e.content)
    if (n.type === 'run')
      for (let r of n.content)
        r.type === 'text'
          ? (t += r.text)
          : r.type === 'tab'
            ? (t += '	')
            : r.type === 'break' &&
              (r.breakType === 'page'
                ? (t += '\f')
                : (t += `
`));
    else if (n.type === 'hyperlink') {
      for (let r of n.children)
        if (r.type === 'run') for (let o of r.content) o.type === 'text' && (t += o.text);
    } else if (n.type === 'simpleField') {
      for (let r of n.content)
        if (r.type === 'run') for (let o of r.content) o.type === 'text' && (t += o.text);
    } else if (n.type === 'complexField')
      for (let r of n.fieldResult) for (let o of r.content) o.type === 'text' && (t += o.text);
  return t;
}
function xi(e) {
  if (!e || e.trim() === '') return '\u2022';
  let t = e.charCodeAt(0),
    n = {
      183: '\u2022',
      111: '\u25CB',
      167: '\u25A0',
      252: '\u2713',
      110: '\u25A0',
      113: '\u25CB',
      117: '\u25C6',
      118: '\u2756',
      168: '\u2713',
      251: '\u2713',
      254: '\u2713',
      61623: '\u2022',
      61550: '\u25A0',
      61551: '\u25CB',
      61607: '\u25A0',
      61692: '\u2713',
      8226: '\u2022',
      9679: '\u25CF',
      9675: '\u25CB',
      9632: '\u25A0',
      9633: '\u25A1',
      9670: '\u25C6',
      9671: '\u25C7',
      8211: '\u2013',
      8212: '\u2014',
      62: '>',
      45: '-',
    };
  return n[t] ? n[t] : (t >= 57344 && t <= 63743) || t < 32 || (t >= 127 && t < 160) ? '\u2022' : e;
}
function bi(e, t, n) {
  let r = e.listRendering;
  if (!r || !t) return;
  let { numId: o, level: i } = r;
  if (o === void 0 || o === 0) return;
  n.has(o) || n.set(o, new Array(9).fill(0));
  let s = n.get(o);
  s[i] = (s[i] || 0) + 1;
  for (let p = i + 1; p < s.length; p++) s[p] = 0;
  let a = r.marker;
  if (r.isBullet) {
    let p = a || '';
    r.marker = xi(p);
    return;
  }
  let c = a;
  for (let p = 0; p <= i; p++) {
    let f = `%${p + 1}`;
    if (c.includes(f)) {
      let d = s[p],
        h = t.getLevel(o, p),
        g = Ti(d, h?.numFmt || 'decimal');
      c = c.replace(f, g);
    }
  }
  r.marker = c;
}
function Ti(e, t) {
  switch (t) {
    case 'decimal':
    case 'decimalZero':
      return String(e);
    case 'lowerLetter':
      return String.fromCharCode(96 + ((e - 1) % 26) + 1);
    case 'upperLetter':
      return String.fromCharCode(64 + ((e - 1) % 26) + 1);
    case 'lowerRoman':
      return Nn(e).toLowerCase();
    case 'upperRoman':
      return Nn(e);
    case 'bullet':
      return '\u2022';
    default:
      return String(e);
  }
}
function Nn(e) {
  let t = [
      [1e3, 'M'],
      [900, 'CM'],
      [500, 'D'],
      [400, 'CD'],
      [100, 'C'],
      [90, 'XC'],
      [50, 'L'],
      [40, 'XL'],
      [10, 'X'],
      [9, 'IX'],
      [5, 'V'],
      [4, 'IV'],
      [1, 'I'],
    ],
    n = '';
  for (let [r, o] of t) for (; e >= r; ) ((n += o), (e -= r));
  return n;
}
var Xn = /\{([a-zA-Z_][a-zA-Z0-9_\-\.]*)\}/g;
function Hn(e) {
  let t = [],
    n;
  for (Xn.lastIndex = 0; (n = Xn.exec(e)) !== null; ) {
    let r = n[1].trim();
    r && !t.includes(r) && t.push(r);
  }
  return t;
}
function On(e) {
  let t = [];
  for (let n of e)
    if (n.type === 'paragraph') {
      let r = st(n),
        o = Hn(r);
      for (let i of o) t.includes(i) || t.push(i);
    } else if (n.type === 'table') {
      let r = jn(n);
      for (let o of r) t.includes(o) || t.push(o);
    }
  return t;
}
function jn(e) {
  let t = [];
  for (let n of e.rows)
    for (let r of n.cells)
      for (let o of r.content)
        if (o.type === 'paragraph') {
          let i = st(o),
            s = Hn(i);
          for (let a of s) t.includes(a) || t.push(a);
        } else if (o.type === 'table') {
          let i = jn(o);
          for (let s of i) t.includes(s) || t.push(s);
        }
  return t;
}
function zn(e, t, n, r, o, i) {
  let s = [],
    a = X(e),
    c = new Map();
  for (let p of a) {
    let f = p.name ?? '';
    if (f === 'w:p' || f.endsWith(':p')) {
      let d = G(p, t, n, r, o, i);
      (bi(d, r, c), s.push(d));
    } else if (f === 'w:tbl' || f.endsWith(':tbl')) {
      let d = be(p, t, n, r, o, i);
      s.push(d);
    } else if (f === 'w:sdt' || f.endsWith(':sdt')) {
      let d = (p.elements ?? []).find(
        (h) =>
          h.type === 'element' && (h.name === 'w:sdtContent' || h.name?.endsWith(':sdtContent'))
      );
      if (d) {
        let h = zn(d, t, n, r, o, i);
        s.push(...h);
      }
    }
  }
  return s;
}
function Ci(e, t) {
  let n = [],
    r = [];
  for (let o of e)
    (r.push(o),
      o.type === 'paragraph' &&
        o.sectionProperties &&
        (n.push({ properties: o.sectionProperties, content: r }), (r = [])));
  return ((r.length > 0 || n.length === 0) && n.push({ properties: t ?? In(), content: r }), n);
}
function Vn(e, t = null, n = null, r = null, o = null, i = null) {
  let s = { content: [] };
  if (!e) return s;
  let a = _(e);
  if (!a) return s;
  let c = (a.elements ?? []).find(
    (d) => d.type === 'element' && (d.name === 'w:document' || d.name?.endsWith(':document'))
  );
  if (!c) return s;
  let p = u(c, 'w', 'body');
  if (!p) return s;
  s.content = zn(p, t, n, r, o, i);
  let f = u(p, 'w', 'sectPr');
  return (
    f && (s.finalSectionProperties = Be(f)),
    (s.sections = Ci(s.content, s.finalSectionProperties)),
    s
  );
}
function vi(e) {
  let t = new Map(),
    n = _(e);
  if (!n) return t;
  let r = u(n, 'w16cex', 'commentsExtensible') ?? n;
  for (let o of X(r)) {
    if ((o.name?.replace(/^.*:/, '') ?? '') !== 'comment') continue;
    let s =
        l(o, 'w16cex', 'paraId') ??
        l(o, 'w15', 'paraId') ??
        o.attributes?.['w16cex:paraId'] ??
        o.attributes?.['w15:paraId'],
      a =
        l(o, 'w16cex', 'dateUtc') ??
        l(o, 'w15', 'dateUtc') ??
        o.attributes?.['w16cex:dateUtc'] ??
        o.attributes?.['w15:dateUtc'];
    s && a && t.set(String(s).toUpperCase(), String(a));
  }
  return t;
}
function Wn(e, t, n, r, o, i) {
  if (!e) return [];
  let s = _(e);
  if (!s) return [];
  let a = i ? vi(i) : new Map(),
    c = u(s, 'w', 'comments') ?? s,
    p = X(c),
    f = [];
  for (let d of p) {
    if ((d.name?.replace(/^.*:/, '') ?? '') !== 'comment') continue;
    let g = parseInt(l(d, 'w', 'id') ?? '0', 10),
      m = l(d, 'w', 'author') ?? 'Unknown',
      b = l(d, 'w', 'initials'),
      C = b != null ? String(b) : void 0,
      I = l(d, 'w', 'date'),
      S = I != null ? String(I) : void 0,
      F = l(d, 'w14', 'paraId') ?? d.attributes?.['w14:paraId'] ?? l(d, 'w', 'paraId'),
      x = (F ? a.get(String(F).toUpperCase()) : void 0) ?? S,
      P = [];
    for (let T of X(d))
      if ((T.name?.replace(/^.*:/, '') ?? '') === 'p') {
        let $ = G(T, t, n, null, r, o);
        P.push($);
      }
    f.push({ id: g, author: m, initials: C, date: x, content: P });
  }
  return f;
}
var at = new Set(),
  Ne = new Map(),
  Fi = new Set();
function Pi(e, t = [400, 700], n = ['normal', 'italic']) {
  let r = encodeURIComponent(e),
    o = [];
  for (let s of n) {
    let a = s === 'italic' ? 1 : 0;
    for (let c of t) o.push(`${a},${c}`);
  }
  o.sort();
  let i = o.join(';');
  return `https://fonts.googleapis.com/css2?family=${r}:ital,wght@${i}&display=swap`;
}
async function Un(e, t) {
  let n = e.trim();
  if (at.has(n)) return true;
  let r = Ne.get(n);
  if (r) return r;
  let o = (async () => {
    try {
      let i = Pi(n, t?.weights, t?.styles),
        s = document.createElement('link');
      return (
        (s.rel = 'stylesheet'),
        (s.href = i),
        (await new Promise((c) => {
          ((s.onload = () => c(!0)),
            (s.onerror = () => c(!1)),
            document.head.appendChild(s),
            setTimeout(() => c(!1), 5e3));
        }))
          ? (await ki(n, 3e3), at.add(n), Si([n]), !0)
          : !1
      );
    } catch (i) {
      return (console.warn(`Failed to load font "${n}":`, i), false);
    } finally {
      (Ne.delete(n), Ne.size === 0 && false);
    }
  })();
  return (Ne.set(n, o), o);
}
function Si(e) {
  for (let t of Fi)
    try {
      t(e);
    } catch (n) {
      console.warn('Font load callback error:', n);
    }
}
async function ki(e, t) {
  if ('fonts' in document)
    try {
      let n = `400 16px "${e}"`;
      return (
        await Promise.race([document.fonts.load(n), new Promise((r) => setTimeout(r, t))]),
        document.fonts.check(n)
      );
    } catch {}
  return (await new Promise((n) => setTimeout(n, 100)), true);
}
var Ri = {
  Calibri: 'Carlito',
  Cambria: 'Caladea',
  Arial: 'Arimo',
  'Times New Roman': 'Tinos',
  'Courier New': 'Cousine',
  Garamond: 'EB Garamond',
  'Book Antiqua': 'EB Garamond',
  Georgia: 'Tinos',
  Verdana: 'Open Sans',
  Tahoma: 'Open Sans',
  'Trebuchet MS': 'Source Sans Pro',
  'Century Gothic': 'Poppins',
  'Franklin Gothic': 'Libre Franklin',
  Palatino: 'EB Garamond',
  'Palatino Linotype': 'EB Garamond',
  'Lucida Sans': 'Open Sans',
  'Segoe UI': 'Open Sans',
  Impact: 'Anton',
  'Comic Sans MS': 'Comic Neue',
  Consolas: 'Inconsolata',
  'Lucida Console': 'Inconsolata',
  Monaco: 'Fira Code',
};
function Ii(e) {
  let t = e.trim();
  return Ri[t] || t;
}
async function Ei(e) {
  let t = e.trim(),
    n = Ii(t);
  if (n !== t) {
    let r = await Un(n);
    return (r && at.add(t), r);
  }
  return Un(n);
}
async function Gn(e) {
  let t = [...new Set(e.map((n) => n.trim()))];
  await Promise.all(t.map((n) => Ei(n)));
}
async function qn(e) {
  if (e instanceof ArrayBuffer) return e;
  if (e instanceof Uint8Array) {
    let t = new ArrayBuffer(e.byteLength);
    return (new Uint8Array(t).set(e), t);
  }
  if (e instanceof Blob) return e.arrayBuffer();
  throw new TypeError(`Unsupported DocxInput type: ${typeof e}`);
}
async function He(e, t = {}) {
  let n = e instanceof ArrayBuffer ? e : await qn(e),
    {
      onProgress: r = () => {},
      preloadFonts: o = true,
      parseHeadersFooters: i = true,
      parseNotes: s = true,
      detectVariables: a = true,
    } = t,
    c = [];
  try {
    let h = function (H, z) {
      let M = performance.now(),
        E = z(),
        N = performance.now() - M;
      return (
        d.push({ stage: H, ms: N }),
        N > 1e3 && console.warn(`[parseDocx] ${H} took ${Math.round(N)}ms`),
        E
      );
    };
    var p = h;
    let f = performance.now(),
      d = [];
    async function g(H, z) {
      let M = performance.now(),
        E = await z(),
        N = performance.now() - M;
      return (
        d.push({ stage: H, ms: N }),
        N > 1e3 && console.warn(`[parseDocx] ${H} took ${Math.round(N)}ms`),
        E
      );
    }
    r('Extracting DOCX...', 0);
    let m = await g('unzip', () => $t(n));
    (r('Extracted DOCX', 10), r('Parsing relationships...', 10));
    let b = h('relationships', () => (m.documentRels ? ke(m.documentRels) : new Map()));
    (r('Parsed relationships', 15), r('Parsing theme...', 15));
    let C = h('theme', () => Ht(m.themeXml));
    (r('Parsed theme', 20), r('Parsing styles...', 20));
    let I = null,
      S;
    (h('styles', () => {
      m.stylesXml && ((I = et(m.stylesXml, C)), (S = Gt(m.stylesXml, C)));
    }),
      r('Parsed styles', 30),
      r('Parsing numbering...', 30));
    let F = h('numbering', () => qt(m.numberingXml));
    (r('Parsed numbering', 35), r('Processing media files...', 35));
    let y = h('media', () => Mi(m, b));
    (r('Processed media', 40), r('Parsing document body...', 40));
    let x = { content: [] };
    (h('documentBody', () => {
      m.documentXml
        ? (x = Vn(m.documentXml, I, C, F, b, y))
        : c.push('No document.xml found in DOCX');
    }),
      r('Parsed document body', 55));
    let P, T;
    if (i) {
      r('Parsing headers/footers...', 55);
      let H = h('headersFooters', () => $i(m, I, C, F, b, y));
      ((P = H.headers), (T = H.footers), r('Parsed headers/footers', 65));
    } else r('Skipping headers/footers', 65);
    let k, $;
    if (s) {
      r('Parsing footnotes/endnotes...', 65);
      let H = h('footnotesEndnotes', () => Di(m, I, C, F, b, y));
      ((k = H.footnotes), ($ = H.endnotes), r('Parsed footnotes/endnotes', 75));
    } else r('Skipping footnotes/endnotes', 75);
    r('Parsing comments...', 75);
    let D = h('comments', () => Wn(m.commentsXml, I, C, b, y, m.commentsExtensibleXml));
    D.length > 0 && (x.comments = D);
    let B;
    (a
      ? (r('Detecting template variables...', 75),
        (B = h('variables', () => On(x.content))),
        r('Detected variables', 80))
      : r('Skipping variable detection', 80),
      o
        ? (r('Loading fonts...', 80), await g('fonts', () => Ai(C, S, x)), r('Loaded fonts', 95))
        : r('Skipping font loading', 95),
      r('Assembling document...', 95));
    let q = {
        package: {
          document: x,
          styles: S,
          theme: C,
          numbering: F.definitions,
          headers: P,
          footers: T,
          footnotes: k,
          endnotes: $,
          relationships: b,
          media: y,
        },
        originalBuffer: n,
        templateVariables: B,
        warnings: c.length > 0 ? c : void 0,
      },
      ne = performance.now() - f;
    if (ne > 2e3) {
      let H = d
        .filter((z) => z.ms > 100)
        .map((z) => `${z.stage}: ${Math.round(z.ms)}ms`)
        .join(', ');
      console.warn(`[parseDocx] Total: ${Math.round(ne)}ms` + (H ? ` (${H})` : ''));
    }
    return (r('Complete', 100), q);
  } catch (f) {
    let d = f instanceof Error ? f.message : String(f);
    throw (
      console.error('[parseDocx] Failed to parse DOCX:', d, f),
      new Error(`Failed to parse DOCX: ${d}`)
    );
  }
}
function Mi(e, t) {
  let n = new Map();
  for (let [r, o] of e.media.entries()) {
    let i = r.split('/').pop() || r,
      s = Dt(r),
      a = new Uint8Array(o),
      c = '';
    for (let g = 0; g < a.length; g++) c += String.fromCharCode(a[g]);
    let p = btoa(c),
      f = `data:${s};base64,${p}`,
      d = { path: r, filename: i, mimeType: s, data: o, dataUrl: f };
    n.set(r, d);
    let h = r.replace(/^word\//, '');
    h !== r && n.set(h, d);
  }
  return n;
}
function Xe(e, t) {
  let n = t.toLowerCase();
  for (let [r, o] of e.entries()) if (r.toLowerCase() === n) return o;
}
function $i(e, t, n, r, o, i) {
  let s = new Map(),
    a = new Map();
  for (let [c, p] of o.entries())
    if (p.type === oe.header && p.target) {
      let f = p.target.split('/').pop() || p.target,
        d = Xe(e.headers, f);
      if (d) {
        let h = `word/_rels/${f}.rels`,
          g = Xe(e.allXml, h),
          m = g ? ke(g) : o,
          b = bn(d, 'default', t, n, r, m, i);
        s.set(c, b);
      }
    } else if (p.type === oe.footer && p.target) {
      let f = p.target.split('/').pop() || p.target,
        d = Xe(e.footers, f);
      if (d) {
        let h = `word/_rels/${f}.rels`,
          g = Xe(e.allXml, h),
          m = g ? ke(g) : o,
          b = Tn(d, 'default', t, n, r, m, i);
        a.set(c, b);
      }
    }
  return { headers: s, footers: a };
}
function Di(e, t, n, r, o, i) {
  let s = vn(e.footnotesXml, t, n, r, o, i),
    a = Fn(e.endnotesXml, t, n, r, o, i);
  return { footnotes: s.getNormalFootnotes(), endnotes: a.getNormalEndnotes() };
}
async function Ai(e, t, n) {
  let r = new Set();
  if (e?.fontScheme) {
    let { majorFont: o, minorFont: i } = e.fontScheme;
    (o?.latin && r.add(o.latin), i?.latin && r.add(i.latin));
  }
  if (
    (t?.docDefaults?.rPr?.fontFamily?.ascii && r.add(t.docDefaults.rPr.fontFamily.ascii), t?.styles)
  )
    for (let o of t.styles)
      (o.rPr?.fontFamily?.ascii && r.add(o.rPr.fontFamily.ascii),
        o.rPr?.fontFamily?.hAnsi && r.add(o.rPr.fontFamily.hAnsi));
  if (n.content) {
    for (let o of n.content)
      if (o.type === 'paragraph')
        for (let i of o.content)
          i.type === 'run' &&
            i.formatting?.fontFamily &&
            (i.formatting.fontFamily.ascii && r.add(i.formatting.fontFamily.ascii),
            i.formatting.fontFamily.hAnsi && r.add(i.formatting.fontFamily.hAnsi));
  }
  if (r.size > 0)
    try {
      await Gn(Array.from(r));
    } catch (o) {
      console.warn('Failed to load some fonts:', o);
    }
}
var ze = { type: 'string', description: 'Document ID from a previous docx_load call' },
  Zi = {
    type: 'object',
    properties: {
      paragraphIndex: { type: 'number', description: 'Index of the paragraph (0-indexed)' },
      offset: { type: 'number', description: 'Character offset within the paragraph' },
    },
    required: ['paragraphIndex', 'offset'],
  },
  Kn = {
    name: 'docx_get_variables',
    description: `List all template variables ({name} format) found in the document.
Returns variable names without braces, along with their locations (body, headers, footers, etc.).
Use this to discover what data fields a template document expects.`,
    inputSchema: { type: 'object', properties: { documentId: ze }, required: ['documentId'] },
    handler: async (e, t) => {
      let { documentId: n } = e,
        r = t.session.documents.get(n);
      if (!r)
        return { isError: true, content: [{ type: 'text', text: `Document not found: ${n}` }] };
      try {
        let o = Ft(r.document);
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  variables: o.variables,
                  count: o.variables.length,
                  totalOccurrences: o.totalOccurrences,
                  byLocation: o.byLocation,
                },
                null,
                2
              ),
            },
          ],
        };
      } catch (o) {
        return {
          isError: true,
          content: [{ type: 'text', text: `Failed to detect variables: ${o.message}` }],
        };
      }
    },
    annotations: {
      category: 'template',
      readOnly: true,
      complexity: 'low',
      examples: [
        {
          description: 'Get all variables from a loaded document',
          input: { documentId: 'doc_123' },
          output: '{"variables": ["customer_name", "invoice_date"], "count": 2}',
        },
      ],
    },
  },
  Qn = {
    name: 'docx_insert_variable',
    description: `Insert a template variable placeholder ({name}) at a specific position in the document.
The variable can later be substituted with actual values using docx_apply_template.
Variable names should follow the pattern: letters, numbers, underscores, starting with a letter.`,
    inputSchema: {
      type: 'object',
      properties: {
        documentId: ze,
        position: Zi,
        variableName: {
          type: 'string',
          description:
            'Variable name without braces (e.g., "customer_name"). Will be inserted as {customer_name}',
          pattern: '^[a-zA-Z_][a-zA-Z0-9_]*$',
        },
      },
      required: ['documentId', 'position', 'variableName'],
    },
    handler: async (e, t) => {
      let { documentId: n, position: r, variableName: o } = e,
        i = t.session.documents.get(n);
      if (!i)
        return { isError: true, content: [{ type: 'text', text: `Document not found: ${n}` }] };
      if (!/^[a-zA-Z_][a-zA-Z0-9_\-.]*$/.test(o))
        return {
          isError: true,
          content: [
            {
              type: 'text',
              text: `Invalid variable name: ${o}. Must start with letter/underscore and contain only alphanumeric, underscore, hyphen, or dot.`,
            },
          ],
        };
      try {
        let { executeCommand: s } = await Promise.resolve().then(() => (lt(), Yn)),
          a = s(i.document, { type: 'insertText', position: r, text: `{${o}}` });
        return (
          (i.document = a),
          (i.lastModified = Date.now()),
          a.templateVariables || (a.templateVariables = []),
          a.templateVariables.includes(o) || a.templateVariables.push(o),
          {
            content: [
              {
                type: 'text',
                text: JSON.stringify({
                  success: !0,
                  variable: o,
                  insertedAs: `{${o}}`,
                  position: r,
                }),
              },
            ],
          }
        );
      } catch (s) {
        return {
          isError: true,
          content: [{ type: 'text', text: `Failed to insert variable: ${s.message}` }],
        };
      }
    },
    annotations: {
      category: 'template',
      readOnly: false,
      complexity: 'low',
      examples: [
        {
          description: 'Insert customer name variable at start of first paragraph',
          input: {
            documentId: 'doc_123',
            position: { paragraphIndex: 0, offset: 0 },
            variableName: 'customer_name',
          },
        },
      ],
    },
  },
  er = {
    name: 'docx_apply_template',
    description: `Substitute template variables with actual values in the document.
Replaces all {variable} placeholders with the corresponding values provided.
Preserves all formatting (fonts, styles, colors, tables).
Use docx_get_variables first to discover what variables exist in the document.`,
    inputSchema: {
      type: 'object',
      properties: {
        documentId: ze,
        variables: {
          type: 'object',
          description:
            'Map of variable names to values (e.g., {"customer_name": "John Doe", "date": "2024-01-15"})',
          additionalProperties: { type: 'string' },
        },
        keepUnmatchedVariables: {
          type: 'boolean',
          description:
            'If true, keep {variable} placeholders for variables not in the map. If false, replace with empty string. Default: true',
          default: true,
        },
      },
      required: ['documentId', 'variables'],
    },
    handler: async (e, t) => {
      let { documentId: n, variables: r, keepUnmatchedVariables: o = true } = e,
        i = t.session.documents.get(n);
      if (!i)
        return { isError: true, content: [{ type: 'text', text: `Document not found: ${n}` }] };
      if (!i.buffer)
        return {
          isError: true,
          content: [
            {
              type: 'text',
              text: 'Cannot apply template: document was not loaded from a DOCX buffer',
            },
          ],
        };
      try {
        let s = It(i.buffer, r, { nullGetter: o ? 'keep' : 'empty' }),
          a = await He(s.buffer);
        return (
          (i.document = a),
          (i.buffer = s.buffer),
          (i.lastModified = Date.now()),
          {
            content: [
              {
                type: 'text',
                text: JSON.stringify({
                  success: !0,
                  replacedVariables: s.replacedVariables,
                  unreplacedVariables: s.unreplacedVariables,
                  warnings: s.warnings,
                }),
              },
            ],
          }
        );
      } catch (s) {
        return {
          isError: true,
          content: [{ type: 'text', text: `Failed to apply template: ${s.message}` }],
        };
      }
    },
    annotations: {
      category: 'template',
      readOnly: false,
      complexity: 'medium',
      examples: [
        {
          description: 'Fill in customer and date values',
          input: {
            documentId: 'doc_123',
            variables: {
              customer_name: 'Jane Smith',
              invoice_date: '2024-02-15',
              amount: '$1,234.56',
            },
          },
        },
      ],
    },
  },
  tr = {
    name: 'docx_validate_template',
    description: `Validate that a document is a valid docxtemplater template.
Checks for syntax errors like unclosed braces, invalid tag names, etc.
Returns validation result with any errors found and list of valid tags.`,
    inputSchema: { type: 'object', properties: { documentId: ze }, required: ['documentId'] },
    handler: async (e, t) => {
      let { documentId: n } = e,
        r = t.session.documents.get(n);
      if (!r)
        return { isError: true, content: [{ type: 'text', text: `Document not found: ${n}` }] };
      if (!r.buffer)
        return {
          isError: true,
          content: [
            {
              type: 'text',
              text: 'Cannot validate template: document was not loaded from a DOCX buffer',
            },
          ],
        };
      try {
        let o = Et(r.buffer);
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  valid: o.valid,
                  tags: o.tags,
                  errors: o.errors.map((i) => ({
                    message: i.message,
                    variable: i.variable,
                    type: i.type,
                  })),
                },
                null,
                2
              ),
            },
          ],
        };
      } catch (o) {
        return {
          isError: true,
          content: [{ type: 'text', text: `Failed to validate template: ${o.message}` }],
        };
      }
    },
    annotations: { category: 'template', readOnly: true, complexity: 'low' },
  },
  ct = [Kn, Qn, er, tr];
var nr = {
  id: 'docxtemplater',
  name: 'Docxtemplater',
  version: '1.0.0',
  description: 'Template variable support using standard docxtemplater syntax ({variable})',
  commandHandlers: { insertTemplateVariable: qe, replaceWithTemplateVariable: Je },
  mcpTools: ct,
};
Fe();
function R(e) {
  return e
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
function Yi(e) {
  if (!e) return '';
  let t = [];
  return (
    e.auto ? t.push('w:val="auto"') : e.rgb && t.push(`w:val="${e.rgb}"`),
    e.themeColor && t.push(`w:themeColor="${e.themeColor}"`),
    e.themeTint && t.push(`w:themeTint="${e.themeTint}"`),
    e.themeShade && t.push(`w:themeShade="${e.themeShade}"`),
    t.length === 0 ? '' : `<w:color ${t.join(' ')}/>`
  );
}
function Ki(e) {
  if (!e) return '';
  let t = [];
  return (
    e.pattern ? t.push(`w:val="${e.pattern}"`) : t.push('w:val="clear"'),
    e.color?.rgb ? t.push(`w:color="${e.color.rgb}"`) : e.color?.auto && t.push('w:color="auto"'),
    e.fill?.rgb ? t.push(`w:fill="${e.fill.rgb}"`) : e.fill?.auto && t.push('w:fill="auto"'),
    e.fill?.themeColor && t.push(`w:themeFill="${e.fill.themeColor}"`),
    e.fill?.themeTint && t.push(`w:themeFillTint="${e.fill.themeTint}"`),
    e.fill?.themeShade && t.push(`w:themeFillShade="${e.fill.themeShade}"`),
    t.length === 0 ? '' : `<w:shd ${t.join(' ')}/>`
  );
}
function me(e) {
  if (!e) return '';
  let t = [];
  if ((e.styleId && t.push(`<w:rStyle w:val="${R(e.styleId)}"/>`), e.fontFamily)) {
    let o = [];
    (e.fontFamily.ascii && o.push(`w:ascii="${R(e.fontFamily.ascii)}"`),
      e.fontFamily.hAnsi && o.push(`w:hAnsi="${R(e.fontFamily.hAnsi)}"`),
      e.fontFamily.eastAsia && o.push(`w:eastAsia="${R(e.fontFamily.eastAsia)}"`),
      e.fontFamily.cs && o.push(`w:cs="${R(e.fontFamily.cs)}"`),
      e.fontFamily.asciiTheme && o.push(`w:asciiTheme="${e.fontFamily.asciiTheme}"`),
      e.fontFamily.hAnsiTheme && o.push(`w:hAnsiTheme="${e.fontFamily.hAnsiTheme}"`),
      e.fontFamily.eastAsiaTheme && o.push(`w:eastAsiaTheme="${e.fontFamily.eastAsiaTheme}"`),
      e.fontFamily.csTheme && o.push(`w:csTheme="${e.fontFamily.csTheme}"`),
      o.length > 0 && t.push(`<w:rFonts ${o.join(' ')}/>`));
  }
  (e.bold === true ? t.push('<w:b/>') : e.bold === false && t.push('<w:b w:val="0"/>'),
    e.boldCs === true ? t.push('<w:bCs/>') : e.boldCs === false && t.push('<w:bCs w:val="0"/>'),
    e.italic === true ? t.push('<w:i/>') : e.italic === false && t.push('<w:i w:val="0"/>'),
    e.italicCs === true ? t.push('<w:iCs/>') : e.italicCs === false && t.push('<w:iCs w:val="0"/>'),
    e.allCaps && t.push('<w:caps/>'),
    e.smallCaps && t.push('<w:smallCaps/>'),
    e.strike && t.push('<w:strike/>'),
    e.doubleStrike && t.push('<w:dstrike/>'),
    e.outline && t.push('<w:outline/>'),
    e.shadow && t.push('<w:shadow/>'),
    e.emboss && t.push('<w:emboss/>'),
    e.imprint && t.push('<w:imprint/>'),
    e.hidden && t.push('<w:vanish/>'));
  let n = Yi(e.color);
  if (
    (n && t.push(n),
    e.spacing !== void 0 && t.push(`<w:spacing w:val="${e.spacing}"/>`),
    e.scale !== void 0 && t.push(`<w:w w:val="${e.scale}"/>`),
    e.kerning !== void 0 && t.push(`<w:kern w:val="${e.kerning}"/>`),
    e.position !== void 0 && t.push(`<w:position w:val="${e.position}"/>`),
    e.fontSize !== void 0 && t.push(`<w:sz w:val="${e.fontSize}"/>`),
    e.fontSizeCs !== void 0 && t.push(`<w:szCs w:val="${e.fontSizeCs}"/>`),
    e.highlight &&
      e.highlight !== 'none' &&
      new Set([
        'black',
        'blue',
        'cyan',
        'darkBlue',
        'darkCyan',
        'darkGray',
        'darkGreen',
        'darkMagenta',
        'darkRed',
        'darkYellow',
        'green',
        'lightGray',
        'magenta',
        'red',
        'white',
        'yellow',
      ]).has(e.highlight) &&
      t.push(`<w:highlight w:val="${e.highlight}"/>`),
    e.underline)
  ) {
    let o = [`w:val="${e.underline.style}"`];
    (e.underline.color &&
      (e.underline.color.rgb && o.push(`w:color="${e.underline.color.rgb}"`),
      e.underline.color.themeColor && o.push(`w:themeColor="${e.underline.color.themeColor}"`),
      e.underline.color.themeTint && o.push(`w:themeTint="${e.underline.color.themeTint}"`),
      e.underline.color.themeShade && o.push(`w:themeShade="${e.underline.color.themeShade}"`)),
      t.push(`<w:u ${o.join(' ')}/>`));
  }
  (e.effect && e.effect !== 'none' && t.push(`<w:effect w:val="${e.effect}"/>`),
    e.emphasisMark && e.emphasisMark !== 'none' && t.push(`<w:em w:val="${e.emphasisMark}"/>`));
  let r = Ki(e.shading);
  return (
    r && t.push(r),
    e.vertAlign && e.vertAlign !== 'baseline' && t.push(`<w:vertAlign w:val="${e.vertAlign}"/>`),
    e.rtl && t.push('<w:rtl/>'),
    e.cs && t.push('<w:cs/>'),
    t.length === 0 ? '' : `<w:rPr>${t.join('')}</w:rPr>`
  );
}
function Qi(e) {
  return !e.startsWith('<w:rPr>') || !e.endsWith('</w:rPr>') ? '' : e.slice(7, -8);
}
function es(e) {
  let t = Number.isInteger(e.info.id) && e.info.id >= 0 ? e.info.id : 0,
    n = typeof e.info.author == 'string' ? e.info.author.trim() : '',
    r = n.length > 0 ? n : 'Unknown',
    o = typeof e.info.date == 'string' ? e.info.date.trim() : void 0,
    i = typeof e.info.rsid == 'string' ? e.info.rsid.trim() : void 0,
    s = [`w:id="${t}"`, `w:author="${R(r)}"`];
  (o && s.push(`w:date="${R(o)}"`), i && s.push(`w:rsid="${R(i)}"`));
  let a = me(e.previousFormatting) || '<w:rPr/>';
  return `<w:rPrChange ${s.join(' ')}>${a}</w:rPrChange>`;
}
function ts(e, t) {
  let n = me(e),
    r = n ? Qi(n) : '',
    o = (t ?? []).map(es).join(''),
    i = `${r}${o}`;
  return i ? `<w:rPr>${i}</w:rPr>` : '';
}
function ns(e) {
  return `<w:t${e.preserveSpace || e.text.startsWith(' ') || e.text.endsWith(' ') || e.text.includes('  ') ? ' xml:space="preserve"' : ''}>${R(e.text)}</w:t>`;
}
function rs(e) {
  return '<w:tab/>';
}
function os(e) {
  let t = [];
  return (
    e.breakType === 'page'
      ? t.push('w:type="page"')
      : e.breakType === 'column'
        ? t.push('w:type="column"')
        : e.breakType === 'textWrapping' &&
          (t.push('w:type="textWrapping"'),
          e.clear && e.clear !== 'none' && t.push(`w:clear="${e.clear}"`)),
    t.length === 0 ? '<w:br/>' : `<w:br ${t.join(' ')}/>`
  );
}
function is(e) {
  return `<w:sym w:font="${R(e.font)}" w:char="${R(e.char)}"/>`;
}
function ss(e) {
  return e.type === 'footnoteRef'
    ? `<w:footnoteReference w:id="${e.id}"/>`
    : `<w:endnoteReference w:id="${e.id}"/>`;
}
function as(e) {
  let t = [`w:fldCharType="${e.charType}"`];
  return (
    e.fldLock && t.push('w:fldLock="true"'),
    e.dirty && t.push('w:dirty="true"'),
    `<w:fldChar ${t.join(' ')}/>`
  );
}
function ls(e) {
  return `<w:instrText${e.text.startsWith(' ') || e.text.endsWith(' ') || e.text.includes('  ') ? ' xml:space="preserve"' : ''}>${R(e.text)}</w:instrText>`;
}
function cs(e) {
  return '<w:softHyphen/>';
}
function us(e) {
  return '<w:noBreakHyphen/>';
}
function ut(e) {
  if (!e) return '';
  if (e.rgb) return `<a:srgbClr val="${e.rgb.replace('#', '')}"/>`;
  if (e.themeColor) {
    let t = `<a:schemeClr val="${e.themeColor}"`;
    return (
      e.themeTint
        ? (t += `><a:tint val="${e.themeTint}"/></a:schemeClr>`)
        : e.themeShade
          ? (t += `><a:shade val="${e.themeShade}"/></a:schemeClr>`)
          : (t += '/>'),
      t
    );
  }
  return '';
}
function ps(e) {
  if (!e || e.type === 'none') return '<a:noFill/>';
  if (e.type === 'solid' && e.color) return `<a:solidFill>${ut(e.color)}</a:solidFill>`;
  if (e.type === 'gradient' && e.gradient) {
    let t = e.gradient,
      n = t.stops.map((o) => `<a:gs pos="${o.position}">${ut(o.color)}</a:gs>`).join(''),
      r = t.type === 'linear' ? `<a:lin ang="${(t.angle || 0) * 6e4}" scaled="1"/>` : '';
    return `<a:gradFill><a:gsLst>${n}</a:gsLst>${r}</a:gradFill>`;
  }
  return '';
}
function rr(e) {
  if (!e) return '';
  let t = [];
  (e.width != null && t.push(`w="${e.width}"`), e.cap && t.push(`cap="${e.cap}"`));
  let n = [];
  return (
    e.color && n.push(`<a:solidFill>${ut(e.color)}</a:solidFill>`),
    e.style && e.style !== 'solid' && n.push(`<a:prstDash val="${e.style}"/>`),
    e.headEnd &&
      n.push(
        `<a:headEnd type="${e.headEnd.type}"${e.headEnd.width ? ` w="${e.headEnd.width}"` : ''}${e.headEnd.length ? ` len="${e.headEnd.length}"` : ''}/>`
      ),
    e.tailEnd &&
      n.push(
        `<a:tailEnd type="${e.tailEnd.type}"${e.tailEnd.width ? ` w="${e.tailEnd.width}"` : ''}${e.tailEnd.length ? ` len="${e.tailEnd.length}"` : ''}/>`
      ),
    n.length === 0 && t.length === 0
      ? ''
      : `<a:ln${t.length ? ' ' + t.join(' ') : ''}>${n.join('')}</a:ln>`
  );
}
function or(e) {
  let t = [],
    n = e.horizontal;
  (t.push(`<wp:positionH relativeFrom="${n.relativeTo}">`),
    n.alignment
      ? t.push(`<wp:align>${n.alignment}</wp:align>`)
      : t.push(`<wp:posOffset>${n.posOffset || 0}</wp:posOffset>`),
    t.push('</wp:positionH>'));
  let r = e.vertical;
  return (
    t.push(`<wp:positionV relativeFrom="${r.relativeTo}">`),
    r.alignment
      ? t.push(`<wp:align>${r.alignment}</wp:align>`)
      : t.push(`<wp:posOffset>${r.posOffset || 0}</wp:posOffset>`),
    t.push('</wp:positionV>'),
    t.join('')
  );
}
function ir(e) {
  let t = e.wrapText ? ` wrapText="${e.wrapText}"` : ' wrapText="bothSides"';
  switch (e.type) {
    case 'square':
      return `<wp:wrapSquare${t}/>`;
    case 'tight':
      return `<wp:wrapTight${t}><wp:wrapPolygon edited="0"><wp:start x="0" y="0"/><wp:lineTo x="0" y="21600"/><wp:lineTo x="21600" y="21600"/><wp:lineTo x="21600" y="0"/><wp:lineTo x="0" y="0"/></wp:wrapPolygon></wp:wrapTight>`;
    case 'through':
      return `<wp:wrapThrough${t}><wp:wrapPolygon edited="0"><wp:start x="0" y="0"/><wp:lineTo x="0" y="21600"/><wp:lineTo x="21600" y="21600"/><wp:lineTo x="21600" y="0"/><wp:lineTo x="0" y="0"/></wp:wrapPolygon></wp:wrapThrough>`;
    case 'topAndBottom':
      return '<wp:wrapTopAndBottom/>';
    case 'behind':
    case 'inFront':
      return '<wp:wrapNone/>';
    default:
      return '<wp:wrapNone/>';
  }
}
function fs(e) {
  let t = e.size.width,
    n = e.size.height,
    r = e.rId || 'rId1',
    o = e.id || '0',
    i = e.filename || `image${o}`,
    s = '';
  return (
    e.transform?.rotation && (s += ` rot="${Math.round(e.transform.rotation * 6e4)}"`),
    e.transform?.flipH && (s += ' flipH="1"'),
    e.transform?.flipV && (s += ' flipV="1"'),
    [
      '<a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">',
      '<a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">',
      '<pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture">',
      '<pic:nvPicPr>',
      `<pic:cNvPr id="${o}" name="${R(i)}"${e.alt ? ` descr="${R(e.alt)}"` : ''}/>`,
      '<pic:cNvPicPr/>',
      '</pic:nvPicPr>',
      '<pic:blipFill>',
      `<a:blip r:embed="${r}"/>`,
      '<a:stretch><a:fillRect/></a:stretch>',
      '</pic:blipFill>',
      '<pic:spPr>',
      `<a:xfrm${s}>`,
      '<a:off x="0" y="0"/>',
      `<a:ext cx="${t}" cy="${n}"/>`,
      '</a:xfrm>',
      '<a:prstGeom prst="rect"><a:avLst/></a:prstGeom>',
      e.outline ? rr(e.outline) : '',
      '</pic:spPr>',
      '</pic:pic>',
      '</a:graphicData>',
      '</a:graphic>',
    ].join('')
  );
}
function ds(e) {
  let t = e.image,
    n = t.wrap.type !== 'inline',
    r = t.size.width,
    o = t.size.height,
    i = t.padding?.top ?? t.wrap.distT ?? 0,
    s = t.padding?.bottom ?? t.wrap.distB ?? 0,
    a = t.padding?.left ?? t.wrap.distL ?? 0,
    c = t.padding?.right ?? t.wrap.distR ?? 0,
    p = t.id || '1',
    f = t.title || t.filename || `Picture ${p}`,
    d = fs(t);
  if (!n)
    return [
      '<w:drawing>',
      `<wp:inline distT="${i}" distB="${s}" distL="${a}" distR="${c}">`,
      `<wp:extent cx="${r}" cy="${o}"/>`,
      '<wp:effectExtent l="0" t="0" r="0" b="0"/>',
      `<wp:docPr id="${p}" name="${R(f)}"${t.alt ? ` descr="${R(t.alt)}"` : ''}${t.decorative ? ' hidden="1"' : ''}/>`,
      '<wp:cNvGraphicFramePr><a:graphicFrameLocks xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" noChangeAspect="1"/></wp:cNvGraphicFramePr>',
      d,
      '</wp:inline>',
      '</w:drawing>',
    ].join('');
  let h = t.wrap.type === 'behind' ? '1' : '0',
    g = t.position
      ? or(t.position)
      : '<wp:positionH relativeFrom="column"><wp:posOffset>0</wp:posOffset></wp:positionH><wp:positionV relativeFrom="paragraph"><wp:posOffset>0</wp:posOffset></wp:positionV>',
    m = ir(t.wrap);
  return [
    '<w:drawing>',
    `<wp:anchor distT="${i}" distB="${s}" distL="${a}" distR="${c}" simplePos="0" relativeHeight="251658240" behindDoc="${h}" locked="0" layoutInCell="1" allowOverlap="1">`,
    '<wp:simplePos x="0" y="0"/>',
    g,
    `<wp:extent cx="${r}" cy="${o}"/>`,
    '<wp:effectExtent l="0" t="0" r="0" b="0"/>',
    m,
    `<wp:docPr id="${p}" name="${R(f)}"${t.alt ? ` descr="${R(t.alt)}"` : ''}/>`,
    '<wp:cNvGraphicFramePr><a:graphicFrameLocks xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" noChangeAspect="1"/></wp:cNvGraphicFramePr>',
    d,
    '</wp:anchor>',
    '</w:drawing>',
  ].join('');
}
function ms(e) {
  return e.map((t) => ae(t)).join('');
}
function hs(e) {
  let t = e.shape,
    n = t.size.width,
    r = t.size.height,
    o = t.shapeType === 'textBox',
    i = t.wrap && t.wrap.type !== 'inline',
    s = t.wrap?.distT ?? 0,
    a = t.wrap?.distB ?? 0,
    c = t.wrap?.distL ?? 0,
    p = t.wrap?.distR ?? 0,
    f = t.id || '1',
    d = t.name || (o ? `TextBox ${f}` : `Shape ${f}`),
    h = '';
  (t.transform?.rotation && (h += ` rot="${Math.round(t.transform.rotation * 6e4)}"`),
    t.transform?.flipH && (h += ' flipH="1"'),
    t.transform?.flipV && (h += ' flipV="1"'));
  let g = [
      '<wps:spPr>',
      `<a:xfrm${h}>`,
      '<a:off x="0" y="0"/>',
      `<a:ext cx="${n}" cy="${r}"/>`,
      '</a:xfrm>',
      `<a:prstGeom prst="${t.shapeType === 'textBox' ? 'rect' : t.shapeType}"><a:avLst/></a:prstGeom>`,
      ps(t.fill),
      rr(t.outline),
      '</wps:spPr>',
    ].join(''),
    m = '';
  if (t.textBody) {
    let y = t.textBody,
      x = ['rot="0"', 'vert="horz"'];
    (y.anchor && x.push(`anchor="${y.anchor === 'middle' ? 'ctr' : y.anchor}"`),
      y.anchorCenter && x.push('anchorCtr="1"'),
      y.margins &&
        (y.margins.left != null && x.push(`lIns="${y.margins.left}"`),
        y.margins.top != null && x.push(`tIns="${y.margins.top}"`),
        y.margins.right != null && x.push(`rIns="${y.margins.right}"`),
        y.margins.bottom != null && x.push(`bIns="${y.margins.bottom}"`)),
      o
        ? (m = [
            '<wps:txbx><w:txbxContent>',
            ms(y.content),
            '</w:txbxContent></wps:txbx>',
            `<wps:bodyPr ${x.join(' ')}/>`,
          ].join(''))
        : (m = [`<wps:bodyPr ${x.join(' ')}/>`].join('')));
  }
  let C = [
    '<a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">',
    '<a:graphicData uri="http://schemas.microsoft.com/office/word/2010/wordprocessingShape">',
    ['<wps:wsp>', `<wps:cNvSpPr${o ? ' txBox="1"' : ''}/>`, g, m, '</wps:wsp>'].join(''),
    '</a:graphicData>',
    '</a:graphic>',
  ].join('');
  if (!i)
    return [
      '<w:drawing>',
      `<wp:inline distT="${s}" distB="${a}" distL="${c}" distR="${p}">`,
      `<wp:extent cx="${n}" cy="${r}"/>`,
      '<wp:effectExtent l="0" t="0" r="0" b="0"/>',
      `<wp:docPr id="${f}" name="${R(d)}"/>`,
      '<wp:cNvGraphicFramePr/>',
      C,
      '</wp:inline>',
      '</w:drawing>',
    ].join('');
  let I = t.wrap?.type === 'behind' ? '1' : '0',
    S = t.position
      ? or(t.position)
      : '<wp:positionH relativeFrom="column"><wp:posOffset>0</wp:posOffset></wp:positionH><wp:positionV relativeFrom="paragraph"><wp:posOffset>0</wp:posOffset></wp:positionV>',
    F = ir(t.wrap);
  return [
    '<w:drawing>',
    `<wp:anchor distT="${s}" distB="${a}" distL="${c}" distR="${p}" simplePos="0" relativeHeight="251658240" behindDoc="${I}" locked="0" layoutInCell="1" allowOverlap="1">`,
    '<wp:simplePos x="0" y="0"/>',
    S,
    `<wp:extent cx="${n}" cy="${r}"/>`,
    '<wp:effectExtent l="0" t="0" r="0" b="0"/>',
    F,
    `<wp:docPr id="${f}" name="${R(d)}"/>`,
    '<wp:cNvGraphicFramePr/>',
    C,
    '</wp:anchor>',
    '</w:drawing>',
  ].join('');
}
function gs(e) {
  switch (e.type) {
    case 'text':
      return ns(e);
    case 'tab':
      return rs();
    case 'break':
      return os(e);
    case 'symbol':
      return is(e);
    case 'footnoteRef':
    case 'endnoteRef':
      return ss(e);
    case 'fieldChar':
      return as(e);
    case 'instrText':
      return ls(e);
    case 'softHyphen':
      return cs();
    case 'noBreakHyphen':
      return us();
    case 'drawing':
      return ds(e);
    case 'shape':
      return hs(e);
    default:
      return '';
  }
}
function ee(e) {
  let t = [],
    n = ts(e.formatting, e.propertyChanges);
  n && t.push(n);
  for (let r of e.content) {
    let o = gs(r);
    o && t.push(o);
  }
  return `<w:r>${t.join('')}</w:r>`;
}
function he(e, t) {
  if (!e || e.style === 'none' || e.style === 'nil') return '';
  let n = [`w:val="${e.style}"`];
  return (
    e.size !== void 0 && n.push(`w:sz="${e.size}"`),
    e.space !== void 0 && n.push(`w:space="${e.space}"`),
    e.color &&
      (e.color.auto ? n.push('w:color="auto"') : e.color.rgb && n.push(`w:color="${e.color.rgb}"`),
      e.color.themeColor && n.push(`w:themeColor="${e.color.themeColor}"`),
      e.color.themeTint && n.push(`w:themeTint="${e.color.themeTint}"`),
      e.color.themeShade && n.push(`w:themeShade="${e.color.themeShade}"`)),
    e.shadow && n.push('w:shadow="true"'),
    e.frame && n.push('w:frame="true"'),
    `<w:${t} ${n.join(' ')}/>`
  );
}
function ws(e) {
  if (!e) return '';
  let t = [];
  if (e.top) {
    let n = he(e.top, 'top');
    n && t.push(n);
  }
  if (e.left) {
    let n = he(e.left, 'left');
    n && t.push(n);
  }
  if (e.bottom) {
    let n = he(e.bottom, 'bottom');
    n && t.push(n);
  }
  if (e.right) {
    let n = he(e.right, 'right');
    n && t.push(n);
  }
  if (e.between) {
    let n = he(e.between, 'between');
    n && t.push(n);
  }
  if (e.bar) {
    let n = he(e.bar, 'bar');
    n && t.push(n);
  }
  return t.length === 0 ? '' : `<w:pBdr>${t.join('')}</w:pBdr>`;
}
function ys(e) {
  if (!e) return '';
  let t = [];
  return (
    e.pattern ? t.push(`w:val="${e.pattern}"`) : t.push('w:val="clear"'),
    e.color?.rgb ? t.push(`w:color="${e.color.rgb}"`) : e.color?.auto && t.push('w:color="auto"'),
    e.fill?.rgb ? t.push(`w:fill="${e.fill.rgb}"`) : e.fill?.auto && t.push('w:fill="auto"'),
    e.fill?.themeColor && t.push(`w:themeFill="${e.fill.themeColor}"`),
    e.fill?.themeTint && t.push(`w:themeFillTint="${e.fill.themeTint}"`),
    e.fill?.themeShade && t.push(`w:themeFillShade="${e.fill.themeShade}"`),
    t.length === 0 ? '' : `<w:shd ${t.join(' ')}/>`
  );
}
function xs(e) {
  return !e || e.length === 0
    ? ''
    : `<w:tabs>${e
        .map((n) => {
          let r = [`w:val="${n.alignment}"`, `w:pos="${n.position}"`];
          return (
            n.leader && n.leader !== 'none' && r.push(`w:leader="${n.leader}"`),
            `<w:tab ${r.join(' ')}/>`
          );
        })
        .join('')}</w:tabs>`;
}
function bs(e) {
  let t = [];
  return (
    e.spaceBefore !== void 0 && t.push(`w:before="${e.spaceBefore}"`),
    e.spaceAfter !== void 0 && t.push(`w:after="${e.spaceAfter}"`),
    e.lineSpacing !== void 0 && t.push(`w:line="${e.lineSpacing}"`),
    e.lineSpacingRule && t.push(`w:lineRule="${e.lineSpacingRule}"`),
    e.beforeAutospacing && t.push('w:beforeAutospacing="1"'),
    e.afterAutospacing && t.push('w:afterAutospacing="1"'),
    t.length === 0 ? '' : `<w:spacing ${t.join(' ')}/>`
  );
}
function Ts(e) {
  let t = [];
  return (
    e.indentLeft !== void 0 && t.push(`w:left="${e.indentLeft}"`),
    e.indentRight !== void 0 && t.push(`w:right="${e.indentRight}"`),
    e.indentFirstLine !== void 0 &&
      (e.hangingIndent
        ? t.push(`w:hanging="${Math.abs(e.indentFirstLine)}"`)
        : e.indentFirstLine !== 0 && t.push(`w:firstLine="${e.indentFirstLine}"`)),
    t.length === 0 ? '' : `<w:ind ${t.join(' ')}/>`
  );
}
function Cs(e) {
  if (!e) return '';
  let t = [];
  return (
    e.ilvl !== void 0 && t.push(`<w:ilvl w:val="${e.ilvl}"/>`),
    e.numId !== void 0 && t.push(`<w:numId w:val="${e.numId}"/>`),
    t.length === 0 ? '' : `<w:numPr>${t.join('')}</w:numPr>`
  );
}
function vs(e) {
  if (!e) return '';
  let t = [];
  return (
    e.width !== void 0 && t.push(`w:w="${e.width}"`),
    e.height !== void 0 && t.push(`w:h="${e.height}"`),
    e.hAnchor && t.push(`w:hAnchor="${e.hAnchor}"`),
    e.vAnchor && t.push(`w:vAnchor="${e.vAnchor}"`),
    e.x !== void 0 && t.push(`w:x="${e.x}"`),
    e.y !== void 0 && t.push(`w:y="${e.y}"`),
    e.xAlign && t.push(`w:xAlign="${e.xAlign}"`),
    e.yAlign && t.push(`w:yAlign="${e.yAlign}"`),
    e.wrap && t.push(`w:wrap="${e.wrap}"`),
    t.length === 0 ? '' : `<w:framePr ${t.join(' ')}/>`
  );
}
function ar(e, t) {
  let n = [];
  if (e) {
    (e.styleId && n.push(`<w:pStyle w:val="${R(e.styleId)}"/>`),
      e.keepNext && n.push('<w:keepNext/>'),
      e.keepLines && n.push('<w:keepLines/>'),
      e.contextualSpacing && n.push('<w:contextualSpacing/>'),
      e.pageBreakBefore && n.push('<w:pageBreakBefore/>'));
    let r = vs(e.frame);
    (r && n.push(r),
      e.widowControl === false
        ? n.push('<w:widowControl w:val="0"/>')
        : e.widowControl === true && n.push('<w:widowControl/>'));
    let o = Cs(e.numPr);
    o && n.push(o);
    let i = ws(e.borders);
    i && n.push(i);
    let s = ys(e.shading);
    s && n.push(s);
    let a = xs(e.tabs);
    (a && n.push(a),
      e.suppressLineNumbers && n.push('<w:suppressLineNumbers/>'),
      e.suppressAutoHyphens && n.push('<w:suppressAutoHyphens/>'));
    let c = bs(e);
    c && n.push(c);
    let p = Ts(e);
    if (
      (p && n.push(p),
      e.bidi && n.push('<w:bidi/>'),
      e.alignment && n.push(`<w:jc w:val="${e.alignment}"/>`),
      e.outlineLevel !== void 0 && n.push(`<w:outlineLvl w:val="${e.outlineLevel}"/>`),
      e.runProperties)
    ) {
      let f = me(e.runProperties);
      f && n.push(f);
    }
  }
  return (
    t && t.length > 0 && n.push(...t.map((r) => Ps(r))),
    n.length === 0 ? '' : `<w:pPr>${n.join('')}</w:pPr>`
  );
}
function Fs(e) {
  return !e.startsWith('<w:pPr>') || !e.endsWith('</w:pPr>') ? '' : e.slice(7, -8);
}
function Ps(e) {
  let t = Number.isInteger(e.info.id) && e.info.id >= 0 ? e.info.id : 0,
    n = typeof e.info.author == 'string' ? e.info.author.trim() : '',
    r = n.length > 0 ? n : 'Unknown',
    o = typeof e.info.date == 'string' ? e.info.date.trim() : void 0,
    i = typeof e.info.rsid == 'string' ? e.info.rsid.trim() : void 0,
    s = [`w:id="${t}"`, `w:author="${R(r)}"`];
  (o && s.push(`w:date="${R(o)}"`), i && s.push(`w:rsid="${R(i)}"`));
  let a = ar(e.previousFormatting) || '<w:pPr/>',
    c = Fs(a),
    p = c.length > 0 ? `<w:pPr>${c}</w:pPr>` : '<w:pPr/>';
  return `<w:pPrChange ${s.join(' ')}>${p}</w:pPrChange>`;
}
function pt(e) {
  let t = [];
  (e.rId && t.push(`r:id="${e.rId}"`),
    e.anchor && t.push(`w:anchor="${R(e.anchor)}"`),
    e.tooltip && t.push(`w:tooltip="${R(e.tooltip)}"`),
    e.target && t.push(`w:tgtFrame="${R(e.target)}"`),
    e.history === false && t.push('w:history="0"'),
    e.docLocation && t.push(`w:docLocation="${R(e.docLocation)}"`));
  let n = e.children
    .map((o) =>
      o.type === 'run'
        ? ee(o)
        : o.type === 'bookmarkStart'
          ? lr(o)
          : o.type === 'bookmarkEnd'
            ? cr(o)
            : ''
    )
    .join('');
  return `<w:hyperlink${t.length > 0 ? ' ' + t.join(' ') : ''}>${n}</w:hyperlink>`;
}
function lr(e) {
  let t = [`w:id="${e.id}"`, `w:name="${R(e.name)}"`];
  return (
    e.colFirst !== void 0 && t.push(`w:colFirst="${e.colFirst}"`),
    e.colLast !== void 0 && t.push(`w:colLast="${e.colLast}"`),
    `<w:bookmarkStart ${t.join(' ')}/>`
  );
}
function cr(e) {
  return `<w:bookmarkEnd w:id="${e.id}"/>`;
}
function Ss(e) {
  let t = [],
    n = e.content.find((a) => a.type === 'run'),
    r = n?.formatting ? me(n.formatting) : '',
    o = ['w:fldCharType="begin"'];
  (e.fldLock && o.push('w:fldLock="true"'), t.push(`<w:r>${r}<w:fldChar ${o.join(' ')}/></w:r>`));
  let s =
    e.instruction.startsWith(' ') || e.instruction.endsWith(' ') || e.instruction.includes('  ')
      ? ' xml:space="preserve"'
      : '';
  (t.push(`<w:r>${r}<w:instrText${s}>${R(e.instruction)}</w:instrText></w:r>`),
    t.push(`<w:r>${r}<w:fldChar w:fldCharType="separate"/></w:r>`));
  for (let a of e.content) a.type === 'run' && t.push(ee(a));
  return (t.push(`<w:r>${r}<w:fldChar w:fldCharType="end"/></w:r>`), t.join(''));
}
function ks(e) {
  let t = [],
    n = e.fieldResult?.[0]?.formatting,
    r = n ? me(n) : '',
    o = ['w:fldCharType="begin"'];
  if (
    (e.fldLock && o.push('w:fldLock="true"'),
    t.push(`<w:r>${r}<w:fldChar ${o.join(' ')}/></w:r>`),
    e.fieldCode.length > 0)
  )
    t.push(...e.fieldCode.map((i) => ee(i)));
  else {
    let s =
      e.instruction.startsWith(' ') || e.instruction.endsWith(' ') || e.instruction.includes('  ')
        ? ' xml:space="preserve"'
        : '';
    t.push(`<w:r>${r}<w:instrText${s}>${R(e.instruction)}</w:instrText></w:r>`);
  }
  return (
    t.push(`<w:r>${r}<w:fldChar w:fldCharType="separate"/></w:r>`),
    t.push(...e.fieldResult.map((i) => ee(i))),
    t.push(`<w:r>${r}<w:fldChar w:fldCharType="end"/></w:r>`),
    t.join('')
  );
}
function Rs(e) {
  let t = e.properties,
    n = [];
  switch (
    (t.alias && n.push(`<w:alias w:val="${R(t.alias)}"/>`),
    t.tag && n.push(`<w:tag w:val="${R(t.tag)}"/>`),
    t.lock && t.lock !== 'unlocked' && n.push(`<w:lock w:val="${t.lock}"/>`),
    t.showingPlaceholder && n.push('<w:showingPlcHdr/>'),
    t.sdtType)
  ) {
    case 'plainText':
      n.push('<w:text/>');
      break;
    case 'date':
      t.dateFormat ? n.push(`<w:date w:fullDate="${R(t.dateFormat)}"/>`) : n.push('<w:date/>');
      break;
    case 'dropdown': {
      let o = (t.listItems ?? [])
        .map((i) => `<w:listItem w:displayText="${R(i.displayText)}" w:value="${R(i.value)}"/>`)
        .join('');
      n.push(`<w:dropDownList>${o}</w:dropDownList>`);
      break;
    }
    case 'comboBox': {
      let o = (t.listItems ?? [])
        .map((i) => `<w:listItem w:displayText="${R(i.displayText)}" w:value="${R(i.value)}"/>`)
        .join('');
      n.push(`<w:comboBox>${o}</w:comboBox>`);
      break;
    }
    case 'checkbox':
      n.push(`<w14:checkbox><w14:checked w14:val="${t.checked ? '1' : '0'}"/></w14:checkbox>`);
      break;
    case 'picture':
      n.push('<w:picture/>');
      break;
  }
  let r = e.content
    .map((o) => (o.type === 'run' ? ee(o) : o.type === 'hyperlink' ? pt(o) : ''))
    .join('');
  return `<w:sdt><w:sdtPr>${n.join('')}</w:sdtPr><w:sdtContent>${r}</w:sdtContent></w:sdt>`;
}
function sr(e, t) {
  let n = [`w:id="${t.id}"`, `w:name="${R(t.name)}"`];
  return `<w:${e} ${n.join(' ')}/>`;
}
function Ve(e, t) {
  let n = t.info,
    r = Number.isInteger(n.id) && n.id >= 0 ? n.id : 0,
    o = typeof n.author == 'string' ? n.author.trim() : '',
    i = o.length > 0 ? o : 'Unknown',
    s = typeof n.date == 'string' ? n.date.trim() : void 0,
    a = [`w:id="${r}"`, `w:author="${R(i)}"`];
  s && a.push(`w:date="${R(s)}"`);
  let c = t.content
    .map((p) =>
      p.type === 'run'
        ? e === 'del' || e === 'moveFrom'
          ? ee(p)
              .replace(/<w:t\b/g, '<w:delText')
              .replace(/<\/w:t>/g, '</w:delText>')
              .replace(/<w:instrText\b/g, '<w:delInstrText')
              .replace(/<\/w:instrText>/g, '</w:delInstrText>')
          : ee(p)
        : p.type === 'hyperlink'
          ? pt(p)
          : ''
    )
    .join('');
  return `<w:${e} ${a.join(' ')}>${c}</w:${e}>`;
}
function Is(e) {
  switch (e.type) {
    case 'run':
      return ee(e);
    case 'hyperlink':
      return pt(e);
    case 'bookmarkStart':
      return lr(e);
    case 'bookmarkEnd':
      return cr(e);
    case 'simpleField':
      return Ss(e);
    case 'complexField':
      return ks(e);
    case 'inlineSdt':
      return Rs(e);
    case 'commentRangeStart':
      return `<w:commentRangeStart w:id="${e.id}"/>`;
    case 'commentRangeEnd':
      return `<w:commentRangeEnd w:id="${e.id}"/><w:r><w:rPr><w:rStyle w:val="CommentReference"/></w:rPr><w:commentReference w:id="${e.id}"/></w:r>`;
    case 'insertion':
      return Ve('ins', e);
    case 'deletion':
      return Ve('del', e);
    case 'moveFrom':
      return Ve('moveFrom', e);
    case 'moveTo':
      return Ve('moveTo', e);
    case 'moveFromRangeStart':
      return sr('moveFromRangeStart', e);
    case 'moveFromRangeEnd':
      return `<w:moveFromRangeEnd w:id="${e.id}"/>`;
    case 'moveToRangeStart':
      return sr('moveToRangeStart', e);
    case 'moveToRangeEnd':
      return `<w:moveToRangeEnd w:id="${e.id}"/>`;
    case 'mathEquation':
      return e.ommlXml || '';
    default:
      return '';
  }
}
function ae(e) {
  let t = [],
    n = [];
  (e.paraId && n.push(`w14:paraId="${e.paraId}"`), e.textId && n.push(`w14:textId="${e.textId}"`));
  let r = n.length > 0 ? ' ' + n.join(' ') : '',
    o = ar(e.formatting, e.propertyChanges);
  o && t.push(o);
  for (let i of e.content) {
    let s = Is(i);
    s && t.push(s);
  }
  return `<w:p${r}>${t.join('')}</w:p>`;
}
function Es(e) {
  let t = Number.isInteger(e.id) && e.id >= 0 ? e.id : 0,
    n = typeof e.author == 'string' ? e.author.trim() : '',
    r = n.length > 0 ? n : 'Unknown',
    o = typeof e.date == 'string' ? e.date.trim() : void 0;
  return { id: t, author: r, date: o };
}
function ce(e, t) {
  let n = Es(e),
    r = [`w:id="${n.id}"`, `w:author="${R(n.author)}"`];
  return (
    n.date && r.push(`w:date="${R(n.date)}"`),
    t && t.trim().length > 0 && r.push(`w:rsid="${R(t.trim())}"`),
    r.join(' ')
  );
}
function le(e, t) {
  if (!e) return '';
  let n = [`w:w="${e.value}"`, `w:type="${e.type}"`];
  return `<w:${t} ${n.join(' ')}/>`;
}
function ge(e, t) {
  if (!e || e.style === 'none' || e.style === 'nil') return '';
  let n = [`w:val="${e.style}"`];
  return (
    e.size !== void 0 && n.push(`w:sz="${e.size}"`),
    e.space !== void 0 && n.push(`w:space="${e.space}"`),
    e.color &&
      (e.color.auto ? n.push('w:color="auto"') : e.color.rgb && n.push(`w:color="${e.color.rgb}"`),
      e.color.themeColor && n.push(`w:themeColor="${e.color.themeColor}"`),
      e.color.themeTint && n.push(`w:themeTint="${e.color.themeTint}"`),
      e.color.themeShade && n.push(`w:themeShade="${e.color.themeShade}"`)),
    e.shadow && n.push('w:shadow="true"'),
    e.frame && n.push('w:frame="true"'),
    `<w:${t} ${n.join(' ')}/>`
  );
}
function ur(e, t) {
  if (!e) return '';
  let n = [];
  if (e.top) {
    let r = ge(e.top, 'top');
    r && n.push(r);
  }
  if (e.left) {
    let r = ge(e.left, 'left');
    r && n.push(r);
  }
  if (e.bottom) {
    let r = ge(e.bottom, 'bottom');
    r && n.push(r);
  }
  if (e.right) {
    let r = ge(e.right, 'right');
    r && n.push(r);
  }
  if (e.insideH) {
    let r = ge(e.insideH, 'insideH');
    r && n.push(r);
  }
  if (e.insideV) {
    let r = ge(e.insideV, 'insideV');
    r && n.push(r);
  }
  return n.length === 0 ? '' : `<w:${t}>${n.join('')}</w:${t}>`;
}
function pr(e, t) {
  if (!e) return '';
  let n = [];
  return (
    e.top && n.push(le(e.top, 'top')),
    e.left && n.push(le(e.left, 'left')),
    e.bottom && n.push(le(e.bottom, 'bottom')),
    e.right && n.push(le(e.right, 'right')),
    n.length === 0 ? '' : `<w:${t}>${n.join('')}</w:${t}>`
  );
}
function fr(e) {
  if (!e) return '';
  let t = [];
  return (
    e.pattern ? t.push(`w:val="${e.pattern}"`) : t.push('w:val="clear"'),
    e.color?.rgb ? t.push(`w:color="${e.color.rgb}"`) : e.color?.auto && t.push('w:color="auto"'),
    e.fill?.rgb ? t.push(`w:fill="${e.fill.rgb}"`) : e.fill?.auto && t.push('w:fill="auto"'),
    e.fill?.themeColor && t.push(`w:themeFill="${e.fill.themeColor}"`),
    e.fill?.themeTint && t.push(`w:themeFillTint="${e.fill.themeTint}"`),
    e.fill?.themeShade && t.push(`w:themeFillShade="${e.fill.themeShade}"`),
    t.length === 0 ? '' : `<w:shd ${t.join(' ')}/>`
  );
}
function Ms(e) {
  if (!e) return '';
  let t = [];
  return (
    e.firstRow && t.push('w:firstRow="1"'),
    e.lastRow && t.push('w:lastRow="1"'),
    e.firstColumn && t.push('w:firstColumn="1"'),
    e.lastColumn && t.push('w:lastColumn="1"'),
    e.noHBand && t.push('w:noHBand="1"'),
    e.noVBand && t.push('w:noVBand="1"'),
    t.length === 0 ? '' : `<w:tblLook ${t.join(' ')}/>`
  );
}
function $s(e) {
  if (!e) return '';
  let t = [];
  return (
    e.horzAnchor && t.push(`w:horzAnchor="${e.horzAnchor}"`),
    e.vertAnchor && t.push(`w:vertAnchor="${e.vertAnchor}"`),
    e.tblpX !== void 0 && t.push(`w:tblpX="${e.tblpX}"`),
    e.tblpXSpec && t.push(`w:tblpXSpec="${e.tblpXSpec}"`),
    e.tblpY !== void 0 && t.push(`w:tblpY="${e.tblpY}"`),
    e.tblpYSpec && t.push(`w:tblpYSpec="${e.tblpYSpec}"`),
    e.topFromText !== void 0 && t.push(`w:topFromText="${e.topFromText}"`),
    e.bottomFromText !== void 0 && t.push(`w:bottomFromText="${e.bottomFromText}"`),
    e.leftFromText !== void 0 && t.push(`w:leftFromText="${e.leftFromText}"`),
    e.rightFromText !== void 0 && t.push(`w:rightFromText="${e.rightFromText}"`),
    t.length === 0 ? '' : `<w:tblpPr ${t.join(' ')}/>`
  );
}
function dr(e, t) {
  let n = [];
  if (e) {
    e.styleId && n.push(`<w:tblStyle w:val="${R(e.styleId)}"/>`);
    let r = $s(e.floating);
    (r && n.push(r), e.bidi && n.push('<w:bidiVisual/>'));
    let o = le(e.width, 'tblW');
    (o && n.push(o), e.justification && n.push(`<w:jc w:val="${e.justification}"/>`));
    let i = le(e.cellSpacing, 'tblCellSpacing');
    i && n.push(i);
    let s = le(e.indent, 'tblInd');
    s && n.push(s);
    let a = ur(e.borders, 'tblBorders');
    a && n.push(a);
    let c = pr(e.cellMargins, 'tblCellMar');
    (c && n.push(c), e.layout && n.push(`<w:tblLayout w:type="${e.layout}"/>`));
    let p = fr(e.shading);
    p && n.push(p);
    let f = Ms(e.look);
    (f && n.push(f), e.overlap && n.push(`<w:tblOverlap w:val="${e.overlap}"/>`));
  }
  return (
    t && t.length > 0 && n.push(...t.map((r) => As(r))),
    n.length === 0 ? '' : `<w:tblPr>${n.join('')}</w:tblPr>`
  );
}
function Ds(e) {
  return !e.startsWith('<w:tblPr>') || !e.endsWith('</w:tblPr>') ? '' : e.slice(9, -10);
}
function As(e) {
  let t = ce(e.info, e.info.rsid),
    n = dr(e.previousFormatting) || '<w:tblPr/>',
    r = Ds(n),
    o = r.length > 0 ? `<w:tblPr>${r}</w:tblPr>` : '<w:tblPr/>';
  return `<w:tblPrChange ${t}>${o}</w:tblPrChange>`;
}
function mr(e, t, n) {
  let r = [];
  if (e) {
    if ((e.cantSplit && r.push('<w:cantSplit/>'), e.header && r.push('<w:tblHeader/>'), e.height)) {
      let o = [`w:val="${e.height.value}"`];
      (e.heightRule && o.push(`w:hRule="${e.heightRule}"`), r.push(`<w:trHeight ${o.join(' ')}/>`));
    }
    (e.justification && r.push(`<w:jc w:val="${e.justification}"/>`),
      e.hidden && r.push('<w:hidden/>'));
  }
  return (
    n &&
      (n.type === 'tableRowInsertion'
        ? r.push(`<w:ins ${ce(n.info)}/>`)
        : n.type === 'tableRowDeletion' && r.push(`<w:del ${ce(n.info)}/>`)),
    t && t.length > 0 && r.push(...t.map((o) => Ls(o))),
    r.length === 0 ? '' : `<w:trPr>${r.join('')}</w:trPr>`
  );
}
function Bs(e) {
  return !e.startsWith('<w:trPr>') || !e.endsWith('</w:trPr>') ? '' : e.slice(8, -9);
}
function Ls(e) {
  let t = ce(e.info, e.info.rsid),
    n = mr(e.previousFormatting) || '<w:trPr/>',
    r = Bs(n),
    o = r.length > 0 ? `<w:trPr>${r}</w:trPr>` : '<w:trPr/>';
  return `<w:trPrChange ${t}>${o}</w:trPrChange>`;
}
function Ns(e) {
  if (!e) return '';
  let n = [
    e.firstRow ? '1' : '0',
    e.lastRow ? '1' : '0',
    e.firstColumn ? '1' : '0',
    e.lastColumn ? '1' : '0',
    e.oddVBand ? '1' : '0',
    e.evenVBand ? '1' : '0',
    e.oddHBand ? '1' : '0',
    e.evenHBand ? '1' : '0',
    e.nwCell ? '1' : '0',
    e.neCell ? '1' : '0',
    e.swCell ? '1' : '0',
    e.seCell ? '1' : '0',
  ].join('');
  return n === '000000000000' ? '' : `<w:cnfStyle w:val="${n}"/>`;
}
function hr(e, t, n) {
  let r = [];
  if (e) {
    let o = Ns(e.conditionalFormat);
    o && r.push(o);
    let i = le(e.width, 'tcW');
    (i && r.push(i),
      e.gridSpan && e.gridSpan > 1 && r.push(`<w:gridSpan w:val="${e.gridSpan}"/>`),
      e.vMerge &&
        (e.vMerge === 'restart' ? r.push('<w:vMerge w:val="restart"/>') : r.push('<w:vMerge/>')));
    let s = ur(e.borders, 'tcBorders');
    s && r.push(s);
    let a = fr(e.shading);
    (a && r.push(a), e.noWrap && r.push('<w:noWrap/>'));
    let c = pr(e.margins, 'tcMar');
    (c && r.push(c),
      e.textDirection && r.push(`<w:textDirection w:val="${e.textDirection}"/>`),
      e.fitText && r.push('<w:tcFitText/>'),
      e.verticalAlign && r.push(`<w:vAlign w:val="${e.verticalAlign}"/>`),
      e.hideMark && r.push('<w:hideMark/>'));
  }
  return (
    n &&
      (n.type === 'tableCellInsertion'
        ? r.push(`<w:cellIns ${ce(n.info)}/>`)
        : n.type === 'tableCellDeletion'
          ? r.push(`<w:cellDel ${ce(n.info)}/>`)
          : n.type === 'tableCellMerge' && r.push(`<w:cellMerge ${ce(n.info)}/>`)),
    t && t.length > 0 && r.push(...t.map((o) => Hs(o))),
    r.length === 0 ? '' : `<w:tcPr>${r.join('')}</w:tcPr>`
  );
}
function Xs(e) {
  return !e.startsWith('<w:tcPr>') || !e.endsWith('</w:tcPr>') ? '' : e.slice(8, -9);
}
function Hs(e) {
  let t = ce(e.info, e.info.rsid),
    n = hr(e.previousFormatting) || '<w:tcPr/>',
    r = Xs(n),
    o = r.length > 0 ? `<w:tcPr>${r}</w:tcPr>` : '<w:tcPr/>';
  return `<w:tcPrChange ${t}>${o}</w:tcPrChange>`;
}
function Os(e) {
  return !e || e.length === 0
    ? ''
    : `<w:tblGrid>${e.map((n) => `<w:gridCol w:w="${n}"/>`).join('')}</w:tblGrid>`;
}
function js(e) {
  let t = [];
  for (let n of e) n.type === 'paragraph' ? t.push(ae(n)) : n.type === 'table' && t.push(ve(n));
  return (t.length === 0 && t.push('<w:p/>'), t.join(''));
}
function zs(e) {
  let t = [],
    n = hr(e.formatting, e.propertyChanges, e.structuralChange);
  return (n && t.push(n), t.push(js(e.content)), `<w:tc>${t.join('')}</w:tc>`);
}
function Vs(e) {
  let t = [],
    n = mr(e.formatting, e.propertyChanges, e.structuralChange);
  n && t.push(n);
  for (let r of e.cells) t.push(zs(r));
  return `<w:tr>${t.join('')}</w:tr>`;
}
function ve(e) {
  let t = [],
    n = dr(e.formatting, e.propertyChanges);
  n && t.push(n);
  let r = Os(e.columnWidths);
  r && t.push(r);
  for (let o of e.rows) t.push(Vs(o));
  return `<w:tbl>${t.join('')}</w:tbl>`;
}
var W = {
  wpc: 'http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas',
  mc: 'http://schemas.openxmlformats.org/markup-compatibility/2006',
  o: 'urn:schemas-microsoft-com:office:office',
  r: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
  m: 'http://schemas.openxmlformats.org/officeDocument/2006/math',
  v: 'urn:schemas-microsoft-com:vml',
  wp14: 'http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing',
  wp: 'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing',
  w10: 'urn:schemas-microsoft-com:office:word',
  w: 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
  w14: 'http://schemas.microsoft.com/office/word/2010/wordml',
  w15: 'http://schemas.microsoft.com/office/word/2012/wordml',
  wpg: 'http://schemas.microsoft.com/office/word/2010/wordprocessingGroup',
  wps: 'http://schemas.microsoft.com/office/word/2010/wordprocessingShape',
};
function Ws() {
  let e = {
    wpc: W.wpc,
    mc: W.mc,
    o: W.o,
    r: W.r,
    m: W.m,
    v: W.v,
    wp14: W.wp14,
    wp: W.wp,
    w10: W.w10,
    w: W.w,
    w14: W.w14,
    w15: W.w15,
    wpg: W.wpg,
    wps: W.wps,
  };
  return Object.entries(e)
    .map(([t, n]) => `xmlns:${t}="${n}"`)
    .join(' ');
}
function We(e, t) {
  if (!e || e.style === 'none' || e.style === 'nil') return '';
  let n = [`w:val="${e.style}"`];
  return (
    e.size !== void 0 && n.push(`w:sz="${e.size}"`),
    e.space !== void 0 && n.push(`w:space="${e.space}"`),
    e.color &&
      (e.color.auto ? n.push('w:color="auto"') : e.color.rgb && n.push(`w:color="${e.color.rgb}"`),
      e.color.themeColor && n.push(`w:themeColor="${e.color.themeColor}"`),
      e.color.themeTint && n.push(`w:themeTint="${e.color.themeTint}"`),
      e.color.themeShade && n.push(`w:themeShade="${e.color.themeShade}"`)),
    e.shadow && n.push('w:shadow="true"'),
    e.frame && n.push('w:frame="true"'),
    `<w:${t} ${n.join(' ')}/>`
  );
}
function _s(e) {
  return `<w:headerReference ${[`w:type="${e.type}"`, `r:id="${e.rId}"`].join(' ')}/>`;
}
function Us(e) {
  return `<w:footerReference ${[`w:type="${e.type}"`, `r:id="${e.rId}"`].join(' ')}/>`;
}
function Gs(e) {
  if (!e) return '';
  let t = [];
  return (
    e.position && t.push(`<w:pos w:val="${e.position}"/>`),
    e.numFmt && t.push(`<w:numFmt w:val="${e.numFmt}"/>`),
    e.numStart !== void 0 && t.push(`<w:numStart w:val="${e.numStart}"/>`),
    e.numRestart && t.push(`<w:numRestart w:val="${e.numRestart}"/>`),
    t.length === 0 ? '' : `<w:footnotePr>${t.join('')}</w:footnotePr>`
  );
}
function qs(e) {
  if (!e) return '';
  let t = [];
  return (
    e.position && t.push(`<w:pos w:val="${e.position}"/>`),
    e.numFmt && t.push(`<w:numFmt w:val="${e.numFmt}"/>`),
    e.numStart !== void 0 && t.push(`<w:numStart w:val="${e.numStart}"/>`),
    e.numRestart && t.push(`<w:numRestart w:val="${e.numRestart}"/>`),
    t.length === 0 ? '' : `<w:endnotePr>${t.join('')}</w:endnotePr>`
  );
}
function Js(e) {
  let t = [];
  return (
    e.pageWidth !== void 0 && t.push(`w:w="${e.pageWidth}"`),
    e.pageHeight !== void 0 && t.push(`w:h="${e.pageHeight}"`),
    e.orientation === 'landscape' && t.push('w:orient="landscape"'),
    t.length === 0 ? '' : `<w:pgSz ${t.join(' ')}/>`
  );
}
function Zs(e) {
  let t = [];
  return (
    e.marginTop !== void 0 && t.push(`w:top="${e.marginTop}"`),
    e.marginRight !== void 0 && t.push(`w:right="${e.marginRight}"`),
    e.marginBottom !== void 0 && t.push(`w:bottom="${e.marginBottom}"`),
    e.marginLeft !== void 0 && t.push(`w:left="${e.marginLeft}"`),
    e.headerDistance !== void 0 && t.push(`w:header="${e.headerDistance}"`),
    e.footerDistance !== void 0 && t.push(`w:footer="${e.footerDistance}"`),
    e.gutter !== void 0 && t.push(`w:gutter="${e.gutter}"`),
    t.length === 0 ? '' : `<w:pgMar ${t.join(' ')}/>`
  );
}
function Ys(e) {
  if (!e.columnCount && !e.columns?.length) return '';
  let t = [];
  (e.columnCount !== void 0 && e.columnCount > 1 && t.push(`w:num="${e.columnCount}"`),
    e.columnSpace !== void 0 && t.push(`w:space="${e.columnSpace}"`),
    e.equalWidth !== void 0 && t.push(`w:equalWidth="${e.equalWidth ? '1' : '0'}"`),
    e.separator && t.push('w:sep="1"'));
  let n = '';
  return (
    e.columns &&
      e.columns.length > 0 &&
      (n = e.columns
        .map((o) => {
          let i = [];
          return (
            o.width !== void 0 && i.push(`w:w="${o.width}"`),
            o.space !== void 0 && i.push(`w:space="${o.space}"`),
            `<w:col ${i.join(' ')}/>`
          );
        })
        .join('')),
    t.length === 0 && !n ? '' : `<w:cols${t.length > 0 ? ' ' + t.join(' ') : ''}>${n}</w:cols>`
  );
}
function Ks(e) {
  if (!e.lineNumbers) return '';
  let t = e.lineNumbers,
    n = [];
  return (
    t.countBy !== void 0 && n.push(`w:countBy="${t.countBy}"`),
    t.start !== void 0 && n.push(`w:start="${t.start}"`),
    t.distance !== void 0 && n.push(`w:distance="${t.distance}"`),
    t.restart && n.push(`w:restart="${t.restart}"`),
    n.length === 0 ? '' : `<w:lnNumType ${n.join(' ')}/>`
  );
}
function Qs(e) {
  if (!e.pageBorders) return '';
  let t = e.pageBorders,
    n = [],
    r = [];
  if (
    (t.display && n.push(`w:display="${t.display}"`),
    t.offsetFrom && n.push(`w:offsetFrom="${t.offsetFrom}"`),
    t.zOrder && n.push(`w:zOrder="${t.zOrder}"`),
    t.top)
  ) {
    let i = We(t.top, 'top');
    i && r.push(i);
  }
  if (t.left) {
    let i = We(t.left, 'left');
    i && r.push(i);
  }
  if (t.bottom) {
    let i = We(t.bottom, 'bottom');
    i && r.push(i);
  }
  if (t.right) {
    let i = We(t.right, 'right');
    i && r.push(i);
  }
  return r.length === 0
    ? ''
    : `<w:pgBorders${n.length > 0 ? ' ' + n.join(' ') : ''}>${r.join('')}</w:pgBorders>`;
}
function ea(e) {
  if (!e.docGrid) return '';
  let t = e.docGrid,
    n = [];
  return (
    t.type && n.push(`w:type="${t.type}"`),
    t.linePitch !== void 0 && n.push(`w:linePitch="${t.linePitch}"`),
    t.charSpace !== void 0 && n.push(`w:charSpace="${t.charSpace}"`),
    n.length === 0 ? '' : `<w:docGrid ${n.join(' ')}/>`
  );
}
function ta(e) {
  if (!e) return '';
  let t = [];
  if (e.headerReferences) for (let f of e.headerReferences) t.push(_s(f));
  if (e.footerReferences) for (let f of e.footerReferences) t.push(Us(f));
  let n = Gs(e.footnotePr);
  n && t.push(n);
  let r = qs(e.endnotePr);
  (r && t.push(r), e.sectionStart && t.push(`<w:type w:val="${e.sectionStart}"/>`));
  let o = Js(e);
  o && t.push(o);
  let i = Zs(e);
  if ((i && t.push(i), e.paperSrcFirst !== void 0 || e.paperSrcOther !== void 0)) {
    let f = [];
    (e.paperSrcFirst !== void 0 && f.push(`w:first="${e.paperSrcFirst}"`),
      e.paperSrcOther !== void 0 && f.push(`w:other="${e.paperSrcOther}"`),
      t.push(`<w:paperSrc ${f.join(' ')}/>`));
  }
  let s = Qs(e);
  s && t.push(s);
  let a = Ks(e);
  a && t.push(a);
  let c = Ys(e);
  c && t.push(c);
  let p = ea(e);
  return (
    p && t.push(p),
    e.verticalAlign && t.push(`<w:vAlign w:val="${e.verticalAlign}"/>`),
    e.bidi && t.push('<w:bidi/>'),
    e.titlePg && t.push('<w:titlePg/>'),
    e.evenAndOddHeaders && t.push('<w:evenAndOddHeaders/>'),
    t.length === 0 ? '' : `<w:sectPr>${t.join('')}</w:sectPr>`
  );
}
function gr(e) {
  if (e.type === 'paragraph') return ae(e);
  if (e.type === 'table') return ve(e);
  if (e.type === 'blockSdt') {
    let t = e.content.map((o) => gr(o)).join(''),
      n = e.properties,
      r = [];
    return (
      n.alias && r.push(`<w:alias w:val="${n.alias}"/>`),
      n.tag && r.push(`<w:tag w:val="${n.tag}"/>`),
      `<w:sdt><w:sdtPr>${r.join('')}</w:sdtPr><w:sdtContent>${t}</w:sdtContent></w:sdt>`
    );
  }
  return '';
}
function na(e) {
  return e.map((t) => gr(t)).join('');
}
function ra(e) {
  let t = [];
  return (
    t.push(na(e.content)),
    e.finalSectionProperties && t.push(ta(e.finalSectionProperties)),
    t.join('')
  );
}
function wr(e) {
  let t = [];
  t.push('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>');
  let n = Ws();
  return (
    t.push(`<w:document ${n} mc:Ignorable="w14 w15 wp14">`),
    t.push('<w:body>'),
    t.push(ra(e.package.document)),
    t.push('</w:body>'),
    t.push('</w:document>'),
    t.join('')
  );
}
var oa = {
  wpc: 'http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas',
  mc: 'http://schemas.openxmlformats.org/markup-compatibility/2006',
  o: 'urn:schemas-microsoft-com:office:office',
  r: 'http://schemas.openxmlformats.org/officeDocument/2006/relationships',
  m: 'http://schemas.openxmlformats.org/officeDocument/2006/math',
  v: 'urn:schemas-microsoft-com:vml',
  wp14: 'http://schemas.microsoft.com/office/word/2010/wordprocessingDrawing',
  wp: 'http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing',
  w10: 'urn:schemas-microsoft-com:office:word',
  w: 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
  w14: 'http://schemas.microsoft.com/office/word/2010/wordml',
  w15: 'http://schemas.microsoft.com/office/word/2012/wordml',
  wpg: 'http://schemas.microsoft.com/office/word/2010/wordprocessingGroup',
  wps: 'http://schemas.microsoft.com/office/word/2010/wordprocessingShape',
};
function ia() {
  return Object.entries(oa)
    .map(([e, t]) => `xmlns:${e}="${t}"`)
    .join(' ');
}
function sa(e) {
  return e.type === 'paragraph' ? ae(e) : e.type === 'table' ? ve(e) : '';
}
function ft(e) {
  let t = e.type === 'header' ? 'w:hdr' : 'w:ftr',
    n = ia(),
    r = e.content.map((o) => sa(o)).join('');
  return (
    r || (r = '<w:p><w:pPr/></w:p>'),
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<${t} ${n}>${r}</${t}>`
  );
}
function xr(e) {
  let t = '<w:r>',
    n = [];
  (e.formatting?.bold && n.push('<w:b/>'),
    e.formatting?.italic && n.push('<w:i/>'),
    n.length > 0 && (t += `<w:rPr>${n.join('')}</w:rPr>`));
  for (let r of e.content)
    if (r.type === 'text') {
      let o = r.text !== r.text.trim() || r.text.includes('  ');
      t += o ? `<w:t xml:space="preserve">${R(r.text)}</w:t>` : `<w:t>${R(r.text)}</w:t>`;
    } else r.type === 'break' && (t += '<w:br/>');
  return ((t += '</w:r>'), t);
}
function aa(e) {
  let t = '<w:p>';
  for (let n of e.content) n.type === 'run' && (t += xr(n));
  return ((t += '</w:p>'), t);
}
function la(e) {
  let t = '<w:p>';
  t += '<w:r><w:rPr><w:rStyle w:val="CommentReference"/></w:rPr><w:annotationRef/></w:r>';
  for (let n of e.content) n.type === 'run' && (t += xr(n));
  return ((t += '</w:p>'), t);
}
function yr(e) {
  let t = [`w:id="${e.id}"`];
  (e.author && t.push(`w:author="${R(e.author)}"`),
    e.initials && t.push(`w:initials="${R(e.initials)}"`),
    e.date && t.push(`w:date="${R(e.date)}"`));
  let n = `<w:comment ${t.join(' ')}>`;
  if (e.content && e.content.length > 0) {
    n += la(e.content[0]);
    for (let r = 1; r < e.content.length; r++) n += aa(e.content[r]);
  } else
    n +=
      '<w:p><w:r><w:rPr><w:rStyle w:val="CommentReference"/></w:rPr><w:annotationRef/></w:r></w:p>';
  return ((n += '</w:comment>'), n);
}
function br(e) {
  if (!e || e.length === 0) return '';
  let t = [],
    n = [];
  for (let o of e) (o.parentId == null ? t : n).push(o);
  let r = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:comments xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:w10="urn:schemas-microsoft-com:office:word" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup" xmlns:wpi="http://schemas.microsoft.com/office/word/2010/wordprocessingInk" xmlns:wne="http://schemas.microsoft.com/office/word/2006/wordml" xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape" mc:Ignorable="w14 wp14">`;
  for (let o of t) r += yr(o);
  for (let o of n) r += yr(o);
  return ((r += '</w:comments>'), r);
}
function mt(e) {
  let t = 0;
  for (let n of e.matchAll(/Id="rId(\d+)"/g)) {
    let r = parseInt(n[1], 10);
    r > t && (t = r);
  }
  return t;
}
async function ca(e, t, n) {
  let r = e.package.document.comments;
  if (!r || r.length === 0) return;
  let o = br(r);
  (t.file('word/comments.xml', o, { compression: 'DEFLATE', compressionOptions: { level: n } }),
    await Promise.all([ga(t, n), wa(t, n)]));
}
function Tr(e) {
  let t = [];
  for (let n of e)
    if (n.type === 'paragraph') {
      for (let r of n.content)
        if (r.type === 'run')
          for (let o of r.content)
            o.type === 'drawing' && o.image.src?.startsWith('data:') && t.push(o.image);
    } else if (n.type === 'table')
      for (let r of n.rows) for (let o of r.cells) t.push(...Tr(o.content));
  return t;
}
var ua = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/gif': 'gif',
  'image/bmp': 'bmp',
  'image/tiff': 'tiff',
  'image/webp': 'webp',
  'image/svg+xml': 'svg',
};
function pa(e) {
  let t = e.match(/^data:([^;]+);base64,(.+)$/);
  if (!t) throw new Error('Invalid data URL');
  let n = atob(t[2]),
    r = new Uint8Array(n.length);
  for (let o = 0; o < n.length; o++) r[o] = n.charCodeAt(o);
  return { data: r.buffer, extension: ua[t[1]] || 'png' };
}
async function fa(e, t, n) {
  if (e.length === 0) return;
  let r = 'word/_rels/document.xml.rels',
    o = t.file(r);
  if (!o) return;
  let i = await o.async('text'),
    s = mt(i),
    a = 0;
  t.forEach((f) => {
    let d = f.match(/^word\/media\/image(\d+)\./);
    if (d) {
      let h = parseInt(d[1], 10);
      h > a && (a = h);
    }
  });
  let c = [],
    p = new Set();
  for (let f of e) {
    let { data: d, extension: h } = pa(f.src);
    (a++, s++);
    let g = `image${a}.${h}`,
      m = `word/media/${g}`,
      b = `rId${s}`;
    (t.file(m, d, { compression: 'DEFLATE', compressionOptions: { level: n } }),
      c.push(
        `<Relationship Id="${b}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/${g}"/>`
      ),
      p.add(h),
      (f.rId = b));
  }
  if (
    (c.length > 0 &&
      ((i = i.replace('</Relationships>', c.join('') + '</Relationships>')),
      t.file(r, i, { compression: 'DEFLATE', compressionOptions: { level: n } })),
    p.size > 0)
  ) {
    let f = t.file('[Content_Types].xml');
    if (f) {
      let d = await f.async('text');
      for (let h of p)
        if (!d.includes(`Extension="${h}"`)) {
          let g = ba(h);
          d = d.replace('</Types>', `<Default Extension="${h}" ContentType="${g}"/></Types>`);
        }
      t.file('[Content_Types].xml', d, {
        compression: 'DEFLATE',
        compressionOptions: { level: n },
      });
    }
  }
}
function Cr(e) {
  let t = [];
  for (let n of e)
    if (n.type === 'paragraph')
      for (let r of n.content) r.type === 'hyperlink' && r.href && !r.rId && !r.anchor && t.push(r);
    else if (n.type === 'table')
      for (let r of n.rows) for (let o of r.cells) t.push(...Cr(o.content));
  return t;
}
async function da(e, t, n) {
  if (e.length === 0) return;
  let r = 'word/_rels/document.xml.rels',
    o = t.file(r);
  if (!o) return;
  let i = await o.async('text'),
    s = mt(i),
    a = [];
  for (let c of e) {
    s++;
    let p = `rId${s}`;
    (a.push(
      `<Relationship Id="${p}" Type="${oe.hyperlink}" Target="${R(c.href)}" TargetMode="External"/>`
    ),
      (c.rId = p));
  }
  a.length > 0 &&
    ((i = i.replace('</Relationships>', a.join('') + '</Relationships>')),
    t.file(r, i, { compression: 'DEFLATE', compressionOptions: { level: n } }));
}
async function ht(e, t = {}) {
  if (!e.originalBuffer)
    throw new Error(
      'Cannot repack document: no original buffer for round-trip. Use createDocx() for new documents.'
    );
  let { compressionLevel: n = 6, updateModifiedDate: r = true, modifiedBy: o } = t,
    i = e,
    s = await dt.loadAsync(e.originalBuffer),
    a = new dt();
  for (let [h, g] of Object.entries(s.files)) {
    if (g.dir) {
      a.folder(h.replace(/\/$/, ''));
      continue;
    }
    let m = await g.async('arraybuffer');
    a.file(h, m, { compression: 'DEFLATE', compressionOptions: { level: n } });
  }
  let c = Tr(i.package.document.content);
  await fa(c, a, n);
  let p = Cr(i.package.document.content);
  await da(p, a, n);
  let f = wr(i);
  if (
    (a.file('word/document.xml', f, { compression: 'DEFLATE', compressionOptions: { level: n } }),
    ya(i, a, n),
    await ca(i, a, n),
    r)
  ) {
    let h = 'docProps/core.xml',
      g = s.file(h);
    if (g) {
      let m = await g.async('text'),
        b = xa(m, { updateModifiedDate: r, modifiedBy: o });
      a.file(h, b, { compression: 'DEFLATE', compressionOptions: { level: n } });
    }
  }
  return await a.generateAsync({
    type: 'arraybuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: n },
  });
}
var ma = 'application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml',
  ha = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments';
async function ga(e, t) {
  let n = e.file('[Content_Types].xml');
  if (!n) return;
  let r = await n.async('text');
  r.includes('/word/comments.xml') ||
    ((r = r.replace(
      '</Types>',
      `<Override PartName="/word/comments.xml" ContentType="${ma}"/></Types>`
    )),
    e.file('[Content_Types].xml', r, { compression: 'DEFLATE', compressionOptions: { level: t } }));
}
async function wa(e, t) {
  let n = 'word/_rels/document.xml.rels',
    r = e.file(n);
  if (!r) return;
  let o = await r.async('text');
  if (o.includes('comments.xml')) return;
  let i = `rId${mt(o) + 1}`;
  ((o = o.replace(
    '</Relationships>',
    `<Relationship Id="${i}" Type="${ha}" Target="comments.xml"/></Relationships>`
  )),
    e.file(n, o, { compression: 'DEFLATE', compressionOptions: { level: t } }));
}
function ya(e, t, n) {
  let r = e.package.relationships;
  if (!r) return;
  let o = { level: n };
  if (e.package.headers)
    for (let [i, s] of e.package.headers.entries()) {
      let a = r.get(i);
      if (a && a.type === oe.header && a.target) {
        let c = a.target.startsWith('/') ? a.target.slice(1) : `word/${a.target}`,
          p = ft(s);
        t.file(c, p, { compression: 'DEFLATE', compressionOptions: o });
      }
    }
  if (e.package.footers)
    for (let [i, s] of e.package.footers.entries()) {
      let a = r.get(i);
      if (a && a.type === oe.footer && a.target) {
        let c = a.target.startsWith('/') ? a.target.slice(1) : `word/${a.target}`,
          p = ft(s);
        t.file(c, p, { compression: 'DEFLATE', compressionOptions: o });
      }
    }
}
function xa(e, t) {
  let n = e;
  if (t.updateModifiedDate) {
    let r = new Date().toISOString();
    n.includes('<dcterms:modified')
      ? (n = n.replace(
          /<dcterms:modified[^>]*>[^<]*<\/dcterms:modified>/,
          `<dcterms:modified xsi:type="dcterms:W3CDTF">${r}</dcterms:modified>`
        ))
      : (n = n.replace(
          '</cp:coreProperties>',
          `<dcterms:modified xsi:type="dcterms:W3CDTF">${r}</dcterms:modified></cp:coreProperties>`
        ));
  }
  return (
    t.modifiedBy &&
      (n.includes('<cp:lastModifiedBy')
        ? (n = n.replace(
            /<cp:lastModifiedBy>[^<]*<\/cp:lastModifiedBy>/,
            `<cp:lastModifiedBy>${R(t.modifiedBy)}</cp:lastModifiedBy>`
          ))
        : (n = n.replace(
            '</cp:coreProperties>',
            `<cp:lastModifiedBy>${R(t.modifiedBy)}</cp:lastModifiedBy></cp:coreProperties>`
          ))),
    n
  );
}
function ba(e, t) {
  return (
    {
      png: 'image/png',
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
      gif: 'image/gif',
      bmp: 'image/bmp',
      tif: 'image/tiff',
      tiff: 'image/tiff',
      svg: 'image/svg+xml',
      webp: 'image/webp',
      wmf: 'image/x-wmf',
      emf: 'image/x-emf',
    }[e] || 'application/octet-stream'
  );
}
async function Ta() {
  let e = new dt();
  (e.file(
    '[Content_Types].xml',
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>`
  ),
    e.file(
      '_rels/.rels',
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>`
    ),
    e.file(
      'word/_rels/document.xml.rels',
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>`
    ),
    e.file(
      'word/document.xml',
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <w:body>
    <w:p>
      <w:r>
        <w:t></w:t>
      </w:r>
    </w:p>
    <w:sectPr>
      <w:pgSz w:w="12240" w:h="15840"/>
      <w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="720" w:footer="720" w:gutter="0"/>
    </w:sectPr>
  </w:body>
</w:document>`
    ),
    e.file(
      'word/styles.xml',
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:docDefaults>
    <w:rPrDefault>
      <w:rPr>
        <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri"/>
        <w:sz w:val="22"/>
      </w:rPr>
    </w:rPrDefault>
    <w:pPrDefault>
      <w:pPr>
        <w:spacing w:after="200" w:line="276" w:lineRule="auto"/>
      </w:pPr>
    </w:pPrDefault>
  </w:docDefaults>
  <w:style w:type="paragraph" w:default="1" w:styleId="Normal">
    <w:name w:val="Normal"/>
  </w:style>
</w:styles>`
    ));
  let t = new Date().toISOString();
  return (
    e.file(
      'docProps/core.xml',
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:creator>EigenPal DOCX Editor</dc:creator>
  <dcterms:created xsi:type="dcterms:W3CDTF">${t}</dcterms:created>
  <dcterms:modified xsi:type="dcterms:W3CDTF">${t}</dcterms:modified>
</cp:coreProperties>`
    ),
    e.file(
      'docProps/app.xml',
      `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties">
  <Application>EigenPal DOCX Editor</Application>
  <AppVersion>1.0.0</AppVersion>
</Properties>`
    ),
    e.generateAsync({
      type: 'arraybuffer',
      compression: 'DEFLATE',
      compressionOptions: { level: 6 },
    })
  );
}
async function vr(e) {
  let t = await Ta(),
    n = { ...e, originalBuffer: t };
  return ht(n);
}
lt();
var te = { type: 'string', description: 'Document ID returned from docx_load' },
  gt = {
    type: 'object',
    properties: {
      paragraphIndex: {
        type: 'number',
        description: 'Index of the paragraph (0-indexed)',
        minimum: 0,
      },
      offset: { type: 'number', description: 'Character offset within the paragraph', minimum: 0 },
    },
    required: ['paragraphIndex', 'offset'],
  },
  wt = { type: 'object', properties: { start: gt, end: gt }, required: ['start', 'end'] },
  Ca = {
    name: 'docx_load',
    description: `Load a DOCX document from base64-encoded content.
Returns a document ID that can be used with other tools.
The document remains in session memory until closed.`,
    inputSchema: {
      type: 'object',
      properties: {
        content: { type: 'string', description: 'Base64-encoded DOCX file content' },
        source: {
          type: 'string',
          description: 'Optional source filename or identifier for reference',
        },
      },
      required: ['content'],
    },
    handler: async (e, t) => {
      let { content: n, source: r } = e;
      try {
        let o = atob(n),
          i = new Uint8Array(o.length);
        for (let f = 0; f < o.length; f++) i[f] = o.charCodeAt(f);
        let s = i.buffer,
          a = await He(s),
          c = `doc_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        t.session.documents.set(c, {
          id: c,
          document: a,
          buffer: s,
          source: r,
          lastModified: Date.now(),
        });
        let p = a.package.document.content.filter((f) => f.type === 'paragraph').length;
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                documentId: c,
                source: r,
                paragraphCount: p,
                message: 'Document loaded successfully',
              }),
            },
          ],
        };
      } catch (o) {
        return {
          isError: true,
          content: [{ type: 'text', text: `Failed to load document: ${o.message}` }],
        };
      }
    },
    annotations: { category: 'core', readOnly: false, complexity: 'low' },
  },
  va = {
    name: 'docx_save',
    description: `Export the document to base64-encoded DOCX format.
Returns the document as a base64 string that can be saved to a file.`,
    inputSchema: { type: 'object', properties: { documentId: te }, required: ['documentId'] },
    handler: async (e, t) => {
      let { documentId: n } = e,
        r = t.session.documents.get(n);
      if (!r)
        return { isError: true, content: [{ type: 'text', text: `Document not found: ${n}` }] };
      try {
        let o;
        r.buffer ? (o = await ht(r.document)) : (o = await vr(r.document));
        let i = new Uint8Array(o),
          s = '';
        for (let c = 0; c < i.length; c++) s += String.fromCharCode(i[c]);
        let a = btoa(s);
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                documentId: n,
                base64: a,
                size: o.byteLength,
                message: 'Document exported successfully',
              }),
            },
          ],
        };
      } catch (o) {
        return {
          isError: true,
          content: [{ type: 'text', text: `Failed to save document: ${o.message}` }],
        };
      }
    },
    annotations: { category: 'core', readOnly: true, complexity: 'low' },
  },
  Fa = {
    name: 'docx_close',
    description: `Close a document and free its memory.
Use this when done working with a document.`,
    inputSchema: { type: 'object', properties: { documentId: te }, required: ['documentId'] },
    handler: async (e, t) => {
      let { documentId: n } = e;
      return t.session.documents.has(n)
        ? (t.session.documents.delete(n),
          {
            content: [
              { type: 'text', text: JSON.stringify({ documentId: n, message: 'Document closed' }) },
            ],
          })
        : { isError: true, content: [{ type: 'text', text: `Document not found: ${n}` }] };
    },
    annotations: { category: 'core', readOnly: false, complexity: 'low' },
  },
  Pa = {
    name: 'docx_get_info',
    description: `Get metadata and statistics about a document.
Returns paragraph count, word count, table count, and other useful info.`,
    inputSchema: { type: 'object', properties: { documentId: te }, required: ['documentId'] },
    handler: async (e, t) => {
      let { documentId: n } = e,
        r = t.session.documents.get(n);
      if (!r)
        return { isError: true, content: [{ type: 'text', text: `Document not found: ${n}` }] };
      let o = r.document,
        i = o.package.document,
        s = i.content.filter((p) => p.type === 'paragraph'),
        a = i.content.filter((p) => p.type === 'table'),
        c = 0;
      for (let p of s)
        if (p.type === 'paragraph') {
          let f = Fr(p);
          c += f.split(/\s+/).filter((d) => d.length > 0).length;
        }
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify({
              documentId: n,
              paragraphCount: s.length,
              tableCount: a.length,
              wordCount: c,
              hasStyles: !!o.package.styles,
              hasTheme: !!o.package.theme,
              source: r.source,
              lastModified: r.lastModified,
            }),
          },
        ],
      };
    },
    annotations: { category: 'core', readOnly: true, complexity: 'low' },
  },
  Sa = {
    name: 'docx_get_text',
    description: `Get the plain text content of the document.
Returns all text concatenated with paragraph breaks.
Useful for understanding document content before making edits.`,
    inputSchema: {
      type: 'object',
      properties: {
        documentId: te,
        maxLength: {
          type: 'number',
          description: 'Maximum characters to return (default: 10000)',
          default: 1e4,
        },
      },
      required: ['documentId'],
    },
    handler: async (e, t) => {
      let { documentId: n, maxLength: r = 1e4 } = e,
        o = t.session.documents.get(n);
      if (!o)
        return { isError: true, content: [{ type: 'text', text: `Document not found: ${n}` }] };
      let i = o.document.package.document,
        s = [];
      for (let p of i.content)
        p.type === 'paragraph' ? s.push(Fr(p)) : p.type === 'table' && s.push('[TABLE]');
      let a = s.join(`
`),
        c = a.length > r;
      return (
        c && (a = a.slice(0, r) + '...'),
        {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                documentId: n,
                text: a,
                truncated: c,
                totalLength: c
                  ? s.join(`
`).length
                  : a.length,
              }),
            },
          ],
        }
      );
    },
    annotations: { category: 'core', readOnly: true, complexity: 'low' },
  },
  ka = {
    name: 'docx_insert_text',
    description: `Insert text at a specific position in the document.
Position is specified by paragraph index (0-indexed) and character offset.`,
    inputSchema: {
      type: 'object',
      properties: {
        documentId: te,
        position: gt,
        text: { type: 'string', description: 'Text to insert' },
      },
      required: ['documentId', 'position', 'text'],
    },
    handler: async (e, t) => {
      let { documentId: n, position: r, text: o } = e,
        i = t.session.documents.get(n);
      if (!i)
        return { isError: true, content: [{ type: 'text', text: `Document not found: ${n}` }] };
      try {
        let s = se(i.document, { type: 'insertText', position: r, text: o });
        return (
          (i.document = s),
          (i.lastModified = Date.now()),
          {
            content: [
              {
                type: 'text',
                text: JSON.stringify({ success: !0, insertedLength: o.length, position: r }),
              },
            ],
          }
        );
      } catch (s) {
        return {
          isError: true,
          content: [{ type: 'text', text: `Failed to insert text: ${s.message}` }],
        };
      }
    },
    annotations: { category: 'core', readOnly: false, complexity: 'low' },
  },
  Ra = {
    name: 'docx_replace_text',
    description: `Replace text in a range with new text.
Specify start and end positions to define the range to replace.`,
    inputSchema: {
      type: 'object',
      properties: {
        documentId: te,
        range: wt,
        text: { type: 'string', description: 'Replacement text' },
      },
      required: ['documentId', 'range', 'text'],
    },
    handler: async (e, t) => {
      let { documentId: n, range: r, text: o } = e,
        i = t.session.documents.get(n);
      if (!i)
        return { isError: true, content: [{ type: 'text', text: `Document not found: ${n}` }] };
      try {
        let s = se(i.document, { type: 'replaceText', range: r, text: o });
        return (
          (i.document = s),
          (i.lastModified = Date.now()),
          {
            content: [
              {
                type: 'text',
                text: JSON.stringify({ success: !0, replacedRange: r, newTextLength: o.length }),
              },
            ],
          }
        );
      } catch (s) {
        return {
          isError: true,
          content: [{ type: 'text', text: `Failed to replace text: ${s.message}` }],
        };
      }
    },
    annotations: { category: 'core', readOnly: false, complexity: 'low' },
  },
  Ia = {
    name: 'docx_delete_text',
    description: `Delete text in a range.
Specify start and end positions to define the range to delete.`,
    inputSchema: {
      type: 'object',
      properties: { documentId: te, range: wt },
      required: ['documentId', 'range'],
    },
    handler: async (e, t) => {
      let { documentId: n, range: r } = e,
        o = t.session.documents.get(n);
      if (!o)
        return { isError: true, content: [{ type: 'text', text: `Document not found: ${n}` }] };
      try {
        let i = se(o.document, { type: 'deleteText', range: r });
        return (
          (o.document = i),
          (o.lastModified = Date.now()),
          { content: [{ type: 'text', text: JSON.stringify({ success: !0, deletedRange: r }) }] }
        );
      } catch (i) {
        return {
          isError: true,
          content: [{ type: 'text', text: `Failed to delete text: ${i.message}` }],
        };
      }
    },
    annotations: { category: 'core', readOnly: false, complexity: 'low' },
  },
  Ea = {
    name: 'docx_format_text',
    description: `Apply formatting to text in a range.
Supports bold, italic, underline, font size, font family, color, and highlight.`,
    inputSchema: {
      type: 'object',
      properties: {
        documentId: te,
        range: wt,
        formatting: {
          type: 'object',
          description: 'Formatting options to apply',
          properties: {
            bold: { type: 'boolean' },
            italic: { type: 'boolean' },
            underline: { type: 'boolean' },
            strikethrough: { type: 'boolean' },
            fontSize: { type: 'number', description: 'Font size in points' },
            fontFamily: { type: 'string' },
            color: { type: 'string', description: 'Hex color (e.g., "#FF0000")' },
            highlight: { type: 'string', description: 'Highlight color name' },
          },
        },
      },
      required: ['documentId', 'range', 'formatting'],
    },
    handler: async (e, t) => {
      let { documentId: n, range: r, formatting: o } = e,
        i = t.session.documents.get(n);
      if (!i)
        return { isError: true, content: [{ type: 'text', text: `Document not found: ${n}` }] };
      try {
        let s = se(i.document, { type: 'formatText', range: r, formatting: o });
        return (
          (i.document = s),
          (i.lastModified = Date.now()),
          {
            content: [
              {
                type: 'text',
                text: JSON.stringify({ success: !0, range: r, appliedFormatting: o }),
              },
            ],
          }
        );
      } catch (s) {
        return {
          isError: true,
          content: [{ type: 'text', text: `Failed to format text: ${s.message}` }],
        };
      }
    },
    annotations: { category: 'core', readOnly: false, complexity: 'medium' },
  },
  Ma = {
    name: 'docx_apply_style',
    description: `Apply a named style to a paragraph.
Use document styles like "Heading1", "Heading2", "Normal", etc.`,
    inputSchema: {
      type: 'object',
      properties: {
        documentId: te,
        paragraphIndex: {
          type: 'number',
          description: 'Index of the paragraph (0-indexed)',
          minimum: 0,
        },
        styleId: { type: 'string', description: 'Style ID (e.g., "Heading1", "Normal")' },
      },
      required: ['documentId', 'paragraphIndex', 'styleId'],
    },
    handler: async (e, t) => {
      let { documentId: n, paragraphIndex: r, styleId: o } = e,
        i = t.session.documents.get(n);
      if (!i)
        return { isError: true, content: [{ type: 'text', text: `Document not found: ${n}` }] };
      try {
        let s = se(i.document, { type: 'applyStyle', paragraphIndex: r, styleId: o });
        return (
          (i.document = s),
          (i.lastModified = Date.now()),
          {
            content: [
              {
                type: 'text',
                text: JSON.stringify({ success: !0, paragraphIndex: r, styleId: o }),
              },
            ],
          }
        );
      } catch (s) {
        return {
          isError: true,
          content: [{ type: 'text', text: `Failed to apply style: ${s.message}` }],
        };
      }
    },
    annotations: { category: 'core', readOnly: false, complexity: 'low' },
  };
function Fr(e) {
  let t = [];
  for (let n of e.content)
    n.type === 'run' ? t.push(Pr(n)) : n.type === 'hyperlink' && t.push($a(n));
  return t.join('');
}
function Pr(e) {
  return e.content
    .filter((t) => t.type === 'text')
    .map((t) => t.text)
    .join('');
}
function $a(e) {
  let t = [];
  for (let n of e.children) n.type === 'run' && t.push(Pr(n));
  return t.join('');
}
var yt = [Ca, va, Fa, Pa, Sa, ka, Ra, Ia, Ea, Ma];
function Da(e = {}) {
  let {
      name: t = 'docx-editor',
      version: n = '0.1.0',
      includeCoreTools: r = true,
      debug: o = false,
      additionalTools: i = [],
    } = e,
    s = new Map(),
    a = {
      id: `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      documents: new Map(),
      data: new Map(),
    };
  if (r)
    for (let g of yt) (s.set(g.name, g), o && console.log(`[MCP] Registered core tool: ${g.name}`));
  let c = re.getMcpTools();
  for (let g of c)
    (s.has(g.name) && console.warn(`[MCP] Tool '${g.name}' from plugin overrides existing tool`),
      s.set(g.name, g),
      o && console.log(`[MCP] Registered plugin tool: ${g.name}`));
  for (let g of i)
    (s.set(g.name, g), o && console.log(`[MCP] Registered additional tool: ${g.name}`));
  let p = o
    ? (g, m) => {
        console.log(`[MCP] ${g}`, m ?? '');
      }
    : () => {};
  async function f(g, m) {
    let b = s.get(g);
    if (!b) throw new Error(`Unknown tool: ${g}`);
    p(`Calling tool: ${g}`, m);
    let C = { session: a, log: p };
    try {
      let I = await b.handler(m, C);
      return (p(`Tool ${g} completed`, I), I);
    } catch (I) {
      throw (p(`Tool ${g} failed`, I), I);
    }
  }
  function d() {
    return Array.from(s.values()).map((g) => ({
      name: g.name,
      description: g.description,
      inputSchema: Ba(g.inputSchema),
      category: g.annotations?.category,
    }));
  }
  function h() {
    return { name: t, version: n, toolCount: s.size };
  }
  return { tools: s, session: a, handleToolCall: f, listTools: d, getInfo: h };
}
async function Aa(e, t) {
  let { id: n, method: r, params: o } = t;
  try {
    switch (r) {
      case 'initialize':
        return {
          jsonrpc: '2.0',
          id: n,
          result: {
            protocolVersion: '2024-11-05',
            capabilities: { tools: {} },
            serverInfo: e.getInfo(),
          },
        };
      case 'tools/list': {
        let i = e.listTools();
        return {
          jsonrpc: '2.0',
          id: n,
          result: {
            tools: i.map((s) => ({
              name: s.name,
              description: s.description,
              inputSchema: s.inputSchema,
            })),
          },
        };
      }
      case 'tools/call': {
        let { name: i, arguments: s } = o,
          a = await e.handleToolCall(i, s);
        return { jsonrpc: '2.0', id: n, result: a };
      }
      default:
        return {
          jsonrpc: '2.0',
          id: n,
          error: { code: -32601, message: `Method not found: ${r}` },
        };
    }
  } catch (i) {
    return { jsonrpc: '2.0', id: n, error: { code: -32e3, message: i.message } };
  }
}
async function Sr(e = {}) {
  let t = Da(e);
  e.debug &&
    (console.error(`[MCP] Server started: ${t.getInfo().name} v${t.getInfo().version}`),
    console.error(`[MCP] Tools registered: ${t.tools.size}`));
  let r = (await import('readline')).createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false,
    }),
    o = '';
  (r.on('line', async (i) => {
    o += i;
    try {
      let s = JSON.parse(o);
      o = '';
      let a = await Aa(t, s);
      process.stdout.write(
        JSON.stringify(a) +
          `
`
      );
    } catch {}
  }),
    r.on('close', () => {
      (e.debug && console.error('[MCP] Server closed'), process.exit(0));
    }));
}
function Ba(e) {
  return typeof e == 'object' && e !== null && ('type' in e || 'properties' in e)
    ? e
    : { type: 'object', properties: {} };
}
function La() {
  let e = process.argv.slice(2);
  return {
    debug: e.includes('--debug') || e.includes('-d'),
    help: e.includes('--help') || e.includes('-h'),
    version: e.includes('--version') || e.includes('-v'),
  };
}
var Na = `
docx-editor-mcp - MCP server for DOCX document editing

USAGE:
  docx-editor-mcp [OPTIONS]

OPTIONS:
  -d, --debug     Enable debug logging (logs to stderr)
  -h, --help      Show this help message
  -v, --version   Show version number

DESCRIPTION:
  Starts an MCP (Model Context Protocol) server that exposes DOCX document
  editing tools to AI clients like Claude Desktop.

AVAILABLE TOOLS:
  Core Tools:
    docx_load          Load a DOCX document from base64
    docx_save          Export document to base64
    docx_close         Close a document
    docx_get_info      Get document metadata
    docx_get_text      Get document plain text
    docx_insert_text   Insert text at position
    docx_replace_text  Replace text in range
    docx_delete_text   Delete text in range
    docx_format_text   Apply text formatting
    docx_apply_style   Apply paragraph style

  Template Tools (docxtemplater plugin):
    docx_get_variables     List template variables
    docx_insert_variable   Insert {variable} placeholder
    docx_apply_template    Substitute template variables
    docx_validate_template Validate template syntax

CLAUDE DESKTOP CONFIGURATION:
  Add to your Claude Desktop config:

  {
    "mcpServers": {
      "docx-editor": {
        "command": "npx",
        "args": ["-y", "@eigenpal/docx-editor", "--mcp"]
      }
    }
  }

EXAMPLES:
  # Start server (normal mode)
  docx-editor-mcp

  # Start server with debug logging
  docx-editor-mcp --debug
`;
async function Xa() {
  let { debug: e, help: t, version: n } = La();
  (t && (console.log(Na), process.exit(0)),
    n && (console.log('0.1.0'), process.exit(0)),
    re.register(nr),
    e &&
      (console.error('[MCP CLI] Registered docxtemplater plugin'),
      console.error(`[MCP CLI] Total plugins: ${re.size}`),
      console.error(`[MCP CLI] Total MCP tools: ${re.getMcpTools().length}`)),
    await Sr({ name: 'docx-editor', version: '0.1.0', debug: e }));
}
Xa().catch((e) => {
  (console.error('[MCP CLI] Fatal error:', e), process.exit(1));
}); //# sourceMappingURL=mcp-cli.js.map
//# sourceMappingURL=mcp-cli.js.map
