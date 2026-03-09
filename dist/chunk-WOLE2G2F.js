import {
  l,
  k,
  i,
  j,
  c as c$1,
  h as h$1,
  e as e$2,
  f as f$2,
  a as a$2,
  d as d$2,
  g as g$1,
} from './chunk-Y2IOPU4P.js';
import {
  f,
  u,
  y,
  x,
  v,
  d,
  O,
  i as i$1,
  H,
  z,
  U,
  aa,
  $,
  V,
  _,
  Y,
  Z,
  X,
  da,
  ka,
  fa,
  ja as ja$1,
} from './chunk-4HBVK3KZ.js';
import { m, j as j$1, l as l$1 } from './chunk-M2T6XKT5.js';
import { m as m$1 } from './chunk-Q6HUGWO6.js';
import { J, C, z as z$1, B, A, H as H$1, I, r as r$1, F } from './chunk-PCWVYQKY.js';
import { c } from './chunk-667XFXTH.js';
import { a, r, s, B as B$1, A as A$1, n, z as z$2, y as y$1, c as c$3 } from './chunk-CXJ6TLVT.js';
import { a as a$1 } from './chunk-JOYPFQW2.js';
import { o, q, k as k$1, e as e$1, c as c$2, d as d$3 } from './chunk-OECSQ2YK.js';
import { d as d$1, f as f$1, g, i as i$2, e, h } from './chunk-Y6VCTLCJ.js';
import Lu, {
  createContext,
  forwardRef,
  useRef,
  useState,
  useLayoutEffect,
  useEffect,
  useCallback,
  useImperativeHandle,
  memo,
  useMemo,
  lazy,
  Suspense,
  useSyncExternalStore,
  cloneElement,
  Component,
  useContext,
} from 'react';
import { jsxs, jsx, Fragment as Fragment$1 } from 'react/jsx-runtime';
import {
  PluginKey,
  EditorState,
  NodeSelection,
  TextSelection,
  Plugin,
  Selection,
} from 'prosemirror-state';
import { EditorView, DecorationSet, Decoration } from 'prosemirror-view';
import { redo, undo, history } from 'prosemirror-history';
import { Schema, Fragment } from 'prosemirror-model';
import {
  toggleMark,
  selectParentNode,
  selectAll,
  baseKeymap,
  splitBlock,
  joinForward,
  deleteSelection,
  joinBackward,
} from 'prosemirror-commands';
import {
  CellSelection,
  splitCell,
  mergeCells,
  columnResizing,
  tableEditing,
} from 'prosemirror-tables';
import { dropCursor } from 'prosemirror-dropcursor';
import { keymap } from 'prosemirror-keymap';
import 'prosemirror-view/style/prosemirror.css';
import { createRoot } from 'react-dom/client';
var ml = createContext(null);
function Qb() {
  let e = useContext(ml);
  if (!e) throw new Error('useErrorNotifications must be used within an ErrorProvider');
  return e;
}
function gl({ children: e }) {
  let t = useMemo(() => new H$1(), []),
    n = useSyncExternalStore(t.subscribe, t.getSnapshot),
    o = useCallback(
      (u, d) => {
        t.showError(u, d);
      },
      [t]
    ),
    r = useCallback(
      (u, d) => {
        t.showWarning(u, d);
      },
      [t]
    ),
    i = useCallback(
      (u, d) => {
        t.showInfo(u, d);
      },
      [t]
    ),
    a = useCallback(
      (u) => {
        t.dismiss(u);
      },
      [t]
    ),
    s = useCallback(() => {
      t.clearAll();
    }, [t]),
    l = useMemo(
      () => ({
        notifications: n.notifications,
        showError: o,
        showWarning: r,
        showInfo: i,
        dismissNotification: a,
        clearNotifications: s,
      }),
      [n.notifications, o, r, i, a, s]
    );
  return jsxs(ml.Provider, {
    value: l,
    children: [e, jsx(gp, { notifications: n.notifications, onDismiss: a })],
  });
}
function gp({ notifications: e, onDismiss: t }) {
  let n = e.filter((r) => !r.dismissed);
  return n.length === 0
    ? null
    : jsx('div', {
        className: 'docx-notification-container',
        style: {
          position: 'fixed',
          top: '16px',
          right: '16px',
          zIndex: 10001,
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          maxWidth: '400px',
        },
        children: n.map((r) => jsx(hp, { notification: r, onDismiss: () => t(r.id) }, r.id)),
      });
}
function hp({ notification: e, onDismiss: t }) {
  let [n, o] = useState(false),
    i = ((m) => {
      switch (m) {
        case 'error':
          return {
            bg: 'var(--doc-error-bg)',
            border: '#f5c6cb',
            text: 'var(--doc-error)',
            icon: 'var(--doc-error)',
          };
        case 'warning':
          return {
            bg: 'var(--doc-warning-bg)',
            border: '#ffeeba',
            text: '#856404',
            icon: 'var(--doc-warning)',
          };
        case 'info':
          return { bg: '#e8f4fd', border: '#b8daff', text: '#0c5460', icon: 'var(--doc-primary)' };
      }
    })(e.severity),
    a = {
      background: i.bg,
      border: `1px solid ${i.border}`,
      borderRadius: '8px',
      padding: '12px 16px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
      animation: 'slideIn 0.3s ease-out',
    },
    s = { display: 'flex', alignItems: 'flex-start', gap: '8px' },
    l = { color: i.icon, flexShrink: 0 },
    u = { flex: 1, minWidth: 0 },
    d = { color: i.text, fontSize: '14px', fontWeight: 500, wordBreak: 'break-word' },
    c = {
      marginTop: '8px',
      padding: '8px',
      background: 'rgba(0, 0, 0, 0.05)',
      borderRadius: '4px',
      fontSize: '12px',
      fontFamily: 'monospace',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
      color: i.text,
      maxHeight: '200px',
      overflow: 'auto',
    },
    p = {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '4px',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: i.text,
    },
    f = (m) => {
      switch (m) {
        case 'error':
          return jsxs('svg', {
            width: '20',
            height: '20',
            viewBox: '0 0 20 20',
            fill: 'none',
            children: [
              jsx('circle', {
                cx: '10',
                cy: '10',
                r: '8',
                stroke: 'currentColor',
                strokeWidth: '1.5',
              }),
              jsx('path', {
                d: 'M10 6v5M10 13v1',
                stroke: 'currentColor',
                strokeWidth: '1.5',
                strokeLinecap: 'round',
              }),
            ],
          });
        case 'warning':
          return jsxs('svg', {
            width: '20',
            height: '20',
            viewBox: '0 0 20 20',
            fill: 'none',
            children: [
              jsx('path', {
                d: 'M10 3L18 17H2L10 3z',
                stroke: 'currentColor',
                strokeWidth: '1.5',
                strokeLinejoin: 'round',
              }),
              jsx('path', {
                d: 'M10 8v4M10 14v1',
                stroke: 'currentColor',
                strokeWidth: '1.5',
                strokeLinecap: 'round',
              }),
            ],
          });
        case 'info':
          return jsxs('svg', {
            width: '20',
            height: '20',
            viewBox: '0 0 20 20',
            fill: 'none',
            children: [
              jsx('circle', {
                cx: '10',
                cy: '10',
                r: '8',
                stroke: 'currentColor',
                strokeWidth: '1.5',
              }),
              jsx('path', {
                d: 'M10 9v5M10 6v1',
                stroke: 'currentColor',
                strokeWidth: '1.5',
                strokeLinecap: 'round',
              }),
            ],
          });
      }
    };
  return jsxs('div', {
    className: `docx-notification-toast docx-notification-${e.severity}`,
    style: a,
    children: [
      jsx('style', {
        children: `
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(100%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `,
      }),
      jsxs('div', {
        style: s,
        children: [
          jsx('span', { style: l, children: f(e.severity) }),
          jsxs('div', {
            style: u,
            children: [
              jsx('div', { style: d, children: e.message }),
              e.details &&
                jsxs(Fragment$1, {
                  children: [
                    jsx('button', {
                      type: 'button',
                      onClick: () => o(!n),
                      style: { ...p, marginTop: '4px', fontSize: '12px', padding: '2px 8px' },
                      children: n ? 'Hide details' : 'Show details',
                    }),
                    n && jsx('div', { style: c, children: e.details }),
                  ],
                }),
            ],
          }),
          jsx('button', {
            type: 'button',
            onClick: t,
            style: p,
            title: 'Dismiss',
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
    ],
  });
}
var fr = class extends Component {
  constructor(n) {
    super(n);
    d$1(this, 'resetError', () => {
      this.setState({ hasError: false, error: null, errorInfo: null });
    });
    this.state = { hasError: false, error: null, errorInfo: null };
  }
  static getDerivedStateFromError(n) {
    return { hasError: true, error: n };
  }
  componentDidCatch(n, o) {
    (this.setState({ errorInfo: o }),
      console.error('ErrorBoundary caught an error:', n, o),
      this.props.onError && this.props.onError(n, o));
  }
  render() {
    if (this.state.hasError) {
      let { fallback: n, showDetails: o = true } = this.props,
        { error: r, errorInfo: i } = this.state;
      return n
        ? typeof n == 'function'
          ? n(r, this.resetError)
          : n
        : jsx(bp, { error: r, errorInfo: i, showDetails: o, onReset: this.resetError });
    }
    return this.props.children;
  }
};
function bp({ error: e, errorInfo: t, showDetails: n, onReset: o }) {
  let r = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      textAlign: 'center',
      minHeight: '200px',
      background: 'white',
      borderRadius: '8px',
      border: '1px solid var(--doc-border)',
      margin: '20px',
    },
    i = { color: 'var(--doc-error)', marginBottom: '16px' },
    a = { fontSize: '18px', fontWeight: 600, color: 'var(--doc-text)', marginBottom: '8px' },
    s = {
      fontSize: '14px',
      color: 'var(--doc-text-muted)',
      marginBottom: '16px',
      maxWidth: '400px',
    },
    l = {
      width: '100%',
      maxWidth: '600px',
      marginBottom: '16px',
      padding: '12px',
      background: 'var(--doc-error-bg)',
      borderRadius: '4px',
      fontSize: '12px',
      fontFamily: 'monospace',
      textAlign: 'left',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
      maxHeight: '200px',
      overflow: 'auto',
    },
    u = {
      padding: '10px 20px',
      background: 'var(--doc-primary)',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '14px',
      cursor: 'pointer',
    };
  return jsxs('div', {
    className: 'docx-error-fallback',
    style: r,
    children: [
      jsx('div', {
        style: i,
        children: jsxs('svg', {
          width: '48',
          height: '48',
          viewBox: '0 0 48 48',
          fill: 'none',
          children: [
            jsx('circle', {
              cx: '24',
              cy: '24',
              r: '20',
              stroke: 'currentColor',
              strokeWidth: '2',
            }),
            jsx('path', {
              d: 'M24 14v12M24 30v2',
              stroke: 'currentColor',
              strokeWidth: '2',
              strokeLinecap: 'round',
            }),
          ],
        }),
      }),
      jsx('h2', { style: a, children: 'Something went wrong' }),
      jsx('p', {
        style: s,
        children:
          'An error occurred while rendering this component. Please try again or contact support if the problem persists.',
      }),
      n &&
        jsxs('div', {
          style: l,
          children: [
            jsx('strong', { children: 'Error:' }),
            ' ',
            e.message,
            t &&
              jsxs(Fragment$1, {
                children: [
                  `

`,
                  jsx('strong', { children: 'Component Stack:' }),
                  t.componentStack,
                ],
              }),
          ],
        }),
      jsx('button', { type: 'button', onClick: o, style: u, children: 'Try Again' }),
    ],
  });
}
function ey({ message: e, details: t, onRetry: n, className: o = '' }) {
  let r = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      textAlign: 'center',
      background: 'white',
      borderRadius: '8px',
      border: '1px solid var(--doc-border-light)',
    },
    i = { color: 'var(--doc-error)', marginBottom: '16px' },
    a = { fontSize: '16px', fontWeight: 600, color: 'var(--doc-text)', marginBottom: '8px' },
    s = {
      fontSize: '14px',
      color: 'var(--doc-text-muted)',
      marginBottom: '16px',
      maxWidth: '400px',
    },
    l = {
      marginBottom: '16px',
      padding: '12px',
      background: 'var(--doc-bg)',
      borderRadius: '4px',
      fontSize: '12px',
      fontFamily: 'monospace',
      maxWidth: '100%',
      overflow: 'auto',
      textAlign: 'left',
    },
    u = {
      padding: '8px 16px',
      background: 'var(--doc-primary)',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      fontSize: '13px',
      cursor: 'pointer',
    };
  return jsxs('div', {
    className: `docx-parse-error ${o}`,
    style: r,
    children: [
      jsx('div', {
        style: i,
        children: jsxs('svg', {
          width: '40',
          height: '40',
          viewBox: '0 0 40 40',
          fill: 'none',
          children: [
            jsx('path', {
              d: 'M10 10h20v20H10z',
              stroke: 'currentColor',
              strokeWidth: '2',
              strokeLinejoin: 'round',
            }),
            jsx('path', {
              d: 'M25 10l-10 20M15 10l10 20',
              stroke: 'currentColor',
              strokeWidth: '2',
              strokeLinecap: 'round',
            }),
          ],
        }),
      }),
      jsx('h3', { style: a, children: 'Unable to Parse Document' }),
      jsx('p', { style: s, children: e }),
      t && jsx('div', { style: l, children: t }),
      n && jsx('button', { type: 'button', onClick: n, style: u, children: 'Try Again' }),
    ],
  });
}
function ty({ feature: e, description: t, className: n = '' }) {
  let o = {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 12px',
      background: 'var(--doc-warning-bg)',
      border: '1px solid #ffeeba',
      borderRadius: '4px',
      fontSize: '12px',
      color: '#856404',
    },
    r = { flexShrink: 0, color: 'var(--doc-warning)' };
  return jsxs('div', {
    className: `docx-unsupported-warning ${n}`,
    style: o,
    children: [
      jsx('span', {
        style: r,
        children: jsxs('svg', {
          width: '16',
          height: '16',
          viewBox: '0 0 16 16',
          fill: 'none',
          children: [
            jsx('path', {
              d: 'M8 2l7 12H1L8 2z',
              stroke: 'currentColor',
              strokeWidth: '1.5',
              strokeLinejoin: 'round',
            }),
            jsx('path', {
              d: 'M8 6v4M8 12v1',
              stroke: 'currentColor',
              strokeWidth: '1.5',
              strokeLinecap: 'round',
            }),
          ],
        }),
      }),
      jsxs('span', { children: [jsx('strong', { children: e }), t && `: ${t}`] }),
    ],
  });
}
function ny(e) {
  return (
    e.message.includes('parse') ||
    e.message.includes('Parse') ||
    e.message.includes('XML') ||
    e.message.includes('DOCX') ||
    e.message.includes('Invalid')
  );
}
function oy(e) {
  let t = e.message.toLowerCase();
  return t.includes('network') || t.includes('fetch')
    ? 'Network error. Please check your internet connection and try again.'
    : t.includes('parse') || t.includes('xml') || t.includes('invalid')
      ? 'The document could not be parsed. It may be corrupted or in an unsupported format.'
      : t.includes('permission') || t.includes('access')
        ? 'Access denied. You may not have permission to access this file.'
        : t.includes('not found') || t.includes('404')
          ? 'The requested file was not found.'
          : t.includes('timeout')
            ? 'The operation timed out. Please try again.'
            : 'An unexpected error occurred. Please try again.';
}
function bl({ document: e, onChange: t, onSelectionChange: n }) {
  let o = useMemo(() => new C(), []),
    [r, i] = useState({
      context: null,
      table: null,
      tableIndex: null,
      rowIndex: null,
      columnIndex: null,
    }),
    a = useCallback(
      (d, c, p) => {
        if (!e) return;
        let f = z$1(e, d);
        if (!f) {
          (o.clearSelection(),
            i({ context: null, table: null, tableIndex: null, rowIndex: null, columnIndex: null }));
          return;
        }
        o.selectCell({ tableIndex: d, rowIndex: c, columnIndex: p });
        let b = U(f, { tableIndex: d, rowIndex: c, columnIndex: p });
        (i({ context: b, table: f, tableIndex: d, rowIndex: c, columnIndex: p }), n?.(b));
      },
      [e, o, n]
    ),
    s = useCallback(() => {
      (o.clearSelection(),
        i({ context: null, table: null, tableIndex: null, rowIndex: null, columnIndex: null }),
        n?.(null));
    }, [o, n]),
    l = useCallback(
      (d) => {
        if (
          !e ||
          !r.context ||
          r.tableIndex === null ||
          r.rowIndex === null ||
          r.columnIndex === null
        )
          return;
        let c = r.table;
        if (!c) return;
        let p = null,
          f = null,
          m = r.rowIndex,
          b = r.columnIndex;
        switch (d) {
          case 'addRowAbove':
            ((p = X(c, r.rowIndex, 'before')), (m = r.rowIndex + 1));
            break;
          case 'addRowBelow':
            p = X(c, r.rowIndex, 'after');
            break;
          case 'addColumnLeft':
            ((p = Z(c, r.columnIndex, 'before')), (b = r.columnIndex + 1));
            break;
          case 'addColumnRight':
            p = Z(c, r.columnIndex, 'after');
            break;
          case 'deleteRow':
            c.rows.length > 1 &&
              ((p = Y(c, r.rowIndex)), m >= p.rows.length && (m = p.rows.length - 1));
            break;
          case 'deleteColumn': {
            if (V(c) > 1) {
              p = _(c, r.columnIndex);
              let S = V(p);
              b >= S && (b = S - 1);
            }
            break;
          }
          case 'mergeCells':
            r.context.selection.selectedCells && (p = $(c, r.context.selection));
            break;
          case 'splitCell':
            r.context.canSplitCell && (p = aa(c, r.rowIndex, r.columnIndex));
            break;
          case 'deleteTable':
            ((f = B(e, r.tableIndex)), s(), t?.(f));
            return;
        }
        p && ((f = A(e, r.tableIndex, p)), t?.(f), f && a(r.tableIndex, m, b));
      },
      [e, r, t, s, a]
    ),
    u = useCallback((d, c, p) => o.isCellSelected(d, c, p), [o, r]);
  return {
    state: r,
    handleCellClick: a,
    handleAction: l,
    clearSelection: s,
    isCellSelected: u,
    tableContext: r.context,
  };
}
var xl = ({ headings: e, onHeadingClick: t, onClose: n, topOffset: o = 0 }) => {
  let [r, i] = useState(false);
  return (
    useEffect(() => {
      requestAnimationFrame(() => i(true));
    }, []),
    jsxs('nav', {
      className: 'docx-outline-nav',
      role: 'navigation',
      'aria-label': 'Document outline',
      style: {
        position: 'absolute',
        top: o,
        left: 30,
        bottom: 0,
        width: 240,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        fontFamily: "'Google Sans', Roboto, Arial, sans-serif",
        zIndex: 40,
        transform: r ? 'translateX(0)' : 'translateX(-270px)',
        transition: 'transform 0.15s ease-out',
      },
      onMouseDown: (a) => a.stopPropagation(),
      children: [
        jsxs('div', {
          style: { display: 'flex', alignItems: 'center', gap: 8, padding: '16px 16px 12px' },
          children: [
            jsx('button', {
              onClick: n,
              'aria-label': 'Close outline',
              style: {
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 4,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                color: '#444746',
              },
              title: 'Close outline',
              children: jsx(d, { name: 'arrow_back', size: 20 }),
            }),
            jsx('span', {
              style: { fontWeight: 400, fontSize: 14, color: '#1f1f1f', letterSpacing: '0.01em' },
              children: 'Outline',
            }),
          ],
        }),
        jsx('div', {
          style: { overflowY: 'auto', flex: 1, paddingLeft: 20 },
          children:
            e.length === 0
              ? jsx('div', {
                  style: {
                    padding: '8px 16px',
                    color: '#80868b',
                    fontSize: 13,
                    lineHeight: '20px',
                  },
                  children: 'No headings found. Add headings to your document to see them here.',
                })
              : e.map((a, s) =>
                  jsx(
                    'div',
                    {
                      style: { marginLeft: a.level * 12 },
                      children: jsx('button', {
                        className: 'docx-outline-heading-btn',
                        onClick: () => t(a.pmPos),
                        style: {
                          display: 'block',
                          width: '100%',
                          textAlign: 'left',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: '5px 12px',
                          fontSize: 13,
                          fontWeight: 400,
                          color: '#1f1f1f',
                          lineHeight: '18px',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          borderRadius: 0,
                          letterSpacing: '0.01em',
                        },
                        title: a.text,
                        children: a.text,
                      }),
                    },
                    `${a.pmPos}-${s}`
                  )
                ),
        }),
      ],
    })
  );
};
function kl(e) {
  return e?.length
    ? e
        .flatMap((t) =>
          t.content
            .filter((n) => n.type === 'run')
            .flatMap((n) => ('content' in n ? n.content : []))
            .filter((n) => n.type === 'text')
            .map((n) => ('text' in n ? n.text : ''))
        )
        .join('')
    : '';
}
function Ma(e) {
  return e
    ? new Date(e).toLocaleString(void 0, {
        hour: 'numeric',
        minute: '2-digit',
        month: 'short',
        day: 'numeric',
      })
    : '';
}
function Ea(e) {
  return e
    .split(/\s+/)
    .map((t) => t[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}
var wl = [
  '#6DCCB1',
  '#79AAD9',
  '#EE789D',
  '#A987D1',
  '#E6A85F',
  '#F2CC8F',
  '#68B3A2',
  '#B07AA1',
  '#59A14F',
  '#FF9DA7',
  '#E15759',
  '#76B7B2',
];
function Cp(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = e.charCodeAt(n) + ((t << 5) - t);
  return wl[Math.abs(t) % wl.length];
}
var Tp = 340,
  vp = 8,
  hr = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 4,
    color: '#5f6368',
    display: 'flex',
    borderRadius: '50%',
  },
  Cl = {
    padding: '6px 16px',
    fontSize: 14,
    border: 'none',
    background: 'none',
    color: '#1a73e8',
    cursor: 'pointer',
    fontWeight: 500,
    fontFamily: 'inherit',
  },
  Tl = ({
    comments: e,
    trackedChanges: t,
    onCommentClick: n,
    onCommentReply: o,
    onCommentResolve: r,
    onCommentDelete: i,
    onAddComment: a,
    onCancelAddComment: s,
    onAcceptChange: l,
    onRejectChange: u,
    onTrackedChangeReply: d$1,
    topOffset: c = 0,
    showResolved: p = false,
    isAddingComment: f = false,
    addCommentYPosition: m = null,
    pageWidth: b = 816,
    editorContainerRef: g,
  }) => {
    let [S, w] = useState(null),
      [k, E] = useState(''),
      [v, _] = useState(''),
      [V, W] = useState(null),
      [L, $] = useState(null),
      [z, K] = useState(new Map()),
      [C, A] = useState(false),
      ee = useRef(new Set()),
      he = useRef(null),
      de = useRef(new Map()),
      we = useMemo(() => e.filter((R) => !(R.parentId != null || (R.done && !p))), [e, p]),
      Ce = useMemo(() => {
        let R = new Map();
        for (let O of e)
          if (O.parentId != null) {
            let D = R.get(O.parentId);
            D ? D.push(O) : R.set(O.parentId, [O]);
          }
        return R;
      }, [e]),
      Te = (R) => Ce.get(R) ?? [],
      M = useCallback(() => {
        let R = g?.current;
        if (!R) return;
        let O = R.querySelector('.paged-editor__pages');
        if (!O) return;
        let D = R.getBoundingClientRect(),
          ie = R.scrollTop,
          ue = [];
        for (let me of we) {
          let Se = O.querySelector(`[data-comment-id="${me.id}"]`);
          if (Se) {
            let fe = Se.getBoundingClientRect();
            ue.push({
              id: `comment-${me.id}`,
              targetY: fe.top - D.top + ie,
              height: de.current.get(`comment-${me.id}`)?.offsetHeight || 80,
            });
          }
        }
        (t.forEach((me, Se) => {
          let fe = `tc-${me.revisionId}-${Se}`,
            $e = O.querySelector(`[data-revision-id="${me.revisionId}"]`);
          if ($e) {
            let Qe = $e.getBoundingClientRect();
            ue.push({
              id: fe,
              targetY: Qe.top - D.top + ie,
              height: de.current.get(fe)?.offsetHeight || 80,
            });
          }
        }),
          f &&
            m != null &&
            ue.push({
              id: 'new-comment-input',
              targetY: m,
              height: de.current.get('new-comment-input')?.offsetHeight || 120,
            }),
          ue.sort((me, Se) => me.targetY - Se.targetY));
        let pe = new Map(),
          Ie = 0;
        for (let me of ue) {
          let Se = Math.max(me.targetY, Ie + vp);
          (pe.set(me.id, Se), (Ie = Se + me.height));
        }
        K(pe);
      }, [we, t, g, f, m]);
    (useEffect(() => {
      let R = g?.current;
      if (!R) return;
      let O = R.querySelector('.paged-editor__pages');
      if (!O) return;
      let D = (ie) => {
        let ue = ie.target;
        if (!he.current?.contains(ue)) {
          if (O.contains(ue)) {
            let pe = ue.closest('[data-comment-id]');
            if (pe?.dataset.commentId) {
              (W(`comment-${pe.dataset.commentId}`), n?.(Number(pe.dataset.commentId)));
              return;
            }
            let Ie = ue.closest('.docx-insertion') || ue.closest('.docx-deletion');
            if (Ie?.dataset.revisionId) {
              let me = Number(Ie.dataset.revisionId),
                Se = t.findIndex((fe) => fe.revisionId === me);
              if (Se >= 0) {
                W(`tc-${t[Se].revisionId}-${Se}`);
                return;
              }
            }
          }
          (W(null), $(null));
        }
      };
      return (R.addEventListener('click', D), () => R.removeEventListener('click', D));
    }, [g, t, n]),
      useEffect(() => {
        let R = g?.current;
        if (!R) return;
        let O = setTimeout(M, 50),
          D = setTimeout(() => {
            (M(), A(true));
          }, 400),
          ie = new ResizeObserver(() => {
            requestAnimationFrame(M);
          });
        return (
          ie.observe(R),
          () => {
            (clearTimeout(O), clearTimeout(D), ie.disconnect());
          }
        );
      }, [M, g]),
      useEffect(() => {
        let R = requestAnimationFrame(M);
        return () => cancelAnimationFrame(R);
      }, [V, f, M]),
      useEffect(() => {
        let R = [];
        if (V) {
          let ue = de.current.get(V);
          ue && R.push(ue);
        }
        let O = de.current.get('new-comment-input');
        if ((O && R.push(O), R.length === 0)) return;
        let D,
          ie = new ResizeObserver(() => {
            (cancelAnimationFrame(D), (D = requestAnimationFrame(M)));
          });
        for (let ue of R) ie.observe(ue);
        return () => {
          (cancelAnimationFrame(D), ie.disconnect());
        };
      }, [V, M]));
    let I = () => {
        v.trim() && (a?.(v.trim()), _(''));
      },
      y = (R, O) => {
        (W(V === R ? null : R), $(null), O !== void 0 && n?.(O));
      },
      P = z.size > 0,
      F = (R, O = 32) => ({
        width: O,
        height: O,
        borderRadius: '50%',
        backgroundColor: Cp(R),
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: O === 32 ? 13 : 11,
        fontWeight: 500,
        flexShrink: 0,
      }),
      B = (R) => ({
        padding: '6px 16px',
        fontSize: 14,
        border: 'none',
        borderRadius: 20,
        background: R ? '#1a73e8' : '#f1f3f4',
        color: R ? '#fff' : '#80868b',
        cursor: R ? 'pointer' : 'default',
        fontWeight: 500,
        fontFamily: 'inherit',
      }),
      j = (R, O, D) => {
        let ie = ee.current.has(R);
        return (
          D !== void 0 && ee.current.add(R),
          {
            ...(P
              ? D !== void 0
                ? { position: 'absolute', top: D, left: 0, right: 0, opacity: 1 }
                : {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    opacity: 0,
                    visibility: 'hidden',
                  }
              : { marginBottom: 6 }),
            padding: O ? '10px 12px' : '8px 10px',
            borderRadius: 8,
            backgroundColor: O ? '#fff' : '#f8fbff',
            cursor: 'pointer',
            boxShadow: O
              ? '0 1px 3px rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)'
              : '0 1px 3px rgba(60,64,67,0.2), 0 2px 6px rgba(60,64,67,0.08)',
            transition:
              P && D === void 0
                ? 'none'
                : !ie && D !== void 0
                  ? 'opacity 0.2s ease, box-shadow 0.2s ease'
                  : C
                    ? 'opacity 0.2s ease, box-shadow 0.2s ease, top 0.15s ease'
                    : 'none',
          }
        );
      },
      Z = (R, O) =>
        R.length === 0
          ? null
          : jsxs('div', {
              style: { marginTop: 8 },
              children: [
                (O ? R : R.slice(-1)).map((D) =>
                  jsxs(
                    'div',
                    {
                      style: {
                        marginBottom: O ? 8 : 0,
                        paddingTop: 8,
                        borderTop: '1px solid #e8eaed',
                      },
                      children: [
                        jsxs('div', {
                          style: { display: 'flex', alignItems: 'flex-start', gap: 10 },
                          children: [
                            jsx('div', {
                              style: F(D.author || 'U', 28),
                              children: Ea(D.author || 'U'),
                            }),
                            jsxs('div', {
                              style: { flex: 1, minWidth: 0 },
                              children: [
                                jsx('div', {
                                  style: { fontSize: 13, fontWeight: 600, color: '#202124' },
                                  children: D.author || 'Unknown',
                                }),
                                jsx('div', {
                                  style: { fontSize: 11, color: '#5f6368' },
                                  children: Ma(D.date),
                                }),
                              ],
                            }),
                          ],
                        }),
                        jsx('div', {
                          style: {
                            fontSize: 13,
                            color: '#202124',
                            lineHeight: '20px',
                            marginTop: 4,
                            ...(O
                              ? {}
                              : {
                                  overflow: 'hidden',
                                  display: '-webkit-box',
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: 'vertical',
                                }),
                          },
                          children: kl(D.content),
                        }),
                      ],
                    },
                    D.id
                  )
                ),
                !O &&
                  R.length > 1 &&
                  jsxs('div', {
                    style: { fontSize: 12, color: '#5f6368', marginTop: 4 },
                    children: [R.length - 1, ' more ', R.length - 1 === 1 ? 'reply' : 'replies'],
                  }),
              ],
            }),
      N = (R, O) =>
        jsx('div', {
          onClick: (D) => D.stopPropagation(),
          style: { marginTop: 12 },
          children:
            S === R
              ? jsxs('div', {
                  children: [
                    jsx('input', {
                      ref: (D) => D?.focus({ preventScroll: true }),
                      type: 'text',
                      value: k,
                      onChange: (D) => E(D.target.value),
                      onMouseDown: (D) => D.stopPropagation(),
                      onKeyDown: (D) => {
                        (D.stopPropagation(),
                          D.key === 'Enter' &&
                            (D.preventDefault(), k.trim() && O && O(R, k.trim()), E(''), w(null)),
                          D.key === 'Escape' && (w(null), E('')));
                      },
                      placeholder: 'Reply or add others with @',
                      style: {
                        width: '100%',
                        border: '1px solid #1a73e8',
                        borderRadius: 20,
                        outline: 'none',
                        fontSize: 14,
                        padding: '8px 16px',
                        fontFamily: 'inherit',
                        boxSizing: 'border-box',
                        color: '#202124',
                      },
                    }),
                    jsxs('div', {
                      style: { display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 8 },
                      children: [
                        jsx('button', {
                          onClick: (D) => {
                            (D.stopPropagation(), w(null), E(''));
                          },
                          style: Cl,
                          children: 'Cancel',
                        }),
                        jsx('button', {
                          onClick: (D) => {
                            (D.stopPropagation(), k.trim() && O && O(R, k.trim()), E(''), w(null));
                          },
                          disabled: !k.trim(),
                          style: B(!!k.trim()),
                          children: 'Reply',
                        }),
                      ],
                    }),
                  ],
                })
              : jsx('input', {
                  readOnly: true,
                  onMouseDown: (D) => D.stopPropagation(),
                  onClick: (D) => {
                    (D.stopPropagation(), w(R));
                  },
                  placeholder: 'Reply or add others with @',
                  style: {
                    width: '100%',
                    border: '1px solid #dadce0',
                    borderRadius: 20,
                    outline: 'none',
                    fontSize: 14,
                    padding: '8px 16px',
                    fontFamily: 'inherit',
                    color: '#80868b',
                    cursor: 'text',
                    backgroundColor: '#fff',
                    boxSizing: 'border-box',
                  },
                }),
        }),
      U = (R) => {
        let O = Te(R.id),
          D = `comment-${R.id}`,
          ie = V === D,
          ue = z.get(D);
        return jsxs(
          'div',
          {
            ref: (pe) => {
              pe ? de.current.set(D, pe) : de.current.delete(D);
            },
            'data-comment-id': R.id,
            className: 'docx-comment-card',
            onClick: () => y(D, R.id),
            onMouseDown: (pe) => pe.stopPropagation(),
            style: { ...j(D, ie, ue), opacity: P && ue === void 0 ? 0 : R.done ? 0.6 : 1 },
            children: [
              jsxs('div', {
                style: { display: 'flex', alignItems: 'flex-start', gap: 10 },
                children: [
                  jsx('div', { style: F(R.author || 'U'), children: Ea(R.author || 'U') }),
                  jsxs('div', {
                    style: { flex: 1, minWidth: 0 },
                    children: [
                      jsx('div', {
                        style: { fontSize: 13, fontWeight: 600, color: '#202124' },
                        children: R.author || 'Unknown',
                      }),
                      jsx('div', {
                        style: { fontSize: 11, color: '#5f6368' },
                        children: Ma(R.date),
                      }),
                    ],
                  }),
                  ie &&
                    jsxs('div', {
                      style: { display: 'flex', gap: 4, marginTop: 2, position: 'relative' },
                      children: [
                        jsx('button', {
                          onClick: (pe) => {
                            (pe.stopPropagation(), r?.(R.id));
                          },
                          title: 'Resolve',
                          style: hr,
                          children: jsx(d, { name: 'check', size: 20 }),
                        }),
                        jsx('button', {
                          onClick: (pe) => {
                            (pe.stopPropagation(), $(L === D ? null : D));
                          },
                          title: 'More options',
                          style: hr,
                          children: jsx(d, { name: 'more_vert', size: 20 }),
                        }),
                        L === D &&
                          jsx('div', {
                            onClick: (pe) => pe.stopPropagation(),
                            onMouseDown: (pe) => pe.stopPropagation(),
                            style: {
                              position: 'absolute',
                              top: 32,
                              right: 0,
                              background: '#fff',
                              borderRadius: 8,
                              boxShadow:
                                '0 2px 6px rgba(60,64,67,0.3), 0 1px 2px rgba(60,64,67,0.15)',
                              zIndex: 100,
                              minWidth: 120,
                              padding: '4px 0',
                            },
                            children: jsx('button', {
                              onClick: () => {
                                ($(null), i?.(R.id));
                              },
                              style: {
                                display: 'block',
                                width: '100%',
                                padding: '8px 16px',
                                border: 'none',
                                background: 'none',
                                textAlign: 'left',
                                fontSize: 14,
                                color: '#202124',
                                cursor: 'pointer',
                                fontFamily: 'inherit',
                              },
                              onMouseOver: (pe) => {
                                pe.target.style.backgroundColor = '#f1f3f4';
                              },
                              onMouseOut: (pe) => {
                                pe.target.style.backgroundColor = 'transparent';
                              },
                              children: 'Delete',
                            }),
                          }),
                      ],
                    }),
                ],
              }),
              jsx('div', {
                style: { fontSize: 13, color: '#202124', lineHeight: '20px', marginTop: 6 },
                children: kl(R.content),
              }),
              Z(O, ie),
              ie && !R.done && N(R.id, o),
            ],
          },
          R.id
        );
      },
      G = (R) => Ce.get(R) ?? [],
      xe = (R, O) => {
        let D = R.author || 'Unknown',
          ie = `tc-${R.revisionId}-${O}`,
          ue = V === ie,
          pe = z.get(ie),
          Ie = G(R.revisionId);
        return jsxs(
          'div',
          {
            ref: (me) => {
              me ? de.current.set(ie, me) : de.current.delete(ie);
            },
            className: 'docx-tracked-change-card',
            onClick: () => y(ie),
            onMouseDown: (me) => me.stopPropagation(),
            style: j(ie, ue, pe),
            children: [
              jsxs('div', {
                style: { display: 'flex', alignItems: 'flex-start', gap: 10 },
                children: [
                  jsx('div', { style: F(D), children: Ea(D) }),
                  jsxs('div', {
                    style: { flex: 1, minWidth: 0 },
                    children: [
                      jsx('div', {
                        style: { fontSize: 13, fontWeight: 600, color: '#202124' },
                        children: D,
                      }),
                      R.date &&
                        jsx('div', {
                          style: { fontSize: 11, color: '#5f6368' },
                          children: Ma(R.date),
                        }),
                    ],
                  }),
                  ue &&
                    jsxs('div', {
                      style: { display: 'flex', gap: 4, marginTop: 2 },
                      children: [
                        jsx('button', {
                          onClick: (me) => {
                            (me.stopPropagation(), l?.(R.from, R.to));
                          },
                          title: 'Accept',
                          style: hr,
                          children: jsx(d, { name: 'check', size: 20 }),
                        }),
                        jsx('button', {
                          onClick: (me) => {
                            (me.stopPropagation(), u?.(R.from, R.to));
                          },
                          title: 'Reject',
                          style: hr,
                          children: jsx(d, { name: 'close', size: 20 }),
                        }),
                      ],
                    }),
                ],
              }),
              jsxs('div', {
                style: { fontSize: 13, lineHeight: '20px', color: '#202124', marginTop: 6 },
                children: [
                  R.type === 'insertion' ? 'Added' : 'Deleted',
                  ' ',
                  jsxs('span', {
                    style: {
                      color: R.type === 'insertion' ? '#137333' : '#c5221f',
                      fontWeight: 500,
                    },
                    children: ['"', R.text.length > 50 ? R.text.slice(0, 50) + '...' : R.text, '"'],
                  }),
                ],
              }),
              Z(Ie, ue),
              ue && N(R.revisionId, d$1),
            ],
          },
          ie
        );
      };
    return jsx('aside', {
      ref: he,
      className: 'docx-comments-sidebar',
      role: 'complementary',
      'aria-label': 'Comments and changes',
      style: {
        position: 'absolute',
        top: c,
        left: `calc(50% - 120px + ${b / 2 + 12}px)`,
        bottom: 0,
        width: Tp,
        fontFamily: "'Google Sans', Roboto, Arial, sans-serif",
        zIndex: 40,
        backgroundColor: 'transparent',
        overflowY: P ? 'visible' : 'auto',
        overflowX: 'visible',
        opacity: P ? 1 : 0,
        transition: 'opacity 0.15s ease',
      },
      onMouseDown: (R) => R.stopPropagation(),
      children: jsxs('div', {
        style: { position: 'relative' },
        children: [
          f &&
            jsxs('div', {
              ref: (R) => {
                R ? de.current.set('new-comment-input', R) : de.current.delete('new-comment-input');
              },
              style: {
                ...(P
                  ? z.get('new-comment-input') !== void 0
                    ? { position: 'absolute', top: z.get('new-comment-input'), left: 0, right: 0 }
                    : { position: 'absolute', top: 0, left: 0, right: 0, visibility: 'hidden' }
                  : { marginBottom: 8 }),
                padding: 12,
                borderRadius: 8,
                backgroundColor: '#fff',
                boxShadow: '0 1px 3px rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)',
                zIndex: 50,
              },
              children: [
                jsx('textarea', {
                  ref: (R) => R?.focus({ preventScroll: true }),
                  value: v,
                  onChange: (R) => _(R.target.value),
                  onMouseDown: (R) => R.stopPropagation(),
                  onKeyDown: (R) => {
                    (R.stopPropagation(),
                      R.key === 'Enter' && !R.shiftKey && (R.preventDefault(), I()),
                      R.key === 'Escape' && (s?.(), _('')));
                  },
                  placeholder: 'Add a comment...',
                  style: {
                    width: '100%',
                    border: '1px solid #1a73e8',
                    borderRadius: 20,
                    outline: 'none',
                    resize: 'none',
                    fontSize: 14,
                    lineHeight: '20px',
                    padding: '8px 16px',
                    fontFamily: 'inherit',
                    minHeight: 40,
                    boxSizing: 'border-box',
                    color: '#202124',
                  },
                }),
                jsxs('div', {
                  style: { display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 8 },
                  children: [
                    jsx('button', {
                      onClick: () => {
                        (s?.(), _(''));
                      },
                      style: Cl,
                      children: 'Cancel',
                    }),
                    jsx('button', {
                      onClick: I,
                      disabled: !v.trim(),
                      style: B(!!v.trim()),
                      children: 'Comment',
                    }),
                  ],
                }),
              ],
            }),
          we.map((R) => U(R)),
          t.map((R, O) => xe(R, O)),
          we.length === 0 &&
            t.length === 0 &&
            !f &&
            jsx('div', {
              style: { padding: '24px 16px', textAlign: 'center', color: '#80868b', fontSize: 13 },
              children: 'No comments or changes yet.',
            }),
        ],
      }),
    });
  };
var Mp = 15840,
  Rl = 1440,
  Ep = 1440,
  Ip = 567,
  Ml = 20,
  Fp = 'var(--doc-text-muted)',
  Lp = 'var(--doc-text-subtle)',
  Bp = 'var(--doc-primary)',
  Ap = 'var(--doc-primary)',
  Dp = 'var(--doc-primary-hover)';
function El({
  sectionProps: e,
  zoom: t = 1,
  editable: n = false,
  onTopMarginChange: o,
  onBottomMarginChange: r$1,
  unit: i = 'inch',
  className: a = '',
  style: s$1,
}) {
  let [l, u] = useState(null),
    [d, c] = useState(null),
    p = useRef(null),
    f = e?.pageHeight ?? Mp,
    m = e?.marginTop ?? Rl,
    b = e?.marginBottom ?? Rl,
    g = r(f) * t,
    S = r(m) * t,
    w = r(b) * t,
    k = useCallback(
      (W, L) => {
        n && (W.preventDefault(), u(L));
      },
      [n]
    ),
    E = useCallback(
      (W) => {
        if (!l || !p.current) return;
        let L = p.current.getBoundingClientRect(),
          $ = W.clientY - L.top,
          z = s($ / t);
        if (l === 'topMargin') {
          let K = f - b - 720,
            C = Math.max(0, Math.min(z, K));
          o?.(Math.round(C));
        } else if (l === 'bottomMargin') {
          let K = f - z,
            C = f - m - 720,
            A = Math.max(0, Math.min(K, C));
          r$1?.(Math.round(A));
        }
      },
      [l, t, f, m, b, o, r$1]
    ),
    v = useCallback(() => {
      u(null);
    }, []);
  useEffect(() => {
    if (l)
      return (
        document.addEventListener('mousemove', E),
        document.addEventListener('mouseup', v),
        () => {
          (document.removeEventListener('mousemove', E),
            document.removeEventListener('mouseup', v));
        }
      );
  }, [l, E, v]);
  let _ = Np(f, t, i),
    V = {
      position: 'relative',
      width: Ml,
      height: B$1(g),
      backgroundColor: 'transparent',
      overflow: 'visible',
      userSelect: 'none',
      cursor: l ? 'ns-resize' : 'default',
      ...s$1,
    };
  return jsxs('div', {
    ref: p,
    className: `docx-vertical-ruler ${a}`,
    style: V,
    role: 'slider',
    'aria-label': 'Vertical ruler',
    'aria-orientation': 'vertical',
    children: [
      jsx('div', {
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: 'none',
        },
        children: _.map((W, L) => jsx(Hp, { tick: W }, L)),
      }),
      jsx(Pl, {
        type: 'topMargin',
        position: S,
        editable: n,
        isDragging: l === 'topMargin',
        isHovered: d === 'topMargin',
        onMouseEnter: () => c('topMargin'),
        onMouseLeave: () => c(null),
        onMouseDown: (W) => k(W, 'topMargin'),
      }),
      jsx(Pl, {
        type: 'bottomMargin',
        position: g - w,
        editable: n,
        isDragging: l === 'bottomMargin',
        isHovered: d === 'bottomMargin',
        onMouseEnter: () => c('bottomMargin'),
        onMouseLeave: () => c(null),
        onMouseDown: (W) => k(W, 'bottomMargin'),
      }),
    ],
  });
}
function Hp({ tick: e }) {
  let t = {
      position: 'absolute',
      top: B$1(e.position),
      right: 0,
      height: 1,
      width: e.width,
      backgroundColor: Lp,
    },
    n = {
      position: 'absolute',
      top: B$1(e.position),
      left: 2,
      transform: 'translateY(-50%)',
      fontSize: '9px',
      color: Fp,
      fontFamily: 'sans-serif',
      whiteSpace: 'nowrap',
    };
  return jsxs(Fragment$1, {
    children: [jsx('div', { style: t }), e.label && jsx('div', { style: n, children: e.label })],
  });
}
function Pl({
  type: e,
  position: t,
  editable: n,
  isDragging: o,
  isHovered: r,
  onMouseEnter: i,
  onMouseLeave: a,
  onMouseDown: s,
}) {
  let l = o ? Dp : r ? Ap : Bp,
    u = {
      position: 'absolute',
      top: B$1(t - 5),
      right: 0,
      width: Ml,
      height: 10,
      cursor: n ? 'ns-resize' : 'default',
      zIndex: o ? 10 : 1,
    },
    d = {
      position: 'absolute',
      top: 0,
      right: 2,
      width: 0,
      height: 0,
      borderTop: '5px solid transparent',
      borderBottom: '5px solid transparent',
      borderRight: `8px solid ${l}`,
      transition: 'border-right-color 0.1s',
    };
  return jsx('div', {
    className: `docx-ruler-marker docx-ruler-marker-${e}`,
    style: u,
    onMouseEnter: i,
    onMouseLeave: a,
    onMouseDown: s,
    role: 'slider',
    'aria-label': e === 'topMargin' ? 'Top margin' : 'Bottom margin',
    'aria-orientation': 'vertical',
    tabIndex: n ? 0 : -1,
    children: jsx('div', { style: d }),
  });
}
function Np(e, t, n) {
  let o = [];
  if (n === 'inch') {
    let r$1 = Ep / 8,
      i = Math.ceil(e / r$1);
    for (let a = 0; a <= i; a++) {
      let s = a * r$1;
      if (s > e) break;
      let l = r(s) * t;
      if (a % 8 === 0) {
        let u = a / 8;
        o.push({ position: l, width: 10, label: u > 0 ? String(u) : void 0 });
      } else
        a % 4 === 0
          ? o.push({ position: l, width: 6 })
          : a % 2 === 0
            ? o.push({ position: l, width: 4 })
            : o.push({ position: l, width: 2 });
    }
  } else {
    let r$1 = Ip / 10,
      i = Math.ceil(e / r$1);
    for (let a = 0; a <= i; a++) {
      let s = a * r$1;
      if (s > e) break;
      let l = r(s) * t;
      if (a % 10 === 0) {
        let u = a / 10;
        o.push({ position: l, width: 10, label: u > 0 ? String(u) : void 0 });
      } else a % 5 === 0 ? o.push({ position: l, width: 6 }) : o.push({ position: l, width: 3 });
    }
  }
  return o;
}
var xn = { High: 50, Default: 100, Low: 150 };
function Mt(e) {
  return (t) => {
    let n = { ...e.defaultOptions, ...t };
    return {
      type: 'extension',
      config: { name: e.name, priority: e.priority ?? xn.Default, options: n },
      onSchemaReady(o) {
        return e.onSchemaReady(o, n);
      },
    };
  };
}
function je(e) {
  return (t) => {
    let n = { ...e.defaultOptions, ...t },
      o = typeof e.nodeSpec == 'function' ? e.nodeSpec(n) : e.nodeSpec;
    return {
      type: 'node',
      config: {
        name: e.name,
        priority: e.priority ?? xn.Default,
        options: n,
        schemaNodeName: e.schemaNodeName,
        nodeSpec: o,
      },
      onSchemaReady(r) {
        return e.onSchemaReady?.(r, n) ?? {};
      },
    };
  };
}
function Be(e) {
  return (t) => {
    let n = { ...e.defaultOptions, ...t },
      o = typeof e.markSpec == 'function' ? e.markSpec(n) : e.markSpec;
    return {
      type: 'mark',
      config: {
        name: e.name,
        priority: e.priority ?? xn.Default,
        options: n,
        schemaMarkName: e.schemaMarkName,
        markSpec: o,
      },
      onSchemaReady(r) {
        return e.onSchemaReady?.(r, n) ?? {};
      },
    };
  };
}
var Fl = je({
  name: 'doc',
  schemaNodeName: 'doc',
  nodeSpec: { content: '(paragraph | horizontalRule | pageBreak | table)+' },
});
var Ll = je({ name: 'text', schemaNodeName: 'text', nodeSpec: { group: 'inline' } });
function Bl(e, t) {
  if (!e) return {};
  let n$1 = {};
  if (e.fontFamily) {
    let a = null;
    if (
      (e.fontFamily.asciiTheme && t?.fontScheme,
      a ||
        (a =
          e.fontFamily.ascii ||
          e.fontFamily.hAnsi ||
          e.fontFamily.eastAsia ||
          e.fontFamily.cs ||
          null),
      a)
    ) {
      let s = a$2(a);
      n$1.fontFamily = s.cssFallback;
    }
  }
  if (
    (e.fontSize !== void 0 && (n$1.fontSize = `${z$2(e.fontSize)}pt`),
    e.bold && (n$1.fontWeight = 'bold'),
    e.italic && (n$1.fontStyle = 'italic'),
    e.color && (n$1.color = a(e.color, t)),
    e.highlight && e.highlight !== 'none' && (n$1.backgroundColor = n(e.highlight)),
    e.shading)
  ) {
    let a = Dl(e.shading, t);
    a && !n$1.backgroundColor && (n$1.backgroundColor = a);
  }
  let o = [],
    r$1 = [],
    i = [];
  if (e.underline && e.underline.style !== 'none') {
    o.push('underline');
    let a$1 = Op(e.underline.style);
    (a$1 !== 'solid' && r$1.push(a$1), e.underline.color && i.push(a(e.underline.color, t)));
  }
  if (
    (e.strike && o.push('line-through'),
    e.doubleStrike && o.push('line-through'),
    o.length > 0 &&
      ((n$1.textDecoration = o.join(' ')),
      r$1.length > 0 && (n$1.textDecorationStyle = r$1[0]),
      i.length > 0 && (n$1.textDecorationColor = i[0])),
    e.vertAlign)
  )
    switch (e.vertAlign) {
      case 'superscript':
        ((n$1.verticalAlign = 'super'), n$1.fontSize || (n$1.fontSize = '0.83em'));
        break;
      case 'subscript':
        ((n$1.verticalAlign = 'sub'), n$1.fontSize || (n$1.fontSize = '0.83em'));
        break;
    }
  if (e.position && e.position !== 0) {
    let a = y$1(e.position);
    ((n$1.position = 'relative'), (n$1.top = B$1(-a)));
  }
  return (
    e.allCaps ? (n$1.textTransform = 'uppercase') : e.smallCaps && (n$1.fontVariant = 'small-caps'),
    e.spacing !== void 0 && e.spacing !== 0 && (n$1.letterSpacing = B$1(r(e.spacing))),
    e.scale !== void 0 &&
      e.scale !== 100 &&
      ((n$1.transform = `scaleX(${e.scale / 100})`), (n$1.display = 'inline-block')),
    e.hidden && (n$1.display = 'none'),
    e.emboss &&
      (n$1.textShadow = '1px 1px 1px rgba(255,255,255,0.5), -1px -1px 1px rgba(0,0,0,0.3)'),
    e.imprint &&
      (n$1.textShadow = '-1px -1px 1px rgba(255,255,255,0.5), 1px 1px 1px rgba(0,0,0,0.3)'),
    e.outline &&
      ((n$1.WebkitTextStroke = '1px currentColor'), (n$1.WebkitTextFillColor = 'transparent')),
    e.shadow && !e.emboss && !e.imprint && (n$1.textShadow = '1px 1px 2px rgba(0,0,0,0.3)'),
    e.rtl && (n$1.direction = 'rtl'),
    n$1
  );
}
function Al(e, t) {
  if (!e) return {};
  let n = {};
  if (
    (e.alignment && (n.textAlign = $p(e.alignment)),
    e.spaceBefore !== void 0 && (n.marginTop = B$1(r(e.spaceBefore))),
    e.spaceAfter !== void 0 && (n.marginBottom = B$1(r(e.spaceAfter))),
    e.lineSpacing !== void 0 && e.lineSpacing > 0)
  )
    switch (e.lineSpacingRule) {
      case 'exact': {
        let o = r(e.lineSpacing);
        o > 0 && (n.lineHeight = B$1(o));
        break;
      }
      case 'atLeast': {
        let o = r(e.lineSpacing);
        o > 0 && ((n.minHeight = B$1(o)), (n.lineHeight = B$1(o)));
        break;
      }
      default: {
        let o = e.lineSpacing / 240;
        o > 0 && (n.lineHeight = o.toString());
        break;
      }
    }
  if (
    (e.indentLeft !== void 0 && (n.marginLeft = B$1(r(e.indentLeft))),
    e.indentRight !== void 0 && (n.marginRight = B$1(r(e.indentRight))),
    e.indentFirstLine !== void 0 &&
      (e.hangingIndent
        ? (n.textIndent = B$1(r(e.indentFirstLine)))
        : (n.textIndent = B$1(r(e.indentFirstLine)))),
    e.borders &&
      (e.borders.top && Object.assign(n, no(e.borders.top, 'Top', t)),
      e.borders.bottom && Object.assign(n, no(e.borders.bottom, 'Bottom', t)),
      e.borders.left && Object.assign(n, no(e.borders.left, 'Left', t)),
      e.borders.right && Object.assign(n, no(e.borders.right, 'Right', t))),
    e.shading)
  ) {
    let o = Dl(e.shading, t);
    o && (n.backgroundColor = o);
  }
  return (
    e.bidi && (n.direction = 'rtl'),
    e.pageBreakBefore && (n.pageBreakBefore = 'always'),
    e.keepNext && (n.pageBreakAfter = 'avoid'),
    e.keepLines && (n.pageBreakInside = 'avoid'),
    n
  );
}
function no(e, t = '', n) {
  if (!e || e.style === 'none' || e.style === 'nil') return {};
  let o = {},
    r = e.size ? A$1(e.size) : 1,
    i = e.color ? a(e.color, n) : '#000000',
    a$1 = Wp(e.style),
    s = `border${t}Width`,
    l = `border${t}Style`,
    u = `border${t}Color`;
  return ((o[s] = B$1(Math.max(1, r))), (o[l] = a$1), (o[u] = i), o);
}
function Dl(e, t) {
  return !e || e.pattern === 'clear' || e.pattern === 'nil'
    ? ''
    : e.fill
      ? e.fill.auto || e.fill.rgb === 'auto' || e.fill.rgb === 'FFFFFF'
        ? ''
        : c$3(e.fill, t)
      : e.pattern === 'solid' && e.color
        ? c$3(e.color, t)
        : e.pattern && e.pattern.startsWith('pct') && e.color
          ? c$3(e.color, t)
          : '';
}
function Op(e) {
  switch (e) {
    case 'double':
      return 'double';
    case 'dotted':
    case 'dottedHeavy':
      return 'dotted';
    case 'dash':
    case 'dashedHeavy':
    case 'dashLong':
    case 'dashLongHeavy':
    case 'dotDash':
    case 'dashDotHeavy':
    case 'dotDotDash':
    case 'dashDotDotHeavy':
      return 'dashed';
    case 'wave':
    case 'wavyHeavy':
    case 'wavyDouble':
      return 'wavy';
    default:
      return 'solid';
  }
}
function $p(e) {
  switch (e) {
    case 'center':
      return 'center';
    case 'right':
      return 'right';
    case 'both':
    case 'distribute':
      return 'justify';
    default:
      return 'left';
  }
}
function Wp(e) {
  switch (e) {
    case 'none':
    case 'nil':
      return 'none';
    case 'double':
    case 'triple':
      return 'double';
    case 'dotted':
      return 'dotted';
    case 'dashed':
    case 'dashSmallGap':
      return 'dashed';
    case 'threeDEmboss':
      return 'ridge';
    case 'threeDEngrave':
      return 'groove';
    case 'outset':
      return 'outset';
    case 'inset':
      return 'inset';
    default:
      return 'solid';
  }
}
function oo(e) {
  let t = [];
  return (
    e.descendants((n, o) => {
      if (n.type.name === 'paragraph') {
        let r = n.attrs.outlineLevel,
          i = n.attrs.styleId,
          a = r;
        if (a == null && i) {
          let s = i.match(/^[Hh]eading(\d)$/);
          s && (a = parseInt(s[1], 10) - 1);
        }
        if (a != null && a >= 0 && a <= 8) {
          let s = '';
          (n.forEach((l) => {
            l.isText && (s += l.text || '');
          }),
            s.trim() && t.push({ text: s.trim(), level: a, pmPos: o }));
        }
      }
    }),
    t
  );
}
function Vp(e) {
  let t = e.indentLeft;
  e.numPr?.numId && t == null && (t = ((e.numPr.ilvl ?? 0) + 1) * 720);
  let n = {
      alignment: e.alignment,
      spaceBefore: e.spaceBefore,
      spaceAfter: e.spaceAfter,
      lineSpacing: e.lineSpacing,
      lineSpacingRule: e.lineSpacingRule,
      indentLeft: t,
      indentRight: e.indentRight,
      indentFirstLine: e.indentFirstLine,
      hangingIndent: e.hangingIndent,
      borders: e.borders,
      shading: e.shading,
    },
    o = Al(n);
  return Object.entries(o)
    .map(([r, i]) => `${r.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${i}`)
    .join('; ');
}
function jp(e) {
  switch (e) {
    case 'upperRoman':
      return 'docx-list-upper-roman';
    case 'lowerRoman':
      return 'docx-list-lower-roman';
    case 'upperLetter':
      return 'docx-list-upper-alpha';
    case 'lowerLetter':
      return 'docx-list-lower-alpha';
    default:
      return 'docx-list-decimal';
  }
}
function Up(e, t, n) {
  if (!e?.numId) return '';
  let o = e.ilvl ?? 0;
  return t
    ? `docx-list-bullet docx-list-level-${o}`
    : `docx-list-numbered ${jp(n)} docx-list-level-${o}`;
}
var Gp = {
  content: 'inline*',
  group: 'block',
  attrs: {
    paraId: { default: null },
    textId: { default: null },
    alignment: { default: null },
    spaceBefore: { default: null },
    spaceAfter: { default: null },
    lineSpacing: { default: null },
    lineSpacingRule: { default: null },
    indentLeft: { default: null },
    indentRight: { default: null },
    indentFirstLine: { default: null },
    hangingIndent: { default: false },
    numPr: { default: null },
    listNumFmt: { default: null },
    listIsBullet: { default: null },
    listMarker: { default: null },
    styleId: { default: null },
    borders: { default: null },
    shading: { default: null },
    tabs: { default: null },
    pageBreakBefore: { default: null },
    keepNext: { default: null },
    keepLines: { default: null },
    contextualSpacing: { default: null },
    defaultTextFormatting: { default: null },
    sectionBreakType: { default: null },
    outlineLevel: { default: null },
    bookmarks: { default: null },
    _originalFormatting: { default: null },
  },
  parseDOM: [
    {
      tag: 'p',
      getAttrs(e) {
        let t = e;
        return {
          paraId: t.dataset.paraId || void 0,
          alignment: t.dataset.alignment,
          styleId: t.dataset.styleId || void 0,
          sectionBreakType: t.dataset.sectionBreak || void 0,
        };
      },
    },
  ],
  toDOM(e) {
    let t = e.attrs,
      n = Vp(t),
      o = Up(t.numPr, t.listIsBullet, t.listNumFmt),
      r = {};
    return (
      n && (r.style = n),
      o && (r.class = o),
      t.paraId && (r['data-para-id'] = t.paraId),
      t.alignment && (r['data-alignment'] = t.alignment),
      t.styleId && (r['data-style-id'] = t.styleId),
      t.listMarker && (r['data-list-marker'] = t.listMarker),
      t.sectionBreakType &&
        ((r['data-section-break'] = t.sectionBreakType),
        (r.class = (r.class ? r.class + ' ' : '') + 'docx-section-break')),
      ['p', r, 0]
    );
  },
};
function jt(e, t) {
  return (n, o) => {
    let { $from: r, $to: i } = n.selection;
    if (!o) return true;
    let a = n.tr,
      s = new Set();
    return (
      n.doc.nodesBetween(r.pos, i.pos, (l, u) => {
        l.type.name === 'paragraph' &&
          !s.has(u) &&
          (s.add(u), (a = a.setNodeMarkup(u, void 0, { ...l.attrs, [e]: t })));
      }),
      o(a.scrollIntoView()),
      true
    );
  };
}
function Hl(e) {
  return (t, n) => {
    let { $from: o, $to: r } = t.selection;
    if (!n) return true;
    let i = t.tr,
      a = new Set();
    return (
      t.doc.nodesBetween(o.pos, r.pos, (s, l) => {
        s.type.name === 'paragraph' &&
          !a.has(l) &&
          (a.add(l), (i = i.setNodeMarkup(l, void 0, { ...s.attrs, ...e })));
      }),
      n(i.scrollIntoView()),
      true
    );
  };
}
function Eo(e) {
  return (t, n) => jt('alignment', e)(t, n);
}
function br(e, t = 'auto') {
  return (n, o) => Hl({ lineSpacing: e, lineSpacingRule: t })(n, o);
}
function Kp(e = 720) {
  return (t, n) => {
    let { $from: o, $to: r } = t.selection;
    if (!n) return true;
    let i = t.tr,
      a = new Set();
    return (
      t.doc.nodesBetween(o.pos, r.pos, (s, l) => {
        if (s.type.name === 'paragraph' && !a.has(l)) {
          a.add(l);
          let u = s.attrs.indentLeft || 0;
          i = i.setNodeMarkup(l, void 0, { ...s.attrs, indentLeft: u + e });
        }
      }),
      n(i.scrollIntoView()),
      true
    );
  };
}
function Yp(e = 720) {
  return (t, n) => {
    let { $from: o, $to: r } = t.selection;
    if (!n) return true;
    let i = t.tr,
      a = new Set();
    return (
      t.doc.nodesBetween(o.pos, r.pos, (s, l) => {
        if (s.type.name === 'paragraph' && !a.has(l)) {
          a.add(l);
          let u = s.attrs.indentLeft || 0,
            d = Math.max(0, u - e);
          i = i.setNodeMarkup(l, void 0, { ...s.attrs, indentLeft: d > 0 ? d : null });
        }
      }),
      n(i.scrollIntoView()),
      true
    );
  };
}
function qp(e) {
  return (t, n) => (o, r) => {
    let { $from: i, $to: a } = o.selection;
    if (!r) return true;
    let s = o.tr,
      l = new Set(),
      u = [];
    if (n?.runFormatting) {
      let c = n.runFormatting;
      (c.bold && u.push(e.marks.bold.create()),
        c.italic && u.push(e.marks.italic.create()),
        c.fontSize && u.push(e.marks.fontSize.create({ size: c.fontSize })),
        c.fontFamily &&
          u.push(
            e.marks.fontFamily.create({
              ascii: c.fontFamily.ascii,
              hAnsi: c.fontFamily.hAnsi,
              asciiTheme: c.fontFamily.asciiTheme,
            })
          ),
        c.color &&
          !c.color.auto &&
          u.push(
            e.marks.textColor.create({
              rgb: c.color.rgb,
              themeColor: c.color.themeColor,
              themeTint: c.color.themeTint,
              themeShade: c.color.themeShade,
            })
          ),
        c.underline &&
          c.underline.style !== 'none' &&
          u.push(e.marks.underline.create({ style: c.underline.style, color: c.underline.color })),
        (c.strike || c.doubleStrike) &&
          u.push(e.marks.strike.create({ double: c.doubleStrike || false })));
    }
    let d = [
      e.marks.bold,
      e.marks.italic,
      e.marks.fontSize,
      e.marks.fontFamily,
      e.marks.textColor,
      e.marks.underline,
      e.marks.strike,
    ].filter(Boolean);
    return (
      o.doc.nodesBetween(i.pos, a.pos, (c, p) => {
        if (c.type.name === 'paragraph' && !l.has(p)) {
          l.add(p);
          let f = { ...c.attrs, styleId: t };
          if (n?.paragraphFormatting) {
            let m = n.paragraphFormatting;
            (m.alignment !== void 0 && (f.alignment = m.alignment),
              m.spaceBefore !== void 0 && (f.spaceBefore = m.spaceBefore),
              m.spaceAfter !== void 0 && (f.spaceAfter = m.spaceAfter),
              m.lineSpacing !== void 0 && (f.lineSpacing = m.lineSpacing),
              m.lineSpacingRule !== void 0 && (f.lineSpacingRule = m.lineSpacingRule),
              m.indentLeft !== void 0 && (f.indentLeft = m.indentLeft),
              m.indentRight !== void 0 && (f.indentRight = m.indentRight),
              m.indentFirstLine !== void 0 && (f.indentFirstLine = m.indentFirstLine));
          }
          if (((s = s.setNodeMarkup(p, void 0, f)), n)) {
            let m = p + 1,
              b = p + c.nodeSize - 1;
            if (b > m) {
              for (let g of d) s = s.removeMark(m, b, g);
              for (let g of u) s = s.addMark(m, b, g);
            }
          }
        }
      }),
      u.length > 0 && (s = s.setStoredMarks(u)),
      r(s.scrollIntoView()),
      true
    );
  };
}
var Nl = je({
  name: 'paragraph',
  schemaNodeName: 'paragraph',
  nodeSpec: Gp,
  onSchemaReady(e) {
    let t = qp(e.schema);
    return {
      commands: {
        setAlignment: (n) => Eo(n),
        alignLeft: () => Eo('left'),
        alignCenter: () => Eo('center'),
        alignRight: () => Eo('right'),
        alignJustify: () => Eo('both'),
        setLineSpacing: (n, o) => br(n, o),
        singleSpacing: () => br(240),
        oneAndHalfSpacing: () => br(360),
        doubleSpacing: () => br(480),
        setSpaceBefore: (n) => jt('spaceBefore', n),
        setSpaceAfter: (n) => jt('spaceAfter', n),
        increaseIndent: (n) => Kp(n),
        decreaseIndent: (n) => Yp(n),
        setIndentLeft: (n) => jt('indentLeft', n > 0 ? n : null),
        setIndentRight: (n) => jt('indentRight', n > 0 ? n : null),
        setIndentFirstLine: (n, o) =>
          Hl({ indentFirstLine: n > 0 ? n : null, hangingIndent: o ?? false }),
        applyStyle: (n, o) => t(n, o),
        clearStyle: () => jt('styleId', null),
        insertSectionBreak: (n) => jt('sectionBreakType', n),
        removeSectionBreak: () => jt('sectionBreakType', null),
        generateTOC: () => (n, o) => {
          let r = oo(n.doc);
          if (r.length === 0) return false;
          if (!o) return true;
          let { schema: i } = n,
            a = n.tr,
            s = [];
          for (let d of r) {
            let c = `_Toc${Math.floor(1e8 + Math.random() * 9e8)}`;
            s.push({ name: c, level: d.level, text: d.text });
            let p = a.mapping.map(d.pmPos),
              m = a.doc.resolve(p).nodeAfter;
            if (m && m.type.name === 'paragraph') {
              let S = [
                ...(m.attrs.bookmarks || []).filter((w) => !w.name.startsWith('_Toc')),
                { id: Math.floor(Math.random() * 2147483647), name: c },
              ];
              a.setNodeMarkup(p, void 0, { ...m.attrs, bookmarks: S });
            }
          }
          let l = [];
          l.push(
            i.node('paragraph', { styleId: 'TOCHeading', alignment: 'center' }, [
              i.text('Table of Contents', [i.marks.bold.create()]),
            ])
          );
          for (let d of s) {
            let c = d.level * 720,
              p = `TOC${d.level + 1}`,
              f = i.marks.hyperlink.create({ href: `#${d.name}` });
            l.push(
              i.node('paragraph', { styleId: p, indentLeft: c > 0 ? c : null }, [
                i.text(d.text, [f]),
              ])
            );
          }
          let u = a.mapping.map(n.selection.from);
          return (a.insert(u, Fragment.from(l)), o(a.scrollIntoView()), true);
        },
        setTabs: (n) => jt('tabs', n.length > 0 ? n : null),
        addTabStop:
          (n, o = 'left', r = 'none') =>
          (i, a) => {
            let { $from: s } = i.selection,
              l = s.parent;
            if (l.type.name !== 'paragraph') return false;
            let c = [
              ...(l.attrs.tabs || []).filter((p) => p.position !== n),
              { position: n, alignment: o, leader: r },
            ].sort((p, f) => p.position - f.position);
            return jt('tabs', c)(i, a);
          },
        removeTabStop: (n) => (o, r) => {
          let { $from: i } = o.selection,
            a = i.parent;
          if (a.type.name !== 'paragraph') return false;
          let l = (a.attrs.tabs || []).filter((u) => u.position !== n);
          return jt('tabs', l.length > 0 ? l : null)(o, r);
        },
      },
    };
  },
});
var Ol = Mt({
  name: 'history',
  defaultOptions: { depth: 100, newGroupDelay: 500 },
  onSchemaReady(e, t) {
    return {
      plugins: [history({ depth: t.depth, newGroupDelay: t.newGroupDelay })],
      commands: { undo: () => undo, redo: () => redo },
      keyboardShortcuts: { 'Mod-z': undo, 'Mod-y': redo, 'Mod-Shift-z': redo },
    };
  },
});
var Wl = Be({
  name: 'bold',
  schemaMarkName: 'bold',
  markSpec: {
    parseDOM: [
      { tag: 'strong' },
      { tag: 'b' },
      {
        style: 'font-weight',
        getAttrs: (e) => (/^(bold(er)?|[5-9]\d{2})$/.test(e) ? null : false),
      },
    ],
    toDOM() {
      return ['strong', 0];
    },
  },
  onSchemaReady(e) {
    return {
      commands: { toggleBold: () => toggleMark(e.schema.marks.bold) },
      keyboardShortcuts: { 'Mod-b': toggleMark(e.schema.marks.bold) },
    };
  },
});
var Vl = Be({
  name: 'italic',
  schemaMarkName: 'italic',
  markSpec: {
    parseDOM: [
      { tag: 'i' },
      { tag: 'em' },
      { style: 'font-style', getAttrs: (e) => (e === 'italic' ? null : false) },
    ],
    toDOM() {
      return ['em', 0];
    },
  },
  onSchemaReady(e) {
    return {
      commands: { toggleItalic: () => toggleMark(e.schema.marks.italic) },
      keyboardShortcuts: { 'Mod-i': toggleMark(e.schema.marks.italic) },
    };
  },
});
function Zp(e) {
  let t = {};
  for (let n of e)
    switch (n.type.name) {
      case 'bold':
        t.bold = true;
        break;
      case 'italic':
        t.italic = true;
        break;
      case 'underline':
        t.underline = { style: n.attrs.style || 'single' };
        break;
      case 'strike':
        t.strike = true;
        break;
      case 'textColor':
        t.color = n.attrs;
        break;
      case 'highlight':
        t.highlight = n.attrs.color;
        break;
      case 'fontSize':
        t.fontSize = n.attrs.size;
        break;
      case 'fontFamily':
        t.fontFamily = { ascii: n.attrs.ascii, hAnsi: n.attrs.hAnsi };
        break;
      case 'superscript':
        t.vertAlign = 'superscript';
        break;
      case 'subscript':
        t.vertAlign = 'subscript';
        break;
    }
  return t;
}
function jl(e, t) {
  let { $from: n } = e.selection,
    o = n.parent;
  if (o.type.name !== 'paragraph' || o.textContent.length > 0) return t;
  let r = t.storedMarks || e.storedMarks || [];
  if (r.length === 0)
    return t.setNodeMarkup(n.before(), void 0, { ...o.attrs, defaultTextFormatting: null });
  let i = Zp(r);
  return t.setNodeMarkup(n.before(), void 0, { ...o.attrs, defaultTextFormatting: i });
}
function en(e, t) {
  return (n, o) => {
    let { from: r, to: i, empty: a } = n.selection,
      s = e.create(t);
    if (a) {
      if (o) {
        let l = e.isInSet(n.storedMarks || n.selection.$from.marks())
            ? (n.storedMarks || n.selection.$from.marks()).filter((d) => d.type !== e)
            : n.storedMarks || n.selection.$from.marks(),
          u = n.tr.setStoredMarks([...l, s]);
        ((u = jl(n, u)), o(u));
      }
      return true;
    }
    return (o && o(n.tr.addMark(r, i, s).scrollIntoView()), true);
  };
}
function tn(e) {
  return (t, n) => {
    let { from: o, to: r, empty: i } = t.selection;
    if (i) {
      if (n) {
        let a = (t.storedMarks || t.selection.$from.marks()).filter((l) => l.type !== e),
          s = t.tr.setStoredMarks(a);
        ((s = jl(t, s)), n(s));
      }
      return true;
    }
    return (n && n(t.tr.removeMark(o, r, e).scrollIntoView()), true);
  };
}
function La(e, t) {
  let n = [];
  return (
    e.bold && n.push(t.marks.bold.create()),
    e.italic && n.push(t.marks.italic.create()),
    e.underline &&
      n.push(
        t.marks.underline.create({ style: e.underline.style || 'single', color: e.underline.color })
      ),
    e.strike && n.push(t.marks.strike.create()),
    e.doubleStrike && n.push(t.marks.strike.create({ double: true })),
    e.color &&
      n.push(
        t.marks.textColor.create({
          rgb: e.color.rgb,
          themeColor: e.color.themeColor,
          themeTint: e.color.themeTint,
          themeShade: e.color.themeShade,
        })
      ),
    e.highlight && n.push(t.marks.highlight.create({ color: e.highlight })),
    e.fontSize && n.push(t.marks.fontSize.create({ size: e.fontSize })),
    e.fontFamily &&
      n.push(
        t.marks.fontFamily.create({
          ascii: e.fontFamily.ascii,
          hAnsi: e.fontFamily.hAnsi,
          asciiTheme: e.fontFamily.asciiTheme,
        })
      ),
    e.vertAlign === 'superscript' && n.push(t.marks.superscript.create()),
    e.vertAlign === 'subscript' && n.push(t.marks.subscript.create()),
    n
  );
}
var Io = (e, t) => {
  let { from: n, to: o, empty: r } = e.selection;
  if (r) return (t && t(e.tr.setStoredMarks([])), true);
  if (t) {
    let i = e.tr;
    (e.doc.nodesBetween(n, o, (a, s) => {
      if (a.isText && a.marks.length > 0) {
        let l = Math.max(n, s),
          u = Math.min(o, s + a.nodeSize);
        for (let d of a.marks) i = i.removeMark(l, u, d.type);
      }
    }),
      t(i.scrollIntoView()));
  }
  return true;
};
var Gl = Be({
  name: 'underline',
  schemaMarkName: 'underline',
  markSpec: {
    attrs: { style: { default: 'single' }, color: { default: null } },
    parseDOM: [
      { tag: 'u' },
      { style: 'text-decoration', getAttrs: (e) => (e.includes('underline') ? {} : false) },
    ],
    toDOM(e) {
      let t = e.attrs,
        n = ['text-decoration: underline'];
      if (t.style && t.style !== 'single') {
        let r = { double: 'double', dotted: 'dotted', dash: 'dashed', wave: 'wavy' }[t.style];
        r && n.push(`text-decoration-style: ${r}`);
      }
      return (
        t.color?.rgb && n.push(`text-decoration-color: #${t.color.rgb}`),
        ['span', { style: n.join('; ') }, 0]
      );
    },
  },
  onSchemaReady(e) {
    return {
      commands: {
        toggleUnderline: () => toggleMark(e.schema.marks.underline),
        setUnderlineStyle: (t, n) => en(e.schema.marks.underline, { style: t, color: n }),
      },
      keyboardShortcuts: { 'Mod-u': toggleMark(e.schema.marks.underline) },
    };
  },
});
var Kl = Be({
  name: 'strike',
  schemaMarkName: 'strike',
  markSpec: {
    attrs: { double: { default: false } },
    parseDOM: [
      { tag: 's' },
      { tag: 'strike' },
      { tag: 'del' },
      { style: 'text-decoration', getAttrs: (e) => (e.includes('line-through') ? {} : false) },
    ],
    toDOM() {
      return ['s', 0];
    },
  },
  onSchemaReady(e) {
    return { commands: { toggleStrike: () => toggleMark(e.schema.marks.strike) } };
  },
});
var Yl = Be({
  name: 'textColor',
  schemaMarkName: 'textColor',
  markSpec: {
    attrs: {
      rgb: { default: null },
      themeColor: { default: null },
      themeTint: { default: null },
      themeShade: { default: null },
    },
    parseDOM: [
      {
        style: 'color',
        getAttrs: (e) => {
          let n = e.match(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/);
          return n ? { rgb: n[1].toUpperCase() } : false;
        },
      },
    ],
    toDOM(e) {
      let t = e.attrs,
        n = Bl({ color: t });
      return ['span', { style: n.color ? `color: ${n.color}` : '' }, 0];
    },
  },
  onSchemaReady(e) {
    return {
      commands: {
        setTextColor: (t) =>
          !t.rgb && !t.themeColor ? tn(e.schema.marks.textColor) : en(e.schema.marks.textColor, t),
        clearTextColor: () => tn(e.schema.marks.textColor),
      },
    };
  },
});
var ql = Be({
  name: 'highlight',
  schemaMarkName: 'highlight',
  markSpec: {
    attrs: { color: { default: 'yellow' } },
    parseDOM: [
      { tag: 'mark' },
      {
        style: 'background-color',
        getAttrs: (e) => (e && e !== 'transparent' && e !== 'inherit' ? { color: e } : false),
      },
    ],
    toDOM(e) {
      let t = e.attrs.color;
      return ['mark', { style: `background-color: ${n(t)}` }, 0];
    },
  },
  onSchemaReady(e) {
    return {
      commands: {
        setHighlight: (t) =>
          !t || t === 'none'
            ? tn(e.schema.marks.highlight)
            : en(e.schema.marks.highlight, { color: t }),
        clearHighlight: () => tn(e.schema.marks.highlight),
      },
    };
  },
});
var Xl = Be({
  name: 'fontSize',
  schemaMarkName: 'fontSize',
  markSpec: {
    attrs: { size: { default: 24 } },
    parseDOM: [
      {
        style: 'font-size',
        getAttrs: (e) => {
          let t = e,
            n = t.match(/^([\d.]+)px$/);
          if (n) {
            let i = parseFloat(n[1]) * 0.75;
            return { size: Math.round(i * 2) };
          }
          let o = t.match(/^([\d.]+)pt$/);
          return o ? { size: Math.round(parseFloat(o[1]) * 2) } : false;
        },
      },
    ],
    toDOM(e) {
      let n = e.attrs.size / 2,
        o = (n * 1.15).toFixed(2);
      return ['span', { style: `font-size: ${n}pt; line-height: ${o}pt` }, 0];
    },
  },
  onSchemaReady(e) {
    return {
      commands: {
        setFontSize: (t) => en(e.schema.marks.fontSize, { size: t }),
        clearFontSize: () => tn(e.schema.marks.fontSize),
      },
    };
  },
});
var Zl = Be({
  name: 'fontFamily',
  schemaMarkName: 'fontFamily',
  markSpec: {
    attrs: { ascii: { default: null }, hAnsi: { default: null }, asciiTheme: { default: null } },
    parseDOM: [
      {
        style: 'font-family',
        getAttrs: (e) => {
          let n = e.split(',')[0].trim().replace(/['"]/g, '');
          return n ? { ascii: n } : false;
        },
      },
    ],
    toDOM(e) {
      let t = e.attrs,
        n = t.ascii || t.hAnsi;
      return n
        ? ['span', { style: `font-family: ${n.includes(' ') ? `"${n}"` : n}, sans-serif` }, 0]
        : ['span', 0];
    },
  },
  onSchemaReady(e) {
    return {
      commands: {
        setFontFamily: (t) => en(e.schema.marks.fontFamily, { ascii: t, hAnsi: t }),
        clearFontFamily: () => tn(e.schema.marks.fontFamily),
      },
    };
  },
});
var Jl = Be({
  name: 'superscript',
  schemaMarkName: 'superscript',
  markSpec: {
    excludes: 'subscript',
    parseDOM: [{ tag: 'sup' }],
    toDOM() {
      return ['sup', 0];
    },
  },
  onSchemaReady(e) {
    return { commands: { toggleSuperscript: () => toggleMark(e.schema.marks.superscript) } };
  },
});
var Ql = Be({
  name: 'subscript',
  schemaMarkName: 'subscript',
  markSpec: {
    excludes: 'superscript',
    parseDOM: [{ tag: 'sub' }],
    toDOM() {
      return ['sub', 0];
    },
  },
  onSchemaReady(e) {
    return { commands: { toggleSubscript: () => toggleMark(e.schema.marks.subscript) } };
  },
});
function ro(e) {
  let t = e.schema.marks.hyperlink;
  if (!t) return null;
  let { empty: n, $from: o, from: r, to: i } = e.selection;
  if (n) {
    let s = e.storedMarks || o.marks();
    for (let l of s) if (l.type === t) return { href: l.attrs.href, tooltip: l.attrs.tooltip };
    return null;
  }
  let a = null;
  return (
    e.doc.nodesBetween(r, i, (s) => {
      if (s.isText && a === null) {
        let l = t.isInSet(s.marks);
        if (l) return ((a = { href: l.attrs.href, tooltip: l.attrs.tooltip }), false);
      }
      return true;
    }),
    a
  );
}
function io(e) {
  let { from: t, to: n, empty: o } = e.selection;
  return o ? '' : e.doc.textBetween(t, n, '');
}
var ec = Be({
  name: 'hyperlink',
  schemaMarkName: 'hyperlink',
  markSpec: {
    attrs: { href: {}, tooltip: { default: null }, rId: { default: null } },
    inclusive: false,
    parseDOM: [
      {
        tag: 'a[href]',
        getAttrs: (e) => {
          let t = e;
          return { href: t.getAttribute('href') || '', tooltip: t.getAttribute('title') || void 0 };
        },
      },
    ],
    toDOM(e) {
      let t = e.attrs,
        n = { href: t.href, target: '_blank', rel: 'noopener noreferrer' };
      return (t.tooltip && (n.title = t.tooltip), ['a', n, 0]);
    },
  },
  onSchemaReady(e) {
    let t = e.schema.marks.hyperlink,
      n = (i, a) => (s, l) => {
        let { from: u, to: d, empty: c } = s.selection;
        if (c) return false;
        if (l) {
          let p = t.create({ href: i, tooltip: a || null });
          l(s.tr.addMark(u, d, p).scrollIntoView());
        }
        return true;
      },
      o = (i, a) => {
        let { from: s, to: l, empty: u } = i.selection;
        if (u) {
          let d = i.selection.$from;
          if (!d.marks().find((g) => g.type === t)) return false;
          let f = d.pos,
            m = d.pos;
          return (
            d.parent.forEach((g, S) => {
              if (g.isText) {
                let w = d.start() + S,
                  k = w + g.nodeSize;
                w <= d.pos &&
                  d.pos <= k &&
                  g.marks.some((v) => v.type === t) &&
                  ((f = Math.min(f, w)), (m = Math.max(m, k)));
              }
            }),
            a && a(i.tr.removeMark(f, m, t).scrollIntoView()),
            true
          );
        }
        return (a && a(i.tr.removeMark(s, l, t).scrollIntoView()), true);
      };
    return {
      commands: {
        setHyperlink: n,
        removeHyperlink: () => o,
        insertHyperlink: (i, a, s) => (l, u) => {
          if (u) {
            let d = t.create({ href: a, tooltip: s || null }),
              c = l.schema.text(i, [d]);
            u(l.tr.replaceSelectionWith(c, false).scrollIntoView());
          }
          return true;
        },
      },
    };
  },
});
var tc = Be({
  name: 'allCaps',
  schemaMarkName: 'allCaps',
  markSpec: {
    parseDOM: [{ style: 'text-transform', getAttrs: (e) => (e === 'uppercase' ? {} : false) }],
    toDOM() {
      return ['span', { style: 'text-transform: uppercase' }, 0];
    },
  },
});
var nc = Be({
  name: 'smallCaps',
  schemaMarkName: 'smallCaps',
  markSpec: {
    parseDOM: [{ style: 'font-variant', getAttrs: (e) => (e === 'small-caps' ? {} : false) }],
    toDOM() {
      return ['span', { style: 'font-variant: small-caps' }, 0];
    },
  },
});
var oc = Be({
  name: 'footnoteRef',
  schemaMarkName: 'footnoteRef',
  markSpec: {
    attrs: { id: {}, noteType: { default: 'footnote' } },
    parseDOM: [
      {
        tag: 'sup.docx-footnote-ref',
        getAttrs: (e) => {
          let t = e;
          return { id: t.dataset.id || '', noteType: t.dataset.noteType || 'footnote' };
        },
      },
    ],
    toDOM(e) {
      let t = e.attrs;
      return [
        'sup',
        { class: `docx-${t.noteType}-ref`, 'data-id': t.id, 'data-note-type': t.noteType },
        0,
      ];
    },
  },
  onSchemaReady(e) {
    let { schema: t } = e;
    function n(r) {
      return (i) => (a, s) => {
        if (!s) return true;
        let l = t.marks.footnoteRef.create({ id: String(i), noteType: r }),
          u = t.text(String(i), [l]),
          d = a.tr.replaceSelectionWith(u, false);
        return (s(d.scrollIntoView()), true);
      };
    }
    let o = (r, i) => {
      let { $from: a, $to: s } = r.selection;
      if (!i) return true;
      let l = r.tr,
        u = t.marks.footnoteRef;
      return ((l = l.removeMark(a.pos, s.pos, u)), i(l.scrollIntoView()), true);
    };
    return {
      commands: {
        insertFootnote: n('footnote'),
        insertEndnote: n('endnote'),
        deleteNoteRef: () => o,
      },
    };
  },
});
function tf(e) {
  return (e / 2) * (96 / 72);
}
var rc = Be({
  name: 'characterSpacing',
  schemaMarkName: 'characterSpacing',
  markSpec: {
    attrs: {
      spacing: { default: null },
      position: { default: null },
      scale: { default: null },
      kerning: { default: null },
    },
    parseDOM: [
      {
        tag: 'span.docx-char-spacing',
        getAttrs: (e) => {
          let t = e;
          return {
            spacing: t.dataset.spacing ? Number(t.dataset.spacing) : null,
            position: t.dataset.position ? Number(t.dataset.position) : null,
            scale: t.dataset.scale ? Number(t.dataset.scale) : null,
            kerning: t.dataset.kerning ? Number(t.dataset.kerning) : null,
          };
        },
      },
    ],
    toDOM(e) {
      let t = e.attrs,
        n = [],
        o = { class: 'docx-char-spacing' };
      if (
        (t.spacing != null &&
          t.spacing !== 0 &&
          (n.push(`letter-spacing: ${B$1(r(t.spacing))}`), (o['data-spacing'] = String(t.spacing))),
        t.position != null && t.position !== 0)
      ) {
        let r = tf(t.position);
        (n.push(`vertical-align: ${B$1(r)}`), (o['data-position'] = String(t.position)));
      }
      return (
        t.scale != null &&
          t.scale !== 100 &&
          (n.push(`transform: scaleX(${t.scale / 100})`),
          n.push('display: inline-block'),
          (o['data-scale'] = String(t.scale))),
        t.kerning != null && (o['data-kerning'] = String(t.kerning)),
        n.length > 0 && (o.style = n.join('; ')),
        ['span', o, 0]
      );
    },
  },
});
var ic = Be({
  name: 'comment',
  schemaMarkName: 'comment',
  markSpec: {
    attrs: { commentId: { default: 0 } },
    inclusive: false,
    parseDOM: [
      {
        tag: 'span.docx-comment',
        getAttrs(e) {
          return { commentId: parseInt(e.dataset.commentId || '0', 10) };
        },
      },
    ],
    toDOM(e) {
      return [
        'span',
        {
          class: 'docx-comment',
          'data-comment-id': String(e.attrs.commentId),
          style:
            'background-color: rgba(255, 212, 0, 0.25); border-bottom: 2px solid rgba(255, 212, 0, 0.6);',
        },
        0,
      ];
    },
  },
});
var ac = Be({
    name: 'insertion',
    schemaMarkName: 'insertion',
    markSpec: {
      attrs: { revisionId: { default: 0 }, author: { default: '' }, date: { default: null } },
      inclusive: false,
      parseDOM: [
        {
          tag: 'span.docx-insertion',
          getAttrs(e) {
            let t = e;
            return {
              revisionId: parseInt(t.dataset.revisionId || '0', 10),
              author: t.dataset.author || '',
              date: t.dataset.date || null,
            };
          },
        },
      ],
      toDOM(e) {
        return [
          'span',
          {
            class: 'docx-insertion',
            'data-revision-id': String(e.attrs.revisionId),
            'data-author': e.attrs.author,
            ...(e.attrs.date ? { 'data-date': e.attrs.date } : {}),
            style: 'color: #2e7d32; text-decoration: underline; text-decoration-color: #2e7d32;',
          },
          0,
        ];
      },
    },
  }),
  sc = Be({
    name: 'deletion',
    schemaMarkName: 'deletion',
    markSpec: {
      attrs: { revisionId: { default: 0 }, author: { default: '' }, date: { default: null } },
      inclusive: false,
      parseDOM: [
        {
          tag: 'span.docx-deletion',
          getAttrs(e) {
            let t = e;
            return {
              revisionId: parseInt(t.dataset.revisionId || '0', 10),
              author: t.dataset.author || '',
              date: t.dataset.date || null,
            };
          },
        },
      ],
      toDOM(e) {
        return [
          'span',
          {
            class: 'docx-deletion',
            'data-revision-id': String(e.attrs.revisionId),
            'data-author': e.attrs.author,
            ...(e.attrs.date ? { 'data-date': e.attrs.date } : {}),
            style: 'color: #c62828; text-decoration: line-through; text-decoration-color: #c62828;',
          },
          0,
        ];
      },
    },
  });
var lc = Be({
    name: 'emboss',
    schemaMarkName: 'emboss',
    markSpec: {
      parseDOM: [{ tag: 'span.docx-emboss' }],
      toDOM() {
        return [
          'span',
          {
            class: 'docx-emboss',
            style: 'text-shadow: 1px 1px 1px rgba(255,255,255,0.5), -1px -1px 1px rgba(0,0,0,0.3)',
          },
          0,
        ];
      },
    },
  }),
  cc = Be({
    name: 'imprint',
    schemaMarkName: 'imprint',
    markSpec: {
      parseDOM: [{ tag: 'span.docx-imprint' }],
      toDOM() {
        return [
          'span',
          {
            class: 'docx-imprint',
            style: '-1px -1px 1px rgba(255,255,255,0.5), 1px 1px 1px rgba(0,0,0,0.3)',
          },
          0,
        ];
      },
    },
  }),
  dc = Be({
    name: 'textShadow',
    schemaMarkName: 'textShadow',
    markSpec: {
      parseDOM: [{ tag: 'span.docx-text-shadow' }],
      toDOM() {
        return [
          'span',
          { class: 'docx-text-shadow', style: 'text-shadow: 1px 1px 2px rgba(0,0,0,0.3)' },
          0,
        ];
      },
    },
  }),
  uc = Be({
    name: 'emphasisMark',
    schemaMarkName: 'emphasisMark',
    markSpec: {
      attrs: { type: { default: 'dot' } },
      parseDOM: [
        { tag: 'span.docx-emphasis-mark', getAttrs: (e) => ({ type: e.dataset.emType || 'dot' }) },
      ],
      toDOM(e) {
        let t = e.attrs.type,
          n = 'filled dot';
        switch (t) {
          case 'dot':
            n = 'filled dot';
            break;
          case 'comma':
            n = 'filled sesame';
            break;
          case 'circle':
            n = 'filled circle';
            break;
          case 'underDot':
            n = 'filled dot';
            break;
        }
        let o = t === 'underDot' ? 'under right' : 'over right';
        return [
          'span',
          {
            class: 'docx-emphasis-mark',
            'data-em-type': t,
            style: `text-emphasis: ${n}; text-emphasis-position: ${o}; -webkit-text-emphasis: ${n}; -webkit-text-emphasis-position: ${o}`,
          },
          0,
        ];
      },
    },
  }),
  pc = Be({
    name: 'textOutline',
    schemaMarkName: 'textOutline',
    markSpec: {
      parseDOM: [{ tag: 'span.docx-text-outline' }],
      toDOM() {
        return [
          'span',
          {
            class: 'docx-text-outline',
            style: '-webkit-text-stroke: 1px currentColor; -webkit-text-fill-color: transparent',
          },
          0,
        ];
      },
    },
  });
var fc = je({
  name: 'hardBreak',
  schemaNodeName: 'hardBreak',
  nodeSpec: {
    inline: true,
    group: 'inline',
    selectable: false,
    parseDOM: [{ tag: 'br' }],
    toDOM() {
      return ['br'];
    },
  },
  onSchemaReady(e) {
    let t = e.schema.nodes.hardBreak;
    return {
      keyboardShortcuts: {
        'Shift-Enter': (n, o) => (
          o && o(n.tr.replaceSelectionWith(t.create()).scrollIntoView()),
          true
        ),
      },
    };
  },
});
var mc = je({
  name: 'tab',
  schemaNodeName: 'tab',
  nodeSpec: {
    inline: true,
    group: 'inline',
    selectable: false,
    parseDOM: [{ tag: 'span.docx-tab' }],
    toDOM() {
      return [
        'span',
        { class: 'docx-tab', style: 'display: inline-block; min-width: 16px; white-space: pre;' },
        '	',
      ];
    },
  },
});
var gc = je({
  name: 'image',
  schemaNodeName: 'image',
  nodeSpec: {
    inline: true,
    group: 'inline',
    draggable: true,
    attrs: {
      src: {},
      alt: { default: null },
      title: { default: null },
      width: { default: null },
      height: { default: null },
      rId: { default: null },
      wrapType: { default: 'inline' },
      displayMode: { default: 'inline' },
      cssFloat: { default: null },
      transform: { default: null },
      distTop: { default: null },
      distBottom: { default: null },
      distLeft: { default: null },
      distRight: { default: null },
      position: { default: null },
      borderWidth: { default: null },
      borderColor: { default: null },
      borderStyle: { default: null },
      wrapText: { default: null },
    },
    parseDOM: [
      {
        tag: 'img[src]',
        getAttrs(e) {
          let t = e;
          return {
            src: t.getAttribute('src') || '',
            alt: t.getAttribute('alt') || void 0,
            title: t.getAttribute('title') || void 0,
            width: t.width || void 0,
            height: t.height || void 0,
            rId: t.dataset.rid || void 0,
            wrapType: t.dataset.wrapType || 'inline',
            displayMode: t.dataset.displayMode || 'inline',
            cssFloat: t.dataset.cssFloat || void 0,
            transform: t.dataset.transform || void 0,
            borderWidth: t.dataset.borderWidth ? Number(t.dataset.borderWidth) : void 0,
            borderColor: t.dataset.borderColor || void 0,
            borderStyle: t.dataset.borderStyle || void 0,
          };
        },
      },
    ],
    toDOM(e) {
      let t = e.attrs,
        n = { src: t.src, class: 'docx-image' };
      (t.alt && (n.alt = t.alt),
        t.title && (n.title = t.title),
        t.rId && (n['data-rid'] = t.rId),
        t.wrapType && (n['data-wrap-type'] = t.wrapType),
        t.displayMode && (n['data-display-mode'] = t.displayMode),
        t.cssFloat && (n['data-css-float'] = t.cssFloat),
        t.transform && (n['data-transform'] = t.transform),
        t.borderWidth && (n['data-border-width'] = String(t.borderWidth)),
        t.borderColor && (n['data-border-color'] = t.borderColor),
        t.borderStyle && (n['data-border-style'] = t.borderStyle));
      let o = [];
      if (
        (t.width && ((n.width = String(t.width)), o.push(`width: ${t.width}px`)),
        t.height && ((n.height = String(t.height)), o.push(`height: ${t.height}px`)),
        o.push('max-width: 100%'),
        t.width && t.height ? o.push('object-fit: contain') : o.push('height: auto'),
        t.displayMode === 'float' && t.cssFloat && t.cssFloat !== 'none')
      ) {
        (o.push(`float: ${t.cssFloat}`),
          (n.class += ` docx-image-float docx-image-float-${t.cssFloat}`));
        let r = t.distTop ?? 0,
          i = t.distBottom ?? 0,
          a = t.distLeft ?? 0,
          s = t.distRight ?? 0;
        t.cssFloat === 'left'
          ? o.push(`margin: ${r}px ${s || 12}px ${i}px ${a}px`)
          : o.push(`margin: ${r}px ${s}px ${i}px ${a || 12}px`);
      } else if (t.displayMode === 'block') {
        (o.push('display: block'),
          o.push('margin-left: auto'),
          o.push('margin-right: auto'),
          (n.class += ' docx-image-block'));
        let r = t.distTop ?? 0,
          i = t.distBottom ?? 0;
        (r > 0 && o.push(`margin-top: ${r}px`), i > 0 && o.push(`margin-bottom: ${i}px`));
      }
      if (
        (t.transform && o.push(`transform: ${t.transform}`), t.borderWidth && t.borderWidth > 0)
      ) {
        let r = t.borderStyle || 'solid',
          i = t.borderColor || '#000000';
        o.push(`border: ${t.borderWidth}px ${r} ${i}`);
      }
      return ((n.style = o.join('; ')), ['img', n]);
    },
  },
});
var hc = je({
  name: 'textBox',
  schemaNodeName: 'textBox',
  nodeSpec: {
    group: 'block',
    content: '(paragraph | table)+',
    isolating: true,
    draggable: true,
    attrs: {
      width: { default: 200 },
      height: { default: null },
      textBoxId: { default: null },
      fillColor: { default: null },
      outlineWidth: { default: null },
      outlineColor: { default: null },
      outlineStyle: { default: null },
      marginTop: { default: 4 },
      marginBottom: { default: 4 },
      marginLeft: { default: 7 },
      marginRight: { default: 7 },
      verticalAlign: { default: null },
      displayMode: { default: 'inline' },
      cssFloat: { default: null },
      wrapType: { default: 'inline' },
    },
    parseDOM: [
      {
        tag: 'div.docx-textbox',
        getAttrs(e) {
          let t = e;
          return {
            width: t.dataset.width ? Number(t.dataset.width) : void 0,
            height: t.dataset.height ? Number(t.dataset.height) : void 0,
            textBoxId: t.dataset.textboxId || void 0,
            fillColor: t.dataset.fillColor || void 0,
            outlineWidth: t.dataset.outlineWidth ? Number(t.dataset.outlineWidth) : void 0,
            outlineColor: t.dataset.outlineColor || void 0,
            outlineStyle: t.dataset.outlineStyle || void 0,
            marginTop: t.dataset.marginTop ? Number(t.dataset.marginTop) : void 0,
            marginBottom: t.dataset.marginBottom ? Number(t.dataset.marginBottom) : void 0,
            marginLeft: t.dataset.marginLeft ? Number(t.dataset.marginLeft) : void 0,
            marginRight: t.dataset.marginRight ? Number(t.dataset.marginRight) : void 0,
            verticalAlign: t.dataset.verticalAlign || void 0,
            displayMode: t.dataset.displayMode || void 0,
            cssFloat: t.dataset.cssFloat || void 0,
            wrapType: t.dataset.wrapType || void 0,
          };
        },
      },
    ],
    toDOM(e) {
      let t = e.attrs,
        n = { class: 'docx-textbox' };
      (t.width && (n['data-width'] = String(t.width)),
        t.height && (n['data-height'] = String(t.height)),
        t.textBoxId && (n['data-textbox-id'] = t.textBoxId),
        t.fillColor && (n['data-fill-color'] = t.fillColor),
        t.outlineWidth && (n['data-outline-width'] = String(t.outlineWidth)),
        t.outlineColor && (n['data-outline-color'] = t.outlineColor),
        t.outlineStyle && (n['data-outline-style'] = t.outlineStyle),
        t.marginTop != null && (n['data-margin-top'] = String(t.marginTop)),
        t.marginBottom != null && (n['data-margin-bottom'] = String(t.marginBottom)),
        t.marginLeft != null && (n['data-margin-left'] = String(t.marginLeft)),
        t.marginRight != null && (n['data-margin-right'] = String(t.marginRight)),
        t.verticalAlign && (n['data-vertical-align'] = t.verticalAlign),
        t.displayMode && (n['data-display-mode'] = t.displayMode),
        t.cssFloat && (n['data-css-float'] = t.cssFloat),
        t.wrapType && (n['data-wrap-type'] = t.wrapType));
      let o = [];
      if (
        (t.width && o.push(`width: ${t.width}px`),
        t.height && o.push(`min-height: ${t.height}px`),
        t.fillColor && o.push(`background-color: ${t.fillColor}`),
        t.outlineWidth && t.outlineWidth > 0)
      ) {
        let l = t.outlineStyle || 'solid',
          u = t.outlineColor || '#000000';
        o.push(`border: ${t.outlineWidth}px ${l} ${u}`);
      } else o.push('border: 1px solid var(--doc-border, #d1d5db)');
      let r = t.marginTop ?? 4,
        i = t.marginBottom ?? 4,
        a = t.marginLeft ?? 7,
        s = t.marginRight ?? 7;
      return (
        o.push(`padding: ${r}px ${s}px ${i}px ${a}px`),
        t.verticalAlign === 'middle' || t.verticalAlign === 'center'
          ? (o.push('display: flex'),
            o.push('flex-direction: column'),
            o.push('justify-content: center'))
          : t.verticalAlign === 'bottom' &&
            (o.push('display: flex'),
            o.push('flex-direction: column'),
            o.push('justify-content: flex-end')),
        t.displayMode === 'float' && t.cssFloat && t.cssFloat !== 'none'
          ? (o.push(`float: ${t.cssFloat}`), o.push('margin: 4px 8px'))
          : t.displayMode === 'block' &&
            (o.push('margin-left: auto'), o.push('margin-right: auto')),
        o.push('box-sizing: border-box'),
        o.push('overflow: hidden'),
        o.push('position: relative'),
        (n.style = o.join('; ')),
        ['div', n, 0]
      );
    },
  },
});
function nf(e, t, n) {
  switch (e) {
    case 'ellipse':
    case 'oval':
      return `<ellipse cx="${t / 2}" cy="${n / 2}" rx="${t / 2}" ry="${n / 2}" />`;
    case 'roundRect':
      return `<rect x="0" y="0" width="${t}" height="${n}" rx="${Math.min(t, n) * 0.1}" />`;
    case 'triangle':
    case 'isosTriangle':
      return `<polygon points="${t / 2},0 ${t},${n} 0,${n}" />`;
    case 'diamond':
      return `<polygon points="${t / 2},0 ${t},${n / 2} ${t / 2},${n} 0,${n / 2}" />`;
    case 'line':
    case 'straightConnector1':
      return `<line x1="0" y1="${n / 2}" x2="${t}" y2="${n / 2}" />`;
    default:
      return `<rect x="0" y="0" width="${t}" height="${n}" />`;
  }
}
function of(e, t) {
  let n = '';
  try {
    n = JSON.parse(t.gradientStops || '[]')
      .map((c) => `<stop offset="${Math.round(c.position / 1e3)}%" stop-color="${c.color}" />`)
      .join('');
  } catch {
    return '';
  }
  let o = t.gradientType || 'linear';
  if (o === 'radial' || o === 'rectangular' || o === 'path')
    return `<radialGradient id="${e}" cx="50%" cy="50%" r="50%">${n}</radialGradient>`;
  let i = (((t.gradientAngle || 0) - 90) * Math.PI) / 180,
    a = Math.round(50 + 50 * Math.cos(i + Math.PI)),
    s = Math.round(50 + 50 * Math.sin(i + Math.PI)),
    l = Math.round(50 + 50 * Math.cos(i)),
    u = Math.round(50 + 50 * Math.sin(i));
  return `<linearGradient id="${e}" x1="${a}%" y1="${s}%" x2="${l}%" y2="${u}%">${n}</linearGradient>`;
}
var bc = je({
  name: 'shape',
  schemaNodeName: 'shape',
  nodeSpec: {
    inline: true,
    group: 'inline',
    draggable: true,
    atom: true,
    attrs: {
      shapeType: { default: 'rect' },
      shapeId: { default: null },
      width: { default: 100 },
      height: { default: 80 },
      fillColor: { default: null },
      fillType: { default: 'solid' },
      gradientType: { default: null },
      gradientAngle: { default: null },
      gradientStops: { default: null },
      outlineWidth: { default: 1 },
      outlineColor: { default: '#000000' },
      outlineStyle: { default: 'solid' },
      transform: { default: null },
      displayMode: { default: 'inline' },
      cssFloat: { default: null },
      wrapType: { default: 'inline' },
      shadowColor: { default: null },
      shadowBlur: { default: null },
      shadowOffsetX: { default: null },
      shadowOffsetY: { default: null },
      glowColor: { default: null },
      glowRadius: { default: null },
    },
    parseDOM: [
      {
        tag: 'span.docx-shape',
        getAttrs(e) {
          let t = e;
          return {
            shapeType: t.dataset.shapeType || 'rect',
            shapeId: t.dataset.shapeId || void 0,
            width: t.dataset.width ? Number(t.dataset.width) : void 0,
            height: t.dataset.height ? Number(t.dataset.height) : void 0,
            fillColor: t.dataset.fillColor || void 0,
            fillType: t.dataset.fillType || 'solid',
            gradientType: t.dataset.gradientType || void 0,
            gradientAngle: t.dataset.gradientAngle ? Number(t.dataset.gradientAngle) : void 0,
            gradientStops: t.dataset.gradientStops || void 0,
            outlineWidth: t.dataset.outlineWidth ? Number(t.dataset.outlineWidth) : void 0,
            outlineColor: t.dataset.outlineColor || void 0,
            outlineStyle: t.dataset.outlineStyle || void 0,
            transform: t.dataset.transform || void 0,
            displayMode: t.dataset.displayMode || void 0,
            cssFloat: t.dataset.cssFloat || void 0,
            wrapType: t.dataset.wrapType || void 0,
            shadowColor: t.dataset.shadowColor || void 0,
            shadowBlur: t.dataset.shadowBlur ? Number(t.dataset.shadowBlur) : void 0,
            shadowOffsetX: t.dataset.shadowOffsetX ? Number(t.dataset.shadowOffsetX) : void 0,
            shadowOffsetY: t.dataset.shadowOffsetY ? Number(t.dataset.shadowOffsetY) : void 0,
            glowColor: t.dataset.glowColor || void 0,
            glowRadius: t.dataset.glowRadius ? Number(t.dataset.glowRadius) : void 0,
          };
        },
      },
    ],
    toDOM(e) {
      let t = e.attrs,
        n = t.width || 100,
        o = t.height || 80,
        r = { class: 'docx-shape', 'data-shape-type': t.shapeType || 'rect' };
      (t.shapeId && (r['data-shape-id'] = t.shapeId),
        (r['data-width'] = String(n)),
        (r['data-height'] = String(o)),
        t.fillColor && (r['data-fill-color'] = t.fillColor),
        t.fillType && (r['data-fill-type'] = t.fillType),
        t.gradientType && (r['data-gradient-type'] = t.gradientType),
        t.gradientAngle != null && (r['data-gradient-angle'] = String(t.gradientAngle)),
        t.gradientStops && (r['data-gradient-stops'] = t.gradientStops),
        t.outlineWidth && (r['data-outline-width'] = String(t.outlineWidth)),
        t.outlineColor && (r['data-outline-color'] = t.outlineColor),
        t.outlineStyle && (r['data-outline-style'] = t.outlineStyle),
        t.transform && (r['data-transform'] = t.transform),
        t.displayMode && (r['data-display-mode'] = t.displayMode),
        t.cssFloat && (r['data-css-float'] = t.cssFloat),
        t.wrapType && (r['data-wrap-type'] = t.wrapType),
        t.shadowColor && (r['data-shadow-color'] = t.shadowColor),
        t.shadowBlur != null && (r['data-shadow-blur'] = String(t.shadowBlur)),
        t.shadowOffsetX != null && (r['data-shadow-offset-x'] = String(t.shadowOffsetX)),
        t.shadowOffsetY != null && (r['data-shadow-offset-y'] = String(t.shadowOffsetY)),
        t.glowColor && (r['data-glow-color'] = t.glowColor),
        t.glowRadius != null && (r['data-glow-radius'] = String(t.glowRadius)));
      let i = [
        'display: inline-block',
        `width: ${n}px`,
        `height: ${o}px`,
        'vertical-align: middle',
        'line-height: 0',
      ];
      if (
        (t.transform && i.push(`transform: ${t.transform}`),
        t.displayMode === 'float' && t.cssFloat && t.cssFloat !== 'none'
          ? (i.push(`float: ${t.cssFloat}`), i.push('margin: 4px 8px'))
          : t.displayMode === 'block' && (i.push('display: block'), i.push('margin: 4px auto')),
        t.shadowColor)
      ) {
        let m = t.shadowOffsetX || 2,
          b = t.shadowOffsetY || 2,
          g = t.shadowBlur || 4;
        i.push(`filter: drop-shadow(${m}px ${b}px ${g}px ${t.shadowColor})`);
      }
      if (t.glowColor && t.glowRadius) {
        let m = i.find((g) => g.startsWith('filter:')),
          b = `drop-shadow(0 0 ${t.glowRadius}px ${t.glowColor})`;
        if (m) {
          let g = i.indexOf(m);
          i[g] = m + ' ' + b;
        } else i.push(`filter: ${b}`);
      }
      r.style = i.join('; ');
      let a = '',
        s;
      if (t.fillType === 'gradient' && t.gradientStops) {
        let m = `grad-${t.shapeId || Math.random().toString(36).slice(2, 8)}`;
        ((s = `url(#${m})`), (a = of(m, t)));
      } else s = t.fillType === 'none' ? 'none' : t.fillColor || '#ffffff';
      let l = t.outlineWidth || 1,
        u = t.outlineColor || '#000000',
        d =
          t.outlineStyle === 'dashed'
            ? ' stroke-dasharray="8 4"'
            : t.outlineStyle === 'dotted'
              ? ' stroke-dasharray="2 2"'
              : '',
        c = nf(t.shapeType || 'rect', n, o),
        p =
          `<svg xmlns="http://www.w3.org/2000/svg" width="${n}" height="${o}" viewBox="0 0 ${n} ${o}" style="fill:${s};stroke:${u};stroke-width:${l}${d}">` +
          (a ? `<defs>${a}</defs>` : '') +
          c +
          '</svg>',
        f = document.createElement('span');
      return (
        Object.entries(r).forEach(([m, b]) => {
          f.setAttribute(m, b);
        }),
        (f.innerHTML = p),
        { dom: f }
      );
    },
  },
});
var yc = je({
  name: 'horizontalRule',
  schemaNodeName: 'horizontalRule',
  nodeSpec: {
    group: 'block',
    parseDOM: [{ tag: 'hr' }],
    toDOM() {
      return ['hr'];
    },
  },
});
var xc = je({
  name: 'pageBreak',
  schemaNodeName: 'pageBreak',
  nodeSpec: {
    group: 'block',
    atom: true,
    selectable: true,
    parseDOM: [{ tag: 'div.docx-page-break' }],
    toDOM() {
      return ['div', { class: 'docx-page-break' }];
    },
  },
});
var Sc = je({
  name: 'field',
  schemaNodeName: 'field',
  nodeSpec: {
    inline: true,
    group: 'inline',
    atom: true,
    selectable: true,
    attrs: {
      fieldType: { default: 'UNKNOWN' },
      instruction: { default: '' },
      displayText: { default: '' },
      fieldKind: { default: 'simple' },
      fldLock: { default: false },
      dirty: { default: false },
    },
    parseDOM: [
      {
        tag: 'span.docx-field',
        getAttrs(e) {
          let t = e;
          return {
            fieldType: t.dataset.fieldType || 'UNKNOWN',
            instruction: t.dataset.instruction || '',
            displayText: t.textContent || '',
            fieldKind: t.dataset.fieldKind || 'simple',
            fldLock: t.dataset.fldLock === 'true',
            dirty: t.dataset.dirty === 'true',
          };
        },
      },
    ],
    toDOM(e) {
      let {
          fieldType: t,
          instruction: n,
          displayText: o,
          fieldKind: r,
          fldLock: i,
          dirty: a,
        } = e.attrs,
        s = o || '';
      if (!s)
        switch (t) {
          case 'PAGE':
            s = '{page}';
            break;
          case 'NUMPAGES':
            s = '{pages}';
            break;
          case 'DATE':
          case 'TIME':
          case 'CREATEDATE':
          case 'SAVEDATE':
            s = new Date().toLocaleDateString();
            break;
          case 'MERGEFIELD':
            s = `\xAB${n.replace(/^MERGEFIELD\s+/i, '').replace(/\s*\\.*$/, '')}\xBB`;
            break;
          default:
            s = `{${t}}`;
        }
      return [
        'span',
        {
          class: `docx-field docx-field-${t.toLowerCase()}`,
          'data-field-type': t,
          'data-instruction': n,
          'data-field-kind': r,
          ...(i ? { 'data-fld-lock': 'true' } : {}),
          ...(a ? { 'data-dirty': 'true' } : {}),
          style: 'outline: 1px solid rgba(200,200,200,0.4); padding: 0 1px; border-radius: 2px;',
        },
        s,
      ];
    },
  },
});
var kc = je({
  name: 'sdt',
  schemaNodeName: 'sdt',
  nodeSpec: {
    inline: true,
    group: 'inline',
    content: 'inline*',
    attrs: {
      sdtType: { default: 'richText' },
      alias: { default: null },
      tag: { default: null },
      lock: { default: null },
      placeholder: { default: null },
      showingPlaceholder: { default: false },
      dateFormat: { default: null },
      listItems: { default: null },
      checked: { default: null },
    },
    parseDOM: [
      {
        tag: 'span.docx-sdt',
        getAttrs(e) {
          let t = e;
          return {
            sdtType: t.dataset.sdtType || 'richText',
            alias: t.dataset.alias || null,
            tag: t.dataset.tag || null,
            lock: t.dataset.lock || null,
            placeholder: t.dataset.placeholder || null,
            showingPlaceholder: t.dataset.showingPlaceholder === 'true',
            dateFormat: t.dataset.dateFormat || null,
            listItems: t.dataset.listItems || null,
            checked:
              t.dataset.checked === 'true' ? true : t.dataset.checked === 'false' ? false : null,
          };
        },
      },
    ],
    toDOM(e) {
      let t = e.attrs,
        n = { class: `docx-sdt docx-sdt-${t.sdtType}`, 'data-sdt-type': String(t.sdtType) };
      return (
        t.alias && (n['data-alias'] = String(t.alias)),
        t.tag && (n['data-tag'] = String(t.tag)),
        t.lock && (n['data-lock'] = String(t.lock)),
        t.placeholder && (n['data-placeholder'] = String(t.placeholder)),
        t.showingPlaceholder && (n['data-showing-placeholder'] = 'true'),
        t.dateFormat && (n['data-date-format'] = String(t.dateFormat)),
        t.listItems && (n['data-list-items'] = String(t.listItems)),
        t.checked != null && (n['data-checked'] = String(t.checked)),
        t.sdtType === 'checkbox'
          ? (n.style =
              'border: 1px solid #ccc; border-radius: 3px; padding: 0 2px; display: inline;')
          : (n.style = 'border-bottom: 1px dashed #999; padding: 0 1px; display: inline;'),
        ['span', n, 0]
      );
    },
  },
});
var wc = je({
  name: 'math',
  schemaNodeName: 'math',
  nodeSpec: {
    inline: true,
    group: 'inline',
    atom: true,
    selectable: true,
    attrs: { display: { default: 'inline' }, ommlXml: { default: '' }, plainText: { default: '' } },
    parseDOM: [
      {
        tag: 'span.docx-math',
        getAttrs(e) {
          let t = e;
          return {
            display: t.dataset.display || 'inline',
            ommlXml: t.dataset.ommlXml || '',
            plainText: t.textContent || '',
          };
        },
      },
    ],
    toDOM(e) {
      let { display: t, ommlXml: n, plainText: o } = e.attrs,
        r = o || '[equation]';
      return [
        'span',
        {
          class: `docx-math docx-math-${t}`,
          'data-display': t,
          'data-omml-xml': n,
          style:
            'font-style: italic; font-family: "Cambria Math", "Latin Modern Math", serif; background: rgba(200,200,255,0.1); padding: 0 2px; border-radius: 2px;',
        },
        r,
      ];
    },
  },
});
var ff = {
    content: 'tableRow+',
    group: 'block',
    tableRole: 'table',
    isolating: true,
    attrs: {
      styleId: { default: null },
      width: { default: null },
      widthType: { default: null },
      justification: { default: null },
      columnWidths: { default: null },
      floating: { default: null },
      cellMargins: { default: null },
      look: { default: null },
      _originalFormatting: { default: null },
    },
    parseDOM: [
      {
        tag: 'table',
        getAttrs(e) {
          let t = e;
          return { styleId: t.dataset.styleId || void 0, justification: t.dataset.justification };
        },
      },
    ],
    toDOM(e) {
      let t = e.attrs,
        n = { class: 'docx-table' };
      t.styleId && (n['data-style-id'] = t.styleId);
      let o = ['border-collapse: collapse'];
      if (t.width && t.widthType === 'pct')
        (o.push(`width: ${t.width / 50}%`), o.push('table-layout: fixed'));
      else if (t.width && t.widthType === 'dxa') {
        let r = Math.round((t.width / 20) * 1.333);
        (o.push(`width: ${r}px`), o.push('table-layout: fixed'));
      } else (o.push('width: 100%'), o.push('table-layout: fixed'));
      return (
        t.justification === 'center'
          ? o.push('margin-left: auto', 'margin-right: auto')
          : t.justification === 'right' && o.push('margin-left: auto'),
        (n.style = o.join('; ')),
        ['table', n, ['tbody', 0]]
      );
    },
  },
  mf = {
    content: '(tableCell | tableHeader)+',
    tableRole: 'row',
    attrs: {
      height: { default: null },
      heightRule: { default: null },
      isHeader: { default: false },
      _originalFormatting: { default: null },
    },
    parseDOM: [{ tag: 'tr' }],
    toDOM(e) {
      let t = e.attrs,
        n = {};
      if (t.height) {
        let o = Math.round((t.height / 20) * 1.333);
        n.style = `height: ${o}px`;
      }
      return ['tr', n, 0];
    },
  },
  gf = {
    single: 'solid',
    double: 'double',
    dotted: 'dotted',
    dashed: 'dashed',
    thick: 'solid',
    dashSmallGap: 'dashed',
    dotDash: 'dashed',
    dotDotDash: 'dotted',
    triple: 'double',
    thinThickSmallGap: 'double',
    thickThinSmallGap: 'double',
    thinThickThinSmallGap: 'double',
    thinThickMediumGap: 'double',
    thickThinMediumGap: 'double',
    thinThickThinMediumGap: 'double',
    thinThickLargeGap: 'double',
    thickThinLargeGap: 'double',
    thinThickThinLargeGap: 'double',
    wave: 'solid',
    doubleWave: 'double',
    dashDotStroked: 'dashed',
    threeDEmboss: 'ridge',
    threeDEngrave: 'groove',
    outset: 'outset',
    inset: 'inset',
  };
function Cc(e) {
  let t = [],
    n = e.borders;
  if (!n) return t;
  let o = (r) => {
    if (!r || !r.style || r.style === 'none' || r.style === 'nil') return 'none';
    let i = r.size ? Math.max(1, Math.round((r.size / 8) * 1.333)) : 1,
      a = gf[r.style] || 'solid',
      s = r.color?.rgb,
      l = s && s !== 'auto' ? `#${s}` : '#000000';
    return `${i}px ${a} ${l}`;
  };
  return (
    t.push(`border-top: ${o(n.top)}`),
    t.push(`border-bottom: ${o(n.bottom)}`),
    t.push(`border-left: ${o(n.left)}`),
    t.push(`border-right: ${o(n.right)}`),
    t
  );
}
function Tc(e) {
  let t = e.margins;
  if (!t) {
    let s = Math.round(7.1982);
    return [`padding: ${s}px ${s}px`];
  }
  let n = (s) => (s ? Math.round((s / 20) * 1.333) : 0),
    o = n(t.top),
    r = n(t.right),
    i = n(t.bottom),
    a = n(t.left);
  return [`padding: ${o}px ${r}px ${i}px ${a}px`];
}
function vc(e) {
  if (!e) return [];
  let t = [];
  switch (e) {
    case 'tbRl':
    case 'tbRlV':
      t.push('writing-mode: vertical-rl');
      break;
    case 'btLr':
      t.push('writing-mode: vertical-lr', 'transform: rotate(180deg)');
      break;
    case 'rl':
    case 'rlV':
      t.push('direction: rtl');
      break;
    case 'tb':
    case 'tbV':
      t.push('writing-mode: vertical-lr');
      break;
  }
  return t;
}
function Rc(e) {
  let t = [];
  if (e.colwidth && e.colwidth.length > 0) {
    let n = e.colwidth.reduce((o, r) => o + r, 0);
    t.push(`width: ${n}px`);
  } else if (e.width && e.widthType === 'pct') t.push(`width: ${e.width}%`);
  else if (e.width) {
    let n = Math.round((e.width / 20) * 1.333);
    t.push(`width: ${n}px`);
  }
  return t;
}
var hf = {
    content: '(paragraph | table)+',
    tableRole: 'cell',
    isolating: true,
    attrs: {
      colspan: { default: 1 },
      rowspan: { default: 1 },
      colwidth: { default: null },
      width: { default: null },
      widthType: { default: null },
      verticalAlign: { default: null },
      backgroundColor: { default: null },
      borders: { default: null },
      margins: { default: null },
      textDirection: { default: null },
      noWrap: { default: false },
      _originalFormatting: { default: null },
    },
    parseDOM: [
      {
        tag: 'td',
        getAttrs(e) {
          let t = e;
          return {
            colspan: t.colSpan || 1,
            rowspan: t.rowSpan || 1,
            verticalAlign: t.dataset.valign,
            backgroundColor: t.dataset.bgcolor || void 0,
          };
        },
      },
    ],
    toDOM(e) {
      let t = e.attrs,
        n = { class: 'docx-table-cell' };
      (t.colspan > 1 && (n.colspan = String(t.colspan)),
        t.rowspan > 1 && (n.rowspan = String(t.rowspan)));
      let o = [];
      return (
        o.push(...Tc(t)),
        t.noWrap
          ? o.push('white-space: nowrap')
          : o.push('word-wrap: break-word', 'overflow-wrap: break-word', 'overflow: hidden'),
        o.push(...Rc(t)),
        o.push(...Cc(t)),
        o.push(...vc(t.textDirection)),
        t.verticalAlign &&
          ((n['data-valign'] = t.verticalAlign), o.push(`vertical-align: ${t.verticalAlign}`)),
        t.backgroundColor &&
          ((n['data-bgcolor'] = t.backgroundColor),
          o.push(`background-color: #${t.backgroundColor}`)),
        (n.style = o.join('; ')),
        ['td', n, 0]
      );
    },
  },
  bf = {
    content: '(paragraph | table)+',
    tableRole: 'header_cell',
    isolating: true,
    attrs: {
      colspan: { default: 1 },
      rowspan: { default: 1 },
      colwidth: { default: null },
      width: { default: null },
      widthType: { default: null },
      verticalAlign: { default: null },
      backgroundColor: { default: null },
      borders: { default: null },
      margins: { default: null },
      textDirection: { default: null },
      noWrap: { default: false },
      _originalFormatting: { default: null },
    },
    parseDOM: [
      {
        tag: 'th',
        getAttrs(e) {
          let t = e;
          return {
            colspan: t.colSpan || 1,
            rowspan: t.rowSpan || 1,
            verticalAlign: t.dataset.valign,
            backgroundColor: t.dataset.bgcolor || void 0,
          };
        },
      },
    ],
    toDOM(e) {
      let t = e.attrs,
        n = { class: 'docx-table-header' };
      (t.colspan > 1 && (n.colspan = String(t.colspan)),
        t.rowspan > 1 && (n.rowspan = String(t.rowspan)));
      let o = ['font-weight: bold'];
      return (
        o.push(...Tc(t)),
        t.noWrap
          ? o.push('white-space: nowrap')
          : o.push('word-wrap: break-word', 'overflow-wrap: break-word', 'overflow: hidden'),
        o.push(...Rc(t)),
        o.push(...Cc(t)),
        o.push(...vc(t.textDirection)),
        t.verticalAlign &&
          ((n['data-valign'] = t.verticalAlign), o.push(`vertical-align: ${t.verticalAlign}`)),
        t.backgroundColor &&
          ((n['data-bgcolor'] = t.backgroundColor),
          o.push(`background-color: #${t.backgroundColor}`)),
        (n.style = o.join('; ')),
        ['th', n, 0]
      );
    },
  };
function _e(e) {
  let { selection: t } = e,
    { $from: n } = t,
    o = t instanceof CellSelection,
    r,
    i,
    a,
    s,
    l;
  for (let m = n.depth; m > 0; m--) {
    let b = n.node(m);
    if (b.type.name === 'tableCell' || b.type.name === 'tableHeader') {
      l = b;
      let g = n.node(m - 1);
      if (g && g.type.name === 'tableRow') {
        let S = 0,
          w = false;
        g.forEach((k, E, v) => {
          w || (v === n.index(m - 1) ? ((s = S), (w = true)) : (S += k.attrs.colspan || 1));
        });
      }
    } else if (b.type.name === 'tableRow') {
      let g = n.node(m - 1);
      g && g.type.name === 'table' && (a = n.index(m - 1));
    } else if (b.type.name === 'table') {
      ((r = b), (i = n.before(m)));
      break;
    }
  }
  if (!r) return { isInTable: false };
  let u = 0,
    d = 0;
  r.forEach((m) => {
    if (m.type.name === 'tableRow') {
      u++;
      let b = 0;
      (m.forEach((g) => {
        b += g.attrs.colspan || 1;
      }),
        (d = Math.max(d, b)));
    }
  });
  let c = l && ((l.attrs.colspan || 1) > 1 || (l.attrs.rowspan || 1) > 1),
    p,
    f;
  if (l) {
    let m = l.attrs;
    m.backgroundColor && typeof m.backgroundColor == 'string' && (f = m.backgroundColor);
    let b = m.borders;
    if (b)
      for (let g of ['top', 'right', 'bottom', 'left']) {
        let S = b[g];
        if (S?.color && S.style && S.style !== 'none' && S.style !== 'nil') {
          p = S.color;
          break;
        }
      }
  }
  return {
    isInTable: true,
    table: r,
    tablePos: i,
    rowIndex: a,
    columnIndex: s,
    rowCount: u,
    columnCount: d,
    hasMultiCellSelection: o,
    canSplitCell: !!c,
    cellBorderColor: p,
    cellBackgroundColor: f,
  };
}
function Fo(e) {
  let { $from: t } = e.selection;
  for (let n = t.depth; n > 0; n--) {
    let o = t.node(n);
    if (o.type.name === 'tableCell' || o.type.name === 'tableHeader') return true;
  }
  return false;
}
function Pc(e) {
  let { $from: t } = e.selection,
    n = -1,
    o = -1,
    r = -1;
  for (let i = t.depth; i > 0; i--) {
    let a = t.node(i);
    if (a.type.name === 'tableCell' || a.type.name === 'tableHeader') n = i;
    else if (a.type.name === 'tableRow') o = i;
    else if (a.type.name === 'table') {
      r = i;
      break;
    }
  }
  return n === -1 || o === -1 || r === -1
    ? null
    : { cellDepth: n, cellPos: t.before(n), rowDepth: o, tableDepth: r };
}
function Mc() {
  return (e, t) => {
    if (!Fo(e)) return false;
    let n = Pc(e);
    if (!n) return false;
    let { $from: o } = e.selection,
      r = o.node(n.tableDepth),
      i = o.node(n.rowDepth),
      a = o.index(n.rowDepth),
      s = o.index(n.tableDepth);
    if (a < i.childCount - 1) {
      let l = n.cellPos + o.node(n.cellDepth).nodeSize;
      if (t) {
        let u = l + 1 + 1,
          d = e.tr.setSelection(Selection.near(e.doc.resolve(u)));
        t(d.scrollIntoView());
      }
      return true;
    }
    if (s < r.childCount - 1) {
      let u = o.before(n.rowDepth) + i.nodeSize;
      if (t) {
        let d = u + 1 + 1 + 1,
          c = e.tr.setSelection(Selection.near(e.doc.resolve(d)));
        t(c.scrollIntoView());
      }
      return true;
    }
    return false;
  };
}
function Ec() {
  return (e, t) => {
    if (!Fo(e)) return false;
    let n = Pc(e);
    if (!n) return false;
    let { $from: o } = e.selection,
      r = o.node(n.tableDepth),
      i = o.index(n.rowDepth),
      a = o.index(n.tableDepth);
    if (i > 0) {
      let l = o.node(n.rowDepth).child(i - 1),
        u = n.cellPos - l.nodeSize;
      if (t) {
        let d = u + l.nodeSize - 2,
          c = e.tr.setSelection(Selection.near(e.doc.resolve(d), -1));
        t(c.scrollIntoView());
      }
      return true;
    }
    if (a > 0) {
      let s = r.child(a - 1),
        u = o.before(n.rowDepth) - s.nodeSize;
      if (t) {
        let c = u + s.nodeSize - 1 - 1,
          p = e.tr.setSelection(Selection.near(e.doc.resolve(c), -1));
        t(p.scrollIntoView());
      }
      return true;
    }
    return false;
  };
}
var yf = je({ name: 'table', schemaNodeName: 'table', nodeSpec: ff }),
  xf = je({ name: 'tableRow', schemaNodeName: 'tableRow', nodeSpec: mf }),
  Sf = je({ name: 'tableCell', schemaNodeName: 'tableCell', nodeSpec: hf }),
  kf = je({ name: 'tableHeader', schemaNodeName: 'tableHeader', nodeSpec: bf }),
  wf = Mt({
    name: 'tablePlugin',
    onSchemaReady(e) {
      let { schema: t } = e;
      function n(...M) {
        return (I, y, P) => {
          for (let F of M) if (F(I, y, P)) return true;
          return false;
        };
      }
      function o(M, I = {}) {
        let y = M?.attrs ?? {};
        return {
          colspan: y.colspan || 1,
          rowspan: 1,
          colwidth: y.colwidth,
          width: y.width,
          widthType: y.widthType,
          verticalAlign: y.verticalAlign,
          backgroundColor: y.backgroundColor,
          borders: y.borders,
          margins: y.margins,
          textDirection: y.textDirection,
          noWrap: y.noWrap,
          ...I,
        };
      }
      function r(M, I, y = '000000', P = 9360) {
        let F = [],
          B = Math.floor(P / I),
          j = 360,
          Z = 'atLeast',
          N = { style: 'single', size: 4, color: { rgb: y } },
          U = { top: N, bottom: N, left: N, right: N };
        for (let xe = 0; xe < M; xe++) {
          let R = [];
          for (let O = 0; O < I; O++) {
            let D = t.nodes.paragraph.create(),
              ie = { colspan: 1, rowspan: 1, borders: U, width: B, widthType: 'dxa' };
            R.push(t.nodes.tableCell.create(ie, D));
          }
          F.push(t.nodes.tableRow.create({ height: j, heightRule: Z }, R));
        }
        let G = Array(I).fill(B);
        return t.nodes.table.create({ columnWidths: G, width: P, widthType: 'dxa' }, F);
      }
      function i(M, I) {
        return (y, P) => {
          let { $from: F } = y.selection,
            B = '000000',
            j = y.storedMarks || F.marks();
          for (let N of j)
            if (N.type.name === 'textColor' && N.attrs.rgb) {
              B = N.attrs.rgb;
              break;
            }
          let Z = F.pos;
          for (let N = F.depth; N > 0; N--) {
            let U = F.node(N);
            if (U.type.name === 'paragraph' || U.type.name === 'table') {
              Z = F.after(N);
              break;
            }
          }
          if (P) {
            let N = 9360;
            for (let Ie = F.depth; Ie > 0; Ie--) {
              let me = F.node(Ie);
              if (me.type.name === 'tableCell' || me.type.name === 'tableHeader') {
                let Se = me.attrs.width;
                Se && Se > 0 && (N = Math.max(Se - 216, 360));
                break;
              }
            }
            let U = r(M, I, B, N),
              G = t.nodes.paragraph.create(),
              R = y.doc.resolve(Z).nodeBefore?.type.name === 'table',
              O = R ? [G, U, G] : [U, G],
              D = y.tr.insert(Z, O),
              ie = Z + 1;
            R && (ie += G.nodeSize);
            let pe = ie + 1 + 1;
            (D.setSelection(TextSelection.create(D.doc, pe)), P(D.scrollIntoView()));
          }
          return true;
        };
      }
      function a(M, I) {
        let y = _e(M);
        if (!y.isInTable || y.rowIndex === void 0 || !y.table || y.tablePos === void 0)
          return false;
        if (I) {
          let P = M.tr,
            F = y.table.child(y.rowIndex),
            B = [];
          F.forEach((N) => {
            let U = t.nodes.paragraph.create(),
              G = o(N);
            B.push(t.nodes.tableCell.create(G, U));
          });
          let j = t.nodes.tableRow.create(
              { height: F.attrs.height ?? 360, heightRule: F.attrs.heightRule ?? 'atLeast' },
              B
            ),
            Z = y.tablePos + 1;
          for (let N = 0; N < y.rowIndex; N++) Z += y.table.child(N).nodeSize;
          (P.insert(Z, j), I(P.scrollIntoView()));
        }
        return true;
      }
      function s(M, I) {
        let y = _e(M);
        if (!y.isInTable || y.rowIndex === void 0 || !y.table || y.tablePos === void 0)
          return false;
        if (I) {
          let P = M.tr,
            F = y.table.child(y.rowIndex),
            B = [];
          F.forEach((N) => {
            let U = t.nodes.paragraph.create(),
              G = o(N);
            B.push(t.nodes.tableCell.create(G, U));
          });
          let j = t.nodes.tableRow.create(
              { height: F.attrs.height ?? 360, heightRule: F.attrs.heightRule ?? 'atLeast' },
              B
            ),
            Z = y.tablePos + 1;
          for (let N = 0; N <= y.rowIndex; N++) Z += y.table.child(N).nodeSize;
          (P.insert(Z, j), I(P.scrollIntoView()));
        }
        return true;
      }
      function l(M, I) {
        let y = _e(M);
        if (
          !y.isInTable ||
          y.rowIndex === void 0 ||
          !y.table ||
          y.tablePos === void 0 ||
          (y.rowCount || 0) <= 1
        )
          return false;
        if (I) {
          let P = M.tr,
            F = y.tablePos + 1;
          for (let j = 0; j < y.rowIndex; j++) F += y.table.child(j).nodeSize;
          let B = F + y.table.child(y.rowIndex).nodeSize;
          (P.delete(F, B), I(P.scrollIntoView()));
        }
        return true;
      }
      function u(M, I) {
        let y = _e(M);
        if (!y.isInTable || y.columnIndex === void 0 || !y.table || y.tablePos === void 0)
          return false;
        if (I) {
          let P = M.tr,
            F = (y.columnCount || 1) + 1,
            B = Math.floor(100 / F),
            j = y.tablePos + 1,
            Z = 0;
          y.table.forEach((U) => {
            if (U.type.name === 'tableRow') {
              let G = j + 1,
                xe = 0;
              if (
                (U.forEach((R) => {
                  if (xe === y.columnIndex) {
                    let O = t.nodes.paragraph.create(),
                      D = o(R, { colspan: 1, rowspan: 1 });
                    Z === 0 && ((D.width = B), (D.widthType = 'pct'));
                    let ie = t.nodes.tableCell.create(D, O);
                    P = P.insert(G, ie);
                  }
                  ((G += R.nodeSize), (xe += R.attrs.colspan || 1));
                }),
                xe <= y.columnIndex)
              ) {
                let R = t.nodes.paragraph.create(),
                  O = o(U.child(U.childCount - 1) ?? null, { colspan: 1, rowspan: 1 });
                Z === 0 && ((O.width = B), (O.widthType = 'pct'));
                let D = t.nodes.tableCell.create(O, R);
                P = P.insert(G, D);
              }
              Z++;
            }
            j += U.nodeSize;
          });
          let N = P.doc.nodeAt(y.tablePos);
          if (N && N.type.name === 'table') {
            let U = N.child(0);
            if (U && U.type.name === 'tableRow') {
              let O = y.tablePos + 2;
              U.forEach((D) => {
                ((D.type.name === 'tableCell' || D.type.name === 'tableHeader') &&
                  (P = P.setNodeMarkup(O, void 0, { ...D.attrs, width: B, widthType: 'pct' })),
                  (O += D.nodeSize));
              });
            }
            let G = U?.childCount ?? F,
              xe = N.attrs.width || 9360,
              R = Math.floor(xe / Math.max(1, G));
            P = P.setNodeMarkup(y.tablePos, void 0, { ...N.attrs, columnWidths: Array(G).fill(R) });
          }
          I(P.scrollIntoView());
        }
        return true;
      }
      function d(M, I) {
        let y = _e(M);
        if (!y.isInTable || y.columnIndex === void 0 || !y.table || y.tablePos === void 0)
          return false;
        if (I) {
          let P = M.tr,
            F = (y.columnCount || 1) + 1,
            B = Math.floor(100 / F),
            j = y.tablePos + 1,
            Z = 0;
          y.table.forEach((U) => {
            if (U.type.name === 'tableRow') {
              let G = j + 1,
                xe = 0,
                R = false;
              if (
                (U.forEach((O) => {
                  if (((G += O.nodeSize), (xe += O.attrs.colspan || 1), !R && xe > y.columnIndex)) {
                    let D = t.nodes.paragraph.create(),
                      ie = o(O, { colspan: 1, rowspan: 1 });
                    Z === 0 && ((ie.width = B), (ie.widthType = 'pct'));
                    let ue = t.nodes.tableCell.create(ie, D);
                    ((P = P.insert(G, ue)), (R = true));
                  }
                }),
                !R)
              ) {
                let O = t.nodes.paragraph.create(),
                  D = o(U.child(U.childCount - 1) ?? null, { colspan: 1, rowspan: 1 });
                Z === 0 && ((D.width = B), (D.widthType = 'pct'));
                let ie = t.nodes.tableCell.create(D, O);
                P = P.insert(G, ie);
              }
              Z++;
            }
            j += U.nodeSize;
          });
          let N = P.doc.nodeAt(y.tablePos);
          if (N && N.type.name === 'table') {
            let U = N.child(0);
            if (U && U.type.name === 'tableRow') {
              let O = y.tablePos + 2;
              U.forEach((D) => {
                ((D.type.name === 'tableCell' || D.type.name === 'tableHeader') &&
                  (P = P.setNodeMarkup(O, void 0, { ...D.attrs, width: B, widthType: 'pct' })),
                  (O += D.nodeSize));
              });
            }
            let G = U?.childCount ?? F,
              xe = N.attrs.width || 9360,
              R = Math.floor(xe / Math.max(1, G));
            P = P.setNodeMarkup(y.tablePos, void 0, { ...N.attrs, columnWidths: Array(G).fill(R) });
          }
          I(P.scrollIntoView());
        }
        return true;
      }
      function c(M, I) {
        let y = _e(M);
        if (
          !y.isInTable ||
          y.columnIndex === void 0 ||
          !y.table ||
          y.tablePos === void 0 ||
          (y.columnCount || 0) <= 1
        )
          return false;
        if (I) {
          let P = M.tr,
            F = (y.columnCount || 2) - 1,
            B = Math.floor(100 / F),
            j = [],
            Z = y.tablePos + 1;
          (y.table.forEach((U) => {
            if (U.type.name === 'tableRow') {
              let G = Z + 1,
                xe = 0;
              U.forEach((R) => {
                let O = G,
                  D = G + R.nodeSize,
                  ie = R.attrs.colspan || 1;
                (xe <= y.columnIndex && y.columnIndex < xe + ie && j.push({ start: O, end: D }),
                  (G = D),
                  (xe += ie));
              });
            }
            Z += U.nodeSize;
          }),
            j.reverse().forEach(({ start: U, end: G }) => {
              P = P.delete(U, G);
            }));
          let N = P.doc.nodeAt(y.tablePos);
          if (N && N.type.name === 'table') {
            let U = N.child(0);
            if (U && U.type.name === 'tableRow') {
              let O = y.tablePos + 2;
              U.forEach((D) => {
                ((D.type.name === 'tableCell' || D.type.name === 'tableHeader') &&
                  (P = P.setNodeMarkup(O, void 0, { ...D.attrs, width: B, widthType: 'pct' })),
                  (O += D.nodeSize));
              });
            }
            let G = U?.childCount ?? F,
              xe = N.attrs.width || 9360,
              R = Math.floor(xe / Math.max(1, G));
            P = P.setNodeMarkup(y.tablePos, void 0, { ...N.attrs, columnWidths: Array(G).fill(R) });
          }
          I(P.scrollIntoView());
        }
        return true;
      }
      function p(M, I) {
        let y = _e(M);
        if (!y.isInTable || y.tablePos === void 0 || !y.table) return false;
        if (I) {
          let P = M.tr;
          (P.delete(y.tablePos, y.tablePos + y.table.nodeSize), I(P.scrollIntoView()));
        }
        return true;
      }
      function f(M, I) {
        let y = _e(M);
        if (!y.isInTable || y.tablePos === void 0 || !y.table) return false;
        if (I) {
          let P = y.tablePos + 1,
            F = M.doc.resolve(P),
            B = M.doc.resolve(y.tablePos + y.table.nodeSize - 2),
            j = CellSelection.create(M.doc, F.pos, B.pos);
          I(M.tr.setSelection(j));
        }
        return true;
      }
      function m(M, I) {
        let y = _e(M);
        if (!y.isInTable || y.tablePos === void 0 || !y.table || y.rowIndex === void 0)
          return false;
        if (I) {
          let F = y.tablePos + 1;
          for (let U = 0; U < y.rowIndex; U++) {
            let G = y.table.child(U);
            F += G.nodeSize;
          }
          let B = y.table.child(y.rowIndex),
            j = F + 1,
            Z = F + B.nodeSize - 2,
            N = CellSelection.create(M.doc, j, Z);
          I(M.tr.setSelection(N));
        }
        return true;
      }
      function b(M, I) {
        let y = _e(M);
        if (!y.isInTable || y.tablePos === void 0 || !y.table || y.columnIndex === void 0)
          return false;
        if (I) {
          let P = y.tablePos + 1,
            F = y.table.child(0),
            B = y.table.child(y.table.childCount - 1),
            j = P + 1;
          for (let G = 0; G < y.columnIndex && G < F.childCount; G++) j += F.child(G).nodeSize;
          let Z = P;
          for (let G = 0; G < y.table.childCount - 1; G++) Z += y.table.child(G).nodeSize;
          let N = Z + 1;
          for (let G = 0; G < y.columnIndex && G < B.childCount; G++) N += B.child(G).nodeSize;
          let U = CellSelection.create(M.doc, j, N);
          I(M.tr.setSelection(U));
        }
        return true;
      }
      function g(M) {
        let I = M.selection,
          y = [];
        if (I instanceof CellSelection)
          return (
            I.forEachCell((F, B) => {
              y.push({ pos: B, node: F });
            }),
            y
          );
        let { $from: P } = I;
        for (let F = P.depth; F > 0; F--) {
          let B = P.node(F);
          if (B.type.name === 'tableCell' || B.type.name === 'tableHeader') {
            y.push({ pos: P.before(F), node: B });
            break;
          }
        }
        return y;
      }
      function S(M, I) {
        let y = new Map(),
          P = new Map(),
          F = M.childCount,
          B = 0;
        return (
          M.forEach((j, Z, N) => {
            if (j.type.name !== 'tableRow') return;
            let U = 0;
            (j.forEach((G, xe) => {
              let R = I + Z + xe + 2,
                O = G.attrs.colspan || 1;
              (y.set(R, { rowIdx: N, colIdx: U, colspan: O, pos: R, node: G }),
                P.set(`${N},${U}`, R),
                (U += O));
            }),
              (B = Math.max(B, U)));
          }),
          { cellByPos: y, cellByRC: P, totalRows: F, totalCols: B }
        );
      }
      function w(M, I) {
        return (y, P) => {
          let F = _e(y);
          if (!F.isInTable || F.tablePos === void 0 || !F.table) return false;
          if (P) {
            let B = y.tr,
              j = F.table,
              Z = F.tablePos,
              N = I ?? { style: 'single', size: 4, color: { rgb: '000000' } },
              U = { style: 'none' },
              { cellByPos: G, cellByRC: xe } = S(j, Z),
              R = g(y),
              O = 1 / 0,
              D = -1,
              ie = 1 / 0,
              ue = -1;
            for (let { pos: Se } of R) {
              let fe = G.get(Se);
              fe &&
                ((O = Math.min(O, fe.rowIdx)),
                (D = Math.max(D, fe.rowIdx)),
                (ie = Math.min(ie, fe.colIdx)),
                (ue = Math.max(ue, fe.colIdx + fe.colspan - 1)));
            }
            let pe = new Map(),
              Ie = (Se, fe) => pe.get(Se) ?? { ...fe.attrs },
              me = (Se, fe) => {
                pe.set(Se, fe);
              };
            for (let { pos: Se } of R) {
              let fe = G.get(Se);
              if (!fe) continue;
              let $e = fe.rowIdx === O,
                Qe = fe.rowIdx === D,
                Ge = fe.colIdx === ie,
                tt = fe.colIdx + fe.colspan - 1 === ue,
                We;
              switch (M) {
                case 'all':
                  We = { top: N, bottom: N, left: N, right: N };
                  break;
                case 'outside':
                  We = { top: $e ? N : U, bottom: Qe ? N : U, left: Ge ? N : U, right: tt ? N : U };
                  break;
                case 'inside':
                  We = { top: $e ? U : N, bottom: Qe ? U : N, left: Ge ? U : N, right: tt ? U : N };
                  break;
                case 'none':
                  We = { top: U, bottom: U, left: U, right: U };
                  break;
              }
              let Je = Ie(Se, fe.node),
                it = Je.borders || {};
              if ((me(Se, { ...Je, borders: { ...it, ...We } }), We.top)) {
                let ze = xe.get(`${fe.rowIdx - 1},${fe.colIdx}`);
                if (ze !== void 0) {
                  let ct = G.get(ze),
                    De = Ie(ze, ct.node),
                    Rt = De.borders || {};
                  me(ze, { ...De, borders: { ...Rt, bottom: We.top } });
                }
              }
              if (We.bottom) {
                let ze = xe.get(`${fe.rowIdx + 1},${fe.colIdx}`);
                if (ze !== void 0) {
                  let ct = G.get(ze),
                    De = Ie(ze, ct.node),
                    Rt = De.borders || {};
                  me(ze, { ...De, borders: { ...Rt, top: We.bottom } });
                }
              }
              if (We.left) {
                let ze = xe.get(`${fe.rowIdx},${fe.colIdx - 1}`);
                if (ze !== void 0) {
                  let ct = G.get(ze),
                    De = Ie(ze, ct.node),
                    Rt = De.borders || {};
                  me(ze, { ...De, borders: { ...Rt, right: We.left } });
                }
              }
              if (We.right) {
                let ze = xe.get(`${fe.rowIdx},${fe.colIdx + fe.colspan}`);
                if (ze !== void 0) {
                  let ct = G.get(ze),
                    De = Ie(ze, ct.node),
                    Rt = De.borders || {};
                  me(ze, { ...De, borders: { ...Rt, left: We.right } });
                }
              }
            }
            for (let [Se, fe] of pe) B.setNodeMarkup(B.mapping.map(Se), void 0, fe);
            P(B.scrollIntoView());
          }
          return true;
        };
      }
      function k(M) {
        return (I, y) => {
          let P = _e(I);
          if (!P.isInTable || P.tablePos === void 0 || !P.table) return false;
          if (y) {
            let F = I.tr,
              B = g(I),
              j = M ? M.replace(/^#/, '') : null;
            for (let { pos: Z, node: N } of B)
              F.setNodeMarkup(F.mapping.map(Z), void 0, { ...N.attrs, backgroundColor: j });
            y(F.scrollIntoView());
          }
          return true;
        };
      }
      function E(M, I, y) {
        return (P, F) => {
          let B = _e(P);
          if (!B.isInTable || B.tablePos === void 0 || !B.table) return false;
          if (F) {
            let j = P.tr,
              Z = g(P),
              N = I || { style: 'none' },
              U = { style: 'none' },
              G = ['top', 'bottom', 'left', 'right'],
              { cellByPos: xe, cellByRC: R } = S(B.table, B.tablePos),
              O = new Map(),
              D = (pe, Ie) => O.get(pe) ?? { ...Ie.attrs },
              ie = (pe, Ie) => O.set(pe, Ie),
              ue = {
                top: { adjSide: 'bottom', dRow: -1, dCol: 0 },
                bottom: { adjSide: 'top', dRow: 1, dCol: 0 },
                left: { adjSide: 'right', dRow: 0, dCol: -1 },
                right: { adjSide: 'left', dRow: 0, dCol: 1 },
              };
            for (let { pos: pe, node: Ie } of Z) {
              let me = xe.get(pe),
                Se = D(pe, Ie),
                fe = Se.borders || {},
                $e = M === 'all' ? G : [M],
                Qe = y ? { top: U, bottom: U, left: U, right: U } : { ...fe };
              for (let Ge of $e) Qe[Ge] = N;
              if (me) {
                let Ge = y ? G : $e;
                for (let tt of Ge) {
                  let We = Qe[tt],
                    Je = ue[tt],
                    it = tt === 'right' ? me.colIdx + me.colspan : me.colIdx + Je.dCol,
                    ze = R.get(`${me.rowIdx + Je.dRow},${it}`);
                  if (ze !== void 0) {
                    let ct = xe.get(ze),
                      De = D(ze, ct.node),
                      Rt = De.borders || {};
                    ie(ze, { ...De, borders: { ...Rt, [Je.adjSide]: We } });
                  }
                }
              }
              ie(pe, { ...Se, borders: Qe });
            }
            for (let [pe, Ie] of O) j.setNodeMarkup(j.mapping.map(pe), void 0, Ie);
            F(j.scrollIntoView());
          }
          return true;
        };
      }
      function v(M) {
        return (I, y) => {
          let P = _e(I);
          if (!P.isInTable || P.tablePos === void 0 || !P.table) return false;
          if (y) {
            let F = I.tr,
              B = g(I);
            for (let { pos: j, node: Z } of B)
              F.setNodeMarkup(F.mapping.map(j), void 0, { ...Z.attrs, verticalAlign: M });
            y(F.scrollIntoView());
          }
          return true;
        };
      }
      function _(M) {
        return (I, y) => {
          let P = _e(I);
          if (!P.isInTable || P.tablePos === void 0 || !P.table) return false;
          if (y) {
            let F = I.tr,
              B = g(I);
            for (let { pos: j, node: Z } of B) {
              let U = { ...(Z.attrs.margins || {}), ...M };
              F.setNodeMarkup(F.mapping.map(j), void 0, { ...Z.attrs, margins: U });
            }
            y(F.scrollIntoView());
          }
          return true;
        };
      }
      function V(M) {
        return (I, y) => {
          let P = _e(I);
          if (!P.isInTable || P.tablePos === void 0 || !P.table) return false;
          if (y) {
            let F = I.tr,
              B = g(I);
            for (let { pos: j, node: Z } of B)
              F.setNodeMarkup(F.mapping.map(j), void 0, { ...Z.attrs, textDirection: M });
            y(F.scrollIntoView());
          }
          return true;
        };
      }
      function W() {
        return (M, I) => {
          let y = _e(M);
          if (!y.isInTable || y.tablePos === void 0 || !y.table) return false;
          if (I) {
            let P = M.tr,
              F = g(M);
            for (let { pos: B, node: j } of F)
              P.setNodeMarkup(P.mapping.map(B), void 0, { ...j.attrs, noWrap: !j.attrs.noWrap });
            I(P.scrollIntoView());
          }
          return true;
        };
      }
      function L(M, I) {
        return (y, P) => {
          let F = _e(y);
          if (!F.isInTable || F.tablePos === void 0 || !F.table) return false;
          if (P) {
            let B = y.tr,
              { $from: j } = y.selection;
            for (let Z = j.depth; Z > 0; Z--) {
              let N = j.node(Z);
              if (N.type.name === 'tableRow') {
                let U = j.before(Z),
                  G = { ...N.attrs, height: M, heightRule: M ? I || 'atLeast' : null };
                return (B.setNodeMarkup(U, void 0, G), P(B.scrollIntoView()), true);
              }
            }
          }
          return true;
        };
      }
      function $() {
        return (M, I) => {
          let y = _e(M);
          if (!y.isInTable || y.tablePos === void 0 || !y.table || !y.columnCount) return false;
          if (I) {
            let P = M.tr,
              F = y.table,
              B = y.columnCount,
              j = F.attrs.columnWidths,
              Z = j ? j.reduce((xe, R) => xe + R, 0) : 9360,
              N = Math.floor(Z / B),
              U = y.tablePos + 1;
            F.forEach((xe) => {
              if (xe.type.name === 'tableRow') {
                let R = U + 1;
                xe.forEach((O) => {
                  ((O.type.name === 'tableCell' || O.type.name === 'tableHeader') &&
                    (P = P.setNodeMarkup(R, void 0, {
                      ...O.attrs,
                      width: N,
                      widthType: 'dxa',
                      colwidth: null,
                    })),
                    (R += O.nodeSize));
                });
              }
              U += xe.nodeSize;
            });
            let G = Array(B).fill(N);
            ((P = P.setNodeMarkup(y.tablePos, void 0, { ...F.attrs, columnWidths: G })),
              I(P.scrollIntoView()));
          }
          return true;
        };
      }
      function z() {
        return (M, I) => {
          let y = _e(M);
          if (!y.isInTable || y.tablePos === void 0 || !y.table) return false;
          if (I) {
            let P = M.tr,
              F = y.table,
              B = y.tablePos + 1;
            (F.forEach((j) => {
              if (j.type.name === 'tableRow') {
                let Z = B + 1;
                j.forEach((N) => {
                  ((N.type.name === 'tableCell' || N.type.name === 'tableHeader') &&
                    (P = P.setNodeMarkup(Z, void 0, {
                      ...N.attrs,
                      width: null,
                      widthType: null,
                      colwidth: null,
                    })),
                    (Z += N.nodeSize));
                });
              }
              B += j.nodeSize;
            }),
              (P = P.setNodeMarkup(y.tablePos, void 0, {
                ...F.attrs,
                columnWidths: null,
                width: null,
                widthType: 'auto',
              })),
              I(P.scrollIntoView()));
          }
          return true;
        };
      }
      function K(M) {
        return (I, y) => {
          let P = _e(I);
          if (!P.isInTable || P.tablePos === void 0 || !P.table) return false;
          if (y) {
            let F = I.tr,
              B = P.table,
              j = P.tablePos,
              Z = B.childCount,
              N = M.look ?? { firstRow: true, lastRow: false, noHBand: false },
              U = M.conditionals ?? {},
              G = M.tableBorders;
            F = F.setNodeMarkup(j, void 0, { ...B.attrs, styleId: M.styleId });
            let xe = 0,
              R = j + 1;
            for (let O = 0; O < Z; O++) {
              let D = B.child(O),
                ie = O === 0 && !!N.firstRow,
                ue = O === Z - 1 && !!N.lastRow,
                pe = N.noHBand !== true,
                Ie = D.childCount,
                me;
              ie
                ? (me = 'firstRow')
                : ue
                  ? (me = 'lastRow')
                  : (pe && (me = xe % 2 === 0 ? 'band1Horz' : 'band2Horz'), xe++);
              let Se = R + 1;
              for (let fe = 0; fe < Ie; fe++) {
                let $e = D.child(fe),
                  Qe = F.mapping.map(Se),
                  Ge = me,
                  tt = fe === 0 && !!N.firstCol,
                  We = fe === Ie - 1 && !!N.lastCol;
                ie && tt && U.nwCell
                  ? (Ge = 'nwCell')
                  : ie && We && U.neCell
                    ? (Ge = 'neCell')
                    : ue && tt && U.swCell
                      ? (Ge = 'swCell')
                      : ue && We && U.seCell
                        ? (Ge = 'seCell')
                        : tt
                          ? (Ge = 'firstCol')
                          : We && (Ge = 'lastCol');
                let Je = Ge ? U[Ge] : void 0,
                  it = { ...$e.attrs };
                Je?.backgroundColor
                  ? (it.backgroundColor = Je.backgroundColor)
                  : (it.backgroundColor = null);
                let ze = {},
                  ct = ['top', 'bottom', 'left', 'right'];
                for (let De of ct)
                  Je?.borders && Je.borders[De] !== void 0
                    ? (ze[De] = Je.borders[De])
                    : G &&
                      ((De === 'top' && O > 0) || (De === 'bottom' && O < Z - 1)
                        ? (ze[De] = G.insideH ?? G[De])
                        : (De === 'left' && fe > 0) || (De === 'right' && fe < Ie - 1)
                          ? (ze[De] = G.insideV ?? G[De])
                          : (ze[De] = G[De]));
                (Object.keys(ze).length > 0 ? (it.borders = ze) : (it.borders = null),
                  (F = F.setNodeMarkup(Qe, void 0, it)),
                  (Se += $e.nodeSize));
              }
              R += D.nodeSize;
            }
            y(F.scrollIntoView());
          }
          return true;
        };
      }
      function C(M) {
        return (I, y) => {
          let P = _e(I);
          if (!P.isInTable || P.tablePos === void 0 || !P.table) return false;
          if (y) {
            let F = I.tr,
              B = { ...P.table.attrs };
            ('width' in M && (B.width = M.width),
              'widthType' in M && (B.widthType = M.widthType),
              'justification' in M && (B.justification = M.justification),
              F.setNodeMarkup(P.tablePos, void 0, B),
              y(F.scrollIntoView()));
          }
          return true;
        };
      }
      function A() {
        return (M, I) => {
          let y = _e(M);
          if (!y.isInTable || y.tablePos === void 0 || !y.table) return false;
          if (I) {
            let P = M.tr,
              { $from: F } = M.selection;
            for (let B = F.depth; B > 0; B--) {
              let j = F.node(B);
              if (j.type.name === 'tableRow') {
                let Z = F.before(B),
                  N = { ...j.attrs, isHeader: !j.attrs.isHeader };
                return (P.setNodeMarkup(Z, void 0, N), I(P.scrollIntoView()), true);
              }
            }
          }
          return true;
        };
      }
      function ee(M) {
        return (I, y) => {
          let P = _e(I);
          if (!P.isInTable || P.tablePos === void 0 || !P.table) return false;
          if (y) {
            let F = I.tr,
              B = g(I),
              j = M.replace(/^#/, ''),
              Z = { style: 'single', size: 4 },
              { cellByPos: N, cellByRC: U } = S(P.table, P.tablePos),
              G = new Map(),
              xe = (D, ie) => G.get(D) ?? { ...ie.attrs },
              R = (D, ie) => G.set(D, ie),
              O = {
                top: { adjSide: 'bottom', dRow: -1, dCol: 0 },
                bottom: { adjSide: 'top', dRow: 1, dCol: 0 },
                left: { adjSide: 'right', dRow: 0, dCol: -1 },
                right: { adjSide: 'left', dRow: 0, dCol: 1 },
              };
            for (let { pos: D, node: ie } of B) {
              let ue = N.get(D),
                pe = xe(D, ie),
                Ie = pe.borders || {},
                me = {};
              for (let Se of ['top', 'bottom', 'left', 'right']) {
                let fe = { ...Z, ...Ie[Se], color: { rgb: j } };
                if (((me[Se] = fe), ue)) {
                  let $e = O[Se],
                    Qe = Se === 'right' ? ue.colIdx + ue.colspan : ue.colIdx + $e.dCol,
                    Ge = U.get(`${ue.rowIdx + $e.dRow},${Qe}`);
                  if (Ge !== void 0) {
                    let tt = N.get(Ge),
                      We = xe(Ge, tt.node),
                      Je = We.borders || {};
                    R(Ge, { ...We, borders: { ...Je, [$e.adjSide]: fe } });
                  }
                }
              }
              R(D, { ...pe, borders: { ...Ie, ...me } });
            }
            for (let [D, ie] of G) F.setNodeMarkup(F.mapping.map(D), void 0, ie);
            y(F.scrollIntoView());
          }
          return true;
        };
      }
      function he(M) {
        return (I, y) => {
          let P = _e(I);
          if (!P.isInTable || P.tablePos === void 0 || !P.table) return false;
          if (y) {
            let F = I.tr,
              B = g(I),
              j = { style: 'single', color: { rgb: '000000' } },
              { cellByPos: Z, cellByRC: N } = S(P.table, P.tablePos),
              U = new Map(),
              G = (O, D) => U.get(O) ?? { ...D.attrs },
              xe = (O, D) => U.set(O, D),
              R = {
                top: { adjSide: 'bottom', dRow: -1, dCol: 0 },
                bottom: { adjSide: 'top', dRow: 1, dCol: 0 },
                left: { adjSide: 'right', dRow: 0, dCol: -1 },
                right: { adjSide: 'left', dRow: 0, dCol: 1 },
              };
            for (let { pos: O, node: D } of B) {
              let ie = Z.get(O),
                ue = G(O, D),
                pe = ue.borders || {},
                Ie = {};
              for (let me of ['top', 'bottom', 'left', 'right']) {
                let Se = { ...j, ...pe[me], size: M };
                if (((Ie[me] = Se), ie)) {
                  let fe = R[me],
                    $e = me === 'right' ? ie.colIdx + ie.colspan : ie.colIdx + fe.dCol,
                    Qe = N.get(`${ie.rowIdx + fe.dRow},${$e}`);
                  if (Qe !== void 0) {
                    let Ge = Z.get(Qe),
                      tt = G(Qe, Ge.node),
                      We = tt.borders || {};
                    xe(Qe, { ...tt, borders: { ...We, [fe.adjSide]: Se } });
                  }
                }
              }
              xe(O, { ...ue, borders: { ...pe, ...Ie } });
            }
            for (let [O, D] of U) F.setNodeMarkup(F.mapping.map(O), void 0, D);
            y(F.scrollIntoView());
          }
          return true;
        };
      }
      function de() {
        return (M, I) => {
          let y = M.selection;
          if (!('$anchorCell' in y && typeof y.forEachCell == 'function')) return false;
          let F = _e(M);
          if (!F.isInTable || F.tablePos === void 0 || !F.table) return false;
          let B = 0;
          F.table.descendants((N) => {
            (N.type.name === 'tableCell' || N.type.name === 'tableHeader') && (B += 1);
          });
          let j = 0;
          if (
            (y.forEachCell(() => {
              j += 1;
            }),
            !(B > 0 && j >= B))
          )
            return false;
          if (I) {
            let N = M.tr.delete(F.tablePos, F.tablePos + F.table.nodeSize);
            I(N.scrollIntoView());
          }
          return true;
        };
      }
      function we() {
        return (M) => {
          let { $from: I, empty: y } = M.selection;
          if (!y) return false;
          let P = I.parent;
          if (P.type.name !== 'paragraph' || P.textContent.length > 0) return false;
          let F = I.depth;
          if (F < 1) return false;
          let B = I.node(F - 1),
            j = I.index(F - 1),
            Z = j > 0 ? B.child(j - 1) : null,
            N = j + 1 < B.childCount ? B.child(j + 1) : null,
            U = Z?.type.name === 'table',
            G = N?.type.name === 'table';
          return !!(U || G);
        };
      }
      let Ce = new PluginKey('activeCell'),
        Te = new Plugin({
          key: Ce,
          props: {
            decorations(M) {
              let { selection: I } = M;
              if (I instanceof CellSelection) return DecorationSet.empty;
              let { $from: y } = I;
              for (let P = y.depth; P > 0; P--) {
                let F = y.node(P);
                if (F.type.name === 'tableCell' || F.type.name === 'tableHeader') {
                  let B = y.before(P);
                  return DecorationSet.create(M.doc, [
                    Decoration.node(B, B + F.nodeSize, { class: 'activeCell' }),
                  ]);
                }
              }
              return DecorationSet.empty;
            },
          },
        });
      return {
        plugins: [
          columnResizing({ handleWidth: 5, cellMinWidth: 25, lastColumnResizable: true }),
          tableEditing(),
          Te,
        ],
        keyboardShortcuts: { Backspace: n(de(), we()), Delete: n(de(), we()) },
        commands: {
          insertTable: (M, I) => i(M, I),
          addRowAbove: () => a,
          addRowBelow: () => s,
          deleteRow: () => l,
          addColumnLeft: () => u,
          addColumnRight: () => d,
          deleteColumn: () => c,
          deleteTable: () => p,
          selectTable: () => f,
          selectRow: () => m,
          selectColumn: () => b,
          mergeCells: () => mergeCells,
          splitCell: () => splitCell,
          setCellBorder: (M, I, y) => E(M, I, y),
          setTableBorders: (M, I) => w(M, I),
          setCellVerticalAlign: (M) => v(M),
          setCellMargins: (M) => _(M),
          setCellTextDirection: (M) => V(M),
          toggleNoWrap: () => W(),
          setRowHeight: (M, I) => L(M, I),
          toggleHeaderRow: () => A(),
          distributeColumns: () => $(),
          autoFitContents: () => z(),
          setTableProperties: (M) => C(M),
          applyTableStyle: (M) => K(M),
          setCellFillColor: (M) => k(M),
          setTableBorderColor: (M) => ee(M),
          setTableBorderWidth: (M) => he(M),
          removeTableBorders: () => w('none'),
          setAllTableBorders: (M) => w('all', M),
          setOutsideTableBorders: (M) => w('outside', M),
          setInsideTableBorders: (M) => w('inside', M),
        },
      };
    },
  });
function Ic() {
  return [yf(), xf(), Sf(), kf(), wf()];
}
function Da(...e) {
  return (t, n, o) => {
    for (let r of e) if (r(t, n, o)) return true;
    return false;
  };
}
function Fc(e) {
  return (t, n) => {
    let { $from: o, $to: r } = t.selection,
      i = o.parent;
    if (i.type.name !== 'paragraph') return false;
    let s = i.attrs.numPr?.numId === e;
    if (!n) return true;
    let l = t.tr,
      u = new Set();
    return (
      t.doc.nodesBetween(o.pos, r.pos, (d, c) => {
        if (d.type.name === 'paragraph' && !u.has(c))
          if ((u.add(c), s))
            l = l.setNodeMarkup(c, void 0, {
              ...d.attrs,
              numPr: null,
              listIsBullet: null,
              listNumFmt: null,
              listMarker: null,
            });
          else {
            let p = e === 1;
            l = l.setNodeMarkup(c, void 0, {
              ...d.attrs,
              numPr: { numId: e, ilvl: d.attrs.numPr?.ilvl || 0 },
              listIsBullet: p,
              listNumFmt: p ? null : 'decimal',
              listMarker: null,
            });
          }
      }),
      n(l.scrollIntoView()),
      true
    );
  };
}
var Cf = (e, t) => Fc(1)(e, t),
  Tf = (e, t) => Fc(2)(e, t),
  vf = (e, t) => {
    let { $from: n } = e.selection,
      o = n.parent;
    if (o.type.name !== 'paragraph' || !o.attrs.numPr) return false;
    let r = o.attrs.numPr.ilvl || 0;
    if (r >= 8) return false;
    if (!t) return true;
    let i = n.before(n.depth);
    return (
      t(
        e.tr
          .setNodeMarkup(i, void 0, {
            ...o.attrs,
            numPr: { ...o.attrs.numPr, ilvl: r + 1 },
            indentLeft: null,
            indentFirstLine: null,
            hangingIndent: null,
          })
          .scrollIntoView()
      ),
      true
    );
  },
  Rf = (e, t) => {
    let { $from: n } = e.selection,
      o = n.parent;
    if (o.type.name !== 'paragraph' || !o.attrs.numPr) return false;
    let r = o.attrs.numPr.ilvl || 0;
    if (!t) return true;
    let i = n.before(n.depth);
    return (
      r <= 0
        ? t(
            e.tr
              .setNodeMarkup(i, void 0, {
                ...o.attrs,
                numPr: null,
                listIsBullet: null,
                listNumFmt: null,
                listMarker: null,
                indentLeft: null,
                indentFirstLine: null,
                hangingIndent: null,
              })
              .scrollIntoView()
          )
        : t(
            e.tr
              .setNodeMarkup(i, void 0, {
                ...o.attrs,
                numPr: { ...o.attrs.numPr, ilvl: r - 1 },
                indentLeft: null,
                indentFirstLine: null,
                hangingIndent: null,
              })
              .scrollIntoView()
          ),
      true
    );
  },
  Pf = (e, t) => {
    let { $from: n, $to: o } = e.selection;
    if (!t) return true;
    let r = e.tr,
      i = new Set();
    return (
      e.doc.nodesBetween(n.pos, o.pos, (a, s) => {
        a.type.name === 'paragraph' &&
          a.attrs.numPr &&
          !i.has(s) &&
          (i.add(s),
          (r = r.setNodeMarkup(s, void 0, {
            ...a.attrs,
            numPr: null,
            listIsBullet: null,
            listNumFmt: null,
            listMarker: null,
          })));
      }),
      t(r.scrollIntoView()),
      true
    );
  };
function Mf() {
  return (e, t) => {
    let { $from: n, empty: o } = e.selection;
    if (!o) return false;
    let r = n.parent;
    if (r.type.name !== 'paragraph' || !r.attrs.numPr || r.textContent.length > 0) return false;
    if (t) {
      let a = e.tr.setNodeMarkup(n.before(), void 0, {
        ...r.attrs,
        numPr: null,
        listIsBullet: null,
        listNumFmt: null,
        listMarker: null,
      });
      t(a);
    }
    return true;
  };
}
function Ef() {
  return (e, t) => {
    let { $from: n, empty: o } = e.selection;
    if (!o) return false;
    let r = n.parent;
    if (r.type.name !== 'paragraph' || !r.attrs.numPr) return false;
    if (t) {
      let { tr: a } = e,
        s = n.pos;
      (a.split(s, 1, [{ type: e.schema.nodes.paragraph, attrs: { ...r.attrs } }]),
        t(a.scrollIntoView()));
    }
    return true;
  };
}
function If() {
  return (e, t) => {
    let { $from: n, empty: o } = e.selection;
    if (!o || n.parentOffset !== 0) return false;
    let r = n.parent;
    if (r.type.name !== 'paragraph' || !r.attrs.numPr) return false;
    if (t) {
      let a = e.tr.setNodeMarkup(n.before(), void 0, {
        ...r.attrs,
        numPr: null,
        listIsBullet: null,
        listNumFmt: null,
        listMarker: null,
      });
      t(a);
    }
    return true;
  };
}
function Ff() {
  return (e, t) => {
    let { $from: n } = e.selection,
      o = n.parent;
    if (o.type.name !== 'paragraph') return false;
    let r = o.attrs.numPr;
    if (!r) return false;
    let i = r.ilvl ?? 0;
    if (i >= 8) return false;
    if (t) {
      let a = e.tr.setNodeMarkup(n.before(), void 0, {
        ...o.attrs,
        numPr: { ...r, ilvl: i + 1 },
        indentLeft: null,
        indentFirstLine: null,
        hangingIndent: null,
      });
      t(a);
    }
    return true;
  };
}
function Lf() {
  return (e, t) => {
    let { $from: n } = e.selection,
      o = n.parent;
    if (o.type.name !== 'paragraph') return false;
    let r = o.attrs.numPr;
    if (!r) return false;
    let i = r.ilvl ?? 0;
    if (i <= 0) {
      if (t) {
        let a = e.tr.setNodeMarkup(n.before(), void 0, {
          ...o.attrs,
          numPr: null,
          listIsBullet: null,
          listNumFmt: null,
          listMarker: null,
          indentLeft: null,
          indentFirstLine: null,
          hangingIndent: null,
        });
        t(a);
      }
      return true;
    }
    if (t) {
      let a = e.tr.setNodeMarkup(n.before(), void 0, {
        ...o.attrs,
        numPr: { ...r, ilvl: i - 1 },
        indentLeft: null,
        indentFirstLine: null,
        hangingIndent: null,
      });
      t(a);
    }
    return true;
  };
}
function Bf() {
  return (e, t) => {
    let { schema: n } = e,
      o = n.nodes.tab;
    if (!o) return false;
    if (t) {
      let r = e.tr.replaceSelectionWith(o.create());
      t(r.scrollIntoView());
    }
    return true;
  };
}
var Lc = Mt({
  name: 'list',
  priority: xn.High,
  onSchemaReady() {
    return {
      commands: {
        toggleBulletList: () => Cf,
        toggleNumberedList: () => Tf,
        increaseListLevel: () => vf,
        decreaseListLevel: () => Rf,
        removeList: () => Pf,
      },
      keyboardShortcuts: {
        Tab: Da(Mc(), Ff(), Bf()),
        'Shift-Tab': Da(Ec(), Lf()),
        'Shift-Enter': () => false,
        Enter: Da(Mf(), Ef()),
        Backspace: If(),
      },
    };
  },
});
function Ac(...e) {
  return (t, n, o) => {
    for (let r of e) if (r(t, n, o)) return true;
    return false;
  };
}
var $f = (e, t) => {
    let { $cursor: n } = e.selection;
    if (!n || n.parentOffset !== 0 || n.parent.type.name !== 'paragraph') return false;
    let o = n.parent.attrs,
      r = o.indentFirstLine != null && o.indentFirstLine > 0,
      i = !!o.hangingIndent,
      a = o.indentLeft != null && o.indentLeft > 0;
    if (!r && !i && !a) return false;
    if (t) {
      let s = n.before(),
        l = e.tr.setNodeMarkup(s, void 0, {
          ...o,
          indentFirstLine: null,
          hangingIndent: null,
          indentLeft: null,
        });
      t(l.scrollIntoView());
    }
    return true;
  },
  Wf = [
    'defaultTextFormatting',
    'styleId',
    'lineSpacing',
    'lineSpacingRule',
    'spaceAfter',
    'spaceBefore',
    'contextualSpacing',
  ],
  Dc = new Set(['fontFamily', 'fontSize', 'textColor']),
  _f = (e, t, n) => {
    let { $from: o } = e.selection,
      r = o.parent.type.name === 'paragraph' ? o.parent : null,
      a = (e.storedMarks || o.marks()).filter((u) => Dc.has(u.type.name)),
      s = null;
    if (
      !splitBlock(
        e,
        t
          ? (u) => {
              s = u;
            }
          : void 0,
        n
      )
    )
      return false;
    if (t && s !== null) {
      let u = s,
        { $from: d } = u.selection,
        c = d.parent;
      if (c.type.name === 'paragraph') {
        let p = { ...c.attrs },
          f = false;
        if (r)
          for (let m of Wf) {
            let b = r.attrs[m];
            b != null && p[m] == null && ((p[m] = b), (f = true));
          }
        if (
          (p.borders && ((p.borders = null), (f = true)),
          f && u.setNodeMarkup(d.before(), void 0, p),
          c.textContent.length === 0)
        ) {
          let m = a;
          if (m.length === 0 && r) {
            let b = r.attrs.defaultTextFormatting;
            b && (m = La(b, e.schema).filter((S) => Dc.has(S.type.name)));
          }
          if (m.length > 0) {
            let b = { ...(p.defaultTextFormatting ?? {}) },
              g = false;
            for (let S of m)
              if (
                (S.type.name === 'fontSize' &&
                  S.attrs.size !== b.fontSize &&
                  ((b.fontSize = S.attrs.size), (g = true)),
                S.type.name === 'fontFamily')
              ) {
                let w = S.attrs.ascii;
                w &&
                  (!b.fontFamily || b.fontFamily.ascii !== w) &&
                  ((b.fontFamily = { ...b.fontFamily, ascii: w, hAnsi: S.attrs.hAnsi }),
                  (g = true));
              }
            (g && u.setNodeMarkup(d.before(), void 0, { ...p, defaultTextFormatting: b }),
              u.setStoredMarks(m));
          }
        }
      }
      t(u.scrollIntoView());
    }
    return true;
  },
  Hc = Mt({
    name: 'baseKeymap',
    priority: xn.Low,
    onSchemaReady(e) {
      return {
        keyboardShortcuts: {
          ...baseKeymap,
          Enter: _f,
          Backspace: Ac(deleteSelection, $f, joinBackward),
          Delete: Ac(deleteSelection, joinForward),
          'Mod-a': selectAll,
          Escape: selectParentNode,
        },
      };
    },
  });
var xr = new PluginKey('selectionTracker');
function so(e) {
  let { selection: t, doc: n } = e,
    { from: o, to: r, empty: i } = t,
    a = n.resolve(o),
    s = 0,
    l = 0;
  n.forEach((E, v, _) => {
    if (v > r) return false;
    (v <= o && (s = _), v <= r && (l = _));
  });
  let u = Uf(e),
    d = a.parent,
    c = {};
  d.type.name === 'paragraph' &&
    (d.attrs.alignment && (c.alignment = d.attrs.alignment),
    d.attrs.lineSpacing &&
      ((c.lineSpacing = d.attrs.lineSpacing), (c.lineSpacingRule = d.attrs.lineSpacingRule)),
    d.attrs.indentLeft && (c.indentLeft = d.attrs.indentLeft),
    d.attrs.indentRight && (c.indentRight = d.attrs.indentRight),
    d.attrs.indentFirstLine && (c.indentFirstLine = d.attrs.indentFirstLine),
    d.attrs.hangingIndent && (c.hangingIndent = d.attrs.hangingIndent),
    d.attrs.tabs && (c.tabs = d.attrs.tabs),
    d.attrs.numPr && (c.numPr = d.attrs.numPr));
  let p = d.attrs?.numPr,
    f = !!p?.numId,
    m = p?.numId === 1 ? 'bullet' : p?.numId ? 'numbered' : void 0,
    b = p?.ilvl,
    g = e.storedMarks || (i ? a.marks() : []),
    S = [],
    w = false,
    k = false;
  for (let E of g)
    (E.type.name === 'comment' && E.attrs.commentId && S.push(E.attrs.commentId),
      E.type.name === 'insertion' && (w = true),
      E.type.name === 'deletion' && (k = true));
  return {
    hasSelection: !i,
    isMultiParagraph: s !== l,
    textFormatting: u,
    paragraphFormatting: c,
    startParagraphIndex: s,
    endParagraphIndex: l,
    inList: f,
    listType: m,
    listLevel: b,
    activeCommentIds: S,
    inInsertion: w,
    inDeletion: k,
  };
}
function Uf(e) {
  let { selection: t } = e,
    { empty: n, $from: o } = t,
    r = e.storedMarks || (n ? o.marks() : []),
    i = {};
  for (let a of r)
    switch (a.type.name) {
      case 'bold':
        i.bold = true;
        break;
      case 'italic':
        i.italic = true;
        break;
      case 'underline':
        i.underline = { style: a.attrs.style || 'single', color: a.attrs.color };
        break;
      case 'strike':
        a.attrs.double ? (i.doubleStrike = true) : (i.strike = true);
        break;
      case 'textColor':
        i.color = {
          rgb: a.attrs.rgb,
          themeColor: a.attrs.themeColor,
          themeTint: a.attrs.themeTint,
          themeShade: a.attrs.themeShade,
        };
        break;
      case 'highlight':
        i.highlight = a.attrs.color;
        break;
      case 'fontSize':
        i.fontSize = a.attrs.size;
        break;
      case 'fontFamily':
        i.fontFamily = {
          ascii: a.attrs.ascii,
          hAnsi: a.attrs.hAnsi,
          asciiTheme: a.attrs.asciiTheme,
        };
        break;
      case 'superscript':
        i.vertAlign = 'superscript';
        break;
      case 'subscript':
        i.vertAlign = 'subscript';
        break;
    }
  return i;
}
function Sr(e) {
  return new Plugin({
    key: xr,
    state: {
      init(t, n) {
        return so(n);
      },
      apply(t, n, o, r) {
        if (!t.selectionSet && !t.docChanged) return n;
        let i = so(r);
        return (e && !Kf(n, i) && setTimeout(() => e(i), 0), i);
      },
    },
    view() {
      return {
        update(t, n) {
          if (!e || (t.state.selection.eq(n.selection) && t.state.doc.eq(n.doc))) return;
          let o = xr.getState(t.state);
          o && e(o);
        },
      };
    },
  });
}
function Gf(e, t) {
  if (e === t) return true;
  if (!e || !t || e.length !== t.length) return false;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return false;
  return true;
}
function Kf(e, t) {
  return (
    e.hasSelection === t.hasSelection &&
    e.isMultiParagraph === t.isMultiParagraph &&
    e.startParagraphIndex === t.startParagraphIndex &&
    e.endParagraphIndex === t.endParagraphIndex &&
    e.inList === t.inList &&
    e.listType === t.listType &&
    e.listLevel === t.listLevel &&
    e.inInsertion === t.inInsertion &&
    e.inDeletion === t.inDeletion &&
    Gf(e.activeCommentIds, t.activeCommentIds) &&
    JSON.stringify(e.textFormatting) === JSON.stringify(t.textFormatting) &&
    JSON.stringify(e.paragraphFormatting) === JSON.stringify(t.paragraphFormatting)
  );
}
var Nc = Mt({
  name: 'selectionTracker',
  defaultOptions: {},
  onSchemaReady(e, t) {
    return {
      plugins: [Sr(t.onSelectionChange)],
      commands: { extractSelectionContext: () => (n, o) => (so(n), true) },
    };
  },
});
var Xf = new PluginKey('imageDrag'),
  Oc = Mt({
    name: 'imageDrag',
    onSchemaReady(e) {
      return {
        plugins: [
          new Plugin({
            key: Xf,
            props: {
              handleDOMEvents: {
                dragstart(n, o) {
                  let { selection: r } = n.state;
                  if (r instanceof NodeSelection && r.node.type.name === 'image') {
                    n.dom.classList.add('pm-image-dragging');
                    let i = o;
                    if (i.dataTransfer) {
                      i.dataTransfer.effectAllowed = 'move';
                      let a = document.createElement('div');
                      ((a.style.cssText =
                        'position: fixed; left: -9999px; top: -9999px; opacity: 0.6; pointer-events: none; border: 2px dashed var(--doc-primary, #2563eb); border-radius: 4px; background: rgba(37, 99, 235, 0.08);'),
                        (a.style.width = `${r.node.attrs.width || 100}px`),
                        (a.style.height = `${r.node.attrs.height || 100}px`),
                        document.body.appendChild(a),
                        i.dataTransfer.setDragImage(a, 0, 0),
                        requestAnimationFrame(() => {
                          document.body.removeChild(a);
                        }));
                    }
                  }
                  return false;
                },
                dragend(n) {
                  return (
                    n.dom.classList.remove('pm-image-dragging'),
                    n.dom.querySelectorAll('.pm-drop-indicator').forEach((r) => r.remove()),
                    false
                  );
                },
                dragover(n, o) {
                  let { selection: r } = n.state;
                  if (r instanceof NodeSelection && r.node.type.name === 'image') {
                    let i = o;
                    (i.preventDefault(), i.dataTransfer && (i.dataTransfer.dropEffect = 'move'));
                  }
                  return false;
                },
                drop(n) {
                  return (
                    n.dom.classList.remove('pm-image-dragging'),
                    n.dom.querySelectorAll('.pm-drop-indicator').forEach((r) => r.remove()),
                    false
                  );
                },
              },
            },
          }),
        ],
      };
    },
  });
var $c = Mt({
  name: 'dropCursor',
  onSchemaReady() {
    return { plugins: [dropCursor({ color: 'var(--doc-primary, #4285f4)', width: 2 })] };
  },
});
function lo(e = {}) {
  let t = new Set(e.disable || []),
    n = [];
  function o(r, i) {
    t.has(r) || n.push(i);
  }
  return (
    o('doc', Fl()),
    o('text', Ll()),
    o('paragraph', Nl()),
    o('history', Ol({ depth: e.historyDepth, newGroupDelay: e.historyNewGroupDelay })),
    o('bold', Wl()),
    o('italic', Vl()),
    o('underline', Gl()),
    o('strike', Kl()),
    o('textColor', Yl()),
    o('highlight', ql()),
    o('fontSize', Xl()),
    o('fontFamily', Zl()),
    o('superscript', Jl()),
    o('subscript', Ql()),
    o('hyperlink', ec()),
    o('allCaps', tc()),
    o('smallCaps', nc()),
    o('footnoteRef', oc()),
    o('characterSpacing', rc()),
    o('emboss', lc()),
    o('imprint', cc()),
    o('textShadow', dc()),
    o('emphasisMark', uc()),
    o('textOutline', pc()),
    o('comment', ic()),
    o('insertion', ac()),
    o('deletion', sc()),
    o('hardBreak', fc()),
    o('tab', mc()),
    o('image', gc()),
    o('textBox', hc()),
    o('shape', bc()),
    o('imageDrag', Oc()),
    o('dropCursor', $c()),
    o('horizontalRule', yc()),
    o('pageBreak', xc()),
    o('field', Sc()),
    o('sdt', kc()),
    o('math', wc()),
    t.has('table') || n.push(...Ic()),
    o('list', Lc()),
    o('baseKeymap', Hc()),
    o('selectionTracker', Nc({ onSelectionChange: e.onSelectionChange })),
    n
  );
}
var Sn = class {
  constructor(t) {
    d$1(this, 'extensions');
    d$1(this, 'schema', null);
    d$1(this, 'plugins', []);
    d$1(this, 'commands', {});
    this.extensions = [...t].sort((n, o) => n.config.priority - o.config.priority);
  }
  buildSchema() {
    let t = {},
      n = {};
    for (let o of this.extensions)
      o.type === 'node'
        ? (t[o.config.schemaNodeName] = o.config.nodeSpec)
        : o.type === 'mark' && (n[o.config.schemaMarkName] = o.config.markSpec);
    this.schema = new Schema({ nodes: t, marks: n });
  }
  initializeRuntime() {
    if (!this.schema)
      throw new Error('ExtensionManager: buildSchema() must be called before initializeRuntime()');
    let t = { schema: this.schema },
      n = [],
      o = [],
      r = {};
    for (let i of this.extensions) {
      let a = i.onSchemaReady(t);
      (a.commands && Object.assign(r, a.commands),
        a.keyboardShortcuts && n.push(a.keyboardShortcuts),
        a.plugins && o.push(...a.plugins));
    }
    ((this.plugins = [...o, ...n.map((i) => keymap(i))]), (this.commands = r));
  }
  getSchema() {
    if (!this.schema) throw new Error('ExtensionManager: buildSchema() must be called first');
    return this.schema;
  }
  getPlugins() {
    return this.plugins;
  }
  getCommands() {
    return this.commands;
  }
  getCommand(t) {
    return this.commands[t];
  }
  destroy() {
    ((this.plugins = []), (this.commands = {}));
  }
};
var kr = new Sn(lo());
kr.buildSchema();
kr.initializeRuntime();
var _n = kr,
  ye = kr.getSchema();
var Lo = class {
  constructor(t) {
    d$1(this, 'stylesById');
    d$1(this, 'docDefaults');
    d$1(this, 'defaultParagraphStyle');
    if (((this.stylesById = new Map()), (this.docDefaults = t?.docDefaults), t?.styles))
      for (let n of t.styles) n.styleId && this.stylesById.set(n.styleId, n);
    this.defaultParagraphStyle = this.findDefaultStyle('paragraph');
  }
  getStyle(t) {
    return this.stylesById.get(t);
  }
  getParagraphStyles() {
    let t = [];
    for (let n of this.stylesById.values())
      n.type === 'paragraph' && !n.hidden && !n.semiHidden && t.push(n);
    return t.sort((n, o) => {
      let r = n.uiPriority ?? 99,
        i = o.uiPriority ?? 99;
      return r !== i ? r - i : (n.name ?? n.styleId).localeCompare(o.name ?? o.styleId);
    });
  }
  resolveParagraphStyle(t) {
    let n = {};
    if (
      (this.docDefaults?.pPr && (n.paragraphFormatting = { ...this.docDefaults.pPr }),
      this.docDefaults?.rPr && (n.runFormatting = { ...this.docDefaults.rPr }),
      !t)
    )
      return (
        this.defaultParagraphStyle && this.mergeStyleIntoResult(n, this.defaultParagraphStyle),
        n
      );
    let o = this.stylesById.get(t);
    return o
      ? (this.mergeStyleIntoResult(n, o), n)
      : (this.defaultParagraphStyle && this.mergeStyleIntoResult(n, this.defaultParagraphStyle), n);
  }
  getTableStyles() {
    let t = [];
    for (let n of this.stylesById.values())
      n.type === 'table' && !n.hidden && !n.semiHidden && t.push(n);
    return t.sort((n, o) => {
      let r = n.uiPriority ?? 99,
        i = o.uiPriority ?? 99;
      return r !== i ? r - i : (n.name ?? n.styleId).localeCompare(o.name ?? o.styleId);
    });
  }
  resolveRunStyle(t) {
    let n = {};
    if ((this.docDefaults?.rPr && (n = { ...this.docDefaults.rPr }), !t))
      return Object.keys(n).length > 0 ? n : void 0;
    let o = this.stylesById.get(t);
    if (!o?.rPr) return Object.keys(n).length > 0 ? n : void 0;
    let r = this.mergeTextFormatting(n, o.rPr);
    return r && Object.keys(r).length > 0 ? r : void 0;
  }
  getRunStyleOwnProperties(t) {
    if (!t) return;
    let n = this.stylesById.get(t);
    if (n?.rPr) return Object.keys(n.rPr).length > 0 ? { ...n.rPr } : void 0;
  }
  getDocDefaults() {
    return this.docDefaults;
  }
  getDefaultParagraphStyle() {
    return this.defaultParagraphStyle;
  }
  hasStyle(t) {
    return this.stylesById.has(t);
  }
  findDefaultStyle(t) {
    for (let n of this.stylesById.values()) if (n.type === t && n.default) return n;
    if (t === 'paragraph') return this.stylesById.get('Normal');
  }
  mergeStyleIntoResult(t, n) {
    (n.pPr && (t.paragraphFormatting = this.mergeParagraphFormatting(t.paragraphFormatting, n.pPr)),
      n.rPr && (t.runFormatting = this.mergeTextFormatting(t.runFormatting, n.rPr)));
  }
  mergeParagraphFormatting(t, n) {
    if (!n) return t;
    if (!t) return n ? { ...n } : void 0;
    let o = { ...t };
    for (let r of Object.keys(n)) {
      let i = n[r];
      if (i !== void 0)
        if (r === 'runProperties')
          o.runProperties = this.mergeTextFormatting(o.runProperties, n.runProperties);
        else if (r === 'borders' || r === 'numPr' || r === 'frame') {
          let a = o[r],
            s = i;
          o[r] = { ...(a || {}), ...(s || {}) };
        } else r === 'tabs' && Array.isArray(i) ? (o.tabs = [...i]) : (o[r] = i);
    }
    return o;
  }
  mergeTextFormatting(t, n) {
    if (!n) return t;
    if (!t) return n ? { ...n } : void 0;
    let o = { ...t };
    for (let r of Object.keys(n)) {
      let i = n[r];
      i !== void 0 &&
        (typeof i == 'object' && i !== null ? (o[r] = { ...(o[r] || {}), ...i }) : (o[r] = i));
    }
    return o;
  }
};
function kn(e) {
  return new Lo(e);
}
function Tr(e, t) {
  let n = e.package.document.content,
    o = [],
    r = t?.styles ? kn(t.styles) : null;
  for (let i of n)
    if (i.type === 'paragraph') {
      let a = Wc(i),
        s = vr(i, r);
      o.push(s);
      for (let l of a) o.push(_c(l, r));
      um(i) && o.push(ye.node('pageBreak'));
    } else if (i.type === 'table') {
      let a = Ha(i, r);
      o.push(a);
    }
  return (o.length === 0 && o.push(ye.node('paragraph', {}, [])), ye.node('doc', null, o));
}
function vr(e, t, n, o) {
  let r = tm(e, t),
    i = [],
    a,
    s = new Set(),
    l;
  t && (l = t.resolveParagraphStyle(e.formatting?.styleId).runFormatting);
  let u = on(l, o);
  for (let d of e.content) {
    if (d.type === 'commentRangeStart') s.add(d.id);
    else if (d.type === 'commentRangeEnd') s.delete(d.id);
    else if (d.type === 'run') {
      let c = Na(d, u, t);
      (s.size > 0 && (c = em(c, s)), i.push(...c));
    } else if (d.type === 'hyperlink') {
      let c = za(d, u, t);
      i.push(...c);
    } else if (d.type === 'simpleField' || d.type === 'complexField') {
      let c = im(d, u);
      c && i.push(c);
    } else if (d.type === 'inlineSdt') {
      let c = sm(d, u, t);
      c && i.push(c);
    } else if (d.type === 'insertion') {
      let c = wr(d, 'insertion', u, t);
      i.push(...c);
    } else if (d.type === 'deletion') {
      let c = wr(d, 'deletion', u, t);
      i.push(...c);
    } else if (d.type === 'moveFrom') {
      let c = wr(d, 'deletion', u, t);
      i.push(...c);
    } else if (d.type === 'moveTo') {
      let c = wr(d, 'insertion', u, t);
      i.push(...c);
    } else if (d.type === 'mathEquation') {
      let c = am(d);
      c && i.push(c);
    }
    d.type === 'bookmarkStart' && (a || (a = []), a.push({ id: d.id, name: d.name }));
  }
  return (a && (r.bookmarks = a), ye.node('paragraph', r, i));
}
function em(e, t) {
  if (t.size === 0) return e;
  let n = [...t][0],
    o = ye.marks.comment.create({ commentId: n });
  return e.map((r) => (r.isText ? r.mark(o.addToSet(r.marks)) : r));
}
function wr(e, t, n, o) {
  let r = [];
  for (let a of e.content)
    a.type === 'run' ? r.push(...Na(a, n, o)) : a.type === 'hyperlink' && r.push(...za(a, n, o));
  let i = ye.marks[t].create({
    revisionId: e.info.id,
    author: e.info.author,
    date: e.info.date ?? null,
  });
  return r.map((a) => (a.isText ? a.mark(i.addToSet(a.marks)) : a));
}
function tm(e, t) {
  let n = e.formatting,
    o = n?.styleId,
    r = {
      paraId: e.paraId ?? void 0,
      textId: e.textId ?? void 0,
      styleId: o,
      numPr: n?.numPr,
      listNumFmt: e.listRendering?.numFmt,
      listIsBullet: e.listRendering?.isBullet,
      listMarker: e.listRendering?.marker,
      _originalFormatting: n || void 0,
    };
  if (t) {
    let i = t.resolveParagraphStyle(o),
      a = i.paragraphFormatting,
      s = i.runFormatting;
    ((r.alignment = n?.alignment ?? a?.alignment),
      (r.spaceBefore = n?.spaceBefore ?? a?.spaceBefore),
      (r.spaceAfter = n?.spaceAfter ?? a?.spaceAfter),
      (r.lineSpacing = n?.lineSpacing ?? a?.lineSpacing),
      (r.lineSpacingRule = n?.lineSpacingRule ?? a?.lineSpacingRule),
      (r.indentLeft = n?.indentLeft ?? a?.indentLeft),
      (r.indentRight = n?.indentRight ?? a?.indentRight),
      (r.indentFirstLine = n?.indentFirstLine ?? a?.indentFirstLine),
      (r.hangingIndent = n?.hangingIndent ?? a?.hangingIndent),
      (r.borders = n?.borders ?? a?.borders),
      (r.shading = n?.shading ?? a?.shading),
      (r.tabs = n?.tabs ?? a?.tabs),
      (r.pageBreakBefore = n?.pageBreakBefore ?? a?.pageBreakBefore),
      (r.keepNext = n?.keepNext ?? a?.keepNext),
      (r.keepLines = n?.keepLines ?? a?.keepLines),
      (r.contextualSpacing = n?.contextualSpacing ?? a?.contextualSpacing),
      (r.outlineLevel = n?.outlineLevel ?? a?.outlineLevel));
    let l = Cr(n?.runProperties, t);
    if (((r.defaultTextFormatting = on(s, l)), e.sectionProperties?.sectionStart)) {
      let u = e.sectionProperties.sectionStart;
      (u === 'nextPage' || u === 'continuous' || u === 'oddPage' || u === 'evenPage') &&
        (r.sectionBreakType = u);
    }
    !n?.numPr && a?.numPr && a.numPr.numId !== 0 && (r.numPr = a.numPr);
  } else
    ((r.alignment = n?.alignment),
      (r.spaceBefore = n?.spaceBefore),
      (r.spaceAfter = n?.spaceAfter),
      (r.lineSpacing = n?.lineSpacing),
      (r.lineSpacingRule = n?.lineSpacingRule),
      (r.indentLeft = n?.indentLeft),
      (r.indentRight = n?.indentRight),
      (r.indentFirstLine = n?.indentFirstLine),
      (r.hangingIndent = n?.hangingIndent),
      (r.borders = n?.borders),
      (r.shading = n?.shading),
      (r.tabs = n?.tabs),
      (r.pageBreakBefore = n?.pageBreakBefore),
      (r.keepNext = n?.keepNext),
      (r.keepLines = n?.keepLines),
      (r.outlineLevel = n?.outlineLevel),
      (r.defaultTextFormatting = Cr(n?.runProperties, t)));
  if (e.sectionProperties?.sectionStart) {
    let i = e.sectionProperties.sectionStart;
    (i === 'nextPage' || i === 'continuous' || i === 'oddPage' || i === 'evenPage') &&
      (r.sectionBreakType = i);
  }
  return r;
}
function Ht(e, t, n) {
  if (!e || !t) return;
  let o = e.getStyle(t);
  if (!o?.tblStylePr) return;
  let r = o.tblStylePr.find((l) => l.type === n);
  if (!r) return;
  let i = Cr(r.pPr?.runProperties, e),
    a = Cr(r.rPr, e),
    s = on(i, a);
  return { tcPr: r.tcPr, rPr: s };
}
function nn(e, t) {
  if (!e && !t) return;
  if (!e) return t;
  if (!t) return e;
  let n = {},
    o = e.tcPr,
    r = t.tcPr;
  if (o || r) {
    let i = { ...(o ?? {}), ...(r ?? {}) };
    ((o?.borders || r?.borders) && (i.borders = { ...(o?.borders ?? {}), ...(r?.borders ?? {}) }),
      (o?.shading || r?.shading) && (i.shading = { ...(o?.shading ?? {}), ...(r?.shading ?? {}) }),
      (o?.margins || r?.margins) && (i.margins = { ...(o?.margins ?? {}), ...(r?.margins ?? {}) }),
      (n.tcPr = i));
  }
  return ((n.rPr = on(e.rPr, t.rPr)), n);
}
function Cr(e, t) {
  if (!e) return;
  if (!e.styleId || !t) return e;
  let n = t.resolveRunStyle(e.styleId);
  return on(n, e);
}
function nm(e) {
  let t = new Map(),
    n = e.rows.length,
    o = new Map();
  for (let r = 0; r < n; r++) {
    let i = e.rows[r],
      a = 0;
    for (let s = 0; s < i.cells.length; s++) {
      let l = i.cells[s],
        u = l.formatting?.gridSpan ?? 1,
        d = l.formatting?.vMerge,
        c = `${r}-${a}`;
      if (d === 'restart') (o.set(a, r), t.set(c, { rowSpan: 1, skip: false }));
      else if (d === 'continue') {
        let p = o.get(a);
        if (p !== void 0) {
          let f = `${p}-${a}`,
            m = t.get(f);
          m && m.rowSpan++;
        }
        t.set(c, { rowSpan: 1, skip: true });
      } else (o.delete(a), t.set(c, { rowSpan: 1, skip: false }));
      a += u;
    }
  }
  return t;
}
function Ha(e, t) {
  let n = nm(e),
    o = e.columnWidths,
    r = o?.reduce((k, E) => k + E, 0) ?? 0,
    i = e.formatting?.styleId,
    a = e.formatting?.look,
    s = i ? t?.getStyle(i) : void 0,
    l = e.formatting?.borders ?? s?.tblPr?.borders,
    u = e.formatting?.cellMargins ?? s?.tblPr?.cellMargins ?? void 0,
    d = u
      ? { top: u.top?.value, bottom: u.bottom?.value, left: u.left?.value, right: u.right?.value }
      : void 0,
    c = {
      styleId: e.formatting?.styleId,
      width: e.formatting?.width?.value,
      widthType: e.formatting?.width?.type,
      justification: e.formatting?.justification,
      columnWidths: o,
      floating: e.formatting?.floating,
      cellMargins: d,
      look: e.formatting?.look,
      _originalFormatting: e.formatting || void 0,
    },
    p = {
      wholeTable: Ht(t, i, 'wholeTable'),
      firstRow: Ht(t, i, 'firstRow'),
      lastRow: Ht(t, i, 'lastRow'),
      firstCol: Ht(t, i, 'firstCol'),
      lastCol: Ht(t, i, 'lastCol'),
      band1Horz: Ht(t, i, 'band1Horz'),
      band2Horz: Ht(t, i, 'band2Horz'),
      band1Vert: Ht(t, i, 'band1Vert'),
      band2Vert: Ht(t, i, 'band2Vert'),
      nwCell: Ht(t, i, 'nwCell'),
      neCell: Ht(t, i, 'neCell'),
      swCell: Ht(t, i, 'swCell'),
      seCell: Ht(t, i, 'seCell'),
    },
    f = a?.noHBand !== true,
    m = a?.noVBand !== true,
    b = 0,
    g = e.rows.length,
    S = o?.length ?? e.rows[0]?.cells.reduce((k, E) => k + (E.formatting?.gridSpan ?? 1), 0) ?? 0,
    w = e.rows.map((k, E) => {
      let v = E === 0 && !!a?.firstRow,
        _ = E === g - 1 && !!a?.lastRow,
        V = f && !v && !_ ? (b % 2 === 0 ? p.band1Horz : p.band2Horz) : void 0;
      return (f && !v && !_ && b++, om(k, t, v, o, r, p, V, m, a, l, E, g, S, n, d));
    });
  return ye.node('table', c, w);
}
function om(e, t, n, o, r, i, a, s, l, u, d, c, p, f, m) {
  let b = {
      height: e.formatting?.height?.value,
      heightRule: e.formatting?.heightRule,
      isHeader: n || e.formatting?.header,
      _originalFormatting: e.formatting || void 0,
    },
    g = e.cells.length,
    S = d === 0,
    w = d === (c ?? 1) - 1,
    k = e.formatting?.conditionalFormat,
    E = k?.firstRow ?? S,
    v = k?.lastRow ?? w,
    _ = p ?? g,
    V = 0,
    W = [];
  for (let L = 0; L < e.cells.length; L++) {
    let $ = e.cells[L],
      z = $.formatting?.gridSpan ?? 1,
      K = `${d ?? 0}-${V}`,
      C = f?.get(K),
      A = C?.skip ?? false,
      ee = C?.rowSpan ?? 1,
      he;
    if (o && r && r > 0) {
      let j = 0;
      for (let Z = 0; Z < z && V + Z < o.length; Z++) j += o[V + Z];
      he = Math.round((j / r) * 100);
    }
    if (((V += z), A)) continue;
    let de = V - z === 0,
      we = V === _,
      Ce = $.formatting?.conditionalFormat,
      Te = Ce?.firstRow ?? E,
      M = Ce?.lastRow ?? v,
      I = Ce?.firstColumn ?? de,
      y = Ce?.lastColumn ?? we,
      P;
    if (s) {
      let j = l?.firstColumn ? 1 : 0,
        Z = V - z - j;
      Z >= 0 &&
        !(l?.lastColumn && y) &&
        !(l?.firstColumn && I) &&
        (P = Z % 2 === 0 ? i?.band1Vert : i?.band2Vert);
    }
    Ce?.oddVBand ? (P = i?.band1Vert) : Ce?.evenVBand && (P = i?.band2Vert);
    let F = a;
    (k?.oddHBand ? (F = i?.band1Horz) : k?.evenHBand && (F = i?.band2Horz),
      Ce?.oddHBand ? (F = i?.band1Horz) : Ce?.evenHBand && (F = i?.band2Horz));
    let B = i?.wholeTable;
    ((B = nn(B, F)),
      (B = nn(B, P)),
      Te && (l?.firstRow || k?.firstRow || Ce?.firstRow) && (B = nn(B, i?.firstRow)),
      M && (l?.lastRow || k?.lastRow || Ce?.lastRow) && (B = nn(B, i?.lastRow)),
      I && (l?.firstColumn || k?.firstColumn || Ce?.firstColumn) && (B = nn(B, i?.firstCol)),
      y && (l?.lastColumn || k?.lastColumn || Ce?.lastColumn) && (B = nn(B, i?.lastCol)),
      Te &&
        I &&
        (l?.firstRow || k?.firstRow || Ce?.firstRow) &&
        (l?.firstColumn || k?.firstColumn || Ce?.firstColumn) &&
        (B = nn(B, i?.nwCell)),
      Te &&
        y &&
        (l?.firstRow || k?.firstRow || Ce?.firstRow) &&
        (l?.lastColumn || k?.lastColumn || Ce?.lastColumn) &&
        (B = nn(B, i?.neCell)),
      M &&
        I &&
        (l?.lastRow || k?.lastRow || Ce?.lastRow) &&
        (l?.firstColumn || k?.firstColumn || Ce?.firstColumn) &&
        (B = nn(B, i?.swCell)),
      M &&
        y &&
        (l?.lastRow || k?.lastRow || Ce?.lastRow) &&
        (l?.lastColumn || k?.lastColumn || Ce?.lastColumn) &&
        (B = nn(B, i?.seCell)),
      W.push(rm($, t, n, he, B, u, S, w, de, we, ee, m)));
  }
  return ye.node('tableRow', b, W);
}
function rm(e, t, n, o, r, i, a, s, l, u, d, c) {
  let p = e.formatting,
    f = d ?? 1,
    m = p?.width?.value,
    b = p?.width?.type;
  m === void 0 && o !== void 0 && ((m = o), (b = 'pct'));
  let g = p?.shading?.fill?.rgb ?? r?.tcPr?.shading?.fill?.rgb,
    S = i
      ? {
          top: a ? i.top : i.insideH,
          bottom: s ? i.bottom : i.insideH,
          left: l ? i.left : i.insideV,
          right: u ? i.right : i.insideV,
        }
      : void 0,
    w = r?.tcPr?.borders,
    k = p?.borders,
    E = S || w || k ? { ...(S ?? {}), ...(w ?? {}), ...(k ?? {}) } : void 0,
    v = {
      colspan: p?.gridSpan ?? 1,
      rowspan: f,
      width: m,
      widthType: b,
      verticalAlign: p?.verticalAlign,
      backgroundColor: g,
      textDirection: p?.textDirection,
      noWrap: p?.noWrap,
      borders: E,
      margins: p?.margins
        ? {
            top: p.margins.top?.value,
            bottom: p.margins.bottom?.value,
            left: p.margins.left?.value,
            right: p.margins.right?.value,
          }
        : r?.tcPr?.margins
          ? {
              top: r.tcPr.margins.top?.value,
              bottom: r.tcPr.margins.bottom?.value,
              left: r.tcPr.margins.left?.value,
              right: r.tcPr.margins.right?.value,
            }
          : c,
      _originalFormatting: p || void 0,
    },
    _ = [];
  for (let W of e.content)
    W.type === 'paragraph'
      ? _.push(vr(W, t, void 0, r?.rPr))
      : W.type === 'table' && _.push(Ha(W, t));
  _.length === 0 && _.push(ye.node('paragraph', {}, []));
  let V = n ? 'tableHeader' : 'tableCell';
  return ye.node(V, v, _);
}
function im(e, t) {
  let n = '',
    o,
    r = e.type === 'simpleField' ? e.content : e.fieldResult;
  if (r) {
    for (let s of r)
      if (s.type === 'run') {
        for (let l of s.content) l.type === 'text' && (n += l.text);
        !o && s.formatting && (o = s.formatting);
      }
  }
  let i = on(t, o),
    a = Oa(i);
  return ye.node(
    'field',
    {
      fieldType: e.fieldType,
      instruction: e.instruction,
      displayText: n,
      fieldKind: e.type === 'simpleField' ? 'simple' : 'complex',
      fldLock: e.fldLock ?? false,
      dirty: e.dirty ?? false,
    },
    void 0,
    a
  );
}
function am(e) {
  return ye.node('math', { display: e.display, ommlXml: e.ommlXml, plainText: e.plainText || '' });
}
function sm(e, t, n) {
  let o = e.properties,
    r = [];
  for (let i of e.content)
    if (i.type === 'run') {
      let a = Na(i, t, n);
      r.push(...a);
    } else if (i.type === 'hyperlink') {
      let a = za(i, t, n);
      r.push(...a);
    }
  return ye.node(
    'sdt',
    {
      sdtType: o.sdtType,
      alias: o.alias ?? null,
      tag: o.tag ?? null,
      lock: o.lock ?? null,
      placeholder: o.placeholder ?? null,
      showingPlaceholder: o.showingPlaceholder ?? false,
      dateFormat: o.dateFormat ?? null,
      listItems: o.listItems ? JSON.stringify(o.listItems) : null,
      checked: o.checked ?? null,
    },
    r.length > 0 ? r : void 0
  );
}
function Na(e, t, n) {
  let o = [],
    r = e.formatting?.styleId ? n?.getRunStyleOwnProperties(e.formatting.styleId) : void 0,
    i = on(on(t, r), e.formatting),
    a = Oa(i);
  for (let s of e.content) {
    let l = lm(s, a);
    o.push(...l);
  }
  return o;
}
function on(e, t) {
  if (!t && !e) return;
  if (!t) return e;
  if (!e) return t;
  let n = { ...e };
  if (
    (t.bold !== void 0 && (n.bold = t.bold),
    t.italic !== void 0 && (n.italic = t.italic),
    t.underline !== void 0 && (n.underline = t.underline),
    t.strike !== void 0 && (n.strike = t.strike),
    t.doubleStrike !== void 0 && (n.doubleStrike = t.doubleStrike),
    t.color !== void 0)
  ) {
    let o = t.color.rgb || t.color.themeColor || t.color.themeTint || t.color.themeShade;
    (!t.color.auto || o) && (n.color = t.color);
  }
  return (
    t.highlight !== void 0 && (n.highlight = t.highlight),
    t.fontSize !== void 0 && (n.fontSize = t.fontSize),
    t.fontFamily !== void 0 && (n.fontFamily = t.fontFamily),
    t.vertAlign !== void 0 && (n.vertAlign = t.vertAlign),
    t.allCaps !== void 0 && (n.allCaps = t.allCaps),
    t.smallCaps !== void 0 && (n.smallCaps = t.smallCaps),
    n
  );
}
function lm(e, t) {
  switch (e.type) {
    case 'text':
      return e.text ? [ye.text(e.text, t)] : [];
    case 'break':
      return e.breakType === 'textWrapping' || !e.breakType ? [ye.node('hardBreak')] : [];
    case 'tab':
      return [ye.node('tab')];
    case 'drawing':
      return e.image ? [cm(e.image)] : [];
    case 'shape': {
      let r = e.shape;
      return r.textBody && r.textBody.content.length > 0 ? [] : [dm(r)];
    }
    case 'footnoteRef':
      let n = ye.mark('footnoteRef', { id: e.id.toString(), noteType: 'footnote' });
      return [ye.text(e.id.toString(), [...t, n])];
    case 'endnoteRef':
      let o = ye.mark('footnoteRef', { id: e.id.toString(), noteType: 'endnote' });
      return [ye.text(e.id.toString(), [...t, o])];
    default:
      return [];
  }
}
function cm(e) {
  let t = e.size?.width ? c$2(e.size.width) : void 0,
    n = e.size?.height ? c$2(e.size.height) : void 0,
    o = e.wrap.type,
    r = e.wrap.wrapText,
    i = e.position?.horizontal?.alignment,
    a;
  o === 'inline' || o === 'topAndBottom'
    ? (a = 'none')
    : o === 'square' || o === 'tight' || o === 'through'
      ? r === 'left'
        ? (a = 'right')
        : r === 'right' || i === 'left'
          ? (a = 'left')
          : i === 'right'
            ? (a = 'right')
            : (a = 'none')
      : (a = 'none');
  let s = 'inline';
  o === 'inline' ? (s = 'inline') : a && a !== 'none' ? (s = 'float') : (s = 'block');
  let l;
  if (e.transform) {
    let S = [];
    (e.transform.rotation && S.push(`rotate(${e.transform.rotation}deg)`),
      e.transform.flipH && S.push('scaleX(-1)'),
      e.transform.flipV && S.push('scaleY(-1)'),
      S.length > 0 && (l = S.join(' ')));
  }
  let u = e.wrap.distT ? c$2(e.wrap.distT) : void 0,
    d = e.wrap.distB ? c$2(e.wrap.distB) : void 0,
    c = e.wrap.distL ? c$2(e.wrap.distL) : void 0,
    p = e.wrap.distR ? c$2(e.wrap.distR) : void 0,
    f;
  e.position &&
    (f = {
      horizontal: e.position.horizontal
        ? {
            relativeTo: e.position.horizontal.relativeTo,
            posOffset: e.position.horizontal.posOffset,
            align: e.position.horizontal.alignment,
          }
        : void 0,
      vertical: e.position.vertical
        ? {
            relativeTo: e.position.vertical.relativeTo,
            posOffset: e.position.vertical.posOffset,
            align: e.position.vertical.alignment,
          }
        : void 0,
    });
  let m, b, g;
  if (e.outline && e.outline.width) {
    ((m = Math.round((e.outline.width / 914400) * 96 * 100) / 100),
      e.outline.color?.rgb && (b = `#${e.outline.color.rgb}`));
    let S = {
      solid: 'solid',
      dot: 'dotted',
      dash: 'dashed',
      lgDash: 'dashed',
      dashDot: 'dashed',
      lgDashDot: 'dashed',
      lgDashDotDot: 'dashed',
      sysDot: 'dotted',
      sysDash: 'dashed',
      sysDashDot: 'dashed',
      sysDashDotDot: 'dashed',
    };
    g = (e.outline.style && S[e.outline.style]) || 'solid';
  }
  return ye.node('image', {
    src: e.src || '',
    alt: e.alt,
    title: e.title,
    width: t,
    height: n,
    rId: e.rId,
    wrapType: o,
    displayMode: s,
    cssFloat: a,
    transform: l,
    distTop: u,
    distBottom: d,
    distLeft: c,
    distRight: p,
    position: f,
    borderWidth: m,
    borderColor: b,
    borderStyle: g,
    wrapText: r,
  });
}
function za(e, t, n) {
  let o = [],
    r = e.href || (e.anchor ? `#${e.anchor}` : ''),
    i = ye.mark('hyperlink', { href: r, tooltip: e.tooltip, rId: e.rId });
  for (let a of e.children)
    if (a.type === 'run') {
      let s = a.formatting?.styleId ? n?.resolveRunStyle(a.formatting.styleId) : void 0,
        l = on(on(t, s), a.formatting),
        d = [...Oa(l), i];
      for (let c of a.content) c.type === 'text' && c.text && o.push(ye.text(c.text, d));
    }
  return o;
}
function Oa(e) {
  if (!e) return [];
  let t = [];
  return (
    e.bold && t.push(ye.mark('bold')),
    e.italic && t.push(ye.mark('italic')),
    e.underline &&
      e.underline.style !== 'none' &&
      t.push(ye.mark('underline', { style: e.underline.style, color: e.underline.color })),
    (e.strike || e.doubleStrike) && t.push(ye.mark('strike', { double: e.doubleStrike || false })),
    e.color &&
      !e.color.auto &&
      t.push(
        ye.mark('textColor', {
          rgb: e.color.rgb,
          themeColor: e.color.themeColor,
          themeTint: e.color.themeTint,
          themeShade: e.color.themeShade,
        })
      ),
    e.highlight && e.highlight !== 'none' && t.push(ye.mark('highlight', { color: e.highlight })),
    e.fontSize && t.push(ye.mark('fontSize', { size: e.fontSize })),
    e.fontFamily &&
      t.push(
        ye.mark('fontFamily', {
          ascii: e.fontFamily.ascii,
          hAnsi: e.fontFamily.hAnsi,
          asciiTheme: e.fontFamily.asciiTheme,
        })
      ),
    e.vertAlign === 'superscript'
      ? t.push(ye.mark('superscript'))
      : e.vertAlign === 'subscript' && t.push(ye.mark('subscript')),
    e.allCaps && t.push(ye.mark('allCaps')),
    e.smallCaps && t.push(ye.mark('smallCaps')),
    (e.spacing != null || e.position != null || e.scale != null || e.kerning != null) &&
      t.push(
        ye.mark('characterSpacing', {
          spacing: e.spacing ?? null,
          position: e.position ?? null,
          scale: e.scale ?? null,
          kerning: e.kerning ?? null,
        })
      ),
    e.emboss && t.push(ye.mark('emboss')),
    e.imprint && t.push(ye.mark('imprint')),
    e.shadow && t.push(ye.mark('textShadow')),
    e.emphasisMark &&
      e.emphasisMark !== 'none' &&
      t.push(ye.mark('emphasisMark', { type: e.emphasisMark })),
    e.outline && t.push(ye.mark('textOutline')),
    t
  );
}
function dm(e) {
  let t = e.size?.width ? c$2(e.size.width) : 100,
    n = e.size?.height ? c$2(e.size.height) : 80,
    o,
    r = 'solid',
    i,
    a,
    s;
  if (
    e.fill &&
    ((r = e.fill.type),
    e.fill.color?.rgb && (o = `#${e.fill.color.rgb}`),
    e.fill.type === 'gradient' && e.fill.gradient)
  ) {
    let p = e.fill.gradient;
    ((i = p.type),
      (a = p.angle),
      (s = JSON.stringify(
        p.stops.map((f) => ({
          position: f.position,
          color: f.color.rgb ? `#${f.color.rgb}` : '#000000',
        }))
      )));
  }
  let l, u, d;
  e.outline &&
    (e.outline.width && (l = Math.round((e.outline.width / 914400) * 96 * 100) / 100),
    e.outline.color?.rgb && (u = `#${e.outline.color.rgb}`),
    (d = e.outline.style || 'solid'));
  let c;
  if (e.transform) {
    let p = [];
    (e.transform.rotation && p.push(`rotate(${e.transform.rotation}deg)`),
      e.transform.flipH && p.push('scaleX(-1)'),
      e.transform.flipV && p.push('scaleY(-1)'),
      p.length > 0 && (c = p.join(' ')));
  }
  return ye.node('shape', {
    shapeType: e.shapeType || 'rect',
    shapeId: e.id,
    width: t,
    height: n,
    fillColor: o,
    fillType: r,
    gradientType: i,
    gradientAngle: a,
    gradientStops: s,
    outlineWidth: l,
    outlineColor: u,
    outlineStyle: d,
    transform: c,
  });
}
function Wc(e) {
  let t = [];
  for (let n of e.content)
    if (n.type === 'run') {
      for (let o of n.content)
        if (o.type === 'shape' && 'shape' in o) {
          let r = o.shape;
          r.textBody &&
            r.textBody.content.length > 0 &&
            t.push({
              type: 'textBox',
              id: r.id,
              size: r.size,
              position: r.position,
              wrap: r.wrap,
              fill: r.fill,
              outline: r.outline,
              content: r.textBody.content,
              margins: r.textBody.margins,
            });
        }
    }
  return t;
}
function _c(e, t) {
  let n = e.size?.width ? c$2(e.size.width) : 200,
    o = e.size?.height ? c$2(e.size.height) : void 0,
    r;
  e.fill?.color?.rgb && (r = `#${e.fill.color.rgb}`);
  let i, a, s;
  e.outline &&
    e.outline.width &&
    ((i = Math.round((e.outline.width / 914400) * 96 * 100) / 100),
    e.outline.color?.rgb && (a = `#${e.outline.color.rgb}`),
    (s = e.outline.style || 'solid'));
  let l = e.margins?.top != null ? c$2(e.margins.top) : 4,
    u = e.margins?.bottom != null ? c$2(e.margins.bottom) : 4,
    d = e.margins?.left != null ? c$2(e.margins.left) : 7,
    c = e.margins?.right != null ? c$2(e.margins.right) : 7,
    p = [];
  for (let f of e.content) p.push(vr(f, t));
  return (
    p.length === 0 && p.push(ye.node('paragraph', {}, [])),
    ye.node(
      'textBox',
      {
        width: n,
        height: o,
        textBoxId: e.id,
        fillColor: r,
        outlineWidth: i,
        outlineColor: a,
        outlineStyle: s,
        marginTop: l,
        marginBottom: u,
        marginLeft: d,
        marginRight: c,
      },
      p
    )
  );
}
function $a(e, t) {
  let n = [],
    o = t?.styles ? kn(t.styles) : null;
  for (let r of e)
    if (r.type === 'paragraph') {
      let i = Wc(r);
      n.push(vr(r, o));
      for (let a of i) n.push(_c(a, o));
    } else r.type === 'table' && n.push(Ha(r, o));
  return (n.length === 0 && n.push(ye.node('paragraph', {}, [])), ye.node('doc', null, n));
}
function um(e) {
  for (let t of e.content)
    if (t.type === 'run') {
      for (let n of t.content) if (n.type === 'break' && n.breakType === 'page') return true;
    }
  return false;
}
function Rr() {
  return ye.node('doc', null, [ye.node('paragraph', {}, [])]);
}
function Pr(e, t) {
  let o = {
    content: jc(e),
    finalSectionProperties: t?.package.document.finalSectionProperties,
    sections: t?.package.document.sections,
    comments: t?.package.document.comments,
  };
  return t ? { ...t, package: { ...t.package, document: o } } : { package: { document: o } };
}
function jc(e) {
  let t = [],
    n = Gc(e);
  return (
    e.forEach((o) => {
      o.type.name === 'paragraph'
        ? t.push(Wa(o, n))
        : o.type.name === 'table'
          ? t.push(Yc(o, n))
          : o.type.name === 'textBox'
            ? t.push(Lm(o))
            : o.type.name === 'pageBreak' && t.push(pm());
    }),
    t
  );
}
function pm() {
  return {
    type: 'paragraph',
    content: [{ type: 'run', content: [{ type: 'break', breakType: 'page' }] }],
  };
}
function Wa(e, t) {
  let n = e.attrs,
    o = fm(Uc(e, t), e),
    r = n.bookmarks;
  if (r && r.length > 0) {
    let a = r.map((l) => ({ type: 'bookmarkStart', id: l.id, name: l.name })),
      s = r.map((l) => ({ type: 'bookmarkEnd', id: l.id }));
    o = [...a, ...o, ...s];
  }
  let i = {
    type: 'paragraph',
    paraId: n.paraId || void 0,
    textId: n.textId || void 0,
    formatting: mm(n),
    content: o,
  };
  return (n.sectionBreakType && (i.sectionProperties = { sectionStart: n.sectionBreakType }), i);
}
function fm(e, t) {
  let n = new Set();
  if (
    (t.forEach((a) => {
      for (let s of a.marks) s.type.name === 'comment' && n.add(s.attrs.commentId);
    }),
    n.size === 0)
  )
    return e;
  let o = [],
    r = new Set(),
    i = 0;
  t.forEach((a) => {
    let s = new Set();
    for (let l of a.marks) l.type.name === 'comment' && s.add(l.attrs.commentId);
    for (let l of [...r]) s.has(l) || (o.push({ type: 'commentRangeEnd', id: l }), r.delete(l));
    for (let l of s) r.has(l) || (o.push({ type: 'commentRangeStart', id: l }), r.add(l));
    (i < e.length && o.push(e[i]), i++);
  });
  for (let a of r) o.push({ type: 'commentRangeEnd', id: a });
  return o;
}
function mm(e) {
  if (e._originalFormatting) {
    let n = e._originalFormatting,
      o = { ...n };
    return (
      e.alignment !== (n.alignment || void 0) && (o.alignment = e.alignment || void 0),
      e.numPr !== n.numPr &&
        JSON.stringify(e.numPr) !== JSON.stringify(n.numPr) &&
        (o.numPr = e.numPr || void 0),
      e.styleId !== (n.styleId || void 0) && (o.styleId = e.styleId || void 0),
      e.pageBreakBefore !== (n.pageBreakBefore || void 0) &&
        (o.pageBreakBefore = e.pageBreakBefore || void 0),
      o
    );
  }
  if (
    e.alignment ||
    e.spaceBefore ||
    e.spaceAfter ||
    e.lineSpacing ||
    e.indentLeft ||
    e.indentRight ||
    e.indentFirstLine ||
    e.numPr ||
    e.styleId ||
    e.borders ||
    e.shading ||
    e.tabs ||
    e.outlineLevel != null ||
    e.contextualSpacing
  )
    return {
      alignment: e.alignment || void 0,
      spaceBefore: e.spaceBefore || void 0,
      spaceAfter: e.spaceAfter || void 0,
      lineSpacing: e.lineSpacing || void 0,
      lineSpacingRule: e.lineSpacingRule || void 0,
      indentLeft: e.indentLeft || void 0,
      indentRight: e.indentRight || void 0,
      indentFirstLine: e.indentFirstLine || void 0,
      hangingIndent: e.hangingIndent || void 0,
      numPr: e.numPr || void 0,
      styleId: e.styleId || void 0,
      borders: e.borders || void 0,
      shading: e.shading || void 0,
      tabs: e.tabs || void 0,
      outlineLevel: e.outlineLevel ?? void 0,
      contextualSpacing: e.contextualSpacing || void 0,
    };
}
function Uc(e, t) {
  let n = [],
    o = t ?? Gc(e),
    r = null,
    i = null,
    a = null;
  return (
    e.forEach((s) => {
      let l = s.marks.find((p) => p.type.name === 'footnoteRef');
      if (l) {
        (r && (n.push(r), (r = null), (i = null)), a && (n.push(a), (a = null)));
        let f = {
          type: l.attrs.noteType === 'endnote' ? 'endnoteRef' : 'footnoteRef',
          id: parseInt(l.attrs.id, 10) || 0,
        };
        n.push({ type: 'run', content: [f] });
        return;
      }
      let u = s.marks.find((p) => p.type.name === 'insertion'),
        d = s.marks.find((p) => p.type.name === 'deletion');
      if (u || d) {
        (r && (n.push(r), (r = null), (i = null)), a && (n.push(a), (a = null)));
        let p = u || d,
          f = s.marks.filter((v) => v.type.name !== 'insertion' && v.type.name !== 'deletion'),
          m = _a(f),
          b = {
            type: 'run',
            content: s.isText && s.text ? [{ type: 'text', text: s.text }] : [],
            ...(Object.keys(m).length > 0 ? { formatting: m } : {}),
          },
          g = {
            id: p.attrs.revisionId,
            author: p.attrs.author || 'Unknown',
            date: p.attrs.date || void 0,
          },
          S = g.id,
          w = (o.insertionById.get(S) ?? 0) > 0,
          k = (o.deletionById.get(S) ?? 0) > 0,
          E = w && k;
        u
          ? E
            ? n.push({ type: 'moveTo', info: g, content: [b] })
            : n.push({ type: 'insertion', info: g, content: [b] })
          : E
            ? n.push({ type: 'moveFrom', info: g, content: [b] })
            : n.push({ type: 'deletion', info: g, content: [b] });
        return;
      }
      let c = s.marks.find((p) => p.type.name === 'hyperlink');
      if (c) {
        let p = gm(c),
          f = a?.href || (a?.anchor ? `#${a.anchor}` : '');
        ((a && f === p) || (r && (n.push(r), (r = null), (i = null)), a && n.push(a), (a = bm(c))),
          Vc(a, s));
        return;
      }
      if ((a && (n.push(a), (a = null)), s.isText)) {
        let p = hm(s.marks);
        r && i === p
          ? ym(r, s.text || '')
          : (r && n.push(r), (r = Kc(s.text || '', s.marks)), (i = p));
      } else
        s.type.name === 'hardBreak'
          ? (r && (n.push(r), (r = null), (i = null)), n.push(xm()))
          : s.type.name === 'image'
            ? (r && (n.push(r), (r = null), (i = null)), n.push(Tm(s)))
            : s.type.name === 'shape'
              ? (r && (n.push(r), (r = null), (i = null)), n.push(vm(s)))
              : s.type.name === 'tab'
                ? (r && (n.push(r), (r = null), (i = null)), n.push(Sm()))
                : s.type.name === 'field'
                  ? (r && (n.push(r), (r = null), (i = null)), n.push(km(s, s.marks)))
                  : s.type.name === 'sdt'
                    ? (r && (n.push(r), (r = null), (i = null)), n.push(Cm(s)))
                    : s.type.name === 'math' &&
                      (r && (n.push(r), (r = null), (i = null)), n.push(wm(s)));
    }),
    r && n.push(r),
    a && n.push(a),
    n
  );
}
function Gc(e) {
  let t = new Map(),
    n = new Map();
  return (
    e.descendants((o) => {
      let r = o.marks.find((a) => a.type.name === 'insertion'),
        i = o.marks.find((a) => a.type.name === 'deletion');
      if (r) {
        let a = Number(r.attrs.revisionId);
        Number.isFinite(a) && t.set(a, (t.get(a) ?? 0) + 1);
      }
      if (i) {
        let a = Number(i.attrs.revisionId);
        Number.isFinite(a) && n.set(a, (n.get(a) ?? 0) + 1);
      }
    }),
    { insertionById: t, deletionById: n }
  );
}
function gm(e) {
  return e.attrs.href || '';
}
function hm(e) {
  let t = e.filter((n) => n.type.name !== 'hyperlink');
  return t.length === 0
    ? ''
    : t
        .map((n) => `${n.type.name}:${JSON.stringify(n.attrs)}`)
        .sort()
        .join('|');
}
function bm(e) {
  let t = e.attrs.href;
  return t?.startsWith('#')
    ? {
        type: 'hyperlink',
        anchor: t.substring(1),
        tooltip: e.attrs.tooltip || void 0,
        children: [],
      }
    : {
        type: 'hyperlink',
        href: t,
        tooltip: e.attrs.tooltip || void 0,
        rId: e.attrs.rId || void 0,
        children: [],
      };
}
function Vc(e, t) {
  if (t.isText && t.text) {
    let n = t.marks.filter((r) => r.type.name !== 'hyperlink'),
      o = Kc(t.text, n);
    e.children.push(o);
  }
}
function Kc(e, t) {
  let n = _a(t),
    o = { type: 'text', text: e };
  return { type: 'run', formatting: Object.keys(n).length > 0 ? n : void 0, content: [o] };
}
function ym(e, t) {
  let n = e.content[e.content.length - 1];
  n && n.type === 'text' ? (n.text += t) : e.content.push({ type: 'text', text: t });
}
function xm() {
  return { type: 'run', content: [{ type: 'break', breakType: 'textWrapping' }] };
}
function Sm() {
  return { type: 'run', content: [{ type: 'tab' }] };
}
function km(e, t) {
  let n = e.attrs,
    o = t && t.length > 0 ? _a(t) : void 0,
    r = n.displayText || '';
  if (!r)
    switch (n.fieldType) {
      case 'PAGE':
        r = '1';
        break;
      case 'NUMPAGES':
        r = '1';
        break;
      default:
        r = ' ';
        break;
    }
  let i = {
    type: 'run',
    content: [{ type: 'text', text: r }],
    ...(o && Object.keys(o).length > 0 ? { formatting: o } : {}),
  };
  return n.fieldKind === 'complex'
    ? {
        type: 'complexField',
        instruction: n.instruction,
        fieldType: n.fieldType,
        fieldCode: [],
        fieldResult: [i],
        fldLock: n.fldLock || void 0,
        dirty: n.dirty || void 0,
      }
    : {
        type: 'simpleField',
        instruction: n.instruction,
        fieldType: n.fieldType,
        content: [i],
        fldLock: n.fldLock || void 0,
        dirty: n.dirty || void 0,
      };
}
function wm(e) {
  let t = e.attrs;
  return {
    type: 'mathEquation',
    display: t.display || 'inline',
    ommlXml: t.ommlXml,
    plainText: t.plainText || void 0,
  };
}
function Cm(e) {
  let t = e.attrs,
    n = {
      sdtType: t.sdtType ?? 'richText',
      alias: t.alias ?? void 0,
      tag: t.tag ?? void 0,
      lock: t.lock ?? void 0,
      placeholder: t.placeholder ?? void 0,
      showingPlaceholder: t.showingPlaceholder ?? void 0,
      dateFormat: t.dateFormat ?? void 0,
      listItems: t.listItems ? JSON.parse(t.listItems) : void 0,
      checked: t.checked != null ? t.checked : void 0,
    },
    r = Uc(e).filter((i) => i.type === 'run' || i.type === 'hyperlink');
  return { type: 'inlineSdt', properties: n, content: r };
}
function Tm(e) {
  let t = e.attrs,
    n = t.wrapType || 'inline',
    o = 914400 / 96,
    r = { type: n };
  (t.distTop !== void 0 && (r.distT = Math.round(t.distTop * o)),
    t.distBottom !== void 0 && (r.distB = Math.round(t.distBottom * o)),
    t.distLeft !== void 0 && (r.distL = Math.round(t.distLeft * o)),
    t.distRight !== void 0 && (r.distR = Math.round(t.distRight * o)),
    t.wrapText && (r.wrapText = t.wrapText));
  let i = {
    type: 'image',
    rId: t.rId || '',
    src: t.src,
    alt: t.alt || void 0,
    title: t.title || void 0,
    size: { width: d$3(t.width || 0), height: d$3(t.height || 0) },
    wrap: r,
  };
  if (t.transform) {
    let s = t.transform,
      l = {},
      u = s.match(/rotate\(([-\d.]+)deg\)/);
    (u && (l.rotation = parseFloat(u[1])),
      s.includes('scaleX(-1)') && (l.flipH = true),
      s.includes('scaleY(-1)') && (l.flipV = true),
      (l.rotation || l.flipH || l.flipV) && (i.transform = l));
  }
  if (t.position?.horizontal && t.position?.vertical) {
    let s = t.position;
    i.position = {
      horizontal: {
        relativeTo: s.horizontal.relativeTo || 'column',
        alignment: s.horizontal.align,
        posOffset: s.horizontal.posOffset,
      },
      vertical: {
        relativeTo: s.vertical.relativeTo || 'paragraph',
        alignment: s.vertical.align,
        posOffset: s.vertical.posOffset,
      },
    };
  }
  if (t.borderWidth && t.borderWidth > 0) {
    let s = {
      solid: 'solid',
      dotted: 'dot',
      dashed: 'dash',
      double: 'solid',
      groove: 'solid',
      ridge: 'solid',
      inset: 'solid',
      outset: 'solid',
    };
    i.outline = {
      width: Math.round(t.borderWidth * (914400 / 96)),
      color: t.borderColor ? { rgb: t.borderColor.replace('#', '') } : void 0,
      style: (t.borderStyle && s[t.borderStyle]) || 'solid',
    };
  }
  return { type: 'run', content: [{ type: 'drawing', image: i }] };
}
function vm(e) {
  let t = e.attrs,
    n = {
      type: 'shape',
      shapeType: t.shapeType || 'rect',
      id: t.shapeId || void 0,
      size: {
        width: t.width ? Math.round(t.width * (914400 / 96)) : 0,
        height: t.height ? Math.round(t.height * (914400 / 96)) : 0,
      },
    };
  if (t.fillType === 'gradient' && t.gradientStops)
    try {
      let r = JSON.parse(t.gradientStops);
      n.fill = {
        type: 'gradient',
        gradient: {
          type: t.gradientType || 'linear',
          angle: t.gradientAngle || void 0,
          stops: r.map((i) => ({ position: i.position, color: { rgb: i.color.replace('#', '') } })),
        },
      };
    } catch {
      n.fill = { type: 'solid', color: { rgb: (t.fillColor || '000000').replace('#', '') } };
    }
  else
    t.fillColor
      ? (n.fill = { type: t.fillType || 'solid', color: { rgb: t.fillColor.replace('#', '') } })
      : t.fillType === 'none' && (n.fill = { type: 'none' });
  if (t.outlineWidth && t.outlineWidth > 0) {
    let r = { solid: 'solid', dotted: 'dot', dashed: 'dash' };
    n.outline = {
      width: Math.round(t.outlineWidth * (914400 / 96)),
      color: t.outlineColor ? { rgb: t.outlineColor.replace('#', '') } : void 0,
      style: (t.outlineStyle && r[t.outlineStyle]) || 'solid',
    };
  }
  return { type: 'run', content: [{ type: 'shape', shape: n }] };
}
function _a(e) {
  let t = {};
  for (let n of e)
    switch (n.type.name) {
      case 'bold':
        ((t.bold = true), (t.boldCs = true));
        break;
      case 'italic':
        ((t.italic = true), (t.italicCs = true));
        break;
      case 'underline': {
        let o = n.attrs;
        t.underline = { style: o.style || 'single', color: o.color };
        break;
      }
      case 'strike':
        n.attrs.double ? (t.doubleStrike = true) : (t.strike = true);
        break;
      case 'textColor': {
        let o = n.attrs;
        t.color = {
          rgb: o.rgb,
          themeColor: o.themeColor,
          themeTint: o.themeTint,
          themeShade: o.themeShade,
        };
        break;
      }
      case 'highlight':
        t.highlight = n.attrs.color;
        break;
      case 'fontSize':
        ((t.fontSize = n.attrs.size), (t.fontSizeCs = n.attrs.size));
        break;
      case 'fontFamily': {
        let o = n.attrs;
        t.fontFamily = {
          ascii: o.ascii,
          hAnsi: o.hAnsi,
          cs: o.ascii || void 0,
          asciiTheme: o.asciiTheme,
        };
        break;
      }
      case 'superscript':
        t.vertAlign = 'superscript';
        break;
      case 'subscript':
        t.vertAlign = 'subscript';
        break;
      case 'allCaps':
        t.allCaps = true;
        break;
      case 'smallCaps':
        t.smallCaps = true;
        break;
      case 'characterSpacing': {
        (n.attrs.spacing != null && (t.spacing = n.attrs.spacing),
          n.attrs.position != null && (t.position = n.attrs.position),
          n.attrs.scale != null && (t.scale = n.attrs.scale),
          n.attrs.kerning != null && (t.kerning = n.attrs.kerning));
        break;
      }
      case 'emboss':
        t.emboss = true;
        break;
      case 'imprint':
        t.imprint = true;
        break;
      case 'textShadow':
        t.shadow = true;
        break;
      case 'emphasisMark':
        t.emphasisMark = n.attrs.type || 'dot';
        break;
      case 'textOutline':
        t.outline = true;
        break;
    }
  return t;
}
function Rm(e) {
  for (let t of e)
    for (let n of t.cells) {
      let o = n.formatting?.borders;
      if (o) {
        let r = o.top || o.left || o.right || o.bottom || o.insideH || o.insideV;
        return r
          ? {
              top: o.top ?? r,
              bottom: o.bottom ?? r,
              left: o.left ?? r,
              right: o.right ?? r,
              insideH: o.insideH ?? o.bottom ?? r,
              insideV: o.insideV ?? o.right ?? r,
            }
          : void 0;
      }
    }
}
function Yc(e, t) {
  let n = e.attrs,
    o = [];
  e.forEach((i) => {
    i.type.name === 'tableRow' && o.push(Mm(i, t));
  });
  let r = Pm(n) || void 0;
  if (!r?.borders) {
    let i = Rm(o);
    if (i)
      if (r) r.borders = i;
      else
        return {
          type: 'table',
          columnWidths: n.columnWidths || void 0,
          formatting: { borders: i },
          rows: o,
        };
  }
  return { type: 'table', columnWidths: n.columnWidths || void 0, formatting: r, rows: o };
}
function Pm(e) {
  if (e._originalFormatting) {
    let r = e._originalFormatting,
      i = { ...r };
    (e.styleId !== (r.styleId || void 0) && (i.styleId = e.styleId || void 0),
      e.justification !== (r.justification || void 0) &&
        (i.justification = e.justification || void 0),
      e.floating !== (r.floating || void 0) && (i.floating = e.floating || void 0),
      e.look !== (r.look || void 0) && (i.look = e.look || void 0));
    let a = r.width?.value,
      s = r.width?.type;
    return (
      (e.width !== a || e.widthType !== s) &&
        (e.width != null || e.widthType
          ? (i.width = { value: e.width ?? 0, type: e.widthType || 'dxa' })
          : (i.width = void 0)),
      e.cellMargins &&
        (i.cellMargins = {
          top: e.cellMargins.top != null ? { value: e.cellMargins.top, type: 'dxa' } : void 0,
          bottom:
            e.cellMargins.bottom != null ? { value: e.cellMargins.bottom, type: 'dxa' } : void 0,
          left: e.cellMargins.left != null ? { value: e.cellMargins.left, type: 'dxa' } : void 0,
          right: e.cellMargins.right != null ? { value: e.cellMargins.right, type: 'dxa' } : void 0,
        }),
      i
    );
  }
  if (
    !(
      e.styleId ||
      e.width != null ||
      e.widthType ||
      e.justification ||
      e.floating ||
      e.cellMargins ||
      e.look
    )
  )
    return;
  let n = e.cellMargins
      ? {
          top: e.cellMargins.top != null ? { value: e.cellMargins.top, type: 'dxa' } : void 0,
          bottom:
            e.cellMargins.bottom != null ? { value: e.cellMargins.bottom, type: 'dxa' } : void 0,
          left: e.cellMargins.left != null ? { value: e.cellMargins.left, type: 'dxa' } : void 0,
          right: e.cellMargins.right != null ? { value: e.cellMargins.right, type: 'dxa' } : void 0,
        }
      : void 0,
    o;
  return (
    (e.width != null || e.widthType) && (o = { value: e.width ?? 0, type: e.widthType || 'dxa' }),
    {
      styleId: e.styleId || void 0,
      width: o,
      justification: e.justification || void 0,
      floating: e.floating || void 0,
      cellMargins: n,
      look: e.look || void 0,
    }
  );
}
function Mm(e, t) {
  let n = e.attrs,
    o = [];
  return (
    e.forEach((r) => {
      (r.type.name === 'tableCell' || r.type.name === 'tableHeader') && o.push(Im(r, t));
    }),
    { type: 'tableRow', formatting: Em(n), cells: o }
  );
}
function Em(e) {
  if (e._originalFormatting) {
    let n = e._originalFormatting,
      o = { ...n };
    return (
      e.height !== (n.height?.value || void 0) &&
        (o.height = e.height ? { value: e.height, type: 'dxa' } : void 0),
      e.heightRule !== (n.heightRule || void 0) && (o.heightRule = e.heightRule || void 0),
      e.isHeader !== (n.header || void 0) && (o.header = e.isHeader || void 0),
      o
    );
  }
  if (e.height || e.isHeader)
    return {
      height: e.height ? { value: e.height, type: 'dxa' } : void 0,
      heightRule: e.heightRule || void 0,
      header: e.isHeader || void 0,
    };
}
function Im(e, t) {
  let n = e.attrs,
    o = [];
  return (
    e.forEach((r) => {
      r.type.name === 'paragraph' ? o.push(Wa(r, t)) : r.type.name === 'table' && o.push(Yc(r, t));
    }),
    { type: 'tableCell', formatting: Fm(n), content: o }
  );
}
function Fm(e) {
  if (e._originalFormatting) {
    let o = e._originalFormatting,
      r = { ...o };
    if (
      (e.colspan > 1 && (r.gridSpan = e.colspan),
      e.width != null && (r.width = { value: e.width, type: e.widthType || 'dxa' }),
      e.verticalAlign !== (o.verticalAlign || void 0) &&
        (r.verticalAlign = e.verticalAlign || void 0),
      e.backgroundColor
        ? (r.shading = { fill: { rgb: e.backgroundColor } })
        : !e.backgroundColor && o.shading && (r.shading = void 0),
      e.borders && (r.borders = e.borders),
      e.margins)
    ) {
      let i = e.margins,
        a = {};
      (i.top != null && (a.top = { value: i.top, type: 'dxa' }),
        i.bottom != null && (a.bottom = { value: i.bottom, type: 'dxa' }),
        i.left != null && (a.left = { value: i.left, type: 'dxa' }),
        i.right != null && (a.right = { value: i.right, type: 'dxa' }),
        (r.margins = a));
    }
    return (
      e.textDirection !== (o.textDirection || void 0) &&
        (r.textDirection = e.textDirection || void 0),
      e.rowspan > 1 && (r._pmRowSpan = e.rowspan),
      r
    );
  }
  if (
    !(
      e.colspan > 1 ||
      e.rowspan > 1 ||
      e.width != null ||
      e.verticalAlign ||
      e.backgroundColor ||
      e.borders ||
      e.margins ||
      e.textDirection
    )
  )
    return;
  let n;
  if (e.margins) {
    let o = e.margins;
    ((n = {}),
      o.top != null && (n.top = { value: o.top, type: 'dxa' }),
      o.bottom != null && (n.bottom = { value: o.bottom, type: 'dxa' }),
      o.left != null && (n.left = { value: o.left, type: 'dxa' }),
      o.right != null && (n.right = { value: o.right, type: 'dxa' }));
  }
  return {
    gridSpan: e.colspan > 1 ? e.colspan : void 0,
    width: e.width != null ? { value: e.width, type: e.widthType || 'dxa' } : void 0,
    verticalAlign: e.verticalAlign || void 0,
    textDirection: e.textDirection || void 0,
    shading: e.backgroundColor ? { fill: { rgb: e.backgroundColor } } : void 0,
    borders: e.borders,
    margins: n,
  };
}
function Lm(e) {
  let t = e.attrs,
    n = [];
  e.forEach((a) => {
    a.type.name === 'paragraph' && n.push(Wa(a));
  });
  let o = {
    type: 'shape',
    shapeType: 'rect',
    id: t.textBoxId || void 0,
    size: {
      width: t.width ? Math.round(t.width * (914400 / 96)) : 0,
      height: t.height ? Math.round(t.height * (914400 / 96)) : 0,
    },
    textBody: {
      content: n.length > 0 ? n : [{ type: 'paragraph', content: [] }],
      margins: {
        top: t.marginTop != null ? Math.round(t.marginTop * (914400 / 96)) : void 0,
        bottom: t.marginBottom != null ? Math.round(t.marginBottom * (914400 / 96)) : void 0,
        left: t.marginLeft != null ? Math.round(t.marginLeft * (914400 / 96)) : void 0,
        right: t.marginRight != null ? Math.round(t.marginRight * (914400 / 96)) : void 0,
      },
    },
  };
  if (
    (t.fillColor && (o.fill = { type: 'solid', color: { rgb: t.fillColor.replace('#', '') } }),
    t.outlineWidth && t.outlineWidth > 0)
  ) {
    let a = { solid: 'solid', dotted: 'dot', dashed: 'dash' };
    o.outline = {
      width: Math.round(t.outlineWidth * (914400 / 96)),
      color: t.outlineColor ? { rgb: t.outlineColor.replace('#', '') } : void 0,
      style: (t.outlineStyle && a[t.outlineStyle]) || 'solid',
    };
  }
  return { type: 'paragraph', content: [{ type: 'run', content: [{ type: 'shape', shape: o }] }] };
}
function Bo(e) {
  return jc(e);
}
function co(e) {
  let { selection: t, doc: n } = e,
    { from: o, to: r, empty: i } = t,
    a = n.resolve(o),
    s = 0,
    l = 0;
  n.forEach((g, S, w) => {
    (S <= o && (s = w), S <= r && (l = w));
  });
  let u = {},
    d = a.parent,
    c = d.type.name === 'paragraph' && d.textContent.length === 0,
    p = d.attrs?.defaultTextFormatting,
    f = e.storedMarks || t.$from.marks();
  c && f.length === 0 && p && (u = { ...p });
  for (let g of f)
    switch (g.type.name) {
      case 'bold':
        u.bold = true;
        break;
      case 'italic':
        u.italic = true;
        break;
      case 'underline':
        u.underline = { style: g.attrs.style || 'single', color: g.attrs.color };
        break;
      case 'strike':
        g.attrs.double ? (u.doubleStrike = true) : (u.strike = true);
        break;
      case 'textColor':
        u.color = { rgb: g.attrs.rgb, themeColor: g.attrs.themeColor };
        break;
      case 'highlight':
        u.highlight = g.attrs.color;
        break;
      case 'fontSize':
        u.fontSize = g.attrs.size;
        break;
      case 'fontFamily':
        u.fontFamily = { ascii: g.attrs.ascii, hAnsi: g.attrs.hAnsi };
        break;
      case 'superscript':
        u.vertAlign = 'superscript';
        break;
      case 'subscript':
        u.vertAlign = 'subscript';
        break;
    }
  let m = {},
    b = null;
  return (
    d.type.name === 'paragraph' &&
      (d.attrs.alignment && (m.alignment = d.attrs.alignment),
      d.attrs.lineSpacing &&
        ((m.lineSpacing = d.attrs.lineSpacing), (m.lineSpacingRule = d.attrs.lineSpacingRule)),
      d.attrs.numPr && (m.numPr = d.attrs.numPr),
      d.attrs.indentLeft && (m.indentLeft = d.attrs.indentLeft),
      d.attrs.indentRight && (m.indentRight = d.attrs.indentRight),
      d.attrs.indentFirstLine && (m.indentFirstLine = d.attrs.indentFirstLine),
      d.attrs.hangingIndent && (m.hangingIndent = d.attrs.hangingIndent),
      d.attrs.tabs && (m.tabs = d.attrs.tabs),
      d.attrs.styleId && (b = d.attrs.styleId)),
    {
      hasSelection: !i,
      isMultiParagraph: s !== l,
      textFormatting: u,
      paragraphFormatting: m,
      styleId: b,
      startParagraphIndex: s,
      endParagraphIndex: l,
    }
  );
}
var kt = _n.getCommands(),
  Mr = kt.toggleBold(),
  Er = kt.toggleItalic(),
  Ir = kt.toggleUnderline(),
  Fr = kt.toggleStrike(),
  Lr = kt.toggleSuperscript(),
  Br = kt.toggleSubscript();
function Ao(e) {
  return kt.setTextColor(e);
}
var Ar = kt.clearTextColor();
function Dr(e) {
  return kt.setHighlight(e);
}
kt.clearHighlight();
function Hr(e) {
  return kt.setFontSize(e);
}
kt.clearFontSize();
function Nr(e) {
  return kt.setFontFamily(e);
}
kt.clearFontFamily();
function zr(e, t) {
  return kt.setHyperlink(e, t);
}
var Or = kt.removeHyperlink();
function Do(e, t, n) {
  return kt.insertHyperlink(e, t, n);
}
var et = _n.getCommands();
function $r(e) {
  return et.setAlignment(e);
}
et.alignLeft();
et.alignCenter();
et.alignRight();
et.alignJustify();
function Wr(e, t = 'auto') {
  return et.setLineSpacing(e, t);
}
et.singleSpacing();
et.oneAndHalfSpacing();
et.doubleSpacing();
function _r(e = 720) {
  return et.increaseIndent(e);
}
function Vr(e = 720) {
  return et.decreaseIndent(e);
}
function jr(e) {
  return et.setIndentLeft(e);
}
function Ur(e) {
  return et.setIndentRight(e);
}
function Ho(e, t) {
  return et.setIndentFirstLine(e, t);
}
var Gr = et.toggleBulletList(),
  Kr = et.toggleNumberedList(),
  Yr = et.increaseListLevel(),
  qr = et.decreaseListLevel();
et.removeList();
function No(e, t) {
  return et.applyStyle(e, t);
}
et.clearStyle();
et.removeSectionBreak();
function Xr(e) {
  return et.removeTabStop(e);
}
var Zr = et.generateTOC();
var Ue = _n.getCommands();
function Jr(e, t) {
  return Ue.insertTable(e, t);
}
function Qr(e, t) {
  return Ue.addRowAbove()(e, t);
}
function ei(e, t) {
  return Ue.addRowBelow()(e, t);
}
function ti(e, t) {
  return Ue.deleteRow()(e, t);
}
function ni(e, t) {
  return Ue.addColumnLeft()(e, t);
}
function oi(e, t) {
  return Ue.addColumnRight()(e, t);
}
function ri(e, t) {
  return Ue.deleteColumn()(e, t);
}
function zo(e, t) {
  return Ue.deleteTable()(e, t);
}
function ii(e, t) {
  return Ue.selectTable()(e, t);
}
function ai(e, t) {
  return Ue.selectRow()(e, t);
}
function si(e, t) {
  return Ue.selectColumn()(e, t);
}
function li(e, t) {
  return Ue.mergeCells()(e, t);
}
function ci(e, t) {
  return Ue.splitCell()(e, t);
}
function wn(e, t, n) {
  return Ue.setCellBorder(e, t, n);
}
function di(e, t) {
  return Ue.removeTableBorders()(e, t);
}
function ui(e, t, n) {
  return Ue.setAllTableBorders(n)(e, t);
}
function pi(e, t, n) {
  return Ue.setOutsideTableBorders(n)(e, t);
}
function fi(e, t, n) {
  return Ue.setInsideTableBorders(n)(e, t);
}
function mi(e) {
  return Ue.setCellVerticalAlign(e);
}
function gi(e) {
  return Ue.setCellMargins(e);
}
function hi(e) {
  return Ue.setCellTextDirection(e);
}
function bi() {
  return Ue.toggleNoWrap();
}
function yi(e, t) {
  return Ue.setRowHeight(e, t);
}
function xi() {
  return Ue.toggleHeaderRow();
}
function Si() {
  return Ue.distributeColumns();
}
function ki() {
  return Ue.autoFitContents();
}
function Oo(e) {
  return Ue.setTableProperties(e);
}
function wi(e) {
  return Ue.applyTableStyle(e);
}
function Ci(e) {
  return Ue.setCellFillColor(e);
}
function Ti(e) {
  return Ue.setTableBorderColor(e);
}
function vi(e) {
  return Ue.setTableBorderWidth(e);
}
var Ri = (e, t) => {
  let { schema: n } = e,
    o = n.nodes.pageBreak,
    r = n.nodes.paragraph;
  if (!o || !r) return false;
  if (t) {
    let { $from: i } = e.selection,
      a = e.tr,
      s = o.create(),
      l = s.nodeSize,
      u;
    if (i.parent.isTextblock)
      if (i.parentOffset > 0 && i.parentOffset < i.parent.content.size) {
        a.split(i.pos);
        let d = a.mapping.map(i.pos);
        (a.insert(d, Fragment.from([s, r.create()])), (u = d + l + 1));
      } else if (i.parentOffset === i.parent.content.size) {
        let d = i.after();
        (a.insert(d, Fragment.from([s, r.create()])), (u = d + l + 1));
      } else {
        let d = i.before();
        (a.insert(d, s), (u = d + l + 1));
      }
    else {
      let d = i.pos;
      (a.insert(d, Fragment.from([s, r.create()])), (u = d + l + 1));
    }
    (a.setSelection(TextSelection.create(a.doc, u)), t(a.scrollIntoView()));
  }
  return true;
};
function dd(e, t, n) {
  return (o, r) => {
    let i = o.schema.marks.insertion,
      a = o.schema.marks.deletion;
    if (!i && !a) return false;
    let s = n === 'accept' ? i : a,
      l = n === 'accept' ? a : i;
    if (r) {
      let u = o.tr,
        d = [];
      o.doc.nodesBetween(e, t, (c, p) => {
        if (!c.isText) return;
        let f = p + c.nodeSize,
          m = Math.max(e, p),
          b = Math.min(t, f);
        (l && c.marks.some((g) => g.type === l) && d.push({ from: m, to: b }),
          s && c.marks.some((g) => g.type === s) && u.removeMark(m, b, s));
      });
      for (let c of d.reverse()) u.delete(c.from, c.to);
      u.steps.length > 0 && r(u);
    }
    return true;
  };
}
function ja(e, t) {
  return dd(e, t, 'accept');
}
function Ua(e, t) {
  return dd(e, t, 'reject');
}
var pd = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2px 0',
    fontSize: 11,
    color: '#4285f4',
    userSelect: 'none',
  },
  fd = { fontWeight: 500, letterSpacing: 0.3 },
  Xm = {
    background: 'none',
    border: 'none',
    color: '#4285f4',
    cursor: 'pointer',
    fontSize: 11,
    padding: '2px 6px',
    borderRadius: 3,
  },
  Zm = {
    position: 'absolute',
    right: 0,
    top: '100%',
    background: 'white',
    border: '1px solid #dadce0',
    borderRadius: 4,
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
    zIndex: 100,
    minWidth: 160,
    padding: '4px 0',
  },
  Pi = {
    display: 'block',
    width: '100%',
    padding: '6px 12px',
    border: 'none',
    background: 'none',
    textAlign: 'left',
    cursor: 'pointer',
    fontSize: 12,
    color: '#3c4043',
  },
  gd = forwardRef(function (
    {
      headerFooter: t,
      position: n,
      styles: o,
      targetElement: r,
      parentElement: i,
      onSave: a,
      onClose: s,
      onSelectionChange: l,
      onRemove: u,
    },
    d
  ) {
    let c = useRef(null),
      p = useRef(null),
      [f, m] = useState(false),
      [b, g] = useState(false),
      S = useRef(null),
      [w, k] = useState(null);
    (useLayoutEffect(() => {
      let W = () => {
        let $ = i.getBoundingClientRect(),
          z = r.getBoundingClientRect();
        k({
          top: z.top - $.top + i.scrollTop,
          left: z.left - $.left + i.scrollLeft,
          width: z.width,
        });
      };
      W();
      let L = i.closest('[style*="overflow"]') || i;
      return (
        L.addEventListener('scroll', W),
        window.addEventListener('resize', W),
        () => {
          (L.removeEventListener('scroll', W), window.removeEventListener('resize', W));
        }
      );
    }, [r, i]),
      useEffect(() => {
        if (!c.current || p.current) return;
        let W = $a(t.content, { styles: o || void 0 }),
          L = new Sn(lo());
        (L.buildSchema(), L.initializeRuntime());
        let $ = L.getPlugins(),
          z = EditorState.create({ doc: W, schema: ye, plugins: $ }),
          K = new EditorView(c.current, {
            state: z,
            dispatchTransaction(C) {
              let A = K.state.apply(C);
              if ((K.updateState(A), C.docChanged && m(true), C.selectionSet || C.docChanged)) {
                let ee = co(A);
                l?.(ee);
              }
            },
          });
        return (
          (p.current = K),
          requestAnimationFrame(() => {
            K.focus();
            let C = co(K.state);
            l?.(C);
          }),
          () => {
            (K.destroy(), (p.current = null));
          }
        );
      }, [w]));
    let E = useCallback(() => {
        if (!p.current) return;
        let W = Bo(p.current.state.doc);
        a(W);
      }, [a]),
      v = useCallback(() => {
        f ? E() : s();
      }, [f, E, s]);
    (useEffect(() => {
      function W(L) {
        L.key === 'Escape' && (L.preventDefault(), L.stopPropagation(), v());
      }
      return (
        document.addEventListener('keydown', W, true),
        () => document.removeEventListener('keydown', W, true)
      );
    }, [v]),
      useEffect(() => {
        if (!b) return;
        function W(L) {
          S.current && !S.current.contains(L.target) && g(false);
        }
        return (
          document.addEventListener('mousedown', W),
          () => document.removeEventListener('mousedown', W)
        );
      }, [b]),
      useImperativeHandle(d, () => ({
        getView: () => p.current,
        focus: () => p.current?.focus(),
        undo: () => {
          let W = p.current;
          return W ? undo(W.state, W.dispatch) : false;
        },
        redo: () => {
          let W = p.current;
          return W ? redo(W.state, W.dispatch) : false;
        },
      })));
    let _ = n === 'header' ? 'Header' : 'Footer';
    if (!w) return null;
    let V = { position: 'absolute', top: w.top, left: w.left, width: w.width, zIndex: 10 };
    return jsxs('div', {
      className: 'hf-inline-editor',
      style: V,
      onMouseDown: (W) => {
        W.stopPropagation();
      },
      children: [
        n === 'footer' &&
          jsxs('div', {
            className: 'hf-separator-bar',
            style: pd,
            children: [
              jsx('span', { style: fd, children: _ }),
              jsx(md, {
                label: _,
                showOptions: b,
                setShowOptions: g,
                optionsRef: S,
                onRemove: u,
                onClose: v,
                viewRef: p,
              }),
            ],
          }),
        jsx('div', {
          ref: c,
          className: 'hf-editor-pm',
          style: { minHeight: 40, outline: 'none' },
        }),
        n === 'header' &&
          jsxs('div', {
            className: 'hf-separator-bar',
            style: pd,
            children: [
              jsx('span', { style: fd, children: _ }),
              jsx(md, {
                label: _,
                showOptions: b,
                setShowOptions: g,
                optionsRef: S,
                onRemove: u,
                onClose: v,
                viewRef: p,
              }),
            ],
          }),
      ],
    });
  });
function md({
  label: e,
  showOptions: t,
  setShowOptions: n,
  optionsRef: o,
  onRemove: r,
  onClose: i,
  viewRef: a,
}) {
  let s = (l) => {
    let u = a.current;
    if (!u) return;
    let { $from: d, from: c } = u.state.selection,
      p = u.state.storedMarks || d.marks(),
      f = ye.nodes.field.create({
        fieldType: l,
        instruction: ` ${l} \\* MERGEFORMAT `,
        fieldKind: 'simple',
        dirty: true,
      }),
      m = u.state.tr.insert(c, f.mark(p));
    (u.dispatch(m), u.focus());
  };
  return jsxs('div', {
    style: { position: 'relative' },
    ref: o,
    children: [
      jsx('button', {
        type: 'button',
        style: Xm,
        onClick: (l) => {
          (l.stopPropagation(), n((u) => !u));
        },
        onMouseDown: (l) => l.stopPropagation(),
        children: 'Options \u25BE',
      }),
      t &&
        jsxs('div', {
          style: Zm,
          children: [
            jsx('button', {
              type: 'button',
              style: Pi,
              onClick: () => {
                (n(false), s('PAGE'));
              },
              onMouseOver: (l) => {
                l.target.style.backgroundColor = '#f1f3f4';
              },
              onMouseOut: (l) => {
                l.target.style.backgroundColor = 'transparent';
              },
              children: 'Insert current page number',
            }),
            jsx('button', {
              type: 'button',
              style: Pi,
              onClick: () => {
                (n(false), s('NUMPAGES'));
              },
              onMouseOver: (l) => {
                l.target.style.backgroundColor = '#f1f3f4';
              },
              onMouseOut: (l) => {
                l.target.style.backgroundColor = 'transparent';
              },
              children: 'Insert total page count',
            }),
            jsx('div', { style: { borderTop: '1px solid #e8eaed', margin: '4px 0' } }),
            r &&
              jsxs('button', {
                type: 'button',
                style: Pi,
                onClick: () => {
                  (n(false), r());
                },
                onMouseOver: (l) => {
                  l.target.style.backgroundColor = '#f1f3f4';
                },
                onMouseOut: (l) => {
                  l.target.style.backgroundColor = 'transparent';
                },
                children: ['Remove ', e.toLowerCase()],
              }),
            jsxs('button', {
              type: 'button',
              style: Pi,
              onClick: () => {
                (n(false), i());
              },
              onMouseOver: (l) => {
                l.target.style.backgroundColor = '#f1f3f4';
              },
              onMouseOut: (l) => {
                l.target.style.backgroundColor = 'transparent';
              },
              children: ['Close ', e.toLowerCase(), ' editing'],
            }),
          ],
        }),
    ],
  });
}
var ke = (e) => ({ style: 'single', size: 4, color: { rgb: e } }),
  Jm = [
    {
      id: 'TableNormal',
      name: 'Normal Table',
      look: { firstRow: false, lastRow: false, noHBand: true, noVBand: true },
    },
    {
      id: 'TableGrid',
      name: 'Table Grid',
      tableBorders: {
        top: ke('000000'),
        bottom: ke('000000'),
        left: ke('000000'),
        right: ke('000000'),
        insideH: ke('000000'),
        insideV: ke('000000'),
      },
      look: { firstRow: false, lastRow: false, noHBand: true, noVBand: true },
    },
    {
      id: 'TableGridLight',
      name: 'Grid Table Light',
      tableBorders: {
        top: ke('BFBFBF'),
        bottom: ke('BFBFBF'),
        left: ke('BFBFBF'),
        right: ke('BFBFBF'),
        insideH: ke('BFBFBF'),
        insideV: ke('BFBFBF'),
      },
      look: { firstRow: true, lastRow: false, noHBand: true, noVBand: true },
      conditionals: { firstRow: { bold: true, borders: { bottom: ke('000000') } } },
    },
    {
      id: 'PlainTable1',
      name: 'Plain Table 1',
      tableBorders: { top: ke('BFBFBF'), bottom: ke('BFBFBF'), insideH: ke('BFBFBF') },
      look: { firstRow: true, lastRow: false, noHBand: true, noVBand: true },
      conditionals: { firstRow: { bold: true } },
    },
    {
      id: 'PlainTable2',
      name: 'Plain Table 2',
      look: { firstRow: true, lastRow: false, noHBand: false, noVBand: true },
      conditionals: {
        firstRow: { bold: true, borders: { bottom: ke('7F7F7F') } },
        band1Horz: { backgroundColor: '#F2F2F2' },
      },
    },
    {
      id: 'PlainTable3',
      name: 'Plain Table 3',
      look: { firstRow: true, lastRow: false, noHBand: false, noVBand: true },
      conditionals: {
        firstRow: { bold: true, color: '#FFFFFF', backgroundColor: '#A5A5A5' },
        band1Horz: { backgroundColor: '#E7E7E7' },
      },
    },
    {
      id: 'PlainTable4',
      name: 'Plain Table 4',
      look: { firstRow: true, lastRow: false, noHBand: false, noVBand: true },
      conditionals: {
        firstRow: { bold: true, color: '#FFFFFF', backgroundColor: '#000000' },
        band1Horz: { backgroundColor: '#F2F2F2' },
      },
    },
    {
      id: 'GridTable1Light-Accent1',
      name: 'Grid Table 1 Light',
      tableBorders: {
        top: ke('B4C6E7'),
        bottom: ke('B4C6E7'),
        left: ke('B4C6E7'),
        right: ke('B4C6E7'),
        insideH: ke('B4C6E7'),
        insideV: ke('B4C6E7'),
      },
      look: { firstRow: true, lastRow: false, noHBand: true, noVBand: true },
      conditionals: { firstRow: { bold: true, borders: { bottom: ke('4472C4') } } },
    },
    {
      id: 'GridTable4-Accent1',
      name: 'Grid Table 4 Accent 1',
      tableBorders: {
        top: ke('4472C4'),
        bottom: ke('4472C4'),
        left: ke('4472C4'),
        right: ke('4472C4'),
        insideH: ke('4472C4'),
        insideV: ke('4472C4'),
      },
      look: { firstRow: true, lastRow: false, noHBand: false, noVBand: true },
      conditionals: {
        firstRow: { bold: true, color: '#FFFFFF', backgroundColor: '#4472C4' },
        band1Horz: { backgroundColor: '#D6E4F0' },
      },
    },
    {
      id: 'GridTable5Dark-Accent1',
      name: 'Grid Table 5 Dark',
      tableBorders: {
        top: ke('FFFFFF'),
        bottom: ke('FFFFFF'),
        left: ke('FFFFFF'),
        right: ke('FFFFFF'),
        insideH: ke('FFFFFF'),
        insideV: ke('FFFFFF'),
      },
      look: { firstRow: true, lastRow: false, noHBand: false, noVBand: true },
      conditionals: {
        firstRow: { bold: true, color: '#FFFFFF', backgroundColor: '#4472C4' },
        band1Horz: { backgroundColor: '#D6E4F0' },
        band2Horz: { backgroundColor: '#B4C6E7' },
      },
    },
    {
      id: 'ListTable3-Accent2',
      name: 'List Table 3 Accent 2',
      tableBorders: { top: ke('ED7D31'), bottom: ke('ED7D31') },
      look: { firstRow: true, lastRow: false, noHBand: false, noVBand: true },
      conditionals: {
        firstRow: { bold: true, color: '#FFFFFF', backgroundColor: '#ED7D31' },
        band1Horz: { backgroundColor: '#FBE4D5' },
      },
    },
    {
      id: 'ListTable4-Accent3',
      name: 'List Table 4 Accent 3',
      tableBorders: { top: ke('A5A5A5'), bottom: ke('A5A5A5'), insideH: ke('A5A5A5') },
      look: { firstRow: true, lastRow: false, noHBand: false, noVBand: true },
      conditionals: {
        firstRow: { bold: true, color: '#FFFFFF', backgroundColor: '#A5A5A5' },
        band1Horz: { backgroundColor: '#EDEDED' },
      },
    },
    {
      id: 'GridTable4-Accent5',
      name: 'Grid Table 4 Accent 5',
      tableBorders: {
        top: ke('5B9BD5'),
        bottom: ke('5B9BD5'),
        left: ke('5B9BD5'),
        right: ke('5B9BD5'),
        insideH: ke('5B9BD5'),
        insideV: ke('5B9BD5'),
      },
      look: { firstRow: true, lastRow: false, noHBand: false, noVBand: true },
      conditionals: {
        firstRow: { bold: true, color: '#FFFFFF', backgroundColor: '#5B9BD5' },
        band1Horz: { backgroundColor: '#DEEAF6' },
      },
    },
    {
      id: 'GridTable4-Accent6',
      name: 'Grid Table 4 Accent 6',
      tableBorders: {
        top: ke('70AD47'),
        bottom: ke('70AD47'),
        left: ke('70AD47'),
        right: ke('70AD47'),
        insideH: ke('70AD47'),
        insideV: ke('70AD47'),
      },
      look: { firstRow: true, lastRow: false, noHBand: false, noVBand: true },
      conditionals: {
        firstRow: { bold: true, color: '#FFFFFF', backgroundColor: '#70AD47' },
        band1Horz: { backgroundColor: '#E2EFDA' },
      },
    },
  ];
function hd(e) {
  return Jm.find((t) => t.id === e);
}
function bd() {
  return jsxs('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      gap: '20px',
      color: 'var(--doc-text-muted)',
    },
    children: [
      jsx('div', {
        style: {
          width: '36px',
          height: '36px',
          border: '3px solid var(--doc-border)',
          borderTopColor: 'var(--doc-primary)',
          borderRadius: '50%',
          animation: 'docx-spin 0.8s linear infinite',
        },
      }),
      jsx('style', {
        children: `
          @keyframes docx-spin {
            to { transform: rotate(360deg); }
          }
        `,
      }),
      jsx('div', { style: { fontSize: '14px' }, children: 'Loading document...' }),
    ],
  });
}
function yd() {
  return jsxs('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      color: 'var(--doc-text-placeholder)',
    },
    children: [
      jsxs('svg', {
        width: '64',
        height: '64',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '1.5',
        children: [
          jsx('path', { d: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' }),
          jsx('polyline', { points: '14 2 14 8 20 8' }),
        ],
      }),
      jsx('div', { style: { marginTop: '16px' }, children: 'No document loaded' }),
    ],
  });
}
function xd({ message: e }) {
  return jsxs('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      padding: '20px',
      textAlign: 'center',
    },
    children: [
      jsx('div', {
        style: { color: 'var(--doc-error)', marginBottom: '16px' },
        children: jsxs('svg', {
          width: '48',
          height: '48',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2',
          children: [
            jsx('circle', { cx: '12', cy: '12', r: '10' }),
            jsx('path', { d: 'M12 8v4M12 16v.01' }),
          ],
        }),
      }),
      jsx('h3', {
        style: { color: 'var(--doc-error)', marginBottom: '8px' },
        children: 'Failed to Load Document',
      }),
      jsx('p', { style: { color: 'var(--doc-text-muted)', maxWidth: '400px' }, children: e }),
    ],
  });
}
function eg(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
function tg(e, t = {}) {
  let {
      maxEntries: n = 100,
      groupingInterval: o = 500,
      enableKeyboardShortcuts: r = true,
      isEqual: i = eg,
      onUndo: a,
      onRedo: s,
      containerRef: l,
    } = t,
    [u, d] = useState(e),
    [c, p] = useState([]),
    [f, m] = useState([]),
    b = useRef(0),
    g = useRef(false),
    S = useCallback(
      (L, $) => {
        if (i(u, L)) return;
        if (g.current) {
          d(L);
          return;
        }
        let z = Date.now();
        (z - b.current < o && c.length > 0
          ? p((C) => {
              let A = [...C];
              return (
                (A[A.length - 1] = {
                  state: u,
                  timestamp: z,
                  description: $ || A[A.length - 1].description,
                }),
                A
              );
            })
          : p((C) => {
              let A = { state: u, timestamp: z, description: $ },
                ee = [...C, A];
              return ee.length > n ? ee.slice(ee.length - n) : ee;
            }),
          m([]),
          d(L),
          (b.current = z));
      },
      [u, i, o, n, c.length]
    ),
    w = useCallback(() => {
      if (c.length === 0) return;
      g.current = true;
      let L = c[c.length - 1];
      return (
        p(($) => $.slice(0, -1)),
        m(($) => [...$, { state: u, timestamp: Date.now() }]),
        d(L.state),
        setTimeout(() => {
          g.current = false;
        }, 0),
        a?.(L.state),
        L.state
      );
    }, [c, u, a]),
    k = useCallback(() => {
      if (f.length === 0) return;
      g.current = true;
      let L = f[f.length - 1];
      return (
        m(($) => $.slice(0, -1)),
        p(($) => [...$, { state: u, timestamp: Date.now() }]),
        d(L.state),
        setTimeout(() => {
          g.current = false;
        }, 0),
        s?.(L.state),
        L.state
      );
    }, [f, u, s]),
    E = useCallback(() => {
      (p([]), m([]));
    }, []),
    v = useCallback(
      (L) => {
        (d(L ?? e), p([]), m([]), (b.current = 0));
      },
      [e]
    ),
    _ = useCallback(() => [...c], [c]),
    V = useCallback(() => [...f], [f]),
    W = useCallback((L) => {
      (d(($) => L($)),
        p(($) => $.map((z) => ({ ...z, state: L(z.state) }))),
        m(($) => $.map((z) => ({ ...z, state: L(z.state) }))));
    }, []);
  return (
    useEffect(() => {
      if (!r) return;
      let L = (z) => {
          if ((z.ctrlKey || z.metaKey) && z.key === 'z' && !z.shiftKey) {
            (z.preventDefault(), w());
            return;
          }
          if (
            ((z.ctrlKey || z.metaKey) && z.key === 'y') ||
            ((z.ctrlKey || z.metaKey) && z.key === 'z' && z.shiftKey)
          ) {
            (z.preventDefault(), k());
            return;
          }
        },
        $ = l?.current || document;
      return (
        $.addEventListener('keydown', L),
        () => {
          $.removeEventListener('keydown', L);
        }
      );
    }, [r, w, k, l]),
    {
      state: u,
      canUndo: c.length > 0,
      canRedo: f.length > 0,
      undoCount: c.length,
      redoCount: f.length,
      push: S,
      undo: w,
      redo: k,
      clear: E,
      reset: v,
      getUndoStack: _,
      getRedoStack: V,
      transformAll: W,
    }
  );
}
function kd(e, t = {}) {
  let n = useCallback(
    (o, r) =>
      !(
        (o?.package?.document !== r?.package?.document &&
          JSON.stringify(o?.package?.document) !== JSON.stringify(r?.package?.document)) ||
        o?.package?.headers !== r?.package?.headers ||
        o?.package?.footers !== r?.package?.footers
      ),
    []
  );
  return tg(e, { ...t, isEqual: n });
}
var Cn = new PluginKey('suggestionMode'),
  Mi = 'suggestionModeApplied',
  rg = Date.now();
function Ei(e) {
  return { revisionId: rg++, author: e.author, date: new Date().toISOString() };
}
function Ja(e, t, n, o) {
  try {
    let r = e.resolve(t);
    for (let i of [r.nodeBefore, r.nodeAfter])
      if (i?.isText) {
        let a = i.marks.find((s) => s.type.name === n && s.attrs.author === o);
        if (a) return a.attrs;
      }
  } catch {}
  return null;
}
function Td(e, t, n, o, r, i, a) {
  let s = [];
  if (
    (t.nodesBetween(n, o, (u, d) => {
      if (!u.isText) return;
      let c = Math.max(d, n),
        p = Math.min(d + u.nodeSize, o);
      if (c >= p) return;
      let f = u.marks.some((m) => m.type === r && m.attrs.author === a.author);
      s.push({ from: c, to: p, isOwnInsert: f });
    }),
    s.length === 0)
  )
    return;
  let l = Ja(t, n, 'deletion', a.author) || Ei(a);
  for (let u = s.length - 1; u >= 0; u--) {
    let d = s[u];
    d.isOwnInsert ? e.delete(d.from, d.to) : e.addMark(d.from, d.to, i.create(l));
  }
}
function wd(e, t, n, o, r) {
  let i = e.state.schema.marks.insertion;
  if (!i) return false;
  let a = e.state.tr;
  a.setMeta(Mi, true);
  let s = Ja(e.state.doc, t, 'insertion', r.author) || Ei(r);
  if (t !== n) {
    let u = e.state.schema.marks.deletion;
    u && Td(a, e.state.doc, t, n, i, u, r);
  }
  let l = a.mapping.map(n);
  return (
    a.insertText(o, l, l),
    a.addMark(l, l + o.length, i.create(s)),
    e.dispatch(a.scrollIntoView()),
    true
  );
}
function Cd(e, t, n) {
  let o = Cn.getState(e);
  if (!o?.active) return false;
  let { $from: r, $to: i, empty: a } = e.selection,
    s = e.schema.marks.insertion,
    l = e.schema.marks.deletion;
  if (!s || !l) return false;
  if (!t) return true;
  let u = e.tr;
  if ((u.setMeta(Mi, true), !a)) {
    Td(u, e.doc, r.pos, i.pos, s, l, o);
    let S = u.mapping.map(i.pos);
    return (u.setSelection(TextSelection.near(u.doc.resolve(S))), t(u.scrollIntoView()), true);
  }
  let d = n === 'backward',
    c = d ? r.pos - 1 : r.pos,
    p = d ? r.pos : r.pos + 1;
  if (c < 0 || p > e.doc.content.size) return true;
  let m = e.doc.resolve(c).nodeAfter;
  if (!m?.isText) return false;
  let b = m.marks.some((S) => S.type === s && S.attrs.author === o.author);
  if (m.marks.some((S) => S.type === l)) {
    let S = d ? c : p;
    u.setSelection(TextSelection.near(u.doc.resolve(S)));
  } else if (b) u.delete(c, p);
  else {
    let S = Ja(e.doc, c, 'deletion', o.author) || Ei(o);
    u.addMark(c, p, l.create(S));
    let w = d ? c : p;
    u.setSelection(TextSelection.near(u.doc.resolve(w)));
  }
  return (t(u.scrollIntoView()), true);
}
function vd(e = false, t = 'User') {
  return new Plugin({
    key: Cn,
    state: {
      init() {
        return { active: e, author: t };
      },
      apply(n, o) {
        let r = n.getMeta(Cn);
        return r ? { ...o, ...r } : o;
      },
    },
    props: {
      handleDOMEvents: {
        beforeinput(n, o) {
          let r = Cn.getState(n.state);
          if (!r?.active) return false;
          if (o.inputType === 'insertText' && o.data) {
            o.preventDefault();
            let { from: i, to: a } = n.state.selection;
            return wd(n, i, a, o.data, r);
          }
          return false;
        },
      },
      handleKeyDown(n, o) {
        return Cn.getState(n.state)?.active
          ? o.key === 'Backspace'
            ? Cd(n.state, n.dispatch, 'backward')
            : o.key === 'Delete'
              ? Cd(n.state, n.dispatch, 'forward')
              : false
          : false;
      },
      handleTextInput(n, o, r, i) {
        let a = Cn.getState(n.state);
        return a?.active ? wd(n, o, r, i, a) : false;
      },
    },
    appendTransaction(n, o, r) {
      let i = Cn.getState(r);
      if (!i?.active) return null;
      let a = n.find((c) => c.docChanged && !c.getMeta(Mi));
      if (!a) return null;
      let s = r.schema.marks.insertion;
      if (!s) return null;
      let l = Ei(i),
        u = r.tr;
      u.setMeta(Mi, true);
      let d = r.schema.marks.deletion;
      return (
        a.steps.forEach((c) => {
          c.getMap().forEach((f, m, b, g) => {
            g > b &&
              r.doc.nodesBetween(b, g, (S, w) => {
                if (!S.isText) return;
                if (!S.marks.some((E) => E.type === s || (d && E.type === d))) {
                  let E = Math.max(w, b),
                    v = Math.min(w + S.nodeSize, g);
                  u.addMark(E, v, s.create(l));
                }
              });
          });
        }),
        u.steps.length > 0 ? u : null
      );
    },
  });
}
function Rd(e, t, n, o) {
  if (n) {
    let r = { active: e };
    o !== void 0 && (r.author = o);
    let i = t.tr.setMeta(Cn, r);
    n(i);
  }
  return true;
}
var fg = {
  position: 'fixed',
  left: '-9999px',
  top: '0',
  opacity: 0,
  zIndex: -1,
  pointerEvents: 'none',
  userSelect: 'none',
  overflowAnchor: 'none',
};
function Id(e, t, n, o = []) {
  let r = n?.getSchema() ?? ye,
    i = e ? Tr(e, { styles: t ?? void 0 }) : Rr(),
    a = [...o, ...(n?.getPlugins() ?? [])];
  return EditorState.create({ doc: i, schema: r, plugins: a });
}
function mg(e, t) {
  return t ? Pr(e.doc, t) : null;
}
var gg = forwardRef(function (t, n) {
    let {
        document: o,
        styles: r,
        theme: i,
        widthPx: a = 612,
        readOnly: s = false,
        onTransaction: l,
        onSelectionChange: u,
        externalPlugins: d = [],
        extensionManager: c,
        onEditorViewReady: p,
        onEditorViewDestroy: f,
        onKeyDown: m,
      } = t,
      b = useRef(null),
      g = useRef(null),
      S = useRef(o),
      w = useRef(false),
      k = useRef(null),
      E = useRef(false),
      v = useRef(l),
      _ = useRef(u),
      V = useRef(p),
      W = useRef(f),
      L = useRef(m);
    ((v.current = l),
      (_.current = u),
      (V.current = p),
      (W.current = f),
      (L.current = m),
      (S.current = o));
    let $ = useCallback(() => {
        if (!b.current || w.current) return;
        let C = {
          state: Id(o, r, c, d),
          editable: () => !s,
          dispatchTransaction: (A) => {
            if (!g.current || w.current) return;
            let ee = g.current.state.apply(A);
            (g.current.updateState(ee),
              v.current?.(A, ee),
              (A.selectionSet || A.docChanged) && _.current?.(ee));
          },
          handleKeyDown: (A, ee) => L.current?.(A, ee) ?? false,
          handleDOMEvents: { focus: () => false, blur: () => false },
        };
        ((g.current = new EditorView(b.current, C)), V.current?.(g.current));
      }, [o, r, d, c, s]),
      z = useCallback(() => {
        g.current &&
          !w.current &&
          ((w.current = true),
          W.current?.(),
          g.current.destroy(),
          (g.current = null),
          (w.current = false));
      }, []);
    return (
      useEffect(() => ($(), () => z()), []),
      useEffect(() => {
        if (!g.current || w.current) return;
        let C = ((ee) => {
          if (!ee) return 'empty';
          let he = ee.package?.properties;
          return `${he?.created || ''}-${he?.modified || ''}-${he?.title || ''}`;
        })(o);
        if (E.current && C === k.current) return;
        ((E.current = true), (k.current = C));
        let A = Id(o, r, c, d);
        (g.current.updateState(A), _.current?.(A));
      }, [o, r, c, d]),
      useEffect(() => {
        g.current;
      }, [s]),
      useImperativeHandle(
        n,
        () => ({
          getState() {
            return g.current?.state ?? null;
          },
          getView() {
            return g.current ?? null;
          },
          getDocument() {
            return g.current ? mg(g.current.state, S.current) : null;
          },
          focus() {
            g.current?.focus();
          },
          blur() {
            g.current?.hasFocus() && g.current.dom.blur();
          },
          isFocused() {
            return g.current?.hasFocus() ?? false;
          },
          dispatch(K) {
            g.current && !w.current && g.current.dispatch(K);
          },
          executeCommand(K) {
            return g.current ? K(g.current.state, g.current.dispatch, g.current) : false;
          },
          undo() {
            return g.current ? undo(g.current.state, g.current.dispatch) : false;
          },
          redo() {
            return g.current ? redo(g.current.state, g.current.dispatch) : false;
          },
          canUndo() {
            return g.current ? undo(g.current.state) : false;
          },
          canRedo() {
            return g.current ? redo(g.current.state) : false;
          },
          setSelection(K, C) {
            if (!g.current) return;
            let { state: A, dispatch: ee } = g.current,
              he = A.doc.resolve(K),
              de = C !== void 0 ? A.doc.resolve(C) : he,
              we = TextSelection.between(he, de);
            ee(A.tr.setSelection(we));
          },
          setNodeSelection(K) {
            if (!g.current) return;
            let { state: C, dispatch: A } = g.current;
            try {
              let ee = NodeSelection.create(C.doc, K);
              A(C.tr.setSelection(ee));
            } catch {
              this.setSelection(K);
            }
          },
          setCellSelection(K, C) {
            if (!g.current) return;
            let { state: A, dispatch: ee } = g.current;
            try {
              let he = CellSelection.create(A.doc, K, C);
              ee(A.tr.setSelection(he));
            } catch {
              this.setSelection(K, C);
            }
          },
          scrollToSelection() {},
        }),
        []
      ),
      jsx('div', {
        ref: b,
        className: 'paged-editor__hidden-pm',
        style: { ...fg, width: a > 0 ? `${a}px` : void 0 },
      })
    );
  }),
  Fd = memo(gg);
var xg = '#000',
  Sg = 'rgba(66, 133, 244, 0.3)',
  kg = 2,
  wg = 530,
  Cg = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: 10,
    overflow: 'hidden',
  },
  Tg = (e, t, n, o) => ({
    position: 'absolute',
    left: e.x,
    top: e.y,
    width: n,
    height: e.height,
    backgroundColor: t,
    opacity: o ? 1 : 0,
    transition: 'opacity 0.05s ease-out',
    pointerEvents: 'none',
  }),
  vg = (e, t) => ({
    position: 'absolute',
    left: e.x,
    top: e.y,
    width: e.width,
    height: e.height,
    backgroundColor: t,
    pointerEvents: 'none',
  }),
  Rg = ({ position: e, color: t, width: n, blinkInterval: o, isFocused: r }) => {
    let [i, a] = useState(r),
      s = useRef(null);
    return (
      useEffect(
        () => (
          s.current && (window.clearInterval(s.current), (s.current = null)),
          r && o > 0
            ? (a(true),
              (s.current = window.setInterval(() => {
                a((l) => !l);
              }, o)))
            : a(false),
          () => {
            s.current && window.clearInterval(s.current);
          }
        ),
        [r, o]
      ),
      useEffect(() => {
        if (r)
          return (
            a(true),
            s.current && window.clearInterval(s.current),
            o > 0 &&
              (s.current = window.setInterval(() => {
                a((l) => !l);
              }, o)),
            () => {
              s.current && window.clearInterval(s.current);
            }
          );
      }, [e.x, e.y, r, o]),
      jsx('div', { style: Tg(e, t, n, i), 'data-testid': 'caret' })
    );
  },
  Pg = ({ rect: e, color: t, index: n }) =>
    jsx('div', {
      style: vg(e, t),
      'data-testid': `selection-rect-${n}`,
      'data-page-index': e.pageIndex,
    }),
  Bd = ({
    selectionRects: e,
    caretPosition: t,
    isFocused: n,
    readOnly: o = false,
    caretColor: r = xg,
    selectionColor: i = Sg,
    caretWidth: a = kg,
    blinkInterval: s = wg,
  }) => {
    if (o) return null;
    let l = e.length > 0,
      u = t !== null && !l;
    return jsxs('div', {
      style: Cg,
      'data-testid': 'selection-overlay',
      children: [
        l &&
          e.map((d, c) =>
            jsx(Pg, { rect: d, color: i, index: c }, `sel-${d.pageIndex}-${d.x}-${d.y}-${c}`)
          ),
        u && t && jsx(Rg, { position: t, color: r, width: a, blinkInterval: s, isFocused: n }),
      ],
    });
  };
var ts = 10,
  Tn = ts / 2,
  _o = 2,
  Nd = '#2563eb',
  Dd = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: 15,
    overflow: 'visible',
  },
  Eg = {
    position: 'absolute',
    border: `${_o}px solid ${Nd}`,
    pointerEvents: 'none',
    boxSizing: 'border-box',
  },
  Ig = {
    position: 'absolute',
    width: `${ts}px`,
    height: `${ts}px`,
    backgroundColor: Nd,
    border: '1px solid white',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
    boxSizing: 'border-box',
    pointerEvents: 'auto',
    zIndex: 16,
  },
  Fg = {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    color: 'white',
    fontSize: '11px',
    fontFamily: 'system-ui, sans-serif',
    padding: '2px 8px',
    borderRadius: '3px',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    zIndex: 20,
    transform: 'translateX(-50%)',
  },
  Lg = { nw: 'nw-resize', ne: 'ne-resize', se: 'se-resize', sw: 'sw-resize' };
function Bg(e, t, n, o, r, i) {
  let a = e.includes('w') ? -1 : 1,
    s = e.includes('n') ? -1 : 1,
    l = o + t * a,
    u = r + n * s;
  if (i) {
    let d = Math.max(l / o, u / r);
    ((l = o * d), (u = r * d));
  }
  return { width: Math.max(20, Math.min(2e3, l)), height: Math.max(20, Math.min(2e3, u)) };
}
function zd({
  imageInfo: e,
  zoom: t,
  isFocused: n,
  onResize: o,
  onResizeStart: r,
  onResizeEnd: i,
  onDragMove: a,
  onDragStart: s,
  onDragEnd: l,
}) {
  let [u, d] = useState(false),
    [c, p] = useState(false),
    [f, m] = useState(0),
    [b, g] = useState(0),
    [S, w] = useState(null),
    k = useRef(null),
    E = useRef(null),
    v = useRef(o),
    _ = useRef(r),
    V = useRef(i),
    W = useRef(a),
    L = useRef(s),
    $ = useRef(l);
  ((v.current = o),
    (_.current = r),
    (V.current = i),
    (W.current = a),
    (L.current = s),
    ($.current = l));
  let z = useRef(e),
    K = useRef(t);
  ((z.current = e), (K.current = t));
  let C = useCallback(() => {
    if (!e || !E.current) {
      w(null);
      return;
    }
    let M = E.current.offsetParent;
    if (!M) {
      w(null);
      return;
    }
    let I = M.getBoundingClientRect(),
      y = e.element.getBoundingClientRect();
    w({
      left: (y.left - I.left) / t,
      top: (y.top - I.top) / t,
      width: y.width / t,
      height: y.height / t,
    });
  }, [e, t]);
  (useEffect(() => {
    C();
  }, [C]),
    useEffect(() => {
      if (!e) return;
      let M =
        E.current?.closest('[style*="overflow"]') ?? E.current?.closest('.paged-editor__container');
      if (!M) return;
      let I = () => {
        (k.current && cancelAnimationFrame(k.current), (k.current = requestAnimationFrame(C)));
      };
      return (
        M.addEventListener('scroll', I, { passive: true }),
        window.addEventListener('resize', I, { passive: true }),
        () => {
          (M.removeEventListener('scroll', I),
            window.removeEventListener('resize', I),
            k.current && cancelAnimationFrame(k.current));
        }
      );
    }, [e, C]));
  let A = useCallback(
      (M, I) => {
        if (!e || !S) return;
        (I.preventDefault(), I.stopPropagation());
        let y = S.width,
          P = S.height,
          F = I.clientX,
          B = I.clientY,
          j = Math.round(y),
          Z = Math.round(P);
        (d(true), m(j), g(Z), _.current?.());
        let N = (G) => {
            let xe = K.current,
              R = (G.clientX - F) / xe,
              O = (G.clientY - B) / xe,
              D = !G.shiftKey,
              ie = Bg(M, R, O, y, P, D);
            ((j = Math.round(ie.width)),
              (Z = Math.round(ie.height)),
              m(j),
              g(Z),
              w((ue) => {
                if (!ue) return ue;
                let pe = { ...ue };
                return (
                  M.includes('w') && (pe.left = ue.left + (ue.width - ie.width)),
                  M.includes('n') && (pe.top = ue.top + (ue.height - ie.height)),
                  (pe.width = ie.width),
                  (pe.height = ie.height),
                  pe
                );
              }));
          },
          U = () => {
            (window.removeEventListener('mousemove', N),
              window.removeEventListener('mouseup', U),
              d(false));
            let G = z.current;
            (G && v.current?.(G.pmPos, j, Z), V.current?.());
          };
        (window.addEventListener('mousemove', N), window.addEventListener('mouseup', U));
      },
      [e, S]
    ),
    ee = useCallback(
      (M) => {
        if (!e || !S) return;
        (M.preventDefault(), M.stopPropagation());
        let I = 4,
          y = M.clientX,
          P = M.clientY,
          F = false,
          B = null,
          j = (N) => {
            let U = N.clientX - y,
              G = N.clientY - P;
            (!F && Math.sqrt(U * U + G * G) < I) ||
              (F ||
                ((F = true),
                p(true),
                L.current?.(),
                (B = document.createElement('div')),
                (B.style.cssText =
                  'position: fixed; pointer-events: none; z-index: 10000; opacity: 0.5; border: 2px dashed #2563eb; border-radius: 4px; background: rgba(37, 99, 235, 0.1);'),
                (B.style.width = `${S.width}px`),
                (B.style.height = `${S.height}px`),
                document.body.appendChild(B)),
              B &&
                ((B.style.left = `${N.clientX - S.width / 2}px`),
                (B.style.top = `${N.clientY - S.height / 2}px`)));
          },
          Z = (N) => {
            if (
              (window.removeEventListener('mousemove', j),
              window.removeEventListener('mouseup', Z),
              B && (B.remove(), (B = null)),
              p(false),
              F)
            ) {
              let U = z.current;
              (U && W.current?.(U.pmPos, N.clientX, N.clientY), $.current?.());
            }
          };
        (window.addEventListener('mousemove', j), window.addEventListener('mouseup', Z));
      },
      [e, S]
    );
  if (!!!(e && S && n))
    return jsx('div', {
      ref: E,
      style: { ...Dd, visibility: 'hidden' },
      className: 'image-selection-overlay',
    });
  let { left: de, top: we, width: Ce, height: Te } = S;
  return jsxs('div', {
    ref: E,
    style: Dd,
    className: 'image-selection-overlay',
    children: [
      jsx('div', {
        style: { ...Eg, left: de - _o, top: we - _o, width: Ce + _o * 2, height: Te + _o * 2 },
      }),
      jsx('div', {
        style: {
          position: 'absolute',
          left: de,
          top: we,
          width: Ce,
          height: Te,
          cursor: c ? 'grabbing' : 'grab',
          pointerEvents: 'auto',
          zIndex: 15,
        },
        onMouseDown: ee,
      }),
      jsx(Fi, { handle: 'nw', style: { left: de - Tn, top: we - Tn }, onMouseDown: A }),
      jsx(Fi, { handle: 'ne', style: { left: de + Ce - Tn, top: we - Tn }, onMouseDown: A }),
      jsx(Fi, { handle: 'se', style: { left: de + Ce - Tn, top: we + Te - Tn }, onMouseDown: A }),
      jsx(Fi, { handle: 'sw', style: { left: de - Tn, top: we + Te - Tn }, onMouseDown: A }),
      u &&
        jsxs('div', {
          style: { ...Fg, left: de + Ce / 2, top: we + Te + 12 },
          children: [f, ' \xD7 ', b],
        }),
    ],
  });
}
function Fi({ handle: e, style: t, onMouseDown: n }) {
  return jsx('div', {
    style: { ...Ig, ...t, cursor: Lg[e] },
    onMouseDown: (o) => n(e, o),
    'data-handle': e,
  });
}
function Ag(e, t, n, o) {
  let r = e - t - n,
    i = (o.count - 1) * o.gap;
  return (r - i) / o.count;
}
function ns(e) {
  let { pageSize: t, margins: n, columns: o = { count: 1, gap: 0 } } = e,
    r = [],
    i = [],
    a = n.top,
    s = t.h - n.bottom;
  if (s - a <= 0) throw new Error('Paginator: page size and margins yield no content area');
  let u = Ag(t.w, n.left, n.right, o);
  function d(E) {
    return n.left + E * (u + o.gap);
  }
  function c() {
    let E = r.length + 1,
      v = e.footnoteReservedHeights?.get(E) ?? 0,
      _ = s - v,
      V = {
        number: E,
        fragments: [],
        margins: { ...n },
        size: { ...t },
        footnoteReservedHeight: v > 0 ? v : void 0,
      },
      W = {
        page: V,
        cursorY: a,
        columnIndex: 0,
        topMargin: a,
        contentBottom: _,
        trailingSpacing: 0,
      };
    return (r.push(V), i.push(W), e.onNewPage && e.onNewPage(W), W);
  }
  function p() {
    return i.length === 0 ? c() : i[i.length - 1];
  }
  function f(E) {
    return E.contentBottom - E.cursorY;
  }
  function m(E, v) {
    let _ = v || p();
    return f(_) >= E;
  }
  function b(E) {
    return E.columnIndex < o.count - 1
      ? ((E.columnIndex += 1), (E.cursorY = E.topMargin), (E.trailingSpacing = 0), E)
      : c();
  }
  function g(E) {
    let v = p(),
      _ = Number.isFinite(E) && E > 0 ? E : 0,
      V = v.contentBottom - v.topMargin;
    if (_ > V) return (v.cursorY !== v.topMargin && (v = b(v)), v);
    for (; !m(_, v); ) v = b(v);
    return v;
  }
  function S(E, v, _ = 0, V = 0) {
    let W = Math.max(_, p().trailingSpacing),
      L = W + v,
      $ = g(L),
      K = $.cursorY === $.topMargin ? 0 : W,
      C = d($.columnIndex),
      A = $.cursorY + K;
    return (
      (E.x = C),
      (E.y = A),
      $.page.fragments.push(E),
      ($.cursorY = A + v),
      ($.trailingSpacing = V),
      { state: $, x: C, y: A }
    );
  }
  function w() {
    return c();
  }
  function k() {
    let E = p();
    return b(E);
  }
  return {
    pages: r,
    states: i,
    columnWidth: u,
    getCurrentState: p,
    getAvailableHeight: () => f(p()),
    fits: (E) => m(E),
    ensureFits: g,
    addFragment: S,
    forcePageBreak: w,
    forceColumnBreak: k,
    getColumnX: d,
  };
}
function os(e) {
  let t = new Map(),
    n = new Set();
  for (let o = 0; o < e.length; o++) {
    if (n.has(o)) continue;
    let r = e[o];
    if (r.kind !== 'paragraph' || !r.attrs?.keepNext) continue;
    let a = [o],
      s = o;
    for (let d = o + 1; d < e.length; d++) {
      let c = e[d];
      if (
        c.kind === 'sectionBreak' ||
        c.kind === 'pageBreak' ||
        c.kind === 'columnBreak' ||
        c.kind !== 'paragraph'
      )
        break;
      if (c.attrs?.keepNext) (a.push(d), (s = d), n.add(d));
      else break;
    }
    let l = s + 1,
      u = -1;
    if (l < e.length) {
      let d = e[l];
      d.kind !== 'sectionBreak' && d.kind !== 'pageBreak' && d.kind !== 'columnBreak' && (u = l);
    }
    t.set(o, { startIndex: o, endIndex: s, memberIndices: a, anchorIndex: u });
  }
  return t;
}
function rs(e, t, n) {
  let o = 0;
  for (let r of e.memberIndices) {
    let i = t[r],
      a = n[r];
    if (i.kind !== 'paragraph' || a.kind !== 'paragraph') continue;
    let s = i,
      l = a,
      u = s.attrs?.spacing?.before ?? 0;
    ((o += u), (o += l.totalHeight));
    let d = s.attrs?.spacing?.after ?? 0;
    o += d;
  }
  if (e.anchorIndex !== -1) {
    let r = n[e.anchorIndex];
    if (r?.kind === 'paragraph') {
      let i = r;
      i.lines.length > 0 && (o += i.lines[0].lineHeight);
    }
  }
  return o;
}
function is(e) {
  let t = new Set();
  for (let n of e.values())
    for (let o = 1; o < n.memberIndices.length; o++) t.add(n.memberIndices[o]);
  return t;
}
function as(e) {
  return e.kind !== 'paragraph' ? false : e.attrs?.pageBreakBefore === true;
}
var Dg = { w: 816, h: 1056 },
  uo = { top: 96, right: 96, bottom: 96, left: 96 };
function Od(e) {
  return e.attrs?.spacing?.before ?? 0;
}
function $d(e) {
  return e.attrs?.spacing?.after ?? 0;
}
function Hg(e) {
  for (let t = 0; t < e.length - 1; t++) {
    let n = e[t],
      o = e[t + 1];
    if (n.kind !== 'paragraph' || o.kind !== 'paragraph') continue;
    let r = n.attrs,
      i = o.attrs;
    r?.contextualSpacing &&
      i?.contextualSpacing &&
      r.styleId &&
      r.styleId === i.styleId &&
      (r.spacing && (r.spacing = { ...r.spacing, after: 0 }),
      i.spacing && (i.spacing = { ...i.spacing, before: 0 }));
  }
}
function Li(e, t, n = {}) {
  if (e.length !== t.length)
    throw new Error(
      `layoutDocument: expected one measure per block (blocks=${e.length}, measures=${t.length})`
    );
  let o = n.pageSize ?? Dg,
    r = {
      top: n.margins?.top ?? uo.top,
      right: n.margins?.right ?? uo.right,
      bottom: n.margins?.bottom ?? uo.bottom,
      left: n.margins?.left ?? uo.left,
      header: n.margins?.header ?? n.margins?.top ?? uo.top,
      footer: n.margins?.footer ?? n.margins?.bottom ?? uo.bottom,
    };
  (n.headerContentHeights, n.footerContentHeights, n.titlePage, n.evenAndOddHeaders);
  let i = { ...r },
    a = o.w - i.left - i.right;
  if (a <= 0) throw new Error('layoutDocument: page size and margins yield no content area');
  let s = ns({
    pageSize: o,
    margins: i,
    columns: n.columns,
    footnoteReservedHeights: n.footnoteReservedHeights,
  });
  Hg(e);
  let l = os(e),
    u = is(l);
  for (let d = 0; d < e.length; d++) {
    let c = e[d],
      p = t[d];
    as(c) && s.forcePageBreak();
    let f = l.get(d);
    if (f && !u.has(d)) {
      let m = rs(f, e, t),
        b = s.getCurrentState(),
        g = s.getAvailableHeight(),
        S = b.contentBottom - b.topMargin;
      m <= S && m > g && b.page.fragments.length > 0 && s.forcePageBreak();
    }
    switch (c.kind) {
      case 'paragraph':
        Ng(c, p, s, a);
        break;
      case 'table':
        c.floating ? Og(c, p, s, a) : zg(c, p, s);
        break;
      case 'image':
        $g(c, p, s);
        break;
      case 'pageBreak':
        s.forcePageBreak();
        break;
      case 'columnBreak':
        s.forceColumnBreak();
        break;
      case 'sectionBreak':
        _g(c, s);
        break;
    }
  }
  return (
    s.pages.length === 0 && s.getCurrentState(),
    { pageSize: o, pages: s.pages, columns: n.columns, pageGap: n.pageGap }
  );
}
function Ng(e, t, n, o) {
  if (t.kind !== 'paragraph') throw new Error('layoutParagraph: expected paragraph measure');
  let r = t.lines;
  if (r.length === 0) {
    let l = Od(e),
      u = $d(e),
      d = n.getCurrentState(),
      c = {
        kind: 'paragraph',
        blockId: e.id,
        x: n.getColumnX(d.columnIndex),
        y: d.cursorY + l,
        width: o,
        height: 0,
        fromLine: 0,
        toLine: 0,
        pmStart: e.pmStart,
        pmEnd: e.pmEnd,
      };
    n.addFragment(c, 0, l, u);
    return;
  }
  let i = Od(e),
    a = $d(e),
    s = 0;
  for (; s < r.length; ) {
    let l = n.getCurrentState(),
      u = n.getAvailableHeight(),
      d = 0,
      c = 0;
    for (let w = s; w < r.length; w++) {
      let k = r[w].lineHeight,
        E = d + k;
      if ((s === 0 && w === s ? E + i : E) <= u || c === 0) ((d = E), c++);
      else break;
    }
    let p = s === 0,
      f = s + c >= r.length,
      m = p ? i : 0,
      b = f ? a : 0,
      g = {
        kind: 'paragraph',
        blockId: e.id,
        x: n.getColumnX(l.columnIndex),
        y: 0,
        width: o,
        height: d,
        fromLine: s,
        toLine: s + c,
        pmStart: e.pmStart,
        pmEnd: e.pmEnd,
        continuesFromPrev: !p,
        continuesOnNext: !f,
      },
      S = n.addFragment(g, d, m, b);
    ((g.y = S.y), (s += c), s < r.length && n.ensureFits(r[s].lineHeight));
  }
}
function zg(e, t, n) {
  if (t.kind !== 'table') throw new Error('layoutTable: expected table measure');
  let o = t.rows;
  if (o.length === 0) return;
  let r = 0;
  for (; r < o.length; ) {
    let i = n.getCurrentState(),
      a = n.getAvailableHeight(),
      s = 0,
      l = 0;
    for (let m = r; m < o.length; m++) {
      let b = o[m].height,
        g = s + b;
      if (g <= a || l === 0) ((s = g), l++);
      else break;
    }
    let u = r === 0,
      d = r + l >= o.length,
      c = n.getColumnX(i.columnIndex);
    e.justification === 'center'
      ? (c = c + (n.columnWidth - t.totalWidth) / 2)
      : e.justification === 'right' && (c = c + n.columnWidth - t.totalWidth);
    let p = {
        kind: 'table',
        blockId: e.id,
        x: c,
        y: 0,
        width: t.totalWidth,
        height: s,
        fromRow: r,
        toRow: r + l,
        pmStart: e.pmStart,
        pmEnd: e.pmEnd,
        continuesFromPrev: !u,
        continuesOnNext: !d,
      },
      f = n.addFragment(p, s, 0, 0);
    ((p.y = f.y), (p.x = c), (r += l), r < o.length && n.ensureFits(o[r].height));
  }
}
function Og(e, t, n, o) {
  if (t.kind !== 'table') throw new Error('layoutFloatingTable: expected table measure');
  let r = n.getCurrentState(),
    i = e.floating,
    a = r.page,
    s = a.margins,
    l = t.totalWidth,
    u = t.totalHeight,
    d = a.size.h - s.top - s.bottom,
    c = s.left,
    p = s.top;
  (i?.horzAnchor === 'page' && (c = 0), i?.vertAnchor === 'page' && (p = 0));
  let f = n.getColumnX(r.columnIndex);
  if (i?.tblpX !== void 0) f = c + i.tblpX;
  else if (i?.tblpXSpec) {
    let k = i.tblpXSpec;
    k === 'left' || k === 'inside'
      ? (f = c)
      : k === 'right' || k === 'outside'
        ? (f = c + o - l)
        : k === 'center' && (f = c + (o - l) / 2);
  } else
    e.justification === 'center'
      ? (f = c + (o - l) / 2)
      : e.justification === 'right' && (f = c + o - l);
  let m = r.cursorY,
    b = false;
  if (i?.tblpY !== void 0) ((m = p + i.tblpY), (b = true));
  else if (i?.tblpYSpec) {
    b = true;
    let k = i.tblpYSpec;
    k === 'top'
      ? (m = p)
      : k === 'bottom'
        ? (m = p + d - u)
        : k === 'center' && (m = p + (d - u) / 2);
  }
  b || (m = n.ensureFits(u).cursorY);
  let g = s.left,
    S = s.left + o - l;
  Number.isFinite(S) && (f = Math.max(g, Math.min(f, S)));
  let w = {
    kind: 'table',
    blockId: e.id,
    x: f,
    y: m,
    width: l,
    height: u,
    fromRow: 0,
    toRow: e.rows.length,
    pmStart: e.pmStart,
    pmEnd: e.pmEnd,
    isFloating: true,
  };
  r.page.fragments.push(w);
}
function $g(e, t, n) {
  if (t.kind !== 'image') throw new Error('layoutImage: expected image measure');
  if (e.anchor?.isAnchored) {
    Wg(e, t, n);
    return;
  }
  let o = n.ensureFits(t.height),
    r = {
      kind: 'image',
      blockId: e.id,
      x: n.getColumnX(o.columnIndex),
      y: 0,
      width: t.width,
      height: t.height,
      pmStart: e.pmStart,
      pmEnd: e.pmEnd,
    },
    i = n.addFragment(r, t.height, 0, 0);
  r.y = i.y;
}
function Wg(e, t, n) {
  let o = n.getCurrentState(),
    r = e.anchor,
    i = r.offsetH ?? n.getColumnX(o.columnIndex),
    a = r.offsetV ?? o.cursorY,
    s = {
      kind: 'image',
      blockId: e.id,
      x: i,
      y: a,
      width: t.width,
      height: t.height,
      pmStart: e.pmStart,
      pmEnd: e.pmEnd,
      isAnchored: true,
      zIndex: r.behindDoc ? -1 : 1,
    };
  o.page.fragments.push(s);
}
function _g(e, t) {
  switch (e.type ?? 'continuous') {
    case 'nextPage':
      t.forcePageBreak();
      break;
    case 'evenPage': {
      t.forcePageBreak().page.number % 2 !== 0 && t.forcePageBreak();
      break;
    }
    case 'oddPage': {
      t.forcePageBreak().page.number % 2 === 0 && t.forcePageBreak();
      break;
    }
  }
}
var Vg = 'Calibri';
function ss(e, t, n) {
  if (!n || t <= n) return { width: e, height: t };
  let o = n / t;
  return { width: Math.round(e * o), height: n };
}
var jg = 11;
function pt(e) {
  return (e / 1440) * 96;
}
var Ug = 0;
function po() {
  return `block-${++Ug}`;
}
function Gg(e, t) {
  let n = [];
  for (let o = 0; o <= t; o += 1) {
    let r = e[o] ?? 0;
    if (r <= 0) break;
    n.push(r);
  }
  return n.length === 0 ? '1.' : `${n.join('.')}.`;
}
function Bi(e, t) {
  let n$1 = {};
  for (let o of e)
    switch (o.type.name) {
      case 'bold':
        n$1.bold = true;
        break;
      case 'italic':
        n$1.italic = true;
        break;
      case 'underline': {
        let r = o.attrs;
        if (r.style || r.color) {
          let i = r.color ? a(r.color, t) : void 0;
          n$1.underline = { style: r.style, color: i };
        } else n$1.underline = true;
        break;
      }
      case 'strike':
        n$1.strike = true;
        break;
      case 'textColor': {
        let r = o.attrs;
        (r.themeColor || r.rgb) &&
          (n$1.color = a(
            {
              rgb: r.rgb,
              themeColor: r.themeColor,
              themeTint: r.themeTint,
              themeShade: r.themeShade,
            },
            t
          ));
        break;
      }
      case 'highlight':
        n$1.highlight = n(o.attrs.color);
        break;
      case 'fontSize': {
        let r = o.attrs;
        n$1.fontSize = r.size / 2;
        break;
      }
      case 'fontFamily': {
        let r = o.attrs;
        n$1.fontFamily = r.ascii || r.hAnsi;
        break;
      }
      case 'superscript':
        n$1.superscript = true;
        break;
      case 'subscript':
        n$1.subscript = true;
        break;
      case 'hyperlink': {
        let r = o.attrs;
        n$1.hyperlink = { href: r.href, tooltip: r.tooltip };
        break;
      }
      case 'footnoteRef': {
        let r = o.attrs,
          i = typeof r.id == 'string' ? parseInt(r.id, 10) : r.id;
        r.noteType === 'endnote' ? (n$1.endnoteRefId = i) : (n$1.footnoteRefId = i);
        break;
      }
      case 'comment': {
        let r = o.attrs.commentId;
        r && (n$1.commentIds || (n$1.commentIds = []), n$1.commentIds.push(r));
        break;
      }
      case 'insertion':
        ((n$1.isInsertion = true),
          (n$1.changeAuthor = o.attrs.author),
          (n$1.changeDate = o.attrs.date),
          (n$1.changeRevisionId = o.attrs.revisionId));
        break;
      case 'deletion':
        ((n$1.isDeletion = true),
          (n$1.changeAuthor = o.attrs.author),
          (n$1.changeDate = o.attrs.date),
          (n$1.changeRevisionId = o.attrs.revisionId));
        break;
    }
  return n$1;
}
function Kg(e, t, n) {
  let o = [],
    r = t + 1,
    i = n.theme;
  return (
    e.forEach((a, s) => {
      let l = r + s;
      if (a.isText && a.text) {
        let u = Bi(a.marks, i),
          d = { kind: 'text', text: a.text, ...u, pmStart: l, pmEnd: l + a.nodeSize };
        o.push(d);
      } else if (a.type.name === 'hardBreak') {
        let u = { kind: 'lineBreak', pmStart: l, pmEnd: l + a.nodeSize };
        o.push(u);
      } else if (a.type.name === 'tab') {
        let d = { kind: 'tab', ...Bi(a.marks, i), pmStart: l, pmEnd: l + a.nodeSize };
        o.push(d);
      } else if (a.type.name === 'image') {
        let u = a.attrs,
          d = ss(u.width || 100, u.height || 100, n.pageContentHeight),
          c = {
            kind: 'image',
            src: u.src,
            width: d.width,
            height: d.height,
            alt: u.alt,
            transform: u.transform,
            wrapType: u.wrapType,
            displayMode: u.displayMode,
            cssFloat: u.cssFloat,
            distTop: u.distTop,
            distBottom: u.distBottom,
            distLeft: u.distLeft,
            distRight: u.distRight,
            position: u.position,
            pmStart: l,
            pmEnd: l + a.nodeSize,
          };
        o.push(c);
      } else if (a.type.name === 'field') {
        let u = a.attrs.fieldType,
          c = {
            kind: 'field',
            fieldType:
              u === 'PAGE'
                ? 'PAGE'
                : u === 'NUMPAGES'
                  ? 'NUMPAGES'
                  : u === 'DATE'
                    ? 'DATE'
                    : u === 'TIME'
                      ? 'TIME'
                      : 'OTHER',
            fallback: a.attrs.displayText || '',
            pmStart: l,
            pmEnd: l + a.nodeSize,
          };
        o.push(c);
      } else if (a.type.name === 'math') {
        let d = {
          kind: 'text',
          text: a.attrs.plainText || '[equation]',
          italic: true,
          fontFamily: 'Cambria Math',
          pmStart: l,
          pmEnd: l + a.nodeSize,
        };
        o.push(d);
      } else if (a.type.name === 'sdt') {
        let u = l + 1;
        a.forEach((d, c) => {
          let p = u + c;
          if (d.isText && d.text) {
            let f = Bi(d.marks, i),
              m = { kind: 'text', text: d.text, ...f, pmStart: p, pmEnd: p + d.nodeSize };
            o.push(m);
          } else if (d.type.name === 'hardBreak') {
            let f = { kind: 'lineBreak', pmStart: p, pmEnd: p + d.nodeSize };
            o.push(f);
          } else if (d.type.name === 'tab') {
            let m = { kind: 'tab', ...Bi(d.marks, i), pmStart: p, pmEnd: p + d.nodeSize };
            o.push(m);
          } else if (d.type.name === 'image') {
            let f = d.attrs,
              m = ss(f.width || 100, f.height || 100, n.pageContentHeight),
              b = {
                kind: 'image',
                src: f.src,
                width: m.width,
                height: m.height,
                alt: f.alt,
                transform: f.transform,
                wrapType: f.wrapType,
                displayMode: f.displayMode,
                cssFloat: f.cssFloat,
                distTop: f.distTop,
                distBottom: f.distBottom,
                distLeft: f.distLeft,
                distRight: f.distRight,
                position: f.position,
                pmStart: p,
                pmEnd: p + d.nodeSize,
              };
            o.push(b);
          }
        });
      }
    }),
    o
  );
}
function Yg(e) {
  let t = {};
  if (e.alignment) {
    let a = e.alignment;
    a === 'both' || a === 'distribute'
      ? (t.alignment = 'justify')
      : a === 'left'
        ? (t.alignment = 'left')
        : a === 'center'
          ? (t.alignment = 'center')
          : a === 'right' && (t.alignment = 'right');
  }
  (e.spaceBefore != null || e.spaceAfter != null || e.lineSpacing != null) &&
    ((t.spacing = {}),
    e.spaceBefore != null && (t.spacing.before = pt(e.spaceBefore)),
    e.spaceAfter != null && (t.spacing.after = pt(e.spaceAfter)),
    e.lineSpacing != null &&
      (e.lineSpacingRule === 'exact' || e.lineSpacingRule === 'atLeast'
        ? ((t.spacing.line = pt(e.lineSpacing)),
          (t.spacing.lineUnit = 'px'),
          (t.spacing.lineRule = e.lineSpacingRule))
        : ((t.spacing.line = e.lineSpacing / 240),
          (t.spacing.lineUnit = 'multiplier'),
          (t.spacing.lineRule = 'auto'))));
  let n = e.indentLeft,
    o = e.indentFirstLine,
    r = e.hangingIndent;
  if (
    (e.numPr?.numId &&
      n == null &&
      ((n = ((e.numPr.ilvl ?? 0) + 1) * 720), o == null && ((o = -360), (r = true))),
    (n != null || e.indentRight != null || o != null) &&
      ((t.indent = {}),
      n != null && (t.indent.left = pt(n)),
      e.indentRight != null && (t.indent.right = pt(e.indentRight)),
      o != null && (r ? (t.indent.hanging = Math.abs(pt(o))) : (t.indent.firstLine = pt(o)))),
    e.styleId && (t.styleId = e.styleId),
    e.borders)
  ) {
    let a = e.borders;
    t.borders = {};
    let s = (l) => {
      if (!l || l.style === 'none' || l.style === 'nil') return;
      let u = l.size ? Math.max(1, Math.round((l.size / 8) * 1.333)) : 1,
        d = '#000000';
      return (
        l.color?.rgb && (d = `#${l.color.rgb}`),
        { style: l.style || 'single', width: u, color: d }
      );
    };
    (a.top && (t.borders.top = s(a.top)),
      a.bottom && (t.borders.bottom = s(a.bottom)),
      a.left && (t.borders.left = s(a.left)),
      a.right && (t.borders.right = s(a.right)),
      a.between && (t.borders.between = s(a.between)),
      !t.borders.top &&
        !t.borders.bottom &&
        !t.borders.left &&
        !t.borders.right &&
        !t.borders.between &&
        delete t.borders);
  }
  (e.shading?.fill?.rgb && (t.shading = `#${e.shading.fill.rgb}`),
    e.tabs &&
      e.tabs.length > 0 &&
      (t.tabs = e.tabs.map((a) => ({ val: qg(a.alignment), pos: a.position, leader: a.leader }))),
    e.pageBreakBefore && (t.pageBreakBefore = true),
    e.keepNext && (t.keepNext = true),
    e.keepLines && (t.keepLines = true),
    e.contextualSpacing && (t.contextualSpacing = true),
    e.styleId && (t.styleId = e.styleId),
    e.numPr && (t.numPr = { numId: e.numPr.numId, ilvl: e.numPr.ilvl }),
    e.listMarker && (t.listMarker = e.listMarker),
    e.listIsBullet != null && (t.listIsBullet = e.listIsBullet));
  let i = e.defaultTextFormatting;
  return (
    i &&
      (i.fontSize != null && (t.defaultFontSize = i.fontSize / 2),
      i.fontFamily && (t.defaultFontFamily = i.fontFamily.ascii || i.fontFamily.hAnsi)),
    t
  );
}
function qg(e) {
  switch (e) {
    case 'left':
      return 'start';
    case 'right':
      return 'end';
    case 'center':
      return 'center';
    case 'decimal':
      return 'decimal';
    case 'bar':
      return 'bar';
    case 'clear':
      return 'clear';
    case 'num':
      return 'start';
    default:
      return 'start';
  }
}
function Wd(e, t, n) {
  let o = e.attrs,
    r = Kg(e, t, n),
    i = Yg(o);
  return { kind: 'paragraph', id: po(), runs: r, attrs: i, pmStart: t, pmEnd: t + e.nodeSize };
}
function Xg(e) {
  return Math.max(1, Math.round((e / 8) * 1.333));
}
var Zg = {
  single: 'solid',
  double: 'double',
  dotted: 'dotted',
  dashed: 'dashed',
  thick: 'solid',
  dashSmallGap: 'dashed',
  dotDash: 'dashed',
  dotDotDash: 'dotted',
  triple: 'double',
  wave: 'solid',
  doubleWave: 'double',
  threeDEmboss: 'ridge',
  threeDEngrave: 'groove',
  outset: 'outset',
  inset: 'inset',
};
function Jg(e) {
  let t = e.borders;
  if (!t) return;
  let n = {},
    o = ['top', 'bottom', 'left', 'right'];
  for (let r of o) {
    let i = t[r];
    if (!i || !i.style || i.style === 'none' || i.style === 'nil') {
      n[r] = { width: 0, style: 'none' };
      continue;
    }
    let a = { style: Zg[i.style] || 'solid' };
    (i.color?.rgb && (a.color = `#${i.color.rgb}`), i.size && (a.width = Xg(i.size)), (n[r] = a));
  }
  return Object.keys(n).length > 0 ? n : void 0;
}
function Qg(e, t, n) {
  let o = [],
    r = t + 1;
  e.forEach((l) => {
    (l.type.name === 'paragraph'
      ? o.push(Wd(l, r, n))
      : l.type.name === 'table' && o.push(_d(l, r, n)),
      (r += l.nodeSize));
  });
  let i = e.attrs,
    a = i.margins,
    s = {
      top: a?.top != null ? pt(a.top) : 1,
      right: a?.right != null ? pt(a.right) : 7,
      bottom: a?.bottom != null ? pt(a.bottom) : 1,
      left: a?.left != null ? pt(a.left) : 7,
    };
  return {
    id: po(),
    blocks: o,
    colSpan: i.colspan,
    rowSpan: i.rowspan,
    width: i.width ? pt(i.width) : void 0,
    verticalAlign: i.verticalAlign,
    background: i.backgroundColor ? `#${i.backgroundColor}` : void 0,
    borders: Jg(i),
    padding: s,
  };
}
function eh(e, t, n) {
  let o = [],
    r = t + 1;
  e.forEach((a) => {
    ((a.type.name === 'tableCell' || a.type.name === 'tableHeader') && o.push(Qg(a, r, n)),
      (r += a.nodeSize));
  });
  let i = e.attrs;
  return {
    id: po(),
    cells: o,
    height: i.height ? pt(i.height) : void 0,
    heightRule: i.heightRule ?? void 0,
    isHeader: i.isHeader,
  };
}
function _d(e, t, n) {
  let o = [],
    r = t + 1;
  e.forEach((p) => {
    (p.type.name === 'tableRow' && o.push(eh(p, r, n)), (r += p.nodeSize));
  });
  let a = e.attrs.columnWidths?.map(pt),
    s = e.attrs.width,
    l = e.attrs.widthType;
  if (!a && o.length > 0) {
    let f = o[0].cells.map((m) => m.width);
    f.every((m) => m !== void 0 && m > 0) && (a = f);
  }
  let u = e.attrs.justification,
    d = e.attrs.floating,
    c = d
      ? {
          horzAnchor: d.horzAnchor,
          vertAnchor: d.vertAnchor,
          tblpX: d.tblpX !== void 0 ? pt(d.tblpX) : void 0,
          tblpXSpec: d.tblpXSpec,
          tblpY: d.tblpY !== void 0 ? pt(d.tblpY) : void 0,
          tblpYSpec: d.tblpYSpec,
          topFromText: d.topFromText !== void 0 ? pt(d.topFromText) : void 0,
          bottomFromText: d.bottomFromText !== void 0 ? pt(d.bottomFromText) : void 0,
          leftFromText: d.leftFromText !== void 0 ? pt(d.leftFromText) : void 0,
          rightFromText: d.rightFromText !== void 0 ? pt(d.rightFromText) : void 0,
        }
      : void 0;
  return {
    kind: 'table',
    id: po(),
    rows: o,
    columnWidths: a,
    width: s,
    widthType: l,
    justification: u,
    floating: c,
    pmStart: t,
    pmEnd: t + e.nodeSize,
  };
}
function th(e, t, n) {
  let o = e.attrs,
    r = o.wrapType,
    i = r === 'behind' || r === 'inFront',
    a = ss(o.width || 100, o.height || 100, n);
  return {
    kind: 'image',
    id: po(),
    src: o.src,
    width: a.width,
    height: a.height,
    alt: o.alt,
    transform: o.transform,
    anchor: i
      ? { isAnchored: true, offsetH: o.distLeft, offsetV: o.distTop, behindDoc: r === 'behind' }
      : void 0,
    pmStart: t,
    pmEnd: t + e.nodeSize,
  };
}
function Vd(e, t = {}) {
  let n = { ...t, defaultFont: t.defaultFont ?? Vg, defaultSize: t.defaultSize ?? jg },
    o = [],
    r = 0,
    i = new Map();
  return (
    e.forEach((a, s) => {
      let l = r + s;
      switch (a.type.name) {
        case 'paragraph':
          {
            let u = Wd(a, l, n),
              d = a.attrs;
            if (d.numPr && !d.listMarker) {
              let c = d.numPr.numId;
              if (c == null || c === 0) break;
              let p = d.numPr.ilvl ?? 0,
                f = i.get(c) ?? new Array(9).fill(0);
              f[p] = (f[p] ?? 0) + 1;
              for (let b = p + 1; b < f.length; b += 1) f[b] = 0;
              i.set(c, f);
              let m = d.listIsBullet ? '\u2022' : Gg(f, p);
              u.attrs = { ...u.attrs, listMarker: m };
            }
            o.push(u);
          }
          break;
        case 'table':
          o.push(_d(a, l, n));
          break;
        case 'image':
          o.push(th(a, l, n.pageContentHeight));
          break;
        case 'horizontalRule':
        case 'pageBreak': {
          let u = { kind: 'pageBreak', id: po(), pmStart: l, pmEnd: l + a.nodeSize };
          o.push(u);
          break;
        }
      }
    }),
    o
  );
}
var pn = 11,
  Vo = 'Calibri',
  Ai = 1,
  fo = 0.5;
function jd(e) {
  return {
    fontFamily: e.fontFamily ?? Vo,
    fontSize: e.fontSize ?? pn,
    bold: e.bold,
    italic: e.italic,
    letterSpacing: e.letterSpacing,
  };
}
function Yd(e, t, n) {
  let o = h$1(e),
    r = n?.ascent ?? o * 0.8,
    i = n?.descent ?? o * 0.2,
    a = n?.singleLineRatio ?? 1.15,
    s = o * a,
    l;
  if (t?.lineRule === 'exact' && t.line !== void 0) l = t.line;
  else if (t?.lineRule === 'atLeast' && t.line !== void 0) {
    let u = s * Ai;
    l = Math.max(t.line, u);
  } else
    t?.line !== void 0 && t?.lineUnit === 'multiplier'
      ? (l = s * t.line)
      : t?.line !== void 0 && t?.lineUnit === 'px'
        ? (l = t.line)
        : (l = s * Ai);
  return { ascent: r, descent: i, lineHeight: l };
}
function Ud(e, t, n) {
  let o = d$2({ fontSize: e, fontFamily: n ?? Vo });
  return Yd(e, t, o);
}
function Gd(e) {
  return e.kind === 'text';
}
function oh(e) {
  return e.kind === 'tab';
}
function rh(e) {
  return e.kind === 'image';
}
function ih(e) {
  return e.kind === 'lineBreak';
}
function ah(e) {
  return e.kind === 'field';
}
function sh(e) {
  return !e.text || e.text.length === 0;
}
function lh(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let o = e[n];
    (o === ' ' || o === '-' || o === '	') && t.push(n + 1);
  }
  return t;
}
var ch = 48;
function Kd(e, t, n, o) {
  if (!n || n.length === 0) return { leftMargin: 0, rightMargin: 0 };
  let r = 0,
    i = 0,
    a = o + e,
    s = a + t;
  for (let l of n)
    s > l.topY &&
      a < l.bottomY &&
      ((r = Math.max(r, l.leftMargin)), (i = Math.max(i, l.rightMargin)));
  return { leftMargin: r, rightMargin: i };
}
function jo(e, t, n) {
  let o = e.runs,
    r = e.attrs,
    i = r?.spacing,
    a = n?.floatingZones,
    s = n?.paragraphYOffset ?? 0,
    l = r?.indent,
    u = l?.left ?? 0,
    d = l?.right ?? 0,
    c = (l?.firstLine ?? 0) - (l?.hanging ?? 0),
    p = Math.max(1, t - u - d),
    f = Math.max(1, p - c),
    m = 0,
    b = h$1(pn) * Ai,
    g = Kd(0, b, a, s),
    S = Math.max(1, f - g.leftMargin - g.rightMargin),
    w = [];
  if (o.length === 0) {
    let L = r?.defaultFontSize ?? pn,
      $ = r?.defaultFontFamily ?? Vo,
      z = Ud(L, i, $);
    return (
      w.push({ fromRun: 0, fromChar: 0, toRun: 0, toChar: 0, width: 0, ...z }),
      { kind: 'paragraph', lines: w, totalHeight: z.lineHeight }
    );
  }
  if (o.length === 1 && Gd(o[0]) && sh(o[0])) {
    let L = o[0],
      $ = L.fontSize ?? r?.defaultFontSize ?? pn,
      z = L.fontFamily ?? r?.defaultFontFamily ?? Vo,
      K = Ud($, i, z);
    return (
      w.push({ fromRun: 0, fromChar: 0, toRun: 0, toChar: 0, width: 0, ...K }),
      { kind: 'paragraph', lines: w, totalHeight: K.lineHeight }
    );
  }
  let k = {
      fromRun: 0,
      fromChar: 0,
      toRun: 0,
      toChar: 0,
      width: 0,
      maxFontSize: pn,
      maxFontMetrics: null,
      maxImageHeightPx: 0,
      availableWidth: S,
      leftOffset: g.leftMargin,
      rightOffset: g.rightMargin,
    },
    E = () => {
      let L = Yd(k.maxFontSize, i, k.maxFontMetrics),
        $ = { ...L };
      k.maxImageHeightPx > $.lineHeight &&
        (($.lineHeight = k.maxImageHeightPx),
        ($.ascent = k.maxImageHeightPx * 0.8),
        ($.descent = k.maxImageHeightPx * 0.2));
      let z = {
        fromRun: k.fromRun,
        fromChar: k.fromChar,
        toRun: k.toRun,
        toChar: k.toChar,
        width: k.width,
        ...$,
      };
      (k.leftOffset > 0 && (z.leftOffset = k.leftOffset),
        k.rightOffset > 0 && (z.rightOffset = k.rightOffset),
        w.push(z),
        (m += L.lineHeight));
    },
    v = (L, $) => {
      E();
      let z = h$1(pn) * Ai,
        K = Kd(m, z, a, s),
        C = Math.max(1, p - K.leftMargin - K.rightMargin);
      k = {
        fromRun: L,
        fromChar: $,
        toRun: L,
        toChar: $,
        width: 0,
        maxFontSize: pn,
        maxFontMetrics: null,
        maxImageHeightPx: 0,
        availableWidth: C,
        leftOffset: K.leftMargin,
        rightOffset: K.rightMargin,
      };
    },
    _ = (L) => {
      let $ = L.fontSize ?? pn;
      (!k.maxFontMetrics || $ > k.maxFontSize) &&
        ((k.maxFontSize = $), (k.maxFontMetrics = d$2(L)));
    };
  for (let L = 0; L < o.length; L++) {
    let $ = o[L];
    if (ih($)) {
      ((k.toRun = L), (k.toChar = 0), v(L + 1, 0));
      continue;
    }
    if (oh($)) {
      let z = jd($);
      _(z);
      let K = $.width ?? ch;
      (k.width + K > k.availableWidth + fo && (v(L, 0), _(z)),
        (k.width += K),
        (k.toRun = L),
        (k.toChar = 1));
      continue;
    }
    if (rh($)) {
      let z = $.wrapType,
        K = $.displayMode === 'float' || (z && ['square', 'tight', 'through'].includes(z));
      if ($.position && K) {
        ((k.toRun = L), (k.toChar = 1));
        continue;
      }
      if (z === 'topAndBottom' || $.displayMode === 'block') {
        k.width > 0 && v(L, 0);
        let ee = $.height,
          he = $.distTop ?? 6,
          de = $.distBottom ?? 6;
        ((k.toRun = L), (k.toChar = 1), (k.maxImageHeightPx = ee + he + de), v(L + 1, 0));
        continue;
      }
      let C = $.width,
        A = $.height;
      (A > k.maxImageHeightPx && (k.maxImageHeightPx = A),
        k.width + C > k.availableWidth + fo && v(L, 0),
        (k.width += C),
        (k.toRun = L),
        (k.toChar = 1));
      continue;
    }
    if (ah($)) {
      let z = $.fallback || '1',
        K = {
          fontFamily: $.fontFamily ?? Vo,
          fontSize: $.fontSize ?? pn,
          bold: $.bold,
          italic: $.italic,
        };
      _(K);
      let C = e$2(z, K);
      (k.width > 0 && k.width + C > k.availableWidth + fo && (v(L, 0), _(K)),
        (k.width += C),
        (k.toRun = L),
        (k.toChar = 1));
      continue;
    }
    if (Gd($)) {
      let z = $,
        K = z.text,
        C = jd(z);
      if ((_(C), !K || K.length === 0)) {
        ((k.toRun = L), (k.toChar = 0));
        continue;
      }
      let A = lh(K),
        ee = 0;
      for (; ee < K.length; ) {
        let he = K.length;
        for (let Ce of A)
          if (Ce > ee) {
            he = Ce;
            break;
          }
        let de = K.slice(ee, he),
          we = e$2(de, C);
        if (we > k.availableWidth + fo) {
          k.width > 0 && (v(L, ee), _(C));
          let { charWidths: Ce } = f$2(de, C),
            Te = 0;
          for (; Te < de.length; ) {
            let M = 0,
              I = Te;
            for (; I < de.length; ) {
              let y = Ce[I] ?? 0;
              if (M + y > k.availableWidth + fo) break;
              ((M += y), (I += 1));
            }
            (I === Te && ((I = Math.min(de.length, Te + 1)), (M = Ce[Te] ?? 0)),
              (k.width += M),
              (k.toRun = L),
              (k.toChar = ee + I),
              (Te = I),
              Te < de.length && (v(L, ee + Te), _(C)));
          }
          ee = he;
          continue;
        }
        (k.width > 0 && k.width + we > k.availableWidth + fo && (v(L, ee), _(C)),
          (k.width += we),
          (k.toRun = L),
          (k.toChar = he),
          (ee = he));
      }
    }
  }
  E();
  let W = w.reduce((L, $) => L + $.lineHeight, 0);
  return (
    i?.before && (W += i.before),
    i?.after && (W += i.after),
    { kind: 'paragraph', lines: w, totalHeight: W }
  );
}
var dh = new Map();
function qd() {
  dh.clear();
}
var uh = new Map();
function Xd() {
  uh.clear();
}
var ph = 5e3,
  fh = ph,
  Rn = new Map();
function ls(e) {
  let t = [];
  for (let o of e.runs)
    o.kind === 'text'
      ? t.push(`t:${o.text}|${o.fontFamily}|${o.fontSize}|${o.bold}|${o.italic}`)
      : o.kind === 'tab'
        ? t.push(`tab:${o.width}`)
        : o.kind === 'image'
          ? t.push(`img:${o.width}x${o.height}`)
          : o.kind === 'lineBreak' && t.push('br');
  let n = e.attrs;
  return (
    n &&
      (n.alignment && t.push(`align:${n.alignment}`),
      n.indent &&
        t.push(
          `indent:${n.indent.left}|${n.indent.right}|${n.indent.firstLine}|${n.indent.hanging}`
        ),
      n.spacing &&
        t.push(
          `spacing:${n.spacing.before}|${n.spacing.after}|${n.spacing.line}|${n.spacing.lineRule}`
        )),
    t.join('||')
  );
}
function mh() {
  for (; Rn.size > fh; ) {
    let e = Rn.keys().next().value;
    if (e === void 0) break;
    Rn.delete(e);
  }
}
function cs(e, t) {
  let n = ls(e),
    o = Rn.get(n);
  if (o !== void 0 && o.maxWidth === t) return (Rn.delete(n), Rn.set(n, o), o.measure);
}
function ds(e, t, n) {
  let o = ls(e);
  (Rn.set(o, { measure: n, maxWidth: t }), mh());
}
function Zd() {
  Rn.clear();
}
function us() {
  (qd(), Xd(), Zd());
}
function gh(e) {
  return {
    fontFamily: e.fontFamily ?? 'Arial',
    fontSize: e.fontSize ?? 12,
    bold: e.bold,
    italic: e.italic,
    letterSpacing: e.letterSpacing,
  };
}
function hh(e, t) {
  let n = [];
  for (let o = t.fromRun; o <= t.toRun && o < e.runs.length; o++) {
    let r = e.runs[o];
    if (r) {
      if (r.kind === 'tab' || r.kind === 'image' || r.kind === 'lineBreak') {
        n.push(r);
        continue;
      }
      if (r.kind === 'text') {
        let i = r.text ?? '',
          a = o === t.fromRun,
          s = o === t.toRun;
        if (a || s) {
          let l = a ? t.fromChar : 0,
            u = s ? t.toChar : i.length,
            d = i.slice(l, u);
          d.length > 0 && n.push({ ...r, text: d });
        } else n.push(r);
      }
    }
  }
  return n;
}
function bh(e, t) {
  let n,
    o,
    r = e.pmStart ?? 0,
    i = 0;
  for (let a = 0; a < e.runs.length && a <= t.toRun; a++) {
    let s = e.runs[a];
    s &&
      (a < t.fromRun
        ? s.kind === 'text'
          ? (i += (s.text ?? '').length)
          : (s.kind === 'tab' || s.kind === 'lineBreak' || s.kind === 'image') && (i += 1)
        : a === t.fromRun &&
          ((i += t.fromChar), (n = r + i), s.kind === 'text' && (i = t.fromChar)));
  }
  if (n !== void 0) {
    let a = 0;
    for (let s = t.fromRun; s <= t.toRun && s < e.runs.length; s++) {
      let l = e.runs[s];
      if (l)
        if (l.kind === 'text') {
          let u = l.text ?? '',
            d = s === t.fromRun ? t.fromChar : 0,
            c = s === t.toRun ? t.toChar : u.length;
          a += c - d;
        } else (l.kind === 'tab' || l.kind === 'lineBreak' || l.kind === 'image') && (a += 1);
    }
    o = n + a;
  }
  return { pmStart: n, pmEnd: o };
}
function yh(e, t, n, o) {
  let r = 0;
  for (let i = n; i < o && i < e.lines.length; i++) {
    let s = e.lines[i].lineHeight;
    if (t >= r && t < r + s) return i;
    r += s;
  }
  return o > n ? Math.min(o - 1, e.lines.length - 1) : null;
}
function xh(e, t, n, o) {
  let { pmStart: r, pmEnd: i } = bh(e, t);
  if (r === void 0 || i === void 0) return { charOffset: 0, pmPosition: e.pmStart ?? 0 };
  let a = e.attrs?.alignment ?? 'left',
    s = 0;
  a === 'center'
    ? (s = Math.max(0, (o - t.width) / 2))
    : a === 'right' && (s = Math.max(0, o - t.width));
  let l = Math.max(0, n - s);
  if (l <= 0) return { charOffset: 0, pmPosition: r };
  let u = hh(e, t);
  if (u.length === 0) return { charOffset: 0, pmPosition: r };
  let d = 0,
    c = 0;
  for (let f of u) {
    if (f.kind === 'tab') {
      let m = f.width ?? 48,
        b = d + m;
      if (l <= b) {
        let g = d + m / 2;
        return l < g
          ? { charOffset: c, pmPosition: r + c }
          : { charOffset: c + 1, pmPosition: r + c + 1 };
      }
      ((d = b), (c += 1));
      continue;
    }
    if (f.kind === 'image') {
      let m = f.width,
        b = d + m;
      if (l <= b) {
        let g = d + m / 2;
        return l < g
          ? { charOffset: c, pmPosition: r + c }
          : { charOffset: c + 1, pmPosition: r + c + 1 };
      }
      ((d = b), (c += 1));
      continue;
    }
    if (f.kind === 'lineBreak') {
      if (l >= d) return { charOffset: c, pmPosition: r + c };
      c += 1;
      continue;
    }
    if (f.kind === 'text') {
      let m = f.text ?? '';
      if (m.length === 0) continue;
      let b = gh(f),
        g = f$2(m, b),
        S = d + g.width;
      if (l <= S) {
        let w = l - d,
          k = g$1(w, g.charWidths),
          E = c + k;
        return { charOffset: E, pmPosition: r + E };
      }
      ((d = S), (c += m.length));
    }
  }
  return { charOffset: i - r, pmPosition: i };
}
function Jd(e) {
  let { fragment: t, block: n, measure: o, localX: r, localY: i } = e;
  if (t.kind !== 'paragraph' || n.kind !== 'paragraph' || o.kind !== 'paragraph') return null;
  let a = t,
    s = n,
    l = o,
    u = yh(l, i, a.fromLine, a.toLine);
  if (u === null) return null;
  let d = l.lines[u];
  if (!d) return null;
  let c = 0;
  for (let k = a.fromLine; k < u; k++) c += l.lines[k]?.lineHeight ?? 0;
  let p = s.attrs?.indent,
    f = p?.left ?? 0,
    m = p?.right ?? 0,
    b = Math.max(0, t.width - f - m),
    g = r - f,
    { charOffset: S, pmPosition: w } = xh(s, d, g, b);
  return { pmPosition: w, charOffset: S, lineIndex: u };
}
function Sh(e) {
  let { cellBlock: t, cellMeasure: n, cellLocalX: o, cellLocalY: r } = e;
  if (!t || !n) return null;
  let i = {
    fragment: {
      kind: 'paragraph',
      blockId: t.id,
      x: 0,
      y: 0,
      width: n.lines.reduce((s, l) => Math.max(s, l.width), 100),
      fromLine: 0,
      toLine: n.lines.length,
      height: n.totalHeight,
    },
    block: t,
    measure: n,
    pageIndex: e.pageIndex,
    localX: o,
    localY: r,
  };
  return Jd(i)?.pmPosition ?? null;
}
function ps(e, t) {
  if (t) return Sh(t);
  if (!e) return null;
  let { fragment: n } = e;
  return n.kind === 'paragraph'
    ? (Jd(e)?.pmPosition ?? null)
    : n.kind === 'image'
      ? (n.pmStart ?? null)
      : null;
}
function eu(e, t, n, o = 1) {
  let r = document.elementsFromPoint(t, n),
    i = r.find((d) => d.classList.contains('layout-page'));
  if (!i) return null;
  let a = r.find(
    (d) => d.tagName === 'SPAN' && d.dataset.pmStart !== void 0 && d.dataset.pmEnd !== void 0
  );
  if (a) return fs(a, t);
  let s = r.find((d) => d.classList.contains('layout-empty-run'));
  if (s) {
    let d = s.closest('.layout-paragraph');
    if (d && d.dataset.pmStart) return Number(d.dataset.pmStart);
  }
  let l = r.find((d) => d.classList.contains('layout-paragraph') && d.dataset.pmStart !== void 0);
  if (l && l.dataset.pmStart) {
    let d = Qd(l, t, n);
    return d !== null ? d : Number(l.dataset.pmStart);
  }
  let u = r.find((d) => d.classList.contains('layout-table-cell'));
  return u ? Qd(u, t, n) : kh(e, i, t, n);
}
function fs(e, t, n) {
  let o = Number(e.dataset.pmStart),
    r = Number(e.dataset.pmEnd);
  if (e.classList.contains('layout-run-tab')) {
    let c = e.getBoundingClientRect(),
      p = (c.left + c.right) / 2;
    return t < p ? o : r;
  }
  let i = e.firstChild;
  if (!i || i.nodeType !== Node.TEXT_NODE) return o;
  let a = i,
    s = a.length;
  if (s === 0) return o;
  let l = e.ownerDocument;
  if (!l) return o;
  let u = 0,
    d = s;
  for (; u < d; ) {
    let c = Math.floor((u + d) / 2),
      p = l.createRange();
    (p.setStart(a, c), p.setEnd(a, c));
    let m = p.getBoundingClientRect().left;
    t < m ? (d = c) : (u = c + 1);
  }
  if (u > 0 && u <= s) {
    let c = l.createRange();
    (c.setStart(a, u - 1), c.setEnd(a, u - 1));
    let p = c.getBoundingClientRect();
    (c.setStart(a, Math.min(u, s)), c.setEnd(a, Math.min(u, s)));
    let f = c.getBoundingClientRect(),
      m = Math.abs(t - p.left),
      b = Math.abs(t - f.left);
    if (m < b) return o + (u - 1);
  }
  return o + Math.min(u, r - o);
}
function Qd(e, t, n) {
  let o = e.querySelector('.layout-empty-run');
  if (o) {
    let c = o.closest('.layout-paragraph');
    if (c && c.dataset.pmStart) return Number(c.dataset.pmStart);
  }
  let r = e.querySelectorAll('.layout-line'),
    i = null,
    a = 1 / 0;
  for (let c of Array.from(r)) {
    let p = c,
      f = p.getBoundingClientRect(),
      m = (f.top + f.bottom) / 2,
      b = Math.abs(n - m);
    b < a && ((a = b), (i = p));
  }
  if (!i) {
    let c = e.querySelector('.layout-paragraph[data-pm-start]');
    return c?.dataset.pmStart
      ? Number(c.dataset.pmStart)
      : e.dataset.pmStart
        ? Number(e.dataset.pmStart)
        : null;
  }
  let s = i.querySelectorAll('span[data-pm-start][data-pm-end]');
  if (s.length === 0) {
    let c = i.closest('.layout-paragraph');
    return c?.dataset.pmStart ? Number(c.dataset.pmStart) : null;
  }
  let l = null,
    u = 1 / 0;
  for (let c of Array.from(s)) {
    let p = c,
      f = p.getBoundingClientRect();
    if (t >= f.left && t <= f.right) return fs(p, t);
    let m = t < f.left ? f.left - t : t - f.right;
    m < u && ((u = m), (l = p));
  }
  if (!l) return null;
  let d = l.getBoundingClientRect();
  return t < d.left ? Number(l.dataset.pmStart) : Number(l.dataset.pmEnd);
}
function kh(e, t, n, o, r) {
  if (t.querySelectorAll('span[data-pm-start][data-pm-end]').length === 0) {
    let f = t.querySelectorAll('.layout-paragraph');
    if (f.length > 0) {
      let m = f[0];
      return Number(m.dataset.pmStart) || 0;
    }
    return null;
  }
  let a = t.querySelectorAll('.layout-line'),
    s = null,
    l = 1 / 0;
  for (let f of Array.from(a)) {
    let m = f,
      b = m.getBoundingClientRect(),
      g = (b.top + b.bottom) / 2,
      S = Math.abs(o - g);
    S < l && ((l = S), (s = m));
  }
  if (!s) return null;
  let u = s.querySelectorAll('span[data-pm-start][data-pm-end]');
  if (u.length === 0) {
    let f = s.closest('.layout-paragraph');
    return f?.dataset.pmStart ? Number(f.dataset.pmStart) : null;
  }
  let d = null,
    c = 1 / 0;
  for (let f of Array.from(u)) {
    let m = f,
      b = m.getBoundingClientRect();
    if (n >= b.left && n <= b.right) return fs(m, n);
    let g = n < b.left ? b.left - n : n - b.right;
    g < c && ((c = g), (d = m));
  }
  if (!d) return null;
  let p = d.getBoundingClientRect();
  return n < p.left ? Number(d.dataset.pmStart) : Number(d.dataset.pmEnd);
}
var Pn = {
  fragment: 'layout-fragment',
  paragraph: 'layout-fragment-paragraph',
  table: 'layout-fragment-table',
  image: 'layout-fragment-image',
};
function wh(e) {
  return e.kind === 'paragraph';
}
function Ch(e) {
  return e.kind === 'table';
}
function Th(e) {
  return e.kind === 'image';
}
function Di(e) {
  ((e.style.position = 'absolute'), (e.style.overflow = 'hidden'));
}
function vh(e, t, n) {
  let o = n.createElement('div');
  return (
    (o.className = `${Pn.fragment} ${Pn.paragraph}`),
    Di(o),
    (o.dataset.blockId = String(e.blockId)),
    (o.dataset.fromLine = String(e.fromLine)),
    (o.dataset.toLine = String(e.toLine)),
    e.pmStart !== void 0 && (o.dataset.pmStart = String(e.pmStart)),
    e.pmEnd !== void 0 && (o.dataset.pmEnd = String(e.pmEnd)),
    e.continuesFromPrev && (o.dataset.continuesFromPrev = 'true'),
    e.continuesOnNext && (o.dataset.continuesOnNext = 'true'),
    o
  );
}
function Rh(e, t, n) {
  let o = n.createElement('div');
  return (
    (o.className = `${Pn.fragment} ${Pn.table}`),
    Di(o),
    (o.dataset.blockId = String(e.blockId)),
    (o.dataset.fromRow = String(e.fromRow)),
    (o.dataset.toRow = String(e.toRow)),
    e.pmStart !== void 0 && (o.dataset.pmStart = String(e.pmStart)),
    e.pmEnd !== void 0 && (o.dataset.pmEnd = String(e.pmEnd)),
    o
  );
}
function Ph(e, t, n) {
  let o = n.createElement('div');
  return (
    (o.className = `${Pn.fragment} ${Pn.image}`),
    Di(o),
    (o.dataset.blockId = String(e.blockId)),
    e.pmStart !== void 0 && (o.dataset.pmStart = String(e.pmStart)),
    e.pmEnd !== void 0 && (o.dataset.pmEnd = String(e.pmEnd)),
    e.isAnchored && (o.dataset.anchored = 'true'),
    e.zIndex !== void 0 && (o.style.zIndex = String(e.zIndex)),
    o
  );
}
function Uo(e, t, n = {}) {
  let o = n.document ?? document;
  if (wh(e)) return vh(e, t, o);
  if (Ch(e)) return Rh(e, t, o);
  if (Th(e)) return Ph(e, t, o);
  let r = o.createElement('div');
  ((r.className = Pn.fragment), Di(r));
  let i = e;
  return (
    i.blockId !== void 0 && (r.dataset.blockId = String(i.blockId)),
    i.kind && (r.dataset.kind = i.kind),
    r
  );
}
function ms(e) {
  return (e / 1440) * 96;
}
function Mh(e) {
  return (e / 96) * 1440;
}
function Eh(e) {
  let { explicitStops: t = [], defaultTabInterval: n = 720, leftIndent: o = 0 } = e,
    r = t.filter((c) => c.val !== 'clear').filter((c) => c.pos >= o),
    i = t.filter((c) => c.val === 'clear').map((c) => c.pos),
    a = r.reduce((c, p) => Math.max(c, p.pos), 0),
    s = [...r];
  o > 0 &&
    !r.some((c) => c.pos <= o) &&
    (i.some((p) => Math.abs(p - o) < 20) || s.push({ val: 'start', pos: o, leader: 'none' }));
  let u = a > 0 ? Math.max(a, o) : o,
    d = o + 14400;
  for (; u < d; ) {
    u += n;
    let c = r.some((m) => Math.abs(m.pos - u) < 20),
      p = i.some((m) => Math.abs(m - u) < 20),
      f = o > 0 && Math.abs(u - o) < 20;
    !c && !p && !f && s.push({ val: 'start', pos: u, leader: 'none' });
  }
  return s.sort((c, p) => c.pos - p.pos);
}
function tu(e, t, n = '', o, r = '.') {
  let { defaultTabInterval: i = 720 } = t,
    a = Mh(e),
    l = Eh(t).find((c) => c.pos > a);
  if (!l) {
    let c = ms(i),
      p = c - (e % c);
    return (p <= 0 && (p = c), { width: p, alignment: 'default' });
  }
  let d = ms(l.pos) - e;
  if (l.val === 'center' || l.val === 'end') {
    let c = o ? o(n) : 0;
    l.val === 'center' ? (d -= c / 2) : (d -= c);
  } else if (l.val === 'decimal') {
    let c = n.indexOf(r);
    if (c >= 0 && o) {
      let p = n.slice(0, c),
        f = o(p);
      d -= f;
    }
  } else if (l.val === 'bar') return { width: 0, leader: l.leader, alignment: 'bar' };
  if (d < 1) {
    let c = ms(i),
      p = c - (e % c);
    return (p <= 0 && (p = c), { width: p, alignment: 'default' });
  }
  return { width: d, leader: l.leader, alignment: l.val };
}
var Ot = {
  fragment: 'layout-paragraph',
  line: 'layout-line',
  run: 'layout-run',
  text: 'layout-run-text',
  tab: 'layout-run-tab',
  image: 'layout-run-image',
  lineBreak: 'layout-run-linebreak',
};
function Ko(e) {
  return e.kind === 'text';
}
function Hi(e) {
  return e.kind === 'tab';
}
function gs(e) {
  return e.kind === 'image';
}
function hs(e) {
  return e.kind === 'lineBreak';
}
function bs(e) {
  return e.kind === 'field';
}
function Ih(e, t) {
  if ((t.fontFamily && (e.style.fontFamily = a$2(t.fontFamily).cssFallback), t.fontSize)) {
    let o = (t.fontSize * 96) / 72;
    e.style.fontSize = `${o}px`;
  }
  (t.bold && (e.style.fontWeight = 'bold'),
    t.italic && (e.style.fontStyle = 'italic'),
    t.color && (e.style.color = t.color),
    t.letterSpacing && (e.style.letterSpacing = `${t.letterSpacing}px`),
    t.highlight && (e.style.backgroundColor = t.highlight));
  let n = [];
  (t.underline &&
    (n.push('underline'),
    typeof t.underline == 'object' &&
      (t.underline.style && (e.style.textDecorationStyle = t.underline.style),
      t.underline.color && (e.style.textDecorationColor = t.underline.color))),
    t.strike && n.push('line-through'),
    t.commentIds &&
      t.commentIds.length > 0 &&
      ((e.style.backgroundColor = 'rgba(255, 212, 0, 0.25)'),
      (e.style.borderBottom = '2px solid rgba(255, 212, 0, 0.6)'),
      (e.dataset.commentId = String(t.commentIds[0]))),
    t.isInsertion &&
      ((e.style.backgroundColor = 'rgba(52, 168, 83, 0.08)'),
      (e.style.borderBottom = '2px dashed #2e7d32'),
      (e.style.paddingBottom = '1px'),
      e.classList.add('docx-insertion'),
      t.changeAuthor && (e.dataset.changeAuthor = t.changeAuthor),
      t.changeDate && (e.dataset.changeDate = t.changeDate),
      t.changeRevisionId != null && (e.dataset.revisionId = String(t.changeRevisionId))),
    t.isDeletion &&
      ((e.style.backgroundColor = 'rgba(211, 47, 47, 0.08)'),
      (e.style.color = '#c62828'),
      n.includes('line-through') || n.push('line-through'),
      (e.style.textDecorationColor = '#c62828'),
      e.classList.add('docx-deletion'),
      t.changeAuthor && (e.dataset.changeAuthor = t.changeAuthor),
      t.changeDate && (e.dataset.changeDate = t.changeDate),
      t.changeRevisionId != null && (e.dataset.revisionId = String(t.changeRevisionId))),
    n.length > 0 && (e.style.textDecorationLine = n.join(' ')),
    t.superscript && ((e.style.verticalAlign = 'super'), (e.style.fontSize = '0.75em')),
    t.subscript && ((e.style.verticalAlign = 'sub'), (e.style.fontSize = '0.75em')));
}
function mo(e, t, n) {
  (t !== void 0 && (e.dataset.pmStart = String(t)), n !== void 0 && (e.dataset.pmEnd = String(n)));
}
function ys(e, t) {
  let n = t.createElement('span');
  if (((n.className = `${Ot.run} ${Ot.text}`), Ih(n, e), mo(n, e.pmStart, e.pmEnd), e.hyperlink)) {
    let o = t.createElement('a');
    ((o.href = e.hyperlink.href),
      e.hyperlink.href.startsWith('#') || ((o.target = '_blank'), (o.rel = 'noopener noreferrer')),
      e.hyperlink.tooltip && (o.title = e.hyperlink.tooltip),
      (o.textContent = e.text),
      (o.style.color = e.color || '#0563c1'),
      (o.style.textDecoration = 'underline'),
      n.appendChild(o));
  } else n.textContent = e.text;
  return n;
}
function ru(e, t, n, o) {
  let r = t.createElement('span');
  if (
    ((r.className = `${Ot.run} ${Ot.tab}`),
    (r.style.display = 'inline-block'),
    (r.style.width = `${n}px`),
    mo(r, e.pmStart, e.pmEnd),
    o && o !== 'none')
  ) {
    let i = Fh(o);
    i &&
      ((r.style.backgroundImage = `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='4' height='16'><text x='0' y='12' font-size='12' fill='%23000'>${i}</text></svg>`)}")`),
      (r.style.backgroundRepeat = 'repeat-x'),
      (r.style.backgroundPosition = 'bottom'));
  }
  return ((r.textContent = '\xA0'), r);
}
function Fh(e) {
  switch (e) {
    case 'dot':
      return '.';
    case 'hyphen':
      return '-';
    case 'underscore':
      return '_';
    case 'middleDot':
      return '\xB7';
    default:
      return null;
  }
}
function Lh(e, t) {
  let n = t.createElement('img');
  return (
    (n.className = `${Ot.run} ${Ot.image}`),
    (n.src = e.src),
    (n.width = e.width),
    (n.height = e.height),
    e.alt && (n.alt = e.alt),
    e.transform && (n.style.transform = e.transform),
    (n.style.display = 'inline'),
    (n.style.verticalAlign = 'middle'),
    mo(n, e.pmStart, e.pmEnd),
    n
  );
}
function nu(e, t) {
  let n = t.createElement('div');
  ((n.className = 'layout-block-image'),
    (n.style.display = 'block'),
    (n.style.textAlign = 'center'),
    (n.style.marginTop = `${e.distTop ?? 6}px`),
    (n.style.marginBottom = `${e.distBottom ?? 6}px`));
  let o = t.createElement('img');
  return (
    (o.src = e.src),
    (o.width = e.width),
    (o.height = e.height),
    (o.style.marginLeft = 'auto'),
    (o.style.marginRight = 'auto'),
    e.alt && (o.alt = e.alt),
    e.transform && (o.style.transform = e.transform),
    mo(n, e.pmStart, e.pmEnd),
    n.appendChild(o),
    n
  );
}
function iu(e, t) {
  let n = e.displayMode,
    o = e.wrapType;
  return n === 'float' ||
    (o && ['square', 'tight', 'through'].includes(o)) ||
    n === 'block' ||
    o === 'topAndBottom'
    ? nu(e, t)
    : Lh(e, t);
}
function au(e, t) {
  let n = t.createElement('br');
  return ((n.className = `${Ot.run} ${Ot.lineBreak}`), mo(n, e.pmStart, e.pmEnd), n);
}
function su(e, t, n) {
  let o = e.fallback ?? '';
  switch (e.fieldType) {
    case 'PAGE':
      o = String(n.pageNumber);
      break;
    case 'NUMPAGES':
      o = String(n.totalPages);
      break;
    case 'DATE':
      o = new Date().toLocaleDateString();
      break;
    case 'TIME':
      o = new Date().toLocaleTimeString();
      break;
  }
  let r = {
    text: o,
    bold: e.bold,
    italic: e.italic,
    underline: e.underline,
    strike: e.strike,
    color: e.color,
    highlight: e.highlight,
    fontFamily: e.fontFamily,
    fontSize: e.fontSize,
    pmStart: e.pmStart,
    pmEnd: e.pmEnd,
  };
  return ys(r, t);
}
function Bh(e, t, n) {
  if (Ko(e)) return ys(e, t);
  if (Hi(e)) return ru(e, t, 48, void 0);
  if (gs(e)) return iu(e, t);
  if (hs(e)) return au(e, t);
  if (bs(e) && n) return su(e, t, n);
  let o = t.createElement('span');
  return ((o.className = Ot.run), o);
}
function lu(e, t) {
  let n = [],
    o = e.runs;
  for (let r = t.fromRun; r <= t.toRun; r++) {
    let i = o[r];
    if (i)
      if (Ko(i)) {
        let a = r === t.fromRun ? t.fromChar : 0,
          s = r === t.toRun ? t.toChar : i.text.length;
        if (a > 0 || s < i.text.length) {
          let l = i.text.slice(a, s);
          n.push({
            ...i,
            text: l,
            pmStart: i.pmStart !== void 0 ? i.pmStart + a : void 0,
            pmEnd: i.pmStart !== void 0 ? i.pmStart + s : void 0,
          });
        } else n.push(i);
      } else n.push(i);
  }
  return n;
}
function Ah(e) {
  return { val: e.val, pos: e.pos, leader: e.leader };
}
function Dh(e, t, n) {
  let o = '';
  for (let r = t + 1; r < e.length; r++) {
    let i = e[r];
    if (Ko(i)) o += i.text;
    else if (bs(i))
      i.fieldType === 'PAGE' && n
        ? (o += String(n.pageNumber))
        : i.fieldType === 'NUMPAGES' && n
          ? (o += String(n.totalPages))
          : (o += i.fallback ?? '');
    else if (Hi(i) || hs(i)) break;
  }
  return o;
}
function Hh(e) {
  let n = e.createElement('canvas').getContext('2d');
  return (o, r = 11, i = 'Calibri') => {
    if (!n) return o.length * 7;
    let a = a$2(i).cssFallback,
      s = (r * 96) / 72;
    return ((n.font = `${s}px ${a}`), n.measureText(o).width);
  };
}
function cu(e, t, n, o, r) {
  let i = o.createElement('div');
  ((i.className = Ot.line),
    (i.style.height = `${t.lineHeight}px`),
    (i.style.lineHeight = `${t.lineHeight}px`));
  let a = lu(e, t);
  if (a.length === 0) {
    let b = o.createElement('span');
    return (
      (b.className = `${Ot.run} layout-empty-run`),
      (b.innerHTML = '&nbsp;'),
      i.appendChild(b),
      i
    );
  }
  let s = n === 'justify',
    l = false;
  (s &&
    r &&
    ((l = !r.isLastLine || r.paragraphEndsWithLineBreak),
    l &&
      ((i.style.textAlign = 'justify'),
      (i.style.textAlignLast = 'justify'),
      (i.style.width = `${r.availableWidth}px`))),
    (i.style.whiteSpace = 'pre'));
  let u = a.some((b) => Ko(b) && b.highlight);
  i.style.overflow = u ? 'hidden' : 'visible';
  let d = a.some(Hi),
    c,
    p = Hh(o);
  if (d) {
    let b = r?.tabStops?.map(Ah),
      g = r?.leftIndentPx ? Math.round(r.leftIndentPx * 15) : 0;
    c = { explicitStops: b, leftIndent: g };
  }
  let f = 0,
    m = r?.leftIndentPx ?? 0;
  if (r?.isFirstLine) {
    let b = r?.firstLineIndentPx ?? 0;
    f = m + b;
  } else f = m;
  for (let b = 0; b < a.length; b++) {
    let g = a[b];
    if (Hi(g) && c) {
      let S = Dh(a, b, r?.context),
        w = tu(f, c, S, p),
        k = ru(g, o, w.width, w.leader);
      (i.appendChild(k), (f += w.width));
    } else if (Ko(g)) {
      let S = ys(g, o);
      if (g.highlight) {
        let v = (g.fontSize ? (g.fontSize * 96) / 72 : 14.67) * 1.2,
          _ = Math.max(0, t.lineHeight - v);
        if (_ > 0) {
          let V = _ / 2;
          ((S.style.paddingTop = `${V}px`), (S.style.paddingBottom = `${V}px`));
        }
      }
      i.appendChild(S);
      let w = g.fontSize || 11,
        k = g.fontFamily || 'Calibri';
      f += p(g.text, w, k);
    } else if (gs(g)) {
      if (
        g.displayMode === 'float' ||
        (g.wrapType && ['square', 'tight', 'through'].includes(g.wrapType))
      )
        continue;
      let w = iu(g, o);
      (i.appendChild(w),
        g.displayMode !== 'block' && g.wrapType !== 'topAndBottom' && (f += g.width));
    } else if (hs(g)) {
      let S = au(g, o);
      i.appendChild(S);
    } else if (bs(g) && r?.context) {
      let S = su(g, o, r.context);
      i.appendChild(S);
      let w = g.fallback ?? '';
      g.fieldType === 'PAGE'
        ? (w = String(r.context.pageNumber))
        : g.fieldType === 'NUMPAGES' && (w = String(r.context.totalPages));
      let k = g.fontSize || 11,
        E = g.fontFamily || 'Calibri';
      f += p(w, k, E);
    } else {
      let S = Bh(g, o, r?.context);
      i.appendChild(S);
    }
  }
  return i;
}
function Go(e, t) {
  return !e && !t
    ? true
    : !e || !t
      ? false
      : e.style === t.style && e.width === t.width && e.color === t.color;
}
function ou(e, t) {
  return (!e && !t) || !e || !t
    ? false
    : Go(e.top, t.top) &&
        Go(e.bottom, t.bottom) &&
        Go(e.left, t.left) &&
        Go(e.right, t.right) &&
        Go(e.between, t.between);
}
function jn(e, t, n, o, r = {}) {
  let i = r.document ?? document,
    a = i.createElement('div');
  ((a.className = Ot.fragment),
    (a.style.position = 'relative'),
    (a.dataset.blockId = String(e.blockId)),
    (a.dataset.fromLine = String(e.fromLine)),
    (a.dataset.toLine = String(e.toLine)),
    mo(a, e.pmStart, e.pmEnd),
    e.continuesFromPrev && (a.dataset.continuesFromPrev = 'true'),
    e.continuesOnNext && (a.dataset.continuesOnNext = 'true'));
  for (let k of t.runs)
    gs(k) &&
      (k.displayMode === 'float' ||
        (k.wrapType && ['square', 'tight', 'through'].includes(k.wrapType)));
  let s = n.lines.slice(e.fromLine, e.toLine),
    l = t.attrs?.alignment;
  (t.attrs?.styleId && (a.dataset.styleId = t.attrs.styleId),
    l &&
      (l === 'center'
        ? (a.style.textAlign = 'center')
        : l === 'right'
          ? (a.style.textAlign = 'right')
          : (a.style.textAlign = 'left')));
  let u = t.attrs?.indent,
    d = 0,
    c = 0;
  u && (u.left && u.left > 0 && (d = u.left), u.right && u.right > 0 && (c = u.right));
  let p = t.attrs?.borders;
  if (p) {
    let k = (W) => {
      switch (W) {
        case 'single':
          return 'solid';
        case 'double':
          return 'double';
        case 'dotted':
          return 'dotted';
        case 'dashed':
          return 'dashed';
        case 'thick':
          return 'solid';
        case 'wave':
          return 'wavy';
        case 'dashSmallGap':
          return 'dashed';
        case 'nil':
        case 'none':
          return 'none';
        default:
          return 'solid';
      }
    };
    a.style.boxSizing = 'border-box';
    let E = (W) => `${W.width}px ${k(W.style)} ${W.color}`,
      v = ou(r.prevBorders, p),
      _ = ou(p, r.nextBorders);
    (v && p.between
      ? (a.style.borderTop = E(p.between))
      : p.top && !v && (a.style.borderTop = E(p.top)),
      p.bottom && !_ && (a.style.borderBottom = E(p.bottom)),
      p.left && (a.style.borderLeft = E(p.left)),
      p.right && (a.style.borderRight = E(p.right)),
      (p.top || p.bottom || p.left || p.right || p.between) &&
        ((a.style.paddingLeft = p.left ? '4px' : '0'),
        (a.style.paddingRight = p.right ? '4px' : '0'),
        (a.style.paddingTop = p.top || p.between ? '2px' : '0'),
        (a.style.paddingBottom = p.bottom ? '6px' : '0')));
  }
  t.attrs?.shading && (a.style.backgroundColor = t.attrs.shading);
  let f = e.width - d - c,
    b = t.runs[t.runs.length - 1]?.kind === 'lineBreak',
    g = n.lines.length,
    S = 0;
  u?.hanging && u.hanging > 0
    ? (S = -u.hanging)
    : u?.firstLine && u.firstLine > 0 && (S = u.firstLine);
  let w = 0;
  for (let k = 0; k < s.length; k++) {
    let E = s[k],
      v = e.fromLine + k,
      _ = v === g - 1,
      V = v === 0 && !e.continuesFromPrev,
      W = E.leftOffset ?? 0,
      L = E.rightOffset ?? 0,
      $ = f;
    if (V) {
      let A = u?.hanging && u.hanging > 0,
        ee = u?.firstLine && u.firstLine > 0;
      A && u?.hanging ? ($ = f + u.hanging) : ee && u?.firstLine && ($ = f - u.firstLine);
    }
    let z = cu(t, E, l, i, {
      availableWidth: $ - W - L,
      isLastLine: _,
      isFirstLine: V,
      paragraphEndsWithLineBreak: b,
      tabStops: t.attrs?.tabs,
      leftIndentPx: d,
      firstLineIndentPx: V ? S : 0,
      context: o,
    });
    (W > 0 && (z.style.marginLeft = `${W}px`),
      L > 0 && (z.style.marginRight = `${L}px`),
      (w += E.lineHeight));
    let K = u?.hanging && u.hanging > 0,
      C = u?.firstLine && u.firstLine > 0;
    if (
      (V
        ? d > 0 && K
          ? ((z.style.paddingLeft = `${d}px`), (z.style.textIndent = `-${u.hanging}px`))
          : d > 0 && C
            ? ((z.style.paddingLeft = `${d}px`), (z.style.textIndent = `${u.firstLine}px`))
            : d > 0
              ? (z.style.paddingLeft = `${d}px`)
              : C && (z.style.textIndent = `${u.firstLine}px`)
        : d > 0
          ? (z.style.paddingLeft = `${d}px`)
          : K && (z.style.paddingLeft = `${u.hanging}px`),
      c > 0 && (z.style.paddingRight = `${c}px`),
      V && t.attrs?.listMarker)
    ) {
      let A = Math.max(0, d - (u?.hanging ?? 0));
      ((z.style.paddingLeft = `${A}px`), (z.style.textIndent = '0'));
      let ee = Nh(t.attrs.listMarker, u, i);
      z.insertBefore(ee, z.firstChild);
    }
    a.appendChild(z);
  }
  return a;
}
function Nh(e, t, n) {
  let o = n.createElement('span');
  ((o.className = 'layout-list-marker'), (o.style.display = 'inline-block'), (o.textContent = e));
  let r = t?.hanging ?? 24;
  return (
    (o.style.minWidth = `${r}px`),
    (o.style.textAlign = 'left'),
    (o.style.boxSizing = 'border-box'),
    o
  );
}
var an = {
  table: 'layout-table',
  row: 'layout-table-row',
  cell: 'layout-table-cell',
  cellContent: 'layout-table-cell-content',
  resizeHandle: 'layout-table-resize-handle',
  rowResizeHandle: 'layout-table-row-resize-handle',
  tableEdgeHandleBottom: 'layout-table-edge-handle-bottom',
  tableEdgeHandleRight: 'layout-table-edge-handle-right',
};
function zh(e, t, n, o) {
  let r = o.createElement('div');
  ((r.className = an.cellContent), (r.style.position = 'relative'));
  let i = e.padding?.left ?? 7,
    a = e.padding?.right ?? 7,
    s = Math.max(0, t.width - i - a);
  r.style.width = `${s}px`;
  for (let l = 0; l < e.blocks.length; l++) {
    let u = e.blocks[l],
      d = t.blocks[l];
    if (u?.kind === 'paragraph' && d?.kind === 'paragraph') {
      let c = u,
        p = d,
        f = {
          blockId: c.id,
          width: s,
          height: p.totalHeight,
          fromLine: 0,
          toLine: p.lines.length,
          pmStart: c.pmStart,
          pmEnd: c.pmEnd,
        },
        m = jn(f, c, p, n, { document: o });
      ((m.style.position = 'relative'), r.appendChild(m));
    } else if (u?.kind === 'table' && d?.kind === 'table') {
      let f = Oh(u, d, n, o);
      ((f.style.position = 'relative'), r.appendChild(f));
    }
  }
  return r;
}
function Oh(e, t, n, o) {
  let r = o.createElement('div');
  ((r.className = `${an.table} layout-nested-table`),
    (r.style.position = 'relative'),
    (r.style.width = `${t.totalWidth}px`),
    (r.style.display = 'block'),
    e.justification === 'center'
      ? ((r.style.marginLeft = 'auto'), (r.style.marginRight = 'auto'))
      : e.justification === 'right' && (r.style.marginLeft = 'auto'),
    (r.dataset.blockId = String(e.id)),
    e.pmStart !== void 0 && (r.dataset.pmStart = String(e.pmStart)),
    e.pmEnd !== void 0 && (r.dataset.pmEnd = String(e.pmEnd)));
  let i = [],
    a = 0;
  for (let u = 0; u < t.rows.length; u++) (i.push(a), (a += t.rows[u]?.height ?? 0));
  i.push(a);
  let s = new Map(),
    l = 0;
  for (let u = 0; u < e.rows.length; u++) {
    let d = e.rows[u],
      c = t.rows[u];
    if (!d || !c) continue;
    let p = du(d, c, u, l, t.columnWidths, e.rows.length, n, o, s, i);
    (r.appendChild(p), (l += c.height));
  }
  return ((r.style.height = `${l}px`), r);
}
function Ni(e, t, n) {
  let o = `border${t.charAt(0).toUpperCase() + t.slice(1)}`;
  if (!n || n.style === 'none' || n.style === 'nil' || n.width === 0) e.style[o] = 'none';
  else {
    let r = n.width ?? 1,
      i = n.color ?? '#000000',
      a = n.style ?? 'solid';
    e.style[o] = `${r}px ${a} ${i}`;
  }
}
function $h(e, t, n, o, r, i, a) {
  let s = a.createElement('div');
  ((s.className = an.cell),
    (s.style.position = 'absolute'),
    (s.style.left = `${n}px`),
    (s.style.top = '0'),
    (s.style.width = `${t.width}px`),
    (s.style.height = `${o}px`),
    (s.style.overflow = 'hidden'),
    (s.style.boxSizing = 'border-box'));
  let l = e.padding?.top ?? 1,
    u = e.padding?.right ?? 7,
    d = e.padding?.bottom ?? 1,
    c = e.padding?.left ?? 7;
  if (
    ((s.style.padding = `${l}px ${u}px ${d}px ${c}px`),
    e.borders &&
      (Ni(s, 'top', e.borders.top),
      Ni(s, 'right', e.borders.right),
      Ni(s, 'bottom', e.borders.bottom),
      Ni(s, 'left', e.borders.left)),
    e.background && (s.style.backgroundColor = e.background),
    e.verticalAlign)
  )
    switch (((s.style.display = 'flex'), (s.style.flexDirection = 'column'), e.verticalAlign)) {
      case 'top':
        s.style.justifyContent = 'flex-start';
        break;
      case 'center':
        s.style.justifyContent = 'center';
        break;
      case 'bottom':
        s.style.justifyContent = 'flex-end';
        break;
    }
  let p = zh(e, t, i, a);
  if ((s.appendChild(p), e.blocks.length > 0)) {
    let f = e.blocks[0],
      m = e.blocks[e.blocks.length - 1];
    (f && 'pmStart' in f && f.pmStart !== void 0 && (s.dataset.pmStart = String(f.pmStart)),
      m && 'pmEnd' in m && m.pmEnd !== void 0 && (s.dataset.pmEnd = String(m.pmEnd)));
  }
  return s;
}
function du(e, t, n, o, r, i, a, s, l, u) {
  let d = s.createElement('div');
  ((d.className = an.row),
    (d.style.position = 'absolute'),
    (d.style.left = '0'),
    (d.style.top = `${o}px`),
    (d.style.width = '100%'),
    (d.style.height = `${t.height}px`),
    (d.dataset.rowIndex = String(n)));
  let c = new Set();
  if (l) {
    for (let [, m] of l)
      if (m.startRow < n && m.startRow + m.rowSpan > n)
        for (let b = 0; b < m.colSpan; b++) c.add(m.columnIndex + b);
  }
  let p = 0,
    f = 0;
  for (; c.has(f); ) ((p += r[f] ?? 0), f++);
  for (let m = 0; m < e.cells.length; m++) {
    let b = e.cells[m],
      g = t.cells[m];
    if (!b || !g) continue;
    let S = b.colSpan ?? 1,
      w = b.rowSpan ?? 1,
      k = t.height;
    if (w > 1 && u) {
      k = 0;
      for (let L = n; L < n + w && L < u.length - 1; L++) k += (u[L + 1] ?? 0) - (u[L] ?? 0);
      k === 0 && (k = t.height * w);
    }
    f + S >= r.length;
    let W = $h(b, g, p, k, {}, a, s);
    if (
      ((W.dataset.cellIndex = String(m)),
      (W.dataset.columnIndex = String(f)),
      w > 1 && (W.dataset.rowSpan = String(w)),
      d.appendChild(W),
      w > 1 && l)
    ) {
      let L = `${n}-${f}`;
      l.set(L, {
        cell: b,
        cellMeasure: g,
        columnIndex: f,
        startRow: n,
        rowSpan: w,
        colSpan: S,
        x: p,
        totalHeight: k,
      });
    }
    for (let L = 0; L < S && f + L < r.length; L++) p += r[f + L] ?? 0;
    for (f += S; c.has(f); ) ((p += r[f] ?? 0), f++);
  }
  return d;
}
function Yo(e, t, n, o, r = {}) {
  let i = r.document ?? document,
    a = i.createElement('div');
  ((a.className = an.table),
    (a.style.position = 'absolute'),
    (a.style.width = `${e.width}px`),
    (a.style.height = `${e.height}px`),
    (a.style.overflow = 'hidden'),
    (a.dataset.blockId = String(e.blockId)),
    (a.dataset.fromRow = String(e.fromRow)),
    (a.dataset.toRow = String(e.toRow)),
    e.pmStart !== void 0 && (a.dataset.pmStart = String(e.pmStart)),
    e.pmEnd !== void 0 && (a.dataset.pmEnd = String(e.pmEnd)));
  let s = 0;
  for (let f = 0; f < n.columnWidths.length - 1; f++) {
    s += n.columnWidths[f] ?? 0;
    let m = i.createElement('div');
    ((m.className = an.resizeHandle),
      (m.style.position = 'absolute'),
      (m.style.left = `${s - 3}px`),
      (m.style.top = '0'),
      (m.style.width = '6px'),
      (m.style.height = '100%'),
      (m.style.cursor = 'col-resize'),
      (m.style.zIndex = '10'),
      (m.dataset.columnIndex = String(f)),
      (m.dataset.tableBlockId = String(e.blockId)),
      e.pmStart !== void 0 && (m.dataset.tablePmStart = String(e.pmStart)),
      a.appendChild(m));
  }
  let l = [],
    u = 0;
  for (let f = 0; f < n.rows.length; f++) (l.push(u), (u += n.rows[f]?.height ?? 0));
  l.push(u);
  let d = new Map(),
    c = 0;
  for (let f = e.fromRow; f < e.toRow; f++) {
    let m = t.rows[f],
      b = n.rows[f];
    if (!m || !b) continue;
    let g = du(m, b, f, c, n.columnWidths, t.rows.length, o, i, d, l);
    (a.appendChild(g), (c += b.height));
  }
  let p = 0;
  for (let f = e.fromRow; f < e.toRow; f++)
    if (((p += n.rows[f]?.height ?? 0), f < e.toRow - 1)) {
      let m = i.createElement('div');
      ((m.className = an.rowResizeHandle),
        (m.style.position = 'absolute'),
        (m.style.left = '0'),
        (m.style.top = `${p - 3}px`),
        (m.style.width = '100%'),
        (m.style.height = '6px'),
        (m.style.cursor = 'row-resize'),
        (m.style.zIndex = '10'),
        (m.dataset.rowIndex = String(f)),
        (m.dataset.tableBlockId = String(e.blockId)),
        e.pmStart !== void 0 && (m.dataset.tablePmStart = String(e.pmStart)),
        a.appendChild(m));
    }
  if (e.toRow === t.rows.length) {
    let f = i.createElement('div');
    ((f.className = an.tableEdgeHandleBottom),
      (f.style.position = 'absolute'),
      (f.style.left = '0'),
      (f.style.top = `${p - 3}px`),
      (f.style.width = '100%'),
      (f.style.height = '6px'),
      (f.style.cursor = 'row-resize'),
      (f.style.zIndex = '10'),
      (f.dataset.rowIndex = String(t.rows.length - 1)),
      (f.dataset.tableBlockId = String(e.blockId)),
      (f.dataset.isEdge = 'bottom'),
      e.pmStart !== void 0 && (f.dataset.tablePmStart = String(e.pmStart)),
      a.appendChild(f));
  }
  if (e.toRow === t.rows.length) {
    let f = n.columnWidths.reduce((b, g) => b + g, 0),
      m = i.createElement('div');
    ((m.className = an.tableEdgeHandleRight),
      (m.style.position = 'absolute'),
      (m.style.left = `${f - 3}px`),
      (m.style.top = '0'),
      (m.style.width = '6px'),
      (m.style.height = '100%'),
      (m.style.cursor = 'col-resize'),
      (m.style.zIndex = '10'),
      (m.dataset.columnIndex = String(n.columnWidths.length - 1)),
      (m.dataset.tableBlockId = String(e.blockId)),
      (m.dataset.isEdge = 'right'),
      e.pmStart !== void 0 && (m.dataset.tablePmStart = String(e.pmStart)),
      a.appendChild(m));
  }
  return a;
}
var xs = { image: 'layout-image', imageAnchored: 'layout-image-anchored' };
function zi(e, t, n, o, r = {}) {
  let i = r.document ?? document,
    a = i.createElement('div');
  ((a.className = xs.image),
    e.isAnchored && a.classList.add(xs.imageAnchored),
    (a.style.position = 'absolute'),
    (a.style.width = `${e.width}px`),
    (a.style.height = `${e.height}px`),
    (a.style.overflow = 'hidden'),
    e.zIndex !== void 0 && (a.style.zIndex = String(e.zIndex)),
    t.anchor?.behindDoc && (a.style.zIndex = '-1'),
    (a.dataset.blockId = String(e.blockId)),
    e.pmStart !== void 0 && (a.dataset.pmStart = String(e.pmStart)),
    e.pmEnd !== void 0 && (a.dataset.pmEnd = String(e.pmEnd)));
  let s = i.createElement('img');
  return (
    (s.src = t.src),
    (s.alt = t.alt ?? ''),
    (s.style.width = '100%'),
    (s.style.height = '100%'),
    (s.style.objectFit = 'contain'),
    (s.style.display = 'block'),
    t.transform && (s.style.transform = t.transform),
    (s.draggable = false),
    a.appendChild(s),
    a
  );
}
var Mn = {
  page: 'layout-page',
  content: 'layout-page-content',
  header: 'layout-page-header',
  footer: 'layout-page-footer',
};
function $i(e, t, n, o) {
  if (
    ((e.style.position = 'relative'),
    (e.style.width = `${t}px`),
    (e.style.height = `${n}px`),
    (e.style.backgroundColor = o.backgroundColor ?? '#ffffff'),
    (e.style.overflow = 'hidden'),
    (e.style.fontFamily = 'Calibri, "Segoe UI", Arial, sans-serif'),
    (e.style.fontSize = `${1056 / 72}px`),
    (e.style.color = '#000000'),
    o.showBorders && (e.style.border = '1px solid #ccc'),
    o.showShadow && (e.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)'),
    o.pageBorders)
  ) {
    let r = o.pageBorders,
      i = ['top', 'bottom', 'left', 'right'],
      a = ['Top', 'Bottom', 'Left', 'Right'];
    for (let s = 0; s < i.length; s++) {
      let l = r[i[s]];
      if (l && l.style !== 'none' && l.style !== 'nil') {
        let u = no(l, a[s], o.theme);
        for (let [d, c] of Object.entries(u)) e.style[d] = String(c);
      }
    }
  }
}
function Wh(e, t) {
  let n = t.margins;
  ((e.style.position = 'absolute'),
    (e.style.top = `${n.top}px`),
    (e.style.left = `${n.left}px`),
    (e.style.right = `${n.right}px`),
    (e.style.bottom = `${n.bottom}px`),
    (e.style.overflow = 'visible'));
}
function _h(e, t, n) {
  ((e.style.position = 'absolute'),
    (e.style.left = `${t.x - n.left}px`),
    (e.style.top = `${t.y - n.top}px`),
    (e.style.width = `${t.width}px`),
    'height' in t && (e.style.height = `${t.height}px`));
}
function _i(e) {
  return e === void 0 ? 0 : Math.round((e * 96) / 914400);
}
function Vh(e) {
  let t = e.wrapType,
    n = e.displayMode;
  return !!((t && ['square', 'tight', 'through'].includes(t)) || n === 'float');
}
function jh(e, t, n) {
  let o = [];
  for (let r of e.runs) {
    if (r.kind !== 'image') continue;
    let i = r;
    if (!Vh(i)) continue;
    let a = i.position,
      s = i.distTop ?? 0,
      l = i.distBottom ?? 0,
      u = i.distLeft ?? 12,
      d = i.distRight ?? 12,
      c = 'left',
      p = 0;
    if (a?.horizontal) {
      let m = a.horizontal;
      m.align === 'right'
        ? ((c = 'right'), (p = n - i.width))
        : m.align === 'left'
          ? ((c = 'left'), (p = 0))
          : m.align === 'center'
            ? ((c = 'left'), (p = (n - i.width) / 2))
            : m.posOffset !== void 0 && ((p = _i(m.posOffset)), (c = p > n / 2 ? 'right' : 'left'));
    } else i.cssFloat === 'right' && ((c = 'right'), (p = n - i.width));
    let f = 0;
    if (a?.vertical) {
      let m = a.vertical;
      (m.align === 'top'
        ? (f = 0)
        : m.align === 'bottom'
          ? (f = t)
          : m.posOffset !== void 0
            ? (f = _i(m.posOffset))
            : (f = t),
        (m.relativeTo === 'margin' && (m.align === 'top' || m.posOffset !== void 0)) ||
          (m.relativeTo === 'paragraph' && (f = t + f)));
    } else f = t;
    o.push({
      src: i.src,
      width: i.width,
      height: i.height,
      alt: i.alt,
      transform: i.transform,
      side: c,
      x: p,
      y: f,
      distTop: s,
      distBottom: l,
      distLeft: u,
      distRight: d,
      pmStart: i.pmStart,
      pmEnd: i.pmEnd,
    });
  }
  return o;
}
function Uh(e, t) {
  let n = [],
    o = 0,
    r = 0,
    i = 1 / 0,
    a = 0;
  for (let s of e) {
    let l = s.x - s.distLeft,
      u = s.x + s.width + s.distRight,
      d = s.y - s.distTop,
      c = s.y + s.height + s.distBottom;
    (s.side === 'left' ? (o = Math.max(o, u)) : (r = Math.max(r, t - l)),
      (i = Math.min(i, d)),
      (a = Math.max(a, c)));
  }
  return (
    (o > 0 || r > 0) &&
      n.push({ leftMargin: o, rightMargin: r, topY: i === 1 / 0 ? 0 : i, bottomY: a }),
    n
  );
}
function Gh(e, t) {
  let n = t.createElement('div');
  ((n.className = 'layout-floating-images-layer'),
    (n.style.position = 'absolute'),
    (n.style.top = '0'),
    (n.style.left = '0'),
    (n.style.right = '0'),
    (n.style.bottom = '0'),
    (n.style.pointerEvents = 'none'),
    (n.style.zIndex = '10'));
  for (let o of e) {
    let r = t.createElement('div');
    ((r.className = 'layout-page-floating-image'),
      (r.style.position = 'absolute'),
      (r.style.pointerEvents = 'auto'),
      (r.style.top = `${o.y}px`),
      (r.style.left = `${o.x}px`),
      o.pmStart !== void 0 && (r.dataset.pmStart = String(o.pmStart)),
      o.pmEnd !== void 0 && (r.dataset.pmEnd = String(o.pmEnd)));
    let i = t.createElement('img');
    ((i.src = o.src),
      (i.width = o.width),
      (i.height = o.height),
      o.alt && (i.alt = o.alt),
      o.transform && (i.style.transform = o.transform),
      r.appendChild(i),
      n.appendChild(r));
  }
  return n;
}
function uu(e, t, n) {
  let o = n.document ?? document,
    r = o.createElement('div');
  r.style.position = 'relative';
  let i = t.contentWidth ?? 600,
    a = [],
    s = 0;
  for (let l = 0; l < e.blocks.length; l++) {
    let u = e.blocks[l],
      d = e.measures[l];
    if (u?.kind === 'paragraph' && d?.kind === 'paragraph') {
      let c = u,
        p = d,
        f = s,
        m = [];
      for (let w of c.runs)
        if (w.kind === 'image' && 'position' in w && w.position) {
          let k = w;
          a.push({
            src: k.src,
            width: k.width,
            height: k.height,
            alt: k.alt,
            paragraphY: f,
            position: k.position,
          });
        } else m.push(w);
      let b = { ...c, runs: m },
        g = { blockId: c.id, width: i, height: p.totalHeight, fromLine: 0, toLine: p.lines.length },
        S = jn(g, b, p, t, { document: o });
      ((S.style.position = 'relative'),
        (S.style.marginBottom = '0'),
        r.appendChild(S),
        (s += p.totalHeight));
    } else if (u?.kind === 'table' && d?.kind === 'table') {
      let c = u,
        p = d,
        f = {
          blockId: c.id,
          width: p.totalWidth || i,
          height: p.totalHeight,
          fromRow: 0,
          toRow: c.rows.length,
        },
        m = Yo(f, c, p, t, { document: o });
      ((m.style.position = 'relative'),
        (m.style.marginBottom = '0'),
        r.appendChild(m),
        (s += p.totalHeight));
    }
  }
  for (let l of a) {
    let u = o.createElement('img');
    ((u.src = l.src),
      (u.width = l.width),
      (u.height = l.height),
      l.alt && (u.alt = l.alt),
      (u.style.position = 'absolute'));
    let d = l.position.horizontal;
    d &&
      (d.align === 'right'
        ? (u.style.right = '0')
        : d.align === 'center'
          ? ((u.style.left = '50%'), (u.style.transform = 'translateX(-50%)'))
          : d.posOffset !== void 0
            ? (u.style.left = `${_i(d.posOffset)}px`)
            : (u.style.left = '0'));
    let c = l.position.vertical;
    if (c) {
      let p = l.paragraphY;
      c.align === 'bottom'
        ? (u.style.bottom = '0')
        : c.align === 'center'
          ? ((u.style.top = '50%'),
            (u.style.transform = (u.style.transform || '') + ' translateY(-50%)'))
          : c.posOffset !== void 0
            ? (u.style.top = `${p + _i(c.posOffset)}px`)
            : (u.style.top = `${p}px`);
    } else u.style.top = `${l.paragraphY}px`;
    r.appendChild(u);
  }
  return r;
}
function Kh(e, t, n) {
  let o = n.createElement('div');
  ((o.className = 'layout-footnote-area'), (o.style.width = `${t}px`));
  let r = n.createElement('div');
  ((r.style.width = '33%'),
    (r.style.height = '0.5px'),
    (r.style.backgroundColor = '#000'),
    (r.style.marginBottom = '6px'),
    (r.style.marginTop = '6px'),
    o.appendChild(r));
  for (let i of e) {
    let a = n.createElement('div');
    ((a.style.fontSize = '10px'),
      (a.style.lineHeight = '1.3'),
      (a.style.marginBottom = '4px'),
      (a.style.color = '#000'));
    let s = n.createElement('sup');
    ((s.textContent = i.displayNumber),
      (s.style.fontSize = '7px'),
      (s.style.marginRight = '2px'),
      a.appendChild(s));
    let l = n.createTextNode(' ' + i.text);
    (a.appendChild(l), o.appendChild(a));
  }
  return o;
}
function Vi(e, t, n = {}) {
  let o = n.document ?? document,
    r = o.createElement('div');
  ((r.className = n.pageClassName ?? Mn.page),
    (r.dataset.pageNumber = String(e.number)),
    $i(r, e.size.w, e.size.h, n));
  let i = o.createElement('div');
  ((i.className = Mn.content), Wh(i, e));
  let a = e.size.w - e.margins.left - e.margins.right,
    s = [],
    l = [];
  for (let p of e.fragments)
    if (p.kind === 'paragraph' && n.blockLookup) {
      let f = n.blockLookup.get(String(p.blockId));
      if (f?.block.kind === 'paragraph') {
        let m = f.block,
          b = p.y - e.margins.top,
          g = jh(m, b, a);
        s.push(...g);
      }
    }
  for (let p of s)
    l.push({
      side: p.side,
      x: p.x,
      y: p.y,
      width: p.width,
      height: p.height,
      distTop: p.distTop,
      distBottom: p.distBottom,
      distLeft: p.distLeft,
      distRight: p.distRight,
    });
  if (n.blockLookup)
    for (let p of e.fragments) {
      if (p.kind !== 'table') continue;
      let f = n.blockLookup.get(String(p.blockId));
      if (f?.block.kind !== 'table') continue;
      let b = f.block.floating;
      if (!b) continue;
      let g = p.x - e.margins.left,
        S = p.y - e.margins.top,
        w = b.topFromText ?? 0,
        k = b.bottomFromText ?? 0,
        E = b.leftFromText ?? 12,
        v = b.rightFromText ?? 12,
        _ = g < a / 2 ? 'left' : 'right';
      l.push({
        side: _,
        x: g,
        y: S,
        width: p.width,
        height: p.height,
        distTop: w,
        distBottom: k,
        distLeft: E,
        distRight: v,
      });
    }
  Uh(l, a);
  if (s.length > 0) {
    let p = Gh(s, o);
    i.appendChild(p);
  }
  let d = (p) => {
      if (p.kind !== 'paragraph' || !n.blockLookup || !p.blockId) return;
      let f = n.blockLookup.get(String(p.blockId));
      if (f?.block.kind === 'paragraph') return f.block.attrs?.borders;
    },
    c;
  for (let p = 0; p < e.fragments.length; p++) {
    let f = e.fragments[p],
      m,
      b = { ...t, section: 'body', contentWidth: a };
    f.y - e.margins.top;
    if (n.blockLookup && f.blockId) {
      let S = n.blockLookup.get(String(f.blockId));
      if (
        f.kind === 'paragraph' &&
        S?.block.kind === 'paragraph' &&
        S?.measure.kind === 'paragraph'
      ) {
        let w = S.block,
          k = p + 1 < e.fragments.length ? d(e.fragments[p + 1]) : void 0;
        ((m = jn(f, w, S.measure, b, { document: o, prevBorders: c, nextBorders: k })),
          (c = w.attrs?.borders));
      } else
        f.kind === 'table' && S?.block.kind === 'table' && S?.measure.kind === 'table'
          ? ((m = Yo(f, S.block, S.measure, b, { document: o })), (c = void 0))
          : f.kind === 'image' && S?.block.kind === 'image' && S?.measure.kind === 'image'
            ? ((m = zi(f, S.block, S.measure, b, { document: o })), (c = void 0))
            : ((m = Uo(f, b, { document: o })), (c = void 0));
    } else ((m = Uo(f, b, { document: o })), (c = void 0));
    (_h(m, f, { left: e.margins.left, top: e.margins.top }), i.appendChild(m));
  }
  if (n.footnoteArea && n.footnoteArea.length > 0) {
    let p = Kh(n.footnoteArea, a, o);
    p.style.position = 'absolute';
    let f = e.footnoteReservedHeight ?? 0,
      m = e.size.h - e.margins.bottom - e.margins.top;
    ((p.style.top = `${m - f}px`), (p.style.left = '0'), (p.style.right = '0'), i.appendChild(p));
  }
  r.appendChild(i);
  {
    let f = n.headerDistance ?? e.margins.header ?? 48,
      m = e.size.w - e.margins.left - e.margins.right,
      b = Math.max(e.margins.top - f, 48),
      S = (n.headerContent?.height ?? 0) > b,
      w = o.createElement('div');
    if (
      ((w.className = Mn.header),
      (w.style.position = 'absolute'),
      (w.style.top = `${f}px`),
      (w.style.left = `${e.margins.left}px`),
      (w.style.right = `${e.margins.right}px`),
      (w.style.width = `${m}px`),
      S || ((w.style.maxHeight = `${b}px`), (w.style.overflow = 'hidden')),
      (w.style.minHeight = '24px'),
      n.headerContent && n.headerContent.blocks.length > 0)
    ) {
      let k = uu(n.headerContent, { ...t, section: 'header', contentWidth: m }, n);
      w.appendChild(k);
    }
    r.appendChild(w);
  }
  {
    let f = n.footerDistance ?? e.margins.footer ?? 48,
      m = e.size.w - e.margins.left - e.margins.right,
      b = Math.max(e.margins.bottom - f, 48),
      S = (n.footerContent?.height ?? 0) > b,
      w = o.createElement('div');
    if (
      ((w.className = Mn.footer),
      (w.style.position = 'absolute'),
      (w.style.bottom = `${f}px`),
      (w.style.left = `${e.margins.left}px`),
      (w.style.right = `${e.margins.right}px`),
      (w.style.width = `${m}px`),
      S || ((w.style.maxHeight = `${b}px`), (w.style.overflow = 'hidden')),
      (w.style.minHeight = '24px'),
      n.footerContent && n.footerContent.blocks.length > 0)
    ) {
      let k = uu(n.footerContent, { ...t, section: 'footer', contentWidth: m }, n);
      w.appendChild(k);
    }
    r.appendChild(w);
  }
  return r;
}
function Ss(e, t, n) {
  let o = { pageNumber: e.number, totalPages: t, section: 'body' },
    r = { ...n };
  if (n.footnotesByPage) {
    let i = n.footnotesByPage.get(e.number);
    i && i.length > 0 && (r.footnoteArea = i);
  }
  return { context: o, pageOptions: r };
}
function pu(e) {
  let t = [];
  (t.push(`s:${e.size.w},${e.size.h}`),
    t.push(`m:${e.margins.top},${e.margins.right},${e.margins.bottom},${e.margins.left}`),
    t.push(`n:${e.number}`),
    e.footnoteReservedHeight && t.push(`fn:${e.footnoteReservedHeight}`));
  for (let n of e.fragments) {
    let o = `${n.kind}:${n.blockId},${n.x},${n.y},${n.width},${n.height}`;
    (n.pmStart !== void 0 && (o += `,ps:${n.pmStart}`),
      n.pmEnd !== void 0 && (o += `,pe:${n.pmEnd}`),
      n.kind === 'paragraph'
        ? (o += `,fl:${n.fromLine},tl:${n.toLine}`)
        : n.kind === 'table' && (o += `,fr:${n.fromRow},tr:${n.toRow}`),
      t.push(o));
  }
  return t.join('|');
}
function Yh(e) {
  let t = [];
  return (
    e.headerContent && t.push(`hdr:${e.headerContent.blocks.length},${e.headerContent.height}`),
    e.footerContent && t.push(`ftr:${e.footerContent.blocks.length},${e.footerContent.height}`),
    e.theme && t.push(`thm:${e.theme.name ?? 'default'}`),
    e.pageBorders && t.push(`pb:${JSON.stringify(e.pageBorders)}`),
    e.headerDistance !== void 0 && t.push(`hd:${e.headerDistance}`),
    e.footerDistance !== void 0 && t.push(`fd:${e.footerDistance}`),
    t.join('|')
  );
}
function qh(e, t) {
  ((e.style.display = 'flex'),
    (e.style.flexDirection = 'column'),
    (e.style.alignItems = 'center'),
    (e.style.gap = `${t}px`),
    (e.style.padding = `${t}px`),
    (e.style.backgroundColor = 'var(--doc-bg, #f8f9fa)'));
}
var Oi = 2,
  Xh = 8;
function ks(e, t, n = {}) {
  let o = e.length,
    r = n.pageGap ?? 24,
    i = t,
    a = i.__pageRenderState,
    s = Yh(n),
    l = o >= Xh;
  if (a && a.optionsHash === s && l) {
    let g = a.pageStates,
      S = a.pageDataMap,
      w = i.__pageObserver,
      k = [];
    for (let _ of e) k.push(pu(_));
    let E = a.totalPages !== o,
      v = Math.min(g.length, e.length);
    for (let _ = 0; _ < v; _++) {
      let V = g[_],
        W = k[_];
      if (V.fingerprint === W && !E) {
        let z = S.get(V.element);
        z && (z.page = e[_]);
        continue;
      }
      let L = V.element,
        $ = S.get(L);
      ($ && (($.page = e[_]), $.rendered && Zh(L, S, o, n)),
        (V.fingerprint = W),
        $i(L, e[_].size.w, e[_].size.h, n),
        (L.dataset.pageNumber = String(e[_].number)));
    }
    if (e.length > g.length) {
      let _ = n.document ?? document;
      for (let V = g.length; V < e.length; V++) {
        let W = e[V],
          L = _.createElement('div');
        ((L.className = n.pageClassName ?? Mn.page),
          (L.dataset.pageNumber = String(W.number)),
          (L.dataset.pageIndex = String(V)),
          $i(L, W.size.w, W.size.h, n),
          t.appendChild(L),
          g.push({ element: L, fingerprint: k[V] }),
          S.set(L, { page: W, index: V, rendered: false }),
          w && w.observe(L));
      }
    }
    if (e.length < g.length) {
      for (let _ = g.length - 1; _ >= e.length; _--) {
        let V = g[_].element;
        (w && w.unobserve(V), S.delete(V), t.removeChild(V));
      }
      g.length = e.length;
    }
    for (let _ = 0; _ < g.length; _++) {
      let V = S.get(g[_].element);
      V && (V.index = _);
    }
    ((a.totalPages = o), (a.currentOptions = n));
    return;
  }
  let d = i.__pageObserver;
  (d && (d.disconnect(), (i.__pageObserver = void 0)),
    (t.innerHTML = ''),
    (i.__pageRenderState = void 0),
    qh(t, r));
  let c = [],
    p = [];
  for (let g = 0; g < e.length; g++) {
    let S = e[g];
    if ((p.push(pu(S)), l)) {
      let k = (n.document ?? document).createElement('div');
      ((k.className = n.pageClassName ?? Mn.page),
        (k.dataset.pageNumber = String(S.number)),
        (k.dataset.pageIndex = String(g)),
        $i(k, S.size.w, S.size.h, n),
        t.appendChild(k),
        c.push(k));
    } else {
      let { context: w, pageOptions: k } = Ss(S, o, n),
        E = Vi(S, w, k);
      (t.appendChild(E), c.push(E));
    }
  }
  if (!l) return;
  let f = new Map();
  for (let g = 0; g < e.length; g++) f.set(c[g], { page: e[g], index: g, rendered: false });
  let m = new IntersectionObserver(
    (g) => {
      let S = i.__pageRenderState;
      if (!S) return;
      let { currentOptions: w, totalPages: k, pageDataMap: E } = S;
      for (let W of g) {
        let L = W.target,
          $ = E.get(L);
        if ($ && W.isIntersecting) {
          Wi(L, E, k, w);
          for (let z = -Oi; z <= Oi; z++) {
            let K = $.index + z;
            K >= 0 &&
              K < S.pageStates.length &&
              K !== $.index &&
              Wi(S.pageStates[K].element, E, k, w);
          }
        }
      }
      let v = window.innerHeight,
        _ = v * 3,
        V = new Set();
      for (let [W, L] of E) {
        if (!L.rendered) continue;
        let $ = W.getBoundingClientRect();
        $.bottom > -_ && $.top < v + _ && V.add(L.index);
      }
      for (let [W, L] of E) {
        if (!L.rendered) continue;
        let $ = false;
        for (let z of V)
          if (Math.abs(L.index - z) <= Oi + 1) {
            $ = true;
            break;
          }
        !$ && V.size > 0 && Jh(W, E);
      }
    },
    { root: null, rootMargin: '1500px 0px 1500px 0px' }
  );
  for (let g of c) m.observe(g);
  ((i.__pageObserver = m),
    (i.__pageRenderState = {
      pageStates: c.map((g, S) => ({ element: g, fingerprint: p[S] })),
      totalPages: o,
      optionsHash: s,
      pageDataMap: f,
      currentOptions: n,
    }));
  let b = Math.min(e.length, Oi + 3);
  for (let g = 0; g < b; g++) Wi(c[g], f, o, n);
}
function Wi(e, t, n, o) {
  let r = t.get(e);
  if (!r || r.rendered) return;
  let { context: i, pageOptions: a } = Ss(r.page, n, o),
    s = Vi(r.page, i, a);
  for (; s.firstChild; ) e.appendChild(s.firstChild);
  r.rendered = true;
}
function Zh(e, t, n, o) {
  let r = t.get(e);
  if (!r) return;
  let { context: i, pageOptions: a } = Ss(r.page, n, o),
    l = Vi(r.page, i, a).querySelector(`.${Mn.content}`),
    u = e.querySelector(`.${Mn.content}`);
  l && u ? e.replaceChild(l, u) : ((e.innerHTML = ''), (r.rendered = false), Wi(e, t, n, o));
}
function Jh(e, t) {
  let n = t.get(e);
  !n || !n.rendered || ((e.innerHTML = ''), (n.rendered = false));
}
var ji = class {
  constructor(t = {}) {
    d$1(this, 'container', null);
    d$1(this, 'blockLookup', new Map());
    d$1(this, 'pageStates', []);
    d$1(this, 'totalPages', 0);
    d$1(this, 'options');
    d$1(this, 'doc');
    ((this.options = t), (this.doc = t.document ?? document));
  }
  setBlockLookup(t) {
    this.blockLookup = t;
  }
  mount(t) {
    ((this.container = t), this.applyContainerStyles());
  }
  unmount() {
    (this.container && (this.container.innerHTML = ''),
      (this.container = null),
      (this.pageStates = []));
  }
  applyContainerStyles() {
    if (!this.container) return;
    let t = this.options.pageGap ?? 24;
    ((this.container.style.display = 'flex'),
      (this.container.style.flexDirection = 'column'),
      (this.container.style.alignItems = 'center'),
      (this.container.style.gap = `${t}px`),
      (this.container.style.padding = `${t}px`),
      (this.container.style.backgroundColor =
        this.options.containerBackground ?? 'var(--doc-bg, #f8f9fa)'),
      (this.container.style.minHeight = '100%'));
  }
  paint(t) {
    if (!this.container) throw new Error('LayoutPainter: not mounted');
    let { pages: n } = t;
    ((this.totalPages = n.length), (this.container.innerHTML = ''), (this.pageStates = []));
    for (let o = 0; o < n.length; o++) {
      let r = n[o],
        i = { pageNumber: r.number, totalPages: this.totalPages, section: 'body' },
        a = this.renderPageWithLookup(r, i);
      (this.container.appendChild(a),
        this.pageStates.push({
          element: a,
          pageNumber: r.number,
          fragmentCount: r.fragments.length,
        }));
    }
  }
  renderPageWithLookup(t, n) {
    let o = this.doc.createElement('div');
    ((o.className = 'layout-page'),
      (o.dataset.pageNumber = String(t.number)),
      (o.style.position = 'relative'),
      (o.style.width = `${t.size.w}px`),
      (o.style.height = `${t.size.h}px`),
      (o.style.backgroundColor = this.options.pageBackground ?? '#ffffff'),
      (o.style.overflow = 'hidden'),
      this.options.showShadow && (o.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)'));
    let r = this.doc.createElement('div');
    ((r.className = 'layout-page-content'),
      (r.style.position = 'absolute'),
      (r.style.top = `${t.margins.top}px`),
      (r.style.left = `${t.margins.left}px`),
      (r.style.right = `${t.margins.right}px`),
      (r.style.bottom = `${t.margins.bottom}px`),
      (r.style.overflow = 'visible'));
    for (let i of t.fragments) {
      let a = this.renderFragmentWithLookup(i, n);
      (this.applyFragmentPosition(a, i), r.appendChild(a));
    }
    return (o.appendChild(r), o);
  }
  renderFragmentWithLookup(t, n) {
    let o = this.blockLookup.get(String(t.blockId));
    if (t.kind === 'paragraph' && o) {
      let r = o.block,
        i = o.measure;
      return jn(t, r, i, n, { document: this.doc });
    }
    if (t.kind === 'table' && o) {
      let r = o.block,
        i = o.measure;
      return Yo(t, r, i, n, { document: this.doc });
    }
    if (t.kind === 'image' && o) {
      let r = o.block,
        i = o.measure;
      return zi(t, r, i, n, { document: this.doc });
    }
    return Uo(t, n, { document: this.doc });
  }
  applyFragmentPosition(t, n) {
    ((t.style.position = 'absolute'),
      (t.style.left = `${n.x}px`),
      (t.style.top = `${n.y}px`),
      (t.style.width = `${n.width}px`),
      'height' in n && (t.style.height = `${n.height}px`));
  }
  getPageCount() {
    return this.totalPages;
  }
  getPageElement(t) {
    return this.pageStates[t]?.element ?? null;
  }
  scrollToPage(t) {
    let n = this.pageStates.find((o) => o.pageNumber === t);
    n?.element && n.element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
var fn,
  En,
  In,
  mn,
  go,
  Un,
  fu,
  ws,
  Ui = class {
    constructor() {
      f$1(this, Un);
      f$1(this, fn, 0);
      f$1(this, En, 0);
      f$1(this, In, false);
      f$1(this, mn, null);
      f$1(this, go, new Set());
    }
    setStateSeq(t) {
      g(this, fn, t);
    }
    incrementStateSeq() {
      return ++i$2(this, fn)._;
    }
    getStateSeq() {
      return e(this, fn);
    }
    getRenderSeq() {
      return e(this, En);
    }
    onLayoutStart() {
      g(this, In, true);
    }
    onLayoutComplete(t) {
      (g(this, En, t), g(this, In, false), h(this, Un, fu).call(this));
    }
    isSafeToRender() {
      return !e(this, In) && e(this, En) >= e(this, fn);
    }
    requestRender() {
      this.isSafeToRender()
        ? h(this, Un, ws).call(this)
        : g(this, mn, () => h(this, Un, ws).call(this));
    }
    onRender(t) {
      return (
        e(this, go).add(t),
        () => {
          e(this, go).delete(t);
        }
      );
    }
    reset() {
      (g(this, fn, 0), g(this, En, 0), g(this, In, false), g(this, mn, null));
    }
    getDebugInfo() {
      return {
        stateSeq: e(this, fn),
        renderSeq: e(this, En),
        layoutUpdating: e(this, In),
        hasPendingRender: e(this, mn) !== null,
        isSafe: this.isSafeToRender(),
      };
    }
  };
((fn = new WeakMap()),
  (En = new WeakMap()),
  (In = new WeakMap()),
  (mn = new WeakMap()),
  (go = new WeakMap()),
  (Un = new WeakSet()),
  (fu = function () {
    if (e(this, mn) && this.isSafeToRender()) {
      let t = e(this, mn);
      (g(this, mn, null), t());
    }
  }),
  (ws = function () {
    for (let t of e(this, go))
      try {
        t();
      } catch (n) {
        console.error('LayoutSelectionGate: render callback error', n);
      }
  }));
function gu({ pagesContainerRef: e }) {
  let t = useRef(null),
    n = useRef(-1),
    o = useCallback(
      (s) => {
        if (!e.current) return null;
        let l = e.current.querySelectorAll('span[data-pm-start][data-pm-end]');
        for (let d of Array.from(l)) {
          let c = d,
            p = Number(c.dataset.pmStart),
            f = Number(c.dataset.pmEnd);
          if (c.classList.contains('layout-run-tab')) {
            if (s >= p && s < f) return c.getBoundingClientRect().left;
            continue;
          }
          if (s >= p && s <= f && d.firstChild?.nodeType === Node.TEXT_NODE) {
            let m = d.firstChild,
              b = Math.min(s - p, m.length),
              g = c.ownerDocument;
            if (!g) continue;
            let S = g.createRange();
            return (S.setStart(m, b), S.setEnd(m, b), S.getBoundingClientRect().left);
          }
        }
        let u = e.current.querySelectorAll('.layout-empty-run');
        for (let d of Array.from(u)) {
          let c = d.closest('.layout-paragraph');
          if (!c) continue;
          let p = Number(c.dataset.pmStart),
            f = Number(c.dataset.pmEnd);
          if (s >= p && s <= f) return d.getBoundingClientRect().left;
        }
        return null;
      },
      [e]
    ),
    r = useCallback(
      (s) => {
        if (!e.current) return null;
        let l = e.current.querySelectorAll('.layout-line');
        for (let u of Array.from(l)) {
          let d = u,
            c = d.querySelectorAll('span[data-pm-start][data-pm-end]');
          for (let p of Array.from(c)) {
            let f = p,
              m = Number(f.dataset.pmStart),
              b = Number(f.dataset.pmEnd);
            if (s >= m && s <= b) return d;
          }
        }
        for (let u of Array.from(l)) {
          let d = u,
            c = d.closest('.layout-paragraph');
          if (!c) continue;
          let p = Number(c.dataset.pmStart),
            f = Number(c.dataset.pmEnd);
          if (s >= p && s <= f && c.querySelector('.layout-line') === d) return d;
        }
        return null;
      },
      [e]
    ),
    i = useCallback((s, l) => {
      let u = s.querySelectorAll('span[data-pm-start][data-pm-end]');
      if (u.length === 0) {
        let f = s.closest('.layout-paragraph');
        return f?.dataset.pmStart ? Number(f.dataset.pmStart) + 1 : null;
      }
      for (let f of Array.from(u)) {
        let m = f,
          b = m.getBoundingClientRect(),
          g = Number(m.dataset.pmStart),
          S = Number(m.dataset.pmEnd);
        if (m.classList.contains('layout-run-tab')) {
          if (l >= b.left && l <= b.right) {
            let w = (b.left + b.right) / 2;
            return l < w ? g : S;
          }
          continue;
        }
        if (l >= b.left && l <= b.right) {
          let w = m.firstChild;
          if (!w || w.nodeType !== Node.TEXT_NODE) return g;
          let k = w,
            E = m.ownerDocument;
          if (!E) return g;
          let v = 0,
            _ = k.length;
          for (; v < _; ) {
            let V = Math.floor((v + _) / 2),
              W = E.createRange();
            (W.setStart(k, V),
              W.setEnd(k, V),
              l < W.getBoundingClientRect().left ? (_ = V) : (v = V + 1));
          }
          if (v > 0 && v <= k.length) {
            let V = E.createRange();
            (V.setStart(k, v - 1), V.setEnd(k, v - 1));
            let W = V.getBoundingClientRect().left;
            (V.setStart(k, Math.min(v, k.length)), V.setEnd(k, Math.min(v, k.length)));
            let L = V.getBoundingClientRect().left;
            if (Math.abs(l - W) < Math.abs(l - L)) return g + (v - 1);
          }
          return g + Math.min(v, S - g);
        }
      }
      let d = null,
        c = 1 / 0;
      for (let f of Array.from(u)) {
        let m = f,
          b = m.getBoundingClientRect(),
          g = l < b.left ? b.left - l : l - b.right;
        g < c && ((c = g), (d = m));
      }
      if (!d) return null;
      let p = d.getBoundingClientRect();
      return l < p.left ? Number(d.dataset.pmStart) : Number(d.dataset.pmEnd);
    }, []),
    a = useCallback(
      (s, l) => {
        if (l.key !== 'ArrowUp' && l.key !== 'ArrowDown')
          return (
            (['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(l.key) ||
              (l.key.length === 1 && !l.ctrlKey && !l.metaKey)) &&
              ((t.current = null), (n.current = -1)),
            false
          );
        if (l.ctrlKey || l.metaKey) return ((t.current = null), (n.current = -1), false);
        if (!e.current) return false;
        let u = Array.from(e.current.querySelectorAll('.layout-line'));
        if (u.length === 0) return false;
        let { from: d, anchor: c } = s.state.selection;
        if (t.current === null) {
          let k = o(d);
          if (k === null) return false;
          t.current = k;
        }
        let p;
        if (n.current >= 0 && n.current < u.length) p = n.current;
        else {
          let k = r(d);
          if (!k || ((p = u.indexOf(k)), p === -1)) return false;
        }
        let f = l.key === 'ArrowUp' ? p - 1 : p + 1;
        if (f < 0 || f >= u.length) return ((n.current = -1), false);
        let m = u[f],
          b = i(m, t.current);
        if (b === null) return false;
        n.current = f;
        let { state: g, dispatch: S } = s,
          w = Math.max(0, Math.min(b, g.doc.content.size));
        try {
          let k = l.shiftKey ? TextSelection.create(g.doc, c, w) : TextSelection.create(g.doc, w);
          S(g.tr.setSelection(k));
        } catch {
          let k = g.doc.resolve(w),
            E = l.shiftKey ? TextSelection.between(g.doc.resolve(c), k) : TextSelection.near(k);
          S(g.tr.setSelection(E));
        }
        return true;
      },
      [e, o, r, i]
    );
  return {
    stickyXRef: t,
    lastVisualLineIndexRef: n,
    getCaretClientX: o,
    findLineElementAtPosition: r,
    findPositionOnLineAtClientX: i,
    handlePMKeyDown: a,
  };
}
var Qh = 12,
  Yi = 8;
function hu(e) {
  let t = [];
  for (let n of e)
    if (n.kind === 'paragraph')
      for (let o of n.runs)
        o.kind === 'text' &&
          o.footnoteRefId != null &&
          t.push({ footnoteId: o.footnoteRefId, pmPos: o.pmStart ?? 0 });
  return t;
}
function Cs(e, t) {
  let n = new Map();
  if (t.length === 0) return n;
  for (let o of t)
    for (let r of e) {
      let i = false;
      for (let a of r.fragments) {
        let s = a.pmStart ?? -1,
          l = a.pmEnd ?? -1;
        if (s >= 0 && l >= 0 && o.pmPos >= s && o.pmPos < l) {
          let u = n.get(r.number) ?? [];
          (u.includes(o.footnoteId) || u.push(o.footnoteId), n.set(r.number, u), (i = true));
          break;
        }
      }
      if (i) break;
    }
  return n;
}
function eb(e, t, n) {
  let o = [];
  for (let a = 0; a < e.content.length; a++) {
    let s = e.content[a],
      l = [];
    if (a === 0) {
      let d = { kind: 'text', text: `${t}  `, fontSize: Yi, superscript: true };
      l.push(d);
    }
    for (let d of s.content) {
      let c = d;
      if (c.type === 'run' && Array.isArray(c.content)) {
        let p = c.formatting,
          f = {};
        if (p) {
          if (
            (p.bold && (f.bold = true),
            p.italic && (f.italic = true),
            p.underline && (f.underline = true),
            p.strike && (f.strike = true),
            p.color)
          ) {
            let m = p.color;
            m.val ? (f.color = `#${m.val}`) : m.rgb && (f.color = `#${m.rgb}`);
          }
          if ((p.fontSize && (f.fontSize = p.fontSize / 2), p.fontFamily)) {
            let m = p.fontFamily;
            f.fontFamily = m.ascii || m.hAnsi;
          }
        }
        f.fontSize || (f.fontSize = Yi);
        for (let m of c.content) {
          let b = m;
          b.type === 'text' && typeof b.text == 'string'
            ? l.push({ kind: 'text', text: b.text, ...f })
            : b.type === 'tab'
              ? l.push({ kind: 'tab', ...f })
              : b.type === 'break'
                ? l.push({ kind: 'lineBreak' })
                : b.type;
        }
      }
    }
    l.length === 0 && l.push({ kind: 'text', text: '', fontSize: Yi });
    let u = { kind: 'paragraph', id: `fn-${e.id}-p${a}`, runs: l };
    o.push(u);
  }
  o.length === 0 &&
    o.push({
      kind: 'paragraph',
      id: `fn-${e.id}-empty`,
      runs: [{ kind: 'text', text: '', fontSize: Yi }],
    });
  let r = [];
  for (let a of o)
    if (a.kind === 'paragraph') {
      let s = jo(a, n);
      r.push(s);
    }
  let i = r.reduce((a, s) => (s.kind === 'paragraph' ? a + s.totalHeight : a), 0);
  return { id: e.id, displayNumber: t, blocks: o, measures: r, height: i };
}
function bu(e, t, n) {
  let o = new Map(),
    r = new Map();
  for (let s of e) (s.noteType === 'normal' || s.noteType == null) && r.set(s.id, s);
  let i = 1,
    a = new Set();
  for (let s of t) {
    if (a.has(s.footnoteId)) continue;
    a.add(s.footnoteId);
    let l = r.get(s.footnoteId);
    if (!l) continue;
    let u = eb(l, i, n);
    (o.set(s.footnoteId, u), i++);
  }
  return o;
}
function yu(e, t) {
  let n = new Map();
  for (let [o, r] of e) {
    let i = 0;
    for (let a of r) {
      let s = t.get(a);
      s && (i += s.height);
    }
    i > 0 && ((i += Qh), n.set(o, i));
  }
  return n;
}
var Ts = class {
  constructor(t, n = 1) {
    d$1(this, 'pagesContainer');
    d$1(this, 'zoom');
    ((this.pagesContainer = t), (this.zoom = n));
  }
  getCoordinatesForPosition(t) {
    let n = this.pagesContainer.getBoundingClientRect(),
      o = this.pagesContainer.querySelectorAll('span[data-pm-start][data-pm-end]');
    for (let i of Array.from(o)) {
      let a = i,
        s = Number(a.dataset.pmStart),
        l = Number(a.dataset.pmEnd);
      if (a.classList.contains('layout-run-tab')) {
        if (t >= s && t < l) {
          let u = a.getBoundingClientRect(),
            d = a.closest('.layout-line'),
            c = d ? d.offsetHeight : 16;
          return {
            x: (u.left - n.left) / this.zoom,
            y: (u.top - n.top) / this.zoom,
            height: c / this.zoom,
          };
        }
        continue;
      }
      if (t >= s && t <= l && i.firstChild?.nodeType === Node.TEXT_NODE) {
        let u = i.firstChild,
          d = Math.min(t - s, u.length),
          c = a.ownerDocument;
        if (!c) continue;
        let p = c.createRange();
        (p.setStart(u, d), p.setEnd(u, d));
        let f = p.getBoundingClientRect(),
          m = a.closest('.layout-line'),
          b = m ? m.offsetHeight : 16;
        return {
          x: (f.left - n.left) / this.zoom,
          y: (f.top - n.top) / this.zoom,
          height: b / this.zoom,
        };
      }
    }
    let r = this.pagesContainer.querySelectorAll('.layout-empty-run');
    for (let i of Array.from(r)) {
      let a = i.closest('.layout-paragraph');
      if (!a) continue;
      let s = Number(a.dataset.pmStart),
        l = Number(a.dataset.pmEnd);
      if (t >= s && t <= l) {
        let u = i.getBoundingClientRect(),
          d = i.closest('.layout-line'),
          c = d ? d.offsetHeight : 16;
        return {
          x: (u.left - n.left) / this.zoom,
          y: (u.top - n.top) / this.zoom,
          height: c / this.zoom,
        };
      }
    }
    return null;
  }
  findElementsForRange(t, n) {
    let o = [],
      r = this.pagesContainer.querySelectorAll('span[data-pm-start][data-pm-end]');
    for (let i of Array.from(r)) {
      let a = i,
        s = Number(a.dataset.pmStart);
      Number(a.dataset.pmEnd) > t && s < n && o.push(a);
    }
    return o;
  }
  getRectsForRange(t, n) {
    let o = this.pagesContainer.getBoundingClientRect(),
      r = [],
      i = this.pagesContainer.querySelectorAll('span[data-pm-start][data-pm-end]');
    for (let a of Array.from(i)) {
      let s = a,
        l = Number(s.dataset.pmStart);
      if (Number(s.dataset.pmEnd) > t && l < n) {
        if (s.classList.contains('layout-run-tab')) {
          let m = s.getBoundingClientRect();
          r.push({
            x: (m.left - o.left) / this.zoom,
            y: (m.top - o.top) / this.zoom,
            width: m.width / this.zoom,
            height: m.height / this.zoom,
          });
          continue;
        }
        if (a.firstChild?.nodeType !== Node.TEXT_NODE) continue;
        let d = a.firstChild,
          c = s.ownerDocument;
        if (!c) continue;
        let p = Math.max(0, t - l),
          f = Math.min(d.length, n - l);
        if (p < f) {
          let m = c.createRange();
          (m.setStart(d, p), m.setEnd(d, f));
          let b = m.getClientRects();
          for (let g of Array.from(b))
            r.push({
              x: (g.left - o.left) / this.zoom,
              y: (g.top - o.top) / this.zoom,
              width: g.width / this.zoom,
              height: g.height / this.zoom,
            });
        }
      }
    }
    return r;
  }
  getContainerOffset() {
    let t = this.pagesContainer.parentElement;
    if (!t) return { x: 0, y: 0 };
    let n = this.pagesContainer.getBoundingClientRect(),
      o = t.getBoundingClientRect();
    return { x: (n.left - o.left) / this.zoom, y: (n.top - o.top) / this.zoom };
  }
};
function xu(e, t = 1) {
  return new Ts(e, t);
}
var rb = 816,
  Tu = 1056,
  qi = { top: 96, right: 96, bottom: 96, left: 96 },
  ib = 24,
  ab = [],
  sb = {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'var(--doc-bg, #f8f9fa)',
  },
  lb = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 24,
  },
  cb = { position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  db = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    overflow: 'visible',
    zIndex: 8,
  };
function sn(e) {
  return Math.round((e / 1440) * 96);
}
function ub(e) {
  return { w: e?.pageWidth ? sn(e.pageWidth) : rb, h: e?.pageHeight ? sn(e.pageHeight) : Tu };
}
function pb(e) {
  let t = e?.marginTop ? sn(e.marginTop) : qi.top,
    n = e?.marginBottom ? sn(e.marginBottom) : qi.bottom;
  return {
    top: t,
    right: e?.marginRight ? sn(e.marginRight) : qi.right,
    bottom: n,
    left: e?.marginLeft ? sn(e.marginLeft) : qi.left,
    header: e?.headerDistance ? sn(e.headerDistance) : 48,
    footer: e?.footerDistance ? sn(e.footerDistance) : 48,
  };
}
function fb(e) {
  let t = e.wrapType,
    n = e.displayMode;
  return !!((t && ['square', 'tight', 'through'].includes(t)) || n === 'float');
}
function ku(e) {
  return e === void 0 ? 0 : Math.round((e * 96) / 914400);
}
function mb(e, t, n) {
  if (e) {
    if (t === 'pct') return (n * e) / 5e3;
    if (t === 'dxa' || !t || t === 'auto') return Math.round((e / 20) * 1.333);
  }
}
function vu(e, t) {
  let i = e.columnWidths ?? [],
    a = mb(e.width, e.widthType, t);
  if (i.length === 0 && e.rows.length > 0) {
    let c = e.rows[0].cells.reduce((m, b) => m + (b.colSpan ?? 1), 0),
      f = (a ?? t) / Math.max(1, c);
    i = Array(c).fill(f);
  } else if (i.length > 0 && a) {
    let c = i.reduce((p, f) => p + f, 0);
    if (c > 0 && Math.abs(c - a) > 1) {
      let p = a / c;
      i = i.map((f) => f * p);
    }
  }
  let s = new Map();
  for (let c = 0; c < e.rows.length; c++) {
    let p = e.rows[c];
    if (!p) continue;
    let f = 0,
      m = s.get(c) ?? new Set();
    for (; m.has(f); ) f++;
    for (let b of p.cells) {
      let g = b.colSpan ?? 1,
        S = b.rowSpan ?? 1;
      if (S > 1)
        for (let w = c + 1; w < c + S; w++) {
          s.has(w) || s.set(w, new Set());
          let k = s.get(w);
          for (let E = 0; E < g; E++) k.add(f + E);
        }
      for (f += g; m.has(f); ) f++;
    }
  }
  let l = e.rows.map((c, p) => {
    let f = 0,
      m = s.get(p) ?? new Set();
    for (; m.has(f); ) f++;
    return {
      cells: c.cells.map((b) => {
        let g = b.colSpan ?? 1,
          S = 0;
        for (let v = 0; v < g && f + v < i.length; v++) S += i[f + v] ?? 0;
        for (S === 0 && (S = b.width ?? 100), f += g; m.has(f); ) f++;
        let w = b.padding?.left ?? 7,
          k = b.padding?.right ?? 7,
          E = Math.max(1, S - w - k);
        return {
          blocks: b.blocks.map((v) => Ru(v, E)),
          width: S,
          height: 0,
          colSpan: b.colSpan,
          rowSpan: b.rowSpan,
        };
      }),
      height: 0,
    };
  });
  for (let c = 0; c < l.length; c++) {
    let p = l[c],
      f = e.rows[c]?.cells,
      m = 0;
    for (let w = 0; w < p.cells.length; w++) {
      let k = p.cells[w],
        E = f?.[w];
      k.height = k.blocks.reduce((V, W) => ('totalHeight' in W ? V + W.totalHeight : V), 0);
      let v = E?.padding?.top ?? 1,
        _ = E?.padding?.bottom ?? 1;
      ((k.height += v + _), (m = Math.max(m, k.height)));
    }
    let b = e.rows[c],
      g = b?.height,
      S = b?.heightRule;
    g && S === 'exact'
      ? (p.height = g)
      : g && S === 'atLeast'
        ? (p.height = Math.max(m, g))
        : (p.height = Math.max(m, 24));
  }
  let u = l.reduce((c, p) => c + p.height, 0),
    d = i.reduce((c, p) => c + p, 0) || a || t;
  return { kind: 'table', rows: l, columnWidths: i, totalWidth: d, totalHeight: u };
}
function gb(e, t) {
  let n = [];
  for (let o = 0; o < e.length; o++) {
    let r = e[o];
    if (r.kind !== 'paragraph') continue;
    let i = r;
    for (let a of i.runs) {
      if (a.kind !== 'image') continue;
      let s = a;
      if (!fb(s)) continue;
      let l = 0,
        u = s.position,
        d = s.distTop ?? 0,
        c = s.distBottom ?? 0,
        p = s.distLeft ?? 12,
        f = s.distRight ?? 12;
      if (u?.vertical) {
        let S = u.vertical;
        S.align === 'top' && S.relativeTo === 'margin'
          ? (l = 0)
          : S.posOffset !== void 0 && (l = ku(S.posOffset));
      }
      let m = l + s.height,
        b = 0,
        g = 0;
      if (u?.horizontal) {
        let S = u.horizontal;
        if (S.align === 'left') b = s.width + f;
        else if (S.align === 'right') g = s.width + p;
        else if (S.posOffset !== void 0) {
          let w = ku(S.posOffset);
          w < t / 2 ? (b = w + s.width + f) : (g = t - w + p);
        }
      } else
        s.cssFloat === 'left' ? (b = s.width + f) : s.cssFloat === 'right' && (g = s.width + p);
      if (b > 0 || g > 0) {
        let S = u?.vertical?.relativeTo === 'margin' || u?.vertical?.relativeTo === 'page';
        n.push({
          leftMargin: b,
          rightMargin: g,
          topY: l - d,
          bottomY: m + c,
          anchorBlockIndex: o,
          isMarginRelative: S,
        });
      }
    }
  }
  for (let o = 0; o < e.length; o++) {
    let r = e[o];
    if (r.kind !== 'table') continue;
    let i = r,
      a = i.floating;
    if (!a) continue;
    let s = vu(i, t),
      l = s.totalWidth,
      u = s.totalHeight,
      d = a.leftFromText ?? 12,
      c = a.rightFromText ?? 12,
      p = a.topFromText ?? 0,
      f = a.bottomFromText ?? 0,
      m = 0,
      b = 0,
      g = 0;
    (a.tblpX !== void 0
      ? (g = a.tblpX)
      : a.tblpXSpec
        ? a.tblpXSpec === 'left' || a.tblpXSpec === 'inside'
          ? (g = 0)
          : a.tblpXSpec === 'right' || a.tblpXSpec === 'outside'
            ? (g = t - l)
            : a.tblpXSpec === 'center' && (g = (t - l) / 2)
        : i.justification === 'center'
          ? (g = (t - l) / 2)
          : i.justification === 'right' && (g = t - l),
      g < t / 2 ? (m = g + l + c) : (b = t - g + d));
    let S = a.tblpY ?? 0,
      w = S + u;
    n.push({ leftMargin: m, rightMargin: b, topY: S - p, bottomY: w + f, anchorBlockIndex: o });
  }
  return n;
}
function Ru(e, t, n, o) {
  switch (e.kind) {
    case 'paragraph': {
      let r = e;
      if (!n || n.length === 0) {
        let a = cs(r, t);
        if (a) return a;
      }
      let i = jo(r, t, { floatingZones: n, paragraphYOffset: o ?? 0 });
      return ((!n || n.length === 0) && ds(r, t, i), i);
    }
    case 'table':
      return vu(e, t);
    case 'image': {
      let r = e;
      return { kind: 'image', width: r.width ?? 100, height: r.height ?? 100 };
    }
    case 'pageBreak':
      return { kind: 'pageBreak' };
    case 'columnBreak':
      return { kind: 'columnBreak' };
    case 'sectionBreak':
      return { kind: 'sectionBreak' };
    default:
      return { kind: 'paragraph', lines: [], totalHeight: 0 };
  }
}
function Pu(e, t) {
  let n = gb(e, t),
    o = n.filter((c) => c.isMarginRelative),
    r = n.filter((c) => !c.isMarginRelative),
    i = new Map();
  for (let c of o) {
    let p = i.get(c.topY) ?? [];
    (p.push(c), i.set(c.topY, p));
  }
  let a = [...r];
  for (let c of i.values()) {
    let p = Math.min(...c.map((f) => f.anchorBlockIndex));
    for (let f of c) a.push({ ...f, anchorBlockIndex: p });
  }
  let s = new Map();
  for (let c of a) {
    let p = s.get(c.anchorBlockIndex) ?? [];
    (p.push({
      leftMargin: c.leftMargin,
      rightMargin: c.rightMargin,
      topY: c.topY,
      bottomY: c.bottomY,
    }),
      s.set(c.anchorBlockIndex, p));
  }
  let l = new Set(a.map((c) => c.anchorBlockIndex)),
    u = 0,
    d = [];
  return e.map((c, p) => {
    l.has(p) && ((u = 0), (d = s.get(p) ?? []));
    let f = d.length > 0 ? d : void 0;
    try {
      let m = performance.now(),
        b = Ru(c, t, f, u),
        g = performance.now() - m;
      return (
        g > 500 && console.warn(`[measureBlocks] Block ${p} (${c.kind}) took ${Math.round(g)}ms`),
        'totalHeight' in b && ((c.kind === 'table' && c.floating) || (u += b.totalHeight)),
        b
      );
    } catch (m) {
      return (
        console.error(`[measureBlocks] Error measuring block ${p} (${c.kind}):`, m),
        { totalHeight: 20 }
      );
    }
  });
}
function Jo(e) {
  let t = [];
  for (let n of e) {
    let o = n;
    if (o.type === 'run' && Array.isArray(o.content)) {
      let r = o.formatting,
        i = {};
      if (r) {
        if (
          (r.bold && (i.bold = true),
          r.italic && (i.italic = true),
          r.underline && (i.underline = true),
          r.strike && (i.strike = true),
          r.color)
        ) {
          let a = r.color;
          a.val ? (i.color = `#${a.val}`) : a.rgb && (i.color = `#${a.rgb}`);
        }
        if ((r.fontSize && (i.fontSize = r.fontSize / 2), r.fontFamily)) {
          let a = r.fontFamily;
          i.fontFamily = a.ascii || a.hAnsi;
        }
      }
      for (let a of o.content) {
        let s = a;
        if (s.type === 'text' && typeof s.text == 'string')
          t.push({ kind: 'text', text: s.text, ...i });
        else if (s.type === 'tab') t.push({ kind: 'tab', ...i });
        else if (s.type === 'break') t.push({ kind: 'lineBreak' });
        else if (s.type === 'drawing' && s.image) {
          let l = s.image,
            u = l.size,
            d = (m) => Math.round((m / 914400) * 96),
            c = u?.width ? d(u.width) : 100,
            p = u?.height ? d(u.height) : 100,
            f = l.position;
          t.push({
            kind: 'image',
            src: l.src || '',
            width: c,
            height: p,
            alt: l.alt || void 0,
            position: f ? { horizontal: f.horizontal, vertical: f.vertical } : void 0,
          });
        }
      }
    }
    if (o.type === 'simpleField') {
      let r = o.fieldType,
        i = {};
      if (Array.isArray(o.content) && o.content.length > 0) {
        let a = o.content[0];
        if (a?.type === 'run' && a.formatting) {
          let s = a.formatting;
          if ((s.fontSize && (i.fontSize = s.fontSize / 2), s.fontFamily)) {
            let l = s.fontFamily;
            i.fontFamily = l.ascii || l.hAnsi;
          }
          if ((s.bold && (i.bold = true), s.italic && (i.italic = true), s.color)) {
            let l = s.color,
              u = l.rgb || l.val;
            u && (i.color = u.startsWith('#') ? u : `#${u}`);
          }
        }
      }
      if (r === 'PAGE') t.push({ kind: 'field', fieldType: 'PAGE', fallback: '1', ...i });
      else if (r === 'NUMPAGES')
        t.push({ kind: 'field', fieldType: 'NUMPAGES', fallback: '1', ...i });
      else if (Array.isArray(o.content)) {
        let a = Jo(o.content);
        t.push(...a);
      }
      continue;
    }
    if (o.type === 'complexField') {
      let r = o.fieldType,
        i = {};
      if (Array.isArray(o.fieldResult) && o.fieldResult.length > 0) {
        let a = o.fieldResult[0];
        if (a?.type === 'run' && a.formatting) {
          let s = a.formatting;
          if ((s.fontSize && (i.fontSize = s.fontSize / 2), s.fontFamily)) {
            let l = s.fontFamily;
            i.fontFamily = l.ascii || l.hAnsi;
          }
          if ((s.bold && (i.bold = true), s.italic && (i.italic = true), s.color)) {
            let l = s.color,
              u = l.rgb || l.val;
            u && (i.color = u.startsWith('#') ? u : `#${u}`);
          }
        }
      }
      if (r === 'PAGE') t.push({ kind: 'field', fieldType: 'PAGE', fallback: '1', ...i });
      else if (r === 'NUMPAGES')
        t.push({ kind: 'field', fieldType: 'NUMPAGES', fallback: '1', ...i });
      else if (Array.isArray(o.fieldResult)) {
        let a = Jo(o.fieldResult);
        t.push(...a);
      }
    }
    if (o.type === 'hyperlink' && Array.isArray(o.children)) {
      let r = Jo(o.children);
      t.push(...r);
    }
  }
  return t;
}
var hb = {
  single: 'solid',
  double: 'double',
  dotted: 'dotted',
  dashed: 'dashed',
  thick: 'solid',
  dashSmallGap: 'dashed',
  dotDash: 'dashed',
  dotDotDash: 'dotted',
  triple: 'double',
  wave: 'solid',
  doubleWave: 'double',
  threeDEmboss: 'ridge',
  threeDEngrave: 'groove',
  outset: 'outset',
  inset: 'inset',
};
function Xi(e) {
  if (!e || !e.style || e.style === 'none' || e.style === 'nil') return { width: 0, style: 'none' };
  let t = { style: hb[e.style] || 'solid' },
    n = e.color?.rgb;
  return (
    n && n !== 'auto' && (t.color = `#${n}`),
    e.size && (t.width = Math.max(1, Math.round((e.size / 8) * 1.333))),
    t
  );
}
function Yn(e) {
  return (e / 1440) * 96;
}
var Xo = 0;
function Mu(e) {
  let t = e.rows ?? [],
    n = e.formatting,
    o = e.columnWidths,
    r = n?.borders,
    i = new Map(),
    a = new Set(),
    s = new Map();
  for (let u = 0; u < t.length; u++) {
    let d = t[u].cells ?? [],
      c = 0;
    for (let p = 0; p < d.length; p++) {
      let m = d[p].formatting,
        b = m?.vMerge,
        g = m?.gridSpan ?? 1;
      if (b === 'restart') (s.set(c, { startRow: u, startCellIdx: p }), i.set(`${u}-${p}`, 1));
      else if (b === 'continue' || (b != null && b !== 'restart')) {
        let S = s.get(c);
        if (S) {
          let w = `${S.startRow}-${S.startCellIdx}`;
          i.set(w, (i.get(w) ?? 1) + 1);
        }
        a.add(`${u}-${p}`);
      } else s.delete(c);
      c += g;
    }
  }
  let l = t.map((u, d) => {
    let c = u.formatting,
      p = u.cells ?? [],
      f = d === 0,
      m = d === t.length - 1,
      b = p.filter((w, k) => !a.has(`${d}-${k}`)),
      g = p.map((w, k) => k).filter((w) => !a.has(`${d}-${w}`)),
      S = b.map((w, k) => {
        let E = g[k],
          v = w.formatting,
          _ = w.content ?? [],
          V = E === 0,
          W = E === p.length - 1,
          L = [];
        for (let P of _)
          if (P.type === 'paragraph' && Array.isArray(P.content)) {
            let F = P.formatting,
              B = {};
            if (F?.alignment) {
              let Z = F.alignment;
              Z === 'both'
                ? (B.alignment = 'justify')
                : ['left', 'center', 'right', 'justify'].includes(Z) && (B.alignment = Z);
            }
            let j = Jo(P.content);
            j.length > 0 &&
              L.push({
                kind: 'paragraph',
                id: `hf-tbl-p-${Xo++}`,
                runs: j,
                attrs: Object.keys(B).length > 0 ? B : void 0,
              });
          } else P.type === 'table' && L.push(Mu(P));
        L.length === 0 &&
          L.push({ kind: 'paragraph', id: `hf-tbl-p-${Xo++}`, runs: [{ kind: 'text', text: '' }] });
        let $,
          z = v?.borders,
          K = f ? r?.top : r?.insideH,
          C = m ? r?.bottom : r?.insideH,
          A = V ? r?.left : r?.insideV,
          ee = W ? r?.right : r?.insideV;
        (z || r) &&
          ($ = {
            top: Xi(z?.top ?? K),
            bottom: Xi(z?.bottom ?? C),
            left: Xi(z?.left ?? A),
            right: Xi(z?.right ?? ee),
          });
        let he = v?.margins,
          de = n?.cellMargins,
          we = he ?? de,
          Ce = {
            top: we?.top?.value != null ? Yn(we.top.value) : 1,
            right: we?.right?.value != null ? Yn(we.right.value) : 7,
            bottom: we?.bottom?.value != null ? Yn(we.bottom.value) : 1,
            left: we?.left?.value != null ? Yn(we.left.value) : 7,
          },
          Te = v?.width,
          M = Te?.value && Te.type === 'dxa' ? Yn(Te.value) : void 0,
          I = v?.shading,
          y;
        return (
          I?.fill && I.fill !== 'auto' && (y = `#${I.fill}`),
          {
            id: `hf-tbl-c-${Xo++}`,
            blocks: L,
            colSpan: v?.gridSpan,
            rowSpan: (() => {
              let P = i.get(`${d}-${E}`),
                F = v?._pmRowSpan;
              return (F && F > 1 ? F : void 0) ?? (P && P > 1 ? P : void 0);
            })(),
            width: M,
            verticalAlign: v?.verticalAlign,
            background: y,
            borders: $,
            padding: Ce,
          }
        );
      });
    return {
      id: `hf-tbl-r-${Xo++}`,
      cells: S,
      height: c?.height?.value ? Yn(c.height.value) : void 0,
      heightRule: c?.heightRule,
      isHeader: c?.header,
    };
  });
  return {
    kind: 'table',
    id: `hf-tbl-${Xo++}`,
    rows: l,
    columnWidths: o?.map(Yn),
    width: n?.width?.value,
    widthType: n?.width?.type,
    justification: n?.justification,
  };
}
function wu(e, t) {
  if (!e || !e.content || e.content.length === 0) return;
  let n = [];
  for (let a of e.content) {
    let s = a;
    if (s.type === 'paragraph' && Array.isArray(s.content)) {
      let l = s.formatting,
        u = {};
      if (l && l.alignment) {
        let c = l.alignment;
        c === 'both'
          ? (u.alignment = 'justify')
          : ['left', 'center', 'right', 'justify'].includes(c) && (u.alignment = c);
      }
      let d = Jo(s.content);
      if (d.length > 0) {
        let c = {
          kind: 'paragraph',
          id: String(n.length),
          runs: d,
          attrs: Object.keys(u).length > 0 ? u : void 0,
        };
        n.push(c);
      }
    } else s.type === 'table' && Array.isArray(s.rows) && n.push(Mu(s));
  }
  if (n.length === 0) return;
  let o = n.map((a) => {
      if (a.kind !== 'paragraph') return a;
      let s = a;
      if (!s.runs.some((d) => d.kind === 'image' && 'position' in d && d.position)) return a;
      let u = s.runs.filter((d) => !(d.kind === 'image' && 'position' in d && d.position));
      return (u.length === 0 && u.push({ kind: 'text', text: '' }), { ...s, runs: u });
    }),
    r = Pu(o, t),
    i = r.reduce(
      (a, s) => (s.kind === 'paragraph' || s.kind === 'table' ? a + s.totalHeight : a),
      0
    );
  return { blocks: n, measures: r, height: i };
}
function bb(e, t, n) {
  let o = new Map();
  if (!n?.package?.footnotes) return o;
  let r = new Map();
  for (let i of n.package.footnotes) (i.noteType && i.noteType !== 'normal') || r.set(i.id, i);
  for (let [i, a] of e) {
    let s = [];
    for (let l of a) {
      let u = r.get(l);
      if (!u) continue;
      let c = t.get(l)?.displayNumber ?? 0,
        p = e$1(u);
      s.push({ displayNumber: String(c), text: p });
    }
    s.length > 0 && o.set(i, s);
  }
  return o;
}
var yb = forwardRef(function (t, n) {
    let {
        document: o,
        styles: r,
        theme: i$1,
        sectionProperties: a,
        headerContent: s,
        footerContent: l$1,
        readOnly: u = false,
        pageGap: d = ib,
        zoom: c = 1,
        onDocumentChange: p,
        onSelectionChange: f,
        externalPlugins: m = ab,
        extensionManager: b,
        onReady: g,
        onRenderedDomContextReady: S,
        pluginOverlays: w,
        onHeaderFooterDoubleClick: k$1,
        hfEditMode: E,
        onBodyClick: v,
        className: _,
        style: V,
        commentsSidebarOpen: W = false,
        sidebarOverlay: L,
        scrollContainerRef: $,
      } = t,
      z = useRef(null),
      K = useRef(null),
      C = useRef(null),
      A = useRef(null),
      { handlePMKeyDown: ee } = gu({ pagesContainerRef: K }),
      he = useRef(f),
      de = useRef(p),
      we = useRef(g),
      Ce = useRef(S);
    ((he.current = f), (de.current = p), (we.current = g), (Ce.current = S));
    let [Te, M] = useState(null),
      [I, y] = useState([]),
      [P, F] = useState([]),
      [B, j$1] = useState(false),
      [Z, N] = useState([]),
      [U, G] = useState(null),
      [xe, R] = useState(null),
      O = useRef(false),
      D = useCallback(
        (T, ne) => {
          let q = T.tagName === 'IMG' ? T : T.querySelector('img'),
            X = (q ?? T).getBoundingClientRect();
          return {
            element: q ?? T,
            pmPos: ne,
            width: Math.round(X.width / c),
            height: Math.round(X.height / c),
          };
        },
        [c]
      ),
      ie = useRef(false),
      ue = useRef(null),
      pe = useRef(false),
      Ie = useRef(0),
      me = useRef(0),
      Se = useRef(0),
      fe = useRef({ left: 0, right: 0 }),
      $e = useRef(null),
      Qe = useRef(false),
      Ge = useRef(0),
      tt = useRef(0),
      We = useRef(0),
      Je = useRef(0),
      it = useRef(null),
      ze = useRef(false),
      ct = useRef(false),
      De = useRef(0),
      Rt = useRef(0),
      gn = useRef(0),
      ln = useRef(0),
      It = useRef(null),
      Ft = useRef(false),
      le = useRef(null),
      hn = useRef(null),
      Xt = useRef(null),
      or = 5,
      $t = useMemo(() => new Ui(), []),
      Oe = useMemo(() => ub(a), [a]),
      ot = useMemo(() => pb(a), [a]),
      Lt = Oe.w - ot.left - ot.right,
      Wt = useMemo(() => new ji({ pageGap: d, showShadow: true, pageBackground: '#fff' }), [d]);
    A.current = Wt;
    let Pt = useCallback(
        (T) => {
          let ne = performance.now(),
            q = $t.getStateSeq();
          $t.onLayoutStart();
          try {
            let X = performance.now(),
              te = Oe.h - ot.top - ot.bottom,
              Y = Vd(T.doc, { theme: i$1, pageContentHeight: te }),
              J = performance.now() - X;
            (J > 500 &&
              console.warn(
                `[PagedEditor] toFlowBlocks took ${Math.round(J)}ms (${Y.length} blocks)`
              ),
              y(Y),
              (X = performance.now()));
            let Q = Pu(Y, Lt);
            ((J = performance.now() - X),
              J > 1e3 &&
                console.warn(
                  `[PagedEditor] measureBlocks took ${Math.round(J)}ms (${Y.length} blocks)`
                ),
              F(Q));
            let ce = hu(Y),
              ve = ce.length > 0 && o?.package?.footnotes,
              be = wu(s, Lt),
              Re = wu(l$1, Lt),
              Fe = ot.header ?? 48,
              Le = ot.footer ?? 48,
              Ye = ot.top - Fe,
              Xe = ot.bottom - Le,
              xt = be?.height ?? 0,
              dt = Re?.height ?? 0,
              Dt = ot;
            ((xt > Ye || dt > Xe) &&
              ((Dt = { ...ot }), xt > Ye && (Dt.top = Fe + xt), dt > Xe && (Dt.bottom = Le + dt)),
              (X = performance.now()));
            let zt,
              Hn = new Map(),
              So = new Map();
            if (ve) {
              let bn = Li(Y, Q, { pageSize: Oe, margins: Dt });
              ((Hn = Cs(bn.pages, ce)), (So = bu(o.package.footnotes, ce, Lt)));
              let Qt = yu(Hn, So);
              if (Qt.size > 0) {
                ((zt = Li(Y, Q, { pageSize: Oe, margins: Dt, footnoteReservedHeights: Qt })),
                  (Hn = Cs(zt.pages, ce)));
                for (let [nt, Nn] of Hn) {
                  let zn = zt.pages.find((aa) => aa.number === nt);
                  zn && (zn.footnoteIds = Nn);
                }
              } else zt = bn;
            } else zt = Li(Y, Q, { pageSize: Oe, margins: Dt });
            if (
              ((J = performance.now() - X),
              J > 500 &&
                console.warn(
                  `[PagedEditor] layoutDocument took ${Math.round(J)}ms (${zt.pages.length} pages)`
                ),
              M(zt),
              K.current && A.current)
            ) {
              X = performance.now();
              let bn = new Map();
              for (let nt = 0; nt < Y.length; nt++) {
                let Nn = Y[nt],
                  zn = Q[nt];
                Nn && zn && bn.set(String(Nn.id), { block: Nn, measure: zn });
              }
              A.current.setBlockLookup(bn);
              let Qt = ve ? bb(Hn, So, o) : void 0;
              if (
                (ks(zt.pages, K.current, {
                  pageGap: d,
                  showShadow: !0,
                  pageBackground: '#fff',
                  blockLookup: bn,
                  headerContent: be,
                  footerContent: Re,
                  headerDistance: a?.headerDistance ? sn(a.headerDistance) : void 0,
                  footerDistance: a?.footerDistance ? sn(a.footerDistance) : void 0,
                  pageBorders: a?.pageBorders,
                  theme: i$1,
                  footnotesByPage: Qt?.size ? Qt : void 0,
                }),
                (J = performance.now() - X),
                J > 500 && console.warn(`[PagedEditor] renderPages took ${Math.round(J)}ms`),
                S)
              ) {
                let nt = xu(K.current, c);
                S(nt);
              }
            }
            let ko = performance.now() - ne;
            ko > 2e3 &&
              console.warn(
                `[PagedEditor] Layout pipeline took ${Math.round(ko)}ms total (${Y.length} blocks, ${Q.length} measures)`
              );
          } catch (X) {
            console.error('[PagedEditor] Layout pipeline error:', X);
          }
          $t.onLayoutComplete(q);
        },
        [Lt, Oe, ot, d, c, $t, s, l$1, a, S, o]
      ),
      _t = useRef(null),
      Jn = useCallback(
        (T) => {
          if (_t.current) {
            _t.current.state = T;
            return;
          }
          let ne = requestAnimationFrame(() => {
            let q = _t.current;
            ((_t.current = null), q && Pt(q.state));
          });
          _t.current = { rafId: ne, state: T };
        },
        [Pt]
      );
    useEffect(
      () => () => {
        _t.current && (cancelAnimationFrame(_t.current.rafId), (_t.current = null));
      },
      []
    );
    let Qn = useCallback((T, ne = 1) => {
        if (!K.current) return null;
        let q = K.current.parentElement?.querySelector('[data-testid="selection-overlay"]');
        if (!q) return null;
        let X = q.getBoundingClientRect(),
          te = K.current.querySelectorAll('span[data-pm-start][data-pm-end]');
        for (let J of Array.from(te)) {
          let Q = J,
            ce = Number(Q.dataset.pmStart),
            ve = Number(Q.dataset.pmEnd);
          if (Q.classList.contains('layout-run-tab')) {
            if (T >= ce && T < ve) {
              let be = Q.getBoundingClientRect(),
                Re = Q.closest('.layout-page'),
                Fe = Re ? Number(Re.dataset.pageNumber) - 1 : 0,
                Le = Q.closest('.layout-line'),
                Ye = Le ? Le.offsetHeight : 16;
              return {
                x: (be.left - X.left) / ne,
                y: (be.top - X.top) / ne,
                height: Ye,
                pageIndex: Fe,
              };
            }
            continue;
          }
          if (T >= ce && T <= ve && J.firstChild?.nodeType === Node.TEXT_NODE) {
            let be = J.firstChild,
              Re = Math.min(T - ce, be.length),
              Fe = Q.ownerDocument;
            if (!Fe) continue;
            let Le = Fe.createRange();
            (Le.setStart(be, Re), Le.setEnd(be, Re));
            let Ye = Le.getBoundingClientRect(),
              Xe = Q.closest('.layout-page'),
              xt = Xe ? Number(Xe.dataset.pageNumber) - 1 : 0,
              dt = Q.closest('.layout-line'),
              Dt = dt ? dt.offsetHeight : 16;
            return {
              x: (Ye.left - X.left) / ne,
              y: (Ye.top - X.top) / ne,
              height: Dt,
              pageIndex: xt,
            };
          }
        }
        let Y = K.current.querySelectorAll('.layout-empty-run');
        for (let J of Array.from(Y)) {
          let Q = J.closest('.layout-paragraph');
          if (!Q) continue;
          let ce = Number(Q.dataset.pmStart),
            ve = Number(Q.dataset.pmEnd);
          if (T >= ce && T <= ve) {
            let be = J.getBoundingClientRect(),
              Re = Q.closest('.layout-page'),
              Fe = Re ? Number(Re.dataset.pageNumber) - 1 : 0,
              Le = J.closest('.layout-line'),
              Ye = Le ? Le.offsetHeight : 16;
            return {
              x: (be.left - X.left) / ne,
              y: (be.top - X.top) / ne,
              height: Ye,
              pageIndex: Fe,
            };
          }
        }
        return null;
      }, []),
      Bt = useCallback(
        (T) => {
          let { from: ne, to: q } = T.selection;
          if ((he.current?.(ne, q), K.current)) {
            let X = K.current.querySelectorAll('.layout-table-cell-selected');
            for (let J of Array.from(X)) J.classList.remove('layout-table-cell-selected');
            let te = T.selection;
            if ('$anchorCell' in te && typeof te.forEachCell == 'function') {
              let J = [];
              te.forEachCell((ce, ve) => {
                J.push([ve, ve + ce.nodeSize]);
              });
              let Q = K.current.querySelectorAll('.layout-table-cell');
              for (let ce of Array.from(Q)) {
                let ve = ce,
                  be = ve.dataset.pmStart;
                if (be !== void 0) {
                  let Re = Number(be);
                  for (let [Fe, Le] of J)
                    if (Re >= Fe && Re < Le) {
                      ve.classList.add('layout-table-cell-selected');
                      break;
                    }
                }
              }
            }
          }
          if (!(!Te || I.length === 0))
            if (ne === q) {
              let X = Qn(ne, c);
              if (X) G(X);
              else {
                let te = K.current?.parentElement?.querySelector(
                    '[data-testid="selection-overlay"]'
                  ),
                  Y = K.current?.querySelector('.layout-page');
                if (te && Y) {
                  let J = te.getBoundingClientRect(),
                    Q = Y.getBoundingClientRect(),
                    ce = l(Te, I, P, ne);
                  G(
                    ce
                      ? { ...ce, x: ce.x + (Q.left - J.left) / c, y: ce.y + (Q.top - J.top) / c }
                      : null
                  );
                } else G(null);
              }
              N([]);
            } else {
              let X = K.current?.parentElement?.querySelector('[data-testid="selection-overlay"]');
              if (X && K.current) {
                let te = X.getBoundingClientRect(),
                  Y = [],
                  J = K.current.querySelectorAll('span[data-pm-start][data-pm-end]');
                for (let Q of Array.from(J)) {
                  let ce = Q,
                    ve = Number(ce.dataset.pmStart);
                  if (Number(ce.dataset.pmEnd) > ne && ve < q) {
                    if (ce.classList.contains('layout-run-tab')) {
                      let Xe = ce.getBoundingClientRect(),
                        xt = ce.closest('.layout-page'),
                        dt = xt ? Number(xt.dataset.pageNumber) - 1 : 0;
                      Y.push({
                        x: (Xe.left - te.left) / c,
                        y: (Xe.top - te.top) / c,
                        width: Xe.width / c,
                        height: Xe.height / c,
                        pageIndex: dt,
                      });
                      continue;
                    }
                    if (Q.firstChild?.nodeType !== Node.TEXT_NODE) continue;
                    let Re = Q.firstChild,
                      Fe = ce.ownerDocument;
                    if (!Fe) continue;
                    let Le = Math.max(0, ne - ve),
                      Ye = Math.min(Re.length, q - ve);
                    if (Le < Ye) {
                      let Xe = Fe.createRange();
                      (Xe.setStart(Re, Le), Xe.setEnd(Re, Ye));
                      let xt = Xe.getClientRects();
                      for (let dt of Array.from(xt)) {
                        let Dt = ce.closest('.layout-page'),
                          zt = Dt ? Number(Dt.dataset.pageNumber) - 1 : 0;
                        Y.push({
                          x: (dt.left - te.left) / c,
                          y: (dt.top - te.top) / c,
                          width: dt.width / c,
                          height: dt.height / c,
                          pageIndex: zt,
                        });
                      }
                    }
                  }
                }
                if (Y.length > 0) N(Y);
                else {
                  let Q = K.current.querySelector('.layout-page');
                  if (Q) {
                    let ce = Q.getBoundingClientRect(),
                      ve = (ce.left - te.left) / c,
                      be = (ce.top - te.top) / c,
                      Fe = k(Te, I, P, ne, q).map((Le) => ({ ...Le, x: Le.x + ve, y: Le.y + be }));
                    N(Fe);
                  } else N([]);
                }
              } else N([]);
              G(null);
            }
        },
        [Te, I, P, Qn, c]
      ),
      An = useCallback(
        (T, ne) => {
          if (T.docChanged) {
            ($t.incrementStateSeq(), Jn(ne));
            let q = C.current?.getDocument();
            q && de.current?.(q);
          }
          ($t.requestRender(), T.docChanged || Bt(ne));
        },
        [Jn, Bt, $t]
      ),
      rr = useCallback(
        (T) => {
          let { selection: ne } = T;
          (ne instanceof NodeSelection && ne.node.type.name === 'image'
            ? (N([]), G(null))
            : $t.isSafeToRender() && Bt(T),
            requestAnimationFrame(() => {
              let q = C.current?.getView();
              if (!q) {
                R(null);
                return;
              }
              let { selection: X } = q.state;
              if (X instanceof NodeSelection && X.node.type.name === 'image') {
                let te = X.from,
                  Y = K.current?.querySelector(`[data-pm-start="${te}"]`);
                if (Y) {
                  R(D(Y, te));
                  return;
                }
              }
              O.current || R(null);
            }));
        },
        [Bt, c, D, $t]
      ),
      At = useCallback(
        (T, ne) => {
          if (!K.current || !Te) return null;
          let q = eu(K.current, T, ne, c);
          if (q !== null) return q;
          let X = K.current.querySelectorAll('.layout-page'),
            te = -1,
            Y = null;
          for (let Re = 0; Re < X.length; Re++) {
            let Le = X[Re].getBoundingClientRect();
            if (T >= Le.left && T <= Le.right && ne >= Le.top && ne <= Le.bottom) {
              ((te = Re), (Y = Le));
              break;
            }
          }
          if (te < 0 || !Y) return null;
          let J = (T - Y.left) / c,
            Q = (ne - Y.top) / c,
            ce = Te.pages[te];
          if (!ce) return null;
          let ve = { pageIndex: te, page: ce, pageY: Q },
            be = i(ve, I, P, { x: J, y: Q });
          if (!be) return null;
          if (be.fragment.kind === 'table') {
            let Re = j(ve, I, P, { x: J, y: Q });
            return ps(be, Re);
          }
          return ps(be);
        },
        [Te, I, P, c]
      ),
      Zt = useCallback((T) => {
        let ne = C.current?.getView();
        if (!ne) return null;
        try {
          let q = ne.state.doc.resolve(T);
          for (let X = q.depth; X > 0; X--) {
            let te = q.node(X);
            if (te.type.name === 'tableCell' || te.type.name === 'tableHeader') return q.before(X);
          }
        } catch {}
        return null;
      }, []),
      wt = useCallback((T) => {
        let ne = ['layout-block-image', 'layout-image', 'layout-page-floating-image'],
          q = (X) => !!X.dataset.pmStart && ne.some((te) => X.classList.contains(te));
        return T.tagName === 'IMG' && T.classList.contains('layout-run-image')
          ? T
          : T.tagName === 'IMG' && T.parentElement && q(T.parentElement)
            ? T.parentElement
            : q(T)
              ? T
              : null;
      }, []),
      eo = useCallback((T) => {
        let ne = K.current;
        if (!ne) return;
        let q = ne.querySelector(`[data-pm-start="${T}"]`);
        q && q.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, []),
      He = useCallback(
        (T) => {
          if (!C.current || T.button !== 0) return;
          if (T.target.closest('a[href^="#"]')) {
            (T.preventDefault(), T.stopPropagation());
            return;
          }
          if (u) return;
          if (E && v) {
            let Y = T.target;
            if (
              !(
                Y.closest('.layout-page-header') ||
                Y.closest('.layout-page-footer') ||
                Y.closest('.hf-inline-editor')
              )
            ) {
              (T.preventDefault(), T.stopPropagation(), v());
              return;
            }
          }
          if (!E) {
            let Y = T.target;
            if (Y.closest('.layout-page-header') || Y.closest('.layout-page-footer')) {
              (T.preventDefault(),
                C.current && (C.current.setSelection(0), C.current.focus(), j$1(true)));
              return;
            }
          }
          let q = T.target;
          if (q.classList.contains('layout-table-resize-handle')) {
            (T.preventDefault(),
              T.stopPropagation(),
              (pe.current = true),
              (Ie.current = T.clientX),
              ($e.current = q),
              q.classList.add('dragging'));
            let Y = parseInt(q.dataset.columnIndex ?? '0', 10);
            ((me.current = Y), (Se.current = parseInt(q.dataset.tablePmStart ?? '0', 10)));
            let J = C.current.getView();
            if (J) {
              let Q = J.state.doc.resolve(Se.current + 1);
              for (let ce = Q.depth; ce >= 0; ce--) {
                let ve = Q.node(ce);
                if (ve.type.name === 'table') {
                  let be = ve.attrs.columnWidths;
                  be &&
                    be[Y] !== void 0 &&
                    be[Y + 1] !== void 0 &&
                    (fe.current = { left: be[Y], right: be[Y + 1] });
                  break;
                }
              }
            }
            return;
          }
          if (
            q.classList.contains('layout-table-row-resize-handle') ||
            q.classList.contains('layout-table-edge-handle-bottom')
          ) {
            (T.preventDefault(),
              T.stopPropagation(),
              (Qe.current = true),
              (Ge.current = T.clientY),
              (it.current = q),
              (ze.current = q.dataset.isEdge === 'bottom'),
              q.classList.add('dragging'));
            let Y = parseInt(q.dataset.rowIndex ?? '0', 10);
            ((tt.current = Y), (We.current = parseInt(q.dataset.tablePmStart ?? '0', 10)));
            let J = C.current.getView();
            if (J) {
              let Q = J.state.doc.resolve(We.current + 1);
              for (let ce = Q.depth; ce >= 0; ce--) {
                let ve = Q.node(ce);
                if (ve.type.name === 'table') {
                  let be = null,
                    Re = 0;
                  if (
                    (ve.forEach((Fe) => {
                      (Re === Y && (be = Fe), Re++);
                    }),
                    be)
                  ) {
                    let Fe = be.attrs.height;
                    if (Fe) Je.current = Fe;
                    else {
                      let Ye = q.closest('.layout-table')?.querySelector(`[data-row-index="${Y}"]`),
                        Xe = Ye ? Ye.getBoundingClientRect().height : 30;
                      Je.current = Math.round(Xe * 15);
                    }
                  }
                  break;
                }
              }
            }
            return;
          }
          if (q.classList.contains('layout-table-edge-handle-right')) {
            (T.preventDefault(),
              T.stopPropagation(),
              (ct.current = true),
              (De.current = T.clientX),
              (It.current = q),
              q.classList.add('dragging'));
            let Y = parseInt(q.dataset.columnIndex ?? '0', 10);
            ((Rt.current = Y), (gn.current = parseInt(q.dataset.tablePmStart ?? '0', 10)));
            let J = C.current.getView();
            if (J) {
              let Q = J.state.doc.resolve(gn.current + 1);
              for (let ce = Q.depth; ce >= 0; ce--) {
                let ve = Q.node(ce);
                if (ve.type.name === 'table') {
                  let be = ve.attrs.columnWidths;
                  be && be[Y] !== void 0 && (ln.current = be[Y]);
                  break;
                }
              }
            }
            return;
          }
          let X = wt(q);
          if (X) {
            (T.preventDefault(), T.stopPropagation());
            let Y = X.dataset.pmStart;
            if (Y !== void 0) {
              let J = parseInt(Y, 10);
              (C.current.setNodeSelection(J), R(D(X, J)), N([]), G(null));
            }
            (C.current.focus(), j$1(true));
            return;
          }
          (R(null), T.preventDefault());
          let te = At(T.clientX, T.clientY);
          if (te !== null) {
            let Y = Zt(te);
            ((le.current = Y),
              (Ft.current = false),
              (hn.current = null),
              (Xt.current = null),
              (ie.current = true),
              (ue.current = te),
              C.current.setSelection(te));
          } else {
            ((le.current = null), (Ft.current = false));
            let Y = C.current.getView();
            if (Y) {
              let J = Math.max(0, Y.state.doc.content.size - 1);
              (C.current.setSelection(J), (ue.current = J), (ie.current = true));
            }
          }
          (C.current.focus(), j$1(true));
        },
        [At, Zt, u, E, v, c]
      ),
      qe = useCallback(
        (T) => {
          if (pe.current) {
            T.preventDefault();
            let X = T.clientX - Ie.current;
            if ($e.current) {
              let te = parseFloat($e.current.style.left);
              (($e.current.style.left = `${te + X}px`), (Ie.current = T.clientX));
              let Y = Math.round(X * 15),
                J = 300,
                Q = fe.current.left + Y,
                ce = fe.current.right - Y;
              Q >= J && ce >= J && (fe.current = { left: Q, right: ce });
            }
            return;
          }
          if (Qe.current) {
            T.preventDefault();
            let X = T.clientY - Ge.current;
            if (it.current) {
              let te = parseFloat(it.current.style.top);
              ((it.current.style.top = `${te + X}px`), (Ge.current = T.clientY));
              let Y = Math.round(X * 15),
                J = 200,
                Q = Je.current + Y;
              Q >= J && (Je.current = Q);
            }
            return;
          }
          if (ct.current) {
            T.preventDefault();
            let X = T.clientX - De.current;
            if (It.current) {
              let te = parseFloat(It.current.style.left);
              ((It.current.style.left = `${te + X}px`), (De.current = T.clientX));
              let Y = Math.round(X * 15),
                J = 300,
                Q = ln.current + Y;
              Q >= J && (ln.current = Q);
            }
            return;
          }
          if (!ie.current || ue.current === null || !C.current || !K.current) return;
          let ne = At(T.clientX, T.clientY);
          if (ne === null) return;
          if (le.current !== null) {
            if (Ft.current) {
              let te = Zt(ne);
              if (te !== null) {
                C.current.setCellSelection(le.current, te);
                return;
              }
            }
            let X = Zt(ne);
            if (X !== null && X !== le.current) {
              ((Ft.current = true), C.current.setCellSelection(le.current, X), (Xt.current = null));
              return;
            }
            if (hn.current !== null && ne === hn.current) {
              if (Xt.current === null) Xt.current = T.clientX;
              else if (Math.abs(T.clientX - Xt.current) >= or) {
                ((Ft.current = true),
                  C.current.setCellSelection(le.current, le.current),
                  (Xt.current = null));
                return;
              }
            } else ((Xt.current = null), (hn.current = ne));
          }
          let q = ue.current;
          C.current.setSelection(q, ne);
        },
        [At, Zt]
      ),
      yo = useCallback(() => {
        if (pe.current) {
          ((pe.current = false),
            $e.current && ($e.current.classList.remove('dragging'), ($e.current = null)));
          let T = C.current?.getView();
          if (T) {
            let ne = Se.current,
              q = me.current,
              { left: X, right: te } = fe.current,
              Y = T.state.doc.resolve(ne + 1);
            for (let J = Y.depth; J >= 0; J--) {
              let Q = Y.node(J);
              if (Q.type.name === 'table') {
                let ce = Y.before(J),
                  ve = T.state.tr,
                  be = [...Q.attrs.columnWidths];
                ((be[q] = X),
                  (be[q + 1] = te),
                  ve.setNodeMarkup(ce, void 0, { ...Q.attrs, columnWidths: be }));
                let Re = ce + 1;
                (Q.forEach((Fe) => {
                  let Le = Re + 1,
                    Ye = 0;
                  (Fe.forEach((Xe) => {
                    let xt = Xe.attrs.colspan || 1;
                    if (Ye === q || Ye === q + 1) {
                      let dt = Ye === q ? X : te;
                      ve.setNodeMarkup(ve.mapping.map(Le), void 0, {
                        ...Xe.attrs,
                        width: dt,
                        widthType: 'dxa',
                        colwidth: null,
                      });
                    }
                    ((Le += Xe.nodeSize), (Ye += xt));
                  }),
                    (Re += Fe.nodeSize));
                }),
                  T.dispatch(ve));
                break;
              }
            }
          }
          return;
        }
        if (Qe.current) {
          ((Qe.current = false),
            it.current && (it.current.classList.remove('dragging'), (it.current = null)));
          let T = C.current?.getView();
          if (T) {
            let ne = We.current,
              q = tt.current,
              X = Je.current,
              te = T.state.doc.resolve(ne + 1);
            for (let Y = te.depth; Y >= 0; Y--) {
              let J = te.node(Y);
              if (J.type.name === 'table') {
                let Q = te.before(Y),
                  ce = T.state.tr,
                  ve = Q + 1,
                  be = 0;
                (J.forEach((Re) => {
                  (be === q &&
                    ce.setNodeMarkup(ce.mapping.map(ve), void 0, {
                      ...Re.attrs,
                      height: X,
                      heightRule: 'atLeast',
                    }),
                    (ve += Re.nodeSize),
                    be++);
                }),
                  T.dispatch(ce));
                break;
              }
            }
          }
          return;
        }
        if (ct.current) {
          ((ct.current = false),
            It.current && (It.current.classList.remove('dragging'), (It.current = null)));
          let T = C.current?.getView();
          if (T) {
            let ne = gn.current,
              q = Rt.current,
              X = ln.current,
              te = T.state.doc.resolve(ne + 1);
            for (let Y = te.depth; Y >= 0; Y--) {
              let J = te.node(Y);
              if (J.type.name === 'table') {
                let Q = te.before(Y),
                  ce = T.state.tr,
                  ve = [...J.attrs.columnWidths];
                ((ve[q] = X), ce.setNodeMarkup(Q, void 0, { ...J.attrs, columnWidths: ve }));
                let be = Q + 1;
                (J.forEach((Re) => {
                  let Fe = be + 1,
                    Le = 0;
                  (Re.forEach((Ye) => {
                    let Xe = Ye.attrs.colspan || 1;
                    (Le === q &&
                      ce.setNodeMarkup(ce.mapping.map(Fe), void 0, {
                        ...Ye.attrs,
                        width: X,
                        widthType: 'dxa',
                        colwidth: null,
                      }),
                      (Fe += Ye.nodeSize),
                      (Le += Xe));
                  }),
                    (be += Re.nodeSize));
                }),
                  T.dispatch(ce));
                break;
              }
            }
          }
          return;
        }
        ((ie.current = false), (Ft.current = false), (hn.current = null), (Xt.current = null));
      }, []);
    useEffect(
      () => (
        window.addEventListener('mousemove', qe),
        window.addEventListener('mouseup', yo),
        () => {
          (window.removeEventListener('mousemove', qe), window.removeEventListener('mouseup', yo));
        }
      ),
      [qe, yo]
    );
    let ea = useCallback(
        (T) => {
          let ne = T.target.closest('a[href^="#"]');
          if (ne) {
            (T.preventDefault(), T.stopPropagation());
            let q = ne.getAttribute('href')?.substring(1);
            if (q && C.current) {
              let X = C.current.getView();
              if (X) {
                let te = null;
                (X.state.doc.descendants((Y, J) => {
                  if (te !== null) return false;
                  if (Y.type.name === 'paragraph' && Y.attrs.bookmarks?.some((ce) => ce.name === q))
                    return ((te = J), false);
                }),
                  te !== null && (eo(te), C.current.setSelection(te + 1)));
              }
            }
            return;
          }
          if (T.detail === 2 && k$1) {
            let q = T.target,
              X = q.closest('.layout-page-header'),
              te = q.closest('.layout-page-footer');
            if (X) {
              (T.preventDefault(), T.stopPropagation(), k$1('header'));
              return;
            }
            if (te) {
              (T.preventDefault(), T.stopPropagation(), k$1('footer'));
              return;
            }
          }
          if (T.detail === 2 && C.current) {
            let q = At(T.clientX, T.clientY);
            if (q !== null) {
              let X = Zt(q);
              if (X !== null) {
                (T.preventDefault(), T.stopPropagation(), C.current.setCellSelection(X, X));
                return;
              }
              let te = C.current.getView();
              if (te) {
                let { doc: Y } = te.state,
                  J = Y.resolve(q),
                  Q = J.parent;
                if (Q.isTextblock) {
                  let ce = Q.textContent,
                    ve = J.parentOffset,
                    be = ve;
                  for (; be > 0 && /\w/.test(ce[be - 1]); ) be--;
                  let Re = ve;
                  for (; Re < ce.length && /\w/.test(ce[Re]); ) Re++;
                  let Fe = J.start() + be,
                    Le = J.start() + Re;
                  Fe < Le && C.current.setSelection(Fe, Le);
                }
              }
            }
          }
          if (T.detail === 3 && C.current) {
            let q = At(T.clientX, T.clientY);
            if (q !== null) {
              let X = C.current.getView();
              if (X) {
                let { doc: te } = X.state,
                  Y = te.resolve(q),
                  J = Y.start(Y.depth),
                  Q = Y.end(Y.depth);
                C.current.setSelection(J, Q);
              }
            }
          }
        },
        [At, k$1]
      ),
      gt = useCallback(
        (T) => {
          u || T.target.closest('.docx-comments-sidebar') || (C.current?.focus(), j$1(true));
        },
        [u]
      ),
      ht = useCallback((T) => {
        let ne = T.relatedTarget;
        (ne && z.current?.contains(ne)) || j$1(false);
      }, []),
      ir = useCallback((T, ne, q) => {
        let X = C.current?.getView();
        if (X)
          try {
            let te = X.state.doc.nodeAt(T);
            if (!te || te.type.name !== 'image') return;
            let Y = X.state.tr.setNodeMarkup(T, void 0, { ...te.attrs, width: ne, height: q });
            (X.dispatch(Y), C.current?.setNodeSelection(T));
          } catch {}
      }, []),
      Nt = useCallback(() => {
        O.current = true;
      }, []),
      Jt = useCallback(() => {
        O.current = false;
      }, []),
      xo = useCallback(
        (T, ne, q) => {
          let X = C.current?.getView();
          if (X)
            try {
              let te = X.state.doc.nodeAt(T);
              if (!te || te.type.name !== 'image') return;
              if (
                te.attrs.displayMode === 'float' ||
                (te.attrs.wrapType && ['square', 'tight', 'through'].includes(te.attrs.wrapType))
              ) {
                let J = K.current?.querySelectorAll('.layout-page');
                if (!J || J.length === 0) return;
                let Q = null;
                for (let xt of J) {
                  let dt = xt.getBoundingClientRect();
                  if (q >= dt.top && q <= dt.bottom) {
                    Q = xt.querySelector('.layout-page-content');
                    break;
                  }
                }
                if ((Q || (Q = J[J.length - 1].querySelector('.layout-page-content')), !Q)) return;
                let ce = Q.getBoundingClientRect(),
                  ve = (ne - ce.left) / c,
                  be = (q - ce.top) / c,
                  Re = 914400 / 96,
                  Fe = Math.round(ve * Re),
                  Le = Math.round(be * Re),
                  Ye = {
                    horizontal: { posOffset: Fe, relativeTo: 'margin' },
                    vertical: { posOffset: Le, relativeTo: 'margin' },
                  },
                  Xe = X.state.tr.setNodeMarkup(T, void 0, { ...te.attrs, position: Ye });
                (X.dispatch(Xe), C.current?.setNodeSelection(T));
              } else {
                let J = At(ne, q);
                if (J === null || J === T || J === T + 1) return;
                let Q = X.state.tr;
                if (J <= T)
                  ((Q = Q.delete(T, T + te.nodeSize)),
                    (Q = Q.insert(J, te)),
                    C.current?.setNodeSelection(J));
                else {
                  Q = Q.delete(T, T + te.nodeSize);
                  let ce = J - te.nodeSize;
                  ((Q = Q.insert(Math.min(ce, Q.doc.content.size), te)),
                    C.current?.setNodeSelection(Math.min(ce, Q.doc.content.size - 1)));
                }
                X.dispatch(Q);
              }
            } catch {}
        },
        [At, c]
      ),
      Dn = useCallback(() => {
        O.current = true;
      }, []),
      ta = useCallback(() => {
        O.current = false;
      }, []),
      na = useCallback(
        (T) => {
          if (!u) {
            if (
              (C.current?.isFocused() || (C.current?.focus(), j$1(true)),
              T.key === ' ' && !T.ctrlKey && !T.metaKey)
            ) {
              T.preventDefault();
              let ne = C.current?.getView();
              if (ne) {
                let { from: q, to: X } = ne.state.selection;
                ne.someProp('handleTextInput', (Y) => Y(ne, q, X, ' ')) ||
                  ne.dispatch(ne.state.tr.insertText(' '));
              }
              return;
            }
            (['PageUp', 'PageDown'].includes(T.key) && !T.metaKey && T.ctrlKey,
              T.key === 'Home' &&
                (T.metaKey || T.ctrlKey) &&
                z.current &&
                (z.current.scrollTop = 0),
              T.key === 'End' &&
                (T.metaKey || T.ctrlKey) &&
                z.current &&
                (z.current.scrollTop = z.current.scrollHeight));
          }
        },
        [u]
      ),
      oa = useCallback(
        (T) => {
          u ||
            T.target.closest('.docx-comments-sidebar') ||
            C.current?.isFocused() ||
            (C.current?.focus(), j$1(true));
        },
        [u]
      ),
      ra = useCallback(
        (T) => {
          (Pt(T.state),
            Bt(T.state),
            u ||
              requestAnimationFrame(() => {
                (T.focus(), j$1(true));
              }));
        },
        [Pt, Bt, u]
      );
    useEffect(() => {
      let T = () => {
        let ne = C.current?.getView();
        ne && (c$1(), us(), Pt(ne.state), Bt(ne.state));
      };
      return (
        window.document.fonts.addEventListener('loadingdone', T),
        () => {
          window.document.fonts.removeEventListener('loadingdone', T);
        }
      );
    }, []);
    let ar = useRef(0);
    (useEffect(() => {
      if (ar.current === 0) {
        ar.current = 1;
        return;
      }
      let T = C.current?.getView();
      T && Pt(T.state);
    }, [s, l$1, Pt]),
      useEffect(() => {
        let T = z.current;
        if (!T) return;
        let ne = new ResizeObserver(() => {
          let q = C.current?.getState();
          q && Bt(q);
        });
        return (ne.observe(T), () => ne.disconnect());
      }, [Bt]),
      useImperativeHandle(
        n,
        () => ({
          getDocument() {
            return C.current?.getDocument() ?? null;
          },
          getState() {
            return C.current?.getState() ?? null;
          },
          getView() {
            return C.current?.getView() ?? null;
          },
          focus() {
            (C.current?.focus(), j$1(true));
          },
          blur() {
            (C.current?.blur(), j$1(false));
          },
          isFocused() {
            return C.current?.isFocused() ?? false;
          },
          dispatch(T) {
            C.current?.dispatch(T);
          },
          undo() {
            return C.current?.undo() ?? false;
          },
          redo() {
            return C.current?.redo() ?? false;
          },
          setSelection(T, ne) {
            C.current?.setSelection(T, ne);
          },
          getLayout() {
            return Te;
          },
          relayout() {
            let T = C.current?.getState();
            T && Pt(T);
          },
          scrollToPosition: eo,
        }),
        [Te, Pt, eo]
      ),
      useEffect(() => {
        let T = C.current?.getState();
        Te && T && Bt(T);
      }, [Te, Bt]),
      useEffect(() => {
        we.current &&
          C.current &&
          we.current({
            getDocument: () => C.current?.getDocument() ?? null,
            getState: () => C.current?.getState() ?? null,
            getView: () => C.current?.getView() ?? null,
            focus: () => {
              (C.current?.focus(), j$1(true));
            },
            blur: () => {
              (C.current?.blur(), j$1(false));
            },
            isFocused: () => C.current?.isFocused() ?? false,
            dispatch: (T) => C.current?.dispatch(T),
            undo: () => C.current?.undo() ?? false,
            redo: () => C.current?.redo() ?? false,
            setSelection: (T, ne) => C.current?.setSelection(T, ne),
            getLayout: () => Te,
            relayout: () => {
              let T = C.current?.getState();
              T && Pt(T);
            },
            scrollToPosition: eo,
          });
      }, [Te, Pt]));
    let ia = useMemo(() => {
      if (!Te) return Tu + 48;
      let T = Te.pages.length;
      return T * Oe.h + (T - 1) * d + 48;
    }, [Te, Oe.h, d]);
    return jsxs('div', {
      ref: (T) => {
        ((z.current = T),
          typeof $ == 'function' ? $(T) : $ && typeof $ == 'object' && ($.current = T));
      },
      className: `ep-root paged-editor ${_ ?? ''}`,
      style: { ...sb, ...V },
      tabIndex: 0,
      onFocus: gt,
      onBlur: ht,
      onKeyDown: na,
      onMouseDown: oa,
      children: [
        jsx(Fd, {
          ref: C,
          document: o,
          styles: r,
          widthPx: Lt,
          readOnly: u,
          onTransaction: An,
          onSelectionChange: rr,
          externalPlugins: m,
          extensionManager: b,
          onEditorViewReady: ra,
          onKeyDown: ee,
        }),
        jsxs('div', {
          style: {
            ...lb,
            minHeight: ia,
            transform: (() => {
              let T = [];
              return (
                W && T.push('translateX(-120px)'),
                c !== 1 && T.push(`scale(${c})`),
                T.length > 0 ? T.join(' ') : void 0
              );
            })(),
            transformOrigin: 'top center',
            transition: 'transform 0.2s ease',
          },
          children: [
            jsx('div', {
              ref: K,
              className: `paged-editor__pages${u ? ' paged-editor--readonly' : ''}${E ? ` paged-editor--hf-editing paged-editor--editing-${E}` : ''}`,
              style: cb,
              onMouseDown: He,
              onClick: ea,
              'aria-hidden': 'true',
            }),
            jsx(Bd, { selectionRects: Z, caretPosition: U, isFocused: B, pageGap: d, readOnly: u }),
            jsx(zd, {
              imageInfo: xe,
              zoom: c,
              isFocused: B,
              onResize: ir,
              onResizeStart: Nt,
              onResizeEnd: Jt,
              onDragMove: xo,
              onDragStart: Dn,
              onDragEnd: ta,
            }),
            w && jsx('div', { className: 'paged-editor__plugin-overlays', style: db, children: w }),
          ],
        }),
        L,
      ],
    });
  }),
  Eu = memo(yb);
var wb = lazy(() => import('./FindReplaceDialog-AWQXKEUQ.js')),
  Cb = lazy(() => import('./HyperlinkDialog-BA25XUT5.js')),
  Tb = lazy(() =>
    import('./TablePropertiesDialog-EMUEVYB3.js').then((e) => ({
      default: e.TablePropertiesDialog,
    }))
  ),
  vb = lazy(() =>
    import('./ImagePositionDialog-AIAMKPFK.js').then((e) => ({ default: e.ImagePositionDialog }))
  ),
  Rb = lazy(() =>
    import('./ImagePropertiesDialog-ERFCUVCW.js').then((e) => ({
      default: e.ImagePropertiesDialog,
    }))
  ),
  Pb = lazy(() =>
    import('./FootnotePropertiesDialog-ZM3EF3EF.js').then((e) => ({
      default: e.FootnotePropertiesDialog,
    }))
  ),
  Iu = [
    { value: 'editing', label: 'Editing', icon: 'edit_note', desc: 'Edit document directly' },
    {
      value: 'suggesting',
      label: 'Suggesting',
      icon: 'edit_note',
      desc: 'Edits become suggestions',
    },
  ];
function Mb({ mode: e, onModeChange: t }) {
  let [n, o] = useState(false),
    [r, i] = useState(false),
    a = useRef(null),
    s = useRef(null),
    [l, u] = useState({ top: 0, left: 0 }),
    d$1 = Iu.find((c) => c.value === e);
  return (
    useEffect(() => {
      let c = window.matchMedia('(max-width: 1400px)');
      i(c.matches);
      let p = (f) => i(f.matches);
      return (c.addEventListener('change', p), () => c.removeEventListener('change', p));
    }, []),
    useEffect(() => {
      if (!n || !a.current) return;
      let c = a.current.getBoundingClientRect();
      u({ top: c.bottom + 2, left: c.right - 220 });
    }, [n]),
    useEffect(() => {
      if (!n) return;
      let c = (f) => {
          !a.current?.contains(f.target) && !s.current?.contains(f.target) && o(false);
        },
        p = (f) => {
          f.key === 'Escape' && o(false);
        };
      return (
        document.addEventListener('mousedown', c),
        document.addEventListener('keydown', p),
        () => {
          (document.removeEventListener('mousedown', c),
            document.removeEventListener('keydown', p));
        }
      );
    }, [n]),
    jsxs('div', {
      style: { position: 'relative' },
      children: [
        jsxs('button', {
          ref: a,
          type: 'button',
          onMouseDown: (c) => c.preventDefault(),
          onClick: () => o(!n),
          title: `${d$1.label} (Ctrl+Shift+E)`,
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: r ? 0 : 4,
            padding: r ? '2px 4px' : '2px 6px 2px 4px',
            border: 'none',
            background: n ? 'var(--doc-hover, #f3f4f6)' : 'transparent',
            borderRadius: 4,
            cursor: 'pointer',
            fontSize: 13,
            fontWeight: 400,
            color: 'var(--doc-text, #374151)',
            whiteSpace: 'nowrap',
            height: 28,
          },
          children: [
            jsx(d, { name: d$1.icon, size: 18 }),
            !r && jsx('span', { children: d$1.label }),
            jsx(d, { name: 'arrow_drop_down', size: 16 }),
          ],
        }),
        n &&
          jsx('div', {
            ref: s,
            onMouseDown: (c) => c.preventDefault(),
            style: {
              position: 'fixed',
              top: l.top,
              left: l.left,
              backgroundColor: 'white',
              border: '1px solid var(--doc-border, #d1d5db)',
              borderRadius: 8,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
              padding: '4px 0',
              zIndex: 1e4,
              minWidth: 220,
            },
            children: Iu.map((c) =>
              jsxs(
                'button',
                {
                  type: 'button',
                  onMouseDown: (p) => p.preventDefault(),
                  onClick: () => {
                    (t(c.value), o(false));
                  },
                  onMouseOver: (p) => {
                    p.currentTarget.style.backgroundColor = 'var(--doc-hover, #f3f4f6)';
                  },
                  onMouseOut: (p) => {
                    p.currentTarget.style.backgroundColor = 'transparent';
                  },
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '8px 12px',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    fontSize: 13,
                    color: 'var(--doc-text, #374151)',
                    width: '100%',
                    textAlign: 'left',
                  },
                  children: [
                    jsx(d, { name: c.icon, size: 20 }),
                    jsxs('span', {
                      style: { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' },
                      children: [
                        jsx('span', { style: { fontWeight: 500 }, children: c.label }),
                        jsx('span', {
                          style: { fontSize: 11, color: 'var(--doc-text-muted, #9ca3af)' },
                          children: c.desc,
                        }),
                      ],
                    }),
                    c.value === e &&
                      jsx(d, {
                        name: 'check',
                        size: 18,
                        style: { marginLeft: 'auto', color: '#1a73e8' },
                      }),
                  ],
                },
                c.value
              )
            ),
          }),
      ],
    })
  );
}
var Eb = Date.now(),
  vs = -1;
function Rs(e, t, n) {
  return {
    id: Eb++,
    author: t,
    date: new Date().toISOString(),
    content: [
      {
        type: 'paragraph',
        formatting: {},
        content: [{ type: 'run', formatting: {}, content: [{ type: 'text', text: e }] }],
      },
    ],
    ...(n !== void 0 && { parentId: n }),
  };
}
var Fu = forwardRef(function (
  {
    documentBuffer: t,
    document: n,
    onSave: o$1,
    author: r = 'User',
    onChange: i,
    onSelectionChange: a$2,
    onError: s,
    onFontsLoaded: l,
    theme: u$1,
    showToolbar: d$1 = true,
    showZoomControl: c$1 = true,
    showPageNumbers: p = true,
    enablePageNavigation: f$1 = true,
    pageNumberPosition: m$2 = 'bottom-center',
    pageNumberVariant: b = 'default',
    showMarginGuides: g = false,
    marginGuideColor: S,
    showRuler: w = false,
    rulerUnit: k = 'inch',
    initialZoom: E = 1,
    readOnly: v$1 = false,
    toolbarExtra: _,
    className: V = '',
    style: W,
    placeholder: L,
    loadingIndicator: $,
    showOutline: z$1 = false,
    showPrintButton: K = true,
    printOptions: C,
    onPrint: A,
    onCopy: ee,
    onCut: he,
    onPaste: de,
    externalPlugins: we,
    onEditorViewReady: Ce,
    onRenderedDomContextReady: Te,
    pluginOverlays: M,
  },
  I
) {
  let [y$1, P] = useState({
      isLoading: !!t,
      parseError: null,
      zoom: E,
      selectionFormatting: {},
      currentPage: 1,
      totalPages: 1,
      paragraphIndentLeft: 0,
      paragraphIndentRight: 0,
      paragraphFirstLineIndent: 0,
      paragraphHangingIndent: false,
      paragraphTabs: null,
      pmTableContext: null,
      pmImageContext: null,
    }),
    [F, B] = useState(false),
    [j, Z] = useState(false),
    [N, U] = useState(false),
    [G, xe] = useState(false),
    [R, O$1] = useState(null),
    [D, ie] = useState(z$1),
    ue = useRef(false);
  ue.current = D;
  let [pe, Ie] = useState([]),
    [me, Se] = useState(false),
    [fe, $e] = useState([]),
    [Qe, Ge] = useState([]),
    [tt, We] = useState(false),
    [Je, it] = useState(null),
    [ze, ct] = useState(null),
    [De, Rt] = useState('editing'),
    [gn, ln] = useState(null),
    It = useRef(null),
    Ft = useCallback(() => {
      let x = Oe.current?.getView();
      if (!x) return;
      let { doc: h, schema: H } = x.state,
        ae = H.marks.insertion,
        oe = H.marks.deletion;
      if (!ae && !oe) return;
      let se = [];
      h.descendants((ge, Me) => {
        if (ge.isText)
          for (let Ke of ge.marks)
            (Ke.type === ae || Ke.type === oe) &&
              se.push({
                type: Ke.type === ae ? 'insertion' : 'deletion',
                text: ge.text || '',
                author: Ke.attrs.author || '',
                date: Ke.attrs.date,
                from: Me,
                to: Me + ge.nodeSize,
                revisionId: Ke.attrs.revisionId,
              });
      });
      let re = [];
      for (let ge of se) {
        let Me = re[re.length - 1];
        Me && Me.revisionId === ge.revisionId && Me.type === ge.type && Me.to === ge.from
          ? ((Me.text += ge.text), (Me.to = ge.to))
          : re.push({ ...ge });
      }
      Ge(re);
    }, []);
  (useEffect(
    () => () => {
      It.current && clearTimeout(It.current);
    },
    []
  ),
    useEffect(() => {
      if ((ie(z$1), z$1)) {
        let x = Oe.current?.getView();
        x && Ie(oo(x.state.doc));
      }
    }, [z$1]));
  let le = kd(n || null, { maxEntries: 100, groupingInterval: 500, enableKeyboardShortcuts: true }),
    hn = useRef(false);
  useEffect(() => {
    if (hn.current) return;
    let x = le.state;
    if (!x) return;
    let h = x.package?.document?.comments;
    h && h.length > 0 && ($e(h), Se(true), (hn.current = true));
  }, [le.state]);
  let Xt = useMemo(() => {
      let x = new Sn(lo());
      return (x.buildSchema(), x.initializeRuntime(), x);
    }, []),
    or = useMemo(() => vd(false, r), []),
    $t = useMemo(() => [or, ...(we ?? [])], [or, we]),
    Oe = useRef(null),
    ot = useRef(null),
    Lt = useRef(null),
    Wt = useRef(null),
    Pt = useRef(null),
    _t = useRef(null),
    Jn = useRef(null),
    Qn = useRef(null),
    Bt = useRef(null),
    An = useRef(null),
    [rr, At] = useState(0),
    Zt = useRef(le.state);
  Zt.current = le.state;
  let wt = useRef({ style: 'single', size: 4, color: { rgb: '000000' } }),
    eo = useCallback((x) => {
      if (((Bt.current = x), An.current && (An.current.disconnect(), (An.current = null)), !x)) {
        At(0);
        return;
      }
      At(x.offsetHeight);
      let h = new ResizeObserver(() => {
        At(x.offsetHeight);
      });
      (h.observe(x), (An.current = h));
    }, []);
  useEffect(
    () => () => {
      An.current?.disconnect();
    },
    []
  );
  let He = useCallback(() => (R && ot.current ? ot.current.getView() : Oe.current?.getView()), [R]),
    qe = useCallback(() => {
      R && ot.current ? ot.current.focus() : Oe.current?.focus();
    }, [R]),
    yo = useCallback(() => {
      R && ot.current ? ot.current.undo() : Oe.current?.undo();
    }, [R]),
    ea = useCallback(() => {
      R && ot.current ? ot.current.redo() : Oe.current?.redo();
    }, [R]),
    gt = m(),
    ht = m$1();
  (useEffect(() => {
    if (!t) {
      n &&
        (le.reset(n),
        P((h) => ({ ...h, isLoading: false })),
        o(n).catch((h) => {
          console.warn('Failed to load document fonts:', h);
        }));
      return;
    }
    (P((h) => ({ ...h, isLoading: true, parseError: null })),
      (async () => {
        try {
          let h = await q(t);
          (le.reset(h),
            P((H) => ({ ...H, isLoading: !1, parseError: null })),
            o(h).catch((H) => {
              console.warn('Failed to load document fonts:', H);
            }));
        } catch (h) {
          let H = h instanceof Error ? h.message : 'Failed to parse document';
          (P((ae) => ({ ...ae, isLoading: false, parseError: H })),
            s?.(h instanceof Error ? h : new Error(H)));
        }
      })());
  }, [t, n, s]),
    useEffect(() => {
      n && !t && le.reset(n);
    }, [n, t]),
    useEffect(() => {
      le.state ? (Lt.current = new c(le.state)) : (Lt.current = null);
    }, [le.state]));
  let ir = useRef(false);
  (useEffect(() => {
    if (!y$1.isLoading && le.state) {
      let x = setTimeout(() => {
        (Ft(), ir.current || ((ir.current = true), Ge((h) => (h.length > 0 && Se(true), h))));
      }, 200);
      return () => clearTimeout(x);
    }
  }, [y$1.isLoading, le.state, Ft]),
    useEffect(
      () =>
        k$1(() => {
          l?.();
        }),
      [l]
    ),
    useEffect(() => {
      let x = Oe.current?.getView();
      x && Rd(De === 'suggesting', x.state, x.dispatch, r);
    }, [De, r]));
  let Nt = useCallback((x) => (le.push(x), x), [le]),
    Jt = useCallback(
      (x) => {
        if ((Nt(x), i?.(x), ue.current)) {
          let h = Oe.current?.getView();
          h && Ie(oo(h.state.doc));
        }
        (It.current && clearTimeout(It.current), (It.current = setTimeout(Ft, 300)));
      },
      [i, Nt, Ft]
    ),
    xo = useCallback(
      (x) => {
        let h = He();
        if (h) {
          let { from: at, to: st } = h.state.selection;
          Pt.current = { from: at, to: st };
        }
        let H = null;
        if ((h && ((H = _e(h.state)), H.isInTable || (H = null)), H?.cellBorderColor)) {
          let at = H.cellBorderColor,
            st = at.rgb;
          ((!st || st === 'auto') && (st = a(at, u$1).replace(/^#/, '')),
            (wt.current = { ...wt.current, color: { rgb: st } }));
        }
        let ae = null;
        if (h) {
          let at = h.state.selection,
            st = at.node;
          st?.type.name === 'image' &&
            (ae = {
              pos: at.from,
              wrapType: st.attrs.wrapType ?? 'inline',
              displayMode: st.attrs.displayMode ?? 'inline',
              cssFloat: st.attrs.cssFloat ?? null,
              transform: st.attrs.transform ?? null,
              alt: st.attrs.alt ?? null,
              borderWidth: st.attrs.borderWidth ?? null,
              borderColor: st.attrs.borderColor ?? null,
              borderStyle: st.attrs.borderStyle ?? null,
            });
        }
        if (!x) {
          (ln(null),
            P((at) => ({ ...at, selectionFormatting: {}, pmTableContext: H, pmImageContext: ae })));
          return;
        }
        let { textFormatting: oe, paragraphFormatting: se } = x,
          re = oe.fontFamily?.ascii || oe.fontFamily?.hAnsi,
          ge = oe.color?.rgb ? `#${oe.color.rgb}` : void 0,
          Me = se.numPr,
          Ke = Me
            ? {
                type: Me.numId === 1 ? 'bullet' : 'numbered',
                level: Me.ilvl ?? 0,
                isInList: true,
                numId: Me.numId,
              }
            : void 0,
          bt = {
            bold: oe.bold,
            italic: oe.italic,
            underline: !!oe.underline,
            strike: oe.strike,
            superscript: oe.vertAlign === 'superscript',
            subscript: oe.vertAlign === 'subscript',
            fontFamily: re,
            fontSize: oe.fontSize,
            color: ge,
            highlight: oe.highlight,
            alignment: se.alignment,
            lineSpacing: se.lineSpacing,
            listState: Ke,
            styleId: x.styleId ?? void 0,
            indentLeft: se.indentLeft,
          };
        if (
          (P((at) => ({
            ...at,
            selectionFormatting: bt,
            paragraphIndentLeft: se.indentLeft ?? 0,
            paragraphIndentRight: se.indentRight ?? 0,
            paragraphFirstLineIndent: se.indentFirstLine ?? 0,
            paragraphHangingIndent: se.hangingIndent ?? false,
            paragraphTabs: se.tabs ?? null,
            pmTableContext: H,
            pmImageContext: ae,
          })),
          h && x.hasSelection && !tt && !v$1)
        ) {
          let at = Qn.current,
            st = Jn.current;
          if (at && st) {
            let { from: To } = h.state.selection,
              la = at.querySelector('.paged-editor__pages');
            if (la) {
              let Is = la.querySelector('.layout-page'),
                op = la.querySelectorAll('span[data-pm-start]');
              for (let rp of op) {
                let ca = rp,
                  ip = Number(ca.dataset.pmStart),
                  ap = Number(ca.dataset.pmEnd);
                if (To >= ip && To <= ap) {
                  let sp = ca.getBoundingClientRect(),
                    da = st.getBoundingClientRect(),
                    lp = sp.top - da.top + at.scrollTop,
                    cp = Is ? Is.getBoundingClientRect().right - da.left : da.width / 2 + 408;
                  ln({ top: lp, left: cp });
                  break;
                }
              }
            }
          }
        } else ln(null);
        a$2?.(x);
      },
      [a$2, tt, v$1]
    ),
    Dn = bl({ document: le.state, onChange: Jt, onSelectionChange: (x) => {} });
  useEffect(() => {
    let x = (h) => {
      let ae = navigator.platform.toUpperCase().indexOf('MAC') >= 0 ? h.metaKey : h.ctrlKey;
      if (!ae && !h.shiftKey && !h.altKey && (h.key === 'Delete' || h.key === 'Backspace')) {
        let oe = Oe.current?.getView();
        if (oe) {
          let se = oe.state.selection;
          if ('$anchorCell' in se && typeof se.forEachCell == 'function') {
            let ge = _e(oe.state);
            if (ge.isInTable && ge.table) {
              let Me = 0;
              ge.table.descendants((bt) => {
                (bt.type.name === 'tableCell' || bt.type.name === 'tableHeader') && (Me += 1);
              });
              let Ke = 0;
              if (
                (se.forEachCell(() => {
                  Ke += 1;
                }),
                Me > 0 && Ke >= Me)
              ) {
                (h.preventDefault(), zo(oe.state, oe.dispatch));
                return;
              }
            }
          }
        }
        if (Dn.state.tableIndex !== null) {
          (h.preventDefault(), Dn.handleAction('deleteTable'));
          return;
        }
      }
      if (ae && !h.shiftKey && !h.altKey) {
        if (h.key.toLowerCase() === 'f') {
          h.preventDefault();
          let oe = window.getSelection(),
            se = oe && !oe.isCollapsed ? oe.toString() : '';
          gt.openFind(se);
        } else if (h.key.toLowerCase() === 'h') {
          h.preventDefault();
          let oe = window.getSelection(),
            se = oe && !oe.isCollapsed ? oe.toString() : '';
          gt.openReplace(se);
        } else if (h.key.toLowerCase() === 'k') {
          h.preventDefault();
          let oe = Oe.current?.getView();
          if (oe) {
            let se = io(oe.state),
              re = ro(oe.state);
            re
              ? ht.openEdit({ url: re.href, displayText: se, tooltip: re.tooltip })
              : ht.openInsert(se);
          }
        }
      }
    };
    return (
      document.addEventListener('keydown', x),
      () => {
        document.removeEventListener('keydown', x);
      }
    );
  }, [gt, ht, Dn]);
  let ta = useCallback(
      (x, h) => {
        let H = He();
        H && (Jr(x, h)(H.state, H.dispatch), qe());
      },
      [He, qe]
    ),
    na = useCallback(() => {
      let x = He();
      x && (Ri(x.state, x.dispatch), qe());
    }, [He, qe]),
    oa = useCallback(() => {
      let x = He();
      x && (Zr(x.state, x.dispatch), qe());
    }, [He, qe]),
    ra = useCallback(() => {
      ie((x) => {
        if (!x) {
          let h = Oe.current?.getView();
          h && Ie(oo(h.state.doc));
        }
        return !x;
      });
    }, []),
    ar = useCallback((x) => {
      (Oe.current?.scrollToPosition(x), Oe.current?.setSelection(x + 1), Oe.current?.focus());
    }, []),
    ia = useCallback(() => {
      _t.current?.click();
    }, []),
    T = useCallback(
      (x) => {
        let h = x.target.files?.[0];
        if (!h) return;
        let H = He();
        if (!H) return;
        let ae = new FileReader();
        ((ae.onload = () => {
          let oe = ae.result,
            se = new Image();
          ((se.onload = () => {
            let re = se.naturalWidth,
              ge = se.naturalHeight,
              Me = 612;
            if (re > Me) {
              let To = Me / re;
              ((re = Me), (ge = Math.round(ge * To)));
            }
            let Ke = `rId_img_${Date.now()}`,
              bt = H.state.schema.nodes.image.create({
                src: oe,
                alt: h.name,
                width: re,
                height: ge,
                rId: Ke,
                wrapType: 'inline',
                displayMode: 'inline',
              }),
              { from: at } = H.state.selection,
              st = H.state.tr.insert(at, bt);
            (H.dispatch(st.scrollIntoView()), qe());
          }),
            (se.src = oe));
        }),
          ae.readAsDataURL(h),
          (x.target.value = ''));
      },
      [He, qe]
    ),
    ne = useCallback(
      (x) => {
        let h = He();
        if (!h || !y$1.pmImageContext) return;
        let H = y$1.pmImageContext.pos,
          ae = h.state.doc.nodeAt(H);
        if (!ae || ae.type.name !== 'image') return;
        let oe = 'inline',
          se = null;
        switch (x) {
          case 'inline':
            ((oe = 'inline'), (se = null));
            break;
          case 'square':
          case 'tight':
          case 'through':
            ((oe = 'float'), (se = 'left'));
            break;
          case 'topAndBottom':
            ((oe = 'block'), (se = null));
            break;
          case 'behind':
          case 'inFront':
            ((oe = 'float'), (se = 'none'));
            break;
          case 'wrapLeft':
            ((oe = 'float'), (se = 'right'), (x = 'square'));
            break;
          case 'wrapRight':
            ((oe = 'float'), (se = 'left'), (x = 'square'));
            break;
        }
        let re = h.state.tr.setNodeMarkup(H, void 0, {
          ...ae.attrs,
          wrapType: x,
          displayMode: oe,
          cssFloat: se,
        });
        (h.dispatch(re.scrollIntoView()), qe());
      },
      [He, qe, y$1.pmImageContext]
    ),
    q$1 = useCallback(
      (x) => {
        let h = He();
        if (!h || !y$1.pmImageContext) return;
        let H = y$1.pmImageContext.pos,
          ae = h.state.doc.nodeAt(H);
        if (!ae || ae.type.name !== 'image') return;
        let oe = ae.attrs.transform || '',
          se = oe.match(/rotate\((-?\d+(?:\.\d+)?)deg\)/),
          re = se ? parseFloat(se[1]) : 0,
          ge = /scaleX\(-1\)/.test(oe),
          Me = /scaleY\(-1\)/.test(oe);
        switch (x) {
          case 'rotateCW':
            re = (re + 90) % 360;
            break;
          case 'rotateCCW':
            re = (re - 90 + 360) % 360;
            break;
          case 'flipH':
            ge = !ge;
            break;
          case 'flipV':
            Me = !Me;
            break;
        }
        let Ke = [];
        (re !== 0 && Ke.push(`rotate(${re}deg)`),
          ge && Ke.push('scaleX(-1)'),
          Me && Ke.push('scaleY(-1)'));
        let bt = Ke.length > 0 ? Ke.join(' ') : null,
          at = h.state.tr.setNodeMarkup(H, void 0, { ...ae.attrs, transform: bt });
        (h.dispatch(at.scrollIntoView()), qe());
      },
      [He, qe, y$1.pmImageContext]
    ),
    X = useCallback(
      (x) => {
        let h = He();
        if (!h || !y$1.pmImageContext) return;
        let H = y$1.pmImageContext.pos,
          ae = h.state.doc.nodeAt(H);
        if (!ae || ae.type.name !== 'image') return;
        let oe = h.state.tr.setNodeMarkup(H, void 0, {
          ...ae.attrs,
          position: { horizontal: x.horizontal, vertical: x.vertical },
          distTop: x.distTop ?? ae.attrs.distTop,
          distBottom: x.distBottom ?? ae.attrs.distBottom,
          distLeft: x.distLeft ?? ae.attrs.distLeft,
          distRight: x.distRight ?? ae.attrs.distRight,
        });
        (h.dispatch(oe.scrollIntoView()), qe());
      },
      [He, qe, y$1.pmImageContext]
    ),
    te = useCallback(() => {
      U(true);
    }, []),
    Y = useCallback(
      (x) => {
        let h = He();
        if (!h || !y$1.pmImageContext) return;
        let H = y$1.pmImageContext.pos,
          ae = h.state.doc.nodeAt(H);
        if (!ae || ae.type.name !== 'image') return;
        let oe = h.state.tr.setNodeMarkup(H, void 0, {
          ...ae.attrs,
          alt: x.alt ?? null,
          borderWidth: x.borderWidth ?? null,
          borderColor: x.borderColor ?? null,
          borderStyle: x.borderStyle ?? null,
        });
        (h.dispatch(oe.scrollIntoView()), qe());
      },
      [He, qe, y$1.pmImageContext]
    ),
    J = useCallback(
      (x, h) => {
        if (!le.state?.package) return;
        let H = {
          ...le.state.package.document,
          finalSectionProperties: {
            ...le.state.package.document.finalSectionProperties,
            footnotePr: x,
            endnotePr: h,
          },
        };
        Nt({ ...le.state, package: { ...le.state.package, document: H } });
      },
      [le, Nt]
    ),
    Q = useCallback(
      (x) => {
        let h = He();
        if (h) {
          switch (x) {
            case 'addRowAbove':
              Qr(h.state, h.dispatch);
              break;
            case 'addRowBelow':
              ei(h.state, h.dispatch);
              break;
            case 'addColumnLeft':
              ni(h.state, h.dispatch);
              break;
            case 'addColumnRight':
              oi(h.state, h.dispatch);
              break;
            case 'deleteRow':
              ti(h.state, h.dispatch);
              break;
            case 'deleteColumn':
              ri(h.state, h.dispatch);
              break;
            case 'deleteTable':
              zo(h.state, h.dispatch);
              break;
            case 'selectTable':
              ii(h.state, h.dispatch);
              break;
            case 'selectRow':
              ai(h.state, h.dispatch);
              break;
            case 'selectColumn':
              si(h.state, h.dispatch);
              break;
            case 'mergeCells':
              li(h.state, h.dispatch);
              break;
            case 'splitCell':
              ci(h.state, h.dispatch);
              break;
            case 'borderAll':
              ui(h.state, h.dispatch, wt.current);
              break;
            case 'borderOutside':
              pi(h.state, h.dispatch, wt.current);
              break;
            case 'borderInside':
              fi(h.state, h.dispatch, wt.current);
              break;
            case 'borderNone':
              di(h.state, h.dispatch);
              break;
            case 'borderTop':
              wn('top', wt.current, true)(h.state, h.dispatch);
              break;
            case 'borderBottom':
              wn('bottom', wt.current, true)(h.state, h.dispatch);
              break;
            case 'borderLeft':
              wn('left', wt.current, true)(h.state, h.dispatch);
              break;
            case 'borderRight':
              wn('right', wt.current, true)(h.state, h.dispatch);
              break;
            default:
              if (typeof x == 'object') {
                if (x.type === 'cellFillColor') Ci(x.color)(h.state, h.dispatch);
                else if (x.type === 'borderColor') {
                  let H = x.color.replace(/^#/, '');
                  ((wt.current = { ...wt.current, color: { rgb: H } }),
                    Ti(x.color)(h.state, h.dispatch));
                } else if (x.type === 'borderWidth')
                  ((wt.current = { ...wt.current, size: x.size }), vi(x.size)(h.state, h.dispatch));
                else if (x.type === 'cellBorder')
                  wn(x.side, {
                    style: x.style,
                    size: x.size,
                    color: { rgb: x.color.replace(/^#/, '') },
                  })(h.state, h.dispatch);
                else if (x.type === 'cellVerticalAlign') mi(x.align)(h.state, h.dispatch);
                else if (x.type === 'cellMargins') gi(x.margins)(h.state, h.dispatch);
                else if (x.type === 'cellTextDirection') hi(x.direction)(h.state, h.dispatch);
                else if (x.type === 'toggleNoWrap') bi()(h.state, h.dispatch);
                else if (x.type === 'rowHeight') yi(x.height, x.rule)(h.state, h.dispatch);
                else if (x.type === 'toggleHeaderRow') xi()(h.state, h.dispatch);
                else if (x.type === 'distributeColumns') Si()(h.state, h.dispatch);
                else if (x.type === 'autoFitContents') ki()(h.state, h.dispatch);
                else if (x.type === 'openTableProperties') B(true);
                else if (x.type === 'tableProperties') Oo(x.props)(h.state, h.dispatch);
                else if (x.type === 'applyTableStyle') {
                  let H = hd(x.styleId),
                    ae = Zt.current;
                  if (!H && ae?.package.styles) {
                    let se = kn(ae.package.styles).getStyle(x.styleId);
                    if (se) {
                      if (
                        ((H = { id: se.styleId, name: se.name ?? se.styleId }), se.tblPr?.borders)
                      ) {
                        let re = se.tblPr.borders;
                        H.tableBorders = {};
                        for (let ge of ['top', 'bottom', 'left', 'right', 'insideH', 'insideV']) {
                          let Me = re[ge];
                          Me &&
                            (H.tableBorders[ge] = {
                              style: Me.style,
                              size: Me.size,
                              color: Me.color?.rgb ? { rgb: Me.color.rgb } : void 0,
                            });
                        }
                      }
                      if (se.tblStylePr) {
                        H.conditionals = {};
                        for (let re of se.tblStylePr) {
                          let ge = {};
                          if (
                            (re.tcPr?.shading?.fill &&
                              (ge.backgroundColor = `#${re.tcPr.shading.fill}`),
                            re.tcPr?.borders)
                          ) {
                            let Me = {};
                            for (let Ke of ['top', 'bottom', 'left', 'right']) {
                              let bt = re.tcPr.borders[Ke];
                              bt &&
                                (Me[Ke] = {
                                  style: bt.style,
                                  size: bt.size,
                                  color: bt.color?.rgb ? { rgb: bt.color.rgb } : void 0,
                                });
                            }
                            ge.borders = Me;
                          }
                          (re.rPr?.bold && (ge.bold = true),
                            re.rPr?.color?.rgb && (ge.color = `#${re.rPr.color.rgb}`),
                            (H.conditionals[re.type] = ge));
                        }
                      }
                      H.look = { firstRow: true, lastRow: false, noHBand: false, noVBand: true };
                    }
                  }
                  H &&
                    wi({
                      styleId: H.id,
                      tableBorders: H.tableBorders,
                      conditionals: H.conditionals,
                      look: H.look,
                    })(h.state, h.dispatch);
                }
              } else Dn.handleAction(x);
          }
          qe();
        }
      },
      [Dn, He, qe]
    ),
    ce = useCallback(
      (x) => {
        let h = He();
        if (!h) return;
        h.focus();
        let H = h === Oe.current?.getView(),
          { from: ae, to: oe } = h.state.selection,
          se = Pt.current;
        if (H && se && (ae !== se.from || oe !== se.to))
          try {
            let re = h.state.tr.setSelection(TextSelection.create(h.state.doc, se.from, se.to));
            h.dispatch(re);
          } catch (re) {
            console.warn('Could not restore selection:', re);
          }
        if (x === 'bold') {
          Mr(h.state, h.dispatch);
          return;
        }
        if (x === 'italic') {
          Er(h.state, h.dispatch);
          return;
        }
        if (x === 'underline') {
          Ir(h.state, h.dispatch);
          return;
        }
        if (x === 'strikethrough') {
          Fr(h.state, h.dispatch);
          return;
        }
        if (x === 'superscript') {
          Lr(h.state, h.dispatch);
          return;
        }
        if (x === 'subscript') {
          Br(h.state, h.dispatch);
          return;
        }
        if (x === 'bulletList') {
          Gr(h.state, h.dispatch);
          return;
        }
        if (x === 'numberedList') {
          Kr(h.state, h.dispatch);
          return;
        }
        if (x === 'indent') {
          Yr(h.state, h.dispatch) || _r()(h.state, h.dispatch);
          return;
        }
        if (x === 'outdent') {
          qr(h.state, h.dispatch) || Vr()(h.state, h.dispatch);
          return;
        }
        if (x === 'clearFormatting') {
          Io(h.state, h.dispatch);
          return;
        }
        if (x === 'insertLink') {
          let re = io(h.state),
            ge = ro(h.state);
          ge
            ? ht.openEdit({ url: ge.href, displayText: re, tooltip: ge.tooltip })
            : ht.openInsert(re);
          return;
        }
        if (typeof x == 'object')
          switch (x.type) {
            case 'alignment':
              $r(x.value)(h.state, h.dispatch);
              break;
            case 'textColor': {
              let re = x.value;
              typeof re == 'string'
                ? Ao({ rgb: re.replace('#', '') })(h.state, h.dispatch)
                : re.auto
                  ? Ar(h.state, h.dispatch)
                  : Ao(re)(h.state, h.dispatch);
              break;
            }
            case 'highlightColor': {
              let re = x.value ? u(x.value) : '';
              Dr(re || x.value)(h.state, h.dispatch);
              break;
            }
            case 'fontSize':
              Hr(f(x.value))(h.state, h.dispatch);
              break;
            case 'fontFamily':
              Nr(x.value)(h.state, h.dispatch);
              break;
            case 'lineSpacing':
              Wr(x.value)(h.state, h.dispatch);
              break;
            case 'applyStyle': {
              let re = Zt.current,
                ge = re?.package.styles ? kn(re.package.styles) : null;
              if (ge) {
                let Me = ge.resolveParagraphStyle(x.value);
                No(x.value, {
                  paragraphFormatting: Me.paragraphFormatting,
                  runFormatting: Me.runFormatting,
                })(h.state, h.dispatch);
              } else No(x.value)(h.state, h.dispatch);
              break;
            }
          }
      },
      [He]
    ),
    ve = useCallback((x) => {
      P((h) => ({ ...h, zoom: x }));
    }, []),
    be = useCallback(
      (x) => {
        let h = He();
        if (!h) return;
        let H = x.url || '',
          ae = x.tooltip,
          { empty: oe } = h.state.selection;
        (oe && x.displayText
          ? Do(x.displayText, H, ae)(h.state, h.dispatch)
          : oe
            ? x.displayText && Do(x.displayText, H, ae)(h.state, h.dispatch)
            : zr(H, ae)(h.state, h.dispatch),
          ht.close(),
          qe());
      },
      [ht, He, qe]
    ),
    Re = useCallback(() => {
      let x = He();
      x && (Or(x.state, x.dispatch), ht.close(), qe());
    }, [ht, He, qe]),
    Fe = useCallback(
      (x) => (h) => {
        if (!le.state || v$1) return;
        let H = {
          ...le.state,
          package: {
            ...le.state.package,
            document: {
              ...le.state.package.document,
              finalSectionProperties: {
                ...le.state.package.document.finalSectionProperties,
                [x]: h,
              },
            },
          },
        };
        Jt(H);
      },
      [le.state, v$1, Jt]
    ),
    Le = useMemo(() => Fe('marginLeft'), [Fe]),
    Ye = useMemo(() => Fe('marginRight'), [Fe]),
    Xe = useMemo(() => Fe('marginTop'), [Fe]),
    xt = useMemo(() => Fe('marginBottom'), [Fe]),
    dt = useCallback(
      (x) => {
        let h = He();
        h && jr(x)(h.state, h.dispatch);
      },
      [He]
    ),
    Dt = useCallback(
      (x) => {
        let h = He();
        h && Ur(x)(h.state, h.dispatch);
      },
      [He]
    ),
    zt = useCallback(
      (x) => {
        let h = He();
        h && (x < 0 ? Ho(-x, true)(h.state, h.dispatch) : Ho(x, false)(h.state, h.dispatch));
      },
      [He]
    ),
    Hn = useCallback(
      (x) => {
        let h = He();
        h && Xr(x)(h.state, h.dispatch);
      },
      [He]
    ),
    So = useCallback((x) => {}, []),
    ko = useCallback(async () => {
      if (!Lt.current) return null;
      try {
        let x = Lt.current.getDocument(),
          h = Oe.current?.getDocument();
        (h?.package?.document && (x.package.document.content = h.package.document.content),
          (x.package.document.comments = fe));
        let H = await Lt.current.toBuffer();
        return (o$1?.(H), H);
      } catch (x) {
        return (s?.(x instanceof Error ? x : new Error('Failed to save document')), null);
      }
    }, [o$1, s, fe]),
    bn = useCallback(
      (x) => {
        s?.(x);
      },
      [s]
    ),
    Qt = useCallback(() => {
      let x = Wt.current?.querySelector('.paged-editor__pages');
      if (!x) {
        (window.print(), A?.());
        return;
      }
      let h = window.open('', '_blank');
      if (!h) {
        (window.print(), A?.());
        return;
      }
      let H = [];
      for (let oe of Array.from(document.styleSheets))
        try {
          for (let se of Array.from(oe.cssRules))
            se instanceof CSSFontFaceRule && H.push(se.cssText);
        } catch {}
      let ae = x.cloneNode(true);
      ae.style.cssText = 'display: block; margin: 0; padding: 0;';
      for (let oe of Array.from(ae.querySelectorAll('.layout-page'))) {
        let se = oe;
        ((se.style.boxShadow = 'none'), (se.style.margin = '0'));
      }
      (h.document.write(`<!DOCTYPE html>
<html><head><title>Print</title>
<style>
${H.join(`
`)}
* { margin: 0; padding: 0; }
body { background: white; }
.layout-page { break-after: page; }
.layout-page:last-child { break-after: auto; }
@page { margin: 0; size: auto; }
</style>
</head><body>${ae.outerHTML}</body></html>`),
        h.document.close(),
        (h.onload = () => {
          (h.print(), h.close());
        }),
        setTimeout(() => {
          h.closed || (h.print(), h.close());
        }, 1e3),
        A?.());
    }, [A]),
    nt = useRef(null),
    Nn = useCallback(
      (x, h) => {
        if (!le.state || !x.trim()) return ((nt.current = null), null);
        let H = j$1(le.state, x, h),
          ae = { matches: H, totalCount: H.length, currentIndex: 0 };
        return (
          (nt.current = ae),
          gt.setMatches(H, 0),
          H.length > 0 && Wt.current && l$1(Wt.current, H[0]),
          ae
        );
      },
      [le.state, gt]
    ),
    zn = useCallback(() => {
      if (!nt.current || nt.current.matches.length === 0) return null;
      let x = gt.goToNextMatch(),
        h = nt.current.matches[x];
      return (h && Wt.current && l$1(Wt.current, h), h || null);
    }, [gt]),
    aa = useCallback(() => {
      if (!nt.current || nt.current.matches.length === 0) return null;
      let x = gt.goToPreviousMatch(),
        h = nt.current.matches[x];
      return (h && Wt.current && l$1(Wt.current, h), h || null);
    }, [gt]),
    qu = useCallback(
      (x) => {
        if (!le.state || !nt.current || nt.current.matches.length === 0) return false;
        let h = nt.current.matches[nt.current.currentIndex];
        if (!h) return false;
        try {
          let H = a$1(le.state, {
            type: 'replaceText',
            range: {
              start: { paragraphIndex: h.paragraphIndex, offset: h.startOffset },
              end: { paragraphIndex: h.paragraphIndex, offset: h.endOffset },
            },
            text: x,
          });
          return (Jt(H), !0);
        } catch (H) {
          return (console.error('Replace failed:', H), false);
        }
      },
      [le.state, Jt]
    ),
    Xu = useCallback(
      (x, h, H) => {
        if (!le.state || !x.trim()) return 0;
        let ae = j$1(le.state, x, H);
        if (ae.length === 0) return 0;
        let oe = le.state,
          se = [...ae].sort((re, ge) =>
            re.paragraphIndex !== ge.paragraphIndex
              ? ge.paragraphIndex - re.paragraphIndex
              : ge.startOffset - re.startOffset
          );
        for (let re of se)
          try {
            oe = a$1(oe, {
              type: 'replaceText',
              range: {
                start: { paragraphIndex: re.paragraphIndex, offset: re.startOffset },
                end: { paragraphIndex: re.paragraphIndex, offset: re.endOffset },
              },
              text: h,
            });
          } catch (ge) {
            console.error('Replace failed for match:', re, ge);
          }
        return (Jt(oe), (nt.current = null), gt.setMatches([], 0), ae.length);
      },
      [le.state, Jt, gt]
    );
  useImperativeHandle(
    I,
    () => ({
      getAgent: () => Lt.current,
      getDocument: () => le.state,
      getEditorRef: () => Oe.current,
      save: ko,
      setZoom: (x) => P((h) => ({ ...h, zoom: x })),
      getZoom: () => y$1.zoom,
      focus: () => {
        Oe.current?.focus();
      },
      getCurrentPage: () => y$1.currentPage,
      getTotalPages: () => y$1.totalPages,
      scrollToPage: (x) => {},
      openPrintPreview: Qt,
      print: Qt,
    }),
    [le.state, y$1.zoom, y$1.currentPage, y$1.totalPages, ko, Qt]
  );
  let { headerContent: wo, footerContent: Co } = useMemo(() => {
      if (!le.state?.package) return { headerContent: null, footerContent: null };
      let x = le.state.package,
        h = x.document?.finalSectionProperties,
        H = x.headers,
        ae = x.footers,
        oe = null,
        se = null;
      if (H && h?.headerReferences) {
        let re = h.headerReferences.find((ge) => ge.type === 'default');
        re?.rId && (oe = H.get(re.rId) ?? null);
      }
      if (ae && h?.footerReferences) {
        let re = h.footerReferences.find((ge) => ge.type === 'default');
        re?.rId && (se = ae.get(re.rId) ?? null);
      }
      return { headerContent: oe, footerContent: se };
    }, [le.state]),
    Zu = useCallback(
      (x) => {
        if (x === 'header' ? wo : Co) {
          O$1(x);
          return;
        }
        if (!le.state?.package) return;
        let H = le.state.package,
          ae = H.document?.finalSectionProperties;
        if (!ae) return;
        let oe = `rId_new_${x}`,
          se = {
            type: x === 'header' ? 'header' : 'footer',
            hdrFtrType: 'default',
            content: [{ type: 'paragraph', content: [] }],
          },
          re = x === 'header' ? 'headers' : 'footers',
          ge = new Map(H[re] ?? []);
        ge.set(oe, se);
        let Me = x === 'header' ? 'headerReferences' : 'footerReferences',
          Ke = ae[Me] ?? [],
          bt = { type: 'default', rId: oe },
          at = {
            ...le.state,
            package: {
              ...H,
              [re]: ge,
              document: H.document
                ? { ...H.document, finalSectionProperties: { ...ae, [Me]: [...Ke, bt] } }
                : H.document,
            },
          };
        (Nt(at), O$1(x));
      },
      [wo, Co, le, Nt]
    ),
    sa = useCallback(
      (x) => {
        if (!R || !le.state?.package) {
          O$1(null);
          return;
        }
        let h = le.state.package,
          H = h.document?.finalSectionProperties,
          oe = (R === 'header' ? H?.headerReferences : H?.footerReferences)?.find(
            (ge) => ge.type === 'default'
          ),
          se = R === 'header' ? 'headers' : 'footers',
          re = h[se];
        if (oe?.rId && re) {
          let ge = re.get(oe.rId),
            Me = { type: R, hdrFtrType: 'default', ...ge, content: x },
            Ke = new Map(re);
          Ke.set(oe.rId, Me);
          let bt = { ...le.state, package: { ...h, [se]: Ke } };
          Nt(bt);
        }
        O$1(null);
      },
      [R, le, Nt]
    ),
    Ju = useCallback(() => {
      if (!R) return;
      let x = ot.current?.getView();
      if (x) {
        let h = Bo(x.state.doc);
        sa(h);
      } else O$1(null);
    }, [R, sa]),
    Qu = useCallback(() => {
      if (!R || !le.state?.package) {
        O$1(null);
        return;
      }
      let x = le.state.package,
        h = x.document?.finalSectionProperties,
        H = R === 'header' ? 'headerReferences' : 'footerReferences',
        ae = R === 'header' ? 'headers' : 'footers',
        oe = h?.[H],
        se = oe?.find((re) => re.type === 'default');
      if (se?.rId) {
        let re = new Map(x[ae] ?? []);
        re.delete(se.rId);
        let ge = (oe ?? []).filter((Ke) => Ke.rId !== se.rId),
          Me = {
            ...le.state,
            package: {
              ...x,
              [ae]: re,
              document: x.document
                ? { ...x.document, finalSectionProperties: { ...h, [H]: ge } }
                : x.document,
            },
          };
        Nt(Me);
      }
      O$1(null);
    }, [R, le, Nt]),
    ep = useCallback((x) => {
      let h = Wt.current?.querySelector('.paged-editor__pages');
      if (!h) return null;
      let H = x === 'header' ? '.layout-page-header' : '.layout-page-footer';
      return h.querySelector(H);
    }, []),
    sr = {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      backgroundColor: 'var(--doc-bg-subtle)',
      ...W,
    },
    tp = { display: 'flex', flex: 1, minHeight: 0, minWidth: 0, flexDirection: 'row' },
    np = { flex: 1, minHeight: 0, minWidth: 0, overflow: 'auto', position: 'relative' };
  return y$1.isLoading
    ? jsx('div', {
        className: `ep-root docx-editor docx-editor-loading ${V}`,
        style: sr,
        'data-testid': 'docx-editor',
        children: $ || jsx(bd, {}),
      })
    : y$1.parseError
      ? jsx('div', {
          className: `ep-root docx-editor docx-editor-error ${V}`,
          style: sr,
          'data-testid': 'docx-editor',
          children: jsx(xd, { message: y$1.parseError }),
        })
      : le.state
        ? jsx(gl, {
            children: jsx(fr, {
              onError: bn,
              children: jsxs('div', {
                ref: Wt,
                className: `ep-root docx-editor ${V}`,
                style: sr,
                'data-testid': 'docx-editor',
                children: [
                  jsx('div', {
                    style: tp,
                    children: jsxs('div', {
                      style: {
                        position: 'relative',
                        flex: 1,
                        minHeight: 0,
                        minWidth: 0,
                        display: 'flex',
                        flexDirection: 'column',
                      },
                      children: [
                        jsxs('div', {
                          style: np,
                          children: [
                            d$1 &&
                              !v$1 &&
                              jsxs('div', {
                                ref: eo,
                                className:
                                  'sticky top-0 z-50 flex flex-col gap-0 bg-white shadow-sm',
                                children: [
                                  jsxs(y, {
                                    currentFormatting: y$1.selectionFormatting,
                                    onFormat: ce,
                                    onUndo: yo,
                                    onRedo: ea,
                                    canUndo: true,
                                    canRedo: true,
                                    disabled: v$1,
                                    documentStyles: le.state?.package.styles?.styles,
                                    theme: le.state?.package.theme || u$1,
                                    showPrintButton: K,
                                    onPrint: Qt,
                                    showZoomControl: c$1,
                                    zoom: y$1.zoom,
                                    onZoomChange: ve,
                                    onRefocusEditor: qe,
                                    onInsertTable: ta,
                                    showTableInsert: true,
                                    onInsertImage: ia,
                                    onInsertPageBreak: na,
                                    onInsertTOC: oa,
                                    imageContext: y$1.pmImageContext,
                                    onImageWrapType: ne,
                                    onImageTransform: q$1,
                                    onOpenImageProperties: te,
                                    tableContext: y$1.pmTableContext,
                                    onTableAction: Q,
                                    children: [
                                      jsx(x, {}),
                                      jsx(v, {
                                        onClick: () => Se(!me),
                                        active: me,
                                        title: 'Toggle comments sidebar',
                                        ariaLabel: 'Toggle comments sidebar',
                                        children: jsx(d, { name: 'comment', size: 20 }),
                                      }),
                                      jsx(x, {}),
                                      jsx(Mb, {
                                        mode: De,
                                        onModeChange: (x) => {
                                          (Rt(x), x === 'suggesting' && Se(true));
                                        },
                                      }),
                                      _,
                                    ],
                                  }),
                                  w &&
                                    jsx('div', {
                                      className:
                                        'flex justify-center px-5 py-1 overflow-x-auto flex-shrink-0 bg-doc-bg',
                                      style: {
                                        paddingRight: me ? 'calc(20px + 240px)' : void 0,
                                        transition: 'padding 0.2s ease',
                                      },
                                      children: jsx(O, {
                                        sectionProps:
                                          le.state?.package.document?.finalSectionProperties,
                                        zoom: y$1.zoom,
                                        unit: k,
                                        editable: !v$1,
                                        onLeftMarginChange: Le,
                                        onRightMarginChange: Ye,
                                        indentLeft: y$1.paragraphIndentLeft,
                                        indentRight: y$1.paragraphIndentRight,
                                        onIndentLeftChange: dt,
                                        onIndentRightChange: Dt,
                                        showFirstLineIndent: true,
                                        firstLineIndent: y$1.paragraphFirstLineIndent,
                                        hangingIndent: y$1.paragraphHangingIndent,
                                        onFirstLineIndentChange: zt,
                                        tabStops: y$1.paragraphTabs,
                                        onTabStopRemove: Hn,
                                      }),
                                    }),
                                ],
                              }),
                            jsx('div', {
                              style: {
                                display: 'flex',
                                flex: 1,
                                minHeight: 0,
                                position: 'relative',
                              },
                              children: jsxs('div', {
                                ref: Jn,
                                style: { position: 'relative', flex: 1, minWidth: 0 },
                                onMouseDown: (x) => {
                                  x.target === x.currentTarget &&
                                    (x.preventDefault(), Oe.current?.focus());
                                },
                                children: [
                                  w &&
                                    !v$1 &&
                                    jsx('div', {
                                      style: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        zIndex: 10,
                                        paddingTop: 48,
                                      },
                                      children: jsx(El, {
                                        sectionProps:
                                          le.state?.package.document?.finalSectionProperties,
                                        zoom: y$1.zoom,
                                        unit: k,
                                        editable: !v$1,
                                        onTopMarginChange: Xe,
                                        onBottomMarginChange: xt,
                                      }),
                                    }),
                                  jsx(Eu, {
                                    ref: Oe,
                                    document: le.state,
                                    styles: le.state?.package.styles,
                                    theme: le.state?.package.theme || u$1,
                                    sectionProperties:
                                      le.state?.package.document?.finalSectionProperties,
                                    headerContent: wo,
                                    footerContent: Co,
                                    onHeaderFooterDoubleClick: Zu,
                                    hfEditMode: R,
                                    onBodyClick: Ju,
                                    zoom: y$1.zoom,
                                    readOnly: v$1,
                                    extensionManager: Xt,
                                    onDocumentChange: Jt,
                                    onSelectionChange: (x, h) => {
                                      let H = Oe.current?.getView();
                                      if (H) {
                                        let ae = co(H.state);
                                        xo(ae);
                                      } else xo(null);
                                    },
                                    externalPlugins: $t,
                                    onReady: (x) => {
                                      Ce?.(x.getView());
                                    },
                                    onRenderedDomContextReady: Te,
                                    pluginOverlays: M,
                                    commentsSidebarOpen: me,
                                    scrollContainerRef: Qn,
                                    sidebarOverlay: me
                                      ? jsx(Tl, {
                                          comments: fe,
                                          trackedChanges: Qe,
                                          pageWidth: (() => {
                                            let x =
                                              le.state?.package?.document?.finalSectionProperties;
                                            return x?.pageWidth
                                              ? Math.round(x.pageWidth / 15)
                                              : 816;
                                          })(),
                                          editorContainerRef: Qn,
                                          onCommentResolve: (x) => {
                                            $e((h) =>
                                              h.map((H) => (H.id === x ? { ...H, done: true } : H))
                                            );
                                          },
                                          onCommentDelete: (x) => {
                                            $e((h) =>
                                              h.filter((H) => H.id !== x && H.parentId !== x)
                                            );
                                          },
                                          onCommentReply: (x, h) => {
                                            $e((H) => [...H, Rs(h, r, x)]);
                                          },
                                          onAddComment: (x) => {
                                            let h = Rs(x, r),
                                              H = Oe.current?.getView();
                                            if (H && Je) {
                                              let { from: ae, to: oe } = Je,
                                                se = H.state.schema.marks.comment.create({
                                                  commentId: vs,
                                                }),
                                                re = H.state.schema.marks.comment.create({
                                                  commentId: h.id,
                                                }),
                                                ge = H.state.tr
                                                  .removeMark(ae, oe, se)
                                                  .addMark(ae, oe, re);
                                              H.dispatch(ge);
                                            }
                                            ($e((ae) => [...ae, h]), We(false), it(null), ct(null));
                                          },
                                          onTrackedChangeReply: (x, h) => {
                                            $e((H) => [...H, Rs(h, r, x)]);
                                          },
                                          onCancelAddComment: () => {
                                            let x = Oe.current?.getView();
                                            if (x && Je) {
                                              let { from: h, to: H } = Je,
                                                ae = x.state.schema.marks.comment.create({
                                                  commentId: vs,
                                                });
                                              x.dispatch(x.state.tr.removeMark(h, H, ae));
                                            }
                                            (We(false), it(null), ct(null));
                                          },
                                          onAcceptChange: (x, h) => {
                                            let H = Oe.current?.getView();
                                            H && (ja(x, h)(H.state, H.dispatch), Ft());
                                          },
                                          onRejectChange: (x, h) => {
                                            let H = Oe.current?.getView();
                                            H && (Ua(x, h)(H.state, H.dispatch), Ft());
                                          },
                                          isAddingComment: tt,
                                          addCommentYPosition: ze,
                                          topOffset: 0,
                                        })
                                      : void 0,
                                  }),
                                  gn != null &&
                                    !tt &&
                                    !v$1 &&
                                    jsx(i$1, {
                                      content: 'Add comment',
                                      side: 'bottom',
                                      delayMs: 300,
                                      children: jsx('button', {
                                        type: 'button',
                                        onMouseDown: (x) => {
                                          (x.preventDefault(), x.stopPropagation());
                                          let h = Oe.current?.getView();
                                          if (h) {
                                            let { from: H, to: ae } = h.state.selection;
                                            if (H !== ae) {
                                              it({ from: H, to: ae });
                                              let oe = h.state.schema.marks.comment.create({
                                                  commentId: vs,
                                                }),
                                                se = h.state.tr.addMark(H, ae, oe);
                                              (se.setSelection(TextSelection.create(se.doc, ae)),
                                                h.dispatch(se));
                                            }
                                          }
                                          (ct(gn.top), me || Se(true), We(true), ln(null));
                                        },
                                        style: {
                                          position: 'absolute',
                                          top: gn.top,
                                          left: gn.left,
                                          transform: 'translate(-50%, -50%)',
                                          zIndex: 50,
                                          width: 28,
                                          height: 28,
                                          borderRadius: 6,
                                          border: '1px solid rgba(26, 115, 232, 0.3)',
                                          backgroundColor: '#fff',
                                          color: '#1a73e8',
                                          cursor: 'pointer',
                                          display: 'flex',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                          boxShadow: '0 1px 3px rgba(60,64,67,0.2)',
                                          transition:
                                            'background-color 0.15s ease, box-shadow 0.15s ease',
                                        },
                                        onMouseOver: (x) => {
                                          ((x.currentTarget.style.backgroundColor =
                                            'rgba(26, 115, 232, 0.08)'),
                                            (x.currentTarget.style.boxShadow =
                                              '0 1px 4px rgba(26, 115, 232, 0.3)'));
                                        },
                                        onMouseOut: (x) => {
                                          ((x.currentTarget.style.backgroundColor = '#fff'),
                                            (x.currentTarget.style.boxShadow =
                                              '0 1px 3px rgba(60,64,67,0.2)'));
                                        },
                                        children: jsx(d, { name: 'add_comment', size: 16 }),
                                      }),
                                    }),
                                  p &&
                                    y$1.totalPages > 0 &&
                                    (f$1
                                      ? jsx(H, {
                                          currentPage: y$1.currentPage,
                                          totalPages: y$1.totalPages,
                                          onNavigate: So,
                                          position: m$2,
                                          variant: b,
                                          floating: true,
                                        })
                                      : jsx(z, {
                                          currentPage: y$1.currentPage,
                                          totalPages: y$1.totalPages,
                                          position: m$2,
                                          variant: b,
                                          floating: true,
                                        })),
                                  R &&
                                    (R === 'header' ? wo : Co) &&
                                    (() => {
                                      let x = ep(R),
                                        h = Jn.current;
                                      return !x || !h
                                        ? null
                                        : jsx(gd, {
                                            ref: ot,
                                            headerFooter: R === 'header' ? wo : Co,
                                            position: R,
                                            styles: le.state?.package.styles,
                                            targetElement: x,
                                            parentElement: h,
                                            onSave: sa,
                                            onClose: () => O$1(null),
                                            onSelectionChange: xo,
                                            onRemove: Qu,
                                          });
                                    })(),
                                ],
                              }),
                            }),
                          ],
                        }),
                        D &&
                          jsx(xl, {
                            headings: pe,
                            onHeadingClick: ar,
                            onClose: () => ie(false),
                            topOffset: rr,
                          }),
                        !D &&
                          jsx('button', {
                            className: 'docx-outline-nav',
                            onClick: ra,
                            onMouseDown: (x) => x.stopPropagation(),
                            title: 'Show document outline',
                            style: {
                              position: 'absolute',
                              left: 48,
                              top: rr + 12,
                              zIndex: 20,
                              background: 'transparent',
                              border: 'none',
                              borderRadius: '50%',
                              padding: 6,
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                            },
                            children: jsx(d, {
                              name: 'format_list_bulleted',
                              size: 20,
                              style: { color: '#444746' },
                            }),
                          }),
                      ],
                    }),
                  }),
                  jsxs(Suspense, {
                    fallback: null,
                    children: [
                      gt.state.isOpen &&
                        jsx(wb, {
                          isOpen: gt.state.isOpen,
                          onClose: gt.close,
                          onFind: Nn,
                          onFindNext: zn,
                          onFindPrevious: aa,
                          onReplace: qu,
                          onReplaceAll: Xu,
                          initialSearchText: gt.state.searchText,
                          replaceMode: gt.state.replaceMode,
                          currentResult: nt.current,
                        }),
                      ht.state.isOpen &&
                        jsx(Cb, {
                          isOpen: ht.state.isOpen,
                          onClose: ht.close,
                          onSubmit: be,
                          onRemove: ht.state.isEditing ? Re : void 0,
                          initialData: ht.state.initialData,
                          selectedText: ht.state.selectedText,
                          isEditing: ht.state.isEditing,
                        }),
                      F &&
                        jsx(Tb, {
                          isOpen: F,
                          onClose: () => B(false),
                          onApply: (x) => {
                            let h = He();
                            h && Oo(x)(h.state, h.dispatch);
                          },
                          currentProps: y$1.pmTableContext?.table?.attrs,
                        }),
                      j && jsx(vb, { isOpen: j, onClose: () => Z(false), onApply: X }),
                      N &&
                        jsx(Rb, {
                          isOpen: N,
                          onClose: () => U(false),
                          onApply: Y,
                          currentData: y$1.pmImageContext
                            ? {
                                alt: y$1.pmImageContext.alt ?? void 0,
                                borderWidth: y$1.pmImageContext.borderWidth ?? void 0,
                                borderColor: y$1.pmImageContext.borderColor ?? void 0,
                                borderStyle: y$1.pmImageContext.borderStyle ?? void 0,
                              }
                            : void 0,
                        }),
                      G &&
                        jsx(Pb, {
                          isOpen: G,
                          onClose: () => xe(false),
                          onApply: J,
                          footnotePr:
                            le.state?.package.document?.finalSectionProperties?.footnotePr,
                          endnotePr: le.state?.package.document?.finalSectionProperties?.endnotePr,
                        }),
                    ],
                  }),
                  jsx('input', {
                    ref: _t,
                    type: 'file',
                    accept: 'image/*',
                    style: { display: 'none' },
                    onChange: T,
                  }),
                ],
              }),
            }),
          })
        : jsx('div', {
            className: `ep-root docx-editor docx-editor-empty ${V}`,
            style: sr,
            'data-testid': 'docx-editor',
            children: L || jsx(yd, {}),
          });
});
function h0(e, t, n = {}) {
  return new Promise((o, r) => {
    let i = Lu.createRef(),
      a = null;
    try {
      a = createRoot(t);
    } catch (d) {
      r(d);
      return;
    }
    let s = {
        save: async () => {
          let d = await (i.current?.save() ?? Promise.resolve(null));
          return d
            ? new Blob([d], {
                type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
              })
            : null;
        },
        getDocument: () => i.current?.getDocument() ?? null,
        focus: () => i.current?.focus(),
        setZoom: (d) => i.current?.setZoom(d),
        destroy: () => {
          (a?.unmount(), (a = null));
        },
      },
      l = false,
      u = Lu.createElement(Fu, {
        ...n,
        documentBuffer: e,
        onError: (d) => {
          (n.onError?.(d), l || ((l = true), r(d)));
        },
        onChange: (d) => {
          (n.onChange?.(d), l || ((l = true), o(s)));
        },
        ref: i,
      });
    a.render(u);
  });
}
function v0(e, t = {}) {
  let {
      storageKey: n,
      interval: o,
      enabled: r = true,
      maxAge: i,
      onSave: a,
      onError: s,
      onRecoveryAvailable: l,
      saveOnChange: u,
      debounceDelay: d,
    } = t,
    c = useMemo(
      () =>
        new r$1({
          storageKey: n,
          interval: o,
          maxAge: i,
          saveOnChange: u,
          debounceDelay: d,
          onSave: a,
          onError: s,
          onRecoveryAvailable: l,
        }),
      [n]
    );
  (useEffect(() => {
    r ? (c.enable(), c.startInterval()) : c.disable();
  }, [c, r]),
    useEffect(() => {
      c.onDocumentChanged(e ?? null);
    }, [c, e]),
    useEffect(
      () => () => {
        c.destroy();
      },
      [c]
    ));
  let p = useSyncExternalStore(c.subscribe, c.getSnapshot),
    f = useCallback(() => c.save(), [c]),
    m = useCallback(() => c.clear(), [c]),
    b = useCallback(() => c.getRecoveryData(), [c]),
    g = useCallback(() => c.acceptRecovery(), [c]),
    S = useCallback(() => c.dismissRecovery(), [c]),
    w = useCallback(() => c.enable(), [c]),
    k = useCallback(() => c.disable(), [c]);
  return {
    status: p.status,
    lastSaveTime: p.lastSaveTime,
    save: f,
    clearAutoSave: m,
    hasRecoveryData: p.hasRecoveryData,
    getRecoveryData: b,
    acceptRecovery: g,
    dismissRecovery: S,
    isEnabled: p.isEnabled,
    enable: w,
    disable: k,
  };
}
var Db = 1,
  Bu = 0.25,
  Au = 4,
  Hb = 0.1,
  Yt = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];
function Du(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Hu(e) {
  return Math.round(e * 100) / 100;
}
function Nb(e) {
  let t = Yt[0],
    n = Math.abs(e - t);
  for (let o of Yt) {
    let r = Math.abs(e - o);
    r < n && ((n = r), (t = o));
  }
  return t;
}
function zb(e) {
  for (let t of Yt) if (t > e + 0.01) return t;
  return Yt[Yt.length - 1];
}
function Ob(e) {
  for (let t = Yt.length - 1; t >= 0; t--) if (Yt[t] < e - 0.01) return Yt[t];
  return Yt[0];
}
function M0(e = {}) {
  let {
      initialZoom: t = Db,
      minZoom: n = Bu,
      maxZoom: o = Au,
      zoomStep: r = Hb,
      enabled: i = true,
      containerRef: a,
      onZoomChange: s,
      enableKeyboardShortcuts: l = true,
      preventDefault: u = true,
    } = e,
    [d, c] = useState(t),
    p = useRef(d);
  useEffect(() => {
    p.current = d;
  }, [d]);
  let f = useCallback(
      (v) => {
        let _ = Hu(Du(v, n, o));
        _ !== p.current && (c(_), s?.(_));
      },
      [n, o, s]
    ),
    m = useCallback(() => {
      f(p.current + r);
    }, [r, f]),
    b = useCallback(() => {
      f(p.current - r);
    }, [r, f]),
    g = useCallback(() => {
      f(t);
    }, [t, f]),
    S = useCallback(() => {
      f(1);
    }, [f]),
    w = useCallback(
      (v, _) => {
        if (_ > 0) {
          let V = v / _;
          f(V);
        }
      },
      [f]
    ),
    k = useCallback(
      (v) => {
        if (!i || !(v.ctrlKey || v.metaKey)) return;
        u && v.preventDefault();
        let V = v.deltaY;
        V < 0 ? f(p.current + r) : V > 0 && f(p.current - r);
      },
      [i, u, r, f]
    ),
    E = useCallback(
      (v) => {
        if (!(!i || !l || !(v.ctrlKey || v.metaKey))) {
          if (v.key === '0') {
            (v.preventDefault(), S());
            return;
          }
          if (v.key === '+' || v.key === '=') {
            (v.preventDefault(), m());
            return;
          }
          if (v.key === '-') {
            (v.preventDefault(), b());
            return;
          }
        }
      },
      [i, l, m, b, S]
    );
  return (
    useEffect(() => {
      if (!i) return;
      let v = a?.current;
      if (v)
        return (
          v.addEventListener('wheel', k, { passive: false }),
          () => {
            v.removeEventListener('wheel', k);
          }
        );
    }, [i, a, k]),
    useEffect(() => {
      if (!(!i || !l))
        return (
          document.addEventListener('keydown', E),
          () => {
            document.removeEventListener('keydown', E);
          }
        );
    }, [i, l, E]),
    {
      zoom: d,
      setZoom: f,
      zoomIn: m,
      zoomOut: b,
      resetZoom: g,
      zoomTo100: S,
      zoomToFit: w,
      isMinZoom: d <= n,
      isMaxZoom: d >= o,
      zoomPercent: Math.round(d * 100),
      handleWheel: k,
      handleKeyDown: E,
    }
  );
}
function E0() {
  return [...Yt];
}
function I0(e) {
  return Nb(e);
}
function F0(e) {
  return zb(e);
}
function L0(e) {
  return Ob(e);
}
function B0(e) {
  return `${Math.round(e * 100)}%`;
}
function A0(e) {
  let t = e.match(/(\d+(\.\d+)?)/);
  if (t) {
    let n = parseFloat(t[1]);
    if (!isNaN(n)) return n / 100;
  }
  return null;
}
function D0(e) {
  return Yt.some((t) => Math.abs(t - e) < 0.01);
}
function H0(e, t = Bu, n = Au) {
  return Hu(Du(e, t, n));
}
var bo = {
    backgroundColor: 'rgba(26, 115, 232, 0.3)',
    borderRadius: 0,
    zIndex: 0,
    opacity: 1,
    mixBlendMode: 'multiply',
  },
  z0 = {
    backgroundColor: 'rgba(0, 120, 215, 0.4)',
    borderColor: 'rgba(0, 120, 215, 0.6)',
    borderRadius: 1,
    zIndex: 0,
    opacity: 1,
  },
  O0 = {
    backgroundColor: '--docx-selection-bg',
    borderColor: '--docx-selection-border',
    textColor: '--docx-selection-text',
  };
function Nu(e) {
  let t = window.getSelection();
  if (!t || t.rangeCount === 0 || t.isCollapsed) return [];
  let n = t.getRangeAt(0);
  if (e && !e.contains(n.commonAncestorContainer)) return [];
  let o = n.getClientRects(),
    r = [],
    i = 0,
    a = 0;
  if (e) {
    let s = e.getBoundingClientRect();
    ((i = s.left + e.scrollLeft), (a = s.top + e.scrollTop));
  }
  for (let s = 0; s < o.length; s++) {
    let l = o[s];
    (l.width === 0 && l.height === 0) ||
      r.push({ left: l.left - i, top: l.top - a, width: l.width, height: l.height });
  }
  return r;
}
function $b(e, t = 2) {
  if (e.length <= 1) return e;
  let n = [...e].sort((i, a) => (Math.abs(i.top - a.top) < t ? i.left - a.left : i.top - a.top)),
    o = [],
    r = { ...n[0] };
  for (let i = 1; i < n.length; i++) {
    let a = n[i],
      s = Math.abs(a.top - r.top) < t,
      l = a.left <= r.left + r.width + t;
    if (s && l) {
      let u = Math.max(r.left + r.width, a.left + a.width);
      ((r.width = u - r.left), (r.height = Math.max(r.height, a.height)));
    } else (o.push(r), (r = { ...a }));
  }
  return (o.push(r), o);
}
function Es(e) {
  let t = Nu(e);
  return $b(t);
}
function $0(e, t = bo) {
  return {
    position: 'absolute',
    left: `${e.left}px`,
    top: `${e.top}px`,
    width: `${e.width}px`,
    height: `${e.height}px`,
    backgroundColor: t.backgroundColor,
    borderRadius: t.borderRadius ? `${t.borderRadius}px` : void 0,
    border: t.borderColor ? `1px solid ${t.borderColor}` : void 0,
    zIndex: t.zIndex ?? 0,
    opacity: t.opacity ?? 1,
    mixBlendMode: t.mixBlendMode,
    pointerEvents: 'none',
    userSelect: 'none',
  };
}
function W0(e, t = bo) {
  let n = t.backgroundColor;
  return `
    ${e}::selection,
    ${e} *::selection {
      background-color: ${n} !important;
      color: inherit !important;
    }

    ${e}::-moz-selection,
    ${e} *::-moz-selection {
      background-color: ${n} !important;
      color: inherit !important;
    }
  `;
}
function zu() {
  let e = window.getSelection();
  return e !== null && !e.isCollapsed && e.rangeCount > 0;
}
function Ou() {
  let e = window.getSelection();
  return e ? e.toString() : '';
}
function $u(e) {
  let t = window.getSelection();
  if (!t || t.rangeCount === 0) return false;
  let n = t.getRangeAt(0);
  return e.contains(n.commonAncestorContainer);
}
function _0() {
  let e = window.getSelection();
  return !e || e.rangeCount === 0 ? null : e.getRangeAt(0).getBoundingClientRect();
}
function V0(e, t, n, o, r) {
  try {
    let i = document.createRange();
    return (i.setStart(t, n), i.setEnd(o, r), i);
  } catch {
    return null;
  }
}
function j0(e) {
  let t = window.getSelection();
  t && (t.removeAllRanges(), t.addRange(e));
}
function U0() {
  let e = window.getSelection();
  e && e.removeAllRanges();
}
function Wb() {
  let e = window.getSelection();
  if (!e || e.rangeCount === 0) return false;
  let t = e.anchorNode,
    n = e.focusNode;
  return !t || !n
    ? false
    : t === n
      ? e.focusOffset < e.anchorOffset
      : (t.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_PRECEDING) !== 0;
}
function G0() {
  let e = window.getSelection();
  if (!e || e.rangeCount === 0 || !Wb()) return;
  let t = e.getRangeAt(0),
    n = document.createRange();
  (n.setStart(t.startContainer, t.startOffset),
    n.setEnd(t.endContainer, t.endOffset),
    e.removeAllRanges(),
    e.addRange(n));
}
var Bn = null;
function Wu(e = bo) {
  _b();
  let t = `
    /* DOCX Editor Selection Highlighting */

    /* Base selection style for all editable content */
    .docx-editor [contenteditable="true"]::selection,
    .docx-editor [contenteditable="true"] *::selection,
    .docx-run-editable::selection,
    .docx-run-editable *::selection {
      background-color: ${e.backgroundColor} !important;
      color: inherit !important;
    }

    /* Firefox selection */
    .docx-editor [contenteditable="true"]::-moz-selection,
    .docx-editor [contenteditable="true"] *::-moz-selection,
    .docx-run-editable::-moz-selection,
    .docx-run-editable *::-moz-selection {
      background-color: ${e.backgroundColor} !important;
      color: inherit !important;
    }

    /* Ensure selection is visible against all backgrounds */
    .docx-run-highlighted::selection,
    .docx-run-highlighted *::selection {
      /* For highlighted (yellow background) text, use darker selection */
      background-color: rgba(26, 115, 232, 0.5) !important;
    }

    .docx-run-highlighted::-moz-selection,
    .docx-run-highlighted *::-moz-selection {
      background-color: rgba(26, 115, 232, 0.5) !important;
    }

    /* Selection in dark text */
    .docx-run-dark-bg::selection,
    .docx-run-dark-bg *::selection {
      /* Use lighter selection for dark backgrounds */
      background-color: rgba(100, 181, 246, 0.5) !important;
    }

    .docx-run-dark-bg::-moz-selection,
    .docx-run-dark-bg *::-moz-selection {
      background-color: rgba(100, 181, 246, 0.5) !important;
    }

    /* Programmatic highlight class */
    .docx-selection-highlight {
      background-color: ${e.backgroundColor};
      ${e.borderRadius ? `border-radius: ${e.borderRadius}px;` : ''}
      ${e.mixBlendMode ? `mix-blend-mode: ${e.mixBlendMode};` : ''}
    }

    /* Find/replace highlight */
    .docx-find-highlight {
      background-color: rgba(255, 235, 59, 0.5);
      border-radius: 2px;
    }

    .docx-find-highlight-current {
      background-color: rgba(255, 152, 0, 0.6);
      border-radius: 2px;
      outline: 2px solid rgba(255, 152, 0, 0.8);
    }

    /* AI action selection preview */
    .docx-ai-selection-preview {
      background-color: rgba(156, 39, 176, 0.2);
      border-bottom: 2px dashed rgba(156, 39, 176, 0.6);
    }
  `;
  ((Bn = document.createElement('style')),
    (Bn.id = 'docx-selection-styles'),
    (Bn.textContent = t),
    document.head.appendChild(Bn));
}
function _b() {
  Bn && (Bn.remove(), (Bn = null));
  let e = document.getElementById('docx-selection-styles');
  e && e.remove();
}
function _u() {
  return Bn !== null || document.getElementById('docx-selection-styles') !== null;
}
function K0(e, t, n = true) {
  return () => {
    if (!e) {
      t([]);
      return;
    }
    let o = n ? Es(e) : Nu(e);
    t(o);
  };
}
function Q0(e) {
  let {
      containerRef: t,
      enabled: n = true,
      config: o = bo,
      useOverlay: r = false,
      debounceMs: i = 16,
      onSelectionChange: a,
    } = e,
    [s, l] = useState(false),
    [u, d] = useState(''),
    [c, p] = useState([]),
    [f, m] = useState(false),
    b = useRef(null),
    g = useRef(0),
    S = useCallback(() => {
      let v = t.current,
        _ = zu(),
        V = Ou(),
        W = v ? $u(v) : false;
      if ((l(_), d(V), m(W), r && W)) {
        let L = Es(v);
        p(L);
      } else p([]);
      a && a(_ && W, V);
    }, [t, r, a]),
    w = useCallback(() => {
      let v = performance.now();
      if (v - g.current < i) {
        (b.current !== null && clearTimeout(b.current),
          (b.current = window.setTimeout(() => {
            ((g.current = performance.now()), S(), (b.current = null));
          }, i)));
        return;
      }
      ((g.current = v), S());
    }, [i, S]),
    k = useCallback(() => {
      S();
    }, [S]),
    E = useCallback(
      (v) => ({
        position: 'absolute',
        left: `${v.left}px`,
        top: `${v.top}px`,
        width: `${v.width}px`,
        height: `${v.height}px`,
        backgroundColor: o.backgroundColor,
        borderRadius: o.borderRadius ? `${o.borderRadius}px` : void 0,
        border: o.borderColor ? `1px solid ${o.borderColor}` : void 0,
        zIndex: o.zIndex ?? 0,
        opacity: o.opacity ?? 1,
        mixBlendMode: o.mixBlendMode,
        pointerEvents: 'none',
        userSelect: 'none',
      }),
      [o]
    );
  return (
    useEffect(() => (n && !_u() && Wu(o), () => {}), [n, o]),
    useEffect(() => {
      if (!n) return;
      let v = () => {
        w();
      };
      return (
        document.addEventListener('selectionchange', v),
        document.addEventListener('mouseup', v),
        S(),
        () => {
          (document.removeEventListener('selectionchange', v),
            document.removeEventListener('mouseup', v),
            b.current !== null && clearTimeout(b.current));
        }
      );
    }, [n, w, S]),
    {
      hasSelection: s,
      selectedText: u,
      highlightRects: c,
      isSelectionInContainer: f,
      refresh: k,
      getOverlayStyle: E,
    }
  );
}
function eR(e, t = bo) {
  return e.map((n, o) =>
    Lu.createElement('div', {
      key: `selection-overlay-${o}`,
      style: {
        position: 'absolute',
        left: `${n.left}px`,
        top: `${n.top}px`,
        width: `${n.width}px`,
        height: `${n.height}px`,
        backgroundColor: t.backgroundColor,
        borderRadius: t.borderRadius ? `${t.borderRadius}px` : void 0,
        border: t.borderColor ? `1px solid ${t.borderColor}` : void 0,
        zIndex: t.zIndex ?? 0,
        opacity: t.opacity ?? 1,
        mixBlendMode: t.mixBlendMode,
        pointerEvents: 'none',
        userSelect: 'none',
      },
    })
  );
}
function aR(e = {}) {
  let {
      onCopy: t,
      onCut: n,
      onPaste: o,
      cleanWordFormatting: r = true,
      editable: i = true,
      onError: a,
    } = e,
    s = useRef(false),
    l = useRef(null),
    u = useCallback(
      async (g) => {
        if (s.current) return false;
        s.current = true;
        try {
          let S = await da(g.runs, { onError: a });
          return (S && t?.(g), S);
        } finally {
          s.current = false;
        }
      },
      [t, a]
    ),
    d = useCallback(
      async (g) => {
        if (s.current || !i) return false;
        s.current = true;
        try {
          let S = await da(g.runs, { onError: a });
          return (S && n?.(g), S);
        } finally {
          s.current = false;
        }
      },
      [n, i, a]
    ),
    c = useCallback(
      async (g = false) => {
        if (s.current || !i) return null;
        s.current = true;
        try {
          if (navigator.clipboard && navigator.clipboard.read) {
            let S = await navigator.clipboard.read(),
              w = '',
              k = '';
            for (let v of S)
              (v.types.includes('text/html') && (w = await (await v.getType('text/html')).text()),
                v.types.includes('text/plain') &&
                  (k = await (await v.getType('text/plain')).text()));
            g && (w = '');
            let E = ka(w, k, r);
            return ((l.current = E), o?.(E, g), E);
          }
          return null;
        } catch (S) {
          return (a?.(S), null);
        } finally {
          s.current = false;
        }
      },
      [i, r, o, a]
    ),
    p = useCallback(
      (g) => {
        let S = F();
        if (!S) return;
        g.preventDefault();
        let w = fa(S.runs);
        (g.clipboardData &&
          (g.clipboardData.setData('text/plain', w.plainText),
          g.clipboardData.setData('text/html', w.html),
          w.internal && g.clipboardData.setData('application/x-docx-editor', w.internal)),
          t?.(S));
      },
      [t]
    ),
    f = useCallback(
      (g) => {
        if (!i) return;
        let S = F();
        if (!S) return;
        g.preventDefault();
        let w = fa(S.runs);
        (g.clipboardData &&
          (g.clipboardData.setData('text/plain', w.plainText),
          g.clipboardData.setData('text/html', w.html),
          w.internal && g.clipboardData.setData('application/x-docx-editor', w.internal)),
          n?.(S));
      },
      [i, n]
    ),
    m = useCallback(
      (g) => {
        if (!i) return;
        g.preventDefault();
        let S = ja$1(g, { cleanWordFormatting: r });
        if (S) {
          l.current = S;
          let w = g.shiftKey ?? false;
          o?.(S, w);
        }
      },
      [i, r, o]
    ),
    b = useCallback((g) => {}, []);
  return {
    copy: u,
    cut: d,
    paste: c,
    handleCopy: p,
    handleCut: f,
    handlePaste: m,
    handleKeyDown: b,
    isProcessing: s.current,
    lastPastedContent: l.current,
  };
}
var Qi = {
    position: 'right',
    defaultSize: 280,
    minSize: 200,
    maxSize: 500,
    resizable: true,
    collapsible: true,
    defaultCollapsed: false,
  },
  Ku = I,
  Yu = `
.plugin-host {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: visible;
  position: relative;
}

.plugin-host-editor {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: visible;
}


.plugin-panels-left,
.plugin-panels-right {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  background: #f8f9fa;
  border-color: #e9ecef;
}

.plugin-panels-left {
  border-right: 1px solid #e9ecef;
}

.plugin-panels-right {
  border-left: 1px solid #e9ecef;
}

.plugin-panels-bottom {
  border-top: 1px solid #e9ecef;
  background: #f8f9fa;
}

.plugin-panel {
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 0.2s ease, height 0.2s ease;
}

.plugin-panel.collapsed {
  overflow: visible;
}

.plugin-panel-toggle {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 12px;
  color: #6c757d;
  white-space: nowrap;
}

.plugin-panel.collapsed .plugin-panel-toggle {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  flex-direction: column;
  height: 100%;
  padding: 8px 6px;
}

.plugin-panel-toggle:hover {
  background: #e9ecef;
  color: #495057;
}

.plugin-panel-toggle-icon {
  font-weight: bold;
  font-size: 14px;
}

.plugin-panel.collapsed .plugin-panel-toggle-icon {
  transform: rotate(90deg);
}

.plugin-panel-toggle-label {
  font-weight: 500;
}

.plugin-panel-content {
  flex: 1;
  overflow: auto;
}

/* Right panel rendered inside viewport - scrolls with content */
.plugin-panel-in-viewport {
  position: absolute;
  top: 0;
  /* Position is set dynamically via inline styles based on page edge */
  width: 220px;
  pointer-events: auto;
  z-index: 10;
  overflow: visible;
}

.plugin-panel-in-viewport.collapsed {
  width: 32px;
}

.plugin-panel-in-viewport .plugin-panel-toggle {
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.plugin-panel-in-viewport-content {
  overflow: visible;
  position: relative;
}

/* Plugin overlay container for rendering highlights/decorations */
.plugin-overlays-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: visible;
  z-index: 5;
}

.plugin-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.plugin-overlay > * {
  pointer-events: auto;
}
`,
  qb = forwardRef(function ({ plugins: t, children: n, className: o = '' }, r) {
    let [i, a] = useState(null),
      s = useRef(n.props);
    s.current = n.props;
    let [l, u] = useState(null),
      d = useMemo(() => new J(), []),
      c = useSyncExternalStore(d.subscribe, d.getSnapshot),
      [p, f] = useState(() => {
        let C = new Set();
        for (let A of t) ({ ...Qi, ...A.panelConfig }).defaultCollapsed && C.add(A.id);
        return C;
      }),
      [m] = useState(() => {
        let C = new Map();
        for (let A of t) {
          let ee = { ...Qi, ...A.panelConfig };
          C.set(A.id, ee.defaultSize);
        }
        return C;
      });
    (useEffect(() => {
      if (!i) return;
      let C = t.map((A) => ({
        id: A.id,
        styles: A.styles,
        initialize: A.initialize,
        onStateChange: A.onStateChange,
        destroy: A.destroy,
      }));
      return (
        d.initialize(C, i),
        () => {
          d.destroy();
        }
      );
    }, [d, i, t]),
      useEffect(() => {
        let C = t.filter((A) => A.styles).map((A) => Ku(A.id, A.styles));
        return () => C.forEach((A) => A());
      }, [t]),
      useEffect(() => {
        if (!i?.dom) return;
        let C = () => {
            d.updateStates(i);
          },
          A = null,
          ee = () => {
            (A && cancelAnimationFrame(A), (A = requestAnimationFrame(C)));
          };
        C();
        let he = i.dom;
        (he.addEventListener('input', ee),
          he.addEventListener('focus', C),
          he.addEventListener('click', C));
        let de = i.dispatch.bind(i);
        return (
          (i.dispatch = (we) => {
            (de(we), ee());
          }),
          () => {
            (he.removeEventListener('input', ee),
              he.removeEventListener('focus', C),
              he.removeEventListener('click', C),
              A && cancelAnimationFrame(A),
              (i.dispatch = de));
          }
        );
      }, [i, d]),
      useEffect(() => Ku('plugin-host-base', Yu), []));
    let b = useCallback(
        (C) => {
          if (!i) return;
          if (i.coordsAtPos(C)) {
            i.dom.scrollIntoView({ block: 'center', inline: 'nearest' });
            let { state: ee } = i,
              he = ee.doc.resolve(Math.min(C, ee.doc.content.size)),
              de = ee.tr.setSelection(TextSelection.near(he));
            (i.dispatch(de), i.focus());
          }
        },
        [i]
      ),
      g = useCallback(
        (C, A) => {
          if (!i) return;
          let { state: ee } = i,
            he = ee.doc.content.size,
            de = Math.max(0, Math.min(C, he)),
            we = Math.max(0, Math.min(A, he)),
            Ce = ee.tr.setSelection(TextSelection.create(ee.doc, de, we));
          (i.dispatch(Ce), i.focus());
        },
        [i]
      ),
      S = useCallback((C) => d.getPluginState(C), [d]),
      w = useCallback(
        (C, A) => {
          d.setPluginState(C, A);
        },
        [d]
      ),
      k = useCallback(() => {
        i && d.updateStates(i);
      }, [i, d]);
    useImperativeHandle(
      r,
      () => ({
        getPluginState: S,
        setPluginState: w,
        getEditorView: () => i,
        refreshPluginStates: k,
      }),
      [S, w, i, k]
    );
    let E = useMemo(() => {
        let C = [];
        for (let A of t) A.proseMirrorPlugins && C.push(...A.proseMirrorPlugins);
        return C;
      }, [t]),
      v = useCallback((C) => {
        f((A) => {
          let ee = new Set(A);
          return (ee.has(C) ? ee.delete(C) : ee.add(C), ee);
        });
      }, []),
      [_, V] = useState(null);
    useEffect(() => {
      if (!l) {
        V(null);
        return;
      }
      let C = () => {
        let he = l.pagesContainer,
          de = he.querySelector('.layout-page');
        if (!de) {
          V(null);
          return;
        }
        let we = l.getContainerOffset(),
          Ce = de.getBoundingClientRect(),
          Te = he.getBoundingClientRect(),
          M = (Ce.right - Te.left) / l.zoom,
          I = we.x + M + 5;
        V(I);
      };
      C();
      let A = () => {
        requestAnimationFrame(C);
      };
      window.addEventListener('resize', A);
      let ee = new ResizeObserver(() => {
        requestAnimationFrame(C);
      });
      return (
        ee.observe(l.pagesContainer),
        () => {
          (window.removeEventListener('resize', A), ee.disconnect());
        }
      );
    }, [l]);
    let W = useMemo(() => {
        let C = [];
        if (l) {
          for (let A of t)
            if (A.renderOverlay) {
              let ee = c.states.get(A.id);
              C.push(
                jsx(
                  'div',
                  {
                    className: 'plugin-overlay',
                    'data-plugin-id': A.id,
                    children: A.renderOverlay(l, ee, i),
                  },
                  `overlay-${A.id}`
                )
              );
            }
        }
        for (let A of t) {
          if (!A.Panel || (A.panelConfig?.position ?? 'right') !== 'right') continue;
          let he = { ...Qi, ...A.panelConfig },
            de = p.has(A.id),
            we = m.get(A.id) ?? he.defaultSize,
            Ce = A.Panel,
            Te = c.states.get(A.id),
            M = _ !== null ? `${_}px` : 'calc(50% + 428px)';
          C.push(
            jsxs(
              'div',
              {
                className: `plugin-panel-in-viewport ${de ? 'collapsed' : ''}`,
                style: { width: de ? '32px' : `${we}px`, left: M },
                'data-plugin-id': A.id,
                children: [
                  he.collapsible &&
                    jsx('button', {
                      className: 'plugin-panel-toggle',
                      onClick: () => v(A.id),
                      title: de ? `Show ${A.name}` : `Hide ${A.name}`,
                      'aria-label': de ? `Show ${A.name}` : `Hide ${A.name}`,
                      children: jsx('span', {
                        className: 'plugin-panel-toggle-icon',
                        children: de ? '\u2039' : '\u203A',
                      }),
                    }),
                  !de &&
                    l &&
                    jsx('div', {
                      className: 'plugin-panel-in-viewport-content',
                      children: jsx(Ce, {
                        editorView: i,
                        doc: i?.state.doc ?? null,
                        scrollToPosition: b,
                        selectRange: g,
                        pluginState: Te,
                        panelWidth: we,
                        renderedDomContext: l,
                      }),
                    }),
                ],
              },
              `panel-overlay-${A.id}`
            )
          );
        }
        return C.length > 0 ? C : null;
      }, [l, t, c.version, i, p, m, b, g, v, _]),
      L = useCallback((C) => {
        u(C);
        let A = s.current?.onRenderedDomContextReady;
        typeof A == 'function' && A(C);
      }, []),
      $ = useMemo(
        () =>
          cloneElement(n, {
            externalPlugins: E,
            pluginOverlays: W,
            onRenderedDomContextReady: L,
            onEditorViewReady: (C) => {
              a(C);
              let A = s.current?.onEditorViewReady;
              typeof A == 'function' && A(C);
            },
          }),
        [n, E, W, L]
      ),
      z = useMemo(() => {
        let C = [],
          A = [],
          ee = [];
        for (let he of t) {
          if (!he.Panel) continue;
          let de = he.panelConfig?.position ?? 'right';
          de === 'left' ? C.push(he) : de === 'bottom' ? ee.push(he) : A.push(he);
        }
        return { left: C, right: A, bottom: ee };
      }, [t]),
      K = (C) => {
        if (!C.Panel) return null;
        let A = { ...Qi, ...C.panelConfig },
          ee = p.has(C.id),
          he = m.get(C.id) ?? A.defaultSize,
          de = C.Panel,
          we = c.states.get(C.id);
        return jsxs(
          'div',
          {
            className: `plugin-panel plugin-panel-${A.position} ${ee ? 'collapsed' : ''}`,
            style: {
              [A.position === 'bottom' ? 'height' : 'width']: ee ? '32px' : `${he}px`,
              minWidth: A.position !== 'bottom' ? (ee ? '32px' : `${A.minSize}px`) : void 0,
              maxWidth: A.position !== 'bottom' ? `${A.maxSize}px` : void 0,
              minHeight: A.position === 'bottom' ? (ee ? '32px' : `${A.minSize}px`) : void 0,
              maxHeight: A.position === 'bottom' ? `${A.maxSize}px` : void 0,
            },
            'data-plugin-id': C.id,
            children: [
              A.collapsible &&
                jsxs('button', {
                  className: 'plugin-panel-toggle',
                  onClick: () => v(C.id),
                  title: ee ? `Show ${C.name}` : `Hide ${C.name}`,
                  'aria-label': ee ? `Show ${C.name}` : `Hide ${C.name}`,
                  children: [
                    jsx('span', {
                      className: 'plugin-panel-toggle-icon',
                      children: ee ? '\u203A' : '\u2039',
                    }),
                    ee && jsx('span', { className: 'plugin-panel-toggle-label', children: C.name }),
                  ],
                }),
              !ee &&
                jsx('div', {
                  className: 'plugin-panel-content',
                  children: jsx(de, {
                    editorView: i,
                    doc: i?.state.doc ?? null,
                    scrollToPosition: b,
                    selectRange: g,
                    pluginState: we,
                    panelWidth: he,
                    renderedDomContext: l ?? null,
                  }),
                }),
            ],
          },
          C.id
        );
      };
    return jsxs('div', {
      className: `plugin-host ${o}`,
      children: [
        z.left.length > 0 &&
          jsx('div', { className: 'plugin-panels-left', children: z.left.map(K) }),
        jsxs('div', {
          className: 'plugin-host-editor',
          children: [
            $,
            z.bottom.length > 0 &&
              jsx('div', { className: 'plugin-panels-bottom', children: z.bottom.map(K) }),
          ],
        }),
      ],
    });
  });
export {
  Es as A,
  $0 as B,
  W0 as C,
  zu as D,
  Ou as E,
  $u as F,
  _0 as G,
  V0 as H,
  j0 as I,
  U0 as J,
  Wb as K,
  G0 as L,
  Wu as M,
  _b as N,
  _u as O,
  K0 as P,
  Q0 as Q,
  eR as R,
  aR as S,
  Yu as T,
  qb as U,
  Qb as a,
  gl as b,
  fr as c,
  ey as d,
  ty as e,
  ny as f,
  oy as g,
  bl as h,
  Fu as i,
  h0 as j,
  v0 as k,
  Yt as l,
  M0 as m,
  E0 as n,
  I0 as o,
  F0 as p,
  L0 as q,
  B0 as r,
  A0 as s,
  D0 as t,
  H0 as u,
  bo as v,
  z0 as w,
  O0 as x,
  Nu as y,
  $b as z,
}; //# sourceMappingURL=chunk-WOLE2G2F.js.map
//# sourceMappingURL=chunk-WOLE2G2F.js.map
