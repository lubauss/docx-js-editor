import { e as e$1, i, c, d, a, oa as oa$1 } from './chunk-7IIMSS52.js';
import { g, e, f } from './chunk-7JSPKVOW.js';
import { b } from './chunk-CXJ6TLVT.js';
import nr, { useRef, useState, useEffect, useCallback, useMemo, useLayoutEffect } from 'react';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
var Vt = () =>
    jsxs('svg', {
      width: '16',
      height: '16',
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        jsx('circle', { cx: '8', cy: '8', r: '7', stroke: 'currentColor', strokeWidth: '1.5' }),
        jsx('path', {
          d: 'M8 4v4M8 10v1',
          stroke: 'currentColor',
          strokeWidth: '1.5',
          strokeLinecap: 'round',
        }),
      ],
    }),
  Gt = () =>
    jsx('svg', {
      width: '16',
      height: '16',
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: jsx('path', {
        d: 'M13 3L3 13M3 3h4v4M13 13h-4v-4',
        stroke: 'currentColor',
        strokeWidth: '1.5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
    }),
  jt = () =>
    jsx('svg', {
      width: '16',
      height: '16',
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: jsx('path', {
        d: 'M8 3v10M3 8h10',
        stroke: 'currentColor',
        strokeWidth: '1.5',
        strokeLinecap: 'round',
      }),
    }),
  Zt = () =>
    jsx('svg', {
      width: '16',
      height: '16',
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: jsx('path', {
        d: 'M3 4h10M3 8h7M3 12h4',
        stroke: 'currentColor',
        strokeWidth: '1.5',
        strokeLinecap: 'round',
      }),
    }),
  Xt = () =>
    jsxs('svg', {
      width: '16',
      height: '16',
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        jsx('path', {
          d: 'M2 3h6M5 3v6M3 5c0 2 1 4 2 4s2-2 2-4',
          stroke: 'currentColor',
          strokeWidth: '1.5',
          strokeLinecap: 'round',
        }),
        jsx('path', {
          d: 'M9 7l3 6M15 7l-3 6M10 11h4',
          stroke: 'currentColor',
          strokeWidth: '1.5',
          strokeLinecap: 'round',
        }),
      ],
    }),
  Qt = () =>
    jsxs('svg', {
      width: '16',
      height: '16',
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        jsx('circle', { cx: '8', cy: '8', r: '6', stroke: 'currentColor', strokeWidth: '1.5' }),
        jsx('path', {
          d: 'M6 6c0-1.1.9-2 2-2s2 .9 2 2c0 1.5-2 1.5-2 3',
          stroke: 'currentColor',
          strokeWidth: '1.5',
          strokeLinecap: 'round',
        }),
        jsx('circle', { cx: '8', cy: '12', r: '0.5', fill: 'currentColor' }),
      ],
    }),
  Jt = () =>
    jsxs('svg', {
      width: '16',
      height: '16',
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        jsx('path', {
          d: 'M4 12l3-8 3 8M5 10h4',
          stroke: 'currentColor',
          strokeWidth: '1.5',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }),
        jsx('path', {
          d: 'M12 6l2 2-2 2',
          stroke: 'currentColor',
          strokeWidth: '1.5',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }),
      ],
    }),
  qt = () =>
    jsxs('svg', {
      width: '16',
      height: '16',
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        jsx('rect', {
          x: '3',
          y: '3',
          width: '10',
          height: '10',
          rx: '1',
          stroke: 'currentColor',
          strokeWidth: '1.5',
        }),
        jsx('path', {
          d: 'M6 7h4M6 9h4',
          stroke: 'currentColor',
          strokeWidth: '1.5',
          strokeLinecap: 'round',
        }),
      ],
    }),
  eo = () =>
    jsxs('svg', {
      width: '16',
      height: '16',
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        jsx('circle', { cx: '8', cy: '8', r: '5', stroke: 'currentColor', strokeWidth: '1.5' }),
        jsx('path', {
          d: 'M6 9c.5.5 1 1 2 1s1.5-.5 2-1',
          stroke: 'currentColor',
          strokeWidth: '1.5',
          strokeLinecap: 'round',
        }),
        jsx('circle', { cx: '6', cy: '7', r: '0.5', fill: 'currentColor' }),
        jsx('circle', { cx: '10', cy: '7', r: '0.5', fill: 'currentColor' }),
      ],
    }),
  to = () =>
    jsx('svg', {
      width: '16',
      height: '16',
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: jsx('path', {
        d: 'M12 4L4 12M4 4l8 8',
        stroke: 'currentColor',
        strokeWidth: '1.5',
        strokeLinecap: 'round',
      }),
    });
function oo(e) {
  switch (e) {
    case 'askAI':
      return jsx(Vt, {});
    case 'rewrite':
      return jsx(Gt, {});
    case 'expand':
      return jsx(jt, {});
    case 'summarize':
      return jsx(Zt, {});
    case 'translate':
      return jsx(Xt, {});
    case 'explain':
      return jsx(Qt, {});
    case 'fixGrammar':
      return jsx(Jt, {});
    case 'makeFormal':
      return jsx(qt, {});
    case 'makeCasual':
      return jsx(eo, {});
    case 'custom':
      return jsx(to, {});
    default:
      return null;
  }
}
var ro = ({ action: e$1, onClick: t, isHighlighted: o, onMouseEnter: r }) => {
    let i = e(e$1),
      n = f(e$1),
      a = oo(e$1);
    return jsxs('button', {
      type: 'button',
      className: `docx-context-menu-item ${o ? 'docx-context-menu-item-highlighted' : ''}`,
      onClick: t,
      onMouseEnter: r,
      title: n,
      role: 'menuitem',
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        width: '100%',
        padding: '8px 12px',
        border: 'none',
        background: o ? 'var(--doc-primary-light)' : 'transparent',
        cursor: 'pointer',
        fontSize: '13px',
        color: 'var(--doc-text)',
        textAlign: 'left',
      },
      children: [
        jsx('span', { style: { display: 'flex', color: 'var(--doc-text-muted)' }, children: a }),
        jsx('span', { children: i }),
      ],
    });
  },
  no = ({ isOpen: e, onSubmit: t, onClose: o, selectedText: r }) => {
    let [i, n] = useState(''),
      a = useRef(null);
    useEffect(() => {
      e && a.current && a.current.focus();
    }, [e]);
    let g = (l) => {
        (l.preventDefault(), i.trim() && (t(i.trim()), n('')));
      },
      s = (l) => {
        l.key === 'Escape' && o();
      };
    return e
      ? jsx('div', {
          className: 'docx-custom-prompt-dialog',
          style: {
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            padding: '8px',
            background: 'white',
            borderTop: '1px solid var(--doc-border)',
          },
          children: jsxs('form', {
            onSubmit: g,
            children: [
              jsxs('div', {
                style: { marginBottom: '8px', fontSize: '12px', color: 'var(--doc-text-muted)' },
                children: ['Selected: "', r.slice(0, 50), r.length > 50 ? '...' : '', '"'],
              }),
              jsx('input', {
                ref: a,
                type: 'text',
                value: i,
                onChange: (l) => n(l.target.value),
                onKeyDown: s,
                placeholder: 'Enter custom prompt...',
                style: {
                  width: '100%',
                  padding: '8px',
                  border: '1px solid var(--doc-border-light)',
                  borderRadius: '4px',
                  fontSize: '13px',
                },
              }),
              jsxs('div', {
                style: {
                  marginTop: '8px',
                  display: 'flex',
                  gap: '8px',
                  justifyContent: 'flex-end',
                },
                children: [
                  jsx('button', {
                    type: 'button',
                    onClick: o,
                    style: {
                      padding: '6px 12px',
                      border: '1px solid var(--doc-border-light)',
                      borderRadius: '4px',
                      background: 'white',
                      cursor: 'pointer',
                      fontSize: '12px',
                    },
                    children: 'Cancel',
                  }),
                  jsx('button', {
                    type: 'submit',
                    disabled: !i.trim(),
                    style: {
                      padding: '6px 12px',
                      border: 'none',
                      borderRadius: '4px',
                      background: i.trim() ? 'var(--doc-primary)' : 'var(--doc-border)',
                      color: i.trim() ? 'white' : 'var(--doc-text-placeholder)',
                      cursor: i.trim() ? 'pointer' : 'not-allowed',
                      fontSize: '12px',
                    },
                    children: 'Send',
                  }),
                ],
              }),
            ],
          }),
        })
      : null;
  },
  Dn = ({
    isOpen: e,
    position: t,
    selectedText: o,
    selectionContext: r,
    onAction: i,
    onClose: n,
    actions: a = g,
    showCustomPrompt: g$1 = true,
    className: s = '',
  }) => {
    let l = useRef(null),
      [f, m] = useState(0),
      [p, c] = useState(false),
      h = g$1 ? [...a, 'custom'] : a;
    (useEffect(() => {
      if (!e) return;
      let u = (v) => {
        l.current && !l.current.contains(v.target) && n();
      };
      return (
        document.addEventListener('mousedown', u),
        () => document.removeEventListener('mousedown', u)
      );
    }, [e, n]),
      useEffect(() => {
        if (!e) return;
        let u = (v) => {
          switch (v.key) {
            case 'Escape':
              p ? c(false) : n();
              break;
            case 'ArrowDown':
              (v.preventDefault(), m((R) => (R + 1) % h.length));
              break;
            case 'ArrowUp':
              (v.preventDefault(), m((R) => (R - 1 + h.length) % h.length));
              break;
            case 'Enter':
              v.preventDefault();
              let C = h[f];
              C === 'custom' ? c(true) : (i(C), n());
              break;
          }
        };
        return (
          document.addEventListener('keydown', u),
          () => document.removeEventListener('keydown', u)
        );
      }, [e, f, h, i, n, p]),
      useEffect(() => {
        e && (m(0), c(false));
      }, [e]));
    let b = useCallback(() => {
        let v = h.length * 36 + 16,
          C = t.x,
          R = t.y;
        return (
          typeof window < 'u' &&
            (C + 200 > window.innerWidth && (C = window.innerWidth - 200 - 10),
            R + v > window.innerHeight && (R = window.innerHeight - v - 10),
            C < 10 && (C = 10),
            R < 10 && (R = 10)),
          {
            position: 'fixed',
            top: R,
            left: C,
            minWidth: 200,
            background: 'white',
            border: '1px solid var(--doc-border-light)',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
            zIndex: 1e4,
            padding: '4px 0',
            overflow: 'hidden',
          }
        );
      }, [t, h.length]),
      d = (u) => {
        u === 'custom' ? c(true) : (i(u), n());
      },
      x = (u) => {
        (i('custom', u), n());
      };
    return !e || !o
      ? null
      : jsxs('div', {
          ref: l,
          className: `docx-context-menu ${s}`,
          style: b(),
          role: 'menu',
          'aria-label': 'AI actions menu',
          children: [
            jsxs('div', {
              style: {
                padding: '8px 12px',
                borderBottom: '1px solid var(--doc-border)',
                fontSize: '11px',
                color: 'var(--doc-text-muted)',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              },
              children: ['"', o.slice(0, 30), o.length > 30 ? '...' : '', '"'],
            }),
            jsx('div', {
              role: 'group',
              children: h.map((u, v) =>
                jsx(
                  ro,
                  {
                    action: u,
                    onClick: () => d(u),
                    isHighlighted: v === f,
                    onMouseEnter: () => m(v),
                  },
                  u
                )
              ),
            }),
            g$1 && jsx(no, { isOpen: p, onSubmit: x, onClose: () => c(false), selectedText: o }),
          ],
        });
  };
