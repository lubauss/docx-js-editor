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
  U,
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
  _,
  ga,
  fa,
  $,
  ea as ea$1,
  ca,
  da,
  ba,
  ja,
  qa,
  la,
  pa,
} from './chunk-7IIMSS52.js';
import { m, j as j$1, l as l$1 } from './chunk-M2T6XKT5.js';
import { m as m$1 } from './chunk-Q6HUGWO6.js';
import { J, C, z as z$1, B, A, H as H$1, I, r as r$1, F } from './chunk-PCWVYQKY.js';
import { c } from './chunk-667XFXTH.js';
import { a, r, s, B as B$1, A as A$1, n, z as z$2, y as y$1, c as c$3 } from './chunk-CXJ6TLVT.js';
import { a as a$1 } from './chunk-JOYPFQW2.js';
import { o, q, k as k$1, e as e$1, c as c$2, d as d$3 } from './chunk-OECSQ2YK.js';
import { d as d$1, f as f$1, g, i as i$2, e, h } from './chunk-Y6VCTLCJ.js';
import Au, {
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
var hl = createContext(null);
function ry() {
  let e = useContext(hl);
  if (!e) throw new Error('useErrorNotifications must be used within an ErrorProvider');
  return e;
}
function bl({ children: e }) {
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
  return jsxs(hl.Provider, {
    value: l,
    children: [e, jsx(Sp, { notifications: n.notifications, onDismiss: a })],
  });
}
function Sp({ notifications: e, onDismiss: t }) {
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
        children: n.map((r) => jsx(kp, { notification: r, onDismiss: () => t(r.id) }, r.id)),
      });
}
function kp({ notification: e, onDismiss: t }) {
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
var yr = class extends Component {
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
        : jsx(wp, { error: r, errorInfo: i, showDetails: o, onReset: this.resetError });
    }
    return this.props.children;
  }
};
function wp({ error: e, errorInfo: t, showDetails: n, onReset: o }) {
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
function iy({ message: e, details: t, onRetry: n, className: o = '' }) {
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
function ay({ feature: e, description: t, className: n = '' }) {
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
function sy(e) {
  return (
    e.message.includes('parse') ||
    e.message.includes('Parse') ||
    e.message.includes('XML') ||
    e.message.includes('DOCX') ||
    e.message.includes('Invalid')
  );
}
function ly(e) {
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
function xl({ document: e, onChange: t, onSelectionChange: n }) {
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
        let b = _(f, { tableIndex: d, rowIndex: c, columnIndex: p });
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
            ((p = ba(c, r.rowIndex, 'before')), (m = r.rowIndex + 1));
            break;
          case 'addRowBelow':
            p = ba(c, r.rowIndex, 'after');
            break;
          case 'addColumnLeft':
            ((p = da(c, r.columnIndex, 'before')), (b = r.columnIndex + 1));
            break;
          case 'addColumnRight':
            p = da(c, r.columnIndex, 'after');
            break;
          case 'deleteRow':
            c.rows.length > 1 &&
              ((p = ca(c, r.rowIndex)), m >= p.rows.length && (m = p.rows.length - 1));
            break;
          case 'deleteColumn': {
            if ($(c) > 1) {
              p = ea$1(c, r.columnIndex);
              let x = $(p);
              b >= x && (b = x - 1);
            }
            break;
          }
          case 'mergeCells':
            r.context.selection.selectedCells && (p = fa(c, r.context.selection));
            break;
          case 'splitCell':
            r.context.canSplitCell && (p = ga(c, r.rowIndex, r.columnIndex));
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
var kl = ({ headings: e, onHeadingClick: t, onClose: n, topOffset: o = 0 }) => {
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
function Cl(e) {
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
function Ea(e) {
  return e
    ? new Date(e).toLocaleString(void 0, {
        hour: 'numeric',
        minute: '2-digit',
        month: 'short',
        day: 'numeric',
      })
    : '';
}
function Ia(e) {
  return e
    .split(/\s+/)
    .map((t) => t[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}
var Tl = [
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
function Mp(e) {
  let t = 0;
  for (let n = 0; n < e.length; n++) t = e.charCodeAt(n) + ((t << 5) - t);
  return Tl[Math.abs(t) % Tl.length];
}
var Ep = 340,
  Ip = 8,
  kr = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 4,
    color: '#5f6368',
    display: 'flex',
    borderRadius: '50%',
  },
  vl = {
    padding: '6px 16px',
    fontSize: 14,
    border: 'none',
    background: 'none',
    color: '#1a73e8',
    cursor: 'pointer',
    fontWeight: 500,
    fontFamily: 'inherit',
  },
  Rl = ({
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
    let [x, w] = useState(null),
      [S, M] = useState(''),
      [P, z] = useState(''),
      [U, $] = useState(null),
      [L, W] = useState(null),
      [_, K] = useState(new Map()),
      [T, B] = useState(false),
      J = useRef(new Set()),
      he = useRef(null),
      ue = useRef(new Map()),
      Ee = useMemo(() => e.filter((E) => !(E.parentId != null || (E.done && !p))), [e, p]),
      we = useMemo(() => {
        let E = new Map();
        for (let D of e)
          if (D.parentId != null) {
            let H = E.get(D.parentId);
            H ? H.push(D) : E.set(D.parentId, [D]);
          }
        return E;
      }, [e]),
      Re = (E) => we.get(E) ?? [],
      R = useCallback(() => {
        let E = g?.current;
        if (!E) return;
        let D = E.querySelector('.paged-editor__pages');
        if (!D) return;
        let H = E.getBoundingClientRect(),
          ae = E.scrollTop,
          pe = [];
        for (let ge of Ee) {
          let Se = D.querySelector(`[data-comment-id="${ge.id}"]`);
          if (Se) {
            let de = Se.getBoundingClientRect();
            pe.push({
              id: `comment-${ge.id}`,
              targetY: de.top - H.top + ae,
              height: ue.current.get(`comment-${ge.id}`)?.offsetHeight || 80,
            });
          }
        }
        (t.forEach((ge, Se) => {
          let de = `tc-${ge.revisionId}-${Se}`,
            Ge = D.querySelector(`[data-revision-id="${ge.revisionId}"]`);
          if (Ge) {
            let Ke = Ge.getBoundingClientRect();
            pe.push({
              id: de,
              targetY: Ke.top - H.top + ae,
              height: ue.current.get(de)?.offsetHeight || 80,
            });
          }
        }),
          f &&
            m != null &&
            pe.push({
              id: 'new-comment-input',
              targetY: m,
              height: ue.current.get('new-comment-input')?.offsetHeight || 120,
            }),
          pe.sort((ge, Se) => ge.targetY - Se.targetY));
        let fe = new Map(),
          Ie = 0;
        for (let ge of pe) {
          let Se = Math.max(ge.targetY, Ie + Ip);
          (fe.set(ge.id, Se), (Ie = Se + ge.height));
        }
        K(fe);
      }, [Ee, t, g, f, m]);
    (useEffect(() => {
      let E = g?.current;
      if (!E) return;
      let D = E.querySelector('.paged-editor__pages');
      if (!D) return;
      let H = (ae) => {
        let pe = ae.target;
        if (!he.current?.contains(pe)) {
          if (D.contains(pe)) {
            let fe = pe.closest('[data-comment-id]');
            if (fe?.dataset.commentId) {
              ($(`comment-${fe.dataset.commentId}`), n?.(Number(fe.dataset.commentId)));
              return;
            }
            let Ie = pe.closest('.docx-insertion') || pe.closest('.docx-deletion');
            if (Ie?.dataset.revisionId) {
              let ge = Number(Ie.dataset.revisionId),
                Se = t.findIndex((de) => de.revisionId === ge);
              if (Se >= 0) {
                $(`tc-${t[Se].revisionId}-${Se}`);
                return;
              }
            }
          }
          ($(null), W(null));
        }
      };
      return (E.addEventListener('click', H), () => E.removeEventListener('click', H));
    }, [g, t, n]),
      useEffect(() => {
        let E = g?.current;
        if (!E) return;
        let D = setTimeout(R, 50),
          H = setTimeout(() => {
            (R(), B(true));
          }, 400),
          ae = new ResizeObserver(() => {
            requestAnimationFrame(R);
          });
        return (
          ae.observe(E),
          () => {
            (clearTimeout(D), clearTimeout(H), ae.disconnect());
          }
        );
      }, [R, g]),
      useEffect(() => {
        let E = requestAnimationFrame(R);
        return () => cancelAnimationFrame(E);
      }, [U, f, R]),
      useEffect(() => {
        let E = [];
        if (U) {
          let pe = ue.current.get(U);
          pe && E.push(pe);
        }
        let D = ue.current.get('new-comment-input');
        if ((D && E.push(D), E.length === 0)) return;
        let H,
          ae = new ResizeObserver(() => {
            (cancelAnimationFrame(H), (H = requestAnimationFrame(R)));
          });
        for (let pe of E) ae.observe(pe);
        return () => {
          (cancelAnimationFrame(H), ae.disconnect());
        };
      }, [U, R]));
    let F = () => {
        P.trim() && (a?.(P.trim()), z(''));
      },
      k = (E, D) => {
        ($(U === E ? null : E), W(null), D !== void 0 && n?.(D));
      },
      C = _.size > 0,
      I = (E, D = 32) => ({
        width: D,
        height: D,
        borderRadius: '50%',
        backgroundColor: Mp(E),
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: D === 32 ? 13 : 11,
        fontWeight: 500,
        flexShrink: 0,
      }),
      A = (E) => ({
        padding: '6px 16px',
        fontSize: 14,
        border: 'none',
        borderRadius: 20,
        background: E ? '#1a73e8' : '#f1f3f4',
        color: E ? '#fff' : '#80868b',
        cursor: E ? 'pointer' : 'default',
        fontWeight: 500,
        fontFamily: 'inherit',
      }),
      V = (E, D, H) => {
        let ae = J.current.has(E);
        return (
          H !== void 0 && J.current.add(E),
          {
            ...(C
              ? H !== void 0
                ? { position: 'absolute', top: H, left: 0, right: 0, opacity: 1 }
                : {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    opacity: 0,
                    visibility: 'hidden',
                  }
              : { marginBottom: 6 }),
            padding: D ? '10px 12px' : '8px 10px',
            borderRadius: 8,
            backgroundColor: D ? '#fff' : '#f8fbff',
            cursor: 'pointer',
            boxShadow: D
              ? '0 1px 3px rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)'
              : '0 1px 3px rgba(60,64,67,0.2), 0 2px 6px rgba(60,64,67,0.08)',
            transition:
              C && H === void 0
                ? 'none'
                : !ae && H !== void 0
                  ? 'opacity 0.2s ease, box-shadow 0.2s ease'
                  : T
                    ? 'opacity 0.2s ease, box-shadow 0.2s ease, top 0.15s ease'
                    : 'none',
          }
        );
      },
      q = (E, D) =>
        E.length === 0
          ? null
          : jsxs('div', {
              style: { marginTop: 8 },
              children: [
                (D ? E : E.slice(-1)).map((H) =>
                  jsxs(
                    'div',
                    {
                      style: {
                        marginBottom: D ? 8 : 0,
                        paddingTop: 8,
                        borderTop: '1px solid #e8eaed',
                      },
                      children: [
                        jsxs('div', {
                          style: { display: 'flex', alignItems: 'flex-start', gap: 10 },
                          children: [
                            jsx('div', {
                              style: I(H.author || 'U', 28),
                              children: Ia(H.author || 'U'),
                            }),
                            jsxs('div', {
                              style: { flex: 1, minWidth: 0 },
                              children: [
                                jsx('div', {
                                  style: { fontSize: 13, fontWeight: 600, color: '#202124' },
                                  children: H.author || 'Unknown',
                                }),
                                jsx('div', {
                                  style: { fontSize: 11, color: '#5f6368' },
                                  children: Ea(H.date),
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
                            ...(D
                              ? {}
                              : {
                                  overflow: 'hidden',
                                  display: '-webkit-box',
                                  WebkitLineClamp: 2,
                                  WebkitBoxOrient: 'vertical',
                                }),
                          },
                          children: Cl(H.content),
                        }),
                      ],
                    },
                    H.id
                  )
                ),
                !D &&
                  E.length > 1 &&
                  jsxs('div', {
                    style: { fontSize: 12, color: '#5f6368', marginTop: 4 },
                    children: [E.length - 1, ' more ', E.length - 1 === 1 ? 'reply' : 'replies'],
                  }),
              ],
            }),
      O = (E, D) =>
        jsx('div', {
          onClick: (H) => H.stopPropagation(),
          style: { marginTop: 12 },
          children:
            x === E
              ? jsxs('div', {
                  children: [
                    jsx('input', {
                      ref: (H) => H?.focus({ preventScroll: true }),
                      type: 'text',
                      value: S,
                      onChange: (H) => M(H.target.value),
                      onMouseDown: (H) => H.stopPropagation(),
                      onKeyDown: (H) => {
                        (H.stopPropagation(),
                          H.key === 'Enter' &&
                            (H.preventDefault(), S.trim() && D && D(E, S.trim()), M(''), w(null)),
                          H.key === 'Escape' && (w(null), M('')));
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
                          onClick: (H) => {
                            (H.stopPropagation(), w(null), M(''));
                          },
                          style: vl,
                          children: 'Cancel',
                        }),
                        jsx('button', {
                          onClick: (H) => {
                            (H.stopPropagation(), S.trim() && D && D(E, S.trim()), M(''), w(null));
                          },
                          disabled: !S.trim(),
                          style: A(!!S.trim()),
                          children: 'Reply',
                        }),
                      ],
                    }),
                  ],
                })
              : jsx('input', {
                  readOnly: true,
                  onMouseDown: (H) => H.stopPropagation(),
                  onClick: (H) => {
                    (H.stopPropagation(), w(E));
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
      j = (E) => {
        let D = Re(E.id),
          H = `comment-${E.id}`,
          ae = U === H,
          pe = _.get(H);
        return jsxs(
          'div',
          {
            ref: (fe) => {
              fe ? ue.current.set(H, fe) : ue.current.delete(H);
            },
            'data-comment-id': E.id,
            className: 'docx-comment-card',
            onClick: () => k(H, E.id),
            onMouseDown: (fe) => fe.stopPropagation(),
            style: { ...V(H, ae, pe), opacity: C && pe === void 0 ? 0 : E.done ? 0.6 : 1 },
            children: [
              jsxs('div', {
                style: { display: 'flex', alignItems: 'flex-start', gap: 10 },
                children: [
                  jsx('div', { style: I(E.author || 'U'), children: Ia(E.author || 'U') }),
                  jsxs('div', {
                    style: { flex: 1, minWidth: 0 },
                    children: [
                      jsx('div', {
                        style: { fontSize: 13, fontWeight: 600, color: '#202124' },
                        children: E.author || 'Unknown',
                      }),
                      jsx('div', {
                        style: { fontSize: 11, color: '#5f6368' },
                        children: Ea(E.date),
                      }),
                    ],
                  }),
                  ae &&
                    jsxs('div', {
                      style: { display: 'flex', gap: 4, marginTop: 2, position: 'relative' },
                      children: [
                        jsx('button', {
                          onClick: (fe) => {
                            (fe.stopPropagation(), r?.(E.id));
                          },
                          title: 'Resolve',
                          style: kr,
                          children: jsx(d, { name: 'check', size: 20 }),
                        }),
                        jsx('button', {
                          onClick: (fe) => {
                            (fe.stopPropagation(), W(L === H ? null : H));
                          },
                          title: 'More options',
                          style: kr,
                          children: jsx(d, { name: 'more_vert', size: 20 }),
                        }),
                        L === H &&
                          jsx('div', {
                            onClick: (fe) => fe.stopPropagation(),
                            onMouseDown: (fe) => fe.stopPropagation(),
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
                                (W(null), i?.(E.id));
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
                              onMouseOver: (fe) => {
                                fe.target.style.backgroundColor = '#f1f3f4';
                              },
                              onMouseOut: (fe) => {
                                fe.target.style.backgroundColor = 'transparent';
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
                children: Cl(E.content),
              }),
              q(D, ae),
              ae && !E.done && O(E.id, o),
            ],
          },
          E.id
        );
      },
      G = (E) => we.get(E) ?? [],
      be = (E, D) => {
        let H = E.author || 'Unknown',
          ae = `tc-${E.revisionId}-${D}`,
          pe = U === ae,
          fe = _.get(ae),
          Ie = G(E.revisionId);
        return jsxs(
          'div',
          {
            ref: (ge) => {
              ge ? ue.current.set(ae, ge) : ue.current.delete(ae);
            },
            className: 'docx-tracked-change-card',
            onClick: () => k(ae),
            onMouseDown: (ge) => ge.stopPropagation(),
            style: V(ae, pe, fe),
            children: [
              jsxs('div', {
                style: { display: 'flex', alignItems: 'flex-start', gap: 10 },
                children: [
                  jsx('div', { style: I(H), children: Ia(H) }),
                  jsxs('div', {
                    style: { flex: 1, minWidth: 0 },
                    children: [
                      jsx('div', {
                        style: { fontSize: 13, fontWeight: 600, color: '#202124' },
                        children: H,
                      }),
                      E.date &&
                        jsx('div', {
                          style: { fontSize: 11, color: '#5f6368' },
                          children: Ea(E.date),
                        }),
                    ],
                  }),
                  pe &&
                    jsxs('div', {
                      style: { display: 'flex', gap: 4, marginTop: 2 },
                      children: [
                        jsx('button', {
                          onClick: (ge) => {
                            (ge.stopPropagation(), l?.(E.from, E.to));
                          },
                          title: 'Accept',
                          style: kr,
                          children: jsx(d, { name: 'check', size: 20 }),
                        }),
                        jsx('button', {
                          onClick: (ge) => {
                            (ge.stopPropagation(), u?.(E.from, E.to));
                          },
                          title: 'Reject',
                          style: kr,
                          children: jsx(d, { name: 'close', size: 20 }),
                        }),
                      ],
                    }),
                ],
              }),
              jsxs('div', {
                style: { fontSize: 13, lineHeight: '20px', color: '#202124', marginTop: 6 },
                children: [
                  E.type === 'insertion' ? 'Added' : 'Deleted',
                  ' ',
                  jsxs('span', {
                    style: {
                      color: E.type === 'insertion' ? '#137333' : '#c5221f',
                      fontWeight: 500,
                    },
                    children: ['"', E.text.length > 50 ? E.text.slice(0, 50) + '...' : E.text, '"'],
                  }),
                ],
              }),
              q(Ie, pe),
              pe && O(E.revisionId, d$1),
            ],
          },
          ae
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
        width: Ep,
        fontFamily: "'Google Sans', Roboto, Arial, sans-serif",
        zIndex: 40,
        backgroundColor: 'transparent',
        overflowY: C ? 'visible' : 'auto',
        overflowX: 'visible',
        opacity: C ? 1 : 0,
        transition: 'opacity 0.15s ease',
      },
      onMouseDown: (E) => E.stopPropagation(),
      children: jsxs('div', {
        style: { position: 'relative' },
        children: [
          f &&
            jsxs('div', {
              ref: (E) => {
                E ? ue.current.set('new-comment-input', E) : ue.current.delete('new-comment-input');
              },
              style: {
                ...(C
                  ? _.get('new-comment-input') !== void 0
                    ? { position: 'absolute', top: _.get('new-comment-input'), left: 0, right: 0 }
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
                  ref: (E) => E?.focus({ preventScroll: true }),
                  value: P,
                  onChange: (E) => z(E.target.value),
                  onMouseDown: (E) => E.stopPropagation(),
                  onKeyDown: (E) => {
                    (E.stopPropagation(),
                      E.key === 'Enter' && !E.shiftKey && (E.preventDefault(), F()),
                      E.key === 'Escape' && (s?.(), z('')));
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
                        (s?.(), z(''));
                      },
                      style: vl,
                      children: 'Cancel',
                    }),
                    jsx('button', {
                      onClick: F,
                      disabled: !P.trim(),
                      style: A(!!P.trim()),
                      children: 'Comment',
                    }),
                  ],
                }),
              ],
            }),
          Ee.map((E) => j(E)),
          t.map((E, D) => be(E, D)),
          Ee.length === 0 &&
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
var Bp = 15840,
  Ml = 1440,
  Ap = 1440,
  Dp = 567,
  Il = 20,
  Hp = 'var(--doc-text-muted)',
  Np = 'var(--doc-text-subtle)',
  zp = 'var(--doc-primary)',
  Op = 'var(--doc-primary)',
  $p = 'var(--doc-primary-hover)';
function Fl({
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
    f = e?.pageHeight ?? Bp,
    m = e?.marginTop ?? Ml,
    b = e?.marginBottom ?? Ml,
    g = r(f) * t,
    x = r(m) * t,
    w = r(b) * t,
    S = useCallback(
      ($, L) => {
        n && ($.preventDefault(), u(L));
      },
      [n]
    ),
    M = useCallback(
      ($) => {
        if (!l || !p.current) return;
        let L = p.current.getBoundingClientRect(),
          W = $.clientY - L.top,
          _ = s(W / t);
        if (l === 'topMargin') {
          let K = f - b - 720,
            T = Math.max(0, Math.min(_, K));
          o?.(Math.round(T));
        } else if (l === 'bottomMargin') {
          let K = f - _,
            T = f - m - 720,
            B = Math.max(0, Math.min(K, T));
          r$1?.(Math.round(B));
        }
      },
      [l, t, f, m, b, o, r$1]
    ),
    P = useCallback(() => {
      u(null);
    }, []);
  useEffect(() => {
    if (l)
      return (
        document.addEventListener('mousemove', M),
        document.addEventListener('mouseup', P),
        () => {
          (document.removeEventListener('mousemove', M),
            document.removeEventListener('mouseup', P));
        }
      );
  }, [l, M, P]);
  let z = _p(f, t, i),
    U = {
      position: 'relative',
      width: Il,
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
    style: U,
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
        children: z.map(($, L) => jsx(Wp, { tick: $ }, L)),
      }),
      jsx(El, {
        type: 'topMargin',
        position: x,
        editable: n,
        isDragging: l === 'topMargin',
        isHovered: d === 'topMargin',
        onMouseEnter: () => c('topMargin'),
        onMouseLeave: () => c(null),
        onMouseDown: ($) => S($, 'topMargin'),
      }),
      jsx(El, {
        type: 'bottomMargin',
        position: g - w,
        editable: n,
        isDragging: l === 'bottomMargin',
        isHovered: d === 'bottomMargin',
        onMouseEnter: () => c('bottomMargin'),
        onMouseLeave: () => c(null),
        onMouseDown: ($) => S($, 'bottomMargin'),
      }),
    ],
  });
}
function Wp({ tick: e }) {
  let t = {
      position: 'absolute',
      top: B$1(e.position),
      right: 0,
      height: 1,
      width: e.width,
      backgroundColor: Np,
    },
    n = {
      position: 'absolute',
      top: B$1(e.position),
      left: 2,
      transform: 'translateY(-50%)',
      fontSize: '9px',
      color: Hp,
      fontFamily: 'sans-serif',
      whiteSpace: 'nowrap',
    };
  return jsxs(Fragment$1, {
    children: [jsx('div', { style: t }), e.label && jsx('div', { style: n, children: e.label })],
  });
}
function El({
  type: e,
  position: t,
  editable: n,
  isDragging: o,
  isHovered: r,
  onMouseEnter: i,
  onMouseLeave: a,
  onMouseDown: s,
}) {
  let l = o ? $p : r ? Op : zp,
    u = {
      position: 'absolute',
      top: B$1(t - 5),
      right: 0,
      width: Il,
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
function _p(e, t, n) {
  let o = [];
  if (n === 'inch') {
    let r$1 = Ap / 8,
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
    let r$1 = Dp / 10,
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
var kn = { High: 50, Default: 100, Low: 150 };
function Ft(e) {
  return (t) => {
    let n = { ...e.defaultOptions, ...t };
    return {
      type: 'extension',
      config: { name: e.name, priority: e.priority ?? kn.Default, options: n },
      onSchemaReady(o) {
        return e.onSchemaReady(o, n);
      },
    };
  };
}
function Ve(e) {
  return (t) => {
    let n = { ...e.defaultOptions, ...t },
      o = typeof e.nodeSpec == 'function' ? e.nodeSpec(n) : e.nodeSpec;
    return {
      type: 'node',
      config: {
        name: e.name,
        priority: e.priority ?? kn.Default,
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
function Le(e) {
  return (t) => {
    let n = { ...e.defaultOptions, ...t },
      o = typeof e.markSpec == 'function' ? e.markSpec(n) : e.markSpec;
    return {
      type: 'mark',
      config: {
        name: e.name,
        priority: e.priority ?? kn.Default,
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
var Bl = Ve({
  name: 'doc',
  schemaNodeName: 'doc',
  nodeSpec: { content: '(paragraph | horizontalRule | pageBreak | table)+' },
});
var Al = Ve({ name: 'text', schemaNodeName: 'text', nodeSpec: { group: 'inline' } });
function Dl(e, t) {
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
    let a = Nl(e.shading, t);
    a && !n$1.backgroundColor && (n$1.backgroundColor = a);
  }
  let o = [],
    r$1 = [],
    i = [];
  if (e.underline && e.underline.style !== 'none') {
    o.push('underline');
    let a$1 = jp(e.underline.style);
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
function Hl(e, t) {
  if (!e) return {};
  let n = {};
  if (
    (e.alignment && (n.textAlign = Up(e.alignment)),
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
    let o = Nl(e.shading, t);
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
    a$1 = Gp(e.style),
    s = `border${t}Width`,
    l = `border${t}Style`,
    u = `border${t}Color`;
  return ((o[s] = B$1(Math.max(1, r))), (o[l] = a$1), (o[u] = i), o);
}
function Nl(e, t) {
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
function jp(e) {
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
function Up(e) {
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
function Gp(e) {
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
function qp(e) {
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
    o = Hl(n);
  return Object.entries(o)
    .map(([r, i]) => `${r.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${i}`)
    .join('; ');
}
function Yp(e) {
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
function Xp(e, t, n) {
  if (!e?.numId) return '';
  let o = e.ilvl ?? 0;
  return t
    ? `docx-list-bullet docx-list-level-${o}`
    : `docx-list-numbered ${Yp(n)} docx-list-level-${o}`;
}
var Zp = {
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
      n = qp(t),
      o = Xp(t.numPr, t.listIsBullet, t.listNumFmt),
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
function Gt(e, t) {
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
function zl(e) {
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
function Lo(e) {
  return (t, n) => Gt('alignment', e)(t, n);
}
function wr(e, t = 'auto') {
  return (n, o) => zl({ lineSpacing: e, lineSpacingRule: t })(n, o);
}
function Jp(e = 720) {
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
function Qp(e = 720) {
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
function ef(e) {
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
var Ol = Ve({
  name: 'paragraph',
  schemaNodeName: 'paragraph',
  nodeSpec: Zp,
  onSchemaReady(e) {
    let t = ef(e.schema);
    return {
      commands: {
        setAlignment: (n) => Lo(n),
        alignLeft: () => Lo('left'),
        alignCenter: () => Lo('center'),
        alignRight: () => Lo('right'),
        alignJustify: () => Lo('both'),
        setLineSpacing: (n, o) => wr(n, o),
        singleSpacing: () => wr(240),
        oneAndHalfSpacing: () => wr(360),
        doubleSpacing: () => wr(480),
        setSpaceBefore: (n) => Gt('spaceBefore', n),
        setSpaceAfter: (n) => Gt('spaceAfter', n),
        increaseIndent: (n) => Jp(n),
        decreaseIndent: (n) => Qp(n),
        setIndentLeft: (n) => Gt('indentLeft', n > 0 ? n : null),
        setIndentRight: (n) => Gt('indentRight', n > 0 ? n : null),
        setIndentFirstLine: (n, o) =>
          zl({ indentFirstLine: n > 0 ? n : null, hangingIndent: o ?? false }),
        applyStyle: (n, o) => t(n, o),
        clearStyle: () => Gt('styleId', null),
        insertSectionBreak: (n) => Gt('sectionBreakType', n),
        removeSectionBreak: () => Gt('sectionBreakType', null),
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
              let x = [
                ...(m.attrs.bookmarks || []).filter((w) => !w.name.startsWith('_Toc')),
                { id: Math.floor(Math.random() * 2147483647), name: c },
              ];
              a.setNodeMarkup(p, void 0, { ...m.attrs, bookmarks: x });
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
        setTabs: (n) => Gt('tabs', n.length > 0 ? n : null),
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
            return Gt('tabs', c)(i, a);
          },
        removeTabStop: (n) => (o, r) => {
          let { $from: i } = o.selection,
            a = i.parent;
          if (a.type.name !== 'paragraph') return false;
          let l = (a.attrs.tabs || []).filter((u) => u.position !== n);
          return Gt('tabs', l.length > 0 ? l : null)(o, r);
        },
      },
    };
  },
});
var Wl = Ft({
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
var Vl = Le({
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
var Ul = Le({
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
function nf(e) {
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
function Gl(e, t) {
  let { $from: n } = e.selection,
    o = n.parent;
  if (o.type.name !== 'paragraph' || o.textContent.length > 0) return t;
  let r = t.storedMarks || e.storedMarks || [];
  if (r.length === 0)
    return t.setNodeMarkup(n.before(), void 0, { ...o.attrs, defaultTextFormatting: null });
  let i = nf(r);
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
        ((u = Gl(n, u)), o(u));
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
        ((s = Gl(t, s)), n(s));
      }
      return true;
    }
    return (n && n(t.tr.removeMark(o, r, e).scrollIntoView()), true);
  };
}
function Ba(e, t) {
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
var Bo = (e, t) => {
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
var ql = Le({
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
var Yl = Le({
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
var Xl = Le({
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
        n = Dl({ color: t });
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
var Zl = Le({
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
var Jl = Le({
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
var Ql = Le({
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
var ec = Le({
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
var tc = Le({
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
var nc = Le({
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
            d.parent.forEach((g, x) => {
              if (g.isText) {
                let w = d.start() + x,
                  S = w + g.nodeSize;
                w <= d.pos &&
                  d.pos <= S &&
                  g.marks.some((P) => P.type === t) &&
                  ((f = Math.min(f, w)), (m = Math.max(m, S)));
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
var oc = Le({
  name: 'allCaps',
  schemaMarkName: 'allCaps',
  markSpec: {
    parseDOM: [{ style: 'text-transform', getAttrs: (e) => (e === 'uppercase' ? {} : false) }],
    toDOM() {
      return ['span', { style: 'text-transform: uppercase' }, 0];
    },
  },
});
var rc = Le({
  name: 'smallCaps',
  schemaMarkName: 'smallCaps',
  markSpec: {
    parseDOM: [{ style: 'font-variant', getAttrs: (e) => (e === 'small-caps' ? {} : false) }],
    toDOM() {
      return ['span', { style: 'font-variant: small-caps' }, 0];
    },
  },
});
var ic = Le({
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
function sf(e) {
  return (e / 2) * (96 / 72);
}
var ac = Le({
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
        let r = sf(t.position);
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
var sc = Le({
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
var lc = Le({
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
  cc = Le({
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
var dc = Le({
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
  uc = Le({
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
  pc = Le({
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
  fc = Le({
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
  mc = Le({
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
var gc = Ve({
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
var hc = Ve({
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
var bc = Ve({
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
var yc = Ve({
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
function lf(e, t, n) {
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
function cf(e, t) {
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
var xc = Ve({
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
        ((s = `url(#${m})`), (a = cf(m, t)));
      } else s = t.fillType === 'none' ? 'none' : t.fillColor || '#ffffff';
      let l = t.outlineWidth || 1,
        u = t.outlineColor || '#000000',
        d =
          t.outlineStyle === 'dashed'
            ? ' stroke-dasharray="8 4"'
            : t.outlineStyle === 'dotted'
              ? ' stroke-dasharray="2 2"'
              : '',
        c = lf(t.shapeType || 'rect', n, o),
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
var Sc = Ve({
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
var kc = Ve({
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
var wc = Ve({
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
var Cc = Ve({
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
var Tc = Ve({
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
var yf = {
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
  xf = {
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
  Sf = {
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
function vc(e) {
  let t = [],
    n = e.borders;
  if (!n) return t;
  let o = (r) => {
    if (!r || !r.style || r.style === 'none' || r.style === 'nil') return 'none';
    let i = r.size ? Math.max(1, Math.round((r.size / 8) * 1.333)) : 1,
      a = Sf[r.style] || 'solid',
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
function Rc(e) {
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
function Pc(e) {
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
function Mc(e) {
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
var kf = {
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
        o.push(...Rc(t)),
        t.noWrap
          ? o.push('white-space: nowrap')
          : o.push('word-wrap: break-word', 'overflow-wrap: break-word', 'overflow: hidden'),
        o.push(...Mc(t)),
        o.push(...vc(t)),
        o.push(...Pc(t.textDirection)),
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
  wf = {
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
        o.push(...Rc(t)),
        t.noWrap
          ? o.push('white-space: nowrap')
          : o.push('word-wrap: break-word', 'overflow-wrap: break-word', 'overflow: hidden'),
        o.push(...Mc(t)),
        o.push(...vc(t)),
        o.push(...Pc(t.textDirection)),
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
function We(e) {
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
        let x = 0,
          w = false;
        g.forEach((S, M, P) => {
          w || (P === n.index(m - 1) ? ((s = x), (w = true)) : (x += S.attrs.colspan || 1));
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
        let x = b[g];
        if (x?.color && x.style && x.style !== 'none' && x.style !== 'nil') {
          p = x.color;
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
function Ao(e) {
  let { $from: t } = e.selection;
  for (let n = t.depth; n > 0; n--) {
    let o = t.node(n);
    if (o.type.name === 'tableCell' || o.type.name === 'tableHeader') return true;
  }
  return false;
}
function Ec(e) {
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
function Ic() {
  return (e, t) => {
    if (!Ao(e)) return false;
    let n = Ec(e);
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
function Fc() {
  return (e, t) => {
    if (!Ao(e)) return false;
    let n = Ec(e);
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
var Cf = Ve({ name: 'table', schemaNodeName: 'table', nodeSpec: yf }),
  Tf = Ve({ name: 'tableRow', schemaNodeName: 'tableRow', nodeSpec: xf }),
  vf = Ve({ name: 'tableCell', schemaNodeName: 'tableCell', nodeSpec: kf }),
  Rf = Ve({ name: 'tableHeader', schemaNodeName: 'tableHeader', nodeSpec: wf }),
  Pf = Ft({
    name: 'tablePlugin',
    onSchemaReady(e) {
      let { schema: t } = e;
      function n(...R) {
        return (F, k, C) => {
          for (let I of R) if (I(F, k, C)) return true;
          return false;
        };
      }
      function o(R, F = {}) {
        let k = R?.attrs ?? {};
        return {
          colspan: k.colspan || 1,
          rowspan: 1,
          colwidth: k.colwidth,
          width: k.width,
          widthType: k.widthType,
          verticalAlign: k.verticalAlign,
          backgroundColor: k.backgroundColor,
          borders: k.borders,
          margins: k.margins,
          textDirection: k.textDirection,
          noWrap: k.noWrap,
          ...F,
        };
      }
      function r(R, F, k = '000000', C = 9360) {
        let I = [],
          A = Math.floor(C / F),
          V = 360,
          q = 'atLeast',
          O = { style: 'single', size: 4, color: { rgb: k } },
          j = { top: O, bottom: O, left: O, right: O };
        for (let be = 0; be < R; be++) {
          let E = [];
          for (let D = 0; D < F; D++) {
            let H = t.nodes.paragraph.create(),
              ae = { colspan: 1, rowspan: 1, borders: j, width: A, widthType: 'dxa' };
            E.push(t.nodes.tableCell.create(ae, H));
          }
          I.push(t.nodes.tableRow.create({ height: V, heightRule: q }, E));
        }
        let G = Array(F).fill(A);
        return t.nodes.table.create({ columnWidths: G, width: C, widthType: 'dxa' }, I);
      }
      function i(R, F) {
        return (k, C) => {
          let { $from: I } = k.selection,
            A = '000000',
            V = k.storedMarks || I.marks();
          for (let O of V)
            if (O.type.name === 'textColor' && O.attrs.rgb) {
              A = O.attrs.rgb;
              break;
            }
          let q = I.pos;
          for (let O = I.depth; O > 0; O--) {
            let j = I.node(O);
            if (j.type.name === 'paragraph' || j.type.name === 'table') {
              q = I.after(O);
              break;
            }
          }
          if (C) {
            let O = 9360;
            for (let Ie = I.depth; Ie > 0; Ie--) {
              let ge = I.node(Ie);
              if (ge.type.name === 'tableCell' || ge.type.name === 'tableHeader') {
                let Se = ge.attrs.width;
                Se && Se > 0 && (O = Math.max(Se - 216, 360));
                break;
              }
            }
            let j = r(R, F, A, O),
              G = t.nodes.paragraph.create(),
              E = k.doc.resolve(q).nodeBefore?.type.name === 'table',
              D = E ? [G, j, G] : [j, G],
              H = k.tr.insert(q, D),
              ae = q + 1;
            E && (ae += G.nodeSize);
            let fe = ae + 1 + 1;
            (H.setSelection(TextSelection.create(H.doc, fe)), C(H.scrollIntoView()));
          }
          return true;
        };
      }
      function a(R, F) {
        let k = We(R);
        if (!k.isInTable || k.rowIndex === void 0 || !k.table || k.tablePos === void 0)
          return false;
        if (F) {
          let C = R.tr,
            I = k.table.child(k.rowIndex),
            A = [];
          I.forEach((O) => {
            let j = t.nodes.paragraph.create(),
              G = o(O);
            A.push(t.nodes.tableCell.create(G, j));
          });
          let V = t.nodes.tableRow.create(
              { height: I.attrs.height ?? 360, heightRule: I.attrs.heightRule ?? 'atLeast' },
              A
            ),
            q = k.tablePos + 1;
          for (let O = 0; O < k.rowIndex; O++) q += k.table.child(O).nodeSize;
          (C.insert(q, V), F(C.scrollIntoView()));
        }
        return true;
      }
      function s(R, F) {
        let k = We(R);
        if (!k.isInTable || k.rowIndex === void 0 || !k.table || k.tablePos === void 0)
          return false;
        if (F) {
          let C = R.tr,
            I = k.table.child(k.rowIndex),
            A = [];
          I.forEach((O) => {
            let j = t.nodes.paragraph.create(),
              G = o(O);
            A.push(t.nodes.tableCell.create(G, j));
          });
          let V = t.nodes.tableRow.create(
              { height: I.attrs.height ?? 360, heightRule: I.attrs.heightRule ?? 'atLeast' },
              A
            ),
            q = k.tablePos + 1;
          for (let O = 0; O <= k.rowIndex; O++) q += k.table.child(O).nodeSize;
          (C.insert(q, V), F(C.scrollIntoView()));
        }
        return true;
      }
      function l(R, F) {
        let k = We(R);
        if (
          !k.isInTable ||
          k.rowIndex === void 0 ||
          !k.table ||
          k.tablePos === void 0 ||
          (k.rowCount || 0) <= 1
        )
          return false;
        if (F) {
          let C = R.tr,
            I = k.tablePos + 1;
          for (let V = 0; V < k.rowIndex; V++) I += k.table.child(V).nodeSize;
          let A = I + k.table.child(k.rowIndex).nodeSize;
          (C.delete(I, A), F(C.scrollIntoView()));
        }
        return true;
      }
      function u(R, F) {
        let k = We(R);
        if (!k.isInTable || k.columnIndex === void 0 || !k.table || k.tablePos === void 0)
          return false;
        if (F) {
          let C = R.tr,
            I = (k.columnCount || 1) + 1,
            A = Math.floor(100 / I),
            V = k.tablePos + 1,
            q = 0;
          k.table.forEach((j) => {
            if (j.type.name === 'tableRow') {
              let G = V + 1,
                be = 0;
              if (
                (j.forEach((E) => {
                  if (be === k.columnIndex) {
                    let D = t.nodes.paragraph.create(),
                      H = o(E, { colspan: 1, rowspan: 1 });
                    q === 0 && ((H.width = A), (H.widthType = 'pct'));
                    let ae = t.nodes.tableCell.create(H, D);
                    C = C.insert(G, ae);
                  }
                  ((G += E.nodeSize), (be += E.attrs.colspan || 1));
                }),
                be <= k.columnIndex)
              ) {
                let E = t.nodes.paragraph.create(),
                  D = o(j.child(j.childCount - 1) ?? null, { colspan: 1, rowspan: 1 });
                q === 0 && ((D.width = A), (D.widthType = 'pct'));
                let H = t.nodes.tableCell.create(D, E);
                C = C.insert(G, H);
              }
              q++;
            }
            V += j.nodeSize;
          });
          let O = C.doc.nodeAt(k.tablePos);
          if (O && O.type.name === 'table') {
            let j = O.child(0);
            if (j && j.type.name === 'tableRow') {
              let D = k.tablePos + 2;
              j.forEach((H) => {
                ((H.type.name === 'tableCell' || H.type.name === 'tableHeader') &&
                  (C = C.setNodeMarkup(D, void 0, { ...H.attrs, width: A, widthType: 'pct' })),
                  (D += H.nodeSize));
              });
            }
            let G = j?.childCount ?? I,
              be = O.attrs.width || 9360,
              E = Math.floor(be / Math.max(1, G));
            C = C.setNodeMarkup(k.tablePos, void 0, { ...O.attrs, columnWidths: Array(G).fill(E) });
          }
          F(C.scrollIntoView());
        }
        return true;
      }
      function d(R, F) {
        let k = We(R);
        if (!k.isInTable || k.columnIndex === void 0 || !k.table || k.tablePos === void 0)
          return false;
        if (F) {
          let C = R.tr,
            I = (k.columnCount || 1) + 1,
            A = Math.floor(100 / I),
            V = k.tablePos + 1,
            q = 0;
          k.table.forEach((j) => {
            if (j.type.name === 'tableRow') {
              let G = V + 1,
                be = 0,
                E = false;
              if (
                (j.forEach((D) => {
                  if (((G += D.nodeSize), (be += D.attrs.colspan || 1), !E && be > k.columnIndex)) {
                    let H = t.nodes.paragraph.create(),
                      ae = o(D, { colspan: 1, rowspan: 1 });
                    q === 0 && ((ae.width = A), (ae.widthType = 'pct'));
                    let pe = t.nodes.tableCell.create(ae, H);
                    ((C = C.insert(G, pe)), (E = true));
                  }
                }),
                !E)
              ) {
                let D = t.nodes.paragraph.create(),
                  H = o(j.child(j.childCount - 1) ?? null, { colspan: 1, rowspan: 1 });
                q === 0 && ((H.width = A), (H.widthType = 'pct'));
                let ae = t.nodes.tableCell.create(H, D);
                C = C.insert(G, ae);
              }
              q++;
            }
            V += j.nodeSize;
          });
          let O = C.doc.nodeAt(k.tablePos);
          if (O && O.type.name === 'table') {
            let j = O.child(0);
            if (j && j.type.name === 'tableRow') {
              let D = k.tablePos + 2;
              j.forEach((H) => {
                ((H.type.name === 'tableCell' || H.type.name === 'tableHeader') &&
                  (C = C.setNodeMarkup(D, void 0, { ...H.attrs, width: A, widthType: 'pct' })),
                  (D += H.nodeSize));
              });
            }
            let G = j?.childCount ?? I,
              be = O.attrs.width || 9360,
              E = Math.floor(be / Math.max(1, G));
            C = C.setNodeMarkup(k.tablePos, void 0, { ...O.attrs, columnWidths: Array(G).fill(E) });
          }
          F(C.scrollIntoView());
        }
        return true;
      }
      function c(R, F) {
        let k = We(R);
        if (
          !k.isInTable ||
          k.columnIndex === void 0 ||
          !k.table ||
          k.tablePos === void 0 ||
          (k.columnCount || 0) <= 1
        )
          return false;
        if (F) {
          let C = R.tr,
            I = (k.columnCount || 2) - 1,
            A = Math.floor(100 / I),
            V = [],
            q = k.tablePos + 1;
          (k.table.forEach((j) => {
            if (j.type.name === 'tableRow') {
              let G = q + 1,
                be = 0;
              j.forEach((E) => {
                let D = G,
                  H = G + E.nodeSize,
                  ae = E.attrs.colspan || 1;
                (be <= k.columnIndex && k.columnIndex < be + ae && V.push({ start: D, end: H }),
                  (G = H),
                  (be += ae));
              });
            }
            q += j.nodeSize;
          }),
            V.reverse().forEach(({ start: j, end: G }) => {
              C = C.delete(j, G);
            }));
          let O = C.doc.nodeAt(k.tablePos);
          if (O && O.type.name === 'table') {
            let j = O.child(0);
            if (j && j.type.name === 'tableRow') {
              let D = k.tablePos + 2;
              j.forEach((H) => {
                ((H.type.name === 'tableCell' || H.type.name === 'tableHeader') &&
                  (C = C.setNodeMarkup(D, void 0, { ...H.attrs, width: A, widthType: 'pct' })),
                  (D += H.nodeSize));
              });
            }
            let G = j?.childCount ?? I,
              be = O.attrs.width || 9360,
              E = Math.floor(be / Math.max(1, G));
            C = C.setNodeMarkup(k.tablePos, void 0, { ...O.attrs, columnWidths: Array(G).fill(E) });
          }
          F(C.scrollIntoView());
        }
        return true;
      }
      function p(R, F) {
        let k = We(R);
        if (!k.isInTable || k.tablePos === void 0 || !k.table) return false;
        if (F) {
          let C = R.tr;
          (C.delete(k.tablePos, k.tablePos + k.table.nodeSize), F(C.scrollIntoView()));
        }
        return true;
      }
      function f(R, F) {
        let k = We(R);
        if (!k.isInTable || k.tablePos === void 0 || !k.table) return false;
        if (F) {
          let C = k.tablePos + 1,
            I = R.doc.resolve(C),
            A = R.doc.resolve(k.tablePos + k.table.nodeSize - 2),
            V = CellSelection.create(R.doc, I.pos, A.pos);
          F(R.tr.setSelection(V));
        }
        return true;
      }
      function m(R, F) {
        let k = We(R);
        if (!k.isInTable || k.tablePos === void 0 || !k.table || k.rowIndex === void 0)
          return false;
        if (F) {
          let I = k.tablePos + 1;
          for (let j = 0; j < k.rowIndex; j++) {
            let G = k.table.child(j);
            I += G.nodeSize;
          }
          let A = k.table.child(k.rowIndex),
            V = I + 1,
            q = I + A.nodeSize - 2,
            O = CellSelection.create(R.doc, V, q);
          F(R.tr.setSelection(O));
        }
        return true;
      }
      function b(R, F) {
        let k = We(R);
        if (!k.isInTable || k.tablePos === void 0 || !k.table || k.columnIndex === void 0)
          return false;
        if (F) {
          let C = k.tablePos + 1,
            I = k.table.child(0),
            A = k.table.child(k.table.childCount - 1),
            V = C + 1;
          for (let G = 0; G < k.columnIndex && G < I.childCount; G++) V += I.child(G).nodeSize;
          let q = C;
          for (let G = 0; G < k.table.childCount - 1; G++) q += k.table.child(G).nodeSize;
          let O = q + 1;
          for (let G = 0; G < k.columnIndex && G < A.childCount; G++) O += A.child(G).nodeSize;
          let j = CellSelection.create(R.doc, V, O);
          F(R.tr.setSelection(j));
        }
        return true;
      }
      function g(R) {
        let F = R.selection,
          k = [];
        if (F instanceof CellSelection)
          return (
            F.forEachCell((I, A) => {
              k.push({ pos: A, node: I });
            }),
            k
          );
        let { $from: C } = F;
        for (let I = C.depth; I > 0; I--) {
          let A = C.node(I);
          if (A.type.name === 'tableCell' || A.type.name === 'tableHeader') {
            k.push({ pos: C.before(I), node: A });
            break;
          }
        }
        return k;
      }
      function x(R, F) {
        let k = new Map(),
          C = new Map(),
          I = R.childCount,
          A = 0;
        return (
          R.forEach((V, q, O) => {
            if (V.type.name !== 'tableRow') return;
            let j = 0;
            (V.forEach((G, be) => {
              let E = F + q + be + 2,
                D = G.attrs.colspan || 1;
              (k.set(E, { rowIdx: O, colIdx: j, colspan: D, pos: E, node: G }),
                C.set(`${O},${j}`, E),
                (j += D));
            }),
              (A = Math.max(A, j)));
          }),
          { cellByPos: k, cellByRC: C, totalRows: I, totalCols: A }
        );
      }
      function w(R, F) {
        return (k, C) => {
          let I = We(k);
          if (!I.isInTable || I.tablePos === void 0 || !I.table) return false;
          if (C) {
            let A = k.tr,
              V = I.table,
              q = I.tablePos,
              O = F ?? { style: 'single', size: 4, color: { rgb: '000000' } },
              j = { style: 'none' },
              { cellByPos: G, cellByRC: be } = x(V, q),
              E = g(k),
              D = 1 / 0,
              H = -1,
              ae = 1 / 0,
              pe = -1;
            for (let { pos: Se } of E) {
              let de = G.get(Se);
              de &&
                ((D = Math.min(D, de.rowIdx)),
                (H = Math.max(H, de.rowIdx)),
                (ae = Math.min(ae, de.colIdx)),
                (pe = Math.max(pe, de.colIdx + de.colspan - 1)));
            }
            let fe = new Map(),
              Ie = (Se, de) => fe.get(Se) ?? { ...de.attrs },
              ge = (Se, de) => {
                fe.set(Se, de);
              };
            for (let { pos: Se } of E) {
              let de = G.get(Se);
              if (!de) continue;
              let Ge = de.rowIdx === D,
                Ke = de.rowIdx === H,
                qe = de.colIdx === ae,
                at = de.colIdx + de.colspan - 1 === pe,
                $e;
              switch (R) {
                case 'all':
                  $e = { top: O, bottom: O, left: O, right: O };
                  break;
                case 'outside':
                  $e = { top: Ge ? O : j, bottom: Ke ? O : j, left: qe ? O : j, right: at ? O : j };
                  break;
                case 'inside':
                  $e = { top: Ge ? j : O, bottom: Ke ? j : O, left: qe ? j : O, right: at ? j : O };
                  break;
                case 'none':
                  $e = { top: j, bottom: j, left: j, right: j };
                  break;
              }
              let Qe = Ie(Se, de.node),
                rt = Qe.borders || {};
              if ((ge(Se, { ...Qe, borders: { ...rt, ...$e } }), $e.top)) {
                let Ae = be.get(`${de.rowIdx - 1},${de.colIdx}`);
                if (Ae !== void 0) {
                  let mt = G.get(Ae),
                    He = Ie(Ae, mt.node),
                    wt = He.borders || {};
                  ge(Ae, { ...He, borders: { ...wt, bottom: $e.top } });
                }
              }
              if ($e.bottom) {
                let Ae = be.get(`${de.rowIdx + 1},${de.colIdx}`);
                if (Ae !== void 0) {
                  let mt = G.get(Ae),
                    He = Ie(Ae, mt.node),
                    wt = He.borders || {};
                  ge(Ae, { ...He, borders: { ...wt, top: $e.bottom } });
                }
              }
              if ($e.left) {
                let Ae = be.get(`${de.rowIdx},${de.colIdx - 1}`);
                if (Ae !== void 0) {
                  let mt = G.get(Ae),
                    He = Ie(Ae, mt.node),
                    wt = He.borders || {};
                  ge(Ae, { ...He, borders: { ...wt, right: $e.left } });
                }
              }
              if ($e.right) {
                let Ae = be.get(`${de.rowIdx},${de.colIdx + de.colspan}`);
                if (Ae !== void 0) {
                  let mt = G.get(Ae),
                    He = Ie(Ae, mt.node),
                    wt = He.borders || {};
                  ge(Ae, { ...He, borders: { ...wt, left: $e.right } });
                }
              }
            }
            for (let [Se, de] of fe) A.setNodeMarkup(A.mapping.map(Se), void 0, de);
            C(A.scrollIntoView());
          }
          return true;
        };
      }
      function S(R) {
        return (F, k) => {
          let C = We(F);
          if (!C.isInTable || C.tablePos === void 0 || !C.table) return false;
          if (k) {
            let I = F.tr,
              A = g(F),
              V = R ? R.replace(/^#/, '') : null;
            for (let { pos: q, node: O } of A)
              I.setNodeMarkup(I.mapping.map(q), void 0, { ...O.attrs, backgroundColor: V });
            k(I.scrollIntoView());
          }
          return true;
        };
      }
      function M(R, F, k) {
        return (C, I) => {
          let A = We(C);
          if (!A.isInTable || A.tablePos === void 0 || !A.table) return false;
          if (I) {
            let V = C.tr,
              q = g(C),
              O = F || { style: 'none' },
              j = { style: 'none' },
              G = ['top', 'bottom', 'left', 'right'],
              { cellByPos: be, cellByRC: E } = x(A.table, A.tablePos),
              D = new Map(),
              H = (fe, Ie) => D.get(fe) ?? { ...Ie.attrs },
              ae = (fe, Ie) => D.set(fe, Ie),
              pe = {
                top: { adjSide: 'bottom', dRow: -1, dCol: 0 },
                bottom: { adjSide: 'top', dRow: 1, dCol: 0 },
                left: { adjSide: 'right', dRow: 0, dCol: -1 },
                right: { adjSide: 'left', dRow: 0, dCol: 1 },
              };
            for (let { pos: fe, node: Ie } of q) {
              let ge = be.get(fe),
                Se = H(fe, Ie),
                de = Se.borders || {},
                Ge = R === 'all' ? G : [R],
                Ke = k ? { top: j, bottom: j, left: j, right: j } : { ...de };
              for (let qe of Ge) Ke[qe] = O;
              if (ge) {
                let qe = k ? G : Ge;
                for (let at of qe) {
                  let $e = Ke[at],
                    Qe = pe[at],
                    rt = at === 'right' ? ge.colIdx + ge.colspan : ge.colIdx + Qe.dCol,
                    Ae = E.get(`${ge.rowIdx + Qe.dRow},${rt}`);
                  if (Ae !== void 0) {
                    let mt = be.get(Ae),
                      He = H(Ae, mt.node),
                      wt = He.borders || {};
                    ae(Ae, { ...He, borders: { ...wt, [Qe.adjSide]: $e } });
                  }
                }
              }
              ae(fe, { ...Se, borders: Ke });
            }
            for (let [fe, Ie] of D) V.setNodeMarkup(V.mapping.map(fe), void 0, Ie);
            I(V.scrollIntoView());
          }
          return true;
        };
      }
      function P(R) {
        return (F, k) => {
          let C = We(F);
          if (!C.isInTable || C.tablePos === void 0 || !C.table) return false;
          if (k) {
            let I = F.tr,
              A = g(F);
            for (let { pos: V, node: q } of A)
              I.setNodeMarkup(I.mapping.map(V), void 0, { ...q.attrs, verticalAlign: R });
            k(I.scrollIntoView());
          }
          return true;
        };
      }
      function z(R) {
        return (F, k) => {
          let C = We(F);
          if (!C.isInTable || C.tablePos === void 0 || !C.table) return false;
          if (k) {
            let I = F.tr,
              A = g(F);
            for (let { pos: V, node: q } of A) {
              let j = { ...(q.attrs.margins || {}), ...R };
              I.setNodeMarkup(I.mapping.map(V), void 0, { ...q.attrs, margins: j });
            }
            k(I.scrollIntoView());
          }
          return true;
        };
      }
      function U(R) {
        return (F, k) => {
          let C = We(F);
          if (!C.isInTable || C.tablePos === void 0 || !C.table) return false;
          if (k) {
            let I = F.tr,
              A = g(F);
            for (let { pos: V, node: q } of A)
              I.setNodeMarkup(I.mapping.map(V), void 0, { ...q.attrs, textDirection: R });
            k(I.scrollIntoView());
          }
          return true;
        };
      }
      function $() {
        return (R, F) => {
          let k = We(R);
          if (!k.isInTable || k.tablePos === void 0 || !k.table) return false;
          if (F) {
            let C = R.tr,
              I = g(R);
            for (let { pos: A, node: V } of I)
              C.setNodeMarkup(C.mapping.map(A), void 0, { ...V.attrs, noWrap: !V.attrs.noWrap });
            F(C.scrollIntoView());
          }
          return true;
        };
      }
      function L(R, F) {
        return (k, C) => {
          let I = We(k);
          if (!I.isInTable || I.tablePos === void 0 || !I.table) return false;
          if (C) {
            let A = k.tr,
              { $from: V } = k.selection;
            for (let q = V.depth; q > 0; q--) {
              let O = V.node(q);
              if (O.type.name === 'tableRow') {
                let j = V.before(q),
                  G = { ...O.attrs, height: R, heightRule: R ? F || 'atLeast' : null };
                return (A.setNodeMarkup(j, void 0, G), C(A.scrollIntoView()), true);
              }
            }
          }
          return true;
        };
      }
      function W() {
        return (R, F) => {
          let k = We(R);
          if (!k.isInTable || k.tablePos === void 0 || !k.table || !k.columnCount) return false;
          if (F) {
            let C = R.tr,
              I = k.table,
              A = k.columnCount,
              V = I.attrs.columnWidths,
              q = V ? V.reduce((be, E) => be + E, 0) : 9360,
              O = Math.floor(q / A),
              j = k.tablePos + 1;
            I.forEach((be) => {
              if (be.type.name === 'tableRow') {
                let E = j + 1;
                be.forEach((D) => {
                  ((D.type.name === 'tableCell' || D.type.name === 'tableHeader') &&
                    (C = C.setNodeMarkup(E, void 0, {
                      ...D.attrs,
                      width: O,
                      widthType: 'dxa',
                      colwidth: null,
                    })),
                    (E += D.nodeSize));
                });
              }
              j += be.nodeSize;
            });
            let G = Array(A).fill(O);
            ((C = C.setNodeMarkup(k.tablePos, void 0, { ...I.attrs, columnWidths: G })),
              F(C.scrollIntoView()));
          }
          return true;
        };
      }
      function _() {
        return (R, F) => {
          let k = We(R);
          if (!k.isInTable || k.tablePos === void 0 || !k.table) return false;
          if (F) {
            let C = R.tr,
              I = k.table,
              A = k.tablePos + 1;
            (I.forEach((V) => {
              if (V.type.name === 'tableRow') {
                let q = A + 1;
                V.forEach((O) => {
                  ((O.type.name === 'tableCell' || O.type.name === 'tableHeader') &&
                    (C = C.setNodeMarkup(q, void 0, {
                      ...O.attrs,
                      width: null,
                      widthType: null,
                      colwidth: null,
                    })),
                    (q += O.nodeSize));
                });
              }
              A += V.nodeSize;
            }),
              (C = C.setNodeMarkup(k.tablePos, void 0, {
                ...I.attrs,
                columnWidths: null,
                width: null,
                widthType: 'auto',
              })),
              F(C.scrollIntoView()));
          }
          return true;
        };
      }
      function K(R) {
        return (F, k) => {
          let C = We(F);
          if (!C.isInTable || C.tablePos === void 0 || !C.table) return false;
          if (k) {
            let I = F.tr,
              A = C.table,
              V = C.tablePos,
              q = A.childCount,
              O = R.look ?? { firstRow: true, lastRow: false, noHBand: false },
              j = R.conditionals ?? {},
              G = R.tableBorders;
            I = I.setNodeMarkup(V, void 0, { ...A.attrs, styleId: R.styleId });
            let be = 0,
              E = V + 1;
            for (let D = 0; D < q; D++) {
              let H = A.child(D),
                ae = D === 0 && !!O.firstRow,
                pe = D === q - 1 && !!O.lastRow,
                fe = O.noHBand !== true,
                Ie = H.childCount,
                ge;
              ae
                ? (ge = 'firstRow')
                : pe
                  ? (ge = 'lastRow')
                  : (fe && (ge = be % 2 === 0 ? 'band1Horz' : 'band2Horz'), be++);
              let Se = E + 1;
              for (let de = 0; de < Ie; de++) {
                let Ge = H.child(de),
                  Ke = I.mapping.map(Se),
                  qe = ge,
                  at = de === 0 && !!O.firstCol,
                  $e = de === Ie - 1 && !!O.lastCol;
                ae && at && j.nwCell
                  ? (qe = 'nwCell')
                  : ae && $e && j.neCell
                    ? (qe = 'neCell')
                    : pe && at && j.swCell
                      ? (qe = 'swCell')
                      : pe && $e && j.seCell
                        ? (qe = 'seCell')
                        : at
                          ? (qe = 'firstCol')
                          : $e && (qe = 'lastCol');
                let Qe = qe ? j[qe] : void 0,
                  rt = { ...Ge.attrs };
                Qe?.backgroundColor
                  ? (rt.backgroundColor = Qe.backgroundColor)
                  : (rt.backgroundColor = null);
                let Ae = {},
                  mt = ['top', 'bottom', 'left', 'right'];
                for (let He of mt)
                  Qe?.borders && Qe.borders[He] !== void 0
                    ? (Ae[He] = Qe.borders[He])
                    : G &&
                      ((He === 'top' && D > 0) || (He === 'bottom' && D < q - 1)
                        ? (Ae[He] = G.insideH ?? G[He])
                        : (He === 'left' && de > 0) || (He === 'right' && de < Ie - 1)
                          ? (Ae[He] = G.insideV ?? G[He])
                          : (Ae[He] = G[He]));
                (Object.keys(Ae).length > 0 ? (rt.borders = Ae) : (rt.borders = null),
                  (I = I.setNodeMarkup(Ke, void 0, rt)),
                  (Se += Ge.nodeSize));
              }
              E += H.nodeSize;
            }
            k(I.scrollIntoView());
          }
          return true;
        };
      }
      function T(R) {
        return (F, k) => {
          let C = We(F);
          if (!C.isInTable || C.tablePos === void 0 || !C.table) return false;
          if (k) {
            let I = F.tr,
              A = { ...C.table.attrs };
            ('width' in R && (A.width = R.width),
              'widthType' in R && (A.widthType = R.widthType),
              'justification' in R && (A.justification = R.justification),
              I.setNodeMarkup(C.tablePos, void 0, A),
              k(I.scrollIntoView()));
          }
          return true;
        };
      }
      function B() {
        return (R, F) => {
          let k = We(R);
          if (!k.isInTable || k.tablePos === void 0 || !k.table) return false;
          if (F) {
            let C = R.tr,
              { $from: I } = R.selection;
            for (let A = I.depth; A > 0; A--) {
              let V = I.node(A);
              if (V.type.name === 'tableRow') {
                let q = I.before(A),
                  O = { ...V.attrs, isHeader: !V.attrs.isHeader };
                return (C.setNodeMarkup(q, void 0, O), F(C.scrollIntoView()), true);
              }
            }
          }
          return true;
        };
      }
      function J(R) {
        return (F, k) => {
          let C = We(F);
          if (!C.isInTable || C.tablePos === void 0 || !C.table) return false;
          if (k) {
            let I = F.tr,
              A = g(F),
              V = R.replace(/^#/, ''),
              q = { style: 'single', size: 4 },
              { cellByPos: O, cellByRC: j } = x(C.table, C.tablePos),
              G = new Map(),
              be = (H, ae) => G.get(H) ?? { ...ae.attrs },
              E = (H, ae) => G.set(H, ae),
              D = {
                top: { adjSide: 'bottom', dRow: -1, dCol: 0 },
                bottom: { adjSide: 'top', dRow: 1, dCol: 0 },
                left: { adjSide: 'right', dRow: 0, dCol: -1 },
                right: { adjSide: 'left', dRow: 0, dCol: 1 },
              };
            for (let { pos: H, node: ae } of A) {
              let pe = O.get(H),
                fe = be(H, ae),
                Ie = fe.borders || {},
                ge = {};
              for (let Se of ['top', 'bottom', 'left', 'right']) {
                let de = { ...q, ...Ie[Se], color: { rgb: V } };
                if (((ge[Se] = de), pe)) {
                  let Ge = D[Se],
                    Ke = Se === 'right' ? pe.colIdx + pe.colspan : pe.colIdx + Ge.dCol,
                    qe = j.get(`${pe.rowIdx + Ge.dRow},${Ke}`);
                  if (qe !== void 0) {
                    let at = O.get(qe),
                      $e = be(qe, at.node),
                      Qe = $e.borders || {};
                    E(qe, { ...$e, borders: { ...Qe, [Ge.adjSide]: de } });
                  }
                }
              }
              E(H, { ...fe, borders: { ...Ie, ...ge } });
            }
            for (let [H, ae] of G) I.setNodeMarkup(I.mapping.map(H), void 0, ae);
            k(I.scrollIntoView());
          }
          return true;
        };
      }
      function he(R) {
        return (F, k) => {
          let C = We(F);
          if (!C.isInTable || C.tablePos === void 0 || !C.table) return false;
          if (k) {
            let I = F.tr,
              A = g(F),
              V = { style: 'single', color: { rgb: '000000' } },
              { cellByPos: q, cellByRC: O } = x(C.table, C.tablePos),
              j = new Map(),
              G = (D, H) => j.get(D) ?? { ...H.attrs },
              be = (D, H) => j.set(D, H),
              E = {
                top: { adjSide: 'bottom', dRow: -1, dCol: 0 },
                bottom: { adjSide: 'top', dRow: 1, dCol: 0 },
                left: { adjSide: 'right', dRow: 0, dCol: -1 },
                right: { adjSide: 'left', dRow: 0, dCol: 1 },
              };
            for (let { pos: D, node: H } of A) {
              let ae = q.get(D),
                pe = G(D, H),
                fe = pe.borders || {},
                Ie = {};
              for (let ge of ['top', 'bottom', 'left', 'right']) {
                let Se = { ...V, ...fe[ge], size: R };
                if (((Ie[ge] = Se), ae)) {
                  let de = E[ge],
                    Ge = ge === 'right' ? ae.colIdx + ae.colspan : ae.colIdx + de.dCol,
                    Ke = O.get(`${ae.rowIdx + de.dRow},${Ge}`);
                  if (Ke !== void 0) {
                    let qe = q.get(Ke),
                      at = G(Ke, qe.node),
                      $e = at.borders || {};
                    be(Ke, { ...at, borders: { ...$e, [de.adjSide]: Se } });
                  }
                }
              }
              be(D, { ...pe, borders: { ...fe, ...Ie } });
            }
            for (let [D, H] of j) I.setNodeMarkup(I.mapping.map(D), void 0, H);
            k(I.scrollIntoView());
          }
          return true;
        };
      }
      function ue() {
        return (R, F) => {
          let k = R.selection;
          if (!('$anchorCell' in k && typeof k.forEachCell == 'function')) return false;
          let I = We(R);
          if (!I.isInTable || I.tablePos === void 0 || !I.table) return false;
          let A = 0;
          I.table.descendants((O) => {
            (O.type.name === 'tableCell' || O.type.name === 'tableHeader') && (A += 1);
          });
          let V = 0;
          if (
            (k.forEachCell(() => {
              V += 1;
            }),
            !(A > 0 && V >= A))
          )
            return false;
          if (F) {
            let O = R.tr.delete(I.tablePos, I.tablePos + I.table.nodeSize);
            F(O.scrollIntoView());
          }
          return true;
        };
      }
      function Ee() {
        return (R) => {
          let { $from: F, empty: k } = R.selection;
          if (!k) return false;
          let C = F.parent;
          if (C.type.name !== 'paragraph' || C.textContent.length > 0) return false;
          let I = F.depth;
          if (I < 1) return false;
          let A = F.node(I - 1),
            V = F.index(I - 1),
            q = V > 0 ? A.child(V - 1) : null,
            O = V + 1 < A.childCount ? A.child(V + 1) : null,
            j = q?.type.name === 'table',
            G = O?.type.name === 'table';
          return !!(j || G);
        };
      }
      let we = new PluginKey('activeCell'),
        Re = new Plugin({
          key: we,
          props: {
            decorations(R) {
              let { selection: F } = R;
              if (F instanceof CellSelection) return DecorationSet.empty;
              let { $from: k } = F;
              for (let C = k.depth; C > 0; C--) {
                let I = k.node(C);
                if (I.type.name === 'tableCell' || I.type.name === 'tableHeader') {
                  let A = k.before(C);
                  return DecorationSet.create(R.doc, [
                    Decoration.node(A, A + I.nodeSize, { class: 'activeCell' }),
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
          Re,
        ],
        keyboardShortcuts: { Backspace: n(ue(), Ee()), Delete: n(ue(), Ee()) },
        commands: {
          insertTable: (R, F) => i(R, F),
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
          setCellBorder: (R, F, k) => M(R, F, k),
          setTableBorders: (R, F) => w(R, F),
          setCellVerticalAlign: (R) => P(R),
          setCellMargins: (R) => z(R),
          setCellTextDirection: (R) => U(R),
          toggleNoWrap: () => $(),
          setRowHeight: (R, F) => L(R, F),
          toggleHeaderRow: () => B(),
          distributeColumns: () => W(),
          autoFitContents: () => _(),
          setTableProperties: (R) => T(R),
          applyTableStyle: (R) => K(R),
          setCellFillColor: (R) => S(R),
          setTableBorderColor: (R) => J(R),
          setTableBorderWidth: (R) => he(R),
          removeTableBorders: () => w('none'),
          setAllTableBorders: (R) => w('all', R),
          setOutsideTableBorders: (R) => w('outside', R),
          setInsideTableBorders: (R) => w('inside', R),
        },
      };
    },
  });
function Lc() {
  return [Cf(), Tf(), vf(), Rf(), Pf()];
}
function Ha(...e) {
  return (t, n, o) => {
    for (let r of e) if (r(t, n, o)) return true;
    return false;
  };
}
function Bc(e) {
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
var Mf = (e, t) => Bc(1)(e, t),
  Ef = (e, t) => Bc(2)(e, t),
  If = (e, t) => {
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
  Ff = (e, t) => {
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
  Lf = (e, t) => {
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
function Bf() {
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
function Af() {
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
function Df() {
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
function Hf() {
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
function Nf() {
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
function zf() {
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
var Ac = Ft({
  name: 'list',
  priority: kn.High,
  onSchemaReady() {
    return {
      commands: {
        toggleBulletList: () => Mf,
        toggleNumberedList: () => Ef,
        increaseListLevel: () => If,
        decreaseListLevel: () => Ff,
        removeList: () => Lf,
      },
      keyboardShortcuts: {
        Tab: Ha(Ic(), Hf(), zf()),
        'Shift-Tab': Ha(Fc(), Nf()),
        'Shift-Enter': () => false,
        Enter: Ha(Bf(), Af()),
        Backspace: Df(),
      },
    };
  },
});
function Hc(...e) {
  return (t, n, o) => {
    for (let r of e) if (r(t, n, o)) return true;
    return false;
  };
}
var Uf = (e, t) => {
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
  Gf = [
    'defaultTextFormatting',
    'styleId',
    'lineSpacing',
    'lineSpacingRule',
    'spaceAfter',
    'spaceBefore',
    'contextualSpacing',
  ],
  Nc = new Set(['fontFamily', 'fontSize', 'textColor']),
  Kf = (e, t, n) => {
    let { $from: o } = e.selection,
      r = o.parent.type.name === 'paragraph' ? o.parent : null,
      a = (e.storedMarks || o.marks()).filter((u) => Nc.has(u.type.name)),
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
          for (let m of Gf) {
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
            b && (m = Ba(b, e.schema).filter((x) => Nc.has(x.type.name)));
          }
          if (m.length > 0) {
            let b = { ...(p.defaultTextFormatting ?? {}) },
              g = false;
            for (let x of m)
              if (
                (x.type.name === 'fontSize' &&
                  x.attrs.size !== b.fontSize &&
                  ((b.fontSize = x.attrs.size), (g = true)),
                x.type.name === 'fontFamily')
              ) {
                let w = x.attrs.ascii;
                w &&
                  (!b.fontFamily || b.fontFamily.ascii !== w) &&
                  ((b.fontFamily = { ...b.fontFamily, ascii: w, hAnsi: x.attrs.hAnsi }),
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
  zc = Ft({
    name: 'baseKeymap',
    priority: kn.Low,
    onSchemaReady(e) {
      return {
        keyboardShortcuts: {
          ...baseKeymap,
          Enter: Kf,
          Backspace: Hc(deleteSelection, Uf, joinBackward),
          Delete: Hc(deleteSelection, joinForward),
          'Mod-a': selectAll,
          Escape: selectParentNode,
        },
      };
    },
  });
var Tr = new PluginKey('selectionTracker');
function so(e) {
  let { selection: t, doc: n } = e,
    { from: o, to: r, empty: i } = t,
    a = n.resolve(o),
    s = 0,
    l = 0;
  n.forEach((M, P, z) => {
    if (P > r) return false;
    (P <= o && (s = z), P <= r && (l = z));
  });
  let u = Xf(e),
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
    x = [],
    w = false,
    S = false;
  for (let M of g)
    (M.type.name === 'comment' && M.attrs.commentId && x.push(M.attrs.commentId),
      M.type.name === 'insertion' && (w = true),
      M.type.name === 'deletion' && (S = true));
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
    activeCommentIds: x,
    inInsertion: w,
    inDeletion: S,
  };
}
function Xf(e) {
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
function vr(e) {
  return new Plugin({
    key: Tr,
    state: {
      init(t, n) {
        return so(n);
      },
      apply(t, n, o, r) {
        if (!t.selectionSet && !t.docChanged) return n;
        let i = so(r);
        return (e && !Jf(n, i) && setTimeout(() => e(i), 0), i);
      },
    },
    view() {
      return {
        update(t, n) {
          if (!e || (t.state.selection.eq(n.selection) && t.state.doc.eq(n.doc))) return;
          let o = Tr.getState(t.state);
          o && e(o);
        },
      };
    },
  });
}
function Zf(e, t) {
  if (e === t) return true;
  if (!e || !t || e.length !== t.length) return false;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return false;
  return true;
}
function Jf(e, t) {
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
    Zf(e.activeCommentIds, t.activeCommentIds) &&
    JSON.stringify(e.textFormatting) === JSON.stringify(t.textFormatting) &&
    JSON.stringify(e.paragraphFormatting) === JSON.stringify(t.paragraphFormatting)
  );
}
var Oc = Ft({
  name: 'selectionTracker',
  defaultOptions: {},
  onSchemaReady(e, t) {
    return {
      plugins: [vr(t.onSelectionChange)],
      commands: { extractSelectionContext: () => (n, o) => (so(n), true) },
    };
  },
});
var tm = new PluginKey('imageDrag'),
  Wc = Ft({
    name: 'imageDrag',
    onSchemaReady(e) {
      return {
        plugins: [
          new Plugin({
            key: tm,
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
var _c = Ft({
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
    o('doc', Bl()),
    o('text', Al()),
    o('paragraph', Ol()),
    o('history', Wl({ depth: e.historyDepth, newGroupDelay: e.historyNewGroupDelay })),
    o('bold', Vl()),
    o('italic', Ul()),
    o('underline', ql()),
    o('strike', Yl()),
    o('textColor', Xl()),
    o('highlight', Zl()),
    o('fontSize', Jl()),
    o('fontFamily', Ql()),
    o('superscript', ec()),
    o('subscript', tc()),
    o('hyperlink', nc()),
    o('allCaps', oc()),
    o('smallCaps', rc()),
    o('footnoteRef', ic()),
    o('characterSpacing', ac()),
    o('emboss', dc()),
    o('imprint', uc()),
    o('textShadow', pc()),
    o('emphasisMark', fc()),
    o('textOutline', mc()),
    o('comment', sc()),
    o('insertion', lc()),
    o('deletion', cc()),
    o('hardBreak', gc()),
    o('tab', hc()),
    o('image', bc()),
    o('textBox', yc()),
    o('shape', xc()),
    o('imageDrag', Wc()),
    o('dropCursor', _c()),
    o('horizontalRule', Sc()),
    o('pageBreak', kc()),
    o('field', wc()),
    o('sdt', Cc()),
    o('math', Tc()),
    t.has('table') || n.push(...Lc()),
    o('list', Ac()),
    o('baseKeymap', zc()),
    o('selectionTracker', Oc({ onSelectionChange: e.onSelectionChange })),
    n
  );
}
var wn = class {
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
var Rr = new wn(lo());
Rr.buildSchema();
Rr.initializeRuntime();
var Vn = Rr,
  xe = Rr.getSchema();
var Do = class {
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
function Cn(e) {
  return new Do(e);
}
function Er(e, t) {
  let n = e.package.document.content,
    o = [],
    r = t?.styles ? Cn(t.styles) : null;
  for (let i of n)
    if (i.type === 'paragraph') {
      let a = Vc(i),
        s = Ir(i, r);
      o.push(s);
      for (let l of a) o.push(jc(l, r));
      hm(i) && o.push(xe.node('pageBreak'));
    } else if (i.type === 'table') {
      let a = Na(i, r);
      o.push(a);
    }
  return (o.length === 0 && o.push(xe.node('paragraph', {}, [])), xe.node('doc', null, o));
}
function Ir(e, t, n, o) {
  let r = am(e, t),
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
      let c = za(d, u, t);
      (s.size > 0 && (c = im(c, s)), i.push(...c));
    } else if (d.type === 'hyperlink') {
      let c = Oa(d, u, t);
      i.push(...c);
    } else if (d.type === 'simpleField' || d.type === 'complexField') {
      let c = dm(d, u);
      c && i.push(c);
    } else if (d.type === 'inlineSdt') {
      let c = pm(d, u, t);
      c && i.push(c);
    } else if (d.type === 'insertion') {
      let c = Pr(d, 'insertion', u, t);
      i.push(...c);
    } else if (d.type === 'deletion') {
      let c = Pr(d, 'deletion', u, t);
      i.push(...c);
    } else if (d.type === 'moveFrom') {
      let c = Pr(d, 'deletion', u, t);
      i.push(...c);
    } else if (d.type === 'moveTo') {
      let c = Pr(d, 'insertion', u, t);
      i.push(...c);
    } else if (d.type === 'mathEquation') {
      let c = um(d);
      c && i.push(c);
    }
    d.type === 'bookmarkStart' && (a || (a = []), a.push({ id: d.id, name: d.name }));
  }
  return (a && (r.bookmarks = a), xe.node('paragraph', r, i));
}
function im(e, t) {
  if (t.size === 0) return e;
  let n = [...t][0],
    o = xe.marks.comment.create({ commentId: n });
  return e.map((r) => (r.isText ? r.mark(o.addToSet(r.marks)) : r));
}
function Pr(e, t, n, o) {
  let r = [];
  for (let a of e.content)
    a.type === 'run' ? r.push(...za(a, n, o)) : a.type === 'hyperlink' && r.push(...Oa(a, n, o));
  let i = xe.marks[t].create({
    revisionId: e.info.id,
    author: e.info.author,
    date: e.info.date ?? null,
  });
  return r.map((a) => (a.isText ? a.mark(i.addToSet(a.marks)) : a));
}
function am(e, t) {
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
    let l = Mr(n?.runProperties, t);
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
      (r.defaultTextFormatting = Mr(n?.runProperties, t)));
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
  let i = Mr(r.pPr?.runProperties, e),
    a = Mr(r.rPr, e),
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
function Mr(e, t) {
  if (!e) return;
  if (!e.styleId || !t) return e;
  let n = t.resolveRunStyle(e.styleId);
  return on(n, e);
}
function sm(e) {
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
function Na(e, t) {
  let n = sm(e),
    o = e.columnWidths,
    r = o?.reduce((S, M) => S + M, 0) ?? 0,
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
    x = o?.length ?? e.rows[0]?.cells.reduce((S, M) => S + (M.formatting?.gridSpan ?? 1), 0) ?? 0,
    w = e.rows.map((S, M) => {
      let P = M === 0 && !!a?.firstRow,
        z = M === g - 1 && !!a?.lastRow,
        U = f && !P && !z ? (b % 2 === 0 ? p.band1Horz : p.band2Horz) : void 0;
      return (f && !P && !z && b++, lm(S, t, P, o, r, p, U, m, a, l, M, g, x, n, d));
    });
  return xe.node('table', c, w);
}
function lm(e, t, n, o, r, i, a, s, l, u, d, c, p, f, m) {
  let b = {
      height: e.formatting?.height?.value,
      heightRule: e.formatting?.heightRule,
      isHeader: n || e.formatting?.header,
      _originalFormatting: e.formatting || void 0,
    },
    g = e.cells.length,
    x = d === 0,
    w = d === (c ?? 1) - 1,
    S = e.formatting?.conditionalFormat,
    M = S?.firstRow ?? x,
    P = S?.lastRow ?? w,
    z = p ?? g,
    U = 0,
    $ = [];
  for (let L = 0; L < e.cells.length; L++) {
    let W = e.cells[L],
      _ = W.formatting?.gridSpan ?? 1,
      K = `${d ?? 0}-${U}`,
      T = f?.get(K),
      B = T?.skip ?? false,
      J = T?.rowSpan ?? 1,
      he;
    if (o && r && r > 0) {
      let V = 0;
      for (let q = 0; q < _ && U + q < o.length; q++) V += o[U + q];
      he = Math.round((V / r) * 100);
    }
    if (((U += _), B)) continue;
    let ue = U - _ === 0,
      Ee = U === z,
      we = W.formatting?.conditionalFormat,
      Re = we?.firstRow ?? M,
      R = we?.lastRow ?? P,
      F = we?.firstColumn ?? ue,
      k = we?.lastColumn ?? Ee,
      C;
    if (s) {
      let V = l?.firstColumn ? 1 : 0,
        q = U - _ - V;
      q >= 0 &&
        !(l?.lastColumn && k) &&
        !(l?.firstColumn && F) &&
        (C = q % 2 === 0 ? i?.band1Vert : i?.band2Vert);
    }
    we?.oddVBand ? (C = i?.band1Vert) : we?.evenVBand && (C = i?.band2Vert);
    let I = a;
    (S?.oddHBand ? (I = i?.band1Horz) : S?.evenHBand && (I = i?.band2Horz),
      we?.oddHBand ? (I = i?.band1Horz) : we?.evenHBand && (I = i?.band2Horz));
    let A = i?.wholeTable;
    ((A = nn(A, I)),
      (A = nn(A, C)),
      Re && (l?.firstRow || S?.firstRow || we?.firstRow) && (A = nn(A, i?.firstRow)),
      R && (l?.lastRow || S?.lastRow || we?.lastRow) && (A = nn(A, i?.lastRow)),
      F && (l?.firstColumn || S?.firstColumn || we?.firstColumn) && (A = nn(A, i?.firstCol)),
      k && (l?.lastColumn || S?.lastColumn || we?.lastColumn) && (A = nn(A, i?.lastCol)),
      Re &&
        F &&
        (l?.firstRow || S?.firstRow || we?.firstRow) &&
        (l?.firstColumn || S?.firstColumn || we?.firstColumn) &&
        (A = nn(A, i?.nwCell)),
      Re &&
        k &&
        (l?.firstRow || S?.firstRow || we?.firstRow) &&
        (l?.lastColumn || S?.lastColumn || we?.lastColumn) &&
        (A = nn(A, i?.neCell)),
      R &&
        F &&
        (l?.lastRow || S?.lastRow || we?.lastRow) &&
        (l?.firstColumn || S?.firstColumn || we?.firstColumn) &&
        (A = nn(A, i?.swCell)),
      R &&
        k &&
        (l?.lastRow || S?.lastRow || we?.lastRow) &&
        (l?.lastColumn || S?.lastColumn || we?.lastColumn) &&
        (A = nn(A, i?.seCell)),
      $.push(cm(W, t, n, he, A, u, x, w, ue, Ee, J, m)));
  }
  return xe.node('tableRow', b, $);
}
function cm(e, t, n, o, r, i, a, s, l, u, d, c) {
  let p = e.formatting,
    f = d ?? 1,
    m = p?.width?.value,
    b = p?.width?.type;
  m === void 0 && o !== void 0 && ((m = o), (b = 'pct'));
  let g = p?.shading?.fill?.rgb ?? r?.tcPr?.shading?.fill?.rgb,
    x = i
      ? {
          top: a ? i.top : i.insideH,
          bottom: s ? i.bottom : i.insideH,
          left: l ? i.left : i.insideV,
          right: u ? i.right : i.insideV,
        }
      : void 0,
    w = r?.tcPr?.borders,
    S = p?.borders,
    M = x || w || S ? { ...(x ?? {}), ...(w ?? {}), ...(S ?? {}) } : void 0,
    P = {
      colspan: p?.gridSpan ?? 1,
      rowspan: f,
      width: m,
      widthType: b,
      verticalAlign: p?.verticalAlign,
      backgroundColor: g,
      textDirection: p?.textDirection,
      noWrap: p?.noWrap,
      borders: M,
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
    z = [];
  for (let $ of e.content)
    $.type === 'paragraph'
      ? z.push(Ir($, t, void 0, r?.rPr))
      : $.type === 'table' && z.push(Na($, t));
  z.length === 0 && z.push(xe.node('paragraph', {}, []));
  let U = n ? 'tableHeader' : 'tableCell';
  return xe.node(U, P, z);
}
function dm(e, t) {
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
    a = $a(i);
  return xe.node(
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
function um(e) {
  return xe.node('math', { display: e.display, ommlXml: e.ommlXml, plainText: e.plainText || '' });
}
function pm(e, t, n) {
  let o = e.properties,
    r = [];
  for (let i of e.content)
    if (i.type === 'run') {
      let a = za(i, t, n);
      r.push(...a);
    } else if (i.type === 'hyperlink') {
      let a = Oa(i, t, n);
      r.push(...a);
    }
  return xe.node(
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
function za(e, t, n) {
  let o = [],
    r = e.formatting?.styleId ? n?.getRunStyleOwnProperties(e.formatting.styleId) : void 0,
    i = on(on(t, r), e.formatting),
    a = $a(i);
  for (let s of e.content) {
    let l = fm(s, a);
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
function fm(e, t) {
  switch (e.type) {
    case 'text':
      return e.text ? [xe.text(e.text, t)] : [];
    case 'break':
      return e.breakType === 'textWrapping' || !e.breakType ? [xe.node('hardBreak')] : [];
    case 'tab':
      return [xe.node('tab')];
    case 'drawing':
      return e.image ? [mm(e.image)] : [];
    case 'shape': {
      let r = e.shape;
      return r.textBody && r.textBody.content.length > 0 ? [] : [gm(r)];
    }
    case 'footnoteRef':
      let n = xe.mark('footnoteRef', { id: e.id.toString(), noteType: 'footnote' });
      return [xe.text(e.id.toString(), [...t, n])];
    case 'endnoteRef':
      let o = xe.mark('footnoteRef', { id: e.id.toString(), noteType: 'endnote' });
      return [xe.text(e.id.toString(), [...t, o])];
    default:
      return [];
  }
}
function mm(e) {
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
    let x = [];
    (e.transform.rotation && x.push(`rotate(${e.transform.rotation}deg)`),
      e.transform.flipH && x.push('scaleX(-1)'),
      e.transform.flipV && x.push('scaleY(-1)'),
      x.length > 0 && (l = x.join(' ')));
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
    let x = {
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
    g = (e.outline.style && x[e.outline.style]) || 'solid';
  }
  return xe.node('image', {
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
function Oa(e, t, n) {
  let o = [],
    r = e.href || (e.anchor ? `#${e.anchor}` : ''),
    i = xe.mark('hyperlink', { href: r, tooltip: e.tooltip, rId: e.rId });
  for (let a of e.children)
    if (a.type === 'run') {
      let s = a.formatting?.styleId ? n?.resolveRunStyle(a.formatting.styleId) : void 0,
        l = on(on(t, s), a.formatting),
        d = [...$a(l), i];
      for (let c of a.content) c.type === 'text' && c.text && o.push(xe.text(c.text, d));
    }
  return o;
}
function $a(e) {
  if (!e) return [];
  let t = [];
  return (
    e.bold && t.push(xe.mark('bold')),
    e.italic && t.push(xe.mark('italic')),
    e.underline &&
      e.underline.style !== 'none' &&
      t.push(xe.mark('underline', { style: e.underline.style, color: e.underline.color })),
    (e.strike || e.doubleStrike) && t.push(xe.mark('strike', { double: e.doubleStrike || false })),
    e.color &&
      !e.color.auto &&
      t.push(
        xe.mark('textColor', {
          rgb: e.color.rgb,
          themeColor: e.color.themeColor,
          themeTint: e.color.themeTint,
          themeShade: e.color.themeShade,
        })
      ),
    e.highlight && e.highlight !== 'none' && t.push(xe.mark('highlight', { color: e.highlight })),
    e.fontSize && t.push(xe.mark('fontSize', { size: e.fontSize })),
    e.fontFamily &&
      t.push(
        xe.mark('fontFamily', {
          ascii: e.fontFamily.ascii,
          hAnsi: e.fontFamily.hAnsi,
          asciiTheme: e.fontFamily.asciiTheme,
        })
      ),
    e.vertAlign === 'superscript'
      ? t.push(xe.mark('superscript'))
      : e.vertAlign === 'subscript' && t.push(xe.mark('subscript')),
    e.allCaps && t.push(xe.mark('allCaps')),
    e.smallCaps && t.push(xe.mark('smallCaps')),
    (e.spacing != null || e.position != null || e.scale != null || e.kerning != null) &&
      t.push(
        xe.mark('characterSpacing', {
          spacing: e.spacing ?? null,
          position: e.position ?? null,
          scale: e.scale ?? null,
          kerning: e.kerning ?? null,
        })
      ),
    e.emboss && t.push(xe.mark('emboss')),
    e.imprint && t.push(xe.mark('imprint')),
    e.shadow && t.push(xe.mark('textShadow')),
    e.emphasisMark &&
      e.emphasisMark !== 'none' &&
      t.push(xe.mark('emphasisMark', { type: e.emphasisMark })),
    e.outline && t.push(xe.mark('textOutline')),
    t
  );
}
function gm(e) {
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
  return xe.node('shape', {
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
function Vc(e) {
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
function jc(e, t) {
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
  for (let f of e.content) p.push(Ir(f, t));
  return (
    p.length === 0 && p.push(xe.node('paragraph', {}, [])),
    xe.node(
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
function Wa(e, t) {
  let n = [],
    o = t?.styles ? Cn(t.styles) : null;
  for (let r of e)
    if (r.type === 'paragraph') {
      let i = Vc(r);
      n.push(Ir(r, o));
      for (let a of i) n.push(jc(a, o));
    } else r.type === 'table' && n.push(Na(r, o));
  return (n.length === 0 && n.push(xe.node('paragraph', {}, [])), xe.node('doc', null, n));
}
function hm(e) {
  for (let t of e.content)
    if (t.type === 'run') {
      for (let n of t.content) if (n.type === 'break' && n.breakType === 'page') return true;
    }
  return false;
}
function Fr() {
  return xe.node('doc', null, [xe.node('paragraph', {}, [])]);
}
function Lr(e, t) {
  let o = {
    content: Gc(e),
    finalSectionProperties: t?.package.document.finalSectionProperties,
    sections: t?.package.document.sections,
    comments: t?.package.document.comments,
  };
  return t ? { ...t, package: { ...t.package, document: o } } : { package: { document: o } };
}
function Gc(e) {
  let t = [],
    n = qc(e);
  return (
    e.forEach((o) => {
      o.type.name === 'paragraph'
        ? t.push(_a(o, n))
        : o.type.name === 'table'
          ? t.push(Xc(o, n))
          : o.type.name === 'textBox'
            ? t.push(Nm(o))
            : o.type.name === 'pageBreak' && t.push(bm());
    }),
    t
  );
}
function bm() {
  return {
    type: 'paragraph',
    content: [{ type: 'run', content: [{ type: 'break', breakType: 'page' }] }],
  };
}
function _a(e, t) {
  let n = e.attrs,
    o = ym(Kc(e, t), e),
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
    formatting: xm(n),
    content: o,
  };
  return (n.sectionBreakType && (i.sectionProperties = { sectionStart: n.sectionBreakType }), i);
}
function ym(e, t) {
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
function xm(e) {
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
function Kc(e, t) {
  let n = [],
    o = t ?? qc(e),
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
          f = s.marks.filter((P) => P.type.name !== 'insertion' && P.type.name !== 'deletion'),
          m = Va(f),
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
          x = g.id,
          w = (o.insertionById.get(x) ?? 0) > 0,
          S = (o.deletionById.get(x) ?? 0) > 0,
          M = w && S;
        u
          ? M
            ? n.push({ type: 'moveTo', info: g, content: [b] })
            : n.push({ type: 'insertion', info: g, content: [b] })
          : M
            ? n.push({ type: 'moveFrom', info: g, content: [b] })
            : n.push({ type: 'deletion', info: g, content: [b] });
        return;
      }
      let c = s.marks.find((p) => p.type.name === 'hyperlink');
      if (c) {
        let p = Sm(c),
          f = a?.href || (a?.anchor ? `#${a.anchor}` : '');
        ((a && f === p) || (r && (n.push(r), (r = null), (i = null)), a && n.push(a), (a = wm(c))),
          Uc(a, s));
        return;
      }
      if ((a && (n.push(a), (a = null)), s.isText)) {
        let p = km(s.marks);
        r && i === p
          ? Cm(r, s.text || '')
          : (r && n.push(r), (r = Yc(s.text || '', s.marks)), (i = p));
      } else
        s.type.name === 'hardBreak'
          ? (r && (n.push(r), (r = null), (i = null)), n.push(Tm()))
          : s.type.name === 'image'
            ? (r && (n.push(r), (r = null), (i = null)), n.push(Em(s)))
            : s.type.name === 'shape'
              ? (r && (n.push(r), (r = null), (i = null)), n.push(Im(s)))
              : s.type.name === 'tab'
                ? (r && (n.push(r), (r = null), (i = null)), n.push(vm()))
                : s.type.name === 'field'
                  ? (r && (n.push(r), (r = null), (i = null)), n.push(Rm(s, s.marks)))
                  : s.type.name === 'sdt'
                    ? (r && (n.push(r), (r = null), (i = null)), n.push(Mm(s)))
                    : s.type.name === 'math' &&
                      (r && (n.push(r), (r = null), (i = null)), n.push(Pm(s)));
    }),
    r && n.push(r),
    a && n.push(a),
    n
  );
}
function qc(e) {
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
function Sm(e) {
  return e.attrs.href || '';
}
function km(e) {
  let t = e.filter((n) => n.type.name !== 'hyperlink');
  return t.length === 0
    ? ''
    : t
        .map((n) => `${n.type.name}:${JSON.stringify(n.attrs)}`)
        .sort()
        .join('|');
}
function wm(e) {
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
function Uc(e, t) {
  if (t.isText && t.text) {
    let n = t.marks.filter((r) => r.type.name !== 'hyperlink'),
      o = Yc(t.text, n);
    e.children.push(o);
  }
}
function Yc(e, t) {
  let n = Va(t),
    o = { type: 'text', text: e };
  return { type: 'run', formatting: Object.keys(n).length > 0 ? n : void 0, content: [o] };
}
function Cm(e, t) {
  let n = e.content[e.content.length - 1];
  n && n.type === 'text' ? (n.text += t) : e.content.push({ type: 'text', text: t });
}
function Tm() {
  return { type: 'run', content: [{ type: 'break', breakType: 'textWrapping' }] };
}
function vm() {
  return { type: 'run', content: [{ type: 'tab' }] };
}
function Rm(e, t) {
  let n = e.attrs,
    o = t && t.length > 0 ? Va(t) : void 0,
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
function Pm(e) {
  let t = e.attrs;
  return {
    type: 'mathEquation',
    display: t.display || 'inline',
    ommlXml: t.ommlXml,
    plainText: t.plainText || void 0,
  };
}
function Mm(e) {
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
    r = Kc(e).filter((i) => i.type === 'run' || i.type === 'hyperlink');
  return { type: 'inlineSdt', properties: n, content: r };
}
function Em(e) {
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
function Im(e) {
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
function Va(e) {
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
function Fm(e) {
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
function Xc(e, t) {
  let n = e.attrs,
    o = [];
  e.forEach((i) => {
    i.type.name === 'tableRow' && o.push(Bm(i, t));
  });
  let r = Lm(n) || void 0;
  if (!r?.borders) {
    let i = Fm(o);
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
function Lm(e) {
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
function Bm(e, t) {
  let n = e.attrs,
    o = [];
  return (
    e.forEach((r) => {
      (r.type.name === 'tableCell' || r.type.name === 'tableHeader') && o.push(Dm(r, t));
    }),
    { type: 'tableRow', formatting: Am(n), cells: o }
  );
}
function Am(e) {
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
function Dm(e, t) {
  let n = e.attrs,
    o = [];
  return (
    e.forEach((r) => {
      r.type.name === 'paragraph' ? o.push(_a(r, t)) : r.type.name === 'table' && o.push(Xc(r, t));
    }),
    { type: 'tableCell', formatting: Hm(n), content: o }
  );
}
function Hm(e) {
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
function Nm(e) {
  let t = e.attrs,
    n = [];
  e.forEach((a) => {
    a.type.name === 'paragraph' && n.push(_a(a));
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
function Ho(e) {
  return Gc(e);
}
function co(e) {
  let { selection: t, doc: n } = e,
    { from: o, to: r, empty: i } = t,
    a = n.resolve(o),
    s = 0,
    l = 0;
  n.forEach((g, x, w) => {
    (x <= o && (s = w), x <= r && (l = w));
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
var kt = Vn.getCommands(),
  Br = kt.toggleBold(),
  Ar = kt.toggleItalic(),
  Dr = kt.toggleUnderline(),
  Hr = kt.toggleStrike(),
  Nr = kt.toggleSuperscript(),
  zr = kt.toggleSubscript();
function No(e) {
  return kt.setTextColor(e);
}
var Or = kt.clearTextColor();
function $r(e) {
  return kt.setHighlight(e);
}
kt.clearHighlight();
function Wr(e) {
  return kt.setFontSize(e);
}
kt.clearFontSize();
function _r(e) {
  return kt.setFontFamily(e);
}
kt.clearFontFamily();
function Vr(e, t) {
  return kt.setHyperlink(e, t);
}
var jr = kt.removeHyperlink();
function zo(e, t, n) {
  return kt.insertHyperlink(e, t, n);
}
var nt = Vn.getCommands();
function Ur(e) {
  return nt.setAlignment(e);
}
nt.alignLeft();
nt.alignCenter();
nt.alignRight();
nt.alignJustify();
function Gr(e, t = 'auto') {
  return nt.setLineSpacing(e, t);
}
nt.singleSpacing();
nt.oneAndHalfSpacing();
nt.doubleSpacing();
function Kr(e = 720) {
  return nt.increaseIndent(e);
}
function qr(e = 720) {
  return nt.decreaseIndent(e);
}
function Yr(e) {
  return nt.setIndentLeft(e);
}
function Xr(e) {
  return nt.setIndentRight(e);
}
function Oo(e, t) {
  return nt.setIndentFirstLine(e, t);
}
var Zr = nt.toggleBulletList(),
  Jr = nt.toggleNumberedList(),
  Qr = nt.increaseListLevel(),
  ei = nt.decreaseListLevel();
nt.removeList();
function $o(e, t) {
  return nt.applyStyle(e, t);
}
nt.clearStyle();
nt.removeSectionBreak();
function ti(e) {
  return nt.removeTabStop(e);
}
var ni = nt.generateTOC();
var je = Vn.getCommands();
function oi(e, t) {
  return je.insertTable(e, t);
}
function ri(e, t) {
  return je.addRowAbove()(e, t);
}
function ii(e, t) {
  return je.addRowBelow()(e, t);
}
function ai(e, t) {
  return je.deleteRow()(e, t);
}
function si(e, t) {
  return je.addColumnLeft()(e, t);
}
function li(e, t) {
  return je.addColumnRight()(e, t);
}
function ci(e, t) {
  return je.deleteColumn()(e, t);
}
function Wo(e, t) {
  return je.deleteTable()(e, t);
}
function di(e, t) {
  return je.selectTable()(e, t);
}
function ui(e, t) {
  return je.selectRow()(e, t);
}
function pi(e, t) {
  return je.selectColumn()(e, t);
}
function fi(e, t) {
  return je.mergeCells()(e, t);
}
function mi(e, t) {
  return je.splitCell()(e, t);
}
function Tn(e, t, n) {
  return je.setCellBorder(e, t, n);
}
function gi(e, t) {
  return je.removeTableBorders()(e, t);
}
function hi(e, t, n) {
  return je.setAllTableBorders(n)(e, t);
}
function bi(e, t, n) {
  return je.setOutsideTableBorders(n)(e, t);
}
function yi(e, t, n) {
  return je.setInsideTableBorders(n)(e, t);
}
function xi(e) {
  return je.setCellVerticalAlign(e);
}
function Si(e) {
  return je.setCellMargins(e);
}
function ki(e) {
  return je.setCellTextDirection(e);
}
function wi() {
  return je.toggleNoWrap();
}
function Ci(e, t) {
  return je.setRowHeight(e, t);
}
function Ti() {
  return je.toggleHeaderRow();
}
function vi() {
  return je.distributeColumns();
}
function Ri() {
  return je.autoFitContents();
}
function _o(e) {
  return je.setTableProperties(e);
}
function Pi(e) {
  return je.applyTableStyle(e);
}
function Mi(e) {
  return je.setCellFillColor(e);
}
function Ei(e) {
  return je.setTableBorderColor(e);
}
function Ii(e) {
  return je.setTableBorderWidth(e);
}
var Fi = (e, t) => {
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
function pd(e, t, n) {
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
function Ua(e, t) {
  return pd(e, t, 'accept');
}
function Ga(e, t) {
  return pd(e, t, 'reject');
}
var md = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2px 0',
    fontSize: 11,
    color: '#4285f4',
    userSelect: 'none',
  },
  gd = { fontWeight: 500, letterSpacing: 0.3 },
  tg = {
    background: 'none',
    border: 'none',
    color: '#4285f4',
    cursor: 'pointer',
    fontSize: 11,
    padding: '2px 6px',
    borderRadius: 3,
  },
  ng = {
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
  Li = {
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
  bd = forwardRef(function (
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
      x = useRef(null),
      [w, S] = useState(null);
    (useLayoutEffect(() => {
      let $ = () => {
        let W = i.getBoundingClientRect(),
          _ = r.getBoundingClientRect();
        S({
          top: _.top - W.top + i.scrollTop,
          left: _.left - W.left + i.scrollLeft,
          width: _.width,
        });
      };
      $();
      let L = i.closest('[style*="overflow"]') || i;
      return (
        L.addEventListener('scroll', $),
        window.addEventListener('resize', $),
        () => {
          (L.removeEventListener('scroll', $), window.removeEventListener('resize', $));
        }
      );
    }, [r, i]),
      useEffect(() => {
        if (!c.current || p.current) return;
        let $ = Wa(t.content, { styles: o || void 0 }),
          L = new wn(lo());
        (L.buildSchema(), L.initializeRuntime());
        let W = L.getPlugins(),
          _ = EditorState.create({ doc: $, schema: xe, plugins: W }),
          K = new EditorView(c.current, {
            state: _,
            dispatchTransaction(T) {
              let B = K.state.apply(T);
              if ((K.updateState(B), T.docChanged && m(true), T.selectionSet || T.docChanged)) {
                let J = co(B);
                l?.(J);
              }
            },
          });
        return (
          (p.current = K),
          requestAnimationFrame(() => {
            K.focus();
            let T = co(K.state);
            l?.(T);
          }),
          () => {
            (K.destroy(), (p.current = null));
          }
        );
      }, [w]));
    let M = useCallback(() => {
        if (!p.current) return;
        let $ = Ho(p.current.state.doc);
        a($);
      }, [a]),
      P = useCallback(() => {
        f ? M() : s();
      }, [f, M, s]);
    (useEffect(() => {
      function $(L) {
        L.key === 'Escape' && (L.preventDefault(), L.stopPropagation(), P());
      }
      return (
        document.addEventListener('keydown', $, true),
        () => document.removeEventListener('keydown', $, true)
      );
    }, [P]),
      useEffect(() => {
        if (!b) return;
        function $(L) {
          x.current && !x.current.contains(L.target) && g(false);
        }
        return (
          document.addEventListener('mousedown', $),
          () => document.removeEventListener('mousedown', $)
        );
      }, [b]),
      useImperativeHandle(d, () => ({
        getView: () => p.current,
        focus: () => p.current?.focus(),
        undo: () => {
          let $ = p.current;
          return $ ? undo($.state, $.dispatch) : false;
        },
        redo: () => {
          let $ = p.current;
          return $ ? redo($.state, $.dispatch) : false;
        },
      })));
    let z = n === 'header' ? 'Header' : 'Footer';
    if (!w) return null;
    let U = { position: 'absolute', top: w.top, left: w.left, width: w.width, zIndex: 10 };
    return jsxs('div', {
      className: 'hf-inline-editor',
      style: U,
      onMouseDown: ($) => {
        $.stopPropagation();
      },
      children: [
        n === 'footer' &&
          jsxs('div', {
            className: 'hf-separator-bar',
            style: md,
            children: [
              jsx('span', { style: gd, children: z }),
              jsx(hd, {
                label: z,
                showOptions: b,
                setShowOptions: g,
                optionsRef: x,
                onRemove: u,
                onClose: P,
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
            style: md,
            children: [
              jsx('span', { style: gd, children: z }),
              jsx(hd, {
                label: z,
                showOptions: b,
                setShowOptions: g,
                optionsRef: x,
                onRemove: u,
                onClose: P,
                viewRef: p,
              }),
            ],
          }),
      ],
    });
  });
function hd({
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
      f = xe.nodes.field.create({
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
        style: tg,
        onClick: (l) => {
          (l.stopPropagation(), n((u) => !u));
        },
        onMouseDown: (l) => l.stopPropagation(),
        children: 'Options \u25BE',
      }),
      t &&
        jsxs('div', {
          style: ng,
          children: [
            jsx('button', {
              type: 'button',
              style: Li,
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
              style: Li,
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
                style: Li,
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
              style: Li,
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
  og = [
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
function yd(e) {
  return og.find((t) => t.id === e);
}
function xd() {
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
function Sd() {
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
function kd({ message: e }) {
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
function ig(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
function ag(e, t = {}) {
  let {
      maxEntries: n = 100,
      groupingInterval: o = 500,
      enableKeyboardShortcuts: r = true,
      isEqual: i = ig,
      onUndo: a,
      onRedo: s,
      containerRef: l,
    } = t,
    [u, d] = useState(e),
    [c, p] = useState([]),
    [f, m] = useState([]),
    b = useRef(0),
    g = useRef(false),
    x = useCallback(
      (L, W) => {
        if (i(u, L)) return;
        if (g.current) {
          d(L);
          return;
        }
        let _ = Date.now();
        (_ - b.current < o && c.length > 0
          ? p((T) => {
              let B = [...T];
              return (
                (B[B.length - 1] = {
                  state: u,
                  timestamp: _,
                  description: W || B[B.length - 1].description,
                }),
                B
              );
            })
          : p((T) => {
              let B = { state: u, timestamp: _, description: W },
                J = [...T, B];
              return J.length > n ? J.slice(J.length - n) : J;
            }),
          m([]),
          d(L),
          (b.current = _));
      },
      [u, i, o, n, c.length]
    ),
    w = useCallback(() => {
      if (c.length === 0) return;
      g.current = true;
      let L = c[c.length - 1];
      return (
        p((W) => W.slice(0, -1)),
        m((W) => [...W, { state: u, timestamp: Date.now() }]),
        d(L.state),
        setTimeout(() => {
          g.current = false;
        }, 0),
        a?.(L.state),
        L.state
      );
    }, [c, u, a]),
    S = useCallback(() => {
      if (f.length === 0) return;
      g.current = true;
      let L = f[f.length - 1];
      return (
        m((W) => W.slice(0, -1)),
        p((W) => [...W, { state: u, timestamp: Date.now() }]),
        d(L.state),
        setTimeout(() => {
          g.current = false;
        }, 0),
        s?.(L.state),
        L.state
      );
    }, [f, u, s]),
    M = useCallback(() => {
      (p([]), m([]));
    }, []),
    P = useCallback(
      (L) => {
        (d(L ?? e), p([]), m([]), (b.current = 0));
      },
      [e]
    ),
    z = useCallback(() => [...c], [c]),
    U = useCallback(() => [...f], [f]),
    $ = useCallback((L) => {
      (d((W) => L(W)),
        p((W) => W.map((_) => ({ ..._, state: L(_.state) }))),
        m((W) => W.map((_) => ({ ..._, state: L(_.state) }))));
    }, []);
  return (
    useEffect(() => {
      if (!r) return;
      let L = (_) => {
          if ((_.ctrlKey || _.metaKey) && _.key === 'z' && !_.shiftKey) {
            (_.preventDefault(), w());
            return;
          }
          if (
            ((_.ctrlKey || _.metaKey) && _.key === 'y') ||
            ((_.ctrlKey || _.metaKey) && _.key === 'z' && _.shiftKey)
          ) {
            (_.preventDefault(), S());
            return;
          }
        },
        W = l?.current || document;
      return (
        W.addEventListener('keydown', L),
        () => {
          W.removeEventListener('keydown', L);
        }
      );
    }, [r, w, S, l]),
    {
      state: u,
      canUndo: c.length > 0,
      canRedo: f.length > 0,
      undoCount: c.length,
      redoCount: f.length,
      push: x,
      undo: w,
      redo: S,
      clear: M,
      reset: P,
      getUndoStack: z,
      getRedoStack: U,
      transformAll: $,
    }
  );
}
function Cd(e, t = {}) {
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
  return ag(e, { ...t, isEqual: n });
}
var vn = new PluginKey('suggestionMode'),
  Bi = 'suggestionModeApplied',
  cg = Date.now();
function Ai(e) {
  return { revisionId: cg++, author: e.author, date: new Date().toISOString() };
}
function Qa(e, t, n, o) {
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
function Rd(e, t, n, o, r, i, a) {
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
  let l = Qa(t, n, 'deletion', a.author) || Ai(a);
  for (let u = s.length - 1; u >= 0; u--) {
    let d = s[u];
    d.isOwnInsert ? e.delete(d.from, d.to) : e.addMark(d.from, d.to, i.create(l));
  }
}
function Td(e, t, n, o, r) {
  let i = e.state.schema.marks.insertion;
  if (!i) return false;
  let a = e.state.tr;
  a.setMeta(Bi, true);
  let s = Qa(e.state.doc, t, 'insertion', r.author) || Ai(r);
  if (t !== n) {
    let u = e.state.schema.marks.deletion;
    u && Rd(a, e.state.doc, t, n, i, u, r);
  }
  let l = a.mapping.map(n);
  return (
    a.insertText(o, l, l),
    a.addMark(l, l + o.length, i.create(s)),
    e.dispatch(a.scrollIntoView()),
    true
  );
}
function vd(e, t, n) {
  let o = vn.getState(e);
  if (!o?.active) return false;
  let { $from: r, $to: i, empty: a } = e.selection,
    s = e.schema.marks.insertion,
    l = e.schema.marks.deletion;
  if (!s || !l) return false;
  if (!t) return true;
  let u = e.tr;
  if ((u.setMeta(Bi, true), !a)) {
    Rd(u, e.doc, r.pos, i.pos, s, l, o);
    let x = u.mapping.map(i.pos);
    return (u.setSelection(TextSelection.near(u.doc.resolve(x))), t(u.scrollIntoView()), true);
  }
  let d = n === 'backward',
    c = d ? r.pos - 1 : r.pos,
    p = d ? r.pos : r.pos + 1;
  if (c < 0 || p > e.doc.content.size) return true;
  let m = e.doc.resolve(c).nodeAfter;
  if (!m?.isText) return false;
  let b = m.marks.some((x) => x.type === s && x.attrs.author === o.author);
  if (m.marks.some((x) => x.type === l)) {
    let x = d ? c : p;
    u.setSelection(TextSelection.near(u.doc.resolve(x)));
  } else if (b) u.delete(c, p);
  else {
    let x = Qa(e.doc, c, 'deletion', o.author) || Ai(o);
    u.addMark(c, p, l.create(x));
    let w = d ? c : p;
    u.setSelection(TextSelection.near(u.doc.resolve(w)));
  }
  return (t(u.scrollIntoView()), true);
}
function Pd(e = false, t = 'User') {
  return new Plugin({
    key: vn,
    state: {
      init() {
        return { active: e, author: t };
      },
      apply(n, o) {
        let r = n.getMeta(vn);
        return r ? { ...o, ...r } : o;
      },
    },
    props: {
      handleDOMEvents: {
        beforeinput(n, o) {
          let r = vn.getState(n.state);
          if (!r?.active) return false;
          if (o.inputType === 'insertText' && o.data) {
            o.preventDefault();
            let { from: i, to: a } = n.state.selection;
            return Td(n, i, a, o.data, r);
          }
          return false;
        },
      },
      handleKeyDown(n, o) {
        return vn.getState(n.state)?.active
          ? o.key === 'Backspace'
            ? vd(n.state, n.dispatch, 'backward')
            : o.key === 'Delete'
              ? vd(n.state, n.dispatch, 'forward')
              : false
          : false;
      },
      handleTextInput(n, o, r, i) {
        let a = vn.getState(n.state);
        return a?.active ? Td(n, o, r, i, a) : false;
      },
    },
    appendTransaction(n, o, r) {
      let i = vn.getState(r);
      if (!i?.active) return null;
      let a = n.find((c) => c.docChanged && !c.getMeta(Bi));
      if (!a) return null;
      let s = r.schema.marks.insertion;
      if (!s) return null;
      let l = Ai(i),
        u = r.tr;
      u.setMeta(Bi, true);
      let d = r.schema.marks.deletion;
      return (
        a.steps.forEach((c) => {
          c.getMap().forEach((f, m, b, g) => {
            g > b &&
              r.doc.nodesBetween(b, g, (x, w) => {
                if (!x.isText) return;
                if (!x.marks.some((M) => M.type === s || (d && M.type === d))) {
                  let M = Math.max(w, b),
                    P = Math.min(w + x.nodeSize, g);
                  u.addMark(M, P, s.create(l));
                }
              });
          });
        }),
        u.steps.length > 0 ? u : null
      );
    },
  });
}
function Md(e, t, n, o) {
  if (n) {
    let r = { active: e };
    o !== void 0 && (r.author = o);
    let i = t.tr.setMeta(vn, r);
    n(i);
  }
  return true;
}
var yg = {
  position: 'fixed',
  left: '-9999px',
  top: '0',
  opacity: 0,
  zIndex: -1,
  pointerEvents: 'none',
  userSelect: 'none',
  overflowAnchor: 'none',
};
function Ld(e, t, n, o = []) {
  let r = n?.getSchema() ?? xe,
    i = e ? Er(e, { styles: t ?? void 0 }) : Fr(),
    a = [...o, ...(n?.getPlugins() ?? [])];
  return EditorState.create({ doc: i, schema: r, plugins: a });
}
function xg(e, t) {
  return t ? Lr(e.doc, t) : null;
}
var Sg = forwardRef(function (t, n) {
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
      x = useRef(o),
      w = useRef(false),
      S = useRef(null),
      M = useRef(false),
      P = useRef(l),
      z = useRef(u),
      U = useRef(p),
      $ = useRef(f),
      L = useRef(m);
    ((P.current = l),
      (z.current = u),
      (U.current = p),
      ($.current = f),
      (L.current = m),
      (x.current = o));
    let W = useCallback(() => {
        if (!b.current || w.current) return;
        let T = {
          state: Ld(o, r, c, d),
          editable: () => !s,
          dispatchTransaction: (B) => {
            if (!g.current || w.current) return;
            let J = g.current.state.apply(B);
            (g.current.updateState(J),
              P.current?.(B, J),
              (B.selectionSet || B.docChanged) && z.current?.(J));
          },
          handleKeyDown: (B, J) => L.current?.(B, J) ?? false,
          handleDOMEvents: { focus: () => false, blur: () => false },
        };
        ((g.current = new EditorView(b.current, T)), U.current?.(g.current));
      }, [o, r, d, c, s]),
      _ = useCallback(() => {
        g.current &&
          !w.current &&
          ((w.current = true),
          $.current?.(),
          g.current.destroy(),
          (g.current = null),
          (w.current = false));
      }, []);
    return (
      useEffect(() => (W(), () => _()), []),
      useEffect(() => {
        if (!g.current || w.current) return;
        let T = ((J) => {
          if (!J) return 'empty';
          let he = J.package?.properties;
          return `${he?.created || ''}-${he?.modified || ''}-${he?.title || ''}`;
        })(o);
        if (M.current && T === S.current) return;
        ((M.current = true), (S.current = T));
        let B = Ld(o, r, c, d);
        (g.current.updateState(B), z.current?.(B));
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
            return g.current ? xg(g.current.state, x.current) : null;
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
          setSelection(K, T) {
            if (!g.current) return;
            let { state: B, dispatch: J } = g.current,
              he = B.doc.resolve(K),
              ue = T !== void 0 ? B.doc.resolve(T) : he,
              Ee = TextSelection.between(he, ue);
            J(B.tr.setSelection(Ee));
          },
          setNodeSelection(K) {
            if (!g.current) return;
            let { state: T, dispatch: B } = g.current;
            try {
              let J = NodeSelection.create(T.doc, K);
              B(T.tr.setSelection(J));
            } catch {
              this.setSelection(K);
            }
          },
          setCellSelection(K, T) {
            if (!g.current) return;
            let { state: B, dispatch: J } = g.current;
            try {
              let he = CellSelection.create(B.doc, K, T);
              J(B.tr.setSelection(he));
            } catch {
              this.setSelection(K, T);
            }
          },
          scrollToSelection() {},
        }),
        []
      ),
      jsx('div', {
        ref: b,
        className: 'paged-editor__hidden-pm',
        style: { ...yg, width: a > 0 ? `${a}px` : void 0 },
      })
    );
  }),
  Bd = memo(Sg);
var Tg = '#000',
  vg = 'rgba(66, 133, 244, 0.3)',
  Rg = 2,
  Pg = 530,
  Mg = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: 10,
    overflow: 'hidden',
  },
  Eg = (e, t, n, o) => ({
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
  Ig = (e, t) => ({
    position: 'absolute',
    left: e.x,
    top: e.y,
    width: e.width,
    height: e.height,
    backgroundColor: t,
    pointerEvents: 'none',
  }),
  Fg = ({ position: e, color: t, width: n, blinkInterval: o, isFocused: r }) => {
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
      jsx('div', { style: Eg(e, t, n, i), 'data-testid': 'caret' })
    );
  },
  Lg = ({ rect: e, color: t, index: n }) =>
    jsx('div', {
      style: Ig(e, t),
      'data-testid': `selection-rect-${n}`,
      'data-page-index': e.pageIndex,
    }),
  Dd = ({
    selectionRects: e,
    caretPosition: t,
    isFocused: n,
    readOnly: o = false,
    caretColor: r = Tg,
    selectionColor: i = vg,
    caretWidth: a = Rg,
    blinkInterval: s = Pg,
  }) => {
    if (o) return null;
    let l = e.length > 0,
      u = t !== null && !l;
    return jsxs('div', {
      style: Mg,
      'data-testid': 'selection-overlay',
      children: [
        l &&
          e.map((d, c) =>
            jsx(Lg, { rect: d, color: i, index: c }, `sel-${d.pageIndex}-${d.x}-${d.y}-${c}`)
          ),
        u && t && jsx(Fg, { position: t, color: r, width: a, blinkInterval: s, isFocused: n }),
      ],
    });
  };
var ns = 10,
  Rn = ns / 2,
  Uo = 2,
  Od = '#2563eb',
  Nd = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: 15,
    overflow: 'visible',
  },
  Ag = {
    position: 'absolute',
    border: `${Uo}px solid ${Od}`,
    pointerEvents: 'none',
    boxSizing: 'border-box',
  },
  Dg = {
    position: 'absolute',
    width: `${ns}px`,
    height: `${ns}px`,
    backgroundColor: Od,
    border: '1px solid white',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
    boxSizing: 'border-box',
    pointerEvents: 'auto',
    zIndex: 16,
  },
  Hg = {
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
  Ng = { nw: 'nw-resize', ne: 'ne-resize', se: 'se-resize', sw: 'sw-resize' };
function zg(e, t, n, o, r, i) {
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
function $d({
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
    [x, w] = useState(null),
    S = useRef(null),
    M = useRef(null),
    P = useRef(o),
    z = useRef(r),
    U = useRef(i),
    $ = useRef(a),
    L = useRef(s),
    W = useRef(l);
  ((P.current = o),
    (z.current = r),
    (U.current = i),
    ($.current = a),
    (L.current = s),
    (W.current = l));
  let _ = useRef(e),
    K = useRef(t);
  ((_.current = e), (K.current = t));
  let T = useCallback(() => {
    if (!e || !M.current) {
      w(null);
      return;
    }
    let R = M.current.offsetParent;
    if (!R) {
      w(null);
      return;
    }
    let F = R.getBoundingClientRect(),
      k = e.element.getBoundingClientRect();
    w({
      left: (k.left - F.left) / t,
      top: (k.top - F.top) / t,
      width: k.width / t,
      height: k.height / t,
    });
  }, [e, t]);
  (useEffect(() => {
    T();
  }, [T]),
    useEffect(() => {
      if (!e) return;
      let R =
        M.current?.closest('[style*="overflow"]') ?? M.current?.closest('.paged-editor__container');
      if (!R) return;
      let F = () => {
        (S.current && cancelAnimationFrame(S.current), (S.current = requestAnimationFrame(T)));
      };
      return (
        R.addEventListener('scroll', F, { passive: true }),
        window.addEventListener('resize', F, { passive: true }),
        () => {
          (R.removeEventListener('scroll', F),
            window.removeEventListener('resize', F),
            S.current && cancelAnimationFrame(S.current));
        }
      );
    }, [e, T]));
  let B = useCallback(
      (R, F) => {
        if (!e || !x) return;
        (F.preventDefault(), F.stopPropagation());
        let k = x.width,
          C = x.height,
          I = F.clientX,
          A = F.clientY,
          V = Math.round(k),
          q = Math.round(C);
        (d(true), m(V), g(q), z.current?.());
        let O = (G) => {
            let be = K.current,
              E = (G.clientX - I) / be,
              D = (G.clientY - A) / be,
              H = !G.shiftKey,
              ae = zg(R, E, D, k, C, H);
            ((V = Math.round(ae.width)),
              (q = Math.round(ae.height)),
              m(V),
              g(q),
              w((pe) => {
                if (!pe) return pe;
                let fe = { ...pe };
                return (
                  R.includes('w') && (fe.left = pe.left + (pe.width - ae.width)),
                  R.includes('n') && (fe.top = pe.top + (pe.height - ae.height)),
                  (fe.width = ae.width),
                  (fe.height = ae.height),
                  fe
                );
              }));
          },
          j = () => {
            (window.removeEventListener('mousemove', O),
              window.removeEventListener('mouseup', j),
              d(false));
            let G = _.current;
            (G && P.current?.(G.pmPos, V, q), U.current?.());
          };
        (window.addEventListener('mousemove', O), window.addEventListener('mouseup', j));
      },
      [e, x]
    ),
    J = useCallback(
      (R) => {
        if (!e || !x) return;
        (R.preventDefault(), R.stopPropagation());
        let F = 4,
          k = R.clientX,
          C = R.clientY,
          I = false,
          A = null,
          V = (O) => {
            let j = O.clientX - k,
              G = O.clientY - C;
            (!I && Math.sqrt(j * j + G * G) < F) ||
              (I ||
                ((I = true),
                p(true),
                L.current?.(),
                (A = document.createElement('div')),
                (A.style.cssText =
                  'position: fixed; pointer-events: none; z-index: 10000; opacity: 0.5; border: 2px dashed #2563eb; border-radius: 4px; background: rgba(37, 99, 235, 0.1);'),
                (A.style.width = `${x.width}px`),
                (A.style.height = `${x.height}px`),
                document.body.appendChild(A)),
              A &&
                ((A.style.left = `${O.clientX - x.width / 2}px`),
                (A.style.top = `${O.clientY - x.height / 2}px`)));
          },
          q = (O) => {
            if (
              (window.removeEventListener('mousemove', V),
              window.removeEventListener('mouseup', q),
              A && (A.remove(), (A = null)),
              p(false),
              I)
            ) {
              let j = _.current;
              (j && $.current?.(j.pmPos, O.clientX, O.clientY), W.current?.());
            }
          };
        (window.addEventListener('mousemove', V), window.addEventListener('mouseup', q));
      },
      [e, x]
    );
  if (!!!(e && x && n))
    return jsx('div', {
      ref: M,
      style: { ...Nd, visibility: 'hidden' },
      className: 'image-selection-overlay',
    });
  let { left: ue, top: Ee, width: we, height: Re } = x;
  return jsxs('div', {
    ref: M,
    style: Nd,
    className: 'image-selection-overlay',
    children: [
      jsx('div', {
        style: { ...Ag, left: ue - Uo, top: Ee - Uo, width: we + Uo * 2, height: Re + Uo * 2 },
      }),
      jsx('div', {
        style: {
          position: 'absolute',
          left: ue,
          top: Ee,
          width: we,
          height: Re,
          cursor: c ? 'grabbing' : 'grab',
          pointerEvents: 'auto',
          zIndex: 15,
        },
        onMouseDown: J,
      }),
      jsx(Hi, { handle: 'nw', style: { left: ue - Rn, top: Ee - Rn }, onMouseDown: B }),
      jsx(Hi, { handle: 'ne', style: { left: ue + we - Rn, top: Ee - Rn }, onMouseDown: B }),
      jsx(Hi, { handle: 'se', style: { left: ue + we - Rn, top: Ee + Re - Rn }, onMouseDown: B }),
      jsx(Hi, { handle: 'sw', style: { left: ue - Rn, top: Ee + Re - Rn }, onMouseDown: B }),
      u &&
        jsxs('div', {
          style: { ...Hg, left: ue + we / 2, top: Ee + Re + 12 },
          children: [f, ' \xD7 ', b],
        }),
    ],
  });
}
function Hi({ handle: e, style: t, onMouseDown: n }) {
  return jsx('div', {
    style: { ...Dg, ...t, cursor: Ng[e] },
    onMouseDown: (o) => n(e, o),
    'data-handle': e,
  });
}
function Og(e, t, n, o) {
  let r = e - t - n,
    i = (o.count - 1) * o.gap;
  return (r - i) / o.count;
}
function os(e) {
  let { pageSize: t, margins: n, columns: o = { count: 1, gap: 0 } } = e,
    r = [],
    i = [],
    a = n.top,
    s = t.h - n.bottom;
  if (s - a <= 0) throw new Error('Paginator: page size and margins yield no content area');
  let u = Og(t.w, n.left, n.right, o);
  function d(M) {
    return n.left + M * (u + o.gap);
  }
  function c() {
    let M = r.length + 1,
      P = e.footnoteReservedHeights?.get(M) ?? 0,
      z = s - P,
      U = {
        number: M,
        fragments: [],
        margins: { ...n },
        size: { ...t },
        footnoteReservedHeight: P > 0 ? P : void 0,
      },
      $ = {
        page: U,
        cursorY: a,
        columnIndex: 0,
        topMargin: a,
        contentBottom: z,
        trailingSpacing: 0,
      };
    return (r.push(U), i.push($), e.onNewPage && e.onNewPage($), $);
  }
  function p() {
    return i.length === 0 ? c() : i[i.length - 1];
  }
  function f(M) {
    return M.contentBottom - M.cursorY;
  }
  function m(M, P) {
    let z = P || p();
    return f(z) >= M;
  }
  function b(M) {
    return M.columnIndex < o.count - 1
      ? ((M.columnIndex += 1), (M.cursorY = M.topMargin), (M.trailingSpacing = 0), M)
      : c();
  }
  function g(M) {
    let P = p(),
      z = Number.isFinite(M) && M > 0 ? M : 0,
      U = P.contentBottom - P.topMargin;
    if (z > U) return (P.cursorY !== P.topMargin && (P = b(P)), P);
    for (; !m(z, P); ) P = b(P);
    return P;
  }
  function x(M, P, z = 0, U = 0) {
    let $ = Math.max(z, p().trailingSpacing),
      L = $ + P,
      W = g(L),
      K = W.cursorY === W.topMargin ? 0 : $,
      T = d(W.columnIndex),
      B = W.cursorY + K;
    return (
      (M.x = T),
      (M.y = B),
      W.page.fragments.push(M),
      (W.cursorY = B + P),
      (W.trailingSpacing = U),
      { state: W, x: T, y: B }
    );
  }
  function w() {
    return c();
  }
  function S() {
    let M = p();
    return b(M);
  }
  return {
    pages: r,
    states: i,
    columnWidth: u,
    getCurrentState: p,
    getAvailableHeight: () => f(p()),
    fits: (M) => m(M),
    ensureFits: g,
    addFragment: x,
    forcePageBreak: w,
    forceColumnBreak: S,
    getColumnX: d,
  };
}
function rs(e) {
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
function is(e, t, n) {
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
function as(e) {
  let t = new Set();
  for (let n of e.values())
    for (let o = 1; o < n.memberIndices.length; o++) t.add(n.memberIndices[o]);
  return t;
}
function ss(e) {
  return e.kind !== 'paragraph' ? false : e.attrs?.pageBreakBefore === true;
}
var $g = { w: 816, h: 1056 },
  uo = { top: 96, right: 96, bottom: 96, left: 96 };
function Wd(e) {
  return e.attrs?.spacing?.before ?? 0;
}
function _d(e) {
  return e.attrs?.spacing?.after ?? 0;
}
function Wg(e) {
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
function Ni(e, t, n = {}) {
  if (e.length !== t.length)
    throw new Error(
      `layoutDocument: expected one measure per block (blocks=${e.length}, measures=${t.length})`
    );
  let o = n.pageSize ?? $g,
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
  let s = os({
    pageSize: o,
    margins: i,
    columns: n.columns,
    footnoteReservedHeights: n.footnoteReservedHeights,
  });
  Wg(e);
  let l = rs(e),
    u = as(l);
  for (let d = 0; d < e.length; d++) {
    let c = e[d],
      p = t[d];
    ss(c) && s.forcePageBreak();
    let f = l.get(d);
    if (f && !u.has(d)) {
      let m = is(f, e, t),
        b = s.getCurrentState(),
        g = s.getAvailableHeight(),
        x = b.contentBottom - b.topMargin;
      m <= x && m > g && b.page.fragments.length > 0 && s.forcePageBreak();
    }
    switch (c.kind) {
      case 'paragraph':
        _g(c, p, s, a);
        break;
      case 'table':
        c.floating ? jg(c, p, s, a) : Vg(c, p, s);
        break;
      case 'image':
        Ug(c, p, s);
        break;
      case 'pageBreak':
        s.forcePageBreak();
        break;
      case 'columnBreak':
        s.forceColumnBreak();
        break;
      case 'sectionBreak':
        Kg(c, s);
        break;
    }
  }
  return (
    s.pages.length === 0 && s.getCurrentState(),
    { pageSize: o, pages: s.pages, columns: n.columns, pageGap: n.pageGap }
  );
}
function _g(e, t, n, o) {
  if (t.kind !== 'paragraph') throw new Error('layoutParagraph: expected paragraph measure');
  let r = t.lines;
  if (r.length === 0) {
    let l = Wd(e),
      u = _d(e),
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
  let i = Wd(e),
    a = _d(e),
    s = 0;
  for (; s < r.length; ) {
    let l = n.getCurrentState(),
      u = n.getAvailableHeight(),
      d = 0,
      c = 0;
    for (let w = s; w < r.length; w++) {
      let S = r[w].lineHeight,
        M = d + S;
      if ((s === 0 && w === s ? M + i : M) <= u || c === 0) ((d = M), c++);
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
      x = n.addFragment(g, d, m, b);
    ((g.y = x.y), (s += c), s < r.length && n.ensureFits(r[s].lineHeight));
  }
}
function Vg(e, t, n) {
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
function jg(e, t, n, o) {
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
    let S = i.tblpXSpec;
    S === 'left' || S === 'inside'
      ? (f = c)
      : S === 'right' || S === 'outside'
        ? (f = c + o - l)
        : S === 'center' && (f = c + (o - l) / 2);
  } else
    e.justification === 'center'
      ? (f = c + (o - l) / 2)
      : e.justification === 'right' && (f = c + o - l);
  let m = r.cursorY,
    b = false;
  if (i?.tblpY !== void 0) ((m = p + i.tblpY), (b = true));
  else if (i?.tblpYSpec) {
    b = true;
    let S = i.tblpYSpec;
    S === 'top'
      ? (m = p)
      : S === 'bottom'
        ? (m = p + d - u)
        : S === 'center' && (m = p + (d - u) / 2);
  }
  b || (m = n.ensureFits(u).cursorY);
  let g = s.left,
    x = s.left + o - l;
  Number.isFinite(x) && (f = Math.max(g, Math.min(f, x)));
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
function Ug(e, t, n) {
  if (t.kind !== 'image') throw new Error('layoutImage: expected image measure');
  if (e.anchor?.isAnchored) {
    Gg(e, t, n);
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
function Gg(e, t, n) {
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
function Kg(e, t) {
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
var qg = 'Calibri';
function ls(e, t, n) {
  if (!n || t <= n) return { width: e, height: t };
  let o = n / t;
  return { width: Math.round(e * o), height: n };
}
var Yg = 11;
function ut(e) {
  return (e / 1440) * 96;
}
var Xg = 0;
function po() {
  return `block-${++Xg}`;
}
function Zg(e, t) {
  let n = [];
  for (let o = 0; o <= t; o += 1) {
    let r = e[o] ?? 0;
    if (r <= 0) break;
    n.push(r);
  }
  return n.length === 0 ? '1.' : `${n.join('.')}.`;
}
function zi(e, t) {
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
function Jg(e, t, n) {
  let o = [],
    r = t + 1,
    i = n.theme;
  return (
    e.forEach((a, s) => {
      let l = r + s;
      if (a.isText && a.text) {
        let u = zi(a.marks, i),
          d = { kind: 'text', text: a.text, ...u, pmStart: l, pmEnd: l + a.nodeSize };
        o.push(d);
      } else if (a.type.name === 'hardBreak') {
        let u = { kind: 'lineBreak', pmStart: l, pmEnd: l + a.nodeSize };
        o.push(u);
      } else if (a.type.name === 'tab') {
        let d = { kind: 'tab', ...zi(a.marks, i), pmStart: l, pmEnd: l + a.nodeSize };
        o.push(d);
      } else if (a.type.name === 'image') {
        let u = a.attrs,
          d = ls(u.width || 100, u.height || 100, n.pageContentHeight),
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
            let f = zi(d.marks, i),
              m = { kind: 'text', text: d.text, ...f, pmStart: p, pmEnd: p + d.nodeSize };
            o.push(m);
          } else if (d.type.name === 'hardBreak') {
            let f = { kind: 'lineBreak', pmStart: p, pmEnd: p + d.nodeSize };
            o.push(f);
          } else if (d.type.name === 'tab') {
            let m = { kind: 'tab', ...zi(d.marks, i), pmStart: p, pmEnd: p + d.nodeSize };
            o.push(m);
          } else if (d.type.name === 'image') {
            let f = d.attrs,
              m = ls(f.width || 100, f.height || 100, n.pageContentHeight),
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
function Qg(e) {
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
    e.spaceBefore != null && (t.spacing.before = ut(e.spaceBefore)),
    e.spaceAfter != null && (t.spacing.after = ut(e.spaceAfter)),
    e.lineSpacing != null &&
      (e.lineSpacingRule === 'exact' || e.lineSpacingRule === 'atLeast'
        ? ((t.spacing.line = ut(e.lineSpacing)),
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
      n != null && (t.indent.left = ut(n)),
      e.indentRight != null && (t.indent.right = ut(e.indentRight)),
      o != null && (r ? (t.indent.hanging = Math.abs(ut(o))) : (t.indent.firstLine = ut(o)))),
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
      (t.tabs = e.tabs.map((a) => ({ val: eh(a.alignment), pos: a.position, leader: a.leader }))),
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
function eh(e) {
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
function Vd(e, t, n) {
  let o = e.attrs,
    r = Jg(e, t, n),
    i = Qg(o);
  return { kind: 'paragraph', id: po(), runs: r, attrs: i, pmStart: t, pmEnd: t + e.nodeSize };
}
function th(e) {
  return Math.max(1, Math.round((e / 8) * 1.333));
}
var nh = {
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
function oh(e) {
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
    let a = { style: nh[i.style] || 'solid' };
    (i.color?.rgb && (a.color = `#${i.color.rgb}`), i.size && (a.width = th(i.size)), (n[r] = a));
  }
  return Object.keys(n).length > 0 ? n : void 0;
}
function rh(e, t, n) {
  let o = [],
    r = t + 1;
  e.forEach((l) => {
    (l.type.name === 'paragraph'
      ? o.push(Vd(l, r, n))
      : l.type.name === 'table' && o.push(jd(l, r, n)),
      (r += l.nodeSize));
  });
  let i = e.attrs,
    a = i.margins,
    s = {
      top: a?.top != null ? ut(a.top) : 1,
      right: a?.right != null ? ut(a.right) : 7,
      bottom: a?.bottom != null ? ut(a.bottom) : 1,
      left: a?.left != null ? ut(a.left) : 7,
    };
  return {
    id: po(),
    blocks: o,
    colSpan: i.colspan,
    rowSpan: i.rowspan,
    width: i.width ? ut(i.width) : void 0,
    verticalAlign: i.verticalAlign,
    background: i.backgroundColor ? `#${i.backgroundColor}` : void 0,
    borders: oh(i),
    padding: s,
  };
}
function ih(e, t, n) {
  let o = [],
    r = t + 1;
  e.forEach((a) => {
    ((a.type.name === 'tableCell' || a.type.name === 'tableHeader') && o.push(rh(a, r, n)),
      (r += a.nodeSize));
  });
  let i = e.attrs;
  return {
    id: po(),
    cells: o,
    height: i.height ? ut(i.height) : void 0,
    heightRule: i.heightRule ?? void 0,
    isHeader: i.isHeader,
  };
}
function jd(e, t, n) {
  let o = [],
    r = t + 1;
  e.forEach((p) => {
    (p.type.name === 'tableRow' && o.push(ih(p, r, n)), (r += p.nodeSize));
  });
  let a = e.attrs.columnWidths?.map(ut),
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
          tblpX: d.tblpX !== void 0 ? ut(d.tblpX) : void 0,
          tblpXSpec: d.tblpXSpec,
          tblpY: d.tblpY !== void 0 ? ut(d.tblpY) : void 0,
          tblpYSpec: d.tblpYSpec,
          topFromText: d.topFromText !== void 0 ? ut(d.topFromText) : void 0,
          bottomFromText: d.bottomFromText !== void 0 ? ut(d.bottomFromText) : void 0,
          leftFromText: d.leftFromText !== void 0 ? ut(d.leftFromText) : void 0,
          rightFromText: d.rightFromText !== void 0 ? ut(d.rightFromText) : void 0,
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
function ah(e, t, n) {
  let o = e.attrs,
    r = o.wrapType,
    i = r === 'behind' || r === 'inFront',
    a = ls(o.width || 100, o.height || 100, n);
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
function Ud(e, t = {}) {
  let n = { ...t, defaultFont: t.defaultFont ?? qg, defaultSize: t.defaultSize ?? Yg },
    o = [],
    r = 0,
    i = new Map();
  return (
    e.forEach((a, s) => {
      let l = r + s;
      switch (a.type.name) {
        case 'paragraph':
          {
            let u = Vd(a, l, n),
              d = a.attrs;
            if (d.numPr && !d.listMarker) {
              let c = d.numPr.numId;
              if (c == null || c === 0) break;
              let p = d.numPr.ilvl ?? 0,
                f = i.get(c) ?? new Array(9).fill(0);
              f[p] = (f[p] ?? 0) + 1;
              for (let b = p + 1; b < f.length; b += 1) f[b] = 0;
              i.set(c, f);
              let m = d.listIsBullet ? '\u2022' : Zg(f, p);
              u.attrs = { ...u.attrs, listMarker: m };
            }
            o.push(u);
          }
          break;
        case 'table':
          o.push(jd(a, l, n));
          break;
        case 'image':
          o.push(ah(a, l, n.pageContentHeight));
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
var fn = 11,
  Go = 'Calibri',
  Oi = 1,
  fo = 0.5;
function Gd(e) {
  return {
    fontFamily: e.fontFamily ?? Go,
    fontSize: e.fontSize ?? fn,
    bold: e.bold,
    italic: e.italic,
    letterSpacing: e.letterSpacing,
  };
}
function Xd(e, t, n) {
  let o = h$1(e),
    r = n?.ascent ?? o * 0.8,
    i = n?.descent ?? o * 0.2,
    a = n?.singleLineRatio ?? 1.15,
    s = o * a,
    l;
  if (t?.lineRule === 'exact' && t.line !== void 0) l = t.line;
  else if (t?.lineRule === 'atLeast' && t.line !== void 0) {
    let u = s * Oi;
    l = Math.max(t.line, u);
  } else
    t?.line !== void 0 && t?.lineUnit === 'multiplier'
      ? (l = s * t.line)
      : t?.line !== void 0 && t?.lineUnit === 'px'
        ? (l = t.line)
        : (l = s * Oi);
  return { ascent: r, descent: i, lineHeight: l };
}
function Kd(e, t, n) {
  let o = d$2({ fontSize: e, fontFamily: n ?? Go });
  return Xd(e, t, o);
}
function qd(e) {
  return e.kind === 'text';
}
function lh(e) {
  return e.kind === 'tab';
}
function ch(e) {
  return e.kind === 'image';
}
function dh(e) {
  return e.kind === 'lineBreak';
}
function uh(e) {
  return e.kind === 'field';
}
function ph(e) {
  return !e.text || e.text.length === 0;
}
function fh(e) {
  let t = [];
  for (let n = 0; n < e.length; n++) {
    let o = e[n];
    (o === ' ' || o === '-' || o === '	') && t.push(n + 1);
  }
  return t;
}
var mh = 48;
function Yd(e, t, n, o) {
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
function Ko(e, t, n) {
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
    b = h$1(fn) * Oi,
    g = Yd(0, b, a, s),
    x = Math.max(1, f - g.leftMargin - g.rightMargin),
    w = [];
  if (o.length === 0) {
    let L = r?.defaultFontSize ?? fn,
      W = r?.defaultFontFamily ?? Go,
      _ = Kd(L, i, W);
    return (
      w.push({ fromRun: 0, fromChar: 0, toRun: 0, toChar: 0, width: 0, ..._ }),
      { kind: 'paragraph', lines: w, totalHeight: _.lineHeight }
    );
  }
  if (o.length === 1 && qd(o[0]) && ph(o[0])) {
    let L = o[0],
      W = L.fontSize ?? r?.defaultFontSize ?? fn,
      _ = L.fontFamily ?? r?.defaultFontFamily ?? Go,
      K = Kd(W, i, _);
    return (
      w.push({ fromRun: 0, fromChar: 0, toRun: 0, toChar: 0, width: 0, ...K }),
      { kind: 'paragraph', lines: w, totalHeight: K.lineHeight }
    );
  }
  let S = {
      fromRun: 0,
      fromChar: 0,
      toRun: 0,
      toChar: 0,
      width: 0,
      maxFontSize: fn,
      maxFontMetrics: null,
      maxImageHeightPx: 0,
      availableWidth: x,
      leftOffset: g.leftMargin,
      rightOffset: g.rightMargin,
    },
    M = () => {
      let L = Xd(S.maxFontSize, i, S.maxFontMetrics),
        W = { ...L };
      S.maxImageHeightPx > W.lineHeight &&
        ((W.lineHeight = S.maxImageHeightPx),
        (W.ascent = S.maxImageHeightPx * 0.8),
        (W.descent = S.maxImageHeightPx * 0.2));
      let _ = {
        fromRun: S.fromRun,
        fromChar: S.fromChar,
        toRun: S.toRun,
        toChar: S.toChar,
        width: S.width,
        ...W,
      };
      (S.leftOffset > 0 && (_.leftOffset = S.leftOffset),
        S.rightOffset > 0 && (_.rightOffset = S.rightOffset),
        w.push(_),
        (m += L.lineHeight));
    },
    P = (L, W) => {
      M();
      let _ = h$1(fn) * Oi,
        K = Yd(m, _, a, s),
        T = Math.max(1, p - K.leftMargin - K.rightMargin);
      S = {
        fromRun: L,
        fromChar: W,
        toRun: L,
        toChar: W,
        width: 0,
        maxFontSize: fn,
        maxFontMetrics: null,
        maxImageHeightPx: 0,
        availableWidth: T,
        leftOffset: K.leftMargin,
        rightOffset: K.rightMargin,
      };
    },
    z = (L) => {
      let W = L.fontSize ?? fn;
      (!S.maxFontMetrics || W > S.maxFontSize) &&
        ((S.maxFontSize = W), (S.maxFontMetrics = d$2(L)));
    };
  for (let L = 0; L < o.length; L++) {
    let W = o[L];
    if (dh(W)) {
      ((S.toRun = L), (S.toChar = 0), P(L + 1, 0));
      continue;
    }
    if (lh(W)) {
      let _ = Gd(W);
      z(_);
      let K = W.width ?? mh;
      (S.width + K > S.availableWidth + fo && (P(L, 0), z(_)),
        (S.width += K),
        (S.toRun = L),
        (S.toChar = 1));
      continue;
    }
    if (ch(W)) {
      let _ = W.wrapType,
        K = W.displayMode === 'float' || (_ && ['square', 'tight', 'through'].includes(_));
      if (W.position && K) {
        ((S.toRun = L), (S.toChar = 1));
        continue;
      }
      if (_ === 'topAndBottom' || W.displayMode === 'block') {
        S.width > 0 && P(L, 0);
        let J = W.height,
          he = W.distTop ?? 6,
          ue = W.distBottom ?? 6;
        ((S.toRun = L), (S.toChar = 1), (S.maxImageHeightPx = J + he + ue), P(L + 1, 0));
        continue;
      }
      let T = W.width,
        B = W.height;
      (B > S.maxImageHeightPx && (S.maxImageHeightPx = B),
        S.width + T > S.availableWidth + fo && P(L, 0),
        (S.width += T),
        (S.toRun = L),
        (S.toChar = 1));
      continue;
    }
    if (uh(W)) {
      let _ = W.fallback || '1',
        K = {
          fontFamily: W.fontFamily ?? Go,
          fontSize: W.fontSize ?? fn,
          bold: W.bold,
          italic: W.italic,
        };
      z(K);
      let T = e$2(_, K);
      (S.width > 0 && S.width + T > S.availableWidth + fo && (P(L, 0), z(K)),
        (S.width += T),
        (S.toRun = L),
        (S.toChar = 1));
      continue;
    }
    if (qd(W)) {
      let _ = W,
        K = _.text,
        T = Gd(_);
      if ((z(T), !K || K.length === 0)) {
        ((S.toRun = L), (S.toChar = 0));
        continue;
      }
      let B = fh(K),
        J = 0;
      for (; J < K.length; ) {
        let he = K.length;
        for (let we of B)
          if (we > J) {
            he = we;
            break;
          }
        let ue = K.slice(J, he),
          Ee = e$2(ue, T);
        if (Ee > S.availableWidth + fo) {
          S.width > 0 && (P(L, J), z(T));
          let { charWidths: we } = f$2(ue, T),
            Re = 0;
          for (; Re < ue.length; ) {
            let R = 0,
              F = Re;
            for (; F < ue.length; ) {
              let k = we[F] ?? 0;
              if (R + k > S.availableWidth + fo) break;
              ((R += k), (F += 1));
            }
            (F === Re && ((F = Math.min(ue.length, Re + 1)), (R = we[Re] ?? 0)),
              (S.width += R),
              (S.toRun = L),
              (S.toChar = J + F),
              (Re = F),
              Re < ue.length && (P(L, J + Re), z(T)));
          }
          J = he;
          continue;
        }
        (S.width > 0 && S.width + Ee > S.availableWidth + fo && (P(L, J), z(T)),
          (S.width += Ee),
          (S.toRun = L),
          (S.toChar = he),
          (J = he));
      }
    }
  }
  M();
  let $ = w.reduce((L, W) => L + W.lineHeight, 0);
  return (
    i?.before && ($ += i.before),
    i?.after && ($ += i.after),
    { kind: 'paragraph', lines: w, totalHeight: $ }
  );
}
var gh = new Map();
function Zd() {
  gh.clear();
}
var hh = new Map();
function Jd() {
  hh.clear();
}
var bh = 5e3,
  yh = bh,
  Mn = new Map();
function cs(e) {
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
function xh() {
  for (; Mn.size > yh; ) {
    let e = Mn.keys().next().value;
    if (e === void 0) break;
    Mn.delete(e);
  }
}
function ds(e, t) {
  let n = cs(e),
    o = Mn.get(n);
  if (o !== void 0 && o.maxWidth === t) return (Mn.delete(n), Mn.set(n, o), o.measure);
}
function us(e, t, n) {
  let o = cs(e);
  (Mn.set(o, { measure: n, maxWidth: t }), xh());
}
function Qd() {
  Mn.clear();
}
function ps() {
  (Zd(), Jd(), Qd());
}
function Sh(e) {
  return {
    fontFamily: e.fontFamily ?? 'Arial',
    fontSize: e.fontSize ?? 12,
    bold: e.bold,
    italic: e.italic,
    letterSpacing: e.letterSpacing,
  };
}
function kh(e, t) {
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
function wh(e, t) {
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
function Ch(e, t, n, o) {
  let r = 0;
  for (let i = n; i < o && i < e.lines.length; i++) {
    let s = e.lines[i].lineHeight;
    if (t >= r && t < r + s) return i;
    r += s;
  }
  return o > n ? Math.min(o - 1, e.lines.length - 1) : null;
}
function Th(e, t, n, o) {
  let { pmStart: r, pmEnd: i } = wh(e, t);
  if (r === void 0 || i === void 0) return { charOffset: 0, pmPosition: e.pmStart ?? 0 };
  let a = e.attrs?.alignment ?? 'left',
    s = 0;
  a === 'center'
    ? (s = Math.max(0, (o - t.width) / 2))
    : a === 'right' && (s = Math.max(0, o - t.width));
  let l = Math.max(0, n - s);
  if (l <= 0) return { charOffset: 0, pmPosition: r };
  let u = kh(e, t);
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
      let b = Sh(f),
        g = f$2(m, b),
        x = d + g.width;
      if (l <= x) {
        let w = l - d,
          S = g$1(w, g.charWidths),
          M = c + S;
        return { charOffset: M, pmPosition: r + M };
      }
      ((d = x), (c += m.length));
    }
  }
  return { charOffset: i - r, pmPosition: i };
}
function eu(e) {
  let { fragment: t, block: n, measure: o, localX: r, localY: i } = e;
  if (t.kind !== 'paragraph' || n.kind !== 'paragraph' || o.kind !== 'paragraph') return null;
  let a = t,
    s = n,
    l = o,
    u = Ch(l, i, a.fromLine, a.toLine);
  if (u === null) return null;
  let d = l.lines[u];
  if (!d) return null;
  let c = 0;
  for (let S = a.fromLine; S < u; S++) c += l.lines[S]?.lineHeight ?? 0;
  let p = s.attrs?.indent,
    f = p?.left ?? 0,
    m = p?.right ?? 0,
    b = Math.max(0, t.width - f - m),
    g = r - f,
    { charOffset: x, pmPosition: w } = Th(s, d, g, b);
  return { pmPosition: w, charOffset: x, lineIndex: u };
}
function vh(e) {
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
  return eu(i)?.pmPosition ?? null;
}
function fs(e, t) {
  if (t) return vh(t);
  if (!e) return null;
  let { fragment: n } = e;
  return n.kind === 'paragraph'
    ? (eu(e)?.pmPosition ?? null)
    : n.kind === 'image'
      ? (n.pmStart ?? null)
      : null;
}
function nu(e, t, n, o = 1) {
  let r = document.elementsFromPoint(t, n),
    i = r.find((d) => d.classList.contains('layout-page'));
  if (!i) return null;
  let a = r.find(
    (d) => d.tagName === 'SPAN' && d.dataset.pmStart !== void 0 && d.dataset.pmEnd !== void 0
  );
  if (a) return ms(a, t);
  let s = r.find((d) => d.classList.contains('layout-empty-run'));
  if (s) {
    let d = s.closest('.layout-paragraph');
    if (d && d.dataset.pmStart) return Number(d.dataset.pmStart);
  }
  let l = r.find((d) => d.classList.contains('layout-paragraph') && d.dataset.pmStart !== void 0);
  if (l && l.dataset.pmStart) {
    let d = tu(l, t, n);
    return d !== null ? d : Number(l.dataset.pmStart);
  }
  let u = r.find((d) => d.classList.contains('layout-table-cell'));
  return u ? tu(u, t, n) : Rh(e, i, t, n);
}
function ms(e, t, n) {
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
function tu(e, t, n) {
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
    if (t >= f.left && t <= f.right) return ms(p, t);
    let m = t < f.left ? f.left - t : t - f.right;
    m < u && ((u = m), (l = p));
  }
  if (!l) return null;
  let d = l.getBoundingClientRect();
  return t < d.left ? Number(l.dataset.pmStart) : Number(l.dataset.pmEnd);
}
function Rh(e, t, n, o, r) {
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
      x = Math.abs(o - g);
    x < l && ((l = x), (s = m));
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
    if (n >= b.left && n <= b.right) return ms(m, n);
    let g = n < b.left ? b.left - n : n - b.right;
    g < c && ((c = g), (d = m));
  }
  if (!d) return null;
  let p = d.getBoundingClientRect();
  return n < p.left ? Number(d.dataset.pmStart) : Number(d.dataset.pmEnd);
}
var En = {
  fragment: 'layout-fragment',
  paragraph: 'layout-fragment-paragraph',
  table: 'layout-fragment-table',
  image: 'layout-fragment-image',
};
function Ph(e) {
  return e.kind === 'paragraph';
}
function Mh(e) {
  return e.kind === 'table';
}
function Eh(e) {
  return e.kind === 'image';
}
function $i(e) {
  ((e.style.position = 'absolute'), (e.style.overflow = 'hidden'));
}
function Ih(e, t, n) {
  let o = n.createElement('div');
  return (
    (o.className = `${En.fragment} ${En.paragraph}`),
    $i(o),
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
function Fh(e, t, n) {
  let o = n.createElement('div');
  return (
    (o.className = `${En.fragment} ${En.table}`),
    $i(o),
    (o.dataset.blockId = String(e.blockId)),
    (o.dataset.fromRow = String(e.fromRow)),
    (o.dataset.toRow = String(e.toRow)),
    e.pmStart !== void 0 && (o.dataset.pmStart = String(e.pmStart)),
    e.pmEnd !== void 0 && (o.dataset.pmEnd = String(e.pmEnd)),
    o
  );
}
function Lh(e, t, n) {
  let o = n.createElement('div');
  return (
    (o.className = `${En.fragment} ${En.image}`),
    $i(o),
    (o.dataset.blockId = String(e.blockId)),
    e.pmStart !== void 0 && (o.dataset.pmStart = String(e.pmStart)),
    e.pmEnd !== void 0 && (o.dataset.pmEnd = String(e.pmEnd)),
    e.isAnchored && (o.dataset.anchored = 'true'),
    e.zIndex !== void 0 && (o.style.zIndex = String(e.zIndex)),
    o
  );
}
function qo(e, t, n = {}) {
  let o = n.document ?? document;
  if (Ph(e)) return Ih(e, t, o);
  if (Mh(e)) return Fh(e, t, o);
  if (Eh(e)) return Lh(e, t, o);
  let r = o.createElement('div');
  ((r.className = En.fragment), $i(r));
  let i = e;
  return (
    i.blockId !== void 0 && (r.dataset.blockId = String(i.blockId)),
    i.kind && (r.dataset.kind = i.kind),
    r
  );
}
function gs(e) {
  return (e / 1440) * 96;
}
function Bh(e) {
  return (e / 96) * 1440;
}
function Ah(e) {
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
function ou(e, t, n = '', o, r = '.') {
  let { defaultTabInterval: i = 720 } = t,
    a = Bh(e),
    l = Ah(t).find((c) => c.pos > a);
  if (!l) {
    let c = gs(i),
      p = c - (e % c);
    return (p <= 0 && (p = c), { width: p, alignment: 'default' });
  }
  let d = gs(l.pos) - e;
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
    let c = gs(i),
      p = c - (e % c);
    return (p <= 0 && (p = c), { width: p, alignment: 'default' });
  }
  return { width: d, leader: l.leader, alignment: l.val };
}
var _t = {
  fragment: 'layout-paragraph',
  line: 'layout-line',
  run: 'layout-run',
  text: 'layout-run-text',
  tab: 'layout-run-tab',
  image: 'layout-run-image',
  lineBreak: 'layout-run-linebreak',
};
function Xo(e) {
  return e.kind === 'text';
}
function Wi(e) {
  return e.kind === 'tab';
}
function hs(e) {
  return e.kind === 'image';
}
function bs(e) {
  return e.kind === 'lineBreak';
}
function ys(e) {
  return e.kind === 'field';
}
function Dh(e, t) {
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
function xs(e, t) {
  let n = t.createElement('span');
  if (((n.className = `${_t.run} ${_t.text}`), Dh(n, e), mo(n, e.pmStart, e.pmEnd), e.hyperlink)) {
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
function au(e, t, n, o) {
  let r = t.createElement('span');
  if (
    ((r.className = `${_t.run} ${_t.tab}`),
    (r.style.display = 'inline-block'),
    (r.style.width = `${n}px`),
    mo(r, e.pmStart, e.pmEnd),
    o && o !== 'none')
  ) {
    let i = Hh(o);
    i &&
      ((r.style.backgroundImage = `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='4' height='16'><text x='0' y='12' font-size='12' fill='%23000'>${i}</text></svg>`)}")`),
      (r.style.backgroundRepeat = 'repeat-x'),
      (r.style.backgroundPosition = 'bottom'));
  }
  return ((r.textContent = '\xA0'), r);
}
function Hh(e) {
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
function Nh(e, t) {
  let n = t.createElement('img');
  return (
    (n.className = `${_t.run} ${_t.image}`),
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
function ru(e, t) {
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
function su(e, t) {
  let n = e.displayMode,
    o = e.wrapType;
  return n === 'float' ||
    (o && ['square', 'tight', 'through'].includes(o)) ||
    n === 'block' ||
    o === 'topAndBottom'
    ? ru(e, t)
    : Nh(e, t);
}
function lu(e, t) {
  let n = t.createElement('br');
  return ((n.className = `${_t.run} ${_t.lineBreak}`), mo(n, e.pmStart, e.pmEnd), n);
}
function cu(e, t, n) {
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
  return xs(r, t);
}
function zh(e, t, n) {
  if (Xo(e)) return xs(e, t);
  if (Wi(e)) return au(e, t, 48, void 0);
  if (hs(e)) return su(e, t);
  if (bs(e)) return lu(e, t);
  if (ys(e) && n) return cu(e, t, n);
  let o = t.createElement('span');
  return ((o.className = _t.run), o);
}
function du(e, t) {
  let n = [],
    o = e.runs;
  for (let r = t.fromRun; r <= t.toRun; r++) {
    let i = o[r];
    if (i)
      if (Xo(i)) {
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
function Oh(e) {
  return { val: e.val, pos: e.pos, leader: e.leader };
}
function $h(e, t, n) {
  let o = '';
  for (let r = t + 1; r < e.length; r++) {
    let i = e[r];
    if (Xo(i)) o += i.text;
    else if (ys(i))
      i.fieldType === 'PAGE' && n
        ? (o += String(n.pageNumber))
        : i.fieldType === 'NUMPAGES' && n
          ? (o += String(n.totalPages))
          : (o += i.fallback ?? '');
    else if (Wi(i) || bs(i)) break;
  }
  return o;
}
function Wh(e) {
  let n = e.createElement('canvas').getContext('2d');
  return (o, r = 11, i = 'Calibri') => {
    if (!n) return o.length * 7;
    let a = a$2(i).cssFallback,
      s = (r * 96) / 72;
    return ((n.font = `${s}px ${a}`), n.measureText(o).width);
  };
}
function uu(e, t, n, o, r) {
  let i = o.createElement('div');
  ((i.className = _t.line),
    (i.style.height = `${t.lineHeight}px`),
    (i.style.lineHeight = `${t.lineHeight}px`));
  let a = du(e, t);
  if (a.length === 0) {
    let b = o.createElement('span');
    return (
      (b.className = `${_t.run} layout-empty-run`),
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
  let u = a.some((b) => Xo(b) && b.highlight);
  i.style.overflow = u ? 'hidden' : 'visible';
  let d = a.some(Wi),
    c,
    p = Wh(o);
  if (d) {
    let b = r?.tabStops?.map(Oh),
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
    if (Wi(g) && c) {
      let x = $h(a, b, r?.context),
        w = ou(f, c, x, p),
        S = au(g, o, w.width, w.leader);
      (i.appendChild(S), (f += w.width));
    } else if (Xo(g)) {
      let x = xs(g, o);
      if (g.highlight) {
        let P = (g.fontSize ? (g.fontSize * 96) / 72 : 14.67) * 1.2,
          z = Math.max(0, t.lineHeight - P);
        if (z > 0) {
          let U = z / 2;
          ((x.style.paddingTop = `${U}px`), (x.style.paddingBottom = `${U}px`));
        }
      }
      i.appendChild(x);
      let w = g.fontSize || 11,
        S = g.fontFamily || 'Calibri';
      f += p(g.text, w, S);
    } else if (hs(g)) {
      if (
        g.displayMode === 'float' ||
        (g.wrapType && ['square', 'tight', 'through'].includes(g.wrapType))
      )
        continue;
      let w = su(g, o);
      (i.appendChild(w),
        g.displayMode !== 'block' && g.wrapType !== 'topAndBottom' && (f += g.width));
    } else if (bs(g)) {
      let x = lu(g, o);
      i.appendChild(x);
    } else if (ys(g) && r?.context) {
      let x = cu(g, o, r.context);
      i.appendChild(x);
      let w = g.fallback ?? '';
      g.fieldType === 'PAGE'
        ? (w = String(r.context.pageNumber))
        : g.fieldType === 'NUMPAGES' && (w = String(r.context.totalPages));
      let S = g.fontSize || 11,
        M = g.fontFamily || 'Calibri';
      f += p(w, S, M);
    } else {
      let x = zh(g, o, r?.context);
      i.appendChild(x);
    }
  }
  return i;
}
function Yo(e, t) {
  return !e && !t
    ? true
    : !e || !t
      ? false
      : e.style === t.style && e.width === t.width && e.color === t.color;
}
function iu(e, t) {
  return (!e && !t) || !e || !t
    ? false
    : Yo(e.top, t.top) &&
        Yo(e.bottom, t.bottom) &&
        Yo(e.left, t.left) &&
        Yo(e.right, t.right) &&
        Yo(e.between, t.between);
}
function Un(e, t, n, o, r = {}) {
  let i = r.document ?? document,
    a = i.createElement('div');
  ((a.className = _t.fragment),
    (a.style.position = 'relative'),
    (a.dataset.blockId = String(e.blockId)),
    (a.dataset.fromLine = String(e.fromLine)),
    (a.dataset.toLine = String(e.toLine)),
    mo(a, e.pmStart, e.pmEnd),
    e.continuesFromPrev && (a.dataset.continuesFromPrev = 'true'),
    e.continuesOnNext && (a.dataset.continuesOnNext = 'true'));
  for (let S of t.runs)
    hs(S) &&
      (S.displayMode === 'float' ||
        (S.wrapType && ['square', 'tight', 'through'].includes(S.wrapType)));
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
    let S = ($) => {
      switch ($) {
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
    let M = ($) => `${$.width}px ${S($.style)} ${$.color}`,
      P = iu(r.prevBorders, p),
      z = iu(p, r.nextBorders);
    (P && p.between
      ? (a.style.borderTop = M(p.between))
      : p.top && !P && (a.style.borderTop = M(p.top)),
      p.bottom && !z && (a.style.borderBottom = M(p.bottom)),
      p.left && (a.style.borderLeft = M(p.left)),
      p.right && (a.style.borderRight = M(p.right)),
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
    x = 0;
  u?.hanging && u.hanging > 0
    ? (x = -u.hanging)
    : u?.firstLine && u.firstLine > 0 && (x = u.firstLine);
  let w = 0;
  for (let S = 0; S < s.length; S++) {
    let M = s[S],
      P = e.fromLine + S,
      z = P === g - 1,
      U = P === 0 && !e.continuesFromPrev,
      $ = M.leftOffset ?? 0,
      L = M.rightOffset ?? 0,
      W = f;
    if (U) {
      let B = u?.hanging && u.hanging > 0,
        J = u?.firstLine && u.firstLine > 0;
      B && u?.hanging ? (W = f + u.hanging) : J && u?.firstLine && (W = f - u.firstLine);
    }
    let _ = uu(t, M, l, i, {
      availableWidth: W - $ - L,
      isLastLine: z,
      isFirstLine: U,
      paragraphEndsWithLineBreak: b,
      tabStops: t.attrs?.tabs,
      leftIndentPx: d,
      firstLineIndentPx: U ? x : 0,
      context: o,
    });
    ($ > 0 && (_.style.marginLeft = `${$}px`),
      L > 0 && (_.style.marginRight = `${L}px`),
      (w += M.lineHeight));
    let K = u?.hanging && u.hanging > 0,
      T = u?.firstLine && u.firstLine > 0;
    if (
      (U
        ? d > 0 && K
          ? ((_.style.paddingLeft = `${d}px`), (_.style.textIndent = `-${u.hanging}px`))
          : d > 0 && T
            ? ((_.style.paddingLeft = `${d}px`), (_.style.textIndent = `${u.firstLine}px`))
            : d > 0
              ? (_.style.paddingLeft = `${d}px`)
              : T && (_.style.textIndent = `${u.firstLine}px`)
        : d > 0
          ? (_.style.paddingLeft = `${d}px`)
          : K && (_.style.paddingLeft = `${u.hanging}px`),
      c > 0 && (_.style.paddingRight = `${c}px`),
      U && t.attrs?.listMarker)
    ) {
      let B = Math.max(0, d - (u?.hanging ?? 0));
      ((_.style.paddingLeft = `${B}px`), (_.style.textIndent = '0'));
      let J = _h(t.attrs.listMarker, u, i);
      _.insertBefore(J, _.firstChild);
    }
    a.appendChild(_);
  }
  return a;
}
function _h(e, t, n) {
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
function Vh(e, t, n, o) {
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
        m = Un(f, c, p, n, { document: o });
      ((m.style.position = 'relative'), r.appendChild(m));
    } else if (u?.kind === 'table' && d?.kind === 'table') {
      let f = jh(u, d, n, o);
      ((f.style.position = 'relative'), r.appendChild(f));
    }
  }
  return r;
}
function jh(e, t, n, o) {
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
    let p = pu(d, c, u, l, t.columnWidths, e.rows.length, n, o, s, i);
    (r.appendChild(p), (l += c.height));
  }
  return ((r.style.height = `${l}px`), r);
}
function _i(e, t, n) {
  let o = `border${t.charAt(0).toUpperCase() + t.slice(1)}`;
  if (!n || n.style === 'none' || n.style === 'nil' || n.width === 0) e.style[o] = 'none';
  else {
    let r = n.width ?? 1,
      i = n.color ?? '#000000',
      a = n.style ?? 'solid';
    e.style[o] = `${r}px ${a} ${i}`;
  }
}
function Uh(e, t, n, o, r, i, a) {
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
      (_i(s, 'top', e.borders.top),
      _i(s, 'right', e.borders.right),
      _i(s, 'bottom', e.borders.bottom),
      _i(s, 'left', e.borders.left)),
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
  let p = Vh(e, t, i, a);
  if ((s.appendChild(p), e.blocks.length > 0)) {
    let f = e.blocks[0],
      m = e.blocks[e.blocks.length - 1];
    (f && 'pmStart' in f && f.pmStart !== void 0 && (s.dataset.pmStart = String(f.pmStart)),
      m && 'pmEnd' in m && m.pmEnd !== void 0 && (s.dataset.pmEnd = String(m.pmEnd)));
  }
  return s;
}
function pu(e, t, n, o, r, i, a, s, l, u) {
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
    let x = b.colSpan ?? 1,
      w = b.rowSpan ?? 1,
      S = t.height;
    if (w > 1 && u) {
      S = 0;
      for (let L = n; L < n + w && L < u.length - 1; L++) S += (u[L + 1] ?? 0) - (u[L] ?? 0);
      S === 0 && (S = t.height * w);
    }
    f + x >= r.length;
    let $ = Uh(b, g, p, S, {}, a, s);
    if (
      (($.dataset.cellIndex = String(m)),
      ($.dataset.columnIndex = String(f)),
      w > 1 && ($.dataset.rowSpan = String(w)),
      d.appendChild($),
      w > 1 && l)
    ) {
      let L = `${n}-${f}`;
      l.set(L, {
        cell: b,
        cellMeasure: g,
        columnIndex: f,
        startRow: n,
        rowSpan: w,
        colSpan: x,
        x: p,
        totalHeight: S,
      });
    }
    for (let L = 0; L < x && f + L < r.length; L++) p += r[f + L] ?? 0;
    for (f += x; c.has(f); ) ((p += r[f] ?? 0), f++);
  }
  return d;
}
function Zo(e, t, n, o, r = {}) {
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
    let g = pu(m, b, f, c, n.columnWidths, t.rows.length, o, i, d, l);
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
var Ss = { image: 'layout-image', imageAnchored: 'layout-image-anchored' };
function Vi(e, t, n, o, r = {}) {
  let i = r.document ?? document,
    a = i.createElement('div');
  ((a.className = Ss.image),
    e.isAnchored && a.classList.add(Ss.imageAnchored),
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
var In = {
  page: 'layout-page',
  content: 'layout-page-content',
  header: 'layout-page-header',
  footer: 'layout-page-footer',
};
function Ui(e, t, n, o) {
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
function Gh(e, t) {
  let n = t.margins;
  ((e.style.position = 'absolute'),
    (e.style.top = `${n.top}px`),
    (e.style.left = `${n.left}px`),
    (e.style.right = `${n.right}px`),
    (e.style.bottom = `${n.bottom}px`),
    (e.style.overflow = 'visible'));
}
function Kh(e, t, n) {
  ((e.style.position = 'absolute'),
    (e.style.left = `${t.x - n.left}px`),
    (e.style.top = `${t.y - n.top}px`),
    (e.style.width = `${t.width}px`),
    'height' in t && (e.style.height = `${t.height}px`));
}
function Ki(e) {
  return e === void 0 ? 0 : Math.round((e * 96) / 914400);
}
function qh(e) {
  let t = e.wrapType,
    n = e.displayMode;
  return !!((t && ['square', 'tight', 'through'].includes(t)) || n === 'float');
}
function Yh(e, t, n) {
  let o = [];
  for (let r of e.runs) {
    if (r.kind !== 'image') continue;
    let i = r;
    if (!qh(i)) continue;
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
            : m.posOffset !== void 0 && ((p = Ki(m.posOffset)), (c = p > n / 2 ? 'right' : 'left'));
    } else i.cssFloat === 'right' && ((c = 'right'), (p = n - i.width));
    let f = 0;
    if (a?.vertical) {
      let m = a.vertical;
      (m.align === 'top'
        ? (f = 0)
        : m.align === 'bottom'
          ? (f = t)
          : m.posOffset !== void 0
            ? (f = Ki(m.posOffset))
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
function Xh(e, t) {
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
function Zh(e, t) {
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
function fu(e, t, n) {
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
          let S = w;
          a.push({
            src: S.src,
            width: S.width,
            height: S.height,
            alt: S.alt,
            paragraphY: f,
            position: S.position,
          });
        } else m.push(w);
      let b = { ...c, runs: m },
        g = { blockId: c.id, width: i, height: p.totalHeight, fromLine: 0, toLine: p.lines.length },
        x = Un(g, b, p, t, { document: o });
      ((x.style.position = 'relative'),
        (x.style.marginBottom = '0'),
        r.appendChild(x),
        (s += p.totalHeight));
    } else if (u?.kind === 'table' && d?.kind === 'table') {
      let c = u,
        p = d,
        f = { blockId: c.id, width: i, height: p.totalHeight, fromRow: 0, toRow: c.rows.length },
        m = Zo(f, c, p, t, { document: o });
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
            ? (u.style.left = `${Ki(d.posOffset)}px`)
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
            ? (u.style.top = `${p + Ki(c.posOffset)}px`)
            : (u.style.top = `${p}px`);
    } else u.style.top = `${l.paragraphY}px`;
    r.appendChild(u);
  }
  return r;
}
function Jh(e, t, n) {
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
function qi(e, t, n = {}) {
  let o = n.document ?? document,
    r = o.createElement('div');
  ((r.className = n.pageClassName ?? In.page),
    (r.dataset.pageNumber = String(e.number)),
    Ui(r, e.size.w, e.size.h, n));
  let i = o.createElement('div');
  ((i.className = In.content), Gh(i, e));
  let a = e.size.w - e.margins.left - e.margins.right,
    s = [],
    l = [];
  for (let p of e.fragments)
    if (p.kind === 'paragraph' && n.blockLookup) {
      let f = n.blockLookup.get(String(p.blockId));
      if (f?.block.kind === 'paragraph') {
        let m = f.block,
          b = p.y - e.margins.top,
          g = Yh(m, b, a);
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
        x = p.y - e.margins.top,
        w = b.topFromText ?? 0,
        S = b.bottomFromText ?? 0,
        M = b.leftFromText ?? 12,
        P = b.rightFromText ?? 12,
        z = g < a / 2 ? 'left' : 'right';
      l.push({
        side: z,
        x: g,
        y: x,
        width: p.width,
        height: p.height,
        distTop: w,
        distBottom: S,
        distLeft: M,
        distRight: P,
      });
    }
  Xh(l, a);
  if (s.length > 0) {
    let p = Zh(s, o);
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
      let x = n.blockLookup.get(String(f.blockId));
      if (
        f.kind === 'paragraph' &&
        x?.block.kind === 'paragraph' &&
        x?.measure.kind === 'paragraph'
      ) {
        let w = x.block,
          S = p + 1 < e.fragments.length ? d(e.fragments[p + 1]) : void 0;
        ((m = Un(f, w, x.measure, b, { document: o, prevBorders: c, nextBorders: S })),
          (c = w.attrs?.borders));
      } else
        f.kind === 'table' && x?.block.kind === 'table' && x?.measure.kind === 'table'
          ? ((m = Zo(f, x.block, x.measure, b, { document: o })), (c = void 0))
          : f.kind === 'image' && x?.block.kind === 'image' && x?.measure.kind === 'image'
            ? ((m = Vi(f, x.block, x.measure, b, { document: o })), (c = void 0))
            : ((m = qo(f, b, { document: o })), (c = void 0));
    } else ((m = qo(f, b, { document: o })), (c = void 0));
    (Kh(m, f, { left: e.margins.left, top: e.margins.top }), i.appendChild(m));
  }
  if (n.footnoteArea && n.footnoteArea.length > 0) {
    let p = Jh(n.footnoteArea, a, o);
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
      x = (n.headerContent?.height ?? 0) > b,
      w = o.createElement('div');
    if (
      ((w.className = In.header),
      (w.style.position = 'absolute'),
      (w.style.top = `${f}px`),
      (w.style.left = `${e.margins.left}px`),
      (w.style.right = `${e.margins.right}px`),
      (w.style.width = `${m}px`),
      x || ((w.style.maxHeight = `${b}px`), (w.style.overflow = 'hidden')),
      (w.style.minHeight = '24px'),
      n.headerContent && n.headerContent.blocks.length > 0)
    ) {
      let S = fu(n.headerContent, { ...t, section: 'header', contentWidth: m }, n);
      w.appendChild(S);
    }
    r.appendChild(w);
  }
  {
    let f = n.footerDistance ?? e.margins.footer ?? 48,
      m = e.size.w - e.margins.left - e.margins.right,
      b = Math.max(e.margins.bottom - f, 48),
      x = (n.footerContent?.height ?? 0) > b,
      w = o.createElement('div');
    if (
      ((w.className = In.footer),
      (w.style.position = 'absolute'),
      (w.style.bottom = `${f}px`),
      (w.style.left = `${e.margins.left}px`),
      (w.style.right = `${e.margins.right}px`),
      (w.style.width = `${m}px`),
      x || ((w.style.maxHeight = `${b}px`), (w.style.overflow = 'hidden')),
      (w.style.minHeight = '24px'),
      n.footerContent && n.footerContent.blocks.length > 0)
    ) {
      let S = fu(n.footerContent, { ...t, section: 'footer', contentWidth: m }, n);
      w.appendChild(S);
    }
    r.appendChild(w);
  }
  return r;
}
function ks(e, t, n) {
  let o = { pageNumber: e.number, totalPages: t, section: 'body' },
    r = { ...n };
  if (n.footnotesByPage) {
    let i = n.footnotesByPage.get(e.number);
    i && i.length > 0 && (r.footnoteArea = i);
  }
  return { context: o, pageOptions: r };
}
function mu(e) {
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
function Qh(e) {
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
function eb(e, t) {
  ((e.style.display = 'flex'),
    (e.style.flexDirection = 'column'),
    (e.style.alignItems = 'center'),
    (e.style.gap = `${t}px`),
    (e.style.padding = `${t}px`),
    (e.style.backgroundColor = 'var(--doc-bg, #f8f9fa)'));
}
var ji = 2,
  tb = 8;
function ws(e, t, n = {}) {
  let o = e.length,
    r = n.pageGap ?? 24,
    i = t,
    a = i.__pageRenderState,
    s = Qh(n),
    l = o >= tb;
  if (a && a.optionsHash === s && l) {
    let g = a.pageStates,
      x = a.pageDataMap,
      w = i.__pageObserver,
      S = [];
    for (let z of e) S.push(mu(z));
    let M = a.totalPages !== o,
      P = Math.min(g.length, e.length);
    for (let z = 0; z < P; z++) {
      let U = g[z],
        $ = S[z];
      if (U.fingerprint === $ && !M) {
        let _ = x.get(U.element);
        _ && (_.page = e[z]);
        continue;
      }
      let L = U.element,
        W = x.get(L);
      (W && ((W.page = e[z]), W.rendered && nb(L, x, o, n)),
        (U.fingerprint = $),
        Ui(L, e[z].size.w, e[z].size.h, n),
        (L.dataset.pageNumber = String(e[z].number)));
    }
    if (e.length > g.length) {
      let z = n.document ?? document;
      for (let U = g.length; U < e.length; U++) {
        let $ = e[U],
          L = z.createElement('div');
        ((L.className = n.pageClassName ?? In.page),
          (L.dataset.pageNumber = String($.number)),
          (L.dataset.pageIndex = String(U)),
          Ui(L, $.size.w, $.size.h, n),
          t.appendChild(L),
          g.push({ element: L, fingerprint: S[U] }),
          x.set(L, { page: $, index: U, rendered: false }),
          w && w.observe(L));
      }
    }
    if (e.length < g.length) {
      for (let z = g.length - 1; z >= e.length; z--) {
        let U = g[z].element;
        (w && w.unobserve(U), x.delete(U), t.removeChild(U));
      }
      g.length = e.length;
    }
    for (let z = 0; z < g.length; z++) {
      let U = x.get(g[z].element);
      U && (U.index = z);
    }
    ((a.totalPages = o), (a.currentOptions = n));
    return;
  }
  let d = i.__pageObserver;
  (d && (d.disconnect(), (i.__pageObserver = void 0)),
    (t.innerHTML = ''),
    (i.__pageRenderState = void 0),
    eb(t, r));
  let c = [],
    p = [];
  for (let g = 0; g < e.length; g++) {
    let x = e[g];
    if ((p.push(mu(x)), l)) {
      let S = (n.document ?? document).createElement('div');
      ((S.className = n.pageClassName ?? In.page),
        (S.dataset.pageNumber = String(x.number)),
        (S.dataset.pageIndex = String(g)),
        Ui(S, x.size.w, x.size.h, n),
        t.appendChild(S),
        c.push(S));
    } else {
      let { context: w, pageOptions: S } = ks(x, o, n),
        M = qi(x, w, S);
      (t.appendChild(M), c.push(M));
    }
  }
  if (!l) return;
  let f = new Map();
  for (let g = 0; g < e.length; g++) f.set(c[g], { page: e[g], index: g, rendered: false });
  let m = new IntersectionObserver(
    (g) => {
      let x = i.__pageRenderState;
      if (!x) return;
      let { currentOptions: w, totalPages: S, pageDataMap: M } = x;
      for (let $ of g) {
        let L = $.target,
          W = M.get(L);
        if (W && $.isIntersecting) {
          Gi(L, M, S, w);
          for (let _ = -ji; _ <= ji; _++) {
            let K = W.index + _;
            K >= 0 &&
              K < x.pageStates.length &&
              K !== W.index &&
              Gi(x.pageStates[K].element, M, S, w);
          }
        }
      }
      let P = window.innerHeight,
        z = P * 3,
        U = new Set();
      for (let [$, L] of M) {
        if (!L.rendered) continue;
        let W = $.getBoundingClientRect();
        W.bottom > -z && W.top < P + z && U.add(L.index);
      }
      for (let [$, L] of M) {
        if (!L.rendered) continue;
        let W = false;
        for (let _ of U)
          if (Math.abs(L.index - _) <= ji + 1) {
            W = true;
            break;
          }
        !W && U.size > 0 && ob($, M);
      }
    },
    { root: null, rootMargin: '1500px 0px 1500px 0px' }
  );
  for (let g of c) m.observe(g);
  ((i.__pageObserver = m),
    (i.__pageRenderState = {
      pageStates: c.map((g, x) => ({ element: g, fingerprint: p[x] })),
      totalPages: o,
      optionsHash: s,
      pageDataMap: f,
      currentOptions: n,
    }));
  let b = Math.min(e.length, ji + 3);
  for (let g = 0; g < b; g++) Gi(c[g], f, o, n);
}
function Gi(e, t, n, o) {
  let r = t.get(e);
  if (!r || r.rendered) return;
  let { context: i, pageOptions: a } = ks(r.page, n, o),
    s = qi(r.page, i, a);
  for (; s.firstChild; ) e.appendChild(s.firstChild);
  r.rendered = true;
}
function nb(e, t, n, o) {
  let r = t.get(e);
  if (!r) return;
  let { context: i, pageOptions: a } = ks(r.page, n, o),
    l = qi(r.page, i, a).querySelector(`.${In.content}`),
    u = e.querySelector(`.${In.content}`);
  l && u ? e.replaceChild(l, u) : ((e.innerHTML = ''), (r.rendered = false), Gi(e, t, n, o));
}
function ob(e, t) {
  let n = t.get(e);
  !n || !n.rendered || ((e.innerHTML = ''), (n.rendered = false));
}
var Yi = class {
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
      return Un(t, r, i, n, { document: this.doc });
    }
    if (t.kind === 'table' && o) {
      let r = o.block,
        i = o.measure;
      return Zo(t, r, i, n, { document: this.doc });
    }
    if (t.kind === 'image' && o) {
      let r = o.block,
        i = o.measure;
      return Vi(t, r, i, n, { document: this.doc });
    }
    return qo(t, n, { document: this.doc });
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
var mn,
  Fn,
  Ln,
  gn,
  go,
  Gn,
  gu,
  Cs,
  Xi = class {
    constructor() {
      f$1(this, Gn);
      f$1(this, mn, 0);
      f$1(this, Fn, 0);
      f$1(this, Ln, false);
      f$1(this, gn, null);
      f$1(this, go, new Set());
    }
    setStateSeq(t) {
      g(this, mn, t);
    }
    incrementStateSeq() {
      return ++i$2(this, mn)._;
    }
    getStateSeq() {
      return e(this, mn);
    }
    getRenderSeq() {
      return e(this, Fn);
    }
    onLayoutStart() {
      g(this, Ln, true);
    }
    onLayoutComplete(t) {
      (g(this, Fn, t), g(this, Ln, false), h(this, Gn, gu).call(this));
    }
    isSafeToRender() {
      return !e(this, Ln) && e(this, Fn) >= e(this, mn);
    }
    requestRender() {
      this.isSafeToRender()
        ? h(this, Gn, Cs).call(this)
        : g(this, gn, () => h(this, Gn, Cs).call(this));
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
      (g(this, mn, 0), g(this, Fn, 0), g(this, Ln, false), g(this, gn, null));
    }
    getDebugInfo() {
      return {
        stateSeq: e(this, mn),
        renderSeq: e(this, Fn),
        layoutUpdating: e(this, Ln),
        hasPendingRender: e(this, gn) !== null,
        isSafe: this.isSafeToRender(),
      };
    }
  };
((mn = new WeakMap()),
  (Fn = new WeakMap()),
  (Ln = new WeakMap()),
  (gn = new WeakMap()),
  (go = new WeakMap()),
  (Gn = new WeakSet()),
  (gu = function () {
    if (e(this, gn) && this.isSafeToRender()) {
      let t = e(this, gn);
      (g(this, gn, null), t());
    }
  }),
  (Cs = function () {
    for (let t of e(this, go))
      try {
        t();
      } catch (n) {
        console.error('LayoutSelectionGate: render callback error', n);
      }
  }));
function bu({ pagesContainerRef: e }) {
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
            let x = g.createRange();
            return (x.setStart(m, b), x.setEnd(m, b), x.getBoundingClientRect().left);
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
          x = Number(m.dataset.pmEnd);
        if (m.classList.contains('layout-run-tab')) {
          if (l >= b.left && l <= b.right) {
            let w = (b.left + b.right) / 2;
            return l < w ? g : x;
          }
          continue;
        }
        if (l >= b.left && l <= b.right) {
          let w = m.firstChild;
          if (!w || w.nodeType !== Node.TEXT_NODE) return g;
          let S = w,
            M = m.ownerDocument;
          if (!M) return g;
          let P = 0,
            z = S.length;
          for (; P < z; ) {
            let U = Math.floor((P + z) / 2),
              $ = M.createRange();
            ($.setStart(S, U),
              $.setEnd(S, U),
              l < $.getBoundingClientRect().left ? (z = U) : (P = U + 1));
          }
          if (P > 0 && P <= S.length) {
            let U = M.createRange();
            (U.setStart(S, P - 1), U.setEnd(S, P - 1));
            let $ = U.getBoundingClientRect().left;
            (U.setStart(S, Math.min(P, S.length)), U.setEnd(S, Math.min(P, S.length)));
            let L = U.getBoundingClientRect().left;
            if (Math.abs(l - $) < Math.abs(l - L)) return g + (P - 1);
          }
          return g + Math.min(P, x - g);
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
          let S = o(d);
          if (S === null) return false;
          t.current = S;
        }
        let p;
        if (n.current >= 0 && n.current < u.length) p = n.current;
        else {
          let S = r(d);
          if (!S || ((p = u.indexOf(S)), p === -1)) return false;
        }
        let f = l.key === 'ArrowUp' ? p - 1 : p + 1;
        if (f < 0 || f >= u.length) return ((n.current = -1), false);
        let m = u[f],
          b = i(m, t.current);
        if (b === null) return false;
        n.current = f;
        let { state: g, dispatch: x } = s,
          w = Math.max(0, Math.min(b, g.doc.content.size));
        try {
          let S = l.shiftKey ? TextSelection.create(g.doc, c, w) : TextSelection.create(g.doc, w);
          x(g.tr.setSelection(S));
        } catch {
          let S = g.doc.resolve(w),
            M = l.shiftKey ? TextSelection.between(g.doc.resolve(c), S) : TextSelection.near(S);
          x(g.tr.setSelection(M));
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
var rb = 12,
  Qi = 8;
function yu(e) {
  let t = [];
  for (let n of e)
    if (n.kind === 'paragraph')
      for (let o of n.runs)
        o.kind === 'text' &&
          o.footnoteRefId != null &&
          t.push({ footnoteId: o.footnoteRefId, pmPos: o.pmStart ?? 0 });
  return t;
}
function Ts(e, t) {
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
function ib(e, t, n) {
  let o = [];
  for (let a = 0; a < e.content.length; a++) {
    let s = e.content[a],
      l = [];
    if (a === 0) {
      let d = { kind: 'text', text: `${t}  `, fontSize: Qi, superscript: true };
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
        f.fontSize || (f.fontSize = Qi);
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
    l.length === 0 && l.push({ kind: 'text', text: '', fontSize: Qi });
    let u = { kind: 'paragraph', id: `fn-${e.id}-p${a}`, runs: l };
    o.push(u);
  }
  o.length === 0 &&
    o.push({
      kind: 'paragraph',
      id: `fn-${e.id}-empty`,
      runs: [{ kind: 'text', text: '', fontSize: Qi }],
    });
  let r = [];
  for (let a of o)
    if (a.kind === 'paragraph') {
      let s = Ko(a, n);
      r.push(s);
    }
  let i = r.reduce((a, s) => (s.kind === 'paragraph' ? a + s.totalHeight : a), 0);
  return { id: e.id, displayNumber: t, blocks: o, measures: r, height: i };
}
function xu(e, t, n) {
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
    let u = ib(l, i, n);
    (o.set(s.footnoteId, u), i++);
  }
  return o;
}
function Su(e, t) {
  let n = new Map();
  for (let [o, r] of e) {
    let i = 0;
    for (let a of r) {
      let s = t.get(a);
      s && (i += s.height);
    }
    i > 0 && ((i += rb), n.set(o, i));
  }
  return n;
}
var vs = class {
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
function ku(e, t = 1) {
  return new vs(e, t);
}
var cb = 816,
  Ru = 1056,
  ea = { top: 96, right: 96, bottom: 96, left: 96 },
  db = 24,
  ub = [],
  pb = {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'var(--doc-bg, #f8f9fa)',
  },
  fb = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 24,
  },
  mb = { position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  gb = {
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
function hb(e) {
  return { w: e?.pageWidth ? sn(e.pageWidth) : cb, h: e?.pageHeight ? sn(e.pageHeight) : Ru };
}
function bb(e) {
  let t = e?.marginTop ? sn(e.marginTop) : ea.top,
    n = e?.marginBottom ? sn(e.marginBottom) : ea.bottom;
  return {
    top: t,
    right: e?.marginRight ? sn(e.marginRight) : ea.right,
    bottom: n,
    left: e?.marginLeft ? sn(e.marginLeft) : ea.left,
    header: e?.headerDistance ? sn(e.headerDistance) : 48,
    footer: e?.footerDistance ? sn(e.footerDistance) : 48,
  };
}
function yb(e) {
  let t = e.wrapType,
    n = e.displayMode;
  return !!((t && ['square', 'tight', 'through'].includes(t)) || n === 'float');
}
function Cu(e) {
  return e === void 0 ? 0 : Math.round((e * 96) / 914400);
}
function xb(e, t, n) {
  if (e) {
    if (t === 'pct') return (n * e) / 5e3;
    if (t === 'dxa' || !t || t === 'auto') return Math.round((e / 20) * 1.333);
  }
}
function Pu(e, t) {
  let i = e.columnWidths ?? [],
    a = xb(e.width, e.widthType, t);
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
        x = b.rowSpan ?? 1;
      if (x > 1)
        for (let w = c + 1; w < c + x; w++) {
          s.has(w) || s.set(w, new Set());
          let S = s.get(w);
          for (let M = 0; M < g; M++) S.add(f + M);
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
          x = 0;
        for (let P = 0; P < g && f + P < i.length; P++) x += i[f + P] ?? 0;
        for (x === 0 && (x = b.width ?? 100), f += g; m.has(f); ) f++;
        let w = b.padding?.left ?? 7,
          S = b.padding?.right ?? 7,
          M = Math.max(1, x - w - S);
        return {
          blocks: b.blocks.map((P) => Mu(P, M)),
          width: x,
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
      let S = p.cells[w],
        M = f?.[w];
      S.height = S.blocks.reduce((U, $) => ('totalHeight' in $ ? U + $.totalHeight : U), 0);
      let P = M?.padding?.top ?? 1,
        z = M?.padding?.bottom ?? 1;
      ((S.height += P + z), (m = Math.max(m, S.height)));
    }
    let b = e.rows[c],
      g = b?.height,
      x = b?.heightRule;
    g && x === 'exact'
      ? (p.height = g)
      : g && x === 'atLeast'
        ? (p.height = Math.max(m, g))
        : (p.height = Math.max(m, 24));
  }
  let u = l.reduce((c, p) => c + p.height, 0),
    d = i.reduce((c, p) => c + p, 0) || a || t;
  return { kind: 'table', rows: l, columnWidths: i, totalWidth: d, totalHeight: u };
}
function Sb(e, t) {
  let n = [];
  for (let o = 0; o < e.length; o++) {
    let r = e[o];
    if (r.kind !== 'paragraph') continue;
    let i = r;
    for (let a of i.runs) {
      if (a.kind !== 'image') continue;
      let s = a;
      if (!yb(s)) continue;
      let l = 0,
        u = s.position,
        d = s.distTop ?? 0,
        c = s.distBottom ?? 0,
        p = s.distLeft ?? 12,
        f = s.distRight ?? 12;
      if (u?.vertical) {
        let x = u.vertical;
        x.align === 'top' && x.relativeTo === 'margin'
          ? (l = 0)
          : x.posOffset !== void 0 && (l = Cu(x.posOffset));
      }
      let m = l + s.height,
        b = 0,
        g = 0;
      if (u?.horizontal) {
        let x = u.horizontal;
        if (x.align === 'left') b = s.width + f;
        else if (x.align === 'right') g = s.width + p;
        else if (x.posOffset !== void 0) {
          let w = Cu(x.posOffset);
          w < t / 2 ? (b = w + s.width + f) : (g = t - w + p);
        }
      } else
        s.cssFloat === 'left' ? (b = s.width + f) : s.cssFloat === 'right' && (g = s.width + p);
      if (b > 0 || g > 0) {
        let x = u?.vertical?.relativeTo === 'margin' || u?.vertical?.relativeTo === 'page';
        n.push({
          leftMargin: b,
          rightMargin: g,
          topY: l - d,
          bottomY: m + c,
          anchorBlockIndex: o,
          isMarginRelative: x,
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
    let s = Pu(i, t),
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
    let x = a.tblpY ?? 0,
      w = x + u;
    n.push({ leftMargin: m, rightMargin: b, topY: x - p, bottomY: w + f, anchorBlockIndex: o });
  }
  return n;
}
function Mu(e, t, n, o) {
  switch (e.kind) {
    case 'paragraph': {
      let r = e;
      if (!n || n.length === 0) {
        let a = ds(r, t);
        if (a) return a;
      }
      let i = Ko(r, t, { floatingZones: n, paragraphYOffset: o ?? 0 });
      return ((!n || n.length === 0) && us(r, t, i), i);
    }
    case 'table':
      return Pu(e, t);
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
function Eu(e, t) {
  let n = Sb(e, t),
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
        b = Mu(c, t, f, u),
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
function tr(e) {
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
        let a = tr(o.content);
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
        let a = tr(o.fieldResult);
        t.push(...a);
      }
    }
    if (o.type === 'hyperlink' && Array.isArray(o.children)) {
      let r = tr(o.children);
      t.push(...r);
    }
  }
  return t;
}
var kb = {
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
function ta(e) {
  if (!e || !e.style || e.style === 'none' || e.style === 'nil') return { width: 0, style: 'none' };
  let t = { style: kb[e.style] || 'solid' },
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
var Qo = 0;
function Iu(e, t) {
  let n = e.rows ?? [],
    o = e.formatting,
    i = e.columnWidths?.map(Yn),
    a = 1;
  if (i && t) {
    let p = i.reduce((f, m) => f + m, 0);
    p > t && ((a = t / p), (i = i.map((f) => f * a)));
  }
  let s = o?.borders,
    l = new Map(),
    u = new Set(),
    d = new Map();
  for (let p = 0; p < n.length; p++) {
    let f = n[p].cells ?? [],
      m = 0;
    for (let b = 0; b < f.length; b++) {
      let x = f[b].formatting,
        w = x?.vMerge,
        S = x?.gridSpan ?? 1;
      if (w === 'restart') (d.set(m, { startRow: p, startCellIdx: b }), l.set(`${p}-${b}`, 1));
      else if (w === 'continue' || (w != null && w !== 'restart')) {
        let M = d.get(m);
        if (M) {
          let P = `${M.startRow}-${M.startCellIdx}`;
          l.set(P, (l.get(P) ?? 1) + 1);
        }
        u.add(`${p}-${b}`);
      } else d.delete(m);
      m += S;
    }
  }
  let c = n.map((p, f) => {
    let m = p.formatting,
      b = p.cells ?? [],
      g = f === 0,
      x = f === n.length - 1,
      w = b.filter((P, z) => !u.has(`${f}-${z}`)),
      S = b.map((P, z) => z).filter((P) => !u.has(`${f}-${P}`)),
      M = w.map((P, z) => {
        let U = S[z],
          $ = P.formatting,
          L = P.content ?? [],
          W = U === 0,
          _ = U === b.length - 1,
          K = [];
        for (let V of L)
          if (V.type === 'paragraph' && Array.isArray(V.content)) {
            let q = V.formatting,
              O = {};
            if (q?.alignment) {
              let G = q.alignment;
              G === 'both'
                ? (O.alignment = 'justify')
                : ['left', 'center', 'right', 'justify'].includes(G) && (O.alignment = G);
            }
            let j = tr(V.content);
            j.length > 0 &&
              K.push({
                kind: 'paragraph',
                id: `hf-tbl-p-${Qo++}`,
                runs: j,
                attrs: Object.keys(O).length > 0 ? O : void 0,
              });
          } else V.type === 'table' && K.push(Iu(V));
        K.length === 0 &&
          K.push({ kind: 'paragraph', id: `hf-tbl-p-${Qo++}`, runs: [{ kind: 'text', text: '' }] });
        let T,
          B = $?.borders,
          J = g ? s?.top : s?.insideH,
          he = x ? s?.bottom : s?.insideH,
          ue = W ? s?.left : s?.insideV,
          Ee = _ ? s?.right : s?.insideV;
        (B || s) &&
          (T = {
            top: ta(B?.top ?? J),
            bottom: ta(B?.bottom ?? he),
            left: ta(B?.left ?? ue),
            right: ta(B?.right ?? Ee),
          });
        let we = $?.margins,
          Re = o?.cellMargins,
          R = we ?? Re,
          F = {
            top: R?.top?.value != null ? Yn(R.top.value) : 1,
            right: R?.right?.value != null ? Yn(R.right.value) : 7,
            bottom: R?.bottom?.value != null ? Yn(R.bottom.value) : 1,
            left: R?.left?.value != null ? Yn(R.left.value) : 7,
          },
          k = $?.width,
          C = k?.value && k.type === 'dxa' ? Yn(k.value) * a : void 0,
          I = $?.shading,
          A;
        return (
          I?.fill && I.fill !== 'auto' && (A = `#${I.fill}`),
          {
            id: `hf-tbl-c-${Qo++}`,
            blocks: K,
            colSpan: $?.gridSpan,
            rowSpan: (() => {
              let V = l.get(`${f}-${U}`),
                q = $?._pmRowSpan;
              return (q && q > 1 ? q : void 0) ?? (V && V > 1 ? V : void 0);
            })(),
            width: C,
            verticalAlign: $?.verticalAlign,
            background: A,
            borders: T,
            padding: F,
          }
        );
      });
    return {
      id: `hf-tbl-r-${Qo++}`,
      cells: M,
      height: m?.height?.value ? Yn(m.height.value) : void 0,
      heightRule: m?.heightRule,
      isHeader: m?.header,
    };
  });
  return {
    kind: 'table',
    id: `hf-tbl-${Qo++}`,
    rows: c,
    columnWidths: i,
    width: o?.width?.value,
    widthType: o?.width?.type,
    justification: o?.justification,
  };
}
function Tu(e, t) {
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
      let d = tr(s.content);
      if (d.length > 0) {
        let c = {
          kind: 'paragraph',
          id: String(n.length),
          runs: d,
          attrs: Object.keys(u).length > 0 ? u : void 0,
        };
        n.push(c);
      }
    } else s.type === 'table' && Array.isArray(s.rows) && n.push(Iu(s, t));
  }
  if (n.length === 0) return;
  let o = n.map((a) => {
      if (a.kind !== 'paragraph') return a;
      let s = a;
      if (!s.runs.some((d) => d.kind === 'image' && 'position' in d && d.position)) return a;
      let u = s.runs.filter((d) => !(d.kind === 'image' && 'position' in d && d.position));
      return (u.length === 0 && u.push({ kind: 'text', text: '' }), { ...s, runs: u });
    }),
    r = Eu(o, t),
    i = r.reduce(
      (a, s) => (s.kind === 'paragraph' || s.kind === 'table' ? a + s.totalHeight : a),
      0
    );
  return { blocks: n, measures: r, height: i };
}
function wb(e, t, n) {
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
var Cb = forwardRef(function (t, n) {
    let {
        document: o,
        styles: r,
        theme: i$1,
        sectionProperties: a,
        headerContent: s,
        footerContent: l$1,
        readOnly: u = false,
        pageGap: d = db,
        zoom: c = 1,
        onDocumentChange: p,
        onSelectionChange: f,
        externalPlugins: m = ub,
        extensionManager: b,
        onReady: g,
        onRenderedDomContextReady: x,
        pluginOverlays: w,
        onHeaderFooterDoubleClick: S,
        hfEditMode: M,
        onBodyClick: P,
        className: z,
        style: U,
        commentsSidebarOpen: $ = false,
        sidebarOverlay: L,
        scrollContainerRef: W,
      } = t,
      _ = useRef(null),
      K = useRef(null),
      T = useRef(null),
      B = useRef(null),
      { handlePMKeyDown: J } = bu({ pagesContainerRef: K }),
      he = useRef(f),
      ue = useRef(p),
      Ee = useRef(g),
      we = useRef(x);
    ((he.current = f), (ue.current = p), (Ee.current = g), (we.current = x));
    let [Re, R] = useState(null),
      [F, k$1] = useState([]),
      [C, I] = useState([]),
      [A, V] = useState(false),
      [q, O] = useState([]),
      [j$1, G] = useState(null),
      [be, E] = useState(null),
      D = useRef(false),
      H = useCallback(
        (v, oe) => {
          let X = v.tagName === 'IMG' ? v : v.querySelector('img'),
            Z = (X ?? v).getBoundingClientRect();
          return {
            element: X ?? v,
            pmPos: oe,
            width: Math.round(Z.width / c),
            height: Math.round(Z.height / c),
          };
        },
        [c]
      ),
      ae = useRef(false),
      pe = useRef(null),
      fe = useRef(false),
      Ie = useRef(0),
      ge = useRef(0),
      Se = useRef(0),
      de = useRef({ left: 0, right: 0 }),
      Ge = useRef(null),
      Ke = useRef(false),
      qe = useRef(0),
      at = useRef(0),
      $e = useRef(0),
      Qe = useRef(0),
      rt = useRef(null),
      Ae = useRef(false),
      mt = useRef(false),
      He = useRef(0),
      wt = useRef(0),
      yo = useRef(0),
      ln = useRef(0),
      Nt = useRef(null),
      zt = useRef(false),
      Tt = useRef(null),
      le = useRef(null),
      Bt = useRef(null),
      ar = 5,
      Vt = useMemo(() => new Xi(), []),
      jt = useMemo(() => hb(a), [a]),
      At = useMemo(() => bb(a), [a]),
      Oe = jt.w - At.left - At.right,
      Ot = useMemo(() => new Yi({ pageGap: d, showShadow: true, pageBackground: '#fff' }), [d]);
    B.current = Ot;
    let gt = useCallback(
        (v) => {
          let oe = performance.now(),
            X = Vt.getStateSeq();
          Vt.onLayoutStart();
          try {
            let Z = performance.now(),
              ne = jt.h - At.top - At.bottom,
              Y = Ud(v.doc, { theme: i$1, pageContentHeight: ne }),
              Q = performance.now() - Z;
            (Q > 500 &&
              console.warn(
                `[PagedEditor] toFlowBlocks took ${Math.round(Q)}ms (${Y.length} blocks)`
              ),
              k$1(Y),
              (Z = performance.now()));
            let ee = Eu(Y, Oe);
            ((Q = performance.now() - Z),
              Q > 1e3 &&
                console.warn(
                  `[PagedEditor] measureBlocks took ${Math.round(Q)}ms (${Y.length} blocks)`
                ),
              I(ee));
            let ce = yu(Y),
              Ce = ce.length > 0 && o?.package?.footnotes,
              ye = Tu(s, Oe),
              Te = Tu(l$1, Oe),
              ze = At.header ?? 48,
              Fe = At.footer ?? 48,
              Ye = At.top - ze,
              Xe = At.bottom - Fe,
              et = ye?.height ?? 0,
              ct = Te?.height ?? 0,
              Dt = At;
            ((et > Ye || ct > Xe) &&
              ((Dt = { ...At }), et > Ye && (Dt.top = ze + et), ct > Xe && (Dt.bottom = Fe + ct)),
              (Z = performance.now()));
            let Wt,
              Nn = new Map(),
              vo = new Map();
            if (Ce) {
              let bn = Ni(Y, ee, { pageSize: jt, margins: Dt });
              ((Nn = Ts(bn.pages, ce)), (vo = xu(o.package.footnotes, ce, Oe)));
              let zn = Su(Nn, vo);
              if (zn.size > 0) {
                ((Wt = Ni(Y, ee, { pageSize: jt, margins: Dt, footnoteReservedHeights: zn })),
                  (Nn = Ts(Wt.pages, ce)));
                for (let [Qt, yn] of Nn) {
                  let On = Wt.pages.find((Qn) => Qn.number === Qt);
                  On && (On.footnoteIds = yn);
                }
              } else Wt = bn;
            } else Wt = Ni(Y, ee, { pageSize: jt, margins: Dt });
            if (
              ((Q = performance.now() - Z),
              Q > 500 &&
                console.warn(
                  `[PagedEditor] layoutDocument took ${Math.round(Q)}ms (${Wt.pages.length} pages)`
                ),
              R(Wt),
              K.current && B.current)
            ) {
              Z = performance.now();
              let bn = new Map();
              for (let Qt = 0; Qt < Y.length; Qt++) {
                let yn = Y[Qt],
                  On = ee[Qt];
                yn && On && bn.set(String(yn.id), { block: yn, measure: On });
              }
              B.current.setBlockLookup(bn);
              let zn = Ce ? wb(Nn, vo, o) : void 0;
              if (
                (ws(Wt.pages, K.current, {
                  pageGap: d,
                  showShadow: !0,
                  pageBackground: '#fff',
                  blockLookup: bn,
                  headerContent: ye,
                  footerContent: Te,
                  headerDistance: a?.headerDistance ? sn(a.headerDistance) : void 0,
                  footerDistance: a?.footerDistance ? sn(a.footerDistance) : void 0,
                  pageBorders: a?.pageBorders,
                  theme: i$1,
                  footnotesByPage: zn?.size ? zn : void 0,
                }),
                (Q = performance.now() - Z),
                Q > 500 && console.warn(`[PagedEditor] renderPages took ${Math.round(Q)}ms`),
                x)
              ) {
                let Qt = ku(K.current, c);
                x(Qt);
              }
            }
            let ur = performance.now() - oe;
            ur > 2e3 &&
              console.warn(
                `[PagedEditor] Layout pipeline took ${Math.round(ur)}ms total (${Y.length} blocks, ${ee.length} measures)`
              );
          } catch (Z) {
            console.error('[PagedEditor] Layout pipeline error:', Z);
          }
          Vt.onLayoutComplete(X);
        },
        [Oe, jt, At, d, c, Vt, s, l$1, a, x, o]
      ),
      ht = useRef(null),
      xo = useCallback(
        (v) => {
          if (ht.current) {
            ht.current.state = v;
            return;
          }
          let oe = requestAnimationFrame(() => {
            let X = ht.current;
            ((ht.current = null), X && gt(X.state));
          });
          ht.current = { rafId: oe, state: v };
        },
        [gt]
      );
    useEffect(
      () => () => {
        ht.current && (cancelAnimationFrame(ht.current.rafId), (ht.current = null));
      },
      []
    );
    let So = useCallback((v, oe = 1) => {
        if (!K.current) return null;
        let X = K.current.parentElement?.querySelector('[data-testid="selection-overlay"]');
        if (!X) return null;
        let Z = X.getBoundingClientRect(),
          ne = K.current.querySelectorAll('span[data-pm-start][data-pm-end]');
        for (let Q of Array.from(ne)) {
          let ee = Q,
            ce = Number(ee.dataset.pmStart),
            Ce = Number(ee.dataset.pmEnd);
          if (ee.classList.contains('layout-run-tab')) {
            if (v >= ce && v < Ce) {
              let ye = ee.getBoundingClientRect(),
                Te = ee.closest('.layout-page'),
                ze = Te ? Number(Te.dataset.pageNumber) - 1 : 0,
                Fe = ee.closest('.layout-line'),
                Ye = Fe ? Fe.offsetHeight : 16;
              return {
                x: (ye.left - Z.left) / oe,
                y: (ye.top - Z.top) / oe,
                height: Ye,
                pageIndex: ze,
              };
            }
            continue;
          }
          if (v >= ce && v <= Ce && Q.firstChild?.nodeType === Node.TEXT_NODE) {
            let ye = Q.firstChild,
              Te = Math.min(v - ce, ye.length),
              ze = ee.ownerDocument;
            if (!ze) continue;
            let Fe = ze.createRange();
            (Fe.setStart(ye, Te), Fe.setEnd(ye, Te));
            let Ye = Fe.getBoundingClientRect(),
              Xe = ee.closest('.layout-page'),
              et = Xe ? Number(Xe.dataset.pageNumber) - 1 : 0,
              ct = ee.closest('.layout-line'),
              Dt = ct ? ct.offsetHeight : 16;
            return {
              x: (Ye.left - Z.left) / oe,
              y: (Ye.top - Z.top) / oe,
              height: Dt,
              pageIndex: et,
            };
          }
        }
        let Y = K.current.querySelectorAll('.layout-empty-run');
        for (let Q of Array.from(Y)) {
          let ee = Q.closest('.layout-paragraph');
          if (!ee) continue;
          let ce = Number(ee.dataset.pmStart),
            Ce = Number(ee.dataset.pmEnd);
          if (v >= ce && v <= Ce) {
            let ye = Q.getBoundingClientRect(),
              Te = ee.closest('.layout-page'),
              ze = Te ? Number(Te.dataset.pageNumber) - 1 : 0,
              Fe = Q.closest('.layout-line'),
              Ye = Fe ? Fe.offsetHeight : 16;
            return {
              x: (ye.left - Z.left) / oe,
              y: (ye.top - Z.top) / oe,
              height: Ye,
              pageIndex: ze,
            };
          }
        }
        return null;
      }, []),
      Ct = useCallback(
        (v) => {
          let { from: oe, to: X } = v.selection;
          if ((he.current?.(oe, X), K.current)) {
            let Z = K.current.querySelectorAll('.layout-table-cell-selected');
            for (let Q of Array.from(Z)) Q.classList.remove('layout-table-cell-selected');
            let ne = v.selection;
            if ('$anchorCell' in ne && typeof ne.forEachCell == 'function') {
              let Q = [];
              ne.forEachCell((ce, Ce) => {
                Q.push([Ce, Ce + ce.nodeSize]);
              });
              let ee = K.current.querySelectorAll('.layout-table-cell');
              for (let ce of Array.from(ee)) {
                let Ce = ce,
                  ye = Ce.dataset.pmStart;
                if (ye !== void 0) {
                  let Te = Number(ye);
                  for (let [ze, Fe] of Q)
                    if (Te >= ze && Te < Fe) {
                      Ce.classList.add('layout-table-cell-selected');
                      break;
                    }
                }
              }
            }
          }
          if (!(!Re || F.length === 0))
            if (oe === X) {
              let Z = So(oe, c);
              if (Z) G(Z);
              else {
                let ne = K.current?.parentElement?.querySelector(
                    '[data-testid="selection-overlay"]'
                  ),
                  Y = K.current?.querySelector('.layout-page');
                if (ne && Y) {
                  let Q = ne.getBoundingClientRect(),
                    ee = Y.getBoundingClientRect(),
                    ce = l(Re, F, C, oe);
                  G(
                    ce
                      ? { ...ce, x: ce.x + (ee.left - Q.left) / c, y: ce.y + (ee.top - Q.top) / c }
                      : null
                  );
                } else G(null);
              }
              O([]);
            } else {
              let Z = K.current?.parentElement?.querySelector('[data-testid="selection-overlay"]');
              if (Z && K.current) {
                let ne = Z.getBoundingClientRect(),
                  Y = [],
                  Q = K.current.querySelectorAll('span[data-pm-start][data-pm-end]');
                for (let ee of Array.from(Q)) {
                  let ce = ee,
                    Ce = Number(ce.dataset.pmStart);
                  if (Number(ce.dataset.pmEnd) > oe && Ce < X) {
                    if (ce.classList.contains('layout-run-tab')) {
                      let Xe = ce.getBoundingClientRect(),
                        et = ce.closest('.layout-page'),
                        ct = et ? Number(et.dataset.pageNumber) - 1 : 0;
                      Y.push({
                        x: (Xe.left - ne.left) / c,
                        y: (Xe.top - ne.top) / c,
                        width: Xe.width / c,
                        height: Xe.height / c,
                        pageIndex: ct,
                      });
                      continue;
                    }
                    if (ee.firstChild?.nodeType !== Node.TEXT_NODE) continue;
                    let Te = ee.firstChild,
                      ze = ce.ownerDocument;
                    if (!ze) continue;
                    let Fe = Math.max(0, oe - Ce),
                      Ye = Math.min(Te.length, X - Ce);
                    if (Fe < Ye) {
                      let Xe = ze.createRange();
                      (Xe.setStart(Te, Fe), Xe.setEnd(Te, Ye));
                      let et = Xe.getClientRects();
                      for (let ct of Array.from(et)) {
                        let Dt = ce.closest('.layout-page'),
                          Wt = Dt ? Number(Dt.dataset.pageNumber) - 1 : 0;
                        Y.push({
                          x: (ct.left - ne.left) / c,
                          y: (ct.top - ne.top) / c,
                          width: ct.width / c,
                          height: ct.height / c,
                          pageIndex: Wt,
                        });
                      }
                    }
                  }
                }
                if (Y.length > 0) O(Y);
                else {
                  let ee = K.current.querySelector('.layout-page');
                  if (ee) {
                    let ce = ee.getBoundingClientRect(),
                      Ce = (ce.left - ne.left) / c,
                      ye = (ce.top - ne.top) / c,
                      ze = k(Re, F, C, oe, X).map((Fe) => ({ ...Fe, x: Fe.x + Ce, y: Fe.y + ye }));
                    O(ze);
                  } else O([]);
                }
              } else O([]);
              G(null);
            }
        },
        [Re, F, C, So, c]
      ),
      ko = useCallback(
        (v, oe) => {
          if (v.docChanged) {
            (Vt.incrementStateSeq(), xo(oe));
            let X = T.current?.getDocument();
            X && ue.current?.(X);
          }
          (Vt.requestRender(), v.docChanged || Ct(oe));
        },
        [xo, Ct, Vt]
      ),
      ia = useCallback(
        (v) => {
          let { selection: oe } = v;
          (oe instanceof NodeSelection && oe.node.type.name === 'image'
            ? (O([]), G(null))
            : Vt.isSafeToRender() && Ct(v),
            requestAnimationFrame(() => {
              let X = T.current?.getView();
              if (!X) {
                E(null);
                return;
              }
              let { selection: Z } = X.state;
              if (Z instanceof NodeSelection && Z.node.type.name === 'image') {
                let ne = Z.from,
                  Y = K.current?.querySelector(`[data-pm-start="${ne}"]`);
                if (Y) {
                  E(H(Y, ne));
                  return;
                }
              }
              D.current || E(null);
            }));
        },
        [Ct, c, H, Vt]
      ),
      vt = useCallback(
        (v, oe) => {
          if (!K.current || !Re) return null;
          let X = nu(K.current, v, oe, c);
          if (X !== null) return X;
          let Z = K.current.querySelectorAll('.layout-page'),
            ne = -1,
            Y = null;
          for (let Te = 0; Te < Z.length; Te++) {
            let Fe = Z[Te].getBoundingClientRect();
            if (v >= Fe.left && v <= Fe.right && oe >= Fe.top && oe <= Fe.bottom) {
              ((ne = Te), (Y = Fe));
              break;
            }
          }
          if (ne < 0 || !Y) return null;
          let Q = (v - Y.left) / c,
            ee = (oe - Y.top) / c,
            ce = Re.pages[ne];
          if (!ce) return null;
          let Ce = { pageIndex: ne, page: ce, pageY: ee },
            ye = i(Ce, F, C, { x: Q, y: ee });
          if (!ye) return null;
          if (ye.fragment.kind === 'table') {
            let Te = j(Ce, F, C, { x: Q, y: ee });
            return fs(ye, Te);
          }
          return fs(ye);
        },
        [Re, F, C, c]
      ),
      cn = useCallback((v) => {
        let oe = T.current?.getView();
        if (!oe) return null;
        try {
          let X = oe.state.doc.resolve(v);
          for (let Z = X.depth; Z > 0; Z--) {
            let ne = X.node(Z);
            if (ne.type.name === 'tableCell' || ne.type.name === 'tableHeader') return X.before(Z);
          }
        } catch {}
        return null;
      }, []),
      wo = useCallback((v) => {
        let oe = ['layout-block-image', 'layout-image', 'layout-page-floating-image'],
          X = (Z) => !!Z.dataset.pmStart && oe.some((ne) => Z.classList.contains(ne));
        return v.tagName === 'IMG' && v.classList.contains('layout-run-image')
          ? v
          : v.tagName === 'IMG' && v.parentElement && X(v.parentElement)
            ? v.parentElement
            : X(v)
              ? v
              : null;
      }, []),
      hn = useCallback((v) => {
        let oe = K.current;
        if (!oe) return;
        let X = oe.querySelector(`[data-pm-start="${v}"]`);
        X && X.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, []),
      Rt = useCallback(
        (v) => {
          if (!T.current || v.button !== 0) return;
          if (v.target.closest('a[href^="#"]')) {
            (v.preventDefault(), v.stopPropagation());
            return;
          }
          if (u) return;
          if (M && P) {
            let Y = v.target;
            if (
              !(
                Y.closest('.layout-page-header') ||
                Y.closest('.layout-page-footer') ||
                Y.closest('.hf-inline-editor')
              )
            ) {
              (v.preventDefault(), v.stopPropagation(), P());
              return;
            }
          }
          if (!M) {
            let Y = v.target;
            if (Y.closest('.layout-page-header') || Y.closest('.layout-page-footer')) {
              (v.preventDefault(),
                T.current && (T.current.setSelection(0), T.current.focus(), V(true)));
              return;
            }
          }
          let X = v.target;
          if (X.classList.contains('layout-table-resize-handle')) {
            (v.preventDefault(),
              v.stopPropagation(),
              (fe.current = true),
              (Ie.current = v.clientX),
              (Ge.current = X),
              X.classList.add('dragging'));
            let Y = parseInt(X.dataset.columnIndex ?? '0', 10);
            ((ge.current = Y), (Se.current = parseInt(X.dataset.tablePmStart ?? '0', 10)));
            let Q = T.current.getView();
            if (Q) {
              let ee = Q.state.doc.resolve(Se.current + 1);
              for (let ce = ee.depth; ce >= 0; ce--) {
                let Ce = ee.node(ce);
                if (Ce.type.name === 'table') {
                  let ye = Ce.attrs.columnWidths;
                  ye &&
                    ye[Y] !== void 0 &&
                    ye[Y + 1] !== void 0 &&
                    (de.current = { left: ye[Y], right: ye[Y + 1] });
                  break;
                }
              }
            }
            return;
          }
          if (
            X.classList.contains('layout-table-row-resize-handle') ||
            X.classList.contains('layout-table-edge-handle-bottom')
          ) {
            (v.preventDefault(),
              v.stopPropagation(),
              (Ke.current = true),
              (qe.current = v.clientY),
              (rt.current = X),
              (Ae.current = X.dataset.isEdge === 'bottom'),
              X.classList.add('dragging'));
            let Y = parseInt(X.dataset.rowIndex ?? '0', 10);
            ((at.current = Y), ($e.current = parseInt(X.dataset.tablePmStart ?? '0', 10)));
            let Q = T.current.getView();
            if (Q) {
              let ee = Q.state.doc.resolve($e.current + 1);
              for (let ce = ee.depth; ce >= 0; ce--) {
                let Ce = ee.node(ce);
                if (Ce.type.name === 'table') {
                  let ye = null,
                    Te = 0;
                  if (
                    (Ce.forEach((ze) => {
                      (Te === Y && (ye = ze), Te++);
                    }),
                    ye)
                  ) {
                    let ze = ye.attrs.height;
                    if (ze) Qe.current = ze;
                    else {
                      let Ye = X.closest('.layout-table')?.querySelector(`[data-row-index="${Y}"]`),
                        Xe = Ye ? Ye.getBoundingClientRect().height : 30;
                      Qe.current = Math.round(Xe * 15);
                    }
                  }
                  break;
                }
              }
            }
            return;
          }
          if (X.classList.contains('layout-table-edge-handle-right')) {
            (v.preventDefault(),
              v.stopPropagation(),
              (mt.current = true),
              (He.current = v.clientX),
              (Nt.current = X),
              X.classList.add('dragging'));
            let Y = parseInt(X.dataset.columnIndex ?? '0', 10);
            ((wt.current = Y), (yo.current = parseInt(X.dataset.tablePmStart ?? '0', 10)));
            let Q = T.current.getView();
            if (Q) {
              let ee = Q.state.doc.resolve(yo.current + 1);
              for (let ce = ee.depth; ce >= 0; ce--) {
                let Ce = ee.node(ce);
                if (Ce.type.name === 'table') {
                  let ye = Ce.attrs.columnWidths;
                  ye && ye[Y] !== void 0 && (ln.current = ye[Y]);
                  break;
                }
              }
            }
            return;
          }
          let Z = wo(X);
          if (Z) {
            (v.preventDefault(), v.stopPropagation());
            let Y = Z.dataset.pmStart;
            if (Y !== void 0) {
              let Q = parseInt(Y, 10);
              (T.current.setNodeSelection(Q), E(H(Z, Q)), O([]), G(null));
            }
            (T.current.focus(), V(true));
            return;
          }
          (E(null), v.preventDefault());
          let ne = vt(v.clientX, v.clientY);
          if (ne !== null) {
            let Y = cn(ne);
            ((Tt.current = Y),
              (zt.current = false),
              (le.current = null),
              (Bt.current = null),
              (ae.current = true),
              (pe.current = ne),
              T.current.setSelection(ne));
          } else {
            ((Tt.current = null), (zt.current = false));
            let Y = T.current.getView();
            if (Y) {
              let Q = Math.max(0, Y.state.doc.content.size - 1);
              (T.current.setSelection(Q), (pe.current = Q), (ae.current = true));
            }
          }
          (T.current.focus(), V(true));
        },
        [vt, cn, u, M, P, c]
      ),
      Co = useCallback(
        (v) => {
          if (fe.current) {
            v.preventDefault();
            let Z = v.clientX - Ie.current;
            if (Ge.current) {
              let ne = parseFloat(Ge.current.style.left);
              ((Ge.current.style.left = `${ne + Z}px`), (Ie.current = v.clientX));
              let Y = Math.round(Z * 15),
                Q = 300,
                ee = de.current.left + Y,
                ce = de.current.right - Y;
              ee >= Q && ce >= Q && (de.current = { left: ee, right: ce });
            }
            return;
          }
          if (Ke.current) {
            v.preventDefault();
            let Z = v.clientY - qe.current;
            if (rt.current) {
              let ne = parseFloat(rt.current.style.top);
              ((rt.current.style.top = `${ne + Z}px`), (qe.current = v.clientY));
              let Y = Math.round(Z * 15),
                Q = 200,
                ee = Qe.current + Y;
              ee >= Q && (Qe.current = ee);
            }
            return;
          }
          if (mt.current) {
            v.preventDefault();
            let Z = v.clientX - He.current;
            if (Nt.current) {
              let ne = parseFloat(Nt.current.style.left);
              ((Nt.current.style.left = `${ne + Z}px`), (He.current = v.clientX));
              let Y = Math.round(Z * 15),
                Q = 300,
                ee = ln.current + Y;
              ee >= Q && (ln.current = ee);
            }
            return;
          }
          if (!ae.current || pe.current === null || !T.current || !K.current) return;
          let oe = vt(v.clientX, v.clientY);
          if (oe === null) return;
          if (Tt.current !== null) {
            if (zt.current) {
              let ne = cn(oe);
              if (ne !== null) {
                T.current.setCellSelection(Tt.current, ne);
                return;
              }
            }
            let Z = cn(oe);
            if (Z !== null && Z !== Tt.current) {
              ((zt.current = true), T.current.setCellSelection(Tt.current, Z), (Bt.current = null));
              return;
            }
            if (le.current !== null && oe === le.current) {
              if (Bt.current === null) Bt.current = v.clientX;
              else if (Math.abs(v.clientX - Bt.current) >= ar) {
                ((zt.current = true),
                  T.current.setCellSelection(Tt.current, Tt.current),
                  (Bt.current = null));
                return;
              }
            } else ((Bt.current = null), (le.current = oe));
          }
          let X = pe.current;
          T.current.setSelection(X, oe);
        },
        [vt, cn]
      ),
      Be = useCallback(() => {
        if (fe.current) {
          ((fe.current = false),
            Ge.current && (Ge.current.classList.remove('dragging'), (Ge.current = null)));
          let v = T.current?.getView();
          if (v) {
            let oe = Se.current,
              X = ge.current,
              { left: Z, right: ne } = de.current,
              Y = v.state.doc.resolve(oe + 1);
            for (let Q = Y.depth; Q >= 0; Q--) {
              let ee = Y.node(Q);
              if (ee.type.name === 'table') {
                let ce = Y.before(Q),
                  Ce = v.state.tr,
                  ye = [...ee.attrs.columnWidths];
                ((ye[X] = Z),
                  (ye[X + 1] = ne),
                  Ce.setNodeMarkup(ce, void 0, { ...ee.attrs, columnWidths: ye }));
                let Te = ce + 1;
                (ee.forEach((ze) => {
                  let Fe = Te + 1,
                    Ye = 0;
                  (ze.forEach((Xe) => {
                    let et = Xe.attrs.colspan || 1;
                    if (Ye === X || Ye === X + 1) {
                      let ct = Ye === X ? Z : ne;
                      Ce.setNodeMarkup(Ce.mapping.map(Fe), void 0, {
                        ...Xe.attrs,
                        width: ct,
                        widthType: 'dxa',
                        colwidth: null,
                      });
                    }
                    ((Fe += Xe.nodeSize), (Ye += et));
                  }),
                    (Te += ze.nodeSize));
                }),
                  v.dispatch(Ce));
                break;
              }
            }
          }
          return;
        }
        if (Ke.current) {
          ((Ke.current = false),
            rt.current && (rt.current.classList.remove('dragging'), (rt.current = null)));
          let v = T.current?.getView();
          if (v) {
            let oe = $e.current,
              X = at.current,
              Z = Qe.current,
              ne = v.state.doc.resolve(oe + 1);
            for (let Y = ne.depth; Y >= 0; Y--) {
              let Q = ne.node(Y);
              if (Q.type.name === 'table') {
                let ee = ne.before(Y),
                  ce = v.state.tr,
                  Ce = ee + 1,
                  ye = 0;
                (Q.forEach((Te) => {
                  (ye === X &&
                    ce.setNodeMarkup(ce.mapping.map(Ce), void 0, {
                      ...Te.attrs,
                      height: Z,
                      heightRule: 'atLeast',
                    }),
                    (Ce += Te.nodeSize),
                    ye++);
                }),
                  v.dispatch(ce));
                break;
              }
            }
          }
          return;
        }
        if (mt.current) {
          ((mt.current = false),
            Nt.current && (Nt.current.classList.remove('dragging'), (Nt.current = null)));
          let v = T.current?.getView();
          if (v) {
            let oe = yo.current,
              X = wt.current,
              Z = ln.current,
              ne = v.state.doc.resolve(oe + 1);
            for (let Y = ne.depth; Y >= 0; Y--) {
              let Q = ne.node(Y);
              if (Q.type.name === 'table') {
                let ee = ne.before(Y),
                  ce = v.state.tr,
                  Ce = [...Q.attrs.columnWidths];
                ((Ce[X] = Z), ce.setNodeMarkup(ee, void 0, { ...Q.attrs, columnWidths: Ce }));
                let ye = ee + 1;
                (Q.forEach((Te) => {
                  let ze = ye + 1,
                    Fe = 0;
                  (Te.forEach((Ye) => {
                    let Xe = Ye.attrs.colspan || 1;
                    (Fe === X &&
                      ce.setNodeMarkup(ce.mapping.map(ze), void 0, {
                        ...Ye.attrs,
                        width: Z,
                        widthType: 'dxa',
                        colwidth: null,
                      }),
                      (ze += Ye.nodeSize),
                      (Fe += Xe));
                  }),
                    (ye += Te.nodeSize));
                }),
                  v.dispatch(ce));
                break;
              }
            }
          }
          return;
        }
        ((ae.current = false), (zt.current = false), (le.current = null), (Bt.current = null));
      }, []);
    useEffect(
      () => (
        window.addEventListener('mousemove', Co),
        window.addEventListener('mouseup', Be),
        () => {
          (window.removeEventListener('mousemove', Co), window.removeEventListener('mouseup', Be));
        }
      ),
      [Co, Be]
    );
    let Je = useCallback(
        (v) => {
          let oe = v.target.closest('a[href^="#"]');
          if (oe) {
            (v.preventDefault(), v.stopPropagation());
            let X = oe.getAttribute('href')?.substring(1);
            if (X && T.current) {
              let Z = T.current.getView();
              if (Z) {
                let ne = null;
                (Z.state.doc.descendants((Y, Q) => {
                  if (ne !== null) return false;
                  if (Y.type.name === 'paragraph' && Y.attrs.bookmarks?.some((ce) => ce.name === X))
                    return ((ne = Q), false);
                }),
                  ne !== null && (hn(ne), T.current.setSelection(ne + 1)));
              }
            }
            return;
          }
          if (v.detail === 2 && S) {
            let X = v.target,
              Z = X.closest('.layout-page-header'),
              ne = X.closest('.layout-page-footer');
            if (Z) {
              (v.preventDefault(), v.stopPropagation(), S('header'));
              return;
            }
            if (ne) {
              (v.preventDefault(), v.stopPropagation(), S('footer'));
              return;
            }
          }
          if (v.detail === 2 && T.current) {
            let X = vt(v.clientX, v.clientY);
            if (X !== null) {
              let Z = cn(X);
              if (Z !== null) {
                (v.preventDefault(), v.stopPropagation(), T.current.setCellSelection(Z, Z));
                return;
              }
              let ne = T.current.getView();
              if (ne) {
                let { doc: Y } = ne.state,
                  Q = Y.resolve(X),
                  ee = Q.parent;
                if (ee.isTextblock) {
                  let ce = ee.textContent,
                    Ce = Q.parentOffset,
                    ye = Ce;
                  for (; ye > 0 && /\w/.test(ce[ye - 1]); ) ye--;
                  let Te = Ce;
                  for (; Te < ce.length && /\w/.test(ce[Te]); ) Te++;
                  let ze = Q.start() + ye,
                    Fe = Q.start() + Te;
                  ze < Fe && T.current.setSelection(ze, Fe);
                }
              }
            }
          }
          if (v.detail === 3 && T.current) {
            let X = vt(v.clientX, v.clientY);
            if (X !== null) {
              let Z = T.current.getView();
              if (Z) {
                let { doc: ne } = Z.state,
                  Y = ne.resolve(X),
                  Q = Y.start(Y.depth),
                  ee = Y.end(Y.depth);
                T.current.setSelection(Q, ee);
              }
            }
          }
        },
        [vt, S]
      ),
      aa = useCallback(
        (v) => {
          u || v.target.closest('.docx-comments-sidebar') || (T.current?.focus(), V(true));
        },
        [u]
      ),
      sa = useCallback((v) => {
        let oe = v.relatedTarget;
        (oe && _.current?.contains(oe)) || V(false);
      }, []),
      bt = useCallback((v, oe, X) => {
        let Z = T.current?.getView();
        if (Z)
          try {
            let ne = Z.state.doc.nodeAt(v);
            if (!ne || ne.type.name !== 'image') return;
            let Y = Z.state.tr.setNodeMarkup(v, void 0, { ...ne.attrs, width: oe, height: X });
            (Z.dispatch(Y), T.current?.setNodeSelection(v));
          } catch {}
      }, []),
      yt = useCallback(() => {
        D.current = true;
      }, []),
      sr = useCallback(() => {
        D.current = false;
      }, []),
      $t = useCallback(
        (v, oe, X) => {
          let Z = T.current?.getView();
          if (Z)
            try {
              let ne = Z.state.doc.nodeAt(v);
              if (!ne || ne.type.name !== 'image') return;
              if (
                ne.attrs.displayMode === 'float' ||
                (ne.attrs.wrapType && ['square', 'tight', 'through'].includes(ne.attrs.wrapType))
              ) {
                let Q = K.current?.querySelectorAll('.layout-page');
                if (!Q || Q.length === 0) return;
                let ee = null;
                for (let et of Q) {
                  let ct = et.getBoundingClientRect();
                  if (X >= ct.top && X <= ct.bottom) {
                    ee = et.querySelector('.layout-page-content');
                    break;
                  }
                }
                if ((ee || (ee = Q[Q.length - 1].querySelector('.layout-page-content')), !ee))
                  return;
                let ce = ee.getBoundingClientRect(),
                  Ce = (oe - ce.left) / c,
                  ye = (X - ce.top) / c,
                  Te = 914400 / 96,
                  ze = Math.round(Ce * Te),
                  Fe = Math.round(ye * Te),
                  Ye = {
                    horizontal: { posOffset: ze, relativeTo: 'margin' },
                    vertical: { posOffset: Fe, relativeTo: 'margin' },
                  },
                  Xe = Z.state.tr.setNodeMarkup(v, void 0, { ...ne.attrs, position: Ye });
                (Z.dispatch(Xe), T.current?.setNodeSelection(v));
              } else {
                let Q = vt(oe, X);
                if (Q === null || Q === v || Q === v + 1) return;
                let ee = Z.state.tr;
                if (Q <= v)
                  ((ee = ee.delete(v, v + ne.nodeSize)),
                    (ee = ee.insert(Q, ne)),
                    T.current?.setNodeSelection(Q));
                else {
                  ee = ee.delete(v, v + ne.nodeSize);
                  let ce = Q - ne.nodeSize;
                  ((ee = ee.insert(Math.min(ce, ee.doc.content.size), ne)),
                    T.current?.setNodeSelection(Math.min(ce, ee.doc.content.size - 1)));
                }
                Z.dispatch(ee);
              }
            } catch {}
        },
        [vt, c]
      ),
      Jt = useCallback(() => {
        D.current = true;
      }, []),
      lr = useCallback(() => {
        D.current = false;
      }, []),
      cr = useCallback(
        (v) => {
          if (!u) {
            if (
              (T.current?.isFocused() || (T.current?.focus(), V(true)),
              v.key === ' ' && !v.ctrlKey && !v.metaKey)
            ) {
              v.preventDefault();
              let oe = T.current?.getView();
              if (oe) {
                let { from: X, to: Z } = oe.state.selection;
                oe.someProp('handleTextInput', (Y) => Y(oe, X, Z, ' ')) ||
                  oe.dispatch(oe.state.tr.insertText(' '));
              }
              return;
            }
            (['PageUp', 'PageDown'].includes(v.key) && !v.metaKey && v.ctrlKey,
              v.key === 'Home' &&
                (v.metaKey || v.ctrlKey) &&
                _.current &&
                (_.current.scrollTop = 0),
              v.key === 'End' &&
                (v.metaKey || v.ctrlKey) &&
                _.current &&
                (_.current.scrollTop = _.current.scrollHeight));
          }
        },
        [u]
      ),
      To = useCallback(
        (v) => {
          u ||
            v.target.closest('.docx-comments-sidebar') ||
            T.current?.isFocused() ||
            (T.current?.focus(), V(true));
        },
        [u]
      ),
      Hn = useCallback(
        (v) => {
          (gt(v.state),
            Ct(v.state),
            u ||
              requestAnimationFrame(() => {
                (v.focus(), V(true));
              }));
        },
        [gt, Ct, u]
      );
    useEffect(() => {
      let v = () => {
        let oe = T.current?.getView();
        oe && (c$1(), ps(), gt(oe.state), Ct(oe.state));
      };
      return (
        window.document.fonts.addEventListener('loadingdone', v),
        () => {
          window.document.fonts.removeEventListener('loadingdone', v);
        }
      );
    }, []);
    let dr = useRef(0);
    (useEffect(() => {
      if (dr.current === 0) {
        dr.current = 1;
        return;
      }
      let v = T.current?.getView();
      v && gt(v.state);
    }, [s, l$1, gt]),
      useEffect(() => {
        let v = _.current;
        if (!v) return;
        let oe = new ResizeObserver(() => {
          let X = T.current?.getState();
          X && Ct(X);
        });
        return (oe.observe(v), () => oe.disconnect());
      }, [Ct]),
      useImperativeHandle(
        n,
        () => ({
          getDocument() {
            return T.current?.getDocument() ?? null;
          },
          getState() {
            return T.current?.getState() ?? null;
          },
          getView() {
            return T.current?.getView() ?? null;
          },
          focus() {
            (T.current?.focus(), V(true));
          },
          blur() {
            (T.current?.blur(), V(false));
          },
          isFocused() {
            return T.current?.isFocused() ?? false;
          },
          dispatch(v) {
            T.current?.dispatch(v);
          },
          undo() {
            return T.current?.undo() ?? false;
          },
          redo() {
            return T.current?.redo() ?? false;
          },
          setSelection(v, oe) {
            T.current?.setSelection(v, oe);
          },
          getLayout() {
            return Re;
          },
          relayout() {
            let v = T.current?.getState();
            v && gt(v);
          },
          scrollToPosition: hn,
        }),
        [Re, gt, hn]
      ),
      useEffect(() => {
        let v = T.current?.getState();
        Re && v && Ct(v);
      }, [Re, Ct]),
      useEffect(() => {
        Ee.current &&
          T.current &&
          Ee.current({
            getDocument: () => T.current?.getDocument() ?? null,
            getState: () => T.current?.getState() ?? null,
            getView: () => T.current?.getView() ?? null,
            focus: () => {
              (T.current?.focus(), V(true));
            },
            blur: () => {
              (T.current?.blur(), V(false));
            },
            isFocused: () => T.current?.isFocused() ?? false,
            dispatch: (v) => T.current?.dispatch(v),
            undo: () => T.current?.undo() ?? false,
            redo: () => T.current?.redo() ?? false,
            setSelection: (v, oe) => T.current?.setSelection(v, oe),
            getLayout: () => Re,
            relayout: () => {
              let v = T.current?.getState();
              v && gt(v);
            },
            scrollToPosition: hn,
          });
      }, [Re, gt]));
    let la = useMemo(() => {
      if (!Re) return Ru + 48;
      let v = Re.pages.length;
      return v * jt.h + (v - 1) * d + 48;
    }, [Re, jt.h, d]);
    return jsxs('div', {
      ref: (v) => {
        ((_.current = v),
          typeof W == 'function' ? W(v) : W && typeof W == 'object' && (W.current = v));
      },
      className: `ep-root paged-editor ${z ?? ''}`,
      style: { ...pb, ...U },
      tabIndex: 0,
      onFocus: aa,
      onBlur: sa,
      onKeyDown: cr,
      onMouseDown: To,
      children: [
        jsx(Bd, {
          ref: T,
          document: o,
          styles: r,
          widthPx: Oe,
          readOnly: u,
          onTransaction: ko,
          onSelectionChange: ia,
          externalPlugins: m,
          extensionManager: b,
          onEditorViewReady: Hn,
          onKeyDown: J,
        }),
        jsxs('div', {
          style: {
            ...fb,
            minHeight: la,
            transform: (() => {
              let v = [];
              return (
                $ && v.push('translateX(-120px)'),
                c !== 1 && v.push(`scale(${c})`),
                v.length > 0 ? v.join(' ') : void 0
              );
            })(),
            transformOrigin: 'top center',
            transition: 'transform 0.2s ease',
          },
          children: [
            jsx('div', {
              ref: K,
              className: `paged-editor__pages${u ? ' paged-editor--readonly' : ''}${M ? ` paged-editor--hf-editing paged-editor--editing-${M}` : ''}`,
              style: mb,
              onMouseDown: Rt,
              onClick: Je,
              'aria-hidden': 'true',
            }),
            jsx(Dd, {
              selectionRects: q,
              caretPosition: j$1,
              isFocused: A,
              pageGap: d,
              readOnly: u,
            }),
            jsx($d, {
              imageInfo: be,
              zoom: c,
              isFocused: A,
              onResize: bt,
              onResizeStart: yt,
              onResizeEnd: sr,
              onDragMove: $t,
              onDragStart: Jt,
              onDragEnd: lr,
            }),
            w && jsx('div', { className: 'paged-editor__plugin-overlays', style: gb, children: w }),
          ],
        }),
        L,
      ],
    });
  }),
  Fu = memo(Cb);
var Pb = lazy(() => import('./FindReplaceDialog-AWQXKEUQ.js')),
  Mb = lazy(() => import('./HyperlinkDialog-BA25XUT5.js')),
  Eb = lazy(() =>
    import('./TablePropertiesDialog-EMUEVYB3.js').then((e) => ({
      default: e.TablePropertiesDialog,
    }))
  ),
  Ib = lazy(() =>
    import('./ImagePositionDialog-AIAMKPFK.js').then((e) => ({ default: e.ImagePositionDialog }))
  ),
  Fb = lazy(() =>
    import('./ImagePropertiesDialog-ERFCUVCW.js').then((e) => ({
      default: e.ImagePropertiesDialog,
    }))
  ),
  Lb = lazy(() =>
    import('./FootnotePropertiesDialog-ZM3EF3EF.js').then((e) => ({
      default: e.FootnotePropertiesDialog,
    }))
  ),
  Lu = [
    { value: 'editing', label: 'Editing', icon: 'edit_note', desc: 'Edit document directly' },
    {
      value: 'suggesting',
      label: 'Suggesting',
      icon: 'edit_note',
      desc: 'Edits become suggestions',
    },
  ];
function Bb({ mode: e, onModeChange: t }) {
  let [n, o] = useState(false),
    [r, i] = useState(false),
    a = useRef(null),
    s = useRef(null),
    [l, u] = useState({ top: 0, left: 0 }),
    d$1 = Lu.find((c) => c.value === e);
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
            children: Lu.map((c) =>
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
var Ab = Date.now(),
  Rs = -1;
function Ps(e, t, n) {
  return {
    id: Ab++,
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
var Bu = forwardRef(function (
  {
    documentBuffer: t,
    document: n,
    onSave: o$1,
    author: r = 'User',
    onChange: i,
    onUnsavedChangesChange: a$2,
    onSelectionChange: s,
    onError: l,
    onFontsLoaded: u$1,
    theme: d$1,
    showToolbar: c$1 = true,
    showZoomControl: p = true,
    showPageNumbers: f$1 = true,
    enablePageNavigation: m$2 = true,
    pageNumberPosition: b = 'bottom-center',
    pageNumberVariant: g = 'default',
    showMarginGuides: x$1 = false,
    marginGuideColor: w,
    showRuler: S = false,
    rulerUnit: M = 'inch',
    initialZoom: P = 1,
    readOnly: z$1 = false,
    toolbarExtra: U$1,
    className: $ = '',
    style: L,
    placeholder: W,
    loadingIndicator: _,
    showOutline: K = false,
    showPrintButton: T = true,
    printOptions: B,
    onPrint: J,
    onCopy: he,
    onCut: ue,
    onPaste: Ee,
    externalPlugins: we,
    onEditorViewReady: Re,
    onRenderedDomContextReady: R,
    pluginOverlays: F,
  },
  k
) {
  let [C, I] = useState({
      isLoading: !!t,
      parseError: null,
      zoom: P,
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
    [A, V] = useState(false),
    [q$1, O$1] = useState(false),
    [j, G] = useState(false),
    [be, E] = useState(false),
    [D, H$1] = useState(null),
    [ae, pe] = useState(K),
    fe = useRef(false);
  fe.current = ae;
  let [Ie, ge] = useState([]),
    [Se, de] = useState(false),
    [Ge, Ke] = useState([]),
    [qe, at] = useState([]),
    [$e, Qe] = useState(false),
    [rt, Ae] = useState(null),
    [mt, He] = useState(null),
    [wt, yo] = useState('editing'),
    [ln, Nt] = useState(null),
    zt = useRef(null),
    Tt = useCallback(() => {
      let y = Oe.current?.getView();
      if (!y) return;
      let { doc: h, schema: N } = y.state,
        re = N.marks.insertion,
        te = N.marks.deletion;
      if (!re && !te) return;
      let se = [];
      h.descendants((me, ve) => {
        if (me.isText)
          for (let Ue of me.marks)
            (Ue.type === re || Ue.type === te) &&
              se.push({
                type: Ue.type === re ? 'insertion' : 'deletion',
                text: me.text || '',
                author: Ue.attrs.author || '',
                date: Ue.attrs.date,
                from: ve,
                to: ve + me.nodeSize,
                revisionId: Ue.attrs.revisionId,
              });
      });
      let ie = [];
      for (let me of se) {
        let ve = ie[ie.length - 1];
        ve && ve.revisionId === me.revisionId && ve.type === me.type && ve.to === me.from
          ? ((ve.text += me.text), (ve.to = me.to))
          : ie.push({ ...me });
      }
      at(ie);
    }, []);
  (useEffect(
    () => () => {
      zt.current && clearTimeout(zt.current);
    },
    []
  ),
    useEffect(() => {
      if ((pe(K), K)) {
        let y = Oe.current?.getView();
        y && ge(oo(y.state.doc));
      }
    }, [K]));
  let le = Cd(n || null, { maxEntries: 100, groupingInterval: 500, enableKeyboardShortcuts: true }),
    Bt = U({
      document: le.state,
      enabled: !z$1,
      warnBeforeLeave: false,
      onChangeStatusChange: a$2,
    }),
    ar = useRef(false);
  useEffect(() => {
    if (ar.current) return;
    let y = le.state;
    if (!y) return;
    let h = y.package?.document?.comments;
    h && h.length > 0 && (Ke(h), de(true), (ar.current = true));
  }, [le.state]);
  let Vt = useMemo(() => {
      let y = new wn(lo());
      return (y.buildSchema(), y.initializeRuntime(), y);
    }, []),
    jt = useMemo(() => Pd(false, r), []),
    At = useMemo(() => [jt, ...(we ?? [])], [jt, we]),
    Oe = useRef(null),
    Ot = useRef(null),
    gt = useRef(null),
    ht = useRef(null),
    xo = useRef(null),
    So = useRef(null),
    Ct = useRef(null),
    ko = useRef(null),
    ia = useRef(null),
    vt = useRef(null),
    [cn, wo] = useState(0),
    hn = useRef(le.state);
  hn.current = le.state;
  let Rt = useRef({ style: 'single', size: 4, color: { rgb: '000000' } }),
    Co = useCallback((y) => {
      if (((ia.current = y), vt.current && (vt.current.disconnect(), (vt.current = null)), !y)) {
        wo(0);
        return;
      }
      wo(y.offsetHeight);
      let h = new ResizeObserver(() => {
        wo(y.offsetHeight);
      });
      (h.observe(y), (vt.current = h));
    }, []);
  useEffect(
    () => () => {
      vt.current?.disconnect();
    },
    []
  );
  let Be = useCallback(() => (D && Ot.current ? Ot.current.getView() : Oe.current?.getView()), [D]),
    Je = useCallback(() => {
      D && Ot.current ? Ot.current.focus() : Oe.current?.focus();
    }, [D]),
    aa = useCallback(() => {
      D && Ot.current ? Ot.current.undo() : Oe.current?.undo();
    }, [D]),
    sa = useCallback(() => {
      D && Ot.current ? Ot.current.redo() : Oe.current?.redo();
    }, [D]),
    bt = m(),
    yt = m$1();
  (useEffect(() => {
    if (!t) {
      n &&
        (le.reset(n),
        I((h) => ({ ...h, isLoading: false })),
        o(n).catch((h) => {
          console.warn('Failed to load document fonts:', h);
        }));
      return;
    }
    (I((h) => ({ ...h, isLoading: true, parseError: null })),
      (async () => {
        try {
          let h = await q(t);
          (le.reset(h),
            I((N) => ({ ...N, isLoading: !1, parseError: null })),
            o(h).catch((N) => {
              console.warn('Failed to load document fonts:', N);
            }));
        } catch (h) {
          let N = h instanceof Error ? h.message : 'Failed to parse document';
          (I((re) => ({ ...re, isLoading: false, parseError: N })),
            l?.(h instanceof Error ? h : new Error(N)));
        }
      })());
  }, [t, n, l]),
    useEffect(() => {
      n && !t && le.reset(n);
    }, [n, t]),
    useEffect(() => {
      le.state ? (gt.current = new c(le.state)) : (gt.current = null);
    }, [le.state]));
  let sr = useRef(false);
  (useEffect(() => {
    if (!C.isLoading && le.state) {
      let y = setTimeout(() => {
        (Tt(), sr.current || ((sr.current = true), at((h) => (h.length > 0 && de(true), h))));
      }, 200);
      return () => clearTimeout(y);
    }
  }, [C.isLoading, le.state, Tt]),
    useEffect(
      () =>
        k$1(() => {
          u$1?.();
        }),
      [u$1]
    ),
    useEffect(() => {
      let y = Oe.current?.getView();
      y && Md(wt === 'suggesting', y.state, y.dispatch, r);
    }, [wt, r]));
  let $t = useCallback((y) => (le.push(y), y), [le]),
    Jt = useCallback(
      (y) => {
        if (($t(y), i?.(y), fe.current)) {
          let h = Oe.current?.getView();
          h && ge(oo(h.state.doc));
        }
        (zt.current && clearTimeout(zt.current), (zt.current = setTimeout(Tt, 300)));
      },
      [i, $t, Tt]
    ),
    lr = useRef(null),
    cr = useCallback(() => {
      let y = lr.current,
        h = Ct.current;
      if (!y || !h) return;
      let N = h.querySelectorAll('.layout-page');
      if (N.length === 0) return;
      let re = Oe.current?.getView(),
        te = null;
      if (re) {
        let ve = re.state.selection.anchor;
        if (h.querySelector('.paged-editor__pages'))
          for (let st of N) {
            let ot = st.querySelectorAll('span[data-pm-start]');
            for (let tt of ot) {
              let xn = parseInt(tt.getAttribute('data-pm-start') || '', 10),
                eo = parseInt(tt.getAttribute('data-pm-end') || '', 10);
              if (!isNaN(xn) && !isNaN(eo) && ve >= xn && ve <= eo) {
                te = st;
                break;
              }
            }
            if (te) break;
          }
      }
      te || (te = N[0]);
      let se = h.getBoundingClientRect(),
        me = te.getBoundingClientRect().top - se.top;
      y.style.top = `${me}px`;
    }, []),
    To = useCallback(
      (y) => {
        let h = Be();
        if (h) {
          let { from: ot, to: tt } = h.state.selection;
          xo.current = { from: ot, to: tt };
        }
        let N = null;
        if ((h && ((N = We(h.state)), N.isInTable || (N = null)), N?.cellBorderColor)) {
          let ot = N.cellBorderColor,
            tt = ot.rgb;
          ((!tt || tt === 'auto') && (tt = a(ot, d$1).replace(/^#/, '')),
            (Rt.current = { ...Rt.current, color: { rgb: tt } }));
        }
        let re = null;
        if (h) {
          let ot = h.state.selection,
            tt = ot.node;
          tt?.type.name === 'image' &&
            (re = {
              pos: ot.from,
              wrapType: tt.attrs.wrapType ?? 'inline',
              displayMode: tt.attrs.displayMode ?? 'inline',
              cssFloat: tt.attrs.cssFloat ?? null,
              transform: tt.attrs.transform ?? null,
              alt: tt.attrs.alt ?? null,
              borderWidth: tt.attrs.borderWidth ?? null,
              borderColor: tt.attrs.borderColor ?? null,
              borderStyle: tt.attrs.borderStyle ?? null,
            });
        }
        if (!y) {
          (Nt(null),
            I((ot) => ({ ...ot, selectionFormatting: {}, pmTableContext: N, pmImageContext: re })));
          return;
        }
        let { textFormatting: te, paragraphFormatting: se } = y,
          ie = te.fontFamily?.ascii || te.fontFamily?.hAnsi,
          me = te.color?.rgb ? `#${te.color.rgb}` : void 0,
          ve = se.numPr,
          Ue = ve
            ? {
                type: ve.numId === 1 ? 'bullet' : 'numbered',
                level: ve.ilvl ?? 0,
                isInList: true,
                numId: ve.numId,
              }
            : void 0,
          st = {
            bold: te.bold,
            italic: te.italic,
            underline: !!te.underline,
            strike: te.strike,
            superscript: te.vertAlign === 'superscript',
            subscript: te.vertAlign === 'subscript',
            fontFamily: ie,
            fontSize: te.fontSize,
            color: me,
            highlight: te.highlight,
            alignment: se.alignment,
            lineSpacing: se.lineSpacing,
            listState: Ue,
            styleId: y.styleId ?? void 0,
            indentLeft: se.indentLeft,
          };
        if (
          (I((ot) => ({
            ...ot,
            selectionFormatting: st,
            paragraphIndentLeft: se.indentLeft ?? 0,
            paragraphIndentRight: se.indentRight ?? 0,
            paragraphFirstLineIndent: se.indentFirstLine ?? 0,
            paragraphHangingIndent: se.hangingIndent ?? false,
            paragraphTabs: se.tabs ?? null,
            pmTableContext: N,
            pmImageContext: re,
          })),
          h && y.hasSelection && !$e && !z$1)
        ) {
          let ot = ko.current,
            tt = Ct.current;
          if (ot && tt) {
            let { from: xn } = h.state.selection,
              eo = ot.querySelector('.paged-editor__pages');
            if (eo) {
              let Fs = eo.querySelector('.layout-page'),
                lp = eo.querySelectorAll('span[data-pm-start]');
              for (let cp of lp) {
                let da = cp,
                  dp = Number(da.dataset.pmStart),
                  up = Number(da.dataset.pmEnd);
                if (xn >= dp && xn <= up) {
                  let pp = da.getBoundingClientRect(),
                    ua = tt.getBoundingClientRect(),
                    fp = pp.top - ua.top + ot.scrollTop,
                    mp = Fs ? Fs.getBoundingClientRect().right - ua.left : ua.width / 2 + 408;
                  Nt({ top: fp, left: mp });
                  break;
                }
              }
            }
          }
        } else Nt(null);
        (s?.(y), cr());
      },
      [s, $e, z$1, cr]
    ),
    Hn = xl({ document: le.state, onChange: Jt, onSelectionChange: (y) => {} });
  useEffect(() => {
    let y = (h) => {
      let re = navigator.platform.toUpperCase().indexOf('MAC') >= 0 ? h.metaKey : h.ctrlKey;
      if (!re && !h.shiftKey && !h.altKey && (h.key === 'Delete' || h.key === 'Backspace')) {
        let te = Oe.current?.getView();
        if (te) {
          let se = te.state.selection;
          if ('$anchorCell' in se && typeof se.forEachCell == 'function') {
            let me = We(te.state);
            if (me.isInTable && me.table) {
              let ve = 0;
              me.table.descendants((st) => {
                (st.type.name === 'tableCell' || st.type.name === 'tableHeader') && (ve += 1);
              });
              let Ue = 0;
              if (
                (se.forEachCell(() => {
                  Ue += 1;
                }),
                ve > 0 && Ue >= ve)
              ) {
                (h.preventDefault(), Wo(te.state, te.dispatch));
                return;
              }
            }
          }
        }
        if (Hn.state.tableIndex !== null) {
          (h.preventDefault(), Hn.handleAction('deleteTable'));
          return;
        }
      }
      if (re && !h.shiftKey && !h.altKey) {
        if (h.key.toLowerCase() === 'f') {
          h.preventDefault();
          let te = window.getSelection(),
            se = te && !te.isCollapsed ? te.toString() : '';
          bt.openFind(se);
        } else if (h.key.toLowerCase() === 'h') {
          h.preventDefault();
          let te = window.getSelection(),
            se = te && !te.isCollapsed ? te.toString() : '';
          bt.openReplace(se);
        } else if (h.key.toLowerCase() === 'k') {
          h.preventDefault();
          let te = Oe.current?.getView();
          if (te) {
            let se = io(te.state),
              ie = ro(te.state);
            ie
              ? yt.openEdit({ url: ie.href, displayText: se, tooltip: ie.tooltip })
              : yt.openInsert(se);
          }
        }
      }
    };
    return (
      document.addEventListener('keydown', y),
      () => {
        document.removeEventListener('keydown', y);
      }
    );
  }, [bt, yt, Hn]);
  let dr = useCallback(
      (y, h) => {
        let N = Be();
        N && (oi(y, h)(N.state, N.dispatch), Je());
      },
      [Be, Je]
    ),
    la = useCallback(() => {
      let y = Be();
      y && (Fi(y.state, y.dispatch), Je());
    }, [Be, Je]),
    v$1 = useCallback(() => {
      let y = Be();
      y && (ni(y.state, y.dispatch), Je());
    }, [Be, Je]),
    oe = useCallback(() => {
      pe((y) => {
        if (!y) {
          let h = Oe.current?.getView();
          h && ge(oo(h.state.doc));
        }
        return !y;
      });
    }, []),
    X = useCallback((y) => {
      (Oe.current?.scrollToPosition(y), Oe.current?.setSelection(y + 1), Oe.current?.focus());
    }, []),
    Z = useCallback(() => {
      So.current?.click();
    }, []),
    ne = useCallback(
      (y) => {
        let h = y.target.files?.[0];
        if (!h) return;
        let N = Be();
        if (!N) return;
        let re = new FileReader();
        ((re.onload = () => {
          let te = re.result,
            se = new Image();
          ((se.onload = () => {
            let ie = se.naturalWidth,
              me = se.naturalHeight,
              ve = 612;
            if (ie > ve) {
              let xn = ve / ie;
              ((ie = ve), (me = Math.round(me * xn)));
            }
            let Ue = `rId_img_${Date.now()}`,
              st = N.state.schema.nodes.image.create({
                src: te,
                alt: h.name,
                width: ie,
                height: me,
                rId: Ue,
                wrapType: 'inline',
                displayMode: 'inline',
              }),
              { from: ot } = N.state.selection,
              tt = N.state.tr.insert(ot, st);
            (N.dispatch(tt.scrollIntoView()), Je());
          }),
            (se.src = te));
        }),
          re.readAsDataURL(h),
          (y.target.value = ''));
      },
      [Be, Je]
    ),
    Y = useCallback(
      (y) => {
        let h = Be();
        if (!h || !C.pmImageContext) return;
        let N = C.pmImageContext.pos,
          re = h.state.doc.nodeAt(N);
        if (!re || re.type.name !== 'image') return;
        let te = 'inline',
          se = null;
        switch (y) {
          case 'inline':
            ((te = 'inline'), (se = null));
            break;
          case 'square':
          case 'tight':
          case 'through':
            ((te = 'float'), (se = 'left'));
            break;
          case 'topAndBottom':
            ((te = 'block'), (se = null));
            break;
          case 'behind':
          case 'inFront':
            ((te = 'float'), (se = 'none'));
            break;
          case 'wrapLeft':
            ((te = 'float'), (se = 'right'), (y = 'square'));
            break;
          case 'wrapRight':
            ((te = 'float'), (se = 'left'), (y = 'square'));
            break;
        }
        let ie = h.state.tr.setNodeMarkup(N, void 0, {
          ...re.attrs,
          wrapType: y,
          displayMode: te,
          cssFloat: se,
        });
        (h.dispatch(ie.scrollIntoView()), Je());
      },
      [Be, Je, C.pmImageContext]
    ),
    Q = useCallback(
      (y) => {
        let h = Be();
        if (!h || !C.pmImageContext) return;
        let N = C.pmImageContext.pos,
          re = h.state.doc.nodeAt(N);
        if (!re || re.type.name !== 'image') return;
        let te = re.attrs.transform || '',
          se = te.match(/rotate\((-?\d+(?:\.\d+)?)deg\)/),
          ie = se ? parseFloat(se[1]) : 0,
          me = /scaleX\(-1\)/.test(te),
          ve = /scaleY\(-1\)/.test(te);
        switch (y) {
          case 'rotateCW':
            ie = (ie + 90) % 360;
            break;
          case 'rotateCCW':
            ie = (ie - 90 + 360) % 360;
            break;
          case 'flipH':
            me = !me;
            break;
          case 'flipV':
            ve = !ve;
            break;
        }
        let Ue = [];
        (ie !== 0 && Ue.push(`rotate(${ie}deg)`),
          me && Ue.push('scaleX(-1)'),
          ve && Ue.push('scaleY(-1)'));
        let st = Ue.length > 0 ? Ue.join(' ') : null,
          ot = h.state.tr.setNodeMarkup(N, void 0, { ...re.attrs, transform: st });
        (h.dispatch(ot.scrollIntoView()), Je());
      },
      [Be, Je, C.pmImageContext]
    ),
    ee = useCallback(
      (y) => {
        let h = Be();
        if (!h || !C.pmImageContext) return;
        let N = C.pmImageContext.pos,
          re = h.state.doc.nodeAt(N);
        if (!re || re.type.name !== 'image') return;
        let te = h.state.tr.setNodeMarkup(N, void 0, {
          ...re.attrs,
          position: { horizontal: y.horizontal, vertical: y.vertical },
          distTop: y.distTop ?? re.attrs.distTop,
          distBottom: y.distBottom ?? re.attrs.distBottom,
          distLeft: y.distLeft ?? re.attrs.distLeft,
          distRight: y.distRight ?? re.attrs.distRight,
        });
        (h.dispatch(te.scrollIntoView()), Je());
      },
      [Be, Je, C.pmImageContext]
    ),
    ce = useCallback(() => {
      G(true);
    }, []),
    Ce = useCallback(
      (y) => {
        let h = Be();
        if (!h || !C.pmImageContext) return;
        let N = C.pmImageContext.pos,
          re = h.state.doc.nodeAt(N);
        if (!re || re.type.name !== 'image') return;
        let te = h.state.tr.setNodeMarkup(N, void 0, {
          ...re.attrs,
          alt: y.alt ?? null,
          borderWidth: y.borderWidth ?? null,
          borderColor: y.borderColor ?? null,
          borderStyle: y.borderStyle ?? null,
        });
        (h.dispatch(te.scrollIntoView()), Je());
      },
      [Be, Je, C.pmImageContext]
    ),
    ye = useCallback(
      (y, h) => {
        if (!le.state?.package) return;
        let N = {
          ...le.state.package.document,
          finalSectionProperties: {
            ...le.state.package.document.finalSectionProperties,
            footnotePr: y,
            endnotePr: h,
          },
        };
        $t({ ...le.state, package: { ...le.state.package, document: N } });
      },
      [le, $t]
    ),
    Te = useCallback(
      (y) => {
        let h = Be();
        if (h) {
          switch (y) {
            case 'addRowAbove':
              ri(h.state, h.dispatch);
              break;
            case 'addRowBelow':
              ii(h.state, h.dispatch);
              break;
            case 'addColumnLeft':
              si(h.state, h.dispatch);
              break;
            case 'addColumnRight':
              li(h.state, h.dispatch);
              break;
            case 'deleteRow':
              ai(h.state, h.dispatch);
              break;
            case 'deleteColumn':
              ci(h.state, h.dispatch);
              break;
            case 'deleteTable':
              Wo(h.state, h.dispatch);
              break;
            case 'selectTable':
              di(h.state, h.dispatch);
              break;
            case 'selectRow':
              ui(h.state, h.dispatch);
              break;
            case 'selectColumn':
              pi(h.state, h.dispatch);
              break;
            case 'mergeCells':
              fi(h.state, h.dispatch);
              break;
            case 'splitCell':
              mi(h.state, h.dispatch);
              break;
            case 'borderAll':
              hi(h.state, h.dispatch, Rt.current);
              break;
            case 'borderOutside':
              bi(h.state, h.dispatch, Rt.current);
              break;
            case 'borderInside':
              yi(h.state, h.dispatch, Rt.current);
              break;
            case 'borderNone':
              gi(h.state, h.dispatch);
              break;
            case 'borderTop':
              Tn('top', Rt.current, true)(h.state, h.dispatch);
              break;
            case 'borderBottom':
              Tn('bottom', Rt.current, true)(h.state, h.dispatch);
              break;
            case 'borderLeft':
              Tn('left', Rt.current, true)(h.state, h.dispatch);
              break;
            case 'borderRight':
              Tn('right', Rt.current, true)(h.state, h.dispatch);
              break;
            default:
              if (typeof y == 'object') {
                if (y.type === 'cellFillColor') Mi(y.color)(h.state, h.dispatch);
                else if (y.type === 'borderColor') {
                  let N = y.color.replace(/^#/, '');
                  ((Rt.current = { ...Rt.current, color: { rgb: N } }),
                    Ei(y.color)(h.state, h.dispatch));
                } else if (y.type === 'borderWidth')
                  ((Rt.current = { ...Rt.current, size: y.size }), Ii(y.size)(h.state, h.dispatch));
                else if (y.type === 'cellBorder')
                  Tn(y.side, {
                    style: y.style,
                    size: y.size,
                    color: { rgb: y.color.replace(/^#/, '') },
                  })(h.state, h.dispatch);
                else if (y.type === 'cellVerticalAlign') xi(y.align)(h.state, h.dispatch);
                else if (y.type === 'cellMargins') Si(y.margins)(h.state, h.dispatch);
                else if (y.type === 'cellTextDirection') ki(y.direction)(h.state, h.dispatch);
                else if (y.type === 'toggleNoWrap') wi()(h.state, h.dispatch);
                else if (y.type === 'rowHeight') Ci(y.height, y.rule)(h.state, h.dispatch);
                else if (y.type === 'toggleHeaderRow') Ti()(h.state, h.dispatch);
                else if (y.type === 'distributeColumns') vi()(h.state, h.dispatch);
                else if (y.type === 'autoFitContents') Ri()(h.state, h.dispatch);
                else if (y.type === 'openTableProperties') V(true);
                else if (y.type === 'tableProperties') _o(y.props)(h.state, h.dispatch);
                else if (y.type === 'applyTableStyle') {
                  let N = yd(y.styleId),
                    re = hn.current;
                  if (!N && re?.package.styles) {
                    let se = Cn(re.package.styles).getStyle(y.styleId);
                    if (se) {
                      if (
                        ((N = { id: se.styleId, name: se.name ?? se.styleId }), se.tblPr?.borders)
                      ) {
                        let ie = se.tblPr.borders;
                        N.tableBorders = {};
                        for (let me of ['top', 'bottom', 'left', 'right', 'insideH', 'insideV']) {
                          let ve = ie[me];
                          ve &&
                            (N.tableBorders[me] = {
                              style: ve.style,
                              size: ve.size,
                              color: ve.color?.rgb ? { rgb: ve.color.rgb } : void 0,
                            });
                        }
                      }
                      if (se.tblStylePr) {
                        N.conditionals = {};
                        for (let ie of se.tblStylePr) {
                          let me = {};
                          if (
                            (ie.tcPr?.shading?.fill &&
                              (me.backgroundColor = `#${ie.tcPr.shading.fill}`),
                            ie.tcPr?.borders)
                          ) {
                            let ve = {};
                            for (let Ue of ['top', 'bottom', 'left', 'right']) {
                              let st = ie.tcPr.borders[Ue];
                              st &&
                                (ve[Ue] = {
                                  style: st.style,
                                  size: st.size,
                                  color: st.color?.rgb ? { rgb: st.color.rgb } : void 0,
                                });
                            }
                            me.borders = ve;
                          }
                          (ie.rPr?.bold && (me.bold = true),
                            ie.rPr?.color?.rgb && (me.color = `#${ie.rPr.color.rgb}`),
                            (N.conditionals[ie.type] = me));
                        }
                      }
                      N.look = { firstRow: true, lastRow: false, noHBand: false, noVBand: true };
                    }
                  }
                  N &&
                    Pi({
                      styleId: N.id,
                      tableBorders: N.tableBorders,
                      conditionals: N.conditionals,
                      look: N.look,
                    })(h.state, h.dispatch);
                }
              } else Hn.handleAction(y);
          }
          Je();
        }
      },
      [Hn, Be, Je]
    ),
    ze = useCallback(
      (y) => {
        let h = Be();
        if (!h) return;
        h.focus();
        let N = h === Oe.current?.getView(),
          { from: re, to: te } = h.state.selection,
          se = xo.current;
        if (N && se && (re !== se.from || te !== se.to))
          try {
            let ie = h.state.tr.setSelection(TextSelection.create(h.state.doc, se.from, se.to));
            h.dispatch(ie);
          } catch (ie) {
            console.warn('Could not restore selection:', ie);
          }
        if (y === 'bold') {
          Br(h.state, h.dispatch);
          return;
        }
        if (y === 'italic') {
          Ar(h.state, h.dispatch);
          return;
        }
        if (y === 'underline') {
          Dr(h.state, h.dispatch);
          return;
        }
        if (y === 'strikethrough') {
          Hr(h.state, h.dispatch);
          return;
        }
        if (y === 'superscript') {
          Nr(h.state, h.dispatch);
          return;
        }
        if (y === 'subscript') {
          zr(h.state, h.dispatch);
          return;
        }
        if (y === 'bulletList') {
          Zr(h.state, h.dispatch);
          return;
        }
        if (y === 'numberedList') {
          Jr(h.state, h.dispatch);
          return;
        }
        if (y === 'indent') {
          Qr(h.state, h.dispatch) || Kr()(h.state, h.dispatch);
          return;
        }
        if (y === 'outdent') {
          ei(h.state, h.dispatch) || qr()(h.state, h.dispatch);
          return;
        }
        if (y === 'clearFormatting') {
          Bo(h.state, h.dispatch);
          return;
        }
        if (y === 'insertLink') {
          let ie = io(h.state),
            me = ro(h.state);
          me
            ? yt.openEdit({ url: me.href, displayText: ie, tooltip: me.tooltip })
            : yt.openInsert(ie);
          return;
        }
        if (typeof y == 'object')
          switch (y.type) {
            case 'alignment':
              Ur(y.value)(h.state, h.dispatch);
              break;
            case 'textColor': {
              let ie = y.value;
              typeof ie == 'string'
                ? No({ rgb: ie.replace('#', '') })(h.state, h.dispatch)
                : ie.auto
                  ? Or(h.state, h.dispatch)
                  : No(ie)(h.state, h.dispatch);
              break;
            }
            case 'highlightColor': {
              let ie = y.value ? u(y.value) : '';
              $r(ie || y.value)(h.state, h.dispatch);
              break;
            }
            case 'fontSize':
              Wr(f(y.value))(h.state, h.dispatch);
              break;
            case 'fontFamily':
              _r(y.value)(h.state, h.dispatch);
              break;
            case 'lineSpacing':
              Gr(y.value)(h.state, h.dispatch);
              break;
            case 'applyStyle': {
              let ie = hn.current,
                me = ie?.package.styles ? Cn(ie.package.styles) : null;
              if (me) {
                let ve = me.resolveParagraphStyle(y.value);
                $o(y.value, {
                  paragraphFormatting: ve.paragraphFormatting,
                  runFormatting: ve.runFormatting,
                })(h.state, h.dispatch);
              } else $o(y.value)(h.state, h.dispatch);
              break;
            }
          }
      },
      [Be]
    ),
    Fe = useCallback((y) => {
      I((h) => ({ ...h, zoom: y }));
    }, []),
    Ye = useCallback(
      (y) => {
        let h = Be();
        if (!h) return;
        let N = y.url || '',
          re = y.tooltip,
          { empty: te } = h.state.selection;
        (te && y.displayText
          ? zo(y.displayText, N, re)(h.state, h.dispatch)
          : te
            ? y.displayText && zo(y.displayText, N, re)(h.state, h.dispatch)
            : Vr(N, re)(h.state, h.dispatch),
          yt.close(),
          Je());
      },
      [yt, Be, Je]
    ),
    Xe = useCallback(() => {
      let y = Be();
      y && (jr(y.state, y.dispatch), yt.close(), Je());
    }, [yt, Be, Je]),
    et = useCallback(
      (y) => (h) => {
        if (!le.state || z$1) return;
        let N = {
          ...le.state,
          package: {
            ...le.state.package,
            document: {
              ...le.state.package.document,
              finalSectionProperties: {
                ...le.state.package.document.finalSectionProperties,
                [y]: h,
              },
            },
          },
        };
        Jt(N);
      },
      [le.state, z$1, Jt]
    ),
    ct = useMemo(() => et('marginLeft'), [et]),
    Dt = useMemo(() => et('marginRight'), [et]),
    Wt = useMemo(() => et('marginTop'), [et]),
    Nn = useMemo(() => et('marginBottom'), [et]),
    vo = useCallback(
      (y) => {
        let h = Be();
        h && Yr(y)(h.state, h.dispatch);
      },
      [Be]
    ),
    ur = useCallback(
      (y) => {
        let h = Be();
        h && Xr(y)(h.state, h.dispatch);
      },
      [Be]
    ),
    bn = useCallback(
      (y) => {
        let h = Be();
        h && (y < 0 ? Oo(-y, true)(h.state, h.dispatch) : Oo(y, false)(h.state, h.dispatch));
      },
      [Be]
    ),
    zn = useCallback(
      (y) => {
        let h = Be();
        h && ti(y)(h.state, h.dispatch);
      },
      [Be]
    ),
    Qt = useCallback((y) => {}, []),
    yn = useCallback(async () => {
      if (!gt.current) return null;
      try {
        let y = gt.current.getDocument(),
          h = Oe.current?.getDocument();
        (h?.package?.document && (y.package.document.content = h.package.document.content),
          (y.package.document.comments = Ge));
        let N = await gt.current.toBuffer();
        return (o$1?.(N), N);
      } catch (y) {
        return (l?.(y instanceof Error ? y : new Error('Failed to save document')), null);
      }
    }, [o$1, l, Ge]),
    On = useCallback(
      (y) => {
        l?.(y);
      },
      [l]
    ),
    Qn = useCallback(() => {
      let y = ht.current?.querySelector('.paged-editor__pages');
      if (!y) {
        (window.print(), J?.());
        return;
      }
      let h = window.open('', '_blank');
      if (!h) {
        (window.print(), J?.());
        return;
      }
      let N = [];
      for (let te of Array.from(document.styleSheets))
        try {
          for (let se of Array.from(te.cssRules))
            se instanceof CSSFontFaceRule && N.push(se.cssText);
        } catch {}
      let re = y.cloneNode(true);
      re.style.cssText = 'display: block; margin: 0; padding: 0;';
      for (let te of Array.from(re.querySelectorAll('.layout-page'))) {
        let se = te;
        ((se.style.boxShadow = 'none'), (se.style.margin = '0'));
      }
      (h.document.write(`<!DOCTYPE html>
<html><head><title>Print</title>
<style>
${N.join(`
`)}
* { margin: 0; padding: 0; }
body { background: white; }
.layout-page { break-after: page; }
.layout-page:last-child { break-after: auto; }
@page { margin: 0; size: auto; }
</style>
</head><body>${re.outerHTML}</body></html>`),
        h.document.close(),
        (h.onload = () => {
          (h.print(), h.close());
        }),
        setTimeout(() => {
          h.closed || (h.print(), h.close());
        }, 1e3),
        J?.());
    }, [J]),
    It = useRef(null),
    Zu = useCallback(
      (y, h) => {
        if (!le.state || !y.trim()) return ((It.current = null), null);
        let N = j$1(le.state, y, h),
          re = { matches: N, totalCount: N.length, currentIndex: 0 };
        return (
          (It.current = re),
          bt.setMatches(N, 0),
          N.length > 0 && ht.current && l$1(ht.current, N[0]),
          re
        );
      },
      [le.state, bt]
    ),
    Ju = useCallback(() => {
      if (!It.current || It.current.matches.length === 0) return null;
      let y = bt.goToNextMatch(),
        h = It.current.matches[y];
      return (h && ht.current && l$1(ht.current, h), h || null);
    }, [bt]),
    Qu = useCallback(() => {
      if (!It.current || It.current.matches.length === 0) return null;
      let y = bt.goToPreviousMatch(),
        h = It.current.matches[y];
      return (h && ht.current && l$1(ht.current, h), h || null);
    }, [bt]),
    ep = useCallback(
      (y) => {
        if (!le.state || !It.current || It.current.matches.length === 0) return false;
        let h = It.current.matches[It.current.currentIndex];
        if (!h) return false;
        try {
          let N = a$1(le.state, {
            type: 'replaceText',
            range: {
              start: { paragraphIndex: h.paragraphIndex, offset: h.startOffset },
              end: { paragraphIndex: h.paragraphIndex, offset: h.endOffset },
            },
            text: y,
          });
          return (Jt(N), !0);
        } catch (N) {
          return (console.error('Replace failed:', N), false);
        }
      },
      [le.state, Jt]
    ),
    tp = useCallback(
      (y, h, N) => {
        if (!le.state || !y.trim()) return 0;
        let re = j$1(le.state, y, N);
        if (re.length === 0) return 0;
        let te = le.state,
          se = [...re].sort((ie, me) =>
            ie.paragraphIndex !== me.paragraphIndex
              ? me.paragraphIndex - ie.paragraphIndex
              : me.startOffset - ie.startOffset
          );
        for (let ie of se)
          try {
            te = a$1(te, {
              type: 'replaceText',
              range: {
                start: { paragraphIndex: ie.paragraphIndex, offset: ie.startOffset },
                end: { paragraphIndex: ie.paragraphIndex, offset: ie.endOffset },
              },
              text: h,
            });
          } catch (me) {
            console.error('Replace failed for match:', ie, me);
          }
        return (Jt(te), (It.current = null), bt.setMatches([], 0), re.length);
      },
      [le.state, Jt, bt]
    );
  useImperativeHandle(
    k,
    () => ({
      getAgent: () => gt.current,
      getDocument: () => le.state,
      getEditorRef: () => Oe.current,
      save: yn,
      setZoom: (y) => I((h) => ({ ...h, zoom: y })),
      getZoom: () => C.zoom,
      focus: () => {
        Oe.current?.focus();
      },
      getCurrentPage: () => C.currentPage,
      getTotalPages: () => C.totalPages,
      scrollToPage: (y) => {},
      openPrintPreview: Qn,
      print: Qn,
      markAsSaved: () => Bt.markAsSaved(),
      hasUnsavedChanges: () => Bt.hasUnsavedChanges,
    }),
    [le.state, C.zoom, C.currentPage, C.totalPages, yn, Qn, Bt.hasUnsavedChanges, Bt.markAsSaved]
  );
  let { headerContent: Ro, footerContent: Po } = useMemo(() => {
      if (!le.state?.package) return { headerContent: null, footerContent: null };
      let y = le.state.package,
        h = y.document?.finalSectionProperties,
        N = y.headers,
        re = y.footers,
        te = null,
        se = null;
      if (N && h?.headerReferences) {
        let ie = h.headerReferences.find((me) => me.type === 'default');
        ie?.rId && (te = N.get(ie.rId) ?? null);
      }
      if (re && h?.footerReferences) {
        let ie = h.footerReferences.find((me) => me.type === 'default');
        ie?.rId && (se = re.get(ie.rId) ?? null);
      }
      return { headerContent: te, footerContent: se };
    }, [le.state]),
    np = useCallback(
      (y) => {
        if (y === 'header' ? Ro : Po) {
          H$1(y);
          return;
        }
        if (!le.state?.package) return;
        let N = le.state.package,
          re = N.document?.finalSectionProperties;
        if (!re) return;
        let te = `rId_new_${y}`,
          se = {
            type: y === 'header' ? 'header' : 'footer',
            hdrFtrType: 'default',
            content: [{ type: 'paragraph', content: [] }],
          },
          ie = y === 'header' ? 'headers' : 'footers',
          me = new Map(N[ie] ?? []);
        me.set(te, se);
        let ve = y === 'header' ? 'headerReferences' : 'footerReferences',
          Ue = re[ve] ?? [],
          st = { type: 'default', rId: te },
          ot = {
            ...le.state,
            package: {
              ...N,
              [ie]: me,
              document: N.document
                ? { ...N.document, finalSectionProperties: { ...re, [ve]: [...Ue, st] } }
                : N.document,
            },
          };
        ($t(ot), H$1(y));
      },
      [Ro, Po, le, $t]
    ),
    ca = useCallback(
      (y) => {
        if (!D || !le.state?.package) {
          H$1(null);
          return;
        }
        let h = le.state.package,
          N = h.document?.finalSectionProperties,
          te = (D === 'header' ? N?.headerReferences : N?.footerReferences)?.find(
            (me) => me.type === 'default'
          ),
          se = D === 'header' ? 'headers' : 'footers',
          ie = h[se];
        if (te?.rId && ie) {
          let me = ie.get(te.rId),
            ve = { type: D, hdrFtrType: 'default', ...me, content: y },
            Ue = new Map(ie);
          Ue.set(te.rId, ve);
          let st = { ...le.state, package: { ...h, [se]: Ue } };
          $t(st);
        }
        H$1(null);
      },
      [D, le, $t]
    ),
    op = useCallback(() => {
      if (!D) return;
      let y = Ot.current?.getView();
      if (y) {
        let h = Ho(y.state.doc);
        ca(h);
      } else H$1(null);
    }, [D, ca]),
    rp = useCallback(() => {
      if (!D || !le.state?.package) {
        H$1(null);
        return;
      }
      let y = le.state.package,
        h = y.document?.finalSectionProperties,
        N = D === 'header' ? 'headerReferences' : 'footerReferences',
        re = D === 'header' ? 'headers' : 'footers',
        te = h?.[N],
        se = te?.find((ie) => ie.type === 'default');
      if (se?.rId) {
        let ie = new Map(y[re] ?? []);
        ie.delete(se.rId);
        let me = (te ?? []).filter((Ue) => Ue.rId !== se.rId),
          ve = {
            ...le.state,
            package: {
              ...y,
              [re]: ie,
              document: y.document
                ? { ...y.document, finalSectionProperties: { ...h, [N]: me } }
                : y.document,
            },
          };
        $t(ve);
      }
      H$1(null);
    }, [D, le, $t]),
    ip = useCallback((y) => {
      let h = ht.current?.querySelector('.paged-editor__pages');
      if (!h) return null;
      let N = y === 'header' ? '.layout-page-header' : '.layout-page-footer';
      return h.querySelector(N);
    }, []),
    pr = {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      backgroundColor: 'var(--doc-bg-subtle)',
      ...L,
    },
    ap = { display: 'flex', flex: 1, minHeight: 0, minWidth: 0, flexDirection: 'row' },
    sp = { flex: 1, minHeight: 0, minWidth: 0, overflow: 'auto', position: 'relative' };
  return C.isLoading
    ? jsx('div', {
        className: `ep-root docx-editor docx-editor-loading ${$}`,
        style: pr,
        'data-testid': 'docx-editor',
        children: _ || jsx(xd, {}),
      })
    : C.parseError
      ? jsx('div', {
          className: `ep-root docx-editor docx-editor-error ${$}`,
          style: pr,
          'data-testid': 'docx-editor',
          children: jsx(kd, { message: C.parseError }),
        })
      : le.state
        ? jsx(bl, {
            children: jsx(yr, {
              onError: On,
              children: jsxs('div', {
                ref: ht,
                className: `ep-root docx-editor ${$}`,
                style: pr,
                'data-testid': 'docx-editor',
                children: [
                  jsx('div', {
                    style: ap,
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
                          style: sp,
                          children: [
                            c$1 &&
                              !z$1 &&
                              jsxs('div', {
                                ref: Co,
                                className:
                                  'sticky top-0 z-50 flex flex-col gap-0 bg-white shadow-sm',
                                children: [
                                  jsxs(y, {
                                    currentFormatting: C.selectionFormatting,
                                    onFormat: ze,
                                    onUndo: aa,
                                    onRedo: sa,
                                    canUndo: true,
                                    canRedo: true,
                                    disabled: z$1,
                                    documentStyles: le.state?.package.styles?.styles,
                                    theme: le.state?.package.theme || d$1,
                                    showPrintButton: T,
                                    onPrint: Qn,
                                    showZoomControl: p,
                                    zoom: C.zoom,
                                    onZoomChange: Fe,
                                    onRefocusEditor: Je,
                                    onInsertTable: dr,
                                    showTableInsert: true,
                                    onInsertImage: Z,
                                    onInsertPageBreak: la,
                                    onInsertTOC: v$1,
                                    imageContext: C.pmImageContext,
                                    onImageWrapType: Y,
                                    onImageTransform: Q,
                                    onOpenImageProperties: ce,
                                    tableContext: C.pmTableContext,
                                    onTableAction: Te,
                                    children: [
                                      jsx(x, {}),
                                      jsx(v, {
                                        onClick: () => de(!Se),
                                        active: Se,
                                        title: 'Toggle comments sidebar',
                                        ariaLabel: 'Toggle comments sidebar',
                                        children: jsx(d, { name: 'comment', size: 20 }),
                                      }),
                                      jsx(x, {}),
                                      jsx(Bb, {
                                        mode: wt,
                                        onModeChange: (y) => {
                                          (yo(y), y === 'suggesting' && de(true));
                                        },
                                      }),
                                      U$1,
                                    ],
                                  }),
                                  S &&
                                    jsx('div', {
                                      className:
                                        'flex justify-center px-5 py-1 overflow-x-auto flex-shrink-0 bg-doc-bg',
                                      style: {
                                        paddingRight: Se ? 'calc(20px + 240px)' : void 0,
                                        transition: 'padding 0.2s ease',
                                      },
                                      children: jsx(O, {
                                        sectionProps:
                                          le.state?.package.document?.finalSectionProperties,
                                        zoom: C.zoom,
                                        unit: M,
                                        editable: !z$1,
                                        onLeftMarginChange: ct,
                                        onRightMarginChange: Dt,
                                        indentLeft: C.paragraphIndentLeft,
                                        indentRight: C.paragraphIndentRight,
                                        onIndentLeftChange: vo,
                                        onIndentRightChange: ur,
                                        showFirstLineIndent: true,
                                        firstLineIndent: C.paragraphFirstLineIndent,
                                        hangingIndent: C.paragraphHangingIndent,
                                        onFirstLineIndentChange: bn,
                                        tabStops: C.paragraphTabs,
                                        onTabStopRemove: zn,
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
                                ref: Ct,
                                style: { position: 'relative', flex: 1, minWidth: 0 },
                                onMouseDown: (y) => {
                                  y.target === y.currentTarget &&
                                    (y.preventDefault(), Oe.current?.focus());
                                },
                                children: [
                                  S &&
                                    !z$1 &&
                                    jsx('div', {
                                      ref: lr,
                                      style: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 0,
                                        zIndex: 10,
                                        willChange: 'transform',
                                      },
                                      children: jsx(Fl, {
                                        sectionProps:
                                          le.state?.package.document?.finalSectionProperties,
                                        zoom: C.zoom,
                                        unit: M,
                                        editable: !z$1,
                                        onTopMarginChange: Wt,
                                        onBottomMarginChange: Nn,
                                      }),
                                    }),
                                  jsx(Fu, {
                                    ref: Oe,
                                    document: le.state,
                                    styles: le.state?.package.styles,
                                    theme: le.state?.package.theme || d$1,
                                    sectionProperties:
                                      le.state?.package.document?.finalSectionProperties,
                                    headerContent: Ro,
                                    footerContent: Po,
                                    onHeaderFooterDoubleClick: np,
                                    hfEditMode: D,
                                    onBodyClick: op,
                                    zoom: C.zoom,
                                    readOnly: z$1,
                                    extensionManager: Vt,
                                    onDocumentChange: Jt,
                                    onSelectionChange: (y, h) => {
                                      let N = Oe.current?.getView();
                                      if (N) {
                                        let re = co(N.state);
                                        To(re);
                                      } else To(null);
                                    },
                                    externalPlugins: At,
                                    onReady: (y) => {
                                      Re?.(y.getView());
                                    },
                                    onRenderedDomContextReady: R,
                                    pluginOverlays: F,
                                    commentsSidebarOpen: Se,
                                    scrollContainerRef: ko,
                                    sidebarOverlay: Se
                                      ? jsx(Rl, {
                                          comments: Ge,
                                          trackedChanges: qe,
                                          pageWidth: (() => {
                                            let y =
                                              le.state?.package?.document?.finalSectionProperties;
                                            return y?.pageWidth
                                              ? Math.round(y.pageWidth / 15)
                                              : 816;
                                          })(),
                                          editorContainerRef: ko,
                                          onCommentResolve: (y) => {
                                            Ke((h) =>
                                              h.map((N) => (N.id === y ? { ...N, done: true } : N))
                                            );
                                          },
                                          onCommentDelete: (y) => {
                                            Ke((h) =>
                                              h.filter((N) => N.id !== y && N.parentId !== y)
                                            );
                                          },
                                          onCommentReply: (y, h) => {
                                            Ke((N) => [...N, Ps(h, r, y)]);
                                          },
                                          onAddComment: (y) => {
                                            let h = Ps(y, r),
                                              N = Oe.current?.getView();
                                            if (N && rt) {
                                              let { from: re, to: te } = rt,
                                                se = N.state.schema.marks.comment.create({
                                                  commentId: Rs,
                                                }),
                                                ie = N.state.schema.marks.comment.create({
                                                  commentId: h.id,
                                                }),
                                                me = N.state.tr
                                                  .removeMark(re, te, se)
                                                  .addMark(re, te, ie);
                                              N.dispatch(me);
                                            }
                                            (Ke((re) => [...re, h]), Qe(false), Ae(null), He(null));
                                          },
                                          onTrackedChangeReply: (y, h) => {
                                            Ke((N) => [...N, Ps(h, r, y)]);
                                          },
                                          onCancelAddComment: () => {
                                            let y = Oe.current?.getView();
                                            if (y && rt) {
                                              let { from: h, to: N } = rt,
                                                re = y.state.schema.marks.comment.create({
                                                  commentId: Rs,
                                                });
                                              y.dispatch(y.state.tr.removeMark(h, N, re));
                                            }
                                            (Qe(false), Ae(null), He(null));
                                          },
                                          onAcceptChange: (y, h) => {
                                            let N = Oe.current?.getView();
                                            N && (Ua(y, h)(N.state, N.dispatch), Tt());
                                          },
                                          onRejectChange: (y, h) => {
                                            let N = Oe.current?.getView();
                                            N && (Ga(y, h)(N.state, N.dispatch), Tt());
                                          },
                                          isAddingComment: $e,
                                          addCommentYPosition: mt,
                                          topOffset: 0,
                                        })
                                      : void 0,
                                  }),
                                  ln != null &&
                                    !$e &&
                                    !z$1 &&
                                    jsx(i$1, {
                                      content: 'Add comment',
                                      side: 'bottom',
                                      delayMs: 300,
                                      children: jsx('button', {
                                        type: 'button',
                                        onMouseDown: (y) => {
                                          (y.preventDefault(), y.stopPropagation());
                                          let h = Oe.current?.getView();
                                          if (h) {
                                            let { from: N, to: re } = h.state.selection;
                                            if (N !== re) {
                                              Ae({ from: N, to: re });
                                              let te = h.state.schema.marks.comment.create({
                                                  commentId: Rs,
                                                }),
                                                se = h.state.tr.addMark(N, re, te);
                                              (se.setSelection(TextSelection.create(se.doc, re)),
                                                h.dispatch(se));
                                            }
                                          }
                                          (He(ln.top), Se || de(true), Qe(true), Nt(null));
                                        },
                                        style: {
                                          position: 'absolute',
                                          top: ln.top,
                                          left: ln.left,
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
                                        onMouseOver: (y) => {
                                          ((y.currentTarget.style.backgroundColor =
                                            'rgba(26, 115, 232, 0.08)'),
                                            (y.currentTarget.style.boxShadow =
                                              '0 1px 4px rgba(26, 115, 232, 0.3)'));
                                        },
                                        onMouseOut: (y) => {
                                          ((y.currentTarget.style.backgroundColor = '#fff'),
                                            (y.currentTarget.style.boxShadow =
                                              '0 1px 3px rgba(60,64,67,0.2)'));
                                        },
                                        children: jsx(d, { name: 'add_comment', size: 16 }),
                                      }),
                                    }),
                                  f$1 &&
                                    C.totalPages > 0 &&
                                    (m$2
                                      ? jsx(H, {
                                          currentPage: C.currentPage,
                                          totalPages: C.totalPages,
                                          onNavigate: Qt,
                                          position: b,
                                          variant: g,
                                          floating: true,
                                        })
                                      : jsx(z, {
                                          currentPage: C.currentPage,
                                          totalPages: C.totalPages,
                                          position: b,
                                          variant: g,
                                          floating: true,
                                        })),
                                  D &&
                                    (D === 'header' ? Ro : Po) &&
                                    (() => {
                                      let y = ip(D),
                                        h = Ct.current;
                                      return !y || !h
                                        ? null
                                        : jsx(bd, {
                                            ref: Ot,
                                            headerFooter: D === 'header' ? Ro : Po,
                                            position: D,
                                            styles: le.state?.package.styles,
                                            targetElement: y,
                                            parentElement: h,
                                            onSave: ca,
                                            onClose: () => H$1(null),
                                            onSelectionChange: To,
                                            onRemove: rp,
                                          });
                                    })(),
                                ],
                              }),
                            }),
                          ],
                        }),
                        ae &&
                          jsx(kl, {
                            headings: Ie,
                            onHeadingClick: X,
                            onClose: () => pe(false),
                            topOffset: cn,
                          }),
                        !ae &&
                          jsx('button', {
                            className: 'docx-outline-nav',
                            onClick: oe,
                            onMouseDown: (y) => y.stopPropagation(),
                            title: 'Show document outline',
                            style: {
                              position: 'absolute',
                              left: 48,
                              top: cn + 12,
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
                      bt.state.isOpen &&
                        jsx(Pb, {
                          isOpen: bt.state.isOpen,
                          onClose: bt.close,
                          onFind: Zu,
                          onFindNext: Ju,
                          onFindPrevious: Qu,
                          onReplace: ep,
                          onReplaceAll: tp,
                          initialSearchText: bt.state.searchText,
                          replaceMode: bt.state.replaceMode,
                          currentResult: It.current,
                        }),
                      yt.state.isOpen &&
                        jsx(Mb, {
                          isOpen: yt.state.isOpen,
                          onClose: yt.close,
                          onSubmit: Ye,
                          onRemove: yt.state.isEditing ? Xe : void 0,
                          initialData: yt.state.initialData,
                          selectedText: yt.state.selectedText,
                          isEditing: yt.state.isEditing,
                        }),
                      A &&
                        jsx(Eb, {
                          isOpen: A,
                          onClose: () => V(false),
                          onApply: (y) => {
                            let h = Be();
                            h && _o(y)(h.state, h.dispatch);
                          },
                          currentProps: C.pmTableContext?.table?.attrs,
                        }),
                      q$1 && jsx(Ib, { isOpen: q$1, onClose: () => O$1(false), onApply: ee }),
                      j &&
                        jsx(Fb, {
                          isOpen: j,
                          onClose: () => G(false),
                          onApply: Ce,
                          currentData: C.pmImageContext
                            ? {
                                alt: C.pmImageContext.alt ?? void 0,
                                borderWidth: C.pmImageContext.borderWidth ?? void 0,
                                borderColor: C.pmImageContext.borderColor ?? void 0,
                                borderStyle: C.pmImageContext.borderStyle ?? void 0,
                              }
                            : void 0,
                        }),
                      be &&
                        jsx(Lb, {
                          isOpen: be,
                          onClose: () => E(false),
                          onApply: ye,
                          footnotePr:
                            le.state?.package.document?.finalSectionProperties?.footnotePr,
                          endnotePr: le.state?.package.document?.finalSectionProperties?.endnotePr,
                        }),
                    ],
                  }),
                  jsx('input', {
                    ref: So,
                    type: 'file',
                    accept: 'image/*',
                    style: { display: 'none' },
                    onChange: ne,
                  }),
                ],
              }),
            }),
          })
        : jsx('div', {
            className: `ep-root docx-editor docx-editor-empty ${$}`,
            style: pr,
            'data-testid': 'docx-editor',
            children: W || jsx(Sd, {}),
          });
});
function w0(e, t, n = {}) {
  return new Promise((o, r) => {
    let i = Au.createRef(),
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
      u = Au.createElement(Bu, {
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
function F0(e, t = {}) {
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
    x = useCallback(() => c.dismissRecovery(), [c]),
    w = useCallback(() => c.enable(), [c]),
    S = useCallback(() => c.disable(), [c]);
  return {
    status: p.status,
    lastSaveTime: p.lastSaveTime,
    save: f,
    clearAutoSave: m,
    hasRecoveryData: p.hasRecoveryData,
    getRecoveryData: b,
    acceptRecovery: g,
    dismissRecovery: x,
    isEnabled: p.isEnabled,
    enable: w,
    disable: S,
  };
}
var $b = 1,
  Du = 0.25,
  Hu = 4,
  Wb = 0.1,
  Xt = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 3, 4];
function Nu(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function zu(e) {
  return Math.round(e * 100) / 100;
}
function _b(e) {
  let t = Xt[0],
    n = Math.abs(e - t);
  for (let o of Xt) {
    let r = Math.abs(e - o);
    r < n && ((n = r), (t = o));
  }
  return t;
}
function Vb(e) {
  for (let t of Xt) if (t > e + 0.01) return t;
  return Xt[Xt.length - 1];
}
function jb(e) {
  for (let t = Xt.length - 1; t >= 0; t--) if (Xt[t] < e - 0.01) return Xt[t];
  return Xt[0];
}
function A0(e = {}) {
  let {
      initialZoom: t = $b,
      minZoom: n = Du,
      maxZoom: o = Hu,
      zoomStep: r = Wb,
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
      (P) => {
        let z = zu(Nu(P, n, o));
        z !== p.current && (c(z), s?.(z));
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
    x = useCallback(() => {
      f(1);
    }, [f]),
    w = useCallback(
      (P, z) => {
        if (z > 0) {
          let U = P / z;
          f(U);
        }
      },
      [f]
    ),
    S = useCallback(
      (P) => {
        if (!i || !(P.ctrlKey || P.metaKey)) return;
        u && P.preventDefault();
        let U = P.deltaY;
        U < 0 ? f(p.current + r) : U > 0 && f(p.current - r);
      },
      [i, u, r, f]
    ),
    M = useCallback(
      (P) => {
        if (!(!i || !l || !(P.ctrlKey || P.metaKey))) {
          if (P.key === '0') {
            (P.preventDefault(), x());
            return;
          }
          if (P.key === '+' || P.key === '=') {
            (P.preventDefault(), m());
            return;
          }
          if (P.key === '-') {
            (P.preventDefault(), b());
            return;
          }
        }
      },
      [i, l, m, b, x]
    );
  return (
    useEffect(() => {
      if (!i) return;
      let P = a?.current;
      if (P)
        return (
          P.addEventListener('wheel', S, { passive: false }),
          () => {
            P.removeEventListener('wheel', S);
          }
        );
    }, [i, a, S]),
    useEffect(() => {
      if (!(!i || !l))
        return (
          document.addEventListener('keydown', M),
          () => {
            document.removeEventListener('keydown', M);
          }
        );
    }, [i, l, M]),
    {
      zoom: d,
      setZoom: f,
      zoomIn: m,
      zoomOut: b,
      resetZoom: g,
      zoomTo100: x,
      zoomToFit: w,
      isMinZoom: d <= n,
      isMaxZoom: d >= o,
      zoomPercent: Math.round(d * 100),
      handleWheel: S,
      handleKeyDown: M,
    }
  );
}
function D0() {
  return [...Xt];
}
function H0(e) {
  return _b(e);
}
function N0(e) {
  return Vb(e);
}
function z0(e) {
  return jb(e);
}
function O0(e) {
  return `${Math.round(e * 100)}%`;
}
function $0(e) {
  let t = e.match(/(\d+(\.\d+)?)/);
  if (t) {
    let n = parseFloat(t[1]);
    if (!isNaN(n)) return n / 100;
  }
  return null;
}
function W0(e) {
  return Xt.some((t) => Math.abs(t - e) < 0.01);
}
function _0(e, t = Du, n = Hu) {
  return zu(Nu(e, t, n));
}
var bo = {
    backgroundColor: 'rgba(26, 115, 232, 0.3)',
    borderRadius: 0,
    zIndex: 0,
    opacity: 1,
    mixBlendMode: 'multiply',
  },
  j0 = {
    backgroundColor: 'rgba(0, 120, 215, 0.4)',
    borderColor: 'rgba(0, 120, 215, 0.6)',
    borderRadius: 1,
    zIndex: 0,
    opacity: 1,
  },
  U0 = {
    backgroundColor: '--docx-selection-bg',
    borderColor: '--docx-selection-border',
    textColor: '--docx-selection-text',
  };
function Ou(e) {
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
function Ub(e, t = 2) {
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
function Is(e) {
  let t = Ou(e);
  return Ub(t);
}
function G0(e, t = bo) {
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
function K0(e, t = bo) {
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
function $u() {
  let e = window.getSelection();
  return e !== null && !e.isCollapsed && e.rangeCount > 0;
}
function Wu() {
  let e = window.getSelection();
  return e ? e.toString() : '';
}
function _u(e) {
  let t = window.getSelection();
  if (!t || t.rangeCount === 0) return false;
  let n = t.getRangeAt(0);
  return e.contains(n.commonAncestorContainer);
}
function q0() {
  let e = window.getSelection();
  return !e || e.rangeCount === 0 ? null : e.getRangeAt(0).getBoundingClientRect();
}
function Y0(e, t, n, o, r) {
  try {
    let i = document.createRange();
    return (i.setStart(t, n), i.setEnd(o, r), i);
  } catch {
    return null;
  }
}
function X0(e) {
  let t = window.getSelection();
  t && (t.removeAllRanges(), t.addRange(e));
}
function Z0() {
  let e = window.getSelection();
  e && e.removeAllRanges();
}
function Gb() {
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
function J0() {
  let e = window.getSelection();
  if (!e || e.rangeCount === 0 || !Gb()) return;
  let t = e.getRangeAt(0),
    n = document.createRange();
  (n.setStart(t.startContainer, t.startOffset),
    n.setEnd(t.endContainer, t.endOffset),
    e.removeAllRanges(),
    e.addRange(n));
}
var Dn = null;
function Vu(e = bo) {
  Kb();
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
  ((Dn = document.createElement('style')),
    (Dn.id = 'docx-selection-styles'),
    (Dn.textContent = t),
    document.head.appendChild(Dn));
}
function Kb() {
  Dn && (Dn.remove(), (Dn = null));
  let e = document.getElementById('docx-selection-styles');
  e && e.remove();
}
function ju() {
  return Dn !== null || document.getElementById('docx-selection-styles') !== null;
}
function Q0(e, t, n = true) {
  return () => {
    if (!e) {
      t([]);
      return;
    }
    let o = n ? Is(e) : Ou(e);
    t(o);
  };
}
function iR(e) {
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
    x = useCallback(() => {
      let P = t.current,
        z = $u(),
        U = Wu(),
        $ = P ? _u(P) : false;
      if ((l(z), d(U), m($), r && $)) {
        let L = Is(P);
        p(L);
      } else p([]);
      a && a(z && $, U);
    }, [t, r, a]),
    w = useCallback(() => {
      let P = performance.now();
      if (P - g.current < i) {
        (b.current !== null && clearTimeout(b.current),
          (b.current = window.setTimeout(() => {
            ((g.current = performance.now()), x(), (b.current = null));
          }, i)));
        return;
      }
      ((g.current = P), x());
    }, [i, x]),
    S = useCallback(() => {
      x();
    }, [x]),
    M = useCallback(
      (P) => ({
        position: 'absolute',
        left: `${P.left}px`,
        top: `${P.top}px`,
        width: `${P.width}px`,
        height: `${P.height}px`,
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
    useEffect(() => (n && !ju() && Vu(o), () => {}), [n, o]),
    useEffect(() => {
      if (!n) return;
      let P = () => {
        w();
      };
      return (
        document.addEventListener('selectionchange', P),
        document.addEventListener('mouseup', P),
        x(),
        () => {
          (document.removeEventListener('selectionchange', P),
            document.removeEventListener('mouseup', P),
            b.current !== null && clearTimeout(b.current));
        }
      );
    }, [n, w, x]),
    {
      hasSelection: s,
      selectedText: u,
      highlightRects: c,
      isSelectionInContainer: f,
      refresh: S,
      getOverlayStyle: M,
    }
  );
}
function aR(e, t = bo) {
  return e.map((n, o) =>
    Au.createElement('div', {
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
function pR(e = {}) {
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
          let x = await ja(g.runs, { onError: a });
          return (x && t?.(g), x);
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
          let x = await ja(g.runs, { onError: a });
          return (x && n?.(g), x);
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
            let x = await navigator.clipboard.read(),
              w = '',
              S = '';
            for (let P of x)
              (P.types.includes('text/html') && (w = await (await P.getType('text/html')).text()),
                P.types.includes('text/plain') &&
                  (S = await (await P.getType('text/plain')).text()));
            g && (w = '');
            let M = qa(w, S, r);
            return ((l.current = M), o?.(M, g), M);
          }
          return null;
        } catch (x) {
          return (a?.(x), null);
        } finally {
          s.current = false;
        }
      },
      [i, r, o, a]
    ),
    p = useCallback(
      (g) => {
        let x = F();
        if (!x) return;
        g.preventDefault();
        let w = la(x.runs);
        (g.clipboardData &&
          (g.clipboardData.setData('text/plain', w.plainText),
          g.clipboardData.setData('text/html', w.html),
          w.internal && g.clipboardData.setData('application/x-docx-editor', w.internal)),
          t?.(x));
      },
      [t]
    ),
    f = useCallback(
      (g) => {
        if (!i) return;
        let x = F();
        if (!x) return;
        g.preventDefault();
        let w = la(x.runs);
        (g.clipboardData &&
          (g.clipboardData.setData('text/plain', w.plainText),
          g.clipboardData.setData('text/html', w.html),
          w.internal && g.clipboardData.setData('application/x-docx-editor', w.internal)),
          n?.(x));
      },
      [i, n]
    ),
    m = useCallback(
      (g) => {
        if (!i) return;
        g.preventDefault();
        let x = pa(g, { cleanWordFormatting: r });
        if (x) {
          l.current = x;
          let w = g.shiftKey ?? false;
          o?.(x, w);
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
var ra = {
    position: 'right',
    defaultSize: 280,
    minSize: 200,
    maxSize: 500,
    resizable: true,
    collapsible: true,
    defaultCollapsed: false,
  },
  Yu = I,
  Xu = `
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
  ey = forwardRef(function ({ plugins: t, children: n, className: o = '' }, r) {
    let [i, a] = useState(null),
      s = useRef(n.props);
    s.current = n.props;
    let [l, u] = useState(null),
      d = useMemo(() => new J(), []),
      c = useSyncExternalStore(d.subscribe, d.getSnapshot),
      [p, f] = useState(() => {
        let T = new Set();
        for (let B of t) ({ ...ra, ...B.panelConfig }).defaultCollapsed && T.add(B.id);
        return T;
      }),
      [m] = useState(() => {
        let T = new Map();
        for (let B of t) {
          let J = { ...ra, ...B.panelConfig };
          T.set(B.id, J.defaultSize);
        }
        return T;
      });
    (useEffect(() => {
      if (!i) return;
      let T = t.map((B) => ({
        id: B.id,
        styles: B.styles,
        initialize: B.initialize,
        onStateChange: B.onStateChange,
        destroy: B.destroy,
      }));
      return (
        d.initialize(T, i),
        () => {
          d.destroy();
        }
      );
    }, [d, i, t]),
      useEffect(() => {
        let T = t.filter((B) => B.styles).map((B) => Yu(B.id, B.styles));
        return () => T.forEach((B) => B());
      }, [t]),
      useEffect(() => {
        if (!i?.dom) return;
        let T = () => {
            d.updateStates(i);
          },
          B = null,
          J = () => {
            (B && cancelAnimationFrame(B), (B = requestAnimationFrame(T)));
          };
        T();
        let he = i.dom;
        (he.addEventListener('input', J),
          he.addEventListener('focus', T),
          he.addEventListener('click', T));
        let ue = i.dispatch.bind(i);
        return (
          (i.dispatch = (Ee) => {
            (ue(Ee), J());
          }),
          () => {
            (he.removeEventListener('input', J),
              he.removeEventListener('focus', T),
              he.removeEventListener('click', T),
              B && cancelAnimationFrame(B),
              (i.dispatch = ue));
          }
        );
      }, [i, d]),
      useEffect(() => Yu('plugin-host-base', Xu), []));
    let b = useCallback(
        (T) => {
          if (!i) return;
          if (i.coordsAtPos(T)) {
            i.dom.scrollIntoView({ block: 'center', inline: 'nearest' });
            let { state: J } = i,
              he = J.doc.resolve(Math.min(T, J.doc.content.size)),
              ue = J.tr.setSelection(TextSelection.near(he));
            (i.dispatch(ue), i.focus());
          }
        },
        [i]
      ),
      g = useCallback(
        (T, B) => {
          if (!i) return;
          let { state: J } = i,
            he = J.doc.content.size,
            ue = Math.max(0, Math.min(T, he)),
            Ee = Math.max(0, Math.min(B, he)),
            we = J.tr.setSelection(TextSelection.create(J.doc, ue, Ee));
          (i.dispatch(we), i.focus());
        },
        [i]
      ),
      x = useCallback((T) => d.getPluginState(T), [d]),
      w = useCallback(
        (T, B) => {
          d.setPluginState(T, B);
        },
        [d]
      ),
      S = useCallback(() => {
        i && d.updateStates(i);
      }, [i, d]);
    useImperativeHandle(
      r,
      () => ({
        getPluginState: x,
        setPluginState: w,
        getEditorView: () => i,
        refreshPluginStates: S,
      }),
      [x, w, i, S]
    );
    let M = useMemo(() => {
        let T = [];
        for (let B of t) B.proseMirrorPlugins && T.push(...B.proseMirrorPlugins);
        return T;
      }, [t]),
      P = useCallback((T) => {
        f((B) => {
          let J = new Set(B);
          return (J.has(T) ? J.delete(T) : J.add(T), J);
        });
      }, []),
      [z, U] = useState(null);
    useEffect(() => {
      if (!l) {
        U(null);
        return;
      }
      let T = () => {
        let he = l.pagesContainer,
          ue = he.querySelector('.layout-page');
        if (!ue) {
          U(null);
          return;
        }
        let Ee = l.getContainerOffset(),
          we = ue.getBoundingClientRect(),
          Re = he.getBoundingClientRect(),
          R = (we.right - Re.left) / l.zoom,
          F = Ee.x + R + 5;
        U(F);
      };
      T();
      let B = () => {
        requestAnimationFrame(T);
      };
      window.addEventListener('resize', B);
      let J = new ResizeObserver(() => {
        requestAnimationFrame(T);
      });
      return (
        J.observe(l.pagesContainer),
        () => {
          (window.removeEventListener('resize', B), J.disconnect());
        }
      );
    }, [l]);
    let $ = useMemo(() => {
        let T = [];
        if (l) {
          for (let B of t)
            if (B.renderOverlay) {
              let J = c.states.get(B.id);
              T.push(
                jsx(
                  'div',
                  {
                    className: 'plugin-overlay',
                    'data-plugin-id': B.id,
                    children: B.renderOverlay(l, J, i),
                  },
                  `overlay-${B.id}`
                )
              );
            }
        }
        for (let B of t) {
          if (!B.Panel || (B.panelConfig?.position ?? 'right') !== 'right') continue;
          let he = { ...ra, ...B.panelConfig },
            ue = p.has(B.id),
            Ee = m.get(B.id) ?? he.defaultSize,
            we = B.Panel,
            Re = c.states.get(B.id),
            R = z !== null ? `${z}px` : 'calc(50% + 428px)';
          T.push(
            jsxs(
              'div',
              {
                className: `plugin-panel-in-viewport ${ue ? 'collapsed' : ''}`,
                style: { width: ue ? '32px' : `${Ee}px`, left: R },
                'data-plugin-id': B.id,
                children: [
                  he.collapsible &&
                    jsx('button', {
                      className: 'plugin-panel-toggle',
                      onClick: () => P(B.id),
                      title: ue ? `Show ${B.name}` : `Hide ${B.name}`,
                      'aria-label': ue ? `Show ${B.name}` : `Hide ${B.name}`,
                      children: jsx('span', {
                        className: 'plugin-panel-toggle-icon',
                        children: ue ? '\u2039' : '\u203A',
                      }),
                    }),
                  !ue &&
                    l &&
                    jsx('div', {
                      className: 'plugin-panel-in-viewport-content',
                      children: jsx(we, {
                        editorView: i,
                        doc: i?.state.doc ?? null,
                        scrollToPosition: b,
                        selectRange: g,
                        pluginState: Re,
                        panelWidth: Ee,
                        renderedDomContext: l,
                      }),
                    }),
                ],
              },
              `panel-overlay-${B.id}`
            )
          );
        }
        return T.length > 0 ? T : null;
      }, [l, t, c.version, i, p, m, b, g, P, z]),
      L = useCallback((T) => {
        u(T);
        let B = s.current?.onRenderedDomContextReady;
        typeof B == 'function' && B(T);
      }, []),
      W = useMemo(
        () =>
          cloneElement(n, {
            externalPlugins: M,
            pluginOverlays: $,
            onRenderedDomContextReady: L,
            onEditorViewReady: (T) => {
              a(T);
              let B = s.current?.onEditorViewReady;
              typeof B == 'function' && B(T);
            },
          }),
        [n, M, $, L]
      ),
      _ = useMemo(() => {
        let T = [],
          B = [],
          J = [];
        for (let he of t) {
          if (!he.Panel) continue;
          let ue = he.panelConfig?.position ?? 'right';
          ue === 'left' ? T.push(he) : ue === 'bottom' ? J.push(he) : B.push(he);
        }
        return { left: T, right: B, bottom: J };
      }, [t]),
      K = (T) => {
        if (!T.Panel) return null;
        let B = { ...ra, ...T.panelConfig },
          J = p.has(T.id),
          he = m.get(T.id) ?? B.defaultSize,
          ue = T.Panel,
          Ee = c.states.get(T.id);
        return jsxs(
          'div',
          {
            className: `plugin-panel plugin-panel-${B.position} ${J ? 'collapsed' : ''}`,
            style: {
              [B.position === 'bottom' ? 'height' : 'width']: J ? '32px' : `${he}px`,
              minWidth: B.position !== 'bottom' ? (J ? '32px' : `${B.minSize}px`) : void 0,
              maxWidth: B.position !== 'bottom' ? `${B.maxSize}px` : void 0,
              minHeight: B.position === 'bottom' ? (J ? '32px' : `${B.minSize}px`) : void 0,
              maxHeight: B.position === 'bottom' ? `${B.maxSize}px` : void 0,
            },
            'data-plugin-id': T.id,
            children: [
              B.collapsible &&
                jsxs('button', {
                  className: 'plugin-panel-toggle',
                  onClick: () => P(T.id),
                  title: J ? `Show ${T.name}` : `Hide ${T.name}`,
                  'aria-label': J ? `Show ${T.name}` : `Hide ${T.name}`,
                  children: [
                    jsx('span', {
                      className: 'plugin-panel-toggle-icon',
                      children: J ? '\u203A' : '\u2039',
                    }),
                    J && jsx('span', { className: 'plugin-panel-toggle-label', children: T.name }),
                  ],
                }),
              !J &&
                jsx('div', {
                  className: 'plugin-panel-content',
                  children: jsx(ue, {
                    editorView: i,
                    doc: i?.state.doc ?? null,
                    scrollToPosition: b,
                    selectRange: g,
                    pluginState: Ee,
                    panelWidth: he,
                    renderedDomContext: l ?? null,
                  }),
                }),
            ],
          },
          T.id
        );
      };
    return jsxs('div', {
      className: `plugin-host ${o}`,
      children: [
        _.left.length > 0 &&
          jsx('div', { className: 'plugin-panels-left', children: _.left.map(K) }),
        jsxs('div', {
          className: 'plugin-host-editor',
          children: [
            W,
            _.bottom.length > 0 &&
              jsx('div', { className: 'plugin-panels-bottom', children: _.bottom.map(K) }),
          ],
        }),
      ],
    });
  });
export {
  Is as A,
  G0 as B,
  K0 as C,
  $u as D,
  Wu as E,
  _u as F,
  q0 as G,
  Y0 as H,
  X0 as I,
  Z0 as J,
  Gb as K,
  J0 as L,
  Vu as M,
  Kb as N,
  ju as O,
  Q0 as P,
  iR as Q,
  aR as R,
  pR as S,
  Xu as T,
  ey as U,
  ry as a,
  bl as b,
  yr as c,
  iy as d,
  ay as e,
  sy as f,
  ly as g,
  xl as h,
  Bu as i,
  w0 as j,
  F0 as k,
  Xt as l,
  A0 as m,
  D0 as n,
  H0 as o,
  N0 as p,
  z0 as q,
  O0 as r,
  $0 as s,
  W0 as t,
  _0 as u,
  bo as v,
  j0 as w,
  U0 as x,
  Ou as y,
  Ub as z,
}; //# sourceMappingURL=chunk-K2QMBCCR.js.map
//# sourceMappingURL=chunk-K2QMBCCR.js.map