function Mn() {
  let [e, t] = useState(false),
    [o, r] = useState({ x: 0, y: 0 }),
    [i, n] = useState(''),
    [a, g] = useState(),
    s = useCallback((f, m, p) => {
      (f.preventDefault(), r({ x: f.clientX, y: f.clientY }), n(m), g(p), t(true));
    }, []),
    l = useCallback(() => {
      t(false);
    }, []);
  return {
    isOpen: e,
    position: o,
    selectedText: i,
    selectionContext: a,
    openMenu: s,
    closeMenu: l,
  };
}
function On(e) {
  return {
    rewrite: 'Ctrl+Shift+R',
    summarize: 'Ctrl+Shift+S',
    translate: 'Ctrl+Shift+T',
    fixGrammar: 'Ctrl+Shift+G',
  }[e];
}
function _n(e, t, o) {
  return !(!t || t.trim().length === 0);
}
function Nn() {
  return [...g];
}
function Fn() {
  return [
    'askAI',
    'rewrite',
    'expand',
    'summarize',
    'translate',
    'explain',
    'fixGrammar',
    'makeFormal',
    'makeCasual',
    'custom',
  ];
}
var io = () =>
    jsx('svg', {
      width: '16',
      height: '16',
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: jsx('path', {
        d: 'M3 8l4 4 6-8',
        stroke: 'currentColor',
        strokeWidth: '2',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
    }),
  ct = () =>
    jsx('svg', {
      width: '16',
      height: '16',
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: jsx('path', {
        d: 'M4 4l8 8M12 4l-8 8',
        stroke: 'currentColor',
        strokeWidth: '2',
        strokeLinecap: 'round',
      }),
    }),
  ao = () =>
    jsxs('svg', {
      width: '16',
      height: '16',
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        jsx('path', {
          d: 'M2 8a6 6 0 0111.318-2.828M14 8a6 6 0 01-11.318 2.828',
          stroke: 'currentColor',
          strokeWidth: '1.5',
          strokeLinecap: 'round',
        }),
        jsx('path', {
          d: 'M13 2v4h-4M3 14v-4h4',
          stroke: 'currentColor',
          strokeWidth: '1.5',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
        }),
      ],
    }),
  so = () =>
    jsx('svg', {
      width: '16',
      height: '16',
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: jsx('path', {
        d: 'M11 2l3 3-9 9H2v-3l9-9z',
        stroke: 'currentColor',
        strokeWidth: '1.5',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
    }),
  lo = () =>
    jsxs('svg', {
      width: '20',
      height: '20',
      viewBox: '0 0 20 20',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      style: { animation: 'spin 1s linear infinite' },
      children: [
        jsx('circle', {
          cx: '10',
          cy: '10',
          r: '8',
          stroke: 'var(--doc-border)',
          strokeWidth: '2',
          fill: 'none',
        }),
        jsx('path', {
          d: 'M10 2a8 8 0 018 8',
          stroke: 'var(--doc-primary)',
          strokeWidth: '2',
          strokeLinecap: 'round',
          fill: 'none',
        }),
        jsx('style', {
          children: `
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    `,
        }),
      ],
    });
function co(e, t) {
  let o = [],
    r = e.split(/(\s+)/),
    i = t.split(/(\s+)/),
    n = 0,
    a = 0;
  for (; n < r.length || a < i.length; ) {
    if (n >= r.length) {
      o.push({ type: 'added', text: i.slice(a).join('') });
      break;
    }
    if (a >= i.length) {
      o.push({ type: 'removed', text: r.slice(n).join('') });
      break;
    }
    if (r[n] === i[a]) (o.push({ type: 'same', text: r[n] }), n++, a++);
    else {
      let s = i.indexOf(r[n], a),
        l = r.indexOf(i[a], n);
      s === -1 && l === -1
        ? (o.push({ type: 'removed', text: r[n] }), o.push({ type: 'added', text: i[a] }), n++, a++)
        : l !== -1 && (s === -1 || l - n <= s - a)
          ? (o.push({ type: 'added', text: i[a] }), a++)
          : (o.push({ type: 'removed', text: r[n] }), n++);
    }
  }
  let g = [];
  for (let s of o)
    g.length > 0 && g[g.length - 1].type === s.type ? (g[g.length - 1].text += s.text) : g.push(s);
  return g;
}
var po = ({ original: e, modified: t }) => {
    let o = co(e, t);
    return jsx('div', {
      className: 'docx-response-diff',
      style: { lineHeight: 1.6, fontSize: '14px' },
      children: o.map((r, i) => {
        let n = {};
        switch (r.type) {
          case 'removed':
            n = { textDecoration: 'line-through', color: '#d32f2f', backgroundColor: '#ffebee' };
            break;
          case 'added':
            n = { color: '#2e7d32', backgroundColor: '#e8f5e9' };
            break;
        }
        return jsx('span', { style: n, children: r.text }, i);
      }),
    });
  },
  Un = ({
    originalText: e$1,
    response: t,
    action: o,
    isLoading: r,
    error: i,
    onAccept: n,
    onReject: a,
    onRetry: g,
    allowEdit: s = true,
    showDiff: l = true,
    className: f = '',
    position: m,
  }) => {
    let [p, c] = useState(false),
      [h, b] = useState(''),
      d = useRef(null),
      x = useRef(null),
      u = t?.newText || '';
    (useEffect(() => {
      u && b(u);
    }, [u]),
      useEffect(() => {
        p && d.current && (d.current.focus(), d.current.select());
      }, [p]),
      useEffect(() => {
        let I = (A) => {
          A.key === 'Escape'
            ? p
              ? (c(false), b(u))
              : a()
            : A.key === 'Enter' && (A.metaKey || A.ctrlKey) && (A.preventDefault(), v());
        };
        return (
          document.addEventListener('keydown', I),
          () => document.removeEventListener('keydown', I)
        );
      }, [p, u, a]));
    let v = useCallback(() => {
        n(p ? h : u);
      }, [p, h, u, n]),
      C = useCallback(() => {
        c(true);
      }, []),
      R = useCallback(() => {
        (c(false), b(u));
      }, [u]),
      H = {
        position: m ? 'fixed' : 'relative',
        ...(m && { left: m.x, top: m.y }),
        width: '400px',
        maxWidth: '90vw',
        maxHeight: '80vh',
        background: 'white',
        border: '1px solid var(--doc-border-light)',
        borderRadius: '8px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
        zIndex: 1e4,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      };
    return r
      ? jsx('div', {
          ref: x,
          className: `docx-response-preview docx-response-preview-loading ${f}`,
          style: H,
          children: jsxs('div', {
            style: {
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
            },
            children: [
              jsx(lo, {}),
              jsxs('div', {
                style: { color: 'var(--doc-text-muted)', fontSize: '14px' },
                children: [e(o), '...'],
              }),
            ],
          }),
        })
      : i
        ? jsx('div', {
            ref: x,
            className: `docx-response-preview docx-response-preview-error ${f}`,
            style: H,
            children: jsxs('div', {
              style: { padding: '16px' },
              children: [
                jsx('div', {
                  style: {
                    padding: '12px',
                    background: 'var(--doc-error-bg)',
                    borderRadius: '4px',
                    color: 'var(--doc-error)',
                    fontSize: '13px',
                    marginBottom: '16px',
                  },
                  children: i,
                }),
                jsxs('div', {
                  style: { display: 'flex', gap: '8px', justifyContent: 'flex-end' },
                  children: [
                    g &&
                      jsxs('button', {
                        type: 'button',
                        onClick: g,
                        style: {
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          padding: '8px 16px',
                          border: '1px solid var(--doc-border-light)',
                          borderRadius: '4px',
                          background: 'white',
                          cursor: 'pointer',
                          fontSize: '13px',
                        },
                        children: [jsx(ao, {}), 'Retry'],
                      }),
                    jsx('button', {
                      type: 'button',
                      onClick: a,
                      style: {
                        padding: '8px 16px',
                        border: 'none',
                        borderRadius: '4px',
                        background: 'var(--doc-border)',
                        cursor: 'pointer',
                        fontSize: '13px',
                      },
                      children: 'Close',
                    }),
                  ],
                }),
              ],
            }),
          })
        : !t || !u
          ? null
          : jsxs('div', {
              ref: x,
              className: `docx-response-preview ${f}`,
              style: H,
              children: [
                jsxs('div', {
                  style: {
                    padding: '12px 16px',
                    borderBottom: '1px solid var(--doc-border)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  },
                  children: [
                    jsxs('div', {
                      style: { fontWeight: 500, fontSize: '14px', color: 'var(--doc-text)' },
                      children: [e(o), ' Result'],
                    }),
                    jsx('button', {
                      type: 'button',
                      onClick: a,
                      style: {
                        display: 'flex',
                        padding: '4px',
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                        color: 'var(--doc-text-muted)',
                      },
                      title: 'Close (Esc)',
                      children: jsx(ct, {}),
                    }),
                  ],
                }),
                jsxs('div', {
                  style: { padding: '16px', overflowY: 'auto', flex: 1 },
                  children: [
                    p
                      ? jsxs('div', {
                          children: [
                            jsx('div', {
                              style: {
                                marginBottom: '8px',
                                fontSize: '12px',
                                color: 'var(--doc-text-muted)',
                              },
                              children: 'Edit the result before accepting:',
                            }),
                            jsx('textarea', {
                              ref: d,
                              value: h,
                              onChange: (I) => b(I.target.value),
                              style: {
                                width: '100%',
                                minHeight: '120px',
                                padding: '12px',
                                border: '1px solid var(--doc-primary)',
                                borderRadius: '4px',
                                fontSize: '14px',
                                lineHeight: 1.6,
                                resize: 'vertical',
                                fontFamily: 'inherit',
                              },
                            }),
                          ],
                        })
                      : l
                        ? jsxs('div', {
                            children: [
                              jsx('div', {
                                style: {
                                  marginBottom: '8px',
                                  fontSize: '12px',
                                  color: 'var(--doc-text-muted)',
                                },
                                children: 'Changes:',
                              }),
                              jsx(po, { original: e$1, modified: u }),
                            ],
                          })
                        : jsxs('div', {
                            children: [
                              jsx('div', {
                                style: {
                                  marginBottom: '8px',
                                  fontSize: '12px',
                                  color: 'var(--doc-text-muted)',
                                },
                                children: 'Original:',
                              }),
                              jsx('div', {
                                style: {
                                  padding: '8px 12px',
                                  background: 'var(--doc-bg-subtle)',
                                  borderRadius: '4px',
                                  marginBottom: '16px',
                                  textDecoration: 'line-through',
                                  color: 'var(--doc-text-placeholder)',
                                  fontSize: '13px',
                                },
                                children: e$1,
                              }),
                              jsx('div', {
                                style: {
                                  marginBottom: '8px',
                                  fontSize: '12px',
                                  color: 'var(--doc-text-muted)',
                                },
                                children: 'New:',
                              }),
                              jsx('div', {
                                style: {
                                  padding: '8px 12px',
                                  background: '#e8f5e9',
                                  borderRadius: '4px',
                                  color: '#2e7d32',
                                  fontSize: '13px',
                                },
                                children: u,
                              }),
                            ],
                          }),
                    t.warnings &&
                      t.warnings.length > 0 &&
                      jsx('div', {
                        style: {
                          marginTop: '16px',
                          padding: '8px 12px',
                          background: 'var(--doc-warning-bg)',
                          borderRadius: '4px',
                          fontSize: '12px',
                          color: 'var(--doc-warning)',
                        },
                        children: t.warnings.map((I, A) => jsx('div', { children: I }, A)),
                      }),
                  ],
                }),
                jsxs('div', {
                  style: {
                    padding: '12px 16px',
                    borderTop: '1px solid var(--doc-border)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  },
                  children: [
                    jsxs('div', {
                      children: [
                        s &&
                          !p &&
                          jsxs('button', {
                            type: 'button',
                            onClick: C,
                            style: {
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                              padding: '6px 12px',
                              border: '1px solid var(--doc-border-light)',
                              borderRadius: '4px',
                              background: 'white',
                              cursor: 'pointer',
                              fontSize: '12px',
                              color: 'var(--doc-text-muted)',
                            },
                            children: [jsx(so, {}), 'Edit'],
                          }),
                        p &&
                          jsx('button', {
                            type: 'button',
                            onClick: R,
                            style: {
                              padding: '6px 12px',
                              border: '1px solid var(--doc-border-light)',
                              borderRadius: '4px',
                              background: 'white',
                              cursor: 'pointer',
                              fontSize: '12px',
                              color: 'var(--doc-text-muted)',
                            },
                            children: 'Cancel Edit',
                          }),
                      ],
                    }),
                    jsxs('div', {
                      style: { display: 'flex', gap: '8px' },
                      children: [
                        jsxs('button', {
                          type: 'button',
                          onClick: a,
                          style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            padding: '8px 16px',
                            border: '1px solid var(--doc-border-light)',
                            borderRadius: '4px',
                            background: 'white',
                            cursor: 'pointer',
                            fontSize: '13px',
                            color: 'var(--doc-text-muted)',
                          },
                          children: [jsx(ct, {}), 'Reject'],
                        }),
                        jsxs('button', {
                          type: 'button',
                          onClick: v,
                          style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            padding: '8px 16px',
                            border: 'none',
                            borderRadius: '4px',
                            background: 'var(--doc-primary)',
                            cursor: 'pointer',
                            fontSize: '13px',
                            color: 'white',
                          },
                          children: [jsx(io, {}), 'Accept'],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
  };
function Kn() {
  let [e, t] = useState({
      isVisible: false,
      originalText: '',
      response: null,
      action: 'rewrite',
      isLoading: false,
    }),
    o = useCallback((a, g, s) => {
      t({
        isVisible: true,
        originalText: a,
        response: null,
        action: g,
        isLoading: true,
        position: s,
      });
    }, []),
    r = useCallback((a) => {
      t((g) => ({ ...g, response: a, isLoading: false }));
    }, []),
    i = useCallback((a) => {
      t((g) => ({ ...g, error: a, isLoading: false }));
    }, []),
    n = useCallback(() => {
      t((a) => ({ ...a, isVisible: false }));
    }, []);
  return { state: e, showPreview: o, setResponse: r, setError: i, hidePreview: n };
}
function $n(e, t) {
  return { success: true, newText: e, warnings: t };
}
function Vn(e) {
  return { success: false, error: e };
}
var dt = [
    { action: 'cut', label: 'Cut', shortcut: 'Ctrl+X' },
    { action: 'copy', label: 'Copy', shortcut: 'Ctrl+C' },
    { action: 'paste', label: 'Paste', shortcut: 'Ctrl+V' },
    {
      action: 'pasteAsPlainText',
      label: 'Paste as Plain Text',
      shortcut: 'Ctrl+Shift+V',
      dividerAfter: true,
    },
    { action: 'delete', label: 'Delete', shortcut: 'Del', dividerAfter: true },
    { action: 'selectAll', label: 'Select All', shortcut: 'Ctrl+A' },
  ],
  go = () =>
    jsxs('svg', {
      width: '16',
      height: '16',
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        jsx('circle', { cx: '4', cy: '12', r: '2', stroke: 'currentColor', strokeWidth: '1.5' }),
        jsx('circle', { cx: '12', cy: '12', r: '2', stroke: 'currentColor', strokeWidth: '1.5' }),
        jsx('path', {
          d: 'M5.5 10.5L10.5 3M10.5 10.5L5.5 3',
          stroke: 'currentColor',
          strokeWidth: '1.5',
          strokeLinecap: 'round',
        }),
      ],
    }),
  mo = () =>
    jsxs('svg', {
      width: '16',
      height: '16',
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        jsx('rect', {
          x: '5',
          y: '5',
          width: '8',
          height: '9',
          rx: '1',
          stroke: 'currentColor',
          strokeWidth: '1.5',
        }),
        jsx('path', {
          d: 'M11 5V3a1 1 0 00-1-1H4a1 1 0 00-1 1v8a1 1 0 001 1h2',
          stroke: 'currentColor',
          strokeWidth: '1.5',
        }),
      ],
    }),
  xo = () =>
    jsxs('svg', {
      width: '16',
      height: '16',
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        jsx('rect', {
          x: '3',
          y: '3',
          width: '10',
          height: '11',
          rx: '1',
          stroke: 'currentColor',
          strokeWidth: '1.5',
        }),
        jsx('path', {
          d: 'M6 3V2a1 1 0 011-1h2a1 1 0 011 1v1',
          stroke: 'currentColor',
          strokeWidth: '1.5',
        }),
        jsx('path', {
          d: 'M6 8h4M6 11h4',
          stroke: 'currentColor',
          strokeWidth: '1.5',
          strokeLinecap: 'round',
        }),
      ],
    }),
  fo = () =>
    jsx('svg', {
      width: '16',
      height: '16',
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: jsx('path', {
        d: 'M4 4l8 8M12 4l-8 8',
        stroke: 'currentColor',
        strokeWidth: '1.5',
        strokeLinecap: 'round',
      }),
    }),
  ho = () =>
    jsxs('svg', {
      width: '16',
      height: '16',
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        jsx('rect', {
          x: '2',
          y: '2',
          width: '12',
          height: '12',
          rx: '1',
          stroke: 'currentColor',
          strokeWidth: '1.5',
          strokeDasharray: '2 2',
        }),
        jsx('rect', {
          x: '4',
          y: '4',
          width: '8',
          height: '8',
          fill: 'currentColor',
          opacity: '0.3',
        }),
      ],
    });
function bo(e) {
  switch (e) {
    case 'cut':
      return jsx(go, {});
    case 'copy':
      return jsx(mo, {});
    case 'paste':
    case 'pasteAsPlainText':
      return jsx(xo, {});
    case 'delete':
      return jsx(fo, {});
    case 'selectAll':
      return jsx(ho, {});
    default:
      return null;
  }
}
var vo = ({ item: e, onClick: t, isHighlighted: o, onMouseEnter: r }) =>
    e.action === 'separator'
      ? jsx('div', {
          className: 'docx-text-context-menu-separator',
          style: { height: '1px', backgroundColor: 'var(--doc-border)', margin: '4px 12px' },
        })
      : jsxs(Fragment, {
          children: [
            jsxs('button', {
              type: 'button',
              className: `docx-text-context-menu-item ${o ? 'docx-text-context-menu-item-highlighted' : ''} ${e.disabled ? 'docx-text-context-menu-item-disabled' : ''}`,
              onClick: t,
              onMouseEnter: r,
              disabled: e.disabled,
              role: 'menuitem',
              'aria-disabled': e.disabled,
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                width: '100%',
                padding: '8px 12px',
                border: 'none',
                background: o && !e.disabled ? 'var(--doc-primary-light)' : 'transparent',
                cursor: e.disabled ? 'not-allowed' : 'pointer',
                fontSize: '13px',
                color: e.disabled ? 'var(--doc-text-subtle)' : 'var(--doc-text)',
                textAlign: 'left',
                opacity: e.disabled ? 0.6 : 1,
              },
              children: [
                jsx('span', {
                  style: {
                    display: 'flex',
                    color: e.disabled ? 'var(--doc-border)' : 'var(--doc-text-muted)',
                  },
                  children: bo(e.action),
                }),
                jsx('span', { style: { flex: 1 }, children: e.label }),
                e.shortcut &&
                  jsx('span', {
                    style: {
                      fontSize: '11px',
                      color: 'var(--doc-text-subtle)',
                      fontFamily: 'monospace',
                    },
                    children: e.shortcut,
                  }),
              ],
            }),
            e.dividerAfter &&
              jsx('div', {
                className: 'docx-text-context-menu-separator',
                style: { height: '1px', backgroundColor: 'var(--doc-border)', margin: '4px 12px' },
              }),
          ],
        }),
  Qn = ({
    isOpen: e,
    position: t,
    hasSelection: o,
    isEditable: r,
    hasClipboardContent: i = true,
    onAction: n,
    onClose: a,
    items: g,
    className: s = '',
  }) => {
    let l = useRef(null),
      [f, m] = useState(0),
      p = (g || dt).map((d) => {
        let x = (() => {
          if (d.disabled !== void 0) return d.disabled;
          switch (d.action) {
            case 'cut':
            case 'copy':
            case 'delete':
              return !o;
            case 'paste':
            case 'pasteAsPlainText':
              return !r || !i;
            default:
              return false;
          }
        })();
        return { ...d, disabled: x };
      }),
      c = p.filter((d) => d.action !== 'separator');
    (useEffect(() => {
      if (!e) return;
      let d = (u) => {
          l.current && !l.current.contains(u.target) && a();
        },
        x = setTimeout(() => {
          document.addEventListener('mousedown', d);
        }, 0);
      return () => {
        (clearTimeout(x), document.removeEventListener('mousedown', d));
      };
    }, [e, a]),
      useEffect(() => {
        if (!e) return;
        let d = (x) => {
          switch (x.key) {
            case 'Escape':
              (x.preventDefault(), a());
              break;
            case 'ArrowDown':
              (x.preventDefault(),
                m((v) => {
                  let C = (v + 1) % c.length;
                  for (; c[C]?.disabled && C !== v; ) C = (C + 1) % c.length;
                  return C;
                }));
              break;
            case 'ArrowUp':
              (x.preventDefault(),
                m((v) => {
                  let C = (v - 1 + c.length) % c.length;
                  for (; c[C]?.disabled && C !== v; ) C = (C - 1 + c.length) % c.length;
                  return C;
                }));
              break;
            case 'Enter':
              x.preventDefault();
              let u = c[f];
              u && !u.disabled && (n(u.action), a());
              break;
          }
        };
        return (
          document.addEventListener('keydown', d),
          () => document.removeEventListener('keydown', d)
        );
      }, [e, f, c, n, a]),
      useEffect(() => {
        e && m(0);
      }, [e]));
    let h = useCallback(() => {
        let x = p.length * 36 + 16,
          u = t.x,
          v = t.y;
        return (
          typeof window < 'u' &&
            (u + 220 > window.innerWidth && (u = window.innerWidth - 220 - 10),
            v + x > window.innerHeight && (v = window.innerHeight - x - 10),
            u < 10 && (u = 10),
            v < 10 && (v = 10)),
          {
            position: 'fixed',
            top: v,
            left: u,
            minWidth: 220,
            background: 'white',
            border: '1px solid var(--doc-border-light)',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
            zIndex: 1e4,
            padding: '4px 0',
            overflow: 'hidden',
          }
        );
      }, [t, p.length]),
      b = (d) => {
        d.disabled || (n(d.action), a());
      };
    return e
      ? jsx('div', {
          ref: l,
          className: `docx-text-context-menu ${s}`,
          style: h(),
          role: 'menu',
          'aria-label': 'Text editing menu',
          children: p.map((d, x) => {
            let u = c.findIndex((v) => v === d);
            return jsx(
              vo,
              {
                item: d,
                onClick: () => b(d),
                isHighlighted: u === f,
                onMouseEnter: () => {
                  u >= 0 && !d.disabled && m(u);
                },
              },
              `${d.action}-${x}`
            );
          }),
        })
      : null;
  };
function Jn(e = {}) {
  let { enabled: t = true, isEditable: o = true, containerRef: r, onAction: i } = e,
    [n, a] = useState(false),
    [g, s] = useState({ x: 0, y: 0 }),
    [l, f] = useState(false),
    m = useCallback(() => {
      let d = window.getSelection(),
        x = d && !d.isCollapsed && d.toString().length > 0;
      return (f(!!x), !!x);
    }, []),
    p = useCallback(
      (d) => {
        t &&
          (d.preventDefault(),
          d.stopPropagation(),
          m(),
          s({ x: d.clientX, y: d.clientY }),
          a(true));
      },
      [t, m]
    ),
    c = useCallback(() => {
      a(false);
    }, []),
    h = useCallback(
      (d) => {
        switch ((c(), d)) {
          case 'cut':
            document.execCommand('cut');
            break;
          case 'copy':
            document.execCommand('copy');
            break;
          case 'paste':
            document.execCommand('paste');
            break;
          case 'pasteAsPlainText':
            navigator.clipboard
              .readText?.()
              .then((x) => {
                document.execCommand('insertText', false, x);
              })
              .catch(() => {
                document.execCommand('paste');
              });
            break;
          case 'delete':
            document.execCommand('delete');
            break;
          case 'selectAll':
            document.execCommand('selectAll');
            break;
        }
        i?.(d);
      },
      [c, i]
    ),
    b = useCallback(
      (d) => {
        p(d);
      },
      [p]
    );
  return (
    useEffect(() => {
      if (!n) return;
      let d = (x) => {
        x.key === 'Escape' && c();
      };
      return (
        document.addEventListener('keydown', d),
        () => document.removeEventListener('keydown', d)
      );
    }, [n, c]),
    {
      isOpen: n,
      position: g,
      hasSelection: l,
      openMenu: p,
      closeMenu: c,
      handleAction: h,
      onContextMenu: b,
    }
  );
}
function qn(e) {
  return {
    cut: 'Cut',
    copy: 'Copy',
    paste: 'Paste',
    pasteAsPlainText: 'Paste as Plain Text',
    selectAll: 'Select All',
    delete: 'Delete',
    separator: '',
  }[e];
}
function ei(e) {
  return {
    cut: 'Ctrl+X',
    copy: 'Ctrl+C',
    paste: 'Ctrl+V',
    pasteAsPlainText: 'Ctrl+Shift+V',
    selectAll: 'Ctrl+A',
    delete: 'Del',
    separator: '',
  }[e];
}
function ti() {
  return [...dt];
}
function oi(e, t, o) {
  switch (e) {
    case 'cut':
    case 'copy':
    case 'delete':
      return t;
    case 'paste':
    case 'pasteAsPlainText':
      return o;
    case 'selectAll':
      return true;
    default:
      return true;
  }
}
var Co = [
    { name: 'Black', hex: '000000' },
    { name: 'Dark Red', hex: '7F0000' },
    { name: 'Dark Orange', hex: 'FF6600' },
    { name: 'Dark Yellow', hex: '808000' },
    { name: 'Dark Green', hex: '006400' },
    { name: 'Dark Teal', hex: '008080' },
    { name: 'Dark Blue', hex: '000080' },
    { name: 'Dark Purple', hex: '4B0082' },
    { name: 'Dark Gray', hex: '404040' },
    { name: 'Gray', hex: '808080' },
    { name: 'Red', hex: 'FF0000' },
    { name: 'Orange', hex: 'FF9900' },
    { name: 'Yellow', hex: 'FFFF00' },
    { name: 'Light Green', hex: '00FF00' },
    { name: 'Cyan', hex: '00FFFF' },
    { name: 'Light Blue', hex: '0066FF' },
    { name: 'Blue', hex: '0000FF' },
    { name: 'Purple', hex: '9900FF' },
    { name: 'Magenta', hex: 'FF00FF' },
    { name: 'Pink', hex: 'FF66FF' },
    { name: 'Light Red', hex: 'FFCCCC' },
    { name: 'Light Orange', hex: 'FFE5CC' },
    { name: 'Light Yellow', hex: 'FFFFCC' },
    { name: 'Pale Green', hex: 'CCFFCC' },
    { name: 'Light Cyan', hex: 'CCFFFF' },
    { name: 'Sky Blue', hex: 'CCE5FF' },
    { name: 'Light Blue 2', hex: 'CCCCFF' },
    { name: 'Lavender', hex: 'E5CCFF' },
    { name: 'Light Magenta', hex: 'FFCCFF' },
    { name: 'White', hex: 'FFFFFF' },
  ],
  So = [
    { name: 'No Color', hex: '' },
    { name: 'Yellow', hex: 'FFFF00' },
    { name: 'Bright Green', hex: '00FF00' },
    { name: 'Cyan', hex: '00FFFF' },
    { name: 'Magenta', hex: 'FF00FF' },
    { name: 'Blue', hex: '0000FF' },
    { name: 'Red', hex: 'FF0000' },
    { name: 'Dark Blue', hex: '00008B' },
    { name: 'Teal', hex: '008080' },
    { name: 'Green', hex: '008000' },
    { name: 'Violet', hex: '800080' },
    { name: 'Dark Red', hex: '8B0000' },
    { name: 'Dark Yellow', hex: '808000' },
    { name: 'Gray 50%', hex: '808080' },
    { name: 'Gray 25%', hex: 'C0C0C0' },
    { name: 'Black', hex: '000000' },
  ],
  wo = { position: 'relative', display: 'inline-block' },
  Ae = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '32px',
    padding: '2px 6px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'background-color 0.1s',
    color: 'var(--doc-text-muted)',
  },
  ko = { ...Ae, backgroundColor: 'var(--doc-bg-hover)' },
  To = { ...Ae, backgroundColor: 'var(--doc-primary-light)', color: 'var(--doc-primary)' },
  Eo = { ...Ae, cursor: 'default', opacity: 0.38 },
  Io = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0',
  },
  Po = { width: '14px', height: '3px', borderRadius: '0', marginTop: '-2px' },
  Lo = { display: 'grid', gap: '2px' },
  De = {
    width: '20px',
    height: '20px',
    border: '1px solid #ccc',
    borderRadius: '2px',
    cursor: 'pointer',
    transition: 'transform 0.1s, border-color 0.1s',
    padding: 0,
  },
  Ro = { ...De, transform: 'scale(1.1)', borderColor: '#333', zIndex: 1 },
  Ao = { ...De, borderWidth: '2px', borderColor: '#0066cc', boxShadow: '0 0 0 1px #0066cc' },
  Do = { ...De, position: 'relative', backgroundColor: '#fff' },
  Mo = {
    position: 'absolute',
    top: '50%',
    left: '-2px',
    right: '-2px',
    height: '2px',
    backgroundColor: '#ff0000',
    transform: 'rotate(-45deg)',
  },
  ut = { fontSize: '11px', color: '#666', marginBottom: '4px', marginTop: '8px' },
  Oo = { marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #eee' },
  _o = { display: 'flex', alignItems: 'center', gap: '8px' },
  No = {
    width: '70px',
    height: '24px',
    padding: '2px 6px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    fontSize: '12px',
  },
  Fo = {
    height: '24px',
    padding: '0 8px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    backgroundColor: '#f5f5f5',
    fontSize: '12px',
    cursor: 'pointer',
  },
  Bo = () => jsx(d, { name: 'format_color_text', size: 18 }),
  zo = () => jsx(d, { name: 'ink_highlighter', size: 18 }),
  Wo = () => jsx(d, { name: 'arrow_drop_down', size: 14 });
function Yo({ colors: e, selectedColor: t, onSelect: o, columns: r = 10, cellSize: i = 20 }) {
  let [n, a] = useState(null),
    g = { ...Lo, gridTemplateColumns: `repeat(${r}, ${i}px)` };
  return jsx('div', {
    style: g,
    className: 'docx-color-grid',
    role: 'grid',
    children: e.map((s, l) => {
      let f = t?.toUpperCase() === s.hex.toUpperCase(),
        m = n === l,
        p = s.hex === '',
        c = { ...(f ? Ao : m ? Ro : De), width: `${i}px`, height: `${i}px` };
      return (
        p || (c.backgroundColor = `#${s.hex}`),
        jsx(
          'button',
          {
            type: 'button',
            style: p ? { ...Do, ...c } : c,
            onClick: () => o(s),
            onMouseDown: (h) => h.preventDefault(),
            onMouseEnter: () => a(l),
            onMouseLeave: () => a(null),
            title: s.name,
            role: 'gridcell',
            'aria-label': s.name,
            'aria-selected': f,
            children: p && jsx('span', { style: Mo }),
          },
          `${s.hex}-${l}`
        )
      );
    }),
  });
}
function ci({
  value: e,
  onChange: t,
  type: o = 'text',
  theme: r,
  colors: i,
  disabled: n = false,
  className: a,
  style: g,
  title: s,
  children: l,
  dropdownWidth: f = 230,
  showNoColor: m = true,
  showMoreColors: p = true,
}) {
  let [c, h] = useState(false),
    [b$1, d] = useState(false),
    [x, u] = useState(''),
    v = useCallback(() => h(false), []),
    { containerRef: C, dropdownRef: R, dropdownStyle: H } = e$1({ isOpen: c, onClose: v }),
    I = useMemo(() => {
      if (o === 'highlight') return So;
      let M = [...Co];
      return (m && M.unshift({ name: 'Automatic', hex: '000000' }), M);
    }, [o, m]),
    A = i || I,
    N = useMemo(
      () =>
        e
          ? e.startsWith('#')
            ? e
            : o === 'highlight'
              ? b(e) || 'transparent'
              : `#${e}`
          : o === 'text'
            ? '#000000'
            : 'transparent',
      [e, o]
    ),
    y = useCallback(
      (M) => {
        (t?.(M.hex), h(false));
      },
      [t]
    ),
    U = useCallback(() => {
      let M = x.replace(/^#/, '').toUpperCase();
      /^[0-9A-F]{6}$/i.test(M) && (t?.(M), h(false), u(''));
    }, [x, t]),
    T = useCallback(() => {
      n || h((M) => !M);
    }, [n]),
    P = n ? Eo : c ? To : b$1 ? ko : Ae,
    te = o === 'text' ? 'Font Color' : 'Text Highlight Color';
  return jsxs('div', {
    ref: C,
    className: `docx-color-picker docx-color-picker-${o} ${a || ''}`,
    style: { ...wo, ...g },
    children: [
      jsxs('button', {
        type: 'button',
        className: 'docx-color-picker-button',
        style: P,
        onClick: T,
        onMouseDown: (M) => M.preventDefault(),
        onMouseEnter: () => d(true),
        onMouseLeave: () => d(false),
        disabled: n,
        title: s || te,
        'aria-label': s || te,
        'aria-haspopup': 'true',
        'aria-expanded': c,
        children: [
          l ||
            jsxs('div', {
              style: Io,
              children: [
                o === 'text' ? jsx(Bo, {}) : jsx(zo, {}),
                jsx('div', {
                  style: {
                    ...Po,
                    backgroundColor: N === 'transparent' ? '#fff' : N,
                    border: N === 'transparent' ? '1px solid #ccc' : 'none',
                  },
                }),
              ],
            }),
          jsx(Wo, {}),
        ],
      }),
      c &&
        jsxs('div', {
          ref: R,
          className: 'docx-color-picker-dropdown',
          style: {
            ...H,
            padding: '8px',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            width: f,
          },
          role: 'dialog',
          'aria-label': `${o === 'text' ? 'Font' : 'Highlight'} color picker`,
          onMouseDown: (M) => M.preventDefault(),
          children: [
            o === 'highlight' && jsx('div', { style: ut, children: 'Highlight Colors' }),
            jsx(Yo, {
              colors: A,
              selectedColor: e,
              onSelect: y,
              columns: o === 'highlight' ? 8 : 10,
            }),
            p &&
              o === 'text' &&
              jsxs('div', {
                style: Oo,
                children: [
                  jsx('div', { style: ut, children: 'Custom Color' }),
                  jsxs('div', {
                    style: _o,
                    children: [
                      jsx('span', { style: { fontSize: '12px', color: '#666' }, children: '#' }),
                      jsx('input', {
                        type: 'text',
                        style: No,
                        value: x,
                        onChange: (M) => u(M.target.value.replace(/[^0-9A-Fa-f]/g, '').slice(0, 6)),
                        onKeyDown: (M) => {
                          M.key === 'Enter' && U();
                        },
                        placeholder: 'FF0000',
                        maxLength: 6,
                        'aria-label': 'Custom hex color',
                      }),
                      jsx('button', {
                        type: 'button',
                        style: Fo,
                        onClick: U,
                        disabled: !/^[0-9A-Fa-f]{6}$/.test(x),
                        children: 'Apply',
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
    ],
  });
}
var Ho = {
  includeHeaders: true,
  includeFooters: true,
  includePageNumbers: true,
  pageRange: null,
  scale: 1,
  printBackground: true,
  margins: 'default',
};
function ui({
  onPrint: e,
  disabled: t = false,
  label: o = 'Print',
  className: r = '',
  style: i,
  showIcon: n = true,
  compact: a = false,
}) {
  let g = {
    display: 'flex',
    alignItems: 'center',
    gap: a ? '4px' : '6px',
    padding: a ? '4px 8px' : '6px 12px',
    fontSize: a ? '13px' : '14px',
    backgroundColor: 'white',
    border: '1px solid var(--doc-border)',
    borderRadius: '4px',
    cursor: t ? 'not-allowed' : 'pointer',
    color: t ? 'var(--doc-text-muted)' : 'var(--doc-text)',
    opacity: t ? 0.6 : 1,
    transition: 'background-color 0.15s, border-color 0.15s',
    ...i,
  };
  return jsxs('button', {
    className: `docx-print-button ${r}`.trim(),
    style: g,
    onClick: e,
    disabled: t,
    'aria-label': o,
    title: o,
    children: [n && jsx(Uo, { size: a ? 14 : 16 }), !a && jsx('span', { children: o })],
  });
}
function gi() {
  return jsx('style', {
    children: `
        @media print {
          /* Hide everything except print content */
          body * {
            visibility: hidden;
          }

          .docx-print-pages,
          .docx-print-pages * {
            visibility: visible;
          }

          .docx-print-pages {
            position: absolute;
            left: 0;
            top: 0;
          }

          /* Remove shadows and margins in print */
          .docx-print-page {
            box-shadow: none !important;
            margin: 0 !important;
            page-break-after: always;
            page-break-inside: avoid;
          }

          /* Ensure images print */
          img {
            max-width: 100%;
            page-break-inside: avoid;
          }

          /* Ensure tables don't break badly */
          table {
            page-break-inside: avoid;
          }

          tr {
            page-break-inside: avoid;
          }

          /* Keep headings with content */
          h1, h2, h3, h4, h5, h6 {
            page-break-after: avoid;
          }

          /* Avoid orphan lines */
          p {
            orphans: 3;
            widows: 3;
          }
        }

        @page {
          margin: 0;
          size: auto;
        }
      `,
  });
}
function Uo({ size: e = 18 }) {
  return jsxs('svg', {
    width: e,
    height: e,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    children: [
      jsx('polyline', { points: '6 9 6 2 18 2 18 9' }),
      jsx('path', {
        d: 'M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2',
      }),
      jsx('rect', { x: '6', y: '14', width: '12', height: '8' }),
    ],
  });
}
function mi() {
  window.print();
}
function xi(e = 'Document', t) {
  let o = window.open('', '_blank');
  return o
    ? (o.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${e}</title>
      <style>
        @media print {
          body {
            margin: 0;
            padding: 0;
          }
          @page {
            margin: 0;
          }
        }
      </style>
    </head>
    <body>
      ${t}
    </body>
    </html>
  `),
      o.document.close(),
      o)
    : null;
}
function fi() {
  return { ...Ho };
}
function hi(e, t) {
  if (!e || !e.trim()) return null;
  let o = e.trim();
  if (/^\d+$/.test(o)) {
    let i = parseInt(o, 10);
    return i >= 1 && i <= t ? { start: i, end: i } : null;
  }
  let r = o.match(/^(\d+)-(\d+)$/);
  if (r) {
    let i = parseInt(r[1], 10),
      n = parseInt(r[2], 10);
    return i >= 1 && n <= t && i <= n ? { start: i, end: n } : null;
  }
  return null;
}
function bi(e, t) {
  return e
    ? e.start === e.end
      ? `Page ${e.start}`
      : `Pages ${e.start}-${e.end}`
    : `All (${t} pages)`;
}
function vi() {
  return typeof window < 'u' && typeof window.print == 'function';
}
function Pi({ onAction: e, disabled: t = false, canMerge: o = false, canSplit: r = false }) {
  let i$1 = useCallback((l) => {
      (l.preventDefault(), l.stopPropagation());
    }, []),
    n = useCallback(() => {
      o && e('mergeCells');
    }, [e, o]),
    a$1 = useCallback(() => {
      r && e('splitCell');
    }, [e, r]),
    g = jsx(i, {
      content: 'Merge cells',
      children: jsx(c, {
        variant: 'ghost',
        size: 'icon-sm',
        className: a(
          'text-slate-500 hover:text-slate-900 hover:bg-slate-100/80',
          (t || !o) && 'opacity-30 cursor-not-allowed'
        ),
        onMouseDown: i$1,
        onClick: n,
        disabled: t || !o,
        'aria-label': 'Merge cells',
        'data-testid': 'toolbar-table-merge',
        children: jsx(d, { name: 'call_merge', size: 20 }),
      }),
    }),
    s = jsx(i, {
      content: 'Split cell',
      children: jsx(c, {
        variant: 'ghost',
        size: 'icon-sm',
        className: a(
          'text-slate-500 hover:text-slate-900 hover:bg-slate-100/80',
          (t || !r) && 'opacity-30 cursor-not-allowed'
        ),
        onMouseDown: i$1,
        onClick: a$1,
        disabled: t || !r,
        'aria-label': 'Split cell',
        'data-testid': 'toolbar-table-split',
        children: jsx(d, { name: 'call_split', size: 20 }),
      }),
    });
  return jsxs(Fragment, { children: [g, s] });
}
var Go = [
  {
    action: 'addRowAbove',
    icon: 'keyboard_arrow_up',
    label: 'Insert row above',
    testId: 'toolbar-table-add-row-above',
  },
  {
    action: 'addRowBelow',
    icon: 'keyboard_arrow_down',
    label: 'Insert row below',
    testId: 'toolbar-table-add-row-below',
  },
  {
    action: 'addColumnLeft',
    icon: 'keyboard_arrow_left',
    label: 'Insert column left',
    testId: 'toolbar-table-add-col-left',
  },
  {
    action: 'addColumnRight',
    icon: 'keyboard_arrow_right',
    label: 'Insert column right',
    testId: 'toolbar-table-add-col-right',
  },
];
function Fi({ onAction: e, disabled: t = false }) {
  let o = useCallback((r) => {
    (r.preventDefault(), r.stopPropagation());
  }, []);
  return jsx(Fragment, {
    children: Go.map(({ action: r, icon: i$1, label: n, testId: a$1 }) =>
      jsx(
        i,
        {
          content: n,
          children: jsx(c, {
            variant: 'ghost',
            size: 'icon-sm',
            className: a(
              'text-slate-500 hover:text-slate-900 hover:bg-slate-100/80',
              t && 'opacity-30 cursor-not-allowed'
            ),
            onMouseDown: o,
            onClick: () => !t && e(r),
            disabled: t,
            'aria-label': n,
            'data-testid': a$1,
            children: jsx(d, { name: i$1, size: 20 }),
          }),
        },
        typeof r == 'string' ? r : r.type
      )
    ),
  });
}
var Zo = {
    small: { size: 16, strokeWidth: 2, fontSize: 11 },
    medium: { size: 32, strokeWidth: 3, fontSize: 13 },
    large: { size: 48, strokeWidth: 4, fontSize: 14 },
  },
  Xo = 'var(--doc-primary)',
  Qo = 300,
  Jo = `
@keyframes docx-loading-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes docx-loading-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.95); }
}

@keyframes docx-loading-dots {
  0%, 80%, 100% { transform: scale(0); opacity: 0.5; }
  40% { transform: scale(1); opacity: 1; }
}

@keyframes docx-loading-bar {
  0% { left: -35%; right: 100%; }
  60% { left: 100%; right: -90%; }
  100% { left: 100%; right: -90%; }
}
`,
  qo = ({ size: e, strokeWidth: t, color: o }) => {
    let r = (e - t) / 2,
      i = r * 2 * Math.PI;
    return jsxs('svg', {
      width: e,
      height: e,
      viewBox: `0 0 ${e} ${e}`,
      style: { animation: 'docx-loading-spin 1s linear infinite' },
      children: [
        jsx('circle', {
          cx: e / 2,
          cy: e / 2,
          r,
          fill: 'none',
          stroke: o,
          strokeWidth: t,
          strokeLinecap: 'round',
          strokeDasharray: `${i * 0.75} ${i}`,
          opacity: 0.25,
        }),
        jsx('circle', {
          cx: e / 2,
          cy: e / 2,
          r,
          fill: 'none',
          stroke: o,
          strokeWidth: t,
          strokeLinecap: 'round',
          strokeDasharray: `${i * 0.25} ${i}`,
          transform: `rotate(-90 ${e / 2} ${e / 2})`,
        }),
      ],
    });
  },
  er = ({ size: e, color: t }) => {
    let o = e / 4,
      r = o / 2;
    return jsx('div', {
      style: { display: 'flex', gap: `${r}px` },
      children: [0, 1, 2].map((i) =>
        jsx(
          'div',
          {
            style: {
              width: o,
              height: o,
              borderRadius: '50%',
              backgroundColor: t,
              animation: `docx-loading-dots 1.4s ease-in-out ${i * 0.16}s infinite both`,
            },
          },
          i
        )
      ),
    });
  },
  tr = ({ size: e, color: t }) =>
    jsx('div', {
      style: {
        width: e * 3,
        height: e / 4,
        backgroundColor: `${t}20`,
        borderRadius: e / 8,
        overflow: 'hidden',
        position: 'relative',
      },
      children: jsx('div', {
        style: {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: t,
          borderRadius: e / 8,
          animation: 'docx-loading-bar 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite',
        },
      }),
    }),
  or = ({ size: e, color: t }) =>
    jsx('div', {
      style: {
        width: e,
        height: e,
        borderRadius: '50%',
        backgroundColor: t,
        animation: 'docx-loading-pulse 1.5s ease-in-out infinite',
      },
    }),
  rr = ({ size: e, color: t, progress: o, showText: r, fontSize: i }) => {
    let n = Math.max(0, Math.min(100, o));
    return jsxs('div', {
      style: {
        width: e * 3,
        height: e / 4,
        backgroundColor: `${t}20`,
        borderRadius: e / 8,
        overflow: 'hidden',
        position: 'relative',
      },
      children: [
        jsx('div', {
          style: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: `${n}%`,
            backgroundColor: t,
            borderRadius: e / 8,
            transition: 'width 0.3s ease',
          },
        }),
        r &&
          jsxs('div', {
            style: {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: i,
              fontWeight: 500,
              color: n > 50 ? '#fff' : t,
            },
            children: [Math.round(n), '%'],
          }),
      ],
    });
  },
  Hi = ({
    isLoading: e,
    variant: t = 'spinner',
    size: o = 'medium',
    message: r,
    overlay: i = false,
    overlayOpacity: n = 0.5,
    progress: a = 0,
    showProgressText: g = true,
    color: s = Xo,
    className: l = '',
    style: f,
  }) => {
    let m = Zo[o];
    if (
      (useEffect(() => {
        let h = 'docx-loading-keyframes';
        if (!document.getElementById(h)) {
          let b = document.createElement('style');
          ((b.id = h), (b.textContent = Jo), document.head.appendChild(b));
        }
      }, []),
      !e)
    )
      return null;
    let p = () => {
        switch (t) {
          case 'spinner':
            return jsx(qo, { size: m.size, strokeWidth: m.strokeWidth, color: s });
          case 'dots':
            return jsx(er, { size: m.size, color: s });
          case 'bar':
            return jsx(tr, { size: m.size, color: s });
          case 'pulse':
            return jsx(or, { size: m.size, color: s });
          case 'progress':
            return jsx(rr, {
              size: m.size,
              color: s,
              progress: a,
              showText: g,
              fontSize: m.fontSize,
            });
          default:
            return null;
        }
      },
      c = jsxs('div', {
        className: `docx-loading-content ${l}`,
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          ...f,
        },
        children: [
          p(),
          r &&
            jsx('div', {
              style: {
                fontSize: m.fontSize,
                color: i ? 'white' : 'var(--doc-text-muted)',
                textAlign: 'center',
              },
              children: r,
            }),
        ],
      });
    return i
      ? jsx('div', {
          className: `docx-loading-overlay ${l}`,
          style: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: `rgba(0, 0, 0, ${n})`,
            zIndex: 1e4,
            ...f,
          },
          role: 'progressbar',
          'aria-valuemin': 0,
          'aria-valuemax': 100,
          'aria-valuenow': t === 'progress' ? a : void 0,
          'aria-busy': 'true',
          'aria-label': r || 'Loading',
          children: c,
        })
      : jsx('div', {
          className: `docx-loading-inline ${l}`,
          style: { display: 'inline-flex', alignItems: 'center', ...f },
          role: 'progressbar',
          'aria-valuemin': 0,
          'aria-valuemax': 100,
          'aria-valuenow': t === 'progress' ? a : void 0,
          'aria-busy': 'true',
          'aria-label': r || 'Loading',
          children: c,
        });
  };
function Ui(e = {}) {
  let { initialLoading: t = false, minDuration: o = Qo, onStart: r, onEnd: i } = e,
    [n, a] = useState(t),
    [g, s] = useState(null),
    [l, f] = useState(0),
    m = useRef(null),
    p = useRef(null),
    c = useCallback(
      (d) => {
        ((m.current = Date.now()), a(true), s(d || null), f(0), r?.());
      },
      [r]
    ),
    h = useCallback(() => {
      let d = m.current,
        x = Date.now(),
        u = d ? x - d : 0,
        v = Math.max(0, o - u);
      v > 0
        ? (p.current = setTimeout(() => {
            (a(false), s(null), f(0), (m.current = null), i?.());
          }, v))
        : (a(false), s(null), f(0), (m.current = null), i?.());
    }, [o, i]),
    b = useCallback(
      async (d, x) => {
        c(x);
        try {
          let u = await d();
          return (h(), u);
        } catch (u) {
          throw (h(), u);
        }
      },
      [c, h]
    );
  return (
    useEffect(
      () => () => {
        p.current && clearTimeout(p.current);
      },
      []
    ),
    {
      isLoading: n,
      message: g,
      progress: l,
      startLoading: c,
      stopLoading: h,
      setProgress: f,
      setMessage: s,
      withLoading: b,
    }
  );
}
function Ki() {
  let [e, t] = useState(new Map()),
    o = useCallback((g, s) => {
      t((l) => {
        let f = new Map(l);
        return (f.set(g, { id: g, message: s, startTime: Date.now() }), f);
      });
    }, []),
    r = useCallback((g, s) => {
      t((l) => {
        let f = l.get(g);
        if (!f) return l;
        let m = new Map(l);
        return (m.set(g, { ...f, ...s }), m);
      });
    }, []),
    i = useCallback((g) => {
      t((s) => {
        let l = new Map(s);
        return (l.delete(g), l);
      });
    }, []),
    n = e.size > 0;
  return {
    operations: Array.from(e.values()),
    isAnyLoading: n,
    startOperation: o,
    updateOperation: r,
    endOperation: i,
    getOperation: (g) => e.get(g),
  };
}
function $i(e) {
  return { spinner: 'Spinner', dots: 'Dots', bar: 'Bar', pulse: 'Pulse', progress: 'Progress' }[e];
}
function Vi() {
  return ['spinner', 'dots', 'bar', 'pulse', 'progress'];
}
function Gi() {
  return ['small', 'medium', 'large'];
}
function ji(e) {
  return new Promise((t) => setTimeout(t, e));
}
var ht = 4,
  bt = 36,
  sr = 32,
  lr = () =>
    jsxs('svg', {
      width: '16',
      height: '16',
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        jsx('circle', { cx: '3', cy: '8', r: '1.5', fill: 'currentColor' }),
        jsx('circle', { cx: '8', cy: '8', r: '1.5', fill: 'currentColor' }),
        jsx('circle', { cx: '13', cy: '8', r: '1.5', fill: 'currentColor' }),
      ],
    });
function cr(e) {
  let { containerRef: t, items: o, itemGap: r = ht, overflowButtonWidth: i = bt } = e,
    [n, a] = useState(o.length),
    g = useRef(new Map()),
    s = useCallback(() => {
      let m = t.current;
      if (!m) {
        a(o.length);
        return;
      }
      let p = m.offsetWidth;
      if (p === 0) return;
      let c = [...o].sort((d, x) =>
          d.alwaysVisible && !x.alwaysVisible
            ? -1
            : !d.alwaysVisible && x.alwaysVisible
              ? 1
              : (d.priority || 3) - (x.priority || 3)
        ),
        h = 0,
        b = 0;
      for (let d of c) {
        let u = (d.minWidth || g.current.get(d.id) || sr) + (b > 0 ? r : 0),
          v = b < o.length - 1 ? i + r : 0;
        if (h + u + v <= p) ((h += u), b++);
        else if (d.alwaysVisible) ((h += u), b++);
        else break;
      }
      a(Math.max(0, b));
    }, [t, o, r, i]);
  (useLayoutEffect(() => {
    let m = t.current;
    if (!m) return;
    s();
    let p = new ResizeObserver(() => {
      s();
    });
    return (
      p.observe(m),
      () => {
        p.disconnect();
      }
    );
  }, [t, s]),
    useEffect(() => {
      s();
    }, [o, s]));
  let { visibleItems: l, overflowItems: f } = useMemo(() => {
    let m = [...o].sort((p, c) =>
      p.alwaysVisible && !c.alwaysVisible
        ? -1
        : !p.alwaysVisible && c.alwaysVisible
          ? 1
          : (p.priority || 3) - (c.priority || 3)
    );
    return { visibleItems: m.slice(0, n), overflowItems: m.slice(n) };
  }, [o, n]);
  return { visibleItems: l, overflowItems: f, hasOverflow: f.length > 0, recalculate: s };
}
var dr = ({ items: e, isOpen: t, onClose: o, anchorRef: r }) => {
    let i = useRef(null);
    return (
      useEffect(() => {
        if (!t) return;
        let n = (a) => {
          i.current &&
            !i.current.contains(a.target) &&
            r.current &&
            !r.current.contains(a.target) &&
            o();
        };
        return (
          document.addEventListener('mousedown', n),
          () => document.removeEventListener('mousedown', n)
        );
      }, [t, o, r]),
      useEffect(() => {
        if (!t) return;
        let n = (a) => {
          a.key === 'Escape' && o();
        };
        return (
          document.addEventListener('keydown', n),
          () => document.removeEventListener('keydown', n)
        );
      }, [t, o]),
      !t || e.length === 0
        ? null
        : jsx('div', {
            ref: i,
            className: 'docx-responsive-toolbar-overflow-menu',
            style: {
              position: 'absolute',
              top: '100%',
              right: 0,
              marginTop: '4px',
              backgroundColor: 'white',
              border: '1px solid var(--doc-border)',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              padding: '8px',
              zIndex: 1e3,
              display: 'flex',
              flexWrap: 'wrap',
              gap: '4px',
              maxWidth: '300px',
            },
            role: 'menu',
            children: e.map((n) =>
              jsx(
                'div',
                {
                  className: 'docx-responsive-toolbar-overflow-item',
                  role: 'menuitem',
                  children: n.content,
                },
                n.id
              )
            ),
          })
    );
  },
  Ji = ({
    items: e,
    overflowItems: t = [],
    alwaysShowOverflow: o = false,
    renderOverflowButton: r,
    renderOverflowMenu: i,
    itemGap: n = ht,
    padding: a = '8px 12px',
    overflowButtonWidth: g = bt,
    className: s = '',
    style: l,
    height: f = 44,
    backgroundColor: m = 'var(--doc-toolbar-bg)',
    borderBottom: p = '1px solid var(--doc-border)',
  }) => {
    let c = useRef(null),
      h = useRef(null),
      [b, d] = useState(false),
      {
        visibleItems: x,
        overflowItems: u,
        hasOverflow: v,
      } = cr({ containerRef: c, items: e, itemGap: n, overflowButtonWidth: g }),
      C = [...u, ...t],
      R = v || o || t.length > 0,
      H = useCallback(() => {
        d((N) => !N);
      }, []),
      I = useCallback(() => {
        d(false);
      }, []),
      A = jsx('button', {
        ref: h,
        type: 'button',
        className: 'docx-responsive-toolbar-overflow-button',
        onClick: H,
        'aria-label': `Show ${C.length} more options`,
        'aria-expanded': b,
        'aria-haspopup': 'menu',
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: `${g}px`,
          height: '32px',
          border: 'none',
          borderRadius: '4px',
          backgroundColor: b ? 'var(--doc-primary-light)' : 'transparent',
          color: 'var(--doc-text-muted)',
          cursor: 'pointer',
          transition: 'background-color 0.15s ease',
        },
        children: jsx(lr, {}),
      });
    return jsxs('div', {
      ref: c,
      className: `docx-responsive-toolbar ${s}`,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: `${n}px`,
        height: typeof f == 'number' ? `${f}px` : f,
        padding: a,
        backgroundColor: m,
        borderBottom: p,
        position: 'relative',
        ...l,
      },
      children: [
        x.map((N) =>
          jsxs(
            nr.Fragment,
            {
              children: [
                jsx('div', {
                  className: 'docx-responsive-toolbar-item',
                  'data-item-id': N.id,
                  style: { flexShrink: 0 },
                  children: N.content,
                }),
                N.separatorAfter &&
                  jsx('div', {
                    className: 'docx-responsive-toolbar-separator',
                    style: {
                      width: '1px',
                      height: '24px',
                      backgroundColor: 'var(--doc-border)',
                      margin: '0 4px',
                    },
                  }),
              ],
            },
            N.id
          )
        ),
        R && jsx('div', { style: { flex: 1, minWidth: 0 } }),
        R &&
          jsxs('div', {
            style: { position: 'relative', flexShrink: 0 },
            children: [
              r ? r(C.length, b, H) : A,
              i ? b && i(C, I) : jsx(dr, { items: C, isOpen: b, onClose: I, anchorRef: h }),
            ],
          }),
      ],
    });
  },
  qi = ({ children: e, gap: t = 2, separatorAfter: o = false, className: r = '', style: i }) =>
    jsxs(Fragment, {
      children: [
        jsx('div', {
          className: `docx-toolbar-group ${r}`,
          style: { display: 'flex', alignItems: 'center', gap: `${t}px`, ...i },
          children: e,
        }),
        o &&
          jsx('div', {
            className: 'docx-toolbar-group-separator',
            style: {
              width: '1px',
              height: '24px',
              backgroundColor: 'var(--doc-border)',
              margin: '0 4px',
            },
          }),
      ],
    });
function ea(e, t, o) {
  return { id: e, content: t, priority: 3, ...o };
}
function ta(e) {
  return e.map((t) => ({ ...t, priority: t.priority || 3 }));
}
function oa(e) {
  return (
    {
      undo: 1,
      redo: 1,
      bold: 1,
      italic: 1,
      underline: 2,
      fontFamily: 2,
      fontSize: 2,
      textColor: 3,
      highlightColor: 3,
      alignment: 3,
      lists: 4,
      indent: 4,
      lineSpacing: 5,
      styles: 5,
    }[e] || 3
  );
}
var gr = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1e4,
  },
  mr = {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    minWidth: '320px',
    maxWidth: '400px',
    width: '100%',
    margin: '20px',
  },
  xr = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 20px',
    borderBottom: '1px solid var(--doc-border)',
  },
  fr = { margin: 0, fontSize: '18px', fontWeight: 600, color: 'var(--doc-text)' },
  hr = {
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    color: 'var(--doc-text-muted)',
    padding: '4px 8px',
    lineHeight: 1,
  },
  br = { padding: '20px' },
  vr = { display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '16px' },
  yr = {
    display: 'grid',
    gap: '2px',
    padding: '4px',
    backgroundColor: 'var(--doc-bg-hover)',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  kt = {
    width: '24px',
    height: '24px',
    backgroundColor: 'white',
    border: '1px solid var(--doc-border-dark)',
    borderRadius: '2px',
    transition: 'background-color 0.1s, border-color 0.1s',
  },
  Cr = { ...kt, backgroundColor: 'var(--doc-primary)', borderColor: 'var(--doc-primary)' },
  Sr = { marginTop: '8px', fontSize: '14px', fontWeight: 500, color: 'var(--doc-text)' },
  wr = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    margin: '16px 0',
    color: 'var(--doc-text-muted)',
    fontSize: '12px',
  },
  yt = { flex: 1, height: '1px', backgroundColor: 'var(--doc-border)' },
  Ct = { display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' },
  St = { fontSize: '14px', fontWeight: 500, color: 'var(--doc-text)', minWidth: '80px' },
  wt = {
    width: '80px',
    padding: '8px 12px',
    border: '1px solid var(--doc-border-input)',
    borderRadius: '4px',
    fontSize: '14px',
    textAlign: 'center',
  },
  kr = {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
    padding: '16px 20px',
    borderTop: '1px solid var(--doc-border)',
  },
  je = {
    padding: '10px 20px',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    border: 'none',
  },
  Tr = { ...je, backgroundColor: 'var(--doc-primary)', color: 'white' },
  Er = {
    ...je,
    backgroundColor: 'var(--doc-bg-hover)',
    color: 'var(--doc-text)',
    border: '1px solid var(--doc-border-input)',
  },
  Ir = {
    ...je,
    backgroundColor: 'var(--doc-border-input)',
    color: 'var(--doc-text-muted)',
    cursor: 'not-allowed',
  };
function Pr() {
  return jsxs('svg', {
    width: '20',
    height: '20',
    viewBox: '0 0 20 20',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    children: [
      jsx('rect', {
        x: '2',
        y: '2',
        width: '16',
        height: '16',
        stroke: 'currentColor',
        strokeWidth: '1.5',
        fill: 'none',
        rx: '1',
      }),
      jsx('line', {
        x1: '2',
        y1: '7',
        x2: '18',
        y2: '7',
        stroke: 'currentColor',
        strokeWidth: '1.5',
      }),
      jsx('line', {
        x1: '2',
        y1: '12',
        x2: '18',
        y2: '12',
        stroke: 'currentColor',
        strokeWidth: '1.5',
      }),
      jsx('line', {
        x1: '8',
        y1: '2',
        x2: '8',
        y2: '18',
        stroke: 'currentColor',
        strokeWidth: '1.5',
      }),
      jsx('line', {
        x1: '13',
        y1: '2',
        x2: '13',
        y2: '18',
        stroke: 'currentColor',
        strokeWidth: '1.5',
      }),
    ],
  });
}
function sa({
  isOpen: e,
  onClose: t,
  onInsert: o,
  maxGridRows: r = 8,
  maxGridColumns: i = 10,
  maxRows: n = 100,
  maxColumns: a = 20,
  className: g,
  style: s,
}) {
  let [l, f] = useState(0),
    [m, p] = useState(0),
    [c, h] = useState(3),
    [b, d] = useState(3),
    x = useRef(null);
  (useEffect(() => {
    e && (f(0), p(0), h(3), d(3));
  }, [e]),
    useEffect(() => {
      e && x.current?.focus();
    }, [e]));
  let u = useCallback((T, P) => {
      (f(T), p(P));
    }, []),
    v = useCallback(() => {
      l > 0 && m > 0 && o({ rows: l, columns: m });
    }, [l, m, o]),
    C = useCallback(() => {
      let T = Math.min(Math.max(1, c), n),
        P = Math.min(Math.max(1, b), a);
      o({ rows: T, columns: P });
    }, [c, b, n, a, o]),
    R = useCallback(
      (T) => {
        T.key === 'Escape' ? t() : T.key === 'Enter' && !T.shiftKey && (T.preventDefault(), C());
      },
      [t, C]
    ),
    H = useCallback(
      (T) => {
        T.target === T.currentTarget && t();
      },
      [t]
    ),
    I = useCallback(
      (T) => {
        let P = parseInt(T.target.value, 10);
        isNaN(P) ? T.target.value === '' && h(1) : h(Math.min(Math.max(1, P), n));
      },
      [n]
    ),
    A = useCallback(
      (T) => {
        let P = parseInt(T.target.value, 10);
        isNaN(P) ? T.target.value === '' && d(1) : d(Math.min(Math.max(1, P), a));
      },
      [a]
    );
  if (!e) return null;
  let N = [];
  for (let T = 1; T <= r; T++)
    for (let P = 1; P <= i; P++) {
      let te = T <= l && P <= m;
      N.push(
        jsx(
          'div',
          {
            style: te ? Cr : kt,
            onMouseEnter: () => u(T, P),
            onClick: v,
            role: 'gridcell',
            'aria-selected': te,
          },
          `${T}-${P}`
        )
      );
    }
  let y = c >= 1 && b >= 1,
    U = l > 0 && m > 0 ? `${m} x ${l} Table` : 'Hover to select size';
  return jsx('div', {
    className: `docx-insert-table-dialog-overlay ${g || ''}`,
    style: { ...gr, ...s },
    onClick: H,
    onKeyDown: R,
    role: 'dialog',
    'aria-modal': 'true',
    'aria-labelledby': 'insert-table-dialog-title',
    children: jsxs('div', {
      ref: x,
      className: 'docx-insert-table-dialog',
      style: mr,
      tabIndex: -1,
      children: [
        jsxs('div', {
          className: 'docx-insert-table-dialog-header',
          style: xr,
          children: [
            jsx('h2', {
              id: 'insert-table-dialog-title',
              style: fr,
              children: jsxs('span', {
                style: { display: 'flex', alignItems: 'center', gap: '8px' },
                children: [jsx(Pr, {}), 'Insert Table'],
              }),
            }),
            jsx('button', {
              type: 'button',
              className: 'docx-insert-table-dialog-close',
              style: hr,
              onClick: t,
              'aria-label': 'Close dialog',
              children: '\xD7',
            }),
          ],
        }),
        jsxs('div', {
          className: 'docx-insert-table-dialog-body',
          style: br,
          children: [
            jsxs('div', {
              className: 'docx-insert-table-grid-container',
              style: vr,
              children: [
                jsx('div', {
                  className: 'docx-insert-table-grid',
                  style: { ...yr, gridTemplateColumns: `repeat(${i}, 1fr)` },
                  onMouseLeave: () => {
                    (f(0), p(0));
                  },
                  role: 'grid',
                  'aria-label': 'Table size selector',
                  children: N,
                }),
                jsx('div', { className: 'docx-insert-table-grid-label', style: Sr, children: U }),
              ],
            }),
            jsxs('div', {
              className: 'docx-insert-table-separator',
              style: wr,
              children: [
                jsx('div', { style: yt }),
                jsx('span', { children: 'or specify size' }),
                jsx('div', { style: yt }),
              ],
            }),
            jsxs('div', {
              className: 'docx-insert-table-inputs',
              children: [
                jsxs('div', {
                  style: Ct,
                  children: [
                    jsx('label', { htmlFor: 'insert-table-rows', style: St, children: 'Rows:' }),
                    jsx('input', {
                      id: 'insert-table-rows',
                      type: 'number',
                      min: 1,
                      max: n,
                      value: c,
                      onChange: I,
                      style: wt,
                    }),
                  ],
                }),
                jsxs('div', {
                  style: Ct,
                  children: [
                    jsx('label', { htmlFor: 'insert-table-cols', style: St, children: 'Columns:' }),
                    jsx('input', {
                      id: 'insert-table-cols',
                      type: 'number',
                      min: 1,
                      max: a,
                      value: b,
                      onChange: A,
                      style: wt,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        jsxs('div', {
          className: 'docx-insert-table-dialog-footer',
          style: kr,
          children: [
            jsx('button', {
              type: 'button',
              className: 'docx-insert-table-dialog-cancel',
              style: Er,
              onClick: t,
              children: 'Cancel',
            }),
            jsx('button', {
              type: 'button',
              className: 'docx-insert-table-dialog-insert',
              style: y ? Tr : Ir,
              onClick: C,
              disabled: !y,
              children: 'Insert Table',
            }),
          ],
        }),
      ],
    }),
  });
}
function la() {
  let [e, t] = useState(false),
    o = useCallback(() => t(true), []),
    r = useCallback(() => t(false), []),
    i = useCallback(() => t((n) => !n), []);
  return { isOpen: e, open: o, close: r, toggle: i };
}
function ca(e = 3, t = 3) {
  return { rows: e, columns: t };
}
function da(e, t = 100, o = 20) {
  return e.rows >= 1 && e.rows <= t && e.columns >= 1 && e.columns <= o;
}
function pa(e, t = 100, o = 20) {
  return { rows: Math.min(Math.max(1, e.rows), t), columns: Math.min(Math.max(1, e.columns), o) };
}
function ua(e) {
  return `${e.columns} x ${e.rows}`;
}
function ga() {
  return [
    { label: '2 x 2', config: { rows: 2, columns: 2 } },
    { label: '3 x 3', config: { rows: 3, columns: 3 } },
    { label: '4 x 4', config: { rows: 4, columns: 4 } },
    { label: '2 x 4', config: { rows: 2, columns: 4 } },
    { label: '4 x 2', config: { rows: 4, columns: 2 } },
    { label: '5 x 5', config: { rows: 5, columns: 5 } },
  ];
}
var Rr = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1e4,
  },
  Ar = {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    minWidth: '450px',
    maxWidth: '600px',
    width: '100%',
    margin: '20px',
    maxHeight: '90vh',
    overflow: 'auto',
  },
  Dr = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 20px',
    borderBottom: '1px solid var(--doc-border)',
  },
  Mr = { margin: 0, fontSize: '18px', fontWeight: 600, color: 'var(--doc-text)' },
  Or = {
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    color: 'var(--doc-text-muted)',
    padding: '4px 8px',
    lineHeight: 1,
  },
  _r = { padding: '20px' },
  Ze = {
    border: '2px dashed var(--doc-border-input)',
    borderRadius: '8px',
    padding: '40px 20px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'border-color 0.2s, background-color 0.2s',
    marginBottom: '16px',
  },
  Nr = { ...Ze, borderColor: 'var(--doc-primary)', backgroundColor: 'var(--doc-primary-light)' },
  Fr = { ...Ze, padding: '20px', borderStyle: 'solid', borderColor: 'var(--doc-primary)' },
  Br = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: '250px',
    overflow: 'hidden',
  },
  zr = { maxWidth: '100%', maxHeight: '250px', objectFit: 'contain', borderRadius: '4px' },
  Wr = { fontSize: '48px', color: 'var(--doc-text-placeholder)', marginBottom: '12px' },
  Yr = { fontSize: '14px', color: 'var(--doc-text-muted)', marginBottom: '8px' },
  Hr = { fontSize: '12px', color: 'var(--doc-text-placeholder)' },
  Et = { marginBottom: '16px' },
  It = {
    display: 'block',
    marginBottom: '6px',
    fontSize: '14px',
    fontWeight: 500,
    color: 'var(--doc-text)',
  },
  Ur = {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid var(--doc-border-input)',
    borderRadius: '4px',
    fontSize: '14px',
    boxSizing: 'border-box',
  },
  Kr = { display: 'flex', alignItems: 'center', gap: '12px' },
  Pt = {
    width: '100px',
    padding: '8px 12px',
    border: '1px solid var(--doc-border-input)',
    borderRadius: '4px',
    fontSize: '14px',
    textAlign: 'center',
  },
  Rt = {
    padding: '6px 10px',
    border: '1px solid var(--doc-border-input)',
    borderRadius: '4px',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  },
  $r = {
    ...Rt,
    backgroundColor: 'var(--doc-primary)',
    borderColor: 'var(--doc-primary)',
    color: 'white',
  },
  Vr = { fontSize: '12px', color: 'var(--doc-text-muted)', marginTop: '8px', textAlign: 'center' },
  Gr = {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
    padding: '16px 20px',
    borderTop: '1px solid var(--doc-border)',
  },
  Xe = {
    padding: '10px 20px',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    border: 'none',
  },
  jr = { ...Xe, backgroundColor: 'var(--doc-primary)', color: 'white' },
  Zr = {
    ...Xe,
    backgroundColor: 'var(--doc-bg-subtle)',
    color: 'var(--doc-text)',
    border: '1px solid var(--doc-border-input)',
  },
  Xr = {
    ...Xe,
    backgroundColor: 'var(--doc-border-input)',
    color: 'var(--doc-text-muted)',
    cursor: 'not-allowed',
  };
function Qr() {
  return jsxs('svg', {
    width: '48',
    height: '48',
    viewBox: '0 0 48 48',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    children: [
      jsx('rect', {
        x: '6',
        y: '10',
        width: '36',
        height: '28',
        rx: '2',
        stroke: 'var(--doc-text-placeholder)',
        strokeWidth: '2',
        fill: 'none',
      }),
      jsx('circle', {
        cx: '16',
        cy: '20',
        r: '4',
        stroke: 'var(--doc-text-placeholder)',
        strokeWidth: '2',
        fill: 'none',
      }),
      jsx('path', {
        d: 'M6 32L16 24L26 34L36 22L42 28',
        stroke: 'var(--doc-text-placeholder)',
        strokeWidth: '2',
        fill: 'none',
      }),
    ],
  });
}
function Jr({ locked: e }) {
  return e
    ? jsx('svg', {
        width: '16',
        height: '16',
        viewBox: '0 0 16 16',
        fill: 'currentColor',
        xmlns: 'http://www.w3.org/2000/svg',
        children: jsx('path', {
          d: 'M12 6V4a4 4 0 0 0-8 0v2H3v8h10V6h-1zm-6-2a2 2 0 0 1 4 0v2H6V4zm6 8H4V8h8v4z',
        }),
      })
    : jsx('svg', {
        width: '16',
        height: '16',
        viewBox: '0 0 16 16',
        fill: 'currentColor',
        xmlns: 'http://www.w3.org/2000/svg',
        children: jsx('path', {
          d: 'M10 6V4a2 2 0 0 0-4 0v2H4v8h8V6h-2zM6 4a2 2 0 0 1 4 0v2h-2V4H6v2H4v2H6V4zm4 8H6V8h4v4z',
        }),
      });
}
function ba({
  isOpen: e,
  onClose: t,
  onInsert: o,
  maxWidth: r = 800,
  maxHeight: i = 600,
  accept: n = 'image/*',
  className: a,
  style: g,
}) {
  let [s, l] = useState(null),
    [f, m] = useState(false),
    [p, c] = useState(0),
    [h, b] = useState(0),
    [d, x] = useState(''),
    [u, v] = useState(true),
    [C, R] = useState(1),
    [H, I] = useState(null),
    A = useRef(null),
    N = useRef(null);
  useEffect(() => {
    e && (l(null), m(false), c(0), b(0), x(''), v(true), R(1), I(null));
  }, [e]);
  let y = useCallback(
      (E) => {
        if (!E.type.startsWith('image/')) {
          I('Please select a valid image file');
          return;
        }
        if (E.size > 10 * 1024 * 1024) {
          I('Image file is too large (max 10MB)');
          return;
        }
        I(null);
        let W = new FileReader();
        ((W.onload = (Ut) => {
          let ot = Ut.target?.result,
            ae = new Image();
          ((ae.onload = () => {
            let se = ae.width,
              le = ae.height;
            if (se > r || le > i) {
              let Kt = r / se,
                $t = i / le,
                rt = Math.min(Kt, $t);
              ((se = Math.round(se * rt)), (le = Math.round(le * rt)));
            }
            (c(se),
              b(le),
              R(ae.width / ae.height),
              l({ src: ot, width: se, height: le, fileName: E.name, mimeType: E.type }));
          }),
            (ae.src = ot));
        }),
          (W.onerror = () => {
            I('Failed to read image file');
          }),
          W.readAsDataURL(E));
      },
      [r, i]
    ),
    U = useCallback(
      (E) => {
        let W = E.target.files?.[0];
        W && y(W);
      },
      [y]
    ),
    T = useCallback(() => {
      A.current?.click();
    }, []),
    P = useCallback((E) => {
      (E.preventDefault(), m(true));
    }, []),
    te = useCallback((E) => {
      (E.preventDefault(), m(false));
    }, []),
    M = useCallback(
      (E) => {
        (E.preventDefault(), m(false));
        let W = E.dataTransfer.files?.[0];
        W && y(W);
      },
      [y]
    ),
    Ft = useCallback(
      (E) => {
        let W = parseInt(E.target.value, 10) || 0;
        (c(W), u && C && b(Math.round(W / C)));
      },
      [u, C]
    ),
    Bt = useCallback(
      (E) => {
        let W = parseInt(E.target.value, 10) || 0;
        (b(W), u && C && c(Math.round(W * C)));
      },
      [u, C]
    ),
    ze = useCallback(() => {
      s && o({ ...s, width: p, height: h, alt: d || void 0 });
    }, [s, p, h, d, o]),
    zt = useCallback(
      (E) => {
        E.key === 'Escape'
          ? t()
          : E.key === 'Enter' && s && !E.shiftKey && (E.preventDefault(), ze());
      },
      [t, s, ze]
    ),
    Wt = useCallback(
      (E) => {
        E.target === E.currentTarget && t();
      },
      [t]
    ),
    Yt = useCallback(() => {
      (l(null), c(0), b(0), x(''), I(null), A.current && (A.current.value = ''));
    }, []);
  if (!e) return null;
  let tt = s !== null && p > 0 && h > 0,
    Ht = () => (s ? Fr : f ? Nr : Ze);
  return jsx('div', {
    className: `docx-insert-image-dialog-overlay ${a || ''}`,
    style: { ...Rr, ...g },
    onClick: Wt,
    onKeyDown: zt,
    role: 'dialog',
    'aria-modal': 'true',
    'aria-labelledby': 'insert-image-dialog-title',
    children: jsxs('div', {
      ref: N,
      className: 'docx-insert-image-dialog',
      style: Ar,
      tabIndex: -1,
      children: [
        jsxs('div', {
          className: 'docx-insert-image-dialog-header',
          style: Dr,
          children: [
            jsx('h2', { id: 'insert-image-dialog-title', style: Mr, children: 'Insert Image' }),
            jsx('button', {
              type: 'button',
              className: 'docx-insert-image-dialog-close',
              style: Or,
              onClick: t,
              'aria-label': 'Close dialog',
              children: '\xD7',
            }),
          ],
        }),
        jsxs('div', {
          className: 'docx-insert-image-dialog-body',
          style: _r,
          children: [
            jsx('input', {
              ref: A,
              type: 'file',
              accept: n,
              onChange: U,
              style: { display: 'none' },
            }),
            jsx('div', {
              className: 'docx-insert-image-dropzone',
              style: Ht(),
              onClick: T,
              onDragOver: P,
              onDragLeave: te,
              onDrop: M,
              role: 'button',
              tabIndex: 0,
              'aria-label': 'Click or drag to upload image',
              children: s
                ? jsx('div', {
                    style: Br,
                    children: jsx('img', { src: s.src, alt: d || 'Preview', style: zr }),
                  })
                : jsxs(Fragment, {
                    children: [
                      jsx('div', { style: Wr, children: jsx(Qr, {}) }),
                      jsx('div', {
                        style: Yr,
                        children: 'Click to select or drag and drop an image',
                      }),
                      jsx('div', { style: Hr, children: 'PNG, JPG, GIF up to 10MB' }),
                    ],
                  }),
            }),
            s?.fileName &&
              jsxs('div', {
                style: Vr,
                children: [
                  s.fileName,
                  jsx('button', {
                    type: 'button',
                    onClick: (E) => {
                      (E.stopPropagation(), Yt());
                    },
                    style: {
                      marginLeft: '8px',
                      background: 'none',
                      border: 'none',
                      color: 'var(--doc-primary)',
                      cursor: 'pointer',
                      fontSize: '12px',
                    },
                    children: 'Change',
                  }),
                ],
              }),
            H &&
              jsx('div', {
                style: {
                  color: 'var(--doc-error)',
                  fontSize: '14px',
                  marginBottom: '16px',
                  textAlign: 'center',
                },
                children: H,
              }),
            s &&
              jsxs(Fragment, {
                children: [
                  jsxs('div', {
                    style: Et,
                    children: [
                      jsx('label', { style: It, children: 'Dimensions' }),
                      jsxs('div', {
                        style: Kr,
                        children: [
                          jsx('span', {
                            style: { fontSize: '14px', color: 'var(--doc-text-muted)' },
                            children: 'Width:',
                          }),
                          jsx('input', {
                            type: 'number',
                            value: p,
                            onChange: Ft,
                            min: 1,
                            max: r,
                            style: Pt,
                          }),
                          jsx('span', {
                            style: { fontSize: '14px', color: 'var(--doc-text-muted)' },
                            children: 'px',
                          }),
                          jsx('button', {
                            type: 'button',
                            onClick: () => v(!u),
                            style: u ? $r : Rt,
                            title: u ? 'Aspect ratio locked' : 'Aspect ratio unlocked',
                            children: jsx(Jr, { locked: u }),
                          }),
                          jsx('span', {
                            style: { fontSize: '14px', color: 'var(--doc-text-muted)' },
                            children: 'Height:',
                          }),
                          jsx('input', {
                            type: 'number',
                            value: h,
                            onChange: Bt,
                            min: 1,
                            max: i,
                            style: Pt,
                          }),
                          jsx('span', {
                            style: { fontSize: '14px', color: 'var(--doc-text-muted)' },
                            children: 'px',
                          }),
                        ],
                      }),
                    ],
                  }),
                  jsxs('div', {
                    style: Et,
                    children: [
                      jsx('label', {
                        htmlFor: 'insert-image-alt',
                        style: It,
                        children: 'Alt Text (optional)',
                      }),
                      jsx('input', {
                        id: 'insert-image-alt',
                        type: 'text',
                        value: d,
                        onChange: (E) => x(E.target.value),
                        placeholder: 'Describe the image for accessibility',
                        style: Ur,
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
        jsxs('div', {
          className: 'docx-insert-image-dialog-footer',
          style: Gr,
          children: [
            jsx('button', {
              type: 'button',
              className: 'docx-insert-image-dialog-cancel',
              style: Zr,
              onClick: t,
              children: 'Cancel',
            }),
            jsx('button', {
              type: 'button',
              className: 'docx-insert-image-dialog-insert',
              style: tt ? jr : Xr,
              onClick: ze,
              disabled: !tt,
              children: 'Insert Image',
            }),
          ],
        }),
      ],
    }),
  });
}
function va() {
  let [e, t] = useState(false),
    o = useCallback(() => t(true), []),
    r = useCallback(() => t(false), []),
    i = useCallback(() => t((n) => !n), []);
  return { isOpen: e, open: o, close: r, toggle: i };
}
function ya(e) {
  return e.type.startsWith('image/');
}
function Ca() {
  return ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.bmp', '.svg'];
}
function Sa() {
  return 'image/png,image/jpeg,image/gif,image/webp,image/bmp,image/svg+xml';
}
function wa(e, t, o, r) {
  if (e <= o && t <= r) return { width: e, height: t };
  let i = o / e,
    n = r / t,
    a = Math.min(i, n);
  return { width: Math.round(e * a), height: Math.round(t * a) };
}
function ka(e) {
  let t = e.split(','),
    o = t[0].match(/:(.*?);/)?.[1] || 'image/png',
    r = atob(t[1]),
    i = new Uint8Array(r.length);
  for (let n = 0; n < r.length; n++) i[n] = r.charCodeAt(n);
  return new Blob([i], { type: o });
}
function Ta(e) {
  return new Promise((t, o) => {
    let r = new Image();
    ((r.onload = () => t({ width: r.width, height: r.height })),
      (r.onerror = () => o(new Error('Failed to load image'))),
      (r.src = e));
  });
}
function Ea(e) {
  return e < 1024
    ? `${e} B`
    : e < 1024 * 1024
      ? `${(e / 1024).toFixed(1)} KB`
      : `${(e / (1024 * 1024)).toFixed(1)} MB`;
}
var on = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1e4,
  },
  rn = {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    minWidth: '450px',
    maxWidth: '550px',
    width: '100%',
    margin: '20px',
    maxHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
  },
  nn = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 20px',
    borderBottom: '1px solid var(--doc-border)',
  },
  an = { margin: 0, fontSize: '18px', fontWeight: 600, color: 'var(--doc-text)' },
  sn = {
    background: 'none',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
    color: 'var(--doc-text-muted)',
    padding: '4px 8px',
    lineHeight: 1,
  },
  ln = { padding: '20px', flex: 1, overflow: 'auto' },
  cn = {
    width: '100%',
    padding: '10px 12px',
    border: '1px solid var(--doc-border-input)',
    borderRadius: '4px',
    fontSize: '14px',
    marginBottom: '16px',
    boxSizing: 'border-box',
  },
  dn = { display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '16px' },
  At = {
    padding: '6px 12px',
    border: '1px solid var(--doc-border-input)',
    borderRadius: '4px',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '12px',
    transition: 'all 0.15s',
  },
  pn = {
    ...At,
    backgroundColor: 'var(--doc-primary)',
    borderColor: 'var(--doc-primary)',
    color: 'white',
  },
  un = {
    display: 'grid',
    gridTemplateColumns: 'repeat(10, 1fr)',
    gap: '4px',
    maxHeight: '250px',
    overflow: 'auto',
  },
  gn = {
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid var(--doc-border)',
    borderRadius: '4px',
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '18px',
    transition: 'all 0.15s',
  },
  mn = {
    marginTop: '16px',
    padding: '12px',
    backgroundColor: 'var(--doc-bg-subtle)',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  xn = {
    fontSize: '36px',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: '4px',
    border: '1px solid var(--doc-border)',
  },
  fn = { flex: 1 },
  hn = {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
    padding: '16px 20px',
    borderTop: '1px solid var(--doc-border)',
  },
  Qe = {
    padding: '10px 20px',
    borderRadius: '4px',
    fontSize: '14px',
    fontWeight: 500,
    cursor: 'pointer',
    border: 'none',
  },
  bn = { ...Qe, backgroundColor: 'var(--doc-primary)', color: 'white' },
  vn = {
    ...Qe,
    backgroundColor: 'var(--doc-bg-subtle)',
    color: 'var(--doc-text)',
    border: '1px solid var(--doc-border-input)',
  },
  yn = {
    ...Qe,
    backgroundColor: 'var(--doc-border-input)',
    color: 'var(--doc-text-muted)',
    cursor: 'not-allowed',
  },
  we = [
    {
      name: 'common',
      label: 'Common',
      symbols: [
        '\xA9',
        '\xAE',
        '\u2122',
        '\u2022',
        '\u2026',
        '\u2014',
        '\u2013',
        '\xB0',
        '\xB1',
        '\xD7',
        '\xF7',
        '\u2260',
        '\u2264',
        '\u2265',
        '\u221E',
        '\u221A',
        '\u2211',
        '\u220F',
        '\u222B',
        '\u03C0',
        '\u20AC',
        '\xA3',
        '\xA5',
        '\xA2',
        '\xA7',
        '\xB6',
        '\u2020',
        '\u2021',
        '\u2030',
        '\u2116',
      ],
    },
    {
      name: 'arrows',
      label: 'Arrows',
      symbols: [
        '\u2190',
        '\u2191',
        '\u2192',
        '\u2193',
        '\u2194',
        '\u2195',
        '\u2196',
        '\u2197',
        '\u2198',
        '\u2199',
        '\u21D0',
        '\u21D1',
        '\u21D2',
        '\u21D3',
        '\u21D4',
        '\u21D5',
        '\u27F5',
        '\u27F6',
        '\u27F7',
        '\u2794',
        '\u279C',
        '\u279E',
        '\u27A1',
        '\u27A2',
        '\u27A3',
        '\u27A4',
        '\u27A5',
        '\u27A6',
        '\u27A7',
        '\u27A8',
      ],
    },
    {
      name: 'math',
      label: 'Math',
      symbols: [
        '+',
        '\u2212',
        '\xD7',
        '\xF7',
        '=',
        '\u2260',
        '<',
        '>',
        '\u2264',
        '\u2265',
        '\xB1',
        '\u2213',
        '\u221E',
        '\u221A',
        '\u221B',
        '\u221C',
        '\u2211',
        '\u220F',
        '\u222B',
        '\u2202',
        '\u2206',
        '\u2207',
        '\u2208',
        '\u2209',
        '\u220B',
        '\u2205',
        '\u2200',
        '\u2203',
        '\u2204',
        '\u2282',
        '\u2283',
        '\u2286',
        '\u2287',
        '\u222A',
        '\u2229',
        '\u2295',
        '\u2297',
        '\u22A5',
        '\u2220',
        '\u221F',
      ],
    },
    {
      name: 'greek',
      label: 'Greek',
      symbols: [
        '\u03B1',
        '\u03B2',
        '\u03B3',
        '\u03B4',
        '\u03B5',
        '\u03B6',
        '\u03B7',
        '\u03B8',
        '\u03B9',
        '\u03BA',
        '\u03BB',
        '\u03BC',
        '\u03BD',
        '\u03BE',
        '\u03BF',
        '\u03C0',
        '\u03C1',
        '\u03C3',
        '\u03C4',
        '\u03C5',
        '\u03C6',
        '\u03C7',
        '\u03C8',
        '\u03C9',
        '\u0391',
        '\u0392',
        '\u0393',
        '\u0394',
        '\u0395',
        '\u0396',
        '\u0397',
        '\u0398',
        '\u0399',
        '\u039A',
        '\u039B',
        '\u039C',
        '\u039D',
        '\u039E',
        '\u039F',
        '\u03A0',
      ],
    },
    {
      name: 'shapes',
      label: 'Shapes',
      symbols: [
        '\u25A0',
        '\u25A1',
        '\u25AA',
        '\u25AB',
        '\u25AC',
        '\u25AD',
        '\u25AE',
        '\u25AF',
        '\u25B0',
        '\u25B1',
        '\u25B2',
        '\u25B3',
        '\u25B4',
        '\u25B5',
        '\u25B6',
        '\u25B7',
        '\u25B8',
        '\u25B9',
        '\u25BA',
        '\u25BB',
        '\u25BC',
        '\u25BD',
        '\u25BE',
        '\u25BF',
        '\u25C0',
        '\u25C1',
        '\u25C2',
        '\u25C3',
        '\u25C4',
        '\u25C5',
        '\u25CF',
        '\u25CB',
        '\u25CE',
        '\u25C9',
        '\u25CC',
        '\u25CD',
        '\u25D0',
        '\u25D1',
        '\u25D2',
        '\u25D3',
      ],
    },
    {
      name: 'punctuation',
      label: 'Punctuation',
      symbols: [
        '\u2013',
        '\u2014',
        '\u2018',
        '\u2019',
        '\u201C',
        '\u201D',
        '\xAB',
        '\xBB',
        '\u2039',
        '\u203A',
        '\u2026',
        '\xB7',
        '\u2022',
        '\u2023',
        '\u2043',
        '\u2010',
        '\u2011',
        '\u2012',
        '\u2015',
        '\u2016',
        '\u2032',
        '\u2033',
        '\u2034',
        '\u2057',
        '\u2035',
        '\u2036',
        '\u2037',
        '\u203B',
        '\u203D',
        '\u2042',
      ],
    },
    {
      name: 'currency',
      label: 'Currency',
      symbols: [
        '$',
        '\xA2',
        '\xA3',
        '\xA4',
        '\xA5',
        '\u20A0',
        '\u20A1',
        '\u20A2',
        '\u20A3',
        '\u20A4',
        '\u20A5',
        '\u20A6',
        '\u20A7',
        '\u20A8',
        '\u20A9',
        '\u20AA',
        '\u20AB',
        '\u20AC',
        '\u20AD',
        '\u20AE',
        '\u20AF',
        '\u20B0',
        '\u20B1',
        '\u20B2',
        '\u20B3',
        '\u20B4',
        '\u20B5',
        '\u20B6',
        '\u20B7',
        '\u20B8',
      ],
    },
    {
      name: 'music',
      label: 'Music',
      symbols: [
        '\u2669',
        '\u266A',
        '\u266B',
        '\u266C',
        '\u266D',
        '\u266E',
        '\u266F',
        '\u{1D11E}',
        '\u{1D122}',
        '\u{1D12A}',
        '\u{1D12B}',
        '\u{1D157}\u{1D165}',
        '\u{1D158}\u{1D165}',
        '\u{1D158}\u{1D165}\u{1D16E}',
        '\u{1D158}\u{1D165}\u{1D16F}',
        '\u{1D158}\u{1D165}\u{1D170}',
        '\u{1D192}',
        '\u{1D193}',
        '\u{1D110}',
        '\u{1D111}',
      ],
    },
    {
      name: 'emoji',
      label: 'Emoji',
      symbols: [
        '\u{1F600}',
        '\u{1F603}',
        '\u{1F604}',
        '\u{1F601}',
        '\u{1F606}',
        '\u{1F605}',
        '\u{1F923}',
        '\u{1F602}',
        '\u{1F642}',
        '\u{1F643}',
        '\u{1F609}',
        '\u{1F60A}',
        '\u{1F607}',
        '\u{1F970}',
        '\u{1F60D}',
        '\u{1F929}',
        '\u{1F618}',
        '\u{1F617}',
        '\u263A',
        '\u{1F61A}',
        '\u2764',
        '\u{1F9E1}',
        '\u{1F49B}',
        '\u{1F49A}',
        '\u{1F499}',
        '\u{1F49C}',
        '\u{1F5A4}',
        '\u{1F90D}',
        '\u{1F494}',
        '\u2763',
        '\u{1F44D}',
        '\u{1F44E}',
        '\u{1F44C}',
        '\u270C',
        '\u{1F91E}',
        '\u{1F91F}',
        '\u{1F918}',
        '\u{1F44B}',
        '\u{1F64F}',
        '\u2705',
      ],
    },
  ];
function Dt() {
  return we.flatMap((e) => e.symbols);
}
function Aa({ isOpen: e, onClose: t, onInsert: o, recentSymbols: r = [], className: i, style: n }) {
  let [a, g] = useState('common'),
    [s, l] = useState(null),
    [f, m] = useState(''),
    [p, c] = useState(null),
    h = useRef(null);
  useEffect(() => {
    e && (l(null), m(''), c(null), setTimeout(() => h.current?.focus(), 100));
  }, [e]);
  let b = useMemo(() => {
      if (!f.trim()) return a === 'recent' ? r : we.find((P) => P.name === a)?.symbols || [];
      let y = f.toLowerCase();
      return Dt().filter((T) => {
        let P = T.codePointAt(0)?.toString(16).toUpperCase() || '';
        return T.includes(y) || P.includes(y.toUpperCase()) || `U+${P}`.toLowerCase().includes(y);
      });
    }, [f, a, r]),
    d = useCallback((y) => {
      l(y);
    }, []),
    x = useCallback(
      (y) => {
        o(y);
      },
      [o]
    ),
    u = useCallback(() => {
      s && o(s);
    }, [s, o]),
    v = useCallback(
      (y) => {
        y.key === 'Escape' ? t() : y.key === 'Enter' && s && (y.preventDefault(), u());
      },
      [t, s, u]
    ),
    C = useCallback(
      (y) => {
        y.target === y.currentTarget && t();
      },
      [t]
    ),
    R = (y) => {
      if (!y) return null;
      let U = y.codePointAt(0);
      return {
        character: y,
        codePoint: U ? `U+${U.toString(16).toUpperCase().padStart(4, '0')}` : '',
        decimal: U || 0,
      };
    };
  if (!e) return null;
  let I = R(p || s),
    A = s !== null,
    N = [
      ...(r.length > 0 ? [{ name: 'recent', label: 'Recent' }] : []),
      ...we.map((y) => ({ name: y.name, label: y.label })),
    ];
  return jsx('div', {
    className: `docx-insert-symbol-dialog-overlay ${i || ''}`,
    style: { ...on, ...n },
    onClick: C,
    onKeyDown: v,
    role: 'dialog',
    'aria-modal': 'true',
    'aria-labelledby': 'insert-symbol-dialog-title',
    children: jsxs('div', {
      className: 'docx-insert-symbol-dialog',
      style: rn,
      children: [
        jsxs('div', {
          className: 'docx-insert-symbol-dialog-header',
          style: nn,
          children: [
            jsx('h2', { id: 'insert-symbol-dialog-title', style: an, children: 'Insert Symbol' }),
            jsx('button', {
              type: 'button',
              className: 'docx-insert-symbol-dialog-close',
              style: sn,
              onClick: t,
              'aria-label': 'Close dialog',
              children: '\xD7',
            }),
          ],
        }),
        jsxs('div', {
          className: 'docx-insert-symbol-dialog-body',
          style: ln,
          children: [
            jsx('input', {
              ref: h,
              type: 'text',
              placeholder: 'Search symbols (character or Unicode)...',
              value: f,
              onChange: (y) => m(y.target.value),
              style: cn,
            }),
            !f &&
              jsx('div', {
                className: 'docx-insert-symbol-categories',
                style: dn,
                children: N.map((y) =>
                  jsx(
                    'button',
                    {
                      type: 'button',
                      onClick: () => g(y.name),
                      style: a === y.name ? pn : At,
                      children: y.label,
                    },
                    y.name
                  )
                ),
              }),
            jsx('div', {
              className: 'docx-insert-symbol-grid',
              style: un,
              children: b.map((y, U) =>
                jsx(
                  'button',
                  {
                    type: 'button',
                    onClick: () => d(y),
                    onDoubleClick: () => x(y),
                    onMouseEnter: () => c(y),
                    onMouseLeave: () => c(null),
                    style: {
                      ...gn,
                      ...(s === y
                        ? {
                            backgroundColor: 'var(--doc-primary-light)',
                            borderColor: 'var(--doc-primary)',
                          }
                        : {}),
                    },
                    title: `${y} - U+${y.codePointAt(0)?.toString(16).toUpperCase()}`,
                    children: y,
                  },
                  `${y}-${U}`
                )
              ),
            }),
            b.length === 0 &&
              jsxs('div', {
                style: { textAlign: 'center', padding: '20px', color: 'var(--doc-text-muted)' },
                children: ['No symbols found for "', f, '"'],
              }),
            I &&
              jsxs('div', {
                className: 'docx-insert-symbol-preview',
                style: mn,
                children: [
                  jsx('div', { style: xn, children: I.character }),
                  jsxs('div', {
                    style: fn,
                    children: [
                      jsx('div', {
                        style: { fontSize: '14px', fontWeight: 500, marginBottom: '4px' },
                        children: I.codePoint,
                      }),
                      jsxs('div', {
                        style: { fontSize: '12px', color: 'var(--doc-text-muted)' },
                        children: ['Decimal: ', I.decimal],
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
        jsxs('div', {
          className: 'docx-insert-symbol-dialog-footer',
          style: hn,
          children: [
            jsx('button', {
              type: 'button',
              className: 'docx-insert-symbol-dialog-cancel',
              style: vn,
              onClick: t,
              children: 'Cancel',
            }),
            jsx('button', {
              type: 'button',
              className: 'docx-insert-symbol-dialog-insert',
              style: A ? bn : yn,
              onClick: u,
              disabled: !A,
              children: 'Insert',
            }),
          ],
        }),
      ],
    }),
  });
}
function Da(e = 20) {
  let [t, o] = useState(false),
    [r, i] = useState([]),
    n = useCallback(() => o(true), []),
    a = useCallback(() => o(false), []),
    g = useCallback(() => o((l) => !l), []),
    s = useCallback(
      (l) => {
        i((f) => {
          let m = f.filter((p) => p !== l);
          return [l, ...m].slice(0, e);
        });
      },
      [e]
    );
  return { isOpen: t, recentSymbols: r, open: n, close: a, toggle: g, addRecent: s };
}
function Ma() {
  return we;
}
function Oa(e) {
  return we.find((o) => o.name === e)?.symbols || [];
}
function _a(e) {
  let t = e.codePointAt(0) || 0;
  return {
    character: e,
    codePoint: `U+${t.toString(16).toUpperCase().padStart(4, '0')}`,
    decimal: t,
    hex: t.toString(16).toUpperCase(),
  };
}
function Na(e) {
  if (!e.trim()) return [];
  let t = e.toLowerCase();
  return Dt().filter((o) => {
    let r = o.codePointAt(0)?.toString(16).toUpperCase() || '';
    return o.includes(e) || r.includes(t.toUpperCase()) || `U+${r}`.toLowerCase().includes(t);
  });
}
function Fa(e) {
  let t = e.replace(/^U\+/i, '').replace(/^0x/i, ''),
    o = parseInt(t, 16);
  return isNaN(o) || o < 0 || o > 1114111 ? null : String.fromCodePoint(o);
}
var ne = [
    {
      id: 'formatted',
      label: 'Keep Source Formatting',
      description: 'Paste with original formatting',
      shortcut: 'Ctrl+V',
    },
    {
      id: 'plainText',
      label: 'Paste as Plain Text',
      description: 'Paste without any formatting',
      shortcut: 'Ctrl+Shift+V',
    },
  ],
  Sn = () =>
    jsxs('svg', {
      width: '20',
      height: '20',
      viewBox: '0 0 20 20',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        jsx('path', {
          d: 'M4 4h12v2H4V4zM4 8h8v2H4V8zM4 12h10v2H4v-2zM4 16h6v2H4v-2z',
          fill: 'currentColor',
        }),
        jsx('path', { d: 'M14 10l3 3-3 3v-2h-2v-2h2v-2z', fill: 'currentColor', opacity: '0.6' }),
      ],
    }),
  wn = () =>
    jsx('svg', {
      width: '20',
      height: '20',
      viewBox: '0 0 20 20',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: jsx('path', {
        d: 'M4 4h12v1H4V4zM4 7h12v1H4V7zM4 10h12v1H4v-1zM4 13h12v1H4v-1zM4 16h8v1H4v-1z',
        fill: 'currentColor',
      }),
    });
function kn(e) {
  switch (e) {
    case 'formatted':
      return jsx(Sn, {});
    case 'plainText':
      return jsx(wn, {});
    default:
      return null;
  }
}
var Tn = ({ option: e, isSelected: t, onClick: o, onMouseEnter: r }) =>
    jsxs('button', {
      type: 'button',
      className: `docx-paste-special-option ${t ? 'docx-paste-special-option-selected' : ''}`,
      onClick: o,
      onMouseEnter: r,
      role: 'menuitem',
      'aria-selected': t,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        width: '100%',
        padding: '12px 16px',
        border: 'none',
        background: t ? 'var(--doc-primary-light)' : 'transparent',
        cursor: 'pointer',
        textAlign: 'left',
        borderRadius: '4px',
        transition: 'background-color 0.15s ease',
      },
      children: [
        jsx('span', {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            borderRadius: '4px',
            background: t ? 'var(--doc-primary)' : 'var(--doc-bg-hover)',
            color: t ? 'white' : 'var(--doc-text-muted)',
          },
          children: kn(e.id),
        }),
        jsxs('div', {
          style: { flex: 1 },
          children: [
            jsx('div', {
              style: {
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--doc-text)',
                marginBottom: '2px',
              },
              children: e.label,
            }),
            jsx('div', {
              style: { fontSize: '12px', color: 'var(--doc-text-muted)' },
              children: e.description,
            }),
          ],
        }),
        jsx('span', {
          style: { fontSize: '11px', color: 'var(--doc-text-subtle)', fontFamily: 'monospace' },
          children: e.shortcut,
        }),
      ],
    }),
  Ua = ({ isOpen: e, onClose: t, onPaste: o, position: r, className: i = '' }) => {
    let n = useRef(null),
      [a, g] = useState(0),
      [s, l] = useState(null),
      [f, m] = useState(false),
      [p, c] = useState(null);
    (useEffect(() => {
      if (!e) {
        (l(null), c(null), g(0));
        return;
      }
      (async () => {
        (m(true), c(null));
        try {
          let x = await oa$1({ cleanWordFormatting: !0 });
          (l(x), x || c('No content available to paste'));
        } catch {
          c('Unable to read clipboard. Please use Ctrl+V to paste.');
        } finally {
          m(false);
        }
      })();
    }, [e]),
      useEffect(() => {
        if (!e) return;
        let d = (x) => {
          n.current && !n.current.contains(x.target) && t();
        };
        return (
          document.addEventListener('mousedown', d),
          () => document.removeEventListener('mousedown', d)
        );
      }, [e, t]),
      useEffect(() => {
        if (!e) return;
        let d = (x) => {
          switch (x.key) {
            case 'Escape':
              (x.preventDefault(), t());
              break;
            case 'ArrowDown':
              (x.preventDefault(), g((u) => (u + 1) % ne.length));
              break;
            case 'ArrowUp':
              (x.preventDefault(), g((u) => (u - 1 + ne.length) % ne.length));
              break;
            case 'Enter':
              (x.preventDefault(), h(ne[a].id));
              break;
          }
        };
        return (
          document.addEventListener('keydown', d),
          () => document.removeEventListener('keydown', d)
        );
      }, [e, a, t]));
    let h = useCallback(
        (d) => {
          if (!s) {
            c('No content available to paste');
            return;
          }
          (o(s, d === 'plainText'), t());
        },
        [s, o, t]
      ),
      b = useCallback(() => {
        let u = r?.x ?? (typeof window < 'u' ? window.innerWidth / 2 - 160 : 100),
          v = r?.y ?? (typeof window < 'u' ? window.innerHeight / 2 - 200 / 2 : 100);
        return (
          typeof window < 'u' &&
            (u + 320 > window.innerWidth && (u = window.innerWidth - 320 - 10),
            v + 200 > window.innerHeight && (v = window.innerHeight - 200 - 10),
            u < 10 && (u = 10),
            v < 10 && (v = 10)),
          {
            position: 'fixed',
            top: v,
            left: u,
            width: 320,
            background: 'white',
            border: '1px solid var(--doc-border-light)',
            borderRadius: '8px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
            zIndex: 10001,
            overflow: 'hidden',
          }
        );
      }, [r]);
    return e
      ? jsxs('div', {
          ref: n,
          className: `docx-paste-special-dialog ${i}`,
          style: b(),
          role: 'dialog',
          'aria-label': 'Paste Special',
          children: [
            jsxs('div', {
              style: {
                padding: '12px 16px',
                borderBottom: '1px solid var(--doc-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              },
              children: [
                jsx('span', {
                  style: { fontSize: '14px', fontWeight: 600, color: 'var(--doc-text)' },
                  children: 'Paste Special',
                }),
                jsx('button', {
                  type: 'button',
                  onClick: t,
                  'aria-label': 'Close',
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    borderRadius: '4px',
                    color: 'var(--doc-text-muted)',
                  },
                  children: jsx('svg', {
                    width: '16',
                    height: '16',
                    viewBox: '0 0 16 16',
                    fill: 'none',
                    children: jsx('path', {
                      d: 'M4 4l8 8M12 4l-8 8',
                      stroke: 'currentColor',
                      strokeWidth: '1.5',
                      strokeLinecap: 'round',
                    }),
                  }),
                }),
              ],
            }),
            jsx('div', {
              style: { padding: '8px' },
              children: f
                ? jsx('div', {
                    style: {
                      padding: '20px',
                      textAlign: 'center',
                      color: 'var(--doc-text-muted)',
                      fontSize: '13px',
                    },
                    children: 'Reading clipboard...',
                  })
                : p
                  ? jsx('div', {
                      style: {
                        padding: '20px',
                        textAlign: 'center',
                        color: 'var(--doc-error)',
                        fontSize: '13px',
                      },
                      children: p,
                    })
                  : jsx('div', {
                      role: 'menu',
                      children: ne.map((d, x) =>
                        jsx(
                          Tn,
                          {
                            option: d,
                            isSelected: x === a,
                            onClick: () => h(d.id),
                            onMouseEnter: () => g(x),
                          },
                          d.id
                        )
                      ),
                    }),
            }),
            s &&
              !f &&
              !p &&
              jsxs('div', {
                style: { padding: '8px 16px 12px', borderTop: '1px solid var(--doc-border)' },
                children: [
                  jsx('div', {
                    style: {
                      fontSize: '11px',
                      color: 'var(--doc-text-muted)',
                      marginBottom: '4px',
                    },
                    children: 'Preview:',
                  }),
                  jsxs('div', {
                    style: {
                      fontSize: '12px',
                      color: 'var(--doc-text)',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      padding: '6px 8px',
                      background: 'var(--doc-bg)',
                      borderRadius: '4px',
                    },
                    children: [
                      '"',
                      s.plainText.slice(0, 50),
                      s.plainText.length > 50 ? '...' : '',
                      '"',
                    ],
                  }),
                ],
              }),
          ],
        })
      : null;
  };
function Ka(e = {}) {
  let { onPaste: t, enabled: o = true } = e,
    [r, i] = useState(false),
    n = useCallback(() => {
      o && i(true);
    }, [o]),
    a = useCallback(() => {
      i(false);
    }, []),
    g = useCallback(async () => {
      if (!(!o || !t))
        try {
          let l = await oa$1({ cleanWordFormatting: !0 });
          l && t(l, !0);
        } catch (l) {
          console.error('Failed to paste as plain text:', l);
        }
    }, [o, t]),
    s = useCallback(
      (l) =>
        o && (l.ctrlKey || l.metaKey) && l.shiftKey && l.key.toLowerCase() === 'v'
          ? (l.preventDefault(), n(), true)
          : false,
      [o, n]
    );
  return { isOpen: r, openDialog: n, closeDialog: a, handleKeyDown: s, pasteAsPlainText: g };
}
function $a(e) {
  return ne.find((t) => t.id === e);
}
function Va() {
  return [...ne];
}
function Ga() {
  return 'formatted';
}
function ja(e) {
  return (e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'v';
}
var _t = {
    editing: 'Editing',
    formatting: 'Formatting',
    navigation: 'Navigation',
    clipboard: 'Clipboard',
    selection: 'Selection',
    view: 'View',
    file: 'File',
    other: 'Other',
  },
  Nt = ['file', 'editing', 'clipboard', 'formatting', 'selection', 'navigation', 'view', 'other'],
  Be = [
    {
      id: 'save',
      name: 'Save',
      description: 'Save document',
      keys: 'Ctrl+S',
      category: 'file',
      common: true,
    },
    { id: 'print', name: 'Print', description: 'Print document', keys: 'Ctrl+P', category: 'file' },
    {
      id: 'undo',
      name: 'Undo',
      description: 'Undo last action',
      keys: 'Ctrl+Z',
      category: 'editing',
      common: true,
    },
    {
      id: 'redo',
      name: 'Redo',
      description: 'Redo last action',
      keys: 'Ctrl+Y',
      altKeys: 'Ctrl+Shift+Z',
      category: 'editing',
      common: true,
    },
    {
      id: 'delete',
      name: 'Delete',
      description: 'Delete selected text',
      keys: 'Del',
      altKeys: 'Backspace',
      category: 'editing',
    },
    {
      id: 'find',
      name: 'Find',
      description: 'Find text in document',
      keys: 'Ctrl+F',
      category: 'editing',
      common: true,
    },
    {
      id: 'replace',
      name: 'Find & Replace',
      description: 'Find and replace text',
      keys: 'Ctrl+H',
      category: 'editing',
    },
    {
      id: 'cut',
      name: 'Cut',
      description: 'Cut selected text',
      keys: 'Ctrl+X',
      category: 'clipboard',
      common: true,
    },
    {
      id: 'copy',
      name: 'Copy',
      description: 'Copy selected text',
      keys: 'Ctrl+C',
      category: 'clipboard',
      common: true,
    },
    {
      id: 'paste',
      name: 'Paste',
      description: 'Paste from clipboard',
      keys: 'Ctrl+V',
      category: 'clipboard',
      common: true,
    },
    {
      id: 'paste-plain',
      name: 'Paste as Plain Text',
      description: 'Paste without formatting',
      keys: 'Ctrl+Shift+V',
      category: 'clipboard',
    },
    {
      id: 'bold',
      name: 'Bold',
      description: 'Toggle bold formatting',
      keys: 'Ctrl+B',
      category: 'formatting',
      common: true,
    },
    {
      id: 'italic',
      name: 'Italic',
      description: 'Toggle italic formatting',
      keys: 'Ctrl+I',
      category: 'formatting',
      common: true,
    },
    {
      id: 'underline',
      name: 'Underline',
      description: 'Toggle underline formatting',
      keys: 'Ctrl+U',
      category: 'formatting',
      common: true,
    },
    {
      id: 'strikethrough',
      name: 'Strikethrough',
      description: 'Toggle strikethrough',
      keys: 'Ctrl+Shift+X',
      category: 'formatting',
    },
    {
      id: 'subscript',
      name: 'Subscript',
      description: 'Toggle subscript',
      keys: 'Ctrl+=',
      category: 'formatting',
    },
    {
      id: 'superscript',
      name: 'Superscript',
      description: 'Toggle superscript',
      keys: 'Ctrl+Shift+=',
      category: 'formatting',
    },
    {
      id: 'align-left',
      name: 'Align Left',
      description: 'Left align paragraph',
      keys: 'Ctrl+L',
      category: 'formatting',
    },
    {
      id: 'align-center',
      name: 'Align Center',
      description: 'Center align paragraph',
      keys: 'Ctrl+E',
      category: 'formatting',
    },
    {
      id: 'align-right',
      name: 'Align Right',
      description: 'Right align paragraph',
      keys: 'Ctrl+R',
      category: 'formatting',
    },
    {
      id: 'align-justify',
      name: 'Justify',
      description: 'Justify paragraph',
      keys: 'Ctrl+J',
      category: 'formatting',
    },
    {
      id: 'indent',
      name: 'Increase Indent',
      description: 'Increase paragraph indent',
      keys: 'Tab',
      category: 'formatting',
    },
    {
      id: 'outdent',
      name: 'Decrease Indent',
      description: 'Decrease paragraph indent',
      keys: 'Shift+Tab',
      category: 'formatting',
    },
    {
      id: 'select-all',
      name: 'Select All',
      description: 'Select all content',
      keys: 'Ctrl+A',
      category: 'selection',
      common: true,
    },
    {
      id: 'select-word',
      name: 'Select Word',
      description: 'Select current word',
      keys: 'Double-click',
      category: 'selection',
    },
    {
      id: 'select-paragraph',
      name: 'Select Paragraph',
      description: 'Select current paragraph',
      keys: 'Triple-click',
      category: 'selection',
    },
    {
      id: 'extend-selection-word',
      name: 'Extend Selection by Word',
      description: 'Extend selection to next/previous word',
      keys: 'Ctrl+Shift+Arrow',
      category: 'selection',
    },
    {
      id: 'extend-selection-line',
      name: 'Extend Selection to Line Edge',
      description: 'Extend selection to line start/end',
      keys: 'Shift+Home/End',
      category: 'selection',
    },
    {
      id: 'move-word',
      name: 'Move by Word',
      description: 'Move cursor to next/previous word',
      keys: 'Ctrl+Arrow',
      category: 'navigation',
    },
    {
      id: 'move-line-start',
      name: 'Move to Line Start',
      description: 'Move cursor to start of line',
      keys: 'Home',
      category: 'navigation',
    },
    {
      id: 'move-line-end',
      name: 'Move to Line End',
      description: 'Move cursor to end of line',
      keys: 'End',
      category: 'navigation',
    },
    {
      id: 'move-doc-start',
      name: 'Move to Document Start',
      description: 'Move cursor to start of document',
      keys: 'Ctrl+Home',
      category: 'navigation',
    },
    {
      id: 'move-doc-end',
      name: 'Move to Document End',
      description: 'Move cursor to end of document',
      keys: 'Ctrl+End',
      category: 'navigation',
    },
    {
      id: 'page-up',
      name: 'Page Up',
      description: 'Scroll up one page',
      keys: 'Page Up',
      category: 'navigation',
    },
    {
      id: 'page-down',
      name: 'Page Down',
      description: 'Scroll down one page',
      keys: 'Page Down',
      category: 'navigation',
    },
    {
      id: 'zoom-in',
      name: 'Zoom In',
      description: 'Increase zoom level',
      keys: 'Ctrl++',
      altKeys: 'Ctrl+Scroll Up',
      category: 'view',
    },
    {
      id: 'zoom-out',
      name: 'Zoom Out',
      description: 'Decrease zoom level',
      keys: 'Ctrl+-',
      altKeys: 'Ctrl+Scroll Down',
      category: 'view',
    },
    {
      id: 'zoom-reset',
      name: 'Reset Zoom',
      description: 'Reset zoom to 100%',
      keys: 'Ctrl+0',
      category: 'view',
    },
    {
      id: 'shortcuts',
      name: 'Keyboard Shortcuts',
      description: 'Show this help dialog',
      keys: 'Ctrl+/',
      altKeys: 'F1',
      category: 'view',
    },
  ];
function En() {
  return typeof navigator < 'u' && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
}
function et(e) {
  return En()
    ? e
        .replace(/Ctrl\+/g, '\u2318')
        .replace(/Alt\+/g, '\u2325')
        .replace(/Shift\+/g, '\u21E7')
    : e;
}
var In = ({ shortcut: e }) => {
    let t = et(e.keys),
      o = e.altKeys ? et(e.altKeys) : null;
    return jsxs('div', {
      className: 'docx-shortcut-item',
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '8px 0',
        borderBottom: '1px solid var(--doc-border-light)',
      },
      children: [
        jsxs('div', {
          style: { flex: 1 },
          children: [
            jsx('div', {
              style: { fontSize: '13px', fontWeight: 500, color: 'var(--doc-text)' },
              children: e.name,
            }),
            jsx('div', {
              style: { fontSize: '11px', color: 'var(--doc-text-muted)', marginTop: '2px' },
              children: e.description,
            }),
          ],
        }),
        jsxs('div', {
          style: { display: 'flex', gap: '8px', alignItems: 'center' },
          children: [
            jsx('kbd', {
              style: {
                display: 'inline-flex',
                alignItems: 'center',
                padding: '4px 8px',
                fontSize: '12px',
                fontFamily: 'monospace',
                color: 'var(--doc-text)',
                backgroundColor: 'var(--doc-bg-hover)',
                borderRadius: '4px',
                border: '1px solid var(--doc-border-light)',
                boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
              },
              children: t,
            }),
            o &&
              jsxs(Fragment, {
                children: [
                  jsx('span', {
                    style: { color: 'var(--doc-text-subtle)', fontSize: '11px' },
                    children: 'or',
                  }),
                  jsx('kbd', {
                    style: {
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '4px 8px',
                      fontSize: '12px',
                      fontFamily: 'monospace',
                      color: 'var(--doc-text)',
                      backgroundColor: 'var(--doc-bg-hover)',
                      borderRadius: '4px',
                      border: '1px solid var(--doc-border-light)',
                      boxShadow: '0 1px 1px rgba(0,0,0,0.1)',
                    },
                    children: o,
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  },
  qa = ({
    isOpen: e,
    onClose: t,
    customShortcuts: o = [],
    showSearch: r = true,
    className: i = '',
  }) => {
    let n = useRef(null),
      a = useRef(null),
      [g, s] = useState(''),
      l = useMemo(() => {
        let p = [...Be];
        for (let c of o) {
          let h = p.findIndex((b) => b.id === c.id);
          h >= 0 ? (p[h] = c) : p.push(c);
        }
        return p;
      }, [o]),
      f = useMemo(() => {
        if (!g.trim()) return l;
        let p = g.toLowerCase();
        return l.filter(
          (c) =>
            c.name.toLowerCase().includes(p) ||
            c.description.toLowerCase().includes(p) ||
            c.keys.toLowerCase().includes(p) ||
            (c.altKeys && c.altKeys.toLowerCase().includes(p))
        );
      }, [l, g]),
      m = useMemo(() => {
        let p = new Map();
        for (let h of f) {
          let b = p.get(h.category) || [];
          (b.push(h), p.set(h.category, b));
        }
        let c = [];
        for (let h of Nt) {
          let b = p.get(h);
          b && b.length > 0 && c.push({ category: h, shortcuts: b });
        }
        return c;
      }, [f]);
    return (
      useEffect(() => {
        e && r && a.current && setTimeout(() => a.current?.focus(), 0);
      }, [e, r]),
      useEffect(() => {
        e || s('');
      }, [e]),
      useEffect(() => {
        if (!e) return;
        let p = (c) => {
          n.current && !n.current.contains(c.target) && t();
        };
        return (
          document.addEventListener('mousedown', p),
          () => document.removeEventListener('mousedown', p)
        );
      }, [e, t]),
      useEffect(() => {
        if (!e) return;
        let p = (c) => {
          c.key === 'Escape' && t();
        };
        return (
          document.addEventListener('keydown', p),
          () => document.removeEventListener('keydown', p)
        );
      }, [e, t]),
      e
        ? jsx('div', {
            className: 'docx-shortcuts-overlay',
            style: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10001,
            },
            children: jsxs('div', {
              ref: n,
              className: `docx-shortcuts-dialog ${i}`,
              style: {
                width: '600px',
                maxWidth: '90vw',
                maxHeight: '80vh',
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              },
              role: 'dialog',
              'aria-label': 'Keyboard Shortcuts',
              children: [
                jsxs('div', {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    borderBottom: '1px solid var(--doc-border)',
                  },
                  children: [
                    jsx('h2', {
                      style: {
                        margin: 0,
                        fontSize: '18px',
                        fontWeight: 600,
                        color: 'var(--doc-text)',
                      },
                      children: 'Keyboard Shortcuts',
                    }),
                    jsx('button', {
                      type: 'button',
                      onClick: t,
                      'aria-label': 'Close',
                      style: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                        borderRadius: '50%',
                        color: 'var(--doc-text-muted)',
                      },
                      children: jsx('svg', {
                        width: '20',
                        height: '20',
                        viewBox: '0 0 20 20',
                        fill: 'none',
                        children: jsx('path', {
                          d: 'M5 5l10 10M15 5L5 15',
                          stroke: 'currentColor',
                          strokeWidth: '1.5',
                          strokeLinecap: 'round',
                        }),
                      }),
                    }),
                  ],
                }),
                r &&
                  jsx('div', {
                    style: { padding: '12px 20px', borderBottom: '1px solid var(--doc-border)' },
                    children: jsx('input', {
                      ref: a,
                      type: 'text',
                      value: g,
                      onChange: (p) => s(p.target.value),
                      placeholder: 'Search shortcuts...',
                      style: {
                        width: '100%',
                        padding: '10px 12px',
                        fontSize: '14px',
                        border: '1px solid var(--doc-border-light)',
                        borderRadius: '6px',
                        outline: 'none',
                      },
                    }),
                  }),
                jsx('div', {
                  style: { flex: 1, overflowY: 'auto', padding: '16px 20px' },
                  children:
                    m.length === 0
                      ? jsxs('div', {
                          style: {
                            textAlign: 'center',
                            padding: '32px',
                            color: 'var(--doc-text-muted)',
                          },
                          children: ['No shortcuts found matching "', g, '"'],
                        })
                      : m.map(({ category: p, shortcuts: c }) =>
                          jsxs(
                            'div',
                            {
                              style: { marginBottom: '24px' },
                              children: [
                                jsx('h3', {
                                  style: {
                                    margin: '0 0 12px 0',
                                    fontSize: '13px',
                                    fontWeight: 600,
                                    color: 'var(--doc-primary)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                  },
                                  children: _t[p],
                                }),
                                jsx('div', {
                                  children: c.map((h) => jsx(In, { shortcut: h }, h.id)),
                                }),
                              ],
                            },
                            p
                          )
                        ),
                }),
                jsxs('div', {
                  style: {
                    padding: '12px 20px',
                    borderTop: '1px solid var(--doc-border)',
                    backgroundColor: 'var(--doc-bg)',
                    fontSize: '12px',
                    color: 'var(--doc-text-muted)',
                    textAlign: 'center',
                  },
                  children: [
                    'Press',
                    ' ',
                    jsx('kbd', {
                      style: {
                        padding: '2px 6px',
                        backgroundColor: 'white',
                        borderRadius: '4px',
                        border: '1px solid var(--doc-border-light)',
                      },
                      children: 'Esc',
                    }),
                    ' ',
                    'to close',
                  ],
                }),
              ],
            }),
          })
        : null
    );
  };
function es(e = {}) {
  let { enabled: t = true, openShortcut: o = 'Ctrl+/' } = e,
    [r, i] = useState(false),
    n = useCallback(() => {
      t && i(true);
    }, [t]),
    a = useCallback(() => {
      i(false);
    }, []),
    g = useCallback(() => {
      i((l) => !l);
    }, []),
    s = useCallback(
      (l) => {
        if (!t) return;
        if ((l.ctrlKey || l.metaKey) && (l.key === '/' || l.key === '?')) {
          (l.preventDefault(), g());
          return;
        }
        if (l.key === 'F1') {
          (l.preventDefault(), n());
          return;
        }
      },
      [t, g, n]
    );
  return (
    useEffect(() => {
      if (t)
        return (
          document.addEventListener('keydown', s),
          () => document.removeEventListener('keydown', s)
        );
    }, [t, s]),
    { isOpen: r, open: n, close: a, toggle: g, handleKeyDown: s }
  );
}
function ts() {
  return [...Be];
}
function os(e) {
  return Be.filter((t) => t.category === e);
}
function rs() {
  return Be.filter((e) => e.common);
}
function ns(e) {
  return _t[e];
}
function is() {
  return [...Nt];
}
function as(e) {
  return et(e);
}
export {
  ka as $,
  Fi as A,
  Hi as B,
  Ui as C,
  Ki as D,
  $i as E,
  Vi as F,
  Gi as G,
  ji as H,
  cr as I,
  Ji as J,
  qi as K,
  ea as L,
  ta as M,
  oa as N,
  sa as O,
  la as P,
  ca as Q,
  da as R,
  pa as S,
  ua as T,
  ga as U,
  ba as V,
  va as W,
  ya as X,
  Ca as Y,
  Sa as Z,
  wa as _,
  Dn as a,
  Ta as aa,
  Mn as b,
  Ea as ba,
  On as c,
  we as ca,
  _n as d,
  Aa as da,
  Nn as e,
  Da as ea,
  Fn as f,
  Ma as fa,
  Un as g,
  Oa as ga,
  Kn as h,
  _a as ha,
  $n as i,
  Na as ia,
  Vn as j,
  Fa as ja,
  Qn as k,
  Ua as ka,
  Jn as l,
  Ka as la,
  qn as m,
  $a as ma,
  ei as n,
  Va as na,
  ti as o,
  Ga as oa,
  oi as p,
  ja as pa,
  ci as q,
  qa,
  ui as r,
  es as ra,
  gi as s,
  ts as sa,
  mi as t,
  os as ta,
  xi as u,
  rs as ua,
  fi as v,
  ns as va,
  hi as w,
  is as wa,
  bi as x,
  as as xa,
  vi as y,
  Pi as z,
}; //# sourceMappingURL=chunk-BBURDKDC.js.map
//# sourceMappingURL=chunk-BBURDKDC.js.map
