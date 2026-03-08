import { p, a, r, s, B, b as b$1 } from './chunk-CXJ6TLVT.js';
import * as J from 'react';
import J__default, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import * as E from '@radix-ui/react-select';
import { clsx } from 'clsx';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
function w(...e) {
  return clsx(e);
}
var ye = E.Root,
  Ae = E.Group,
  st = E.Value;
function Se({ className: e, children: t, onMouseDown: o, ...n }) {
  return jsxs(E.Trigger, {
    className: w(
      'flex h-8 items-center justify-between gap-1 rounded px-2 py-1',
      'text-sm text-slate-700 bg-transparent',
      'hover:bg-slate-100/80 focus:outline-none focus:bg-slate-100/80',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'transition-colors duration-150',
      '[&>span]:truncate',
      e
    ),
    onMouseDown: (i) => {
      (i.preventDefault(), o?.(i));
    },
    ...n,
    children: [
      t,
      jsx(E.Icon, {
        asChild: true,
        children: jsx(Sn, { className: 'h-4 w-4 text-slate-400 shrink-0' }),
      }),
    ],
  });
}
function Ce({ className: e, children: t, position: o = 'popper', onCloseAutoFocus: n, ...i }) {
  return jsx(E.Portal, {
    children: jsx('div', {
      className: 'ep-root',
      children: jsx(E.Content, {
        className: w(
          'relative z-50 max-h-72 min-w-[8rem] overflow-hidden',
          'rounded-lg border border-slate-200 bg-white shadow-lg',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
          o === 'popper' && 'data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1',
          e
        ),
        position: o,
        onCloseAutoFocus: (a) => {
          (a.preventDefault(), n?.(a));
        },
        ...i,
        children: jsx(E.Viewport, {
          className: w(
            'p-1',
            o === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
          ),
          onMouseDown: (a) => a.preventDefault(),
          children: t,
        }),
      }),
    }),
  });
}
function Be({ className: e, ...t }) {
  return jsx(E.Label, { className: w('px-2 py-1.5 text-xs font-medium text-slate-500', e), ...t });
}
function ce({ className: e, children: t, onMouseDown: o, ...n }) {
  return jsxs(E.Item, {
    className: w(
      'relative flex w-full cursor-pointer select-none items-center',
      'rounded px-2 py-1.5 text-sm text-slate-700 outline-none',
      'hover:bg-slate-100 focus:bg-slate-100',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      e
    ),
    onMouseDown: (i) => {
      (i.preventDefault(), o?.(i));
    },
    ...n,
    children: [
      jsx(E.ItemText, { children: t }),
      jsx('span', {
        className: 'absolute right-2 flex h-3.5 w-3.5 items-center justify-center',
        children: jsx(E.ItemIndicator, { children: jsx(Cn, { className: 'h-4 w-4' }) }),
      }),
    ],
  });
}
function Qe({ className: e, ...t }) {
  return jsx(E.Separator, { className: w('-mx-1 my-1 h-px bg-slate-100', e), ...t });
}
function Sn({ className: e }) {
  return jsx('svg', {
    className: e,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 20 20',
    fill: 'currentColor',
    children: jsx('path', {
      fillRule: 'evenodd',
      d: 'M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z',
      clipRule: 'evenodd',
    }),
  });
}
function Cn({ className: e }) {
  return jsx('svg', {
    className: e,
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 20 20',
    fill: 'currentColor',
    children: jsx('path', {
      fillRule: 'evenodd',
      d: 'M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z',
      clipRule: 'evenodd',
    }),
  });
}
var Tn = [
  { name: 'Arial', fontFamily: 'Arial, Helvetica, sans-serif', category: 'sans-serif' },
  { name: 'Calibri', fontFamily: '"Calibri", Arial, sans-serif', category: 'sans-serif' },
  { name: 'Helvetica', fontFamily: 'Helvetica, Arial, sans-serif', category: 'sans-serif' },
  { name: 'Verdana', fontFamily: 'Verdana, Geneva, sans-serif', category: 'sans-serif' },
  { name: 'Open Sans', fontFamily: '"Open Sans", sans-serif', category: 'sans-serif' },
  { name: 'Roboto', fontFamily: 'Roboto, sans-serif', category: 'sans-serif' },
  { name: 'Times New Roman', fontFamily: '"Times New Roman", Times, serif', category: 'serif' },
  { name: 'Georgia', fontFamily: 'Georgia, serif', category: 'serif' },
  { name: 'Cambria', fontFamily: 'Cambria, Georgia, serif', category: 'serif' },
  { name: 'Garamond', fontFamily: 'Garamond, serif', category: 'serif' },
  { name: 'Courier New', fontFamily: '"Courier New", Courier, monospace', category: 'monospace' },
  { name: 'Consolas', fontFamily: 'Consolas, monospace', category: 'monospace' },
];
function oo({
  value: e,
  onChange: t,
  fonts: o = Tn,
  disabled: n = false,
  className: i,
  placeholder: a = 'Arial',
  width: r = 120,
  showPreview: p = true,
}) {
  let d = J.useMemo(
      () =>
        e
          ? o.find((f) => f.fontFamily === e || f.name.toLowerCase() === e.toLowerCase())?.name || e
          : a,
      [e, o, a]
    ),
    c = J.useCallback(
      (s) => {
        let f = o.find((m) => m.name === s);
        f && t?.(f.fontFamily);
      },
      [t, o]
    ),
    u = J.useMemo(() => {
      let s = { 'sans-serif': [], serif: [], monospace: [], other: [] };
      return (
        o.forEach((f) => {
          let m = f.category || 'other';
          s[m].push(f);
        }),
        s
      );
    }, [o]);
  return jsxs(ye, {
    value: d,
    onValueChange: c,
    disabled: n,
    children: [
      jsx(Se, {
        className: w('h-8 text-sm', i),
        style: { minWidth: typeof r == 'number' ? `${r}px` : r },
        'aria-label': 'Select font family',
        children: jsx(st, { placeholder: a, children: d }),
      }),
      jsxs(Ce, {
        className: 'max-h-[300px]',
        children: [
          u['sans-serif'].length > 0 &&
            jsxs(Ae, {
              children: [
                jsx(Be, { children: 'Sans Serif' }),
                u['sans-serif'].map((s) =>
                  jsx(
                    ce,
                    {
                      value: s.name,
                      style: p ? { fontFamily: s.fontFamily } : void 0,
                      children: s.name,
                    },
                    s.name
                  )
                ),
              ],
            }),
          u.serif.length > 0 &&
            jsxs(Fragment, {
              children: [
                jsx(Qe, {}),
                jsxs(Ae, {
                  children: [
                    jsx(Be, { children: 'Serif' }),
                    u.serif.map((s) =>
                      jsx(
                        ce,
                        {
                          value: s.name,
                          style: p ? { fontFamily: s.fontFamily } : void 0,
                          children: s.name,
                        },
                        s.name
                      )
                    ),
                  ],
                }),
              ],
            }),
          u.monospace.length > 0 &&
            jsxs(Fragment, {
              children: [
                jsx(Qe, {}),
                jsxs(Ae, {
                  children: [
                    jsx(Be, { children: 'Monospace' }),
                    u.monospace.map((s) =>
                      jsx(
                        ce,
                        {
                          value: s.name,
                          style: p ? { fontFamily: s.fontFamily } : void 0,
                          children: s.name,
                        },
                        s.name
                      )
                    ),
                  ],
                }),
              ],
            }),
        ],
      }),
    ],
  });
}
var no = (e) => (typeof e == 'boolean' ? `${e}` : e === 0 ? '0' : e),
  ro = clsx,
  io = (e, t) => (o) => {
    var n;
    if (t?.variants == null) return ro(e, o?.class, o?.className);
    let { variants: i, defaultVariants: a } = t,
      r = Object.keys(i).map((c) => {
        let u = o?.[c],
          s = a?.[c];
        if (u === null) return null;
        let f = no(u) || no(s);
        return i[c][f];
      }),
      p =
        o &&
        Object.entries(o).reduce((c, u) => {
          let [s, f] = u;
          return (f === void 0 || (c[s] = f), c);
        }, {}),
      d =
        t == null || (n = t.compoundVariants) === null || n === void 0
          ? void 0
          : n.reduce((c, u) => {
              let { class: s, className: f, ...m } = u;
              return Object.entries(m).every((v) => {
                let [g, y] = v;
                return Array.isArray(y) ? y.includes({ ...a, ...p }[g]) : { ...a, ...p }[g] === y;
              })
                ? [...c, s, f]
                : c;
            }, []);
    return ro(e, r, d, o?.class, o?.className);
  };
var wn = io(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
    {
      variants: {
        variant: {
          default: 'bg-primary text-primary-foreground hover:bg-primary/90',
          destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
          outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
          secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
          ghost: 'hover:bg-accent hover:text-accent-foreground',
          link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {
          default: 'h-10 px-4 py-2',
          sm: 'h-9 rounded-md px-3',
          lg: 'h-11 rounded-md px-8',
          icon: 'h-9 w-9',
          'icon-sm': 'h-8 w-8',
        },
      },
      defaultVariants: { variant: 'default', size: 'default' },
    }
  ),
  G = J.forwardRef(({ className: e, variant: t, size: o, ...n }, i) =>
    jsx('button', { className: w(wn({ variant: t, size: o, className: e })), ref: i, ...n })
  );
G.displayName = 'Button';
function h({ size: e = 20, className: t = '', style: o, children: n }) {
  return jsx('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: e,
    height: e,
    viewBox: '0 -960 960 960',
    fill: 'currentColor',
    className: t,
    style: { display: 'inline-flex', flexShrink: 0, ...o },
    'aria-hidden': 'true',
    children: n,
  });
}
function Mn(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z',
    }),
  });
}
function Rn(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M396-200q-97 0-166.5-63T160-420q0-94 69.5-157T396-640h252L544-744l56-56 200 200-200 200-56-56 104-104H396q-63 0-109.5 40T240-420q0 60 46.5 100T396-280h284v80H396Z',
    }),
  });
}
function kn(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M640-640v-120H320v120h-80v-200h480v200h-80Zm-480 80h640-640Zm560 100q17 0 28.5-11.5T760-500q0-17-11.5-28.5T720-540q-17 0-28.5 11.5T680-500q0 17 11.5 28.5T720-460Zm-80 260v-160H320v160h320Zm80 80H240v-160H80v-240q0-51 35-85.5t85-34.5h560q51 0 85.5 34.5T880-520v240H720v160Zm80-240v-160q0-17-11.5-28.5T760-560H200q-17 0-28.5 11.5T160-520v160h80v-80h480v80h80Z',
    }),
  });
}
function Ln(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M272-200v-560h221q65 0 120 40t55 111q0 51-23 78.5T602-491q25 11 55.5 41t30.5 90q0 89-65 124.5T501-200H272Zm121-112h104q48 0 58.5-24.5T566-372q0-11-10.5-35.5T494-432H393v120Zm0-228h93q33 0 48-17t15-38q0-24-17-39t-44-15h-95v109Z',
    }),
  });
}
function Zn(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M200-200v-100h160l120-360H320v-100h400v100H580L460-300h140v100H200Z',
    }),
  });
}
function Hn(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M200-120v-80h560v80H200Zm123-223q-56-63-56-167v-330h103v336q0 56 28 91t82 35q54 0 82-35t28-91v-336h103v330q0 104-56 167t-157 63q-101 0-157-63Z',
    }),
  });
}
function En(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M486-160q-76 0-135-45t-85-123l88-38q14 48 48.5 79t85.5 31q42 0 76-20t34-64q0-18-7-33t-19-27h112q5 14 7.5 28.5T694-340q0 86-61.5 133T486-160ZM80-480v-80h800v80H80Zm402-326q66 0 115.5 32.5T674-674l-88 39q-9-29-33.5-52T484-710q-41 0-68 18.5T386-640h-96q2-69 54.5-117.5T482-806Z',
    }),
  });
}
function _n(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M760-600v-80q0-17 11.5-28.5T800-720h80v-40H760v-40h120q17 0 28.5 11.5T920-760v40q0 17-11.5 28.5T880-680h-80v40h120v40H760ZM235-160l185-291-172-269h106l124 200h4l123-200h107L539-451l186 291H618L482-377h-4L342-160H235Z',
    }),
  });
}
function Dn(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M760-160v-80q0-17 11.5-28.5T800-280h80v-40H760v-40h120q17 0 28.5 11.5T920-320v40q0 17-11.5 28.5T880-240h-80v40h120v40H760Zm-525-80 185-291-172-269h106l124 200h4l123-200h107L539-531l186 291H618L482-457h-4L342-240H235Z',
    }),
  });
}
function Nn(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z',
    }),
  });
}
function qn(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'm528-546-93-93-121-121h486v120H568l-40 94ZM792-56 460-388l-80 188H249l119-280L56-792l56-56 736 736-56 56Z',
    }),
  });
}
function An(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M120-120v-80h720v80H120Zm0-160v-80h480v80H120Zm0-160v-80h720v80H120Zm0-160v-80h480v80H120Zm0-160v-80h720v80H120Z',
    }),
  });
}
function Bn(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M120-120v-80h720v80H120Zm160-160v-80h400v80H280ZM120-440v-80h720v80H120Zm160-160v-80h400v80H280ZM120-760v-80h720v80H120Z',
    }),
  });
}
function Fn(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M120-760v-80h720v80H120Zm240 160v-80h480v80H360ZM120-440v-80h720v80H120Zm240 160v-80h480v80H360ZM120-120v-80h720v80H120Z',
    }),
  });
}
function On(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M120-120v-80h720v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Zm0-160v-80h720v80H120Z',
    }),
  });
}
function Mt(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M240-160 80-320l56-56 64 62v-332l-64 62-56-56 160-160 160 160-56 56-64-62v332l64-62 56 56-160 160Zm240-40v-80h400v80H480Zm0-240v-80h400v80H480Zm0-240v-80h400v80H480Z',
    }),
  });
}
function zn(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M360-200v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360ZM200-160q-33 0-56.5-23.5T120-240q0-33 23.5-56.5T200-320q33 0 56.5 23.5T280-240q0 33-23.5 56.5T200-160Zm0-240q-33 0-56.5-23.5T120-480q0-33 23.5-56.5T200-560q33 0 56.5 23.5T280-480q0 33-23.5 56.5T200-400Zm-56.5-263.5Q120-687 120-720t23.5-56.5Q167-800 200-800t56.5 23.5Q280-753 280-720t-23.5 56.5Q233-640 200-640t-56.5-23.5Z',
    }),
  });
}
function Vn(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M120-80v-60h100v-30h-60v-60h60v-30H120v-60h120q17 0 28.5 11.5T280-280v40q0 17-11.5 28.5T240-200q17 0 28.5 11.5T280-160v40q0 17-11.5 28.5T240-80H120Zm0-280v-110q0-17 11.5-28.5T160-510h60v-30H120v-60h120q17 0 28.5 11.5T280-560v70q0 17-11.5 28.5T240-450h-60v30h100v60H120Zm60-280v-180h-60v-60h120v240h-60Zm180 440v-80h480v80H360Zm0-240v-80h480v80H360Zm0-240v-80h480v80H360Z',
    }),
  });
}
function $n(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M120-120v-80h720v80H120Zm320-160v-80h400v80H440Zm0-160v-80h400v80H440Zm0-160v-80h400v80H440ZM120-760v-80h720v80H120Zm0 440v-320l160 160-160 160Z',
    }),
  });
}
function Wn(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M120-120v-80h720v80H120Zm320-160v-80h400v80H440Zm0-160v-80h400v80H440Zm0-160v-80h400v80H440ZM120-760v-80h720v80H120Zm160 440L120-480l160-160v320Z',
    }),
  });
}
function Gn(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M80 0v-160h800V0H80Zm140-280 210-560h100l210 560h-96l-50-144H368l-52 144h-96Zm176-224h168l-82-232h-4l-82 232Z',
    }),
  });
}
function Un(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M544-400 440-504 240-304l104 104 200-200Zm-47-161 104 104 199-199-104-104-199 199Zm-84-28 216 216-229 229q-24 24-56 24t-56-24l-2-2-26 26H60l126-126-2-2q-24-24-24-56t24-56l229-229Zm0 0 227-227q24-24 56-24t56 24l104 104q24 24 24 56t-24 56L629-373 413-589Z',
    }),
  });
}
function Kn(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M800-436q0 36-8 69t-22 63l-62-60q6-17 9-34.5t3-37.5q0-47-17.5-89T650-600L480-768l-88 86-56-56 144-142 226 222q44 42 69 99.5T800-436Zm-8 380L668-180q-41 29-88 44.5T480-120q-133 0-226.5-92.5T160-436q0-51 16-98t48-90L56-792l56-56 736 736-56 56ZM480-200q36 0 68.5-10t61.5-28L280-566q-21 32-30.5 64t-9.5 66q0 98 70 167t170 69Zm-37-204Zm110-116Z',
    }),
  });
}
function Yn(e) {
  return jsx(h, { ...e, children: jsx('path', { d: 'M480-360 280-560h400L480-360Z' }) });
}
function jn(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm240-240H200v160h240v-160Zm80 0v160h240v-160H520Zm-80-80v-160H200v160h240Zm80 0h240v-160H520v160ZM200-680h560v-80H200v80Z',
    }),
  });
}
function Xn(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120ZM200-640h560v-120H200v120Zm100 80H200v360h100v-360Zm360 0v360h100v-360H660Zm-80 0H380v360h200v-360Z',
    }),
  });
}
function Jn(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h133v-133H200v133Zm213 0h134v-133H413v133Zm214 0h133v-133H627v133ZM200-413h133v-134H200v134Zm213 0h134v-134H413v134Zm214 0h133v-134H627v134ZM200-627h133v-133H200v133Zm213 0h134v-133H413v133Zm214 0h133v-133H627v133Z',
    }),
  });
}
function Qn(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M760-200v-120H200v120h560Zm0-200v-160H200v160h560Zm0-240v-120H200v120h560ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z',
    }),
  });
}
function er(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M121-280v-400q0-33 23.5-56.5T201-760h559q33 0 56.5 23.5T840-680v400q0 33-23.5 56.5T760-200H201q-33 0-56.5-23.5T121-280Zm79 0h133v-400H200v400Zm213 0h133v-400H413v400Zm213 0h133v-400H626v400Z',
    }),
  });
}
function tr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M120-120v-720h720v720H120Zm640-80v-240H520v240h240Zm0-560H520v240h240v-240Zm-560 0v240h240v-240H200Zm0 560h240v-240H200v240Z',
    }),
  });
}
function or(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M200-200h560v-560H200v560Zm-80 80v-720h720v720H120Zm160-320v-80h80v80h-80Zm160 160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 160v-80h80v80h-80Z',
    }),
  });
}
function nr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M120-120v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-320v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm320 640v-80h80v80h-80Zm160 0v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-320v-80h80v80h-80Zm0-160v-80h80v80h-80Zm-160 0v-80h80v80h-80ZM440-120v-320H120v-80h320v-320h80v320h320v80H520v320h-80Z',
    }),
  });
}
function rr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M120-120v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-320v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-320v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Z',
    }),
  });
}
function ir(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', { d: 'M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z' }),
  });
}
function ar(e) {
  return jsx(h, { ...e, children: jsx('path', { d: 'M200-440v-80h560v80H200Z' }) });
}
function lr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z',
    }),
  });
}
function sr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M600-240v-80h160v80H600Zm0-320v-80h280v80H600Zm0 160v-80h240v80H600ZM120-640H80v-80h160v-60h160v60h160v80h-40v360q0 33-23.5 56.5T440-200H200q-33 0-56.5-23.5T120-280v-360Zm80 0v360h240v-360H200Zm0 0v360-360Z',
    }),
  });
}
function cr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'm296-160-56-56 200-200v-269L337-582l-57-57 200-200 201 201-57 57-104-104v301L296-160Zm368 1L536-286l57-57 127 128-56 56Z',
    }),
  });
}
function pr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M440-160v-304L240-664v104h-80v-240h240v80H296l224 224v336h-80Zm154-376-58-58 128-126H560v-80h240v240h-80v-104L594-536Z',
    }),
  });
}
function ur(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M360-160q-33 0-56.5-23.5T280-240q0-33 23.5-56.5T360-320q33 0 56.5 23.5T440-240q0 33-23.5 56.5T360-160Zm240 0q-33 0-56.5-23.5T520-240q0-33 23.5-56.5T600-320q33 0 56.5 23.5T680-240q0 33-23.5 56.5T600-160ZM360-400q-33 0-56.5-23.5T280-480q0-33 23.5-56.5T360-560q33 0 56.5 23.5T440-480q0 33-23.5 56.5T360-400Zm240 0q-33 0-56.5-23.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 33-23.5 56.5T600-400ZM360-640q-33 0-56.5-23.5T280-720q0-33 23.5-56.5T360-800q33 0 56.5 23.5T440-720q0 33-23.5 56.5T360-640Zm240 0q-33 0-56.5-23.5T520-720q0-33 23.5-56.5T600-800q33 0 56.5 23.5T680-720q0 33-23.5 56.5T600-640Z',
    }),
  });
}
function dr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Z',
    }),
  });
}
function mr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M120-280v-400h400v400H120Zm80-80h240v-240H200v240Zm-80-400v-80h720v80H120Zm480 160v-80h240v80H600Zm0 160v-80h240v80H600Zm0 160v-80h240v80H600ZM120-120v-80h720v80H120Z',
    }),
  });
}
function fr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M440-280v-400h400v400H440Zm80-80h240v-240H520v240ZM120-120v-80h720v80H120Zm0-160v-80h240v80H120Zm0-160v-80h240v80H120Zm0-160v-80h240v80H120Zm0-160v-80h720v80H120Z',
    }),
  });
}
function hr(e) {
  return jsx(h, { ...e, children: jsx('path', { d: 'M160-440v-80h640v80H160Z' }) });
}
function vr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M200-120q-33 0-56.5-23.5T120-200v-480h80v480h480v80H200Zm160-240v80q-33 0-56.5-23.5T280-360h80Zm-80-80v-80h80v80h-80Zm0-160v-80h80v80h-80Zm80-160h-80q0-33 23.5-56.5T360-840v80Zm80 480v-80h80v80h-80Zm0-480v-80h80v80h-80Zm160 0v-80h80v80h-80Zm0 480v-80h80v80h-80Zm160-480v-80q33 0 56.5 23.5T840-760h-80Zm0 400h80q0 33-23.5 56.5T760-280v-80Zm0-80v-80h80v80h-80Zm0-160v-80h80v80h-80Z',
    }),
  });
}
function gr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M360-280q-33 0-56.5-23.5T280-360v-400q0-33 23.5-56.5T360-840h400q33 0 56.5 23.5T840-760v400q0 33-23.5 56.5T760-280H360Zm0-80h400v-400H360v400ZM200-200v80q-33 0-56.5-23.5T120-200h80Zm-80-80v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 480v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Z',
    }),
  });
}
function br(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M480-80 310-250l57-57 73 73v-166h80v165l72-73 58 58L480-80ZM250-310 80-480l169-169 57 57-72 72h166v80H235l73 72-58 58Zm460 0-57-57 73-73H560v-80h165l-73-72 58-58 170 170-170 170ZM440-560v-166l-73 73-57-57 170-170 170 170-57 57-73-73v166h-80Z',
    }),
  });
}
function xr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z',
    }),
  });
}
function yr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M522-80v-82q34-5 66.5-18t61.5-34l56 58q-42 32-88 51.5T522-80Zm-80 0Q304-98 213-199.5T122-438q0-75 28.5-140.5t77-114q48.5-48.5 114-77T482-798h6l-62-62 56-58 160 160-160 160-56-56 64-64h-8q-117 0-198.5 81.5T202-438q0 104 68 182.5T442-162v82Zm322-134-58-56q21-29 34-61.5t18-66.5h82q-5 50-24.5 96T764-214Zm76-264h-82q-5-34-18-66.5T706-606l58-56q32 39 51 86t25 98Z',
    }),
  });
}
function Sr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M440-80q-50-5-96-24.5T256-156l56-58q29 21 61.5 34t66.5 18v82Zm80 0v-82q104-15 172-93.5T760-438q0-117-81.5-198.5T480-718h-8l64 64-56 56-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-438q0 137-91 238.5T520-80ZM198-214q-32-42-51.5-88T122-398h82q5 34 18 66.5t34 61.5l-58 56Zm-76-264q6-51 25-98t51-86l58 56q-21 29-34 61.5T204-478h-82Z',
    }),
  });
}
function Cr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M280-160 80-360l200-200 56 57-103 103h287v80H233l103 103-56 57Zm400-240-56-57 103-103H440v-80h287L624-743l56-57 200 200-200 200Z',
    }),
  });
}
function Tr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M320-440v-287L217-624l-57-56 200-200 200 200-57 56-103-103v287h-80ZM600-80 400-280l57-56 103 103v-287h80v287l103-103 57 56L600-80Z',
    }),
  });
}
function Ir(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M600-360ZM320-242q10 1 19.5 1.5t20.5.5q11 0 20.5-.5T400-242v82h400v-400h-82q1-10 1.5-19.5t.5-20.5q0-11-.5-20.5T718-640h82q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H400q-33 0-56.5-23.5T320-160v-82Zm40-78q-117 0-198.5-81.5T80-600q0-117 81.5-198.5T360-880q117 0 198.5 81.5T640-600q0 117-81.5 198.5T360-320Zm0-80q83 0 141.5-58.5T560-600q0-83-58.5-141.5T360-800q-83 0-141.5 58.5T160-600q0 83 58.5 141.5T360-400Zm0-200Z',
    }),
  });
}
function wr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M440-80q-33 0-56.5-23.5T360-160v-160H240q-33 0-56.5-23.5T160-400v-280q0-66 47-113t113-47h480v440q0 33-23.5 56.5T720-320H600v160q0 33-23.5 56.5T520-80h-80ZM240-560h480v-200h-40v160h-80v-160h-40v80h-80v-80H320q-33 0-56.5 23.5T240-680v120Zm0 160h480v-80H240v80Zm0 0v-80 80Z',
    }),
  });
}
function Pr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', { d: 'M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z' }),
  });
}
function Mr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', { d: 'm296-345-56-56 240-240 240 240-56 56-184-184-184 184Z' }),
  });
}
function Rr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M120-120v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h720v80H120Zm160 640v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 320v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 480v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 320v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Z',
    }),
  });
}
function kr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M120-120v-80h720v80H120Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 320v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 480v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 320v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 480v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Z',
    }),
  });
}
function Lr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M120-120v-720h80v720h-80Zm160 0v-80h80v80h-80Zm0-320v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-320v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Z',
    }),
  });
}
function Zr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M120-120v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-320v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-320v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 640v-720h80v720h-80Z',
    }),
  });
}
function Hr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M320-600q17 0 28.5-11.5T360-640q0-17-11.5-28.5T320-680q-17 0-28.5 11.5T280-640q0 17 11.5 28.5T320-600Zm160 0q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm160 0q17 0 28.5-11.5T680-640q0-17-11.5-28.5T640-680q-17 0-28.5 11.5T600-640q0 17 11.5 28.5T640-600ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z',
    }),
  });
}
function Er(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M160-200v-80h528l-42-42 56-56 138 138-138 138-56-56 42-42H160Zm116-200 164-440h80l164 440h-76l-38-112H392l-40 112h-76Zm138-176h132l-64-182h-4l-64 182Z',
    }),
  });
}
function _r(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M588-132 440-280l148-148 56 58-50 50h96q29 0 49.5-20.5T760-390q0-29-20.5-49.5T690-460H160v-80h530q63 0 106.5 43.5T840-390q0 63-43.5 106.5T690-240h-96l50 50-56 58ZM160-240v-80h200v80H160Zm0-440v-80h640v80H160Z',
    }),
  });
}
function Dr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M480-120 320-280l56-56 64 63v-414l-64 63-56-56 160-160 160 160-56 57-64-64v414l64-63 56 56-160 160Z',
    }),
  });
}
function Nr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M120-120v-720h80v720h-80Zm640 0v-720h80v720h-80ZM280-440v-80h80v80h-80Zm160 0v-80h80v80h-80Zm160 0v-80h80v80h-80Z',
    }),
  });
}
function qr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'm370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z',
    }),
  });
}
function Ar(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z',
    }),
  });
}
function Br(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'm247-904 57-56 343 343q23 23 23 57t-23 57L457-313q-23 23-57 23t-57-23L153-503q-23-23-23-57t23-57l190-191-96-96Zm153 153L209-560h382L400-751Zm360 471q-33 0-56.5-23.5T680-360q0-21 12.5-45t27.5-45q9-12 19-25t21-25q11 12 21 25t19 25q15 21 27.5 45t12.5 45q0 33-23.5 56.5T760-280ZM80 0v-160h800V0H80Z',
    }),
  });
}
function Fr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M160-760v-80h640v80H160Zm280 640v-408L336-424l-56-56 200-200 200 200-56 56-104-104v408h-80Z',
    }),
  });
}
function Or(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M440-80v-168l-64 64-56-56 160-160 160 160-56 56-64-64v168h-80ZM160-440v-80h640v80H160Zm320-120L320-720l56-56 64 64v-168h80v168l64-64 56 56-160 160Z',
    }),
  });
}
function zr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M160-120v-80h640v80H160Zm320-160L280-480l56-56 104 104v-408h80v408l104-104 56 56-200 200Z',
    }),
  });
}
function Vr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M120-160v-40h720v40H120Zm0-120v-80h720v80H120Zm0-160v-120h720v120H120Zm0-200v-160h720v160H120Z',
    }),
  });
}
function $r(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', { d: 'M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z' }),
  });
}
function Wr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', { d: 'M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z' }),
  });
}
function Gr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', { d: 'M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z' }),
  });
}
function Ur(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', { d: 'M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z' }),
  });
}
function Kr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z',
    }),
  });
}
function Yr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M120-440v-80h160v80H120Zm200 0v-80h160v80H320Zm200 0v-80h160v80H520Zm200 0v-80h120v80H720ZM240-120q-33 0-56.5-23.5T160-200v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-120H240Zm-80-520v-120q0-33 23.5-56.5T240-840h480q33 0 56.5 23.5T800-760v120h-80v-120H240v120h-80Z',
    }),
  });
}
function jr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M313-440l224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z',
    }),
  });
}
function Xr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', { d: 'M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z' }),
  });
}
function Jr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'm256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z',
    }),
  });
}
function Qr(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M440-400h80v-120h120v-80H520v-120h-80v120H320v80h120v120ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z',
    }),
  });
}
function ei(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z',
    }),
  });
}
function ti(e) {
  return jsx(h, {
    ...e,
    children: jsx('path', {
      d: 'M160-400h280v-80H160v80Zm0-160h440v-80H160v80Zm0-160h440v-80H160v80Zm360 360v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z',
    }),
  });
}
var oi = {
  undo: Mn,
  redo: Rn,
  print: kn,
  format_bold: Ln,
  format_italic: Zn,
  format_underlined: Hn,
  strikethrough_s: En,
  superscript: _n,
  subscript: Dn,
  link: Nn,
  format_clear: qn,
  format_align_left: An,
  format_align_center: Bn,
  format_align_right: Fn,
  format_align_justify: On,
  format_line_spacing: Mt,
  format_list_bulleted: zn,
  format_list_numbered: Vn,
  format_indent_increase: $n,
  format_indent_decrease: Wn,
  format_color_text: Gn,
  ink_highlighter: Un,
  format_color_reset: Kn,
  arrow_drop_down: Yn,
  table: jn,
  table_chart: Xn,
  grid_on: Jn,
  table_rows: Qn,
  view_column: er,
  border_all: tr,
  border_outer: or,
  border_inner: nr,
  border_clear: rr,
  add: ir,
  remove: ar,
  delete: lr,
  delete_sweep: sr,
  call_merge: cr,
  call_split: pr,
  drag_indicator: ur,
  image: dr,
  format_image_left: mr,
  format_image_right: fr,
  horizontal_rule: hr,
  flip_to_back: vr,
  flip_to_front: gr,
  open_with: br,
  tune: xr,
  rotate_right: yr,
  rotate_left: Sr,
  swap_horiz: Cr,
  swap_vert: Tr,
  shapes: Ir,
  format_paint: wr,
  expand_more: Pr,
  expand_less: Mr,
  border_top: Rr,
  border_bottom: kr,
  border_left: Lr,
  border_right: Zr,
  padding: Hr,
  text_rotation_none: Er,
  wrap_text: _r,
  height: Dr,
  fit_width: Nr,
  settings: qr,
  border_color: Ar,
  format_color_fill: Br,
  vertical_align_top: Fr,
  vertical_align_center: Or,
  vertical_align_bottom: zr,
  line_weight: Vr,
  keyboard_arrow_up: $r,
  keyboard_arrow_down: Wr,
  keyboard_arrow_left: Gr,
  keyboard_arrow_right: Ur,
  more_vert: Kr,
  page_break: Yr,
  arrow_back: jr,
  check: Xr,
  close: Jr,
  add_comment: Qr,
  comment: ei,
  edit_note: ti,
};
function b({ name: e, size: t = 20, className: o = '', style: n }) {
  let i = oi[e];
  return i
    ? jsx(i, { size: t, className: o, style: n })
    : (console.warn(`Icon not found: ${e}`),
      jsx('span', {
        className: o,
        style: { fontSize: t, width: t, height: t, ...n },
        children: e,
      }));
}
function Y({ isOpen: e, onClose: t, align: o = 'left' }) {
  let n = useRef(null),
    i = useRef(null),
    [a, r] = useState({ top: 0, left: 0 });
  (useEffect(() => {
    if (!e || !n.current) return;
    let c = n.current.getBoundingClientRect();
    o === 'right'
      ? requestAnimationFrame(() => {
          if (i.current) {
            let u = i.current.getBoundingClientRect();
            r({ top: c.bottom + 4, left: c.right - u.width });
          } else r({ top: c.bottom + 4, left: c.left });
        })
      : r({ top: c.bottom + 4, left: c.left });
  }, [e, o]),
    useEffect(() => {
      if (!e) return;
      let c = (f) => {
          let m = f.target;
          n.current && !n.current.contains(m) && i.current && !i.current.contains(m) && t();
        },
        u = (f) => {
          f.key === 'Escape' && t();
        },
        s = () => t();
      return (
        document.addEventListener('mousedown', c),
        document.addEventListener('keydown', u),
        window.addEventListener('scroll', s, true),
        () => {
          (document.removeEventListener('mousedown', c),
            document.removeEventListener('keydown', u),
            window.removeEventListener('scroll', s, true));
        }
      );
    }, [e, t]));
  let p = useCallback((c) => {
      (c.preventDefault(), c.stopPropagation());
    }, []),
    d = { position: 'fixed', top: a.top, left: a.left, zIndex: 1e4 };
  return { containerRef: n, dropdownRef: i, dropdownStyle: d, handleMouseDown: p };
}
var ai = [8, 9, 10, 11, 12, 14, 16, 18, 20, 24, 28, 36, 48, 72],
  li = 1,
  si = 400;
function uo(e) {
  return e / 2;
}
function jl(e) {
  return e * 2;
}
function co(e, t, o) {
  for (let n of t) if (n > e) return n;
  return Math.min(e + 1, o);
}
function po(e, t, o) {
  for (let n = t.length - 1; n >= 0; n--) if (t[n] < e) return t[n];
  return Math.max(e - 1, o);
}
function mo({
  value: e,
  onChange: t,
  sizes: o = ai,
  disabled: n = false,
  className: i,
  placeholder: a = '11',
  minSize: r = li,
  maxSize: p = si,
}) {
  let [d, c] = useState(false),
    [u, s] = useState(''),
    [f, m] = useState(false),
    v = useRef(null),
    g = useCallback(() => {
      (m(false), c(false));
    }, []),
    { containerRef: y, dropdownRef: P, dropdownStyle: S } = Y({ isOpen: f, onClose: g }),
    I = e ?? (parseInt(a, 10) || 11),
    _ = e !== void 0 ? e.toString() : a,
    L = useCallback(
      (T) => {
        if ((T.preventDefault(), n)) return;
        let N = po(I, o, r);
        t?.(N);
      },
      [I, o, r, n, t]
    ),
    B = useCallback(
      (T) => {
        if ((T.preventDefault(), n)) return;
        let N = co(I, o, p);
        t?.(N);
      },
      [I, o, p, n, t]
    ),
    R = useCallback(
      (T) => {
        (T.preventDefault(),
          !n &&
            (c(true),
            s(_),
            m(true),
            requestAnimationFrame(() => {
              (v.current?.focus(), v.current?.select());
            })));
      },
      [n, _]
    ),
    F = useCallback((T) => {
      s(T.target.value);
    }, []),
    K = useCallback(() => {
      c(false);
      let T = parseInt(u, 10);
      !isNaN(T) && T >= r && T <= p && t?.(T);
    }, [u, r, p, t]),
    te = useCallback(
      (T) => {
        if (T.key === 'Enter') (T.preventDefault(), K(), m(false));
        else if (T.key === 'Escape') (c(false), m(false));
        else if (T.key === 'ArrowUp') {
          T.preventDefault();
          let N = co(I, o, p);
          (s(N.toString()), t?.(N));
        } else if (T.key === 'ArrowDown') {
          T.preventDefault();
          let N = po(I, o, r);
          (s(N.toString()), t?.(N));
        }
      },
      [K, I, o, p, r, t]
    ),
    M = useCallback(
      (T) => {
        (t?.(T), m(false), c(false));
      },
      [t]
    ),
    z = useCallback((T) => {
      T.target.tagName !== 'INPUT' && T.preventDefault();
    }, []);
  return jsxs('div', {
    ref: y,
    className: w('flex items-center', i),
    onMouseDown: z,
    children: [
      jsx(G, {
        variant: 'ghost',
        size: 'icon-sm',
        className: w(
          'h-7 w-7 text-slate-500 hover:text-slate-900 hover:bg-slate-100/80 rounded-r-none',
          n && 'opacity-30 cursor-not-allowed'
        ),
        onMouseDown: L,
        disabled: n || I <= r,
        'aria-label': 'Decrease font size',
        'data-testid': 'font-size-decrease',
        children: jsx(b, { name: 'remove', size: 18 }),
      }),
      jsx('div', {
        className: 'relative',
        children: d
          ? jsx('input', {
              ref: v,
              type: 'text',
              value: u,
              onChange: F,
              onBlur: K,
              onKeyDown: te,
              className: w(
                'h-7 w-10 text-center text-sm border border-slate-300 bg-white',
                'focus:outline-none focus:ring-1 focus:ring-slate-400',
                'rounded-none'
              ),
              'aria-label': 'Font size',
              'data-testid': 'font-size-input',
            })
          : jsx('button', {
              type: 'button',
              onClick: R,
              className: w(
                'h-7 w-10 text-center text-sm border border-slate-200 bg-white',
                'hover:border-slate-300 hover:bg-slate-50',
                'focus:outline-none focus:ring-1 focus:ring-slate-400',
                'rounded-none',
                n && 'opacity-50 cursor-not-allowed'
              ),
              disabled: n,
              'aria-label': 'Font size',
              'aria-haspopup': 'listbox',
              'aria-expanded': f,
              'data-testid': 'font-size-display',
              children: _,
            }),
      }),
      f &&
        jsx('div', {
          ref: P,
          style: {
            ...S,
            backgroundColor: 'white',
            border: '1px solid #e2e8f0',
            borderRadius: 6,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
            maxHeight: 240,
            overflowY: 'auto',
            minWidth: 60,
          },
          role: 'listbox',
          'aria-label': 'Font sizes',
          children: o.map((T) =>
            jsx(
              'button',
              {
                type: 'button',
                onClick: () => M(T),
                className: w(
                  'w-full px-3 py-1.5 text-sm text-left',
                  'hover:bg-slate-100',
                  T === I && 'bg-slate-100 font-medium'
                ),
                role: 'option',
                'aria-selected': T === I,
                children: T,
              },
              T
            )
          ),
        }),
      jsx(G, {
        variant: 'ghost',
        size: 'icon-sm',
        className: w(
          'h-7 w-7 text-slate-500 hover:text-slate-900 hover:bg-slate-100/80 rounded-l-none',
          n && 'opacity-30 cursor-not-allowed'
        ),
        onMouseDown: B,
        disabled: n || I >= p,
        'aria-label': 'Increase font size',
        'data-testid': 'font-size-increase',
        children: jsx(b, { name: 'add', size: 18 }),
      }),
    ],
  });
}
var ui = [
    { name: 'Dark Red', hex: 'C00000' },
    { name: 'Red', hex: 'FF0000' },
    { name: 'Orange', hex: 'FFC000' },
    { name: 'Yellow', hex: 'FFFF00' },
    { name: 'Light Green', hex: '92D050' },
    { name: 'Green', hex: '00B050' },
    { name: 'Light Blue', hex: '00B0F0' },
    { name: 'Blue', hex: '0070C0' },
    { name: 'Dark Blue', hex: '002060' },
    { name: 'Purple', hex: '7030A0' },
  ],
  ct = 18,
  di = 2,
  mi = { position: 'relative', display: 'inline-block' },
  fi = {
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
  hi = {
    padding: '10px',
    backgroundColor: '#fff',
    border: '1px solid #d0d0d0',
    borderRadius: '6px',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
    width: 'auto',
  },
  kt = { fontSize: '11px', color: '#666', marginBottom: '4px', fontWeight: 500 },
  Lt = { height: '1px', backgroundColor: '#e0e0e0', margin: '8px 0' },
  vo = { display: 'grid', gap: `${di}px` },
  pt = {
    width: `${ct}px`,
    height: `${ct}px`,
    border: '1px solid #c0c0c0',
    borderRadius: '2px',
    cursor: 'pointer',
    padding: 0,
    transition: 'transform 0.1s, border-color 0.1s',
  },
  go = { ...pt, transform: 'scale(1.15)', borderColor: '#333', zIndex: 1 },
  bo = { ...pt, borderWidth: '2px', borderColor: '#0066cc', boxShadow: '0 0 0 1px #0066cc' },
  vi = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    width: '100%',
    padding: '5px 8px',
    border: '1px solid #d0d0d0',
    borderRadius: '4px',
    backgroundColor: '#fff',
    cursor: 'pointer',
    fontSize: '12px',
    color: '#333',
  },
  gi = { display: 'flex', alignItems: 'center', gap: '6px' },
  bi = {
    width: '70px',
    height: '24px',
    padding: '2px 6px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    fontSize: '12px',
  },
  xi = {
    height: '24px',
    padding: '0 10px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    backgroundColor: '#f5f5f5',
    fontSize: '12px',
    cursor: 'pointer',
  },
  yi = { width: '16px', height: '4px', borderRadius: '1px', marginTop: '-2px' };
function ho(e, t, o) {
  if (!e) return t === 'text' || t === 'border' ? '#000000' : 'transparent';
  if (typeof e == 'string') {
    if (t === 'highlight') {
      let n = b$1(e);
      return n || (e === 'none' ? 'transparent' : e.startsWith('#') ? e : `#${e}`);
    }
    return e.startsWith('#') ? e : `#${e}`;
  }
  return a(e, o);
}
function Si(e) {
  let t = e.replace(/^#/, '');
  if (t.length !== 6) return false;
  let o = parseInt(t.slice(0, 2), 16),
    n = parseInt(t.slice(2, 4), 16),
    i = parseInt(t.slice(4, 6), 16);
  return (o * 299 + n * 587 + i * 114) / 1e3 > 230;
}
function xo(e, t, o) {
  return e
    ? (typeof e == 'string'
        ? e.replace(/^#/, '').toUpperCase()
        : a(e, o).replace(/^#/, '').toUpperCase()) === t.toUpperCase()
    : false;
}
function Ci({ matrix: e, selectedColor: t, theme: o, onSelect: n }) {
  let [i, a] = useState(null);
  return jsx('div', {
    style: { ...vo, gridTemplateColumns: `repeat(10, ${ct}px)` },
    children: e.flatMap((r, p) =>
      r.map((d, c) => {
        let u = `${p}-${c}`,
          s = i === u,
          f = xo(t, d.hex, o);
        return jsx(
          'button',
          {
            type: 'button',
            style: { ...(f ? bo : s ? go : pt), backgroundColor: `#${d.hex}` },
            title: d.label,
            'aria-label': d.label,
            'aria-selected': f,
            onClick: () => n(d),
            onMouseDown: (m) => m.preventDefault(),
            onMouseEnter: () => a(u),
            onMouseLeave: () => a(null),
          },
          u
        );
      })
    ),
  });
}
function Ti({ selectedColor: e, theme: t, onSelect: o }) {
  let [n, i] = useState(null);
  return jsx('div', {
    style: { ...vo, gridTemplateColumns: `repeat(10, ${ct}px)` },
    children: ui.map((a, r) => {
      let p = n === r,
        d = xo(e, a.hex, t);
      return jsx(
        'button',
        {
          type: 'button',
          style: { ...(d ? bo : p ? go : pt), backgroundColor: `#${a.hex}` },
          title: a.name,
          'aria-label': a.name,
          'aria-selected': d,
          onClick: () => o(a.hex),
          onMouseDown: (c) => c.preventDefault(),
          onMouseEnter: () => i(r),
          onMouseLeave: () => i(null),
        },
        a.hex
      );
    }),
  });
}
function He({
  mode: e,
  value: t,
  onChange: o,
  theme: n,
  disabled: i = false,
  className: a,
  style: r,
  title: p$1,
  icon: d,
  autoLabel: c,
}) {
  let [u, s] = useState(false),
    [f, m] = useState(false),
    [v, g] = useState('');
  useEffect(() => {
    let x = ho(t, e, n).replace(/^#/, '');
    /^[0-9A-Fa-f]{6}$/.test(x) && g(x.toUpperCase());
  }, [t, e, n]);
  let y = useCallback(() => s(false), []),
    { containerRef: P, dropdownRef: S, dropdownStyle: I } = Y({ isOpen: u, onClose: y }),
    _ = n?.colorScheme ?? null,
    L = useMemo(() => p(_), [_]),
    B = useMemo(() => ho(t, e, n), [t, e, n]),
    R = useCallback(() => {
      i || s((x) => !x);
    }, [i]),
    F = useCallback(
      (x) => {
        if (e === 'highlight') o?.(x.hex);
        else {
          let le = { themeColor: x.themeSlot, rgb: x.hex };
          (x.tint && (le.themeTint = x.tint), x.shade && (le.themeShade = x.shade), o?.(le));
        }
        s(false);
      },
      [e, o]
    ),
    K = useCallback(
      (x) => {
        (o?.(e === 'highlight' ? x : { rgb: x }), s(false));
      },
      [e, o]
    ),
    te = useCallback(() => {
      (o?.(e === 'highlight' ? 'none' : { auto: true }), s(false));
    }, [e, o]),
    M = useCallback(() => {
      let x = v.replace(/^#/, '').toUpperCase();
      /^[0-9A-F]{6}$/i.test(x) && (o?.(e === 'highlight' ? x : { rgb: x }), s(false), g(''));
    }, [e, v, o]),
    z = {
      ...fi,
      ...(i
        ? { cursor: 'default', opacity: 0.38 }
        : u
          ? { backgroundColor: 'var(--doc-primary-light)', color: 'var(--doc-primary)' }
          : f
            ? { backgroundColor: 'var(--doc-bg-hover)' }
            : {}),
    },
    T = e === 'text' ? 'Font Color' : e === 'highlight' ? 'Text Highlight Color' : 'Border Color',
    N =
      d ??
      (e === 'text' ? 'format_color_text' : e === 'highlight' ? 'ink_highlighter' : 'border_color');
  return jsxs('div', {
    ref: P,
    className: `docx-advanced-color-picker ${a || ''}`,
    style: { ...mi, ...r },
    children: [
      jsxs('button', {
        type: 'button',
        className: 'docx-advanced-color-picker-button',
        style: z,
        onClick: R,
        onMouseDown: (x) => x.preventDefault(),
        onMouseEnter: () => m(true),
        onMouseLeave: () => m(false),
        disabled: i,
        title: p$1 || T,
        'aria-label': p$1 || T,
        'aria-haspopup': 'true',
        'aria-expanded': u,
        children: [
          jsxs('div', {
            style: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 },
            children: [
              jsx(b, { name: N, size: 18 }),
              jsx('div', {
                style: {
                  ...yi,
                  backgroundColor: B === 'transparent' ? '#fff' : B,
                  outline: B === 'transparent' || Si(B) ? '1px solid #bbb' : 'none',
                },
              }),
            ],
          }),
          jsx(b, { name: 'arrow_drop_down', size: 14 }),
        ],
      }),
      u &&
        jsx('div', {
          ref: S,
          className: 'docx-advanced-color-picker-dropdown',
          style: { ...I, ...hi },
          role: 'dialog',
          'aria-label': `${T} picker`,
          onMouseDown: (x) => {
            x.target.tagName !== 'INPUT' && x.preventDefault();
          },
          children: jsxs(Fragment, {
            children: [
              jsxs('button', {
                type: 'button',
                style: vi,
                onClick: te,
                onMouseDown: (x) => x.preventDefault(),
                children: [
                  e === 'highlight'
                    ? jsx('span', {
                        style: {
                          display: 'inline-block',
                          width: '16px',
                          height: '16px',
                          border: '1px solid #ccc',
                          borderRadius: '2px',
                          position: 'relative',
                          backgroundColor: '#fff',
                        },
                        children: jsx('span', {
                          style: {
                            position: 'absolute',
                            top: '50%',
                            left: '-1px',
                            right: '-1px',
                            height: '2px',
                            backgroundColor: '#ff0000',
                            transform: 'rotate(-45deg)',
                          },
                        }),
                      })
                    : jsx('span', {
                        style: {
                          display: 'inline-block',
                          width: '16px',
                          height: '16px',
                          backgroundColor: '#000',
                          borderRadius: '2px',
                        },
                      }),
                  c ?? (e === 'highlight' ? 'No Color' : 'Automatic'),
                ],
              }),
              jsx('div', { style: Lt }),
              jsx('div', { style: kt, children: 'Theme Colors' }),
              jsx(Ci, { matrix: L, selectedColor: t, theme: n, onSelect: F }),
              jsx('div', { style: Lt }),
              jsx('div', { style: kt, children: 'Standard Colors' }),
              jsx(Ti, { selectedColor: t, theme: n, onSelect: K }),
              jsx('div', { style: Lt }),
              jsx('div', { style: kt, children: 'Custom Color' }),
              jsxs('div', {
                style: gi,
                children: [
                  jsx('span', { style: { fontSize: '12px', color: '#666' }, children: '#' }),
                  jsx('input', {
                    type: 'text',
                    style: bi,
                    value: v,
                    onChange: (x) => g(x.target.value.replace(/[^0-9A-Fa-f]/g, '').slice(0, 6)),
                    onKeyDown: (x) => {
                      x.key === 'Enter' && M();
                    },
                    onMouseDown: (x) => {
                      x.stopPropagation();
                    },
                    placeholder: 'FF0000',
                    maxLength: 6,
                    'aria-label': 'Custom hex color',
                  }),
                  jsx('button', {
                    type: 'button',
                    style: {
                      ...xi,
                      opacity: /^[0-9A-Fa-f]{6}$/.test(v) ? 1 : 0.4,
                      cursor: /^[0-9A-Fa-f]{6}$/.test(v) ? 'pointer' : 'default',
                    },
                    onClick: M,
                    onMouseDown: (x) => x.preventDefault(),
                    disabled: !/^[0-9A-Fa-f]{6}$/.test(v),
                    children: 'Apply',
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
function ee({ content: e, children: t, side: o = 'bottom', delayMs: n = 400 }) {
  let [i, a] = J.useState(false),
    [r, p] = J.useState({ x: 0, y: 0 }),
    d = J.useRef(null),
    c = J.useRef(null),
    u = J.useCallback(() => {
      c.current = setTimeout(() => {
        if (d.current) {
          let v = d.current.getBoundingClientRect(),
            g = v.left + v.width / 2,
            y = o === 'top' ? v.top - 8 : v.bottom + 8;
          p({ x: g, y });
        }
        a(true);
      }, n);
    }, [n, o]),
    s = J.useCallback(() => {
      (c.current && (clearTimeout(c.current), (c.current = null)), a(false));
    }, []);
  J.useEffect(
    () => () => {
      c.current && clearTimeout(c.current);
    },
    []
  );
  let f = t.props,
    m = J.cloneElement(t, {
      ref: d,
      onMouseEnter: (v) => {
        (u(), f.onMouseEnter?.(v));
      },
      onMouseLeave: (v) => {
        (s(), f.onMouseLeave?.(v));
      },
    });
  return jsxs(Fragment, {
    children: [
      m,
      i &&
        jsx('div', {
          className:
            'fixed z-50 px-2 py-1 text-xs font-medium text-white bg-slate-900 rounded-md shadow-lg',
          style: {
            left: r.x,
            top: r.y,
            transform:
              o === 'top'
                ? 'translate(-50%, -100%)'
                : o === 'bottom'
                  ? 'translate(-50%, 0)'
                  : void 0,
          },
          children: e,
        }),
    ],
  });
}
var ot = 20,
  Zt = [
    {
      value: 'left',
      label: 'Align Left',
      icon: jsx(b, { name: 'format_align_left', size: ot }),
      iconName: 'format_align_left',
      shortcut: 'Ctrl+L',
    },
    {
      value: 'center',
      label: 'Center',
      icon: jsx(b, { name: 'format_align_center', size: ot }),
      iconName: 'format_align_center',
      shortcut: 'Ctrl+E',
    },
    {
      value: 'right',
      label: 'Align Right',
      icon: jsx(b, { name: 'format_align_right', size: ot }),
      iconName: 'format_align_right',
      shortcut: 'Ctrl+R',
    },
    {
      value: 'both',
      label: 'Justify',
      icon: jsx(b, { name: 'format_align_justify', size: ot }),
      iconName: 'format_align_justify',
      shortcut: 'Ctrl+J',
    },
  ];
function Co({ value: e = 'left', onChange: t, disabled: o = false }) {
  let [n, i] = useState(false),
    a = useCallback(() => i(false), []),
    {
      containerRef: r,
      dropdownRef: p,
      dropdownStyle: d,
      handleMouseDown: c,
    } = Y({ isOpen: n, onClose: a }),
    u = useCallback(
      (m) => {
        (o || t?.(m), i(false));
      },
      [o, t]
    ),
    s = Zt.find((m) => m.value === e) || Zt[0],
    f = jsxs(G, {
      variant: 'ghost',
      size: 'icon-sm',
      className: w(
        'text-slate-500 hover:text-slate-900 hover:bg-slate-100/80',
        n && 'bg-slate-100',
        o && 'opacity-30 cursor-not-allowed'
      ),
      onMouseDown: c,
      onClick: () => !o && i((m) => !m),
      disabled: o,
      'aria-label': `${s.label}${s.shortcut ? ` (${s.shortcut})` : ''}`,
      'aria-expanded': n,
      'aria-haspopup': 'true',
      'data-testid': 'toolbar-alignment',
      children: [
        jsx(b, { name: s.iconName, size: ot }),
        jsx(b, { name: 'arrow_drop_down', size: 14, className: '-ml-1' }),
      ],
    });
  return jsxs('div', {
    ref: r,
    style: { position: 'relative', display: 'inline-block' },
    children: [
      n
        ? f
        : jsx(ee, { content: `${s.label}${s.shortcut ? ` (${s.shortcut})` : ''}`, children: f }),
      n &&
        !o &&
        jsx('div', {
          ref: p,
          style: {
            ...d,
            backgroundColor: 'white',
            border: '1px solid var(--doc-border)',
            borderRadius: 8,
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
            padding: 6,
          },
          onMouseDown: (m) => m.stopPropagation(),
          children: jsx('div', {
            style: { display: 'flex', gap: 2 },
            children: Zt.map((m) => {
              let v = e === m.value;
              return jsx(
                'button',
                {
                  type: 'button',
                  title: `${m.label}${m.shortcut ? ` (${m.shortcut})` : ''}`,
                  'data-testid': `alignment-${m.value}`,
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 32,
                    height: 32,
                    border: '1px solid transparent',
                    borderRadius: 4,
                    backgroundColor: v ? 'var(--doc-primary-light)' : 'transparent',
                    cursor: 'pointer',
                    color: v ? 'var(--doc-primary)' : 'var(--doc-text)',
                  },
                  onMouseDown: (g) => g.preventDefault(),
                  onMouseEnter: (g) => {
                    v || (g.currentTarget.style.backgroundColor = 'var(--doc-bg-hover)');
                  },
                  onMouseLeave: (g) => {
                    g.currentTarget.style.backgroundColor = v
                      ? 'var(--doc-primary-light)'
                      : 'transparent';
                  },
                  onClick: () => u(m.value),
                  children: jsx(b, { name: m.iconName, size: 18 }),
                },
                m.value
              );
            }),
          }),
        }),
    ],
  });
}
var Zi = { display: 'inline-flex', alignItems: 'center', gap: '4px' },
  To = { display: 'inline-flex', alignItems: 'center', gap: '4px' },
  ft = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    padding: '4px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'background-color 0.1s',
    color: 'var(--doc-text-muted)',
  },
  Hi = { ...ft, backgroundColor: 'var(--doc-bg-hover)' },
  Ei = { ...ft, backgroundColor: 'var(--doc-primary-light)', color: 'var(--doc-primary)' },
  _i = { ...ft, cursor: 'default', opacity: 0.38 },
  Di = { width: '28px', height: '28px', padding: '2px' },
  Ni = { width: '1px', height: '20px', backgroundColor: 'var(--doc-border)', margin: '0 6px' },
  ut = 20;
function dt({
  active: e = false,
  disabled: t = false,
  title: o,
  onClick: n,
  children: i,
  className: a,
  style: r,
}) {
  let [p, d] = useState(false),
    c = { ...(t ? _i : e ? Ei : p ? Hi : ft), ...r },
    u = (s) => {
      s.preventDefault();
    };
  return jsx('button', {
    type: 'button',
    className: `docx-list-button ${e ? 'docx-list-button-active' : ''} ${t ? 'docx-list-button-disabled' : ''} ${a || ''}`,
    style: c,
    onMouseDown: u,
    onClick: t ? void 0 : n,
    onMouseEnter: () => d(true),
    onMouseLeave: () => d(false),
    disabled: t,
    title: o,
    'aria-label': o,
    'aria-pressed': e,
    role: 'button',
    children: i,
  });
}
function Io({
  listState: e,
  onBulletList: t,
  onNumberedList: o,
  onIndent: n,
  onOutdent: i,
  disabled: a = false,
  className: r,
  style: p,
  showIndentButtons: d = true,
  compact: c = false,
  hasIndent: u = false,
}) {
  let s = useCallback(() => (c ? { ...Di } : {}), [c]),
    f = e?.type === 'bullet',
    m = e?.type === 'numbered',
    g = ((e?.isInList || f || m) && (e?.level ?? 0) > 0) || u;
  return jsxs('div', {
    className: `docx-list-buttons ${r || ''}`,
    style: { ...Zi, ...p },
    role: 'group',
    'aria-label': 'List formatting',
    children: [
      jsxs('div', {
        style: To,
        role: 'group',
        'aria-label': 'List type',
        children: [
          jsx(dt, {
            active: f,
            disabled: a,
            title: 'Bullet List',
            onClick: t,
            style: s(),
            children: jsx(b, { name: 'format_list_bulleted', size: ut }),
          }),
          jsx(dt, {
            active: m,
            disabled: a,
            title: 'Numbered List',
            onClick: o,
            style: s(),
            children: jsx(b, { name: 'format_list_numbered', size: ut }),
          }),
        ],
      }),
      d &&
        jsxs(Fragment, {
          children: [
            jsx('div', { style: Ni, role: 'separator' }),
            jsxs('div', {
              style: To,
              role: 'group',
              'aria-label': 'List indentation',
              children: [
                jsx(dt, {
                  active: false,
                  disabled: a || !g,
                  title: 'Decrease Indent',
                  onClick: i,
                  style: s(),
                  children: jsx(b, { name: 'format_indent_decrease', size: ut }),
                }),
                jsx(dt, {
                  active: false,
                  disabled: a,
                  title: 'Increase Indent',
                  onClick: n,
                  style: s(),
                  children: jsx(b, { name: 'format_indent_increase', size: ut }),
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function wo() {
  return { type: 'none', level: 0, isInList: false };
}
var Ai = [
  { label: 'Single', value: 1, twipsValue: 240 },
  { label: '1.15', value: 1.15, twipsValue: 276 },
  { label: '1.5', value: 1.5, twipsValue: 360 },
  { label: 'Double', value: 2, twipsValue: 480 },
];
function Mo({ value: e, onChange: t, options: o = Ai, disabled: n = false, className: i }) {
  let a = J.useMemo(
      () => (e === void 0 ? o[0] : o.find((p) => p.twipsValue === e) || o[0]),
      [e, o]
    ),
    r = J.useCallback(
      (p) => {
        let d = parseInt(p, 10);
        isNaN(d) || t?.(d);
      },
      [t]
    );
  return jsxs(ye, {
    value: a.twipsValue.toString(),
    onValueChange: r,
    disabled: n,
    children: [
      jsx(Se, {
        className: w('h-8 text-sm gap-0.5 px-2', i),
        style: { width: 'auto' },
        title: `Line spacing: ${a.label}`,
        children: jsx(Mt, { className: 'h-5 w-5 shrink-0' }),
      }),
      jsxs(Ce, {
        children: [
          o.map((p) =>
            jsx(ce, { value: p.twipsValue.toString(), children: p.label }, p.twipsValue)
          ),
          jsx(Qe, {}),
          jsx(Ae, { children: jsx(Be, { children: 'Paragraph spacing' }) }),
        ],
      }),
    ],
  });
}
var Ro = [
    {
      styleId: 'Normal',
      name: 'Normal text',
      type: 'paragraph',
      isDefault: true,
      priority: 0,
      qFormat: true,
      fontSize: 22,
    },
    {
      styleId: 'Title',
      name: 'Title',
      type: 'paragraph',
      priority: 1,
      qFormat: true,
      fontSize: 52,
      bold: true,
    },
    {
      styleId: 'Subtitle',
      name: 'Subtitle',
      type: 'paragraph',
      priority: 2,
      qFormat: true,
      fontSize: 30,
      color: '666666',
    },
    {
      styleId: 'Heading1',
      name: 'Heading 1',
      type: 'paragraph',
      priority: 3,
      qFormat: true,
      fontSize: 40,
      bold: true,
    },
    {
      styleId: 'Heading2',
      name: 'Heading 2',
      type: 'paragraph',
      priority: 4,
      qFormat: true,
      fontSize: 32,
      bold: true,
    },
    {
      styleId: 'Heading3',
      name: 'Heading 3',
      type: 'paragraph',
      priority: 5,
      qFormat: true,
      fontSize: 28,
      bold: true,
    },
  ],
  Bi = '#4a6c8c',
  Fi = {
    Title: 26,
    Subtitle: 18,
    Heading1: 24,
    Heading2: 18,
    Heading3: 16,
    Heading4: 14,
    Heading5: 13,
    Heading6: 13,
    Normal: 14,
  };
function Oi(e) {
  let t = {},
    o = Fi[e.styleId];
  if (o) t.fontSize = `${o}px`;
  else {
    let n = e.fontSize ? e.fontSize / 2 : 11,
      i = Math.min(Math.max(n, 11), 20);
    t.fontSize = `${i}px`;
  }
  return (
    (t.lineHeight = '1.3'),
    e.bold && (t.fontWeight = 'bold'),
    e.italic && (t.fontStyle = 'italic'),
    e.color ? (t.color = `#${e.color}`) : e.styleId.startsWith('Heading') && (t.color = Bi),
    t
  );
}
function ko({
  value: e,
  onChange: t,
  styles: o,
  disabled: n = false,
  className: i,
  width: a = 120,
}) {
  let r = J.useMemo(
      () =>
        !o || o.length === 0
          ? Ro
          : o
              .filter((s) => s.type === 'paragraph')
              .filter((s) => (s.qFormat ? true : !(s.hidden || s.semiHidden)))
              .map((s) => {
                let f = Ro.find((m) => m.styleId === s.styleId);
                return {
                  styleId: s.styleId,
                  name: s.name || s.styleId,
                  type: s.type,
                  isDefault: s.default,
                  qFormat: s.qFormat,
                  priority: s.uiPriority ?? 99,
                  fontSize: s.rPr?.fontSize ?? f?.fontSize,
                  bold: s.rPr?.bold ?? f?.bold,
                  italic: s.rPr?.italic ?? f?.italic,
                  color: s.rPr?.color?.rgb ?? f?.color,
                };
              })
              .sort((s, f) => (s.priority ?? 99) - (f.priority ?? 99)),
      [o]
    ),
    p = J.useCallback(
      (u) => {
        t?.(u);
      },
      [t]
    ),
    d = e || 'Normal',
    c = r.find((u) => u.styleId === d)?.name || d;
  return jsxs(ye, {
    value: d,
    onValueChange: p,
    disabled: n,
    children: [
      jsx(Se, {
        className: w('h-8 text-sm', i),
        style: { width: typeof a == 'number' ? `${a}px` : a },
        'aria-label': 'Select paragraph style',
        children: jsx('span', { className: 'truncate', children: c }),
      }),
      jsx(Ce, {
        className: 'min-w-[260px] max-h-[400px]',
        children: r.map((u) =>
          jsx(
            ce,
            {
              value: u.styleId,
              className: 'py-2.5 px-3',
              children: jsx('span', { style: Oi(u), children: u.name }),
            },
            u.styleId
          )
        ),
      }),
    ],
  });
}
var Vi = [
  { value: 0.5, label: '50%' },
  { value: 0.75, label: '75%' },
  { value: 1, label: '100%' },
  { value: 1.25, label: '125%' },
  { value: 1.5, label: '150%' },
  { value: 2, label: '200%' },
];
function Lo({
  value: e = 1,
  onChange: t,
  levels: o = Vi,
  disabled: n = false,
  className: i,
  compact: a = false,
}) {
  let r = J.useMemo(() => {
      let d = o.find((c) => Math.abs(c.value - e) < 0.001);
      return d ? d.label : `${Math.round(e * 100)}%`;
    }, [o, e]),
    p = J.useCallback(
      (d) => {
        let c = parseFloat(d);
        isNaN(c) || t?.(c);
      },
      [t]
    );
  return jsxs(ye, {
    value: e.toString(),
    onValueChange: p,
    disabled: n,
    children: [
      jsx(Se, {
        className: w(a ? 'h-7 min-w-[55px] text-xs' : 'h-8 min-w-[70px] text-sm', i),
        'aria-label': `Zoom: ${r}`,
        children: jsx(st, { placeholder: '100%', children: r }),
      }),
      jsx(Ce, {
        children: o.map((d) => jsx(ce, { value: d.value.toString(), children: d.label }, d.value)),
      }),
    ],
  });
}
var Gi = [
  { action: 'borderAll', icon: 'border_all', label: 'All borders' },
  { action: 'borderOutside', icon: 'border_outer', label: 'Outside borders' },
  { action: 'borderInside', icon: 'border_inner', label: 'Inside borders' },
  { action: 'borderTop', icon: 'border_top', label: 'Top border' },
  { action: 'borderBottom', icon: 'border_bottom', label: 'Bottom border' },
  { action: 'borderLeft', icon: 'border_left', label: 'Left border' },
  { action: 'borderRight', icon: 'border_right', label: 'Right border' },
  { action: 'borderNone', icon: 'border_clear', label: 'No borders' },
];
function Eo({ onAction: e, disabled: t = false }) {
  let [o, n] = useState(false),
    i = useCallback(() => n(false), []),
    {
      containerRef: a,
      dropdownRef: r,
      dropdownStyle: p,
      handleMouseDown: d,
    } = Y({ isOpen: o, onClose: i }),
    c = useCallback(
      (s) => {
        (e(s), n(false));
      },
      [e]
    ),
    u = jsxs(G, {
      variant: 'ghost',
      size: 'icon-sm',
      className: w(
        'text-slate-500 hover:text-slate-900 hover:bg-slate-100/80',
        o && 'bg-slate-100',
        t && 'opacity-30 cursor-not-allowed'
      ),
      onMouseDown: d,
      onClick: () => !t && n((s) => !s),
      disabled: t,
      'aria-label': 'Border style',
      'aria-expanded': o,
      'aria-haspopup': 'true',
      'data-testid': 'toolbar-table-borders',
      children: [
        jsx(b, { name: 'border_all', size: 20 }),
        jsx(b, { name: 'arrow_drop_down', size: 14, className: '-ml-1' }),
      ],
    });
  return jsxs('div', {
    ref: a,
    style: { position: 'relative', display: 'inline-block' },
    children: [
      o ? u : jsx(ee, { content: 'Borders', children: u }),
      o &&
        !t &&
        jsx('div', {
          ref: r,
          style: {
            ...p,
            backgroundColor: 'white',
            border: '1px solid var(--doc-border)',
            borderRadius: 8,
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
            padding: 6,
          },
          onMouseDown: (s) => s.stopPropagation(),
          children: jsx('div', {
            style: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 },
            children: Gi.map(({ action: s, icon: f, label: m }) =>
              jsx(
                'button',
                {
                  type: 'button',
                  title: m,
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 32,
                    height: 32,
                    border: '1px solid transparent',
                    borderRadius: 4,
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    color: 'var(--doc-text)',
                  },
                  onMouseDown: (v) => v.preventDefault(),
                  onMouseEnter: (v) => {
                    v.currentTarget.style.backgroundColor = 'var(--doc-bg-hover)';
                  },
                  onMouseLeave: (v) => {
                    v.currentTarget.style.backgroundColor = 'transparent';
                  },
                  onClick: () => c(s),
                  children: jsx(b, { name: f, size: 18 }),
                },
                typeof s == 'string' ? s : s.type
              )
            ),
          }),
        }),
    ],
  });
}
function _o({ onAction: e, disabled: t = false, theme: o, value: n }) {
  let i = useCallback(
    (a) => {
      typeof a == 'string'
        ? e({ type: 'borderColor', color: a.replace(/^#/, '') })
        : a.rgb
          ? e({ type: 'borderColor', color: a.rgb.replace(/^#/, '') })
          : a.auto && e({ type: 'borderColor', color: '000000' });
    },
    [e]
  );
  return jsx(He, {
    mode: 'border',
    value: n,
    onChange: i,
    theme: o,
    disabled: t,
    title: 'Border Color',
  });
}
var ji = [
  { size: 4, label: '0.5 pt', thickness: 0.5 },
  { size: 8, label: '1 pt', thickness: 1 },
  { size: 12, label: '1.5 pt', thickness: 1.5 },
  { size: 16, label: '2 pt', thickness: 2 },
  { size: 24, label: '3 pt', thickness: 3 },
];
function No({ onAction: e, disabled: t = false }) {
  let [o, n] = useState(false),
    i = useCallback(() => n(false), []),
    {
      containerRef: a,
      dropdownRef: r,
      dropdownStyle: p,
      handleMouseDown: d,
    } = Y({ isOpen: o, onClose: i }),
    c = useCallback(
      (s) => {
        (e({ type: 'borderWidth', size: s }), n(false));
      },
      [e]
    ),
    u = jsxs(G, {
      variant: 'ghost',
      size: 'icon-sm',
      className: w(
        'text-slate-500 hover:text-slate-900 hover:bg-slate-100/80',
        o && 'bg-slate-100',
        t && 'opacity-30 cursor-not-allowed'
      ),
      onMouseDown: d,
      onClick: () => !t && n((s) => !s),
      disabled: t,
      'aria-label': 'Border width',
      'aria-expanded': o,
      'aria-haspopup': 'true',
      'data-testid': 'toolbar-table-border-width',
      children: [
        jsx(b, { name: 'line_weight', size: 20 }),
        jsx(b, { name: 'arrow_drop_down', size: 14, className: '-ml-1' }),
      ],
    });
  return jsxs('div', {
    ref: a,
    style: { position: 'relative', display: 'inline-block' },
    children: [
      o ? u : jsx(ee, { content: 'Border width', children: u }),
      o &&
        !t &&
        jsx('div', {
          ref: r,
          style: {
            ...p,
            backgroundColor: 'white',
            border: '1px solid var(--doc-border)',
            borderRadius: 8,
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
            padding: '4px 0',
            minWidth: 120,
          },
          onMouseDown: (s) => s.stopPropagation(),
          children: ji.map(({ size: s, label: f, thickness: m }) =>
            jsxs(
              'button',
              {
                type: 'button',
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '6px 12px',
                  width: '100%',
                  border: 'none',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                  fontSize: 12,
                  color: 'var(--doc-text)',
                },
                onMouseDown: (v) => v.preventDefault(),
                onMouseEnter: (v) => {
                  v.currentTarget.style.backgroundColor = 'var(--doc-bg-hover)';
                },
                onMouseLeave: (v) => {
                  v.currentTarget.style.backgroundColor = 'transparent';
                },
                onClick: () => c(s),
                children: [
                  jsx('div', {
                    style: {
                      width: 50,
                      height: Math.max(m, 1),
                      backgroundColor: '#000',
                      borderRadius: m > 2 ? 1 : 0,
                    },
                  }),
                  jsx('span', { children: f }),
                ],
              },
              s
            )
          ),
        }),
    ],
  });
}
function qo({ onAction: e, disabled: t = false, theme: o, value: n }) {
  let i = useCallback(
    (a) => {
      typeof a == 'string' &&
        e(
          a === 'none'
            ? { type: 'cellFillColor', color: null }
            : { type: 'cellFillColor', color: a.replace(/^#/, '') }
        );
    },
    [e]
  );
  return jsx(He, {
    mode: 'highlight',
    value: n,
    onChange: i,
    theme: o,
    disabled: t,
    title: 'Cell Fill Color',
    icon: 'format_color_fill',
    autoLabel: 'No fill',
  });
}
var Qi = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '7px 14px',
    fontSize: 13,
    color: 'var(--doc-text)',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
    width: '100%',
    textAlign: 'left',
  },
  $e = { height: 1, backgroundColor: 'var(--doc-border)', margin: '4px 0' },
  Fo = { padding: '6px 14px 2px', fontSize: 11, color: 'var(--doc-text-muted)', fontWeight: 500 };
function Oo({ onAction: e, disabled: t = false, tableContext: o }) {
  let [n, i] = useState(false),
    [a, r] = useState(null),
    p = useCallback(() => i(false), []),
    {
      containerRef: d,
      dropdownRef: c,
      dropdownStyle: u,
      handleMouseDown: s,
    } = Y({ isOpen: n, onClose: p, align: 'right' }),
    f = o?.table?.attrs?.justification ?? 'left',
    m = useCallback(
      (y) => {
        (e(y), i(false));
      },
      [e]
    ),
    v = (y, P, S, I, _) => {
      let L = t || _?.itemDisabled;
      return jsxs(
        'button',
        {
          type: 'button',
          role: 'menuitem',
          style: {
            ...Qi,
            backgroundColor: a === y && !L ? 'var(--doc-bg-hover)' : 'transparent',
            color: L ? 'var(--doc-text-muted)' : _?.danger ? 'var(--doc-error)' : 'var(--doc-text)',
            cursor: L ? 'not-allowed' : 'pointer',
          },
          onClick: () => !L && m(I),
          onMouseEnter: () => r(y),
          onMouseLeave: () => r(null),
          disabled: L,
          children: [
            jsx(b, { name: P, size: 16, className: _?.danger && !L ? 'text-red-600' : '' }),
            jsx('span', { style: { flex: 1 }, children: S }),
          ],
        },
        y
      );
    },
    g = jsx(G, {
      variant: 'ghost',
      size: 'icon-sm',
      className: w(
        'text-slate-500 hover:text-slate-900 hover:bg-slate-100/80',
        n && 'bg-slate-100',
        t && 'opacity-30 cursor-not-allowed'
      ),
      onMouseDown: s,
      onClick: () => !t && i((y) => !y),
      disabled: t,
      'aria-label': 'More table options',
      'aria-expanded': n,
      'aria-haspopup': 'menu',
      'data-testid': 'toolbar-table-more',
      children: jsx(b, { name: 'more_vert', size: 20 }),
    });
  return jsxs('div', {
    ref: d,
    style: { position: 'relative', display: 'inline-block' },
    children: [
      n ? g : jsx(ee, { content: 'More table options', children: g }),
      n &&
        !t &&
        jsxs('div', {
          ref: c,
          style: {
            ...u,
            backgroundColor: 'white',
            border: '1px solid var(--doc-border)',
            borderRadius: 8,
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
            padding: '4px 0',
            minWidth: 200,
            maxHeight: '70vh',
            overflowY: 'auto',
          },
          role: 'menu',
          onMouseDown: (y) => y.stopPropagation(),
          children: [
            v('addRowAbove', 'add', 'Insert row above', 'addRowAbove'),
            v('addRowBelow', 'add', 'Insert row below', 'addRowBelow'),
            v('addColumnLeft', 'add', 'Insert column left', 'addColumnLeft'),
            v('addColumnRight', 'add', 'Insert column right', 'addColumnRight'),
            jsx('div', { style: $e, role: 'separator' }),
            v('mergeCells', 'call_merge', 'Merge cells', 'mergeCells', {
              itemDisabled: !o?.hasMultiCellSelection,
            }),
            v('splitCell', 'call_split', 'Split cell', 'splitCell', {
              itemDisabled: !o?.canSplitCell,
            }),
            jsx('div', { style: $e, role: 'separator' }),
            v('deleteRow', 'delete', 'Delete row', 'deleteRow', {
              danger: true,
              itemDisabled: (o?.rowCount ?? 0) <= 1,
            }),
            v('deleteColumn', 'delete', 'Delete column', 'deleteColumn', {
              danger: true,
              itemDisabled: (o?.columnCount ?? 0) <= 1,
            }),
            v('deleteTable', 'delete', 'Delete table', 'deleteTable', { danger: true }),
            jsx('div', { style: $e, role: 'separator' }),
            jsx('div', { style: Fo, children: 'Vertical alignment' }),
            jsx('div', {
              style: { display: 'flex', gap: 4, padding: '4px 14px' },
              children: ['top', 'center', 'bottom'].map((y) => {
                let P = {
                  top: 'vertical_align_top',
                  center: 'vertical_align_center',
                  bottom: 'vertical_align_bottom',
                };
                return jsx(
                  'button',
                  {
                    type: 'button',
                    title: { top: 'Top', center: 'Middle', bottom: 'Bottom' }[y],
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 32,
                      height: 28,
                      border: '1px solid var(--doc-border)',
                      borderRadius: 4,
                      backgroundColor: 'transparent',
                      cursor: 'pointer',
                    },
                    onMouseDown: (I) => I.preventDefault(),
                    onMouseEnter: (I) => {
                      I.currentTarget.style.backgroundColor = 'var(--doc-bg-hover)';
                    },
                    onMouseLeave: (I) => {
                      I.currentTarget.style.backgroundColor = 'transparent';
                    },
                    onClick: () => m({ type: 'cellVerticalAlign', align: y }),
                    children: jsx(b, { name: P[y], size: 16 }),
                  },
                  y
                );
              }),
            }),
            jsx('div', { style: $e, role: 'separator' }),
            jsx('div', { style: Fo, children: 'Table alignment' }),
            jsx('div', {
              style: { display: 'flex', gap: 4, padding: '4px 14px' },
              children: ['left', 'center', 'right'].map((y) => {
                let P = {
                    left: 'format_align_left',
                    center: 'format_align_center',
                    right: 'format_align_right',
                  },
                  S = f === y;
                return jsx(
                  'button',
                  {
                    type: 'button',
                    title: `Align table ${y}`,
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 32,
                      height: 28,
                      border: '1px solid var(--doc-border)',
                      borderRadius: 4,
                      backgroundColor: S ? 'var(--doc-primary-light)' : 'transparent',
                      borderColor: S ? 'var(--doc-primary)' : 'var(--doc-border)',
                      color: S ? 'var(--doc-primary)' : 'var(--doc-text)',
                      cursor: 'pointer',
                    },
                    onMouseDown: (I) => I.preventDefault(),
                    onClick: () => m({ type: 'tableProperties', props: { justification: y } }),
                    children: jsx(b, { name: P[y], size: 16 }),
                  },
                  y
                );
              }),
            }),
            jsx('div', { style: $e, role: 'separator' }),
            v('headerRow', 'table_rows', 'Toggle header row', { type: 'toggleHeaderRow' }),
            v('distribute', 'view_column', 'Distribute columns evenly', {
              type: 'distributeColumns',
            }),
            v('autoFit', 'fit_width', 'Auto-fit to contents', { type: 'autoFitContents' }),
            v('noWrap', 'wrap_text', 'Toggle no-wrap', { type: 'toggleNoWrap' }),
            jsx('div', { style: $e, role: 'separator' }),
            v('properties', 'settings', 'Table properties...', { type: 'openTableProperties' }),
          ],
        }),
    ],
  });
}
var Dt = 18,
  ta = 2,
  Vo = {
    width: Dt,
    height: Dt,
    backgroundColor: 'white',
    border: '1px solid var(--doc-border, #d1d5db)',
    borderRadius: 2,
    transition: 'background-color 0.1s, border-color 0.1s',
    cursor: 'pointer',
  },
  oa = {
    ...Vo,
    backgroundColor: 'var(--doc-primary, #3b82f6)',
    border: '1px solid var(--doc-primary, #3b82f6)',
  },
  na = {
    marginTop: 6,
    fontSize: 11,
    fontWeight: 500,
    color: 'var(--doc-text, #374151)',
    textAlign: 'center',
  };
function $o({ onInsert: e, gridRows: t = 6, gridColumns: o = 6 }) {
  let [n, i] = useState(0),
    [a, r] = useState(0),
    p = useCallback(() => {
      n > 0 && a > 0 && e(n, a);
    }, [n, a, e]),
    d = [];
  for (let u = 1; u <= t; u++)
    for (let s = 1; s <= o; s++) {
      let f = u <= n && s <= a;
      d.push(
        jsx(
          'div',
          {
            style: f ? oa : Vo,
            onMouseEnter: () => {
              (i(u), r(s));
            },
            onClick: p,
            role: 'gridcell',
            'aria-selected': f,
          },
          `${u}-${s}`
        )
      );
    }
  let c = n > 0 && a > 0 ? `${a} \xD7 ${n}` : 'Select size';
  return jsxs('div', {
    children: [
      jsx('div', {
        style: { display: 'grid', gap: ta, gridTemplateColumns: `repeat(${o}, ${Dt}px)` },
        onMouseLeave: () => {
          (i(0), r(0));
        },
        role: 'grid',
        'aria-label': 'Table size selector',
        children: d,
      }),
      jsx('div', { style: na, children: c }),
    ],
  });
}
function aa(e) {
  return 'type' in e && e.type === 'separator';
}
var Uo = {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    padding: '2px 8px',
    border: 'none',
    background: 'transparent',
    borderRadius: 4,
    cursor: 'pointer',
    fontSize: 13,
    fontWeight: 400,
    color: 'var(--doc-text, #374151)',
    whiteSpace: 'nowrap',
    height: 28,
    lineHeight: '28px',
  },
  la = { ...Uo, background: 'var(--doc-hover, #f3f4f6)' },
  Ko = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '6px 12px',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: 13,
    color: 'var(--doc-text, #374151)',
    width: '100%',
    textAlign: 'left',
    whiteSpace: 'nowrap',
  },
  sa = { ...Ko, opacity: 0.4, cursor: 'default' },
  ca = { height: 1, backgroundColor: 'var(--doc-border, #e5e7eb)', margin: '4px 0' },
  pa = { marginLeft: 'auto', fontSize: 12, color: 'var(--doc-text-muted, #9ca3af)' },
  ua = {
    position: 'absolute',
    left: '100%',
    top: -4,
    marginLeft: 2,
    backgroundColor: 'white',
    border: '1px solid var(--doc-border, #d1d5db)',
    borderRadius: 6,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
    padding: 8,
    zIndex: 1001,
  };
function qt({ label: e, items: t, disabled: o }) {
  let [n, i] = useState(false),
    [a, r] = useState(null),
    p = useRef(null),
    d = useRef(null),
    [c, u] = useState({ top: 0, left: 0 }),
    s = useCallback(() => {
      (i(false), r(null));
    }, []);
  (useEffect(() => {
    if (!n || !p.current) return;
    let m = p.current.getBoundingClientRect();
    u({ top: m.bottom + 2, left: m.left });
  }, [n]),
    useEffect(() => {
      if (!n) return;
      function m(y) {
        let P = y.target;
        p.current && !p.current.contains(P) && d.current && !d.current.contains(P) && s();
      }
      function v(y) {
        y.key === 'Escape' && s();
      }
      function g() {
        s();
      }
      return (
        document.addEventListener('mousedown', m),
        document.addEventListener('keydown', v),
        window.addEventListener('scroll', g, true),
        () => {
          (document.removeEventListener('mousedown', m),
            document.removeEventListener('keydown', v),
            window.removeEventListener('scroll', g, true));
        }
      );
    }, [n, s]));
  let f = (m) => {
    m.disabled || m.submenuContent || (m.onClick && (m.onClick(), s()));
  };
  return jsxs('div', {
    style: { position: 'relative' },
    children: [
      jsxs('button', {
        ref: p,
        type: 'button',
        onClick: () => !o && i(!n),
        onMouseDown: (m) => m.preventDefault(),
        disabled: o,
        style: n ? la : Uo,
        children: [e, jsx(b, { name: 'arrow_drop_down', size: 16 })],
      }),
      n &&
        jsx('div', {
          ref: d,
          style: {
            position: 'fixed',
            top: c.top,
            left: c.left,
            backgroundColor: 'white',
            border: '1px solid var(--doc-border, #d1d5db)',
            borderRadius: 6,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
            padding: '4px 0',
            zIndex: 1e4,
            minWidth: 200,
          },
          onMouseDown: (m) => m.preventDefault(),
          children: t.map((m, v) => {
            if (aa(m)) return jsx('div', { style: ca }, `sep-${v}`);
            let g = m;
            if (g.customContent)
              return jsx(
                'div',
                { onMouseDown: (S) => S.preventDefault(), children: g.customContent },
                g.label
              );
            let y = !!g.submenuContent,
              P = a === g.label;
            return jsxs(
              'div',
              {
                style: { position: 'relative' },
                onMouseEnter: () => y && r(g.label),
                onMouseLeave: () => y && r(null),
                children: [
                  jsxs('button', {
                    type: 'button',
                    style: g.disabled ? sa : Ko,
                    onClick: () => f(g),
                    onMouseDown: (S) => S.preventDefault(),
                    onMouseOver: (S) => {
                      g.disabled ||
                        (S.currentTarget.style.backgroundColor = 'var(--doc-hover, #f3f4f6)');
                    },
                    onMouseOut: (S) => {
                      S.currentTarget.style.backgroundColor = 'transparent';
                    },
                    disabled: g.disabled,
                    children: [
                      g.icon && jsx(b, { name: g.icon, size: 18 }),
                      jsx('span', { children: g.label }),
                      g.shortcut && jsx('span', { style: pa, children: g.shortcut }),
                      y &&
                        jsx('span', {
                          style: { marginLeft: 'auto' },
                          children: jsx(b, { name: 'keyboard_arrow_right', size: 16 }),
                        }),
                    ],
                  }),
                  y &&
                    P &&
                    jsx('div', {
                      style: ua,
                      onMouseDown: (S) => S.preventDefault(),
                      children: g.submenuContent(s),
                    }),
                ],
              },
              g.label
            );
          }),
        }),
    ],
  });
}
var ma = 20;
function yt({
  options: e,
  activeValue: t,
  triggerIcon: o,
  tooltipContent: n,
  onSelect: i,
  disabled: a = false,
  ariaLabel: r,
  testId: p,
}) {
  let [d, c] = useState(false),
    u = useCallback(() => c(false), []),
    {
      containerRef: s,
      dropdownRef: f,
      dropdownStyle: m,
      handleMouseDown: v,
    } = Y({ isOpen: d, onClose: u }),
    g = useCallback(
      (P) => {
        (a || i(P), c(false));
      },
      [a, i]
    ),
    y = jsxs(G, {
      variant: 'ghost',
      size: 'icon-sm',
      className: w(
        'text-slate-500 hover:text-slate-900 hover:bg-slate-100/80',
        d && 'bg-slate-100',
        a && 'opacity-30 cursor-not-allowed'
      ),
      onMouseDown: v,
      onClick: () => !a && c((P) => !P),
      disabled: a,
      'aria-label': r ?? n,
      'aria-expanded': d,
      'aria-haspopup': 'true',
      'data-testid': p,
      children: [
        jsx(b, { name: o, size: ma }),
        jsx(b, { name: 'arrow_drop_down', size: 14, className: '-ml-1' }),
      ],
    });
  return jsxs('div', {
    ref: s,
    style: { position: 'relative', display: 'inline-block' },
    children: [
      d ? y : jsx(ee, { content: n, children: y }),
      d &&
        !a &&
        jsx('div', {
          ref: f,
          style: {
            ...m,
            backgroundColor: 'white',
            border: '1px solid var(--doc-border)',
            borderRadius: 8,
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
            padding: 6,
          },
          onMouseDown: (P) => P.stopPropagation(),
          children: jsx('div', {
            style: { display: 'flex', gap: 2 },
            children: e.map((P) => {
              let S = t === P.value;
              return jsx(
                'button',
                {
                  type: 'button',
                  title: P.label,
                  'data-testid': p ? `${p}-${P.value}` : void 0,
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 32,
                    height: 32,
                    border: '1px solid transparent',
                    borderRadius: 4,
                    backgroundColor: S ? 'var(--doc-primary-light)' : 'transparent',
                    cursor: 'pointer',
                    color: S ? 'var(--doc-primary)' : 'var(--doc-text)',
                  },
                  onMouseDown: (I) => I.preventDefault(),
                  onMouseEnter: (I) => {
                    S || (I.currentTarget.style.backgroundColor = 'var(--doc-bg-hover)');
                  },
                  onMouseLeave: (I) => {
                    I.currentTarget.style.backgroundColor = S
                      ? 'var(--doc-primary-light)'
                      : 'transparent';
                  },
                  onClick: () => g(P.value),
                  children: jsx(b, { name: P.iconName, size: 18 }),
                },
                P.value
              );
            }),
          }),
        }),
    ],
  });
}
var At = [
  { value: 'inline', label: 'Inline with text', iconName: 'format_image_left' },
  { value: 'wrapRight', label: 'Float left (wrap right)', iconName: 'format_image_right' },
  { value: 'wrapLeft', label: 'Float right (wrap left)', iconName: 'format_image_left' },
  { value: 'topAndBottom', label: 'Top and bottom', iconName: 'horizontal_rule' },
  { value: 'behind', label: 'Behind text', iconName: 'flip_to_back' },
  { value: 'inFront', label: 'In front of text', iconName: 'flip_to_front' },
];
function fa(e) {
  return e.displayMode === 'float' && e.cssFloat === 'left'
    ? 'wrapRight'
    : e.displayMode === 'float' && e.cssFloat === 'right'
      ? 'wrapLeft'
      : e.wrapType;
}
function Xo({ imageContext: e, onChange: t, disabled: o = false }) {
  let n = fa(e),
    i = At.find((a) => a.value === n) || At[0];
  return jsx(yt, {
    options: At,
    activeValue: n,
    triggerIcon: i.iconName,
    tooltipContent: `Wrap: ${i.label}`,
    onSelect: t,
    disabled: o,
    testId: 'toolbar-image-wrap',
  });
}
var va = [
  { value: 'rotateCW', label: 'Rotate clockwise', iconName: 'rotate_right' },
  { value: 'rotateCCW', label: 'Rotate counter-clockwise', iconName: 'rotate_left' },
  { value: 'flipH', label: 'Flip horizontal', iconName: 'swap_horiz' },
  { value: 'flipV', label: 'Flip vertical', iconName: 'swap_vert' },
];
function Jo({ onTransform: e, disabled: t = false }) {
  return jsx(yt, {
    options: va,
    triggerIcon: 'rotate_right',
    tooltipContent: 'Transform',
    onSelect: e,
    disabled: t,
    testId: 'toolbar-image-transform',
  });
}
var ba = {
  FFFF00: 'yellow',
  '00FF00': 'green',
  '00FFFF': 'cyan',
  FF00FF: 'magenta',
  '0000FF': 'blue',
  FF0000: 'red',
  '00008B': 'darkBlue',
  '008080': 'darkCyan',
  '008000': 'darkGreen',
  800080: 'darkMagenta',
  '8B0000': 'darkRed',
  808e3: 'darkYellow',
  808080: 'darkGray',
  C0C0C0: 'lightGray',
  '000000': 'black',
  FFFFFF: 'white',
};
function Es(e) {
  let t = e.replace(/^#/, '').toUpperCase();
  return ba[t] || null;
}
function re({
  active: e = false,
  disabled: t = false,
  title: o,
  onClick: n,
  children: i,
  className: a,
  ariaLabel: r,
}) {
  let p =
      r?.toLowerCase().replace(/\s+/g, '-') ||
      o
        ?.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/\([^)]*\)/g, '')
        .trim(),
    d = (u) => {
      u.preventDefault();
    },
    c = jsx(G, {
      variant: 'ghost',
      size: 'icon-sm',
      className: w(
        'text-slate-500 hover:text-slate-900 hover:bg-slate-100/80',
        e && 'bg-slate-900 text-white hover:bg-slate-800 hover:text-white',
        t && 'opacity-30 cursor-not-allowed',
        a
      ),
      onMouseDown: d,
      onClick: t ? void 0 : n,
      disabled: t,
      'aria-pressed': e,
      'aria-label': r || o,
      'data-testid': p ? `toolbar-${p}` : void 0,
      children: i,
    });
  return o ? jsx(ee, { content: o, children: c }) : c;
}
function ve({ label: e, children: t, className: o }) {
  return jsx('div', {
    className: w('flex items-center gap-0.5 px-1 border-r border-slate-200/50 last:border-r-0', o),
    role: 'group',
    'aria-label': e,
    children: t,
  });
}
function ic() {
  return jsx('div', { className: 'w-px h-6 bg-slate-200 mx-1.5', role: 'separator' });
}
var ie = 20;
function ac({
  currentFormatting: e = {},
  onFormat: t,
  onUndo: o,
  onRedo: n,
  canUndo: i = false,
  canRedo: a$1 = false,
  disabled: r = false,
  className: p,
  style: d,
  enableShortcuts: c = true,
  editorRef: u,
  children: s,
  showFontPicker: f = true,
  showFontSizePicker: m = true,
  showTextColorPicker: v = true,
  showHighlightColorPicker: g = true,
  showAlignmentButtons: y = true,
  showListButtons: P = true,
  showLineSpacingPicker: S = true,
  showStylePicker: I = true,
  documentStyles: _,
  theme: L,
  onPrint: B,
  showPrintButton: R = true,
  showZoomControl: F = true,
  zoom: K,
  onZoomChange: te,
  onRefocusEditor: M,
  onInsertTable: z,
  showTableInsert: T = true,
  onInsertImage: N,
  onInsertPageBreak: x,
  onInsertTOC: le,
  imageContext: Ue,
  onImageWrapType: Ke,
  onImageTransform: rt,
  onOpenImageProperties: it,
  tableContext: we,
  onTableAction: qe,
}) {
  let at = useRef(null),
    $ = useCallback(
      (Z) => {
        !r && t && t(Z);
      },
      [r, t]
    ),
    Pe = useCallback(() => {
      !r && i && o && o();
    }, [r, i, o]),
    Ye = useCallback(() => {
      !r && a$1 && n && n();
    }, [r, a$1, n]),
    je = useCallback(
      (Z) => {
        !r && t && (t({ type: 'fontFamily', value: Z }), requestAnimationFrame(() => M?.()));
      },
      [r, t, M]
    ),
    Pt = useCallback(
      (Z) => {
        !r && t && (t({ type: 'fontSize', value: Z }), requestAnimationFrame(() => M?.()));
      },
      [r, t, M]
    ),
    D = useCallback(
      (Z) => {
        !r && t && (t({ type: 'textColor', value: Z }), requestAnimationFrame(() => M?.()));
      },
      [r, t, M]
    ),
    Me = useCallback(
      (Z) => {
        !r &&
          t &&
          (t({ type: 'highlightColor', value: typeof Z == 'string' ? Z : '' }),
          requestAnimationFrame(() => M?.()));
      },
      [r, t, M]
    ),
    xe = useCallback(
      (Z) => {
        !r && t && t({ type: 'alignment', value: Z });
      },
      [r, t]
    ),
    Re = useCallback(() => {
      !r && t && t('bulletList');
    }, [r, t]),
    se = useCallback(() => {
      !r && t && t('numberedList');
    }, [r, t]),
    Q = useCallback(() => {
      !r && t && t('indent');
    }, [r, t]),
    oe = useCallback(() => {
      !r && t && t('outdent');
    }, [r, t]),
    ke = useCallback(
      (Z) => {
        !r && t && (t({ type: 'lineSpacing', value: Z }), requestAnimationFrame(() => M?.()));
      },
      [r, t, M]
    ),
    mn = useCallback(
      (Z) => {
        !r && t && (t({ type: 'applyStyle', value: Z }), requestAnimationFrame(() => M?.()));
      },
      [r, t, M]
    ),
    fn = useCallback(
      (Z, H) => {
        !r && z && (z(Z, H), requestAnimationFrame(() => M?.()));
      },
      [r, z, M]
    ),
    Xe = useCallback(
      (Z) => {
        !r && qe && (qe(Z), requestAnimationFrame(() => M?.()));
      },
      [r, qe, M]
    );
  useEffect(() => {
    if (!c) return;
    let Z = (H) => {
      let Le = H.target,
        Xt = u?.current,
        gn = at.current,
        bn = Xt?.contains(Le),
        xn = gn?.contains(Le);
      if (!bn && !xn) return;
      if ((H.ctrlKey || H.metaKey) && !H.altKey)
        switch (H.key.toLowerCase()) {
          case 'b':
            (H.preventDefault(), $('bold'));
            break;
          case 'i':
            (H.preventDefault(), $('italic'));
            break;
          case 'u':
            (H.preventDefault(), $('underline'));
            break;
          case '=':
            H.shiftKey
              ? (H.preventDefault(), $('superscript'))
              : (H.preventDefault(), $('subscript'));
            break;
          case 'l':
            (H.preventDefault(), xe('left'));
            break;
          case 'e':
            (H.preventDefault(), xe('center'));
            break;
          case 'r':
            (H.preventDefault(), xe('right'));
            break;
          case 'j':
            (H.preventDefault(), xe('both'));
            break;
          case 'k':
            (H.preventDefault(), $('insertLink'));
            break;
        }
    };
    return (
      document.addEventListener('keydown', Z),
      () => {
        document.removeEventListener('keydown', Z);
      }
    );
  }, [c, $, u]);
  let hn = useCallback((Z) => {
      let H = Z.target;
      H.tagName === 'INPUT' ||
        H.tagName === 'TEXTAREA' ||
        H.tagName === 'SELECT' ||
        H.tagName === 'OPTION' ||
        Z.preventDefault();
    }, []),
    vn = useCallback(
      (Z) => {
        let H = Z.target,
          Le = document.activeElement;
        H.tagName === 'SELECT' ||
          H.tagName === 'OPTION' ||
          Le?.tagName === 'SELECT' ||
          requestAnimationFrame(() => {
            M?.();
          });
      },
      [M]
    );
  return jsxs('div', {
    ref: at,
    className: w(
      'flex items-center gap-0 px-2 py-2 bg-white border-b border-slate-100 min-h-[44px] overflow-x-auto',
      p
    ),
    style: d,
    role: 'toolbar',
    'aria-label': 'Formatting toolbar',
    'data-testid': 'toolbar',
    onMouseDown: hn,
    onMouseUp: vn,
    children: [
      R &&
        B &&
        jsx(qt, {
          label: 'File',
          disabled: r,
          items: [{ icon: 'print', label: 'Print', shortcut: 'Ctrl+P', onClick: B }],
        }),
      jsx(qt, {
        label: 'Insert',
        disabled: r,
        items: [
          ...(N ? [{ icon: 'image', label: 'Image', onClick: N }] : []),
          ...(T && z
            ? [
                {
                  icon: 'grid_on',
                  label: 'Table',
                  submenuContent: (Z) =>
                    jsx($o, {
                      onInsert: (H, Le) => {
                        (fn(H, Le), Z());
                      },
                    }),
                },
              ]
            : []),
          ...(N || (T && z) ? [{ type: 'separator' }] : []),
          { icon: 'page_break', label: 'Page break', onClick: x, disabled: !x },
          { icon: 'format_list_numbered', label: 'Table of contents', onClick: le, disabled: !le },
        ],
      }),
      jsxs(ve, {
        label: 'History',
        children: [
          jsx(re, {
            onClick: Pe,
            disabled: r || !i,
            title: 'Undo (Ctrl+Z)',
            ariaLabel: 'Undo',
            children: jsx(b, { name: 'undo', size: ie }),
          }),
          jsx(re, {
            onClick: Ye,
            disabled: r || !a$1,
            title: 'Redo (Ctrl+Y)',
            ariaLabel: 'Redo',
            children: jsx(b, { name: 'redo', size: ie }),
          }),
        ],
      }),
      F &&
        jsx(ve, {
          label: 'Zoom',
          children: jsx(Lo, {
            value: K,
            onChange: te,
            minZoom: 0.5,
            maxZoom: 2,
            disabled: r,
            compact: true,
            showButtons: false,
          }),
        }),
      I &&
        jsx(ve, {
          label: 'Styles',
          children: jsx(ko, {
            value: e.styleId || 'Normal',
            onChange: mn,
            styles: _,
            theme: L,
            disabled: r,
            width: 150,
          }),
        }),
      (f || m) &&
        jsxs(ve, {
          label: 'Font',
          children: [
            f &&
              jsx(oo, {
                value: e.fontFamily || 'Arial',
                onChange: je,
                disabled: r,
                width: 70,
                placeholder: 'Arial',
              }),
            m &&
              jsx(mo, {
                value: e.fontSize !== void 0 ? uo(e.fontSize) : 11,
                onChange: Pt,
                disabled: r,
                width: 50,
                placeholder: '11',
              }),
          ],
        }),
      jsxs(ve, {
        label: 'Text formatting',
        children: [
          jsx(re, {
            onClick: () => $('bold'),
            active: e.bold,
            disabled: r,
            title: 'Bold (Ctrl+B)',
            ariaLabel: 'Bold',
            children: jsx(b, { name: 'format_bold', size: ie }),
          }),
          jsx(re, {
            onClick: () => $('italic'),
            active: e.italic,
            disabled: r,
            title: 'Italic (Ctrl+I)',
            ariaLabel: 'Italic',
            children: jsx(b, { name: 'format_italic', size: ie }),
          }),
          jsx(re, {
            onClick: () => $('underline'),
            active: e.underline,
            disabled: r,
            title: 'Underline (Ctrl+U)',
            ariaLabel: 'Underline',
            children: jsx(b, { name: 'format_underlined', size: ie }),
          }),
          jsx(re, {
            onClick: () => $('strikethrough'),
            active: e.strike,
            disabled: r,
            title: 'Strikethrough',
            ariaLabel: 'Strikethrough',
            children: jsx(b, { name: 'strikethrough_s', size: ie }),
          }),
          v &&
            jsx(He, {
              mode: 'text',
              value: e.color?.replace(/^#/, ''),
              onChange: D,
              theme: L,
              disabled: r,
              title: 'Font Color',
            }),
          g &&
            jsx(He, {
              mode: 'highlight',
              value: e.highlight,
              onChange: Me,
              theme: L,
              disabled: r,
              title: 'Text Highlight Color',
            }),
          jsx(re, {
            onClick: () => $('insertLink'),
            disabled: r,
            title: 'Insert link (Ctrl+K)',
            ariaLabel: 'Insert link',
            children: jsx(b, { name: 'link', size: ie }),
          }),
        ],
      }),
      jsxs(ve, {
        label: 'Script',
        children: [
          jsx(re, {
            onClick: () => $('superscript'),
            active: e.superscript,
            disabled: r,
            title: 'Superscript (Ctrl+Shift+=)',
            ariaLabel: 'Superscript',
            children: jsx(b, { name: 'superscript', size: ie }),
          }),
          jsx(re, {
            onClick: () => $('subscript'),
            active: e.subscript,
            disabled: r,
            title: 'Subscript (Ctrl+=)',
            ariaLabel: 'Subscript',
            children: jsx(b, { name: 'subscript', size: ie }),
          }),
        ],
      }),
      y && jsx(Co, { value: e.alignment || 'left', onChange: xe, disabled: r }),
      (P || S) &&
        jsxs(ve, {
          label: 'List formatting',
          children: [
            P &&
              jsx(Io, {
                listState: e.listState || wo(),
                onBulletList: Re,
                onNumberedList: se,
                onIndent: Q,
                onOutdent: oe,
                disabled: r,
                showIndentButtons: true,
                compact: true,
                hasIndent: (e.indentLeft ?? 0) > 0,
              }),
            S && jsx(Mo, { value: e.lineSpacing, onChange: ke, disabled: r }),
          ],
        }),
      Ue &&
        Ke &&
        jsxs(ve, {
          label: 'Image',
          children: [
            jsx(Xo, { imageContext: Ue, onChange: Ke, disabled: r }),
            rt && jsx(Jo, { onTransform: rt, disabled: r }),
            it &&
              jsx(re, {
                onClick: it,
                disabled: r,
                title: 'Image properties (alt text, border)...',
                ariaLabel: 'Image properties',
                children: jsx(b, { name: 'tune', size: ie }),
              }),
          ],
        }),
      we?.isInTable &&
        qe &&
        jsxs(ve, {
          label: 'Table',
          children: [
            jsx(Eo, { onAction: Xe, disabled: r }),
            jsx(_o, {
              onAction: Xe,
              disabled: r,
              theme: L,
              value: we?.cellBorderColor ? a(we.cellBorderColor, L).replace(/^#/, '') : void 0,
            }),
            jsx(No, { onAction: Xe, disabled: r }),
            jsx(qo, { onAction: Xe, disabled: r, theme: L, value: we?.cellBackgroundColor }),
            jsx(Oo, { onAction: Xe, disabled: r, tableContext: we }),
          ],
        }),
      jsx(re, {
        onClick: () => $('clearFormatting'),
        disabled: r,
        title: 'Clear formatting',
        ariaLabel: 'Clear formatting',
        children: jsx(b, { name: 'format_clear', size: ie }),
      }),
      s,
    ],
  });
}
var Ca = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: '13px',
    userSelect: 'none',
    transition: 'opacity 0.2s, transform 0.2s',
  },
  Ta = { position: 'absolute', zIndex: 100, pointerEvents: 'auto' },
  Ia = {
    default: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      color: 'var(--doc-text)',
      padding: '6px 12px',
      borderRadius: '4px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
      border: '1px solid rgba(0, 0, 0, 0.1)',
    },
    minimal: { backgroundColor: 'transparent', color: 'var(--doc-text-muted)', padding: '4px 8px' },
    badge: {
      backgroundColor: 'var(--doc-primary)',
      color: 'white',
      padding: '4px 10px',
      borderRadius: '4px',
      fontWeight: 500,
      fontSize: '12px',
    },
    pill: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      color: 'white',
      padding: '6px 14px',
      borderRadius: '16px',
      fontSize: '12px',
      fontWeight: 500,
    },
  },
  wa = {
    'bottom-left': { bottom: '16px', left: '16px' },
    'bottom-center': { bottom: '16px', left: '50%', transform: 'translateX(-50%)' },
    'bottom-right': { bottom: '16px', right: '16px' },
    'top-left': { top: '16px', left: '16px' },
    'top-center': { top: '16px', left: '50%', transform: 'translateX(-50%)' },
    'top-right': { top: '16px', right: '16px' },
  };
function uc({
  currentPage: e,
  totalPages: t,
  position: o = 'bottom-center',
  variant: n = 'default',
  floating: i = true,
  showPrefix: a = true,
  formatText: r,
  onClick: p,
  disabled: d = false,
  className: c = '',
  style: u,
  children: s,
}) {
  let f = useMemo(() => (r ? r(e, t) : a ? `Page ${e} of ${t}` : `${e} / ${t}`), [e, t, r, a]),
    m = {
      ...Ca,
      ...Ia[n],
      ...(i ? Ta : {}),
      ...(i ? wa[o] : {}),
      ...(p && !d ? { cursor: 'pointer' } : {}),
      ...(d ? { opacity: 0.5, pointerEvents: 'none' } : {}),
      ...u,
    },
    v = () => {
      !d && p && p();
    };
  return jsx('div', {
    className: `docx-page-indicator docx-page-indicator-${n} ${c}`,
    style: m,
    onClick: v,
    role: p ? 'button' : 'status',
    'aria-label': `Page ${e} of ${t}`,
    'aria-live': 'polite',
    tabIndex: p && !d ? 0 : void 0,
    onKeyDown: (g) => {
      p && !d && (g.key === 'Enter' || g.key === ' ') && (g.preventDefault(), p());
    },
    children: s || f,
  });
}
function Pa(e) {
  let t = ['th', 'st', 'nd', 'rd'],
    o = e % 100;
  return e + (t[(o - 20) % 10] || t[o] || t[0]);
}
function dc(e) {
  return (t, o) =>
    e.replace('{current}', String(t)).replace('{total}', String(o)).replace('{ordinal}', Pa(t));
}
function mc(e, t) {
  return t <= 1 ? 100 : Math.round(((e - 1) / (t - 1)) * 100);
}
function fc(e) {
  return e === 1;
}
function hc(e, t) {
  return e === t;
}
function vc(e, t, o = 20) {
  let n = 0;
  for (let i = 0; i < t.length; i++) {
    let a = n,
      r = n + t[i],
      p = (a + r) / 2;
    if (e < p) return i + 1;
    n = r + o;
  }
  return t.length;
}
function gc(e, t, o, n = 20) {
  if (e < 1 || e > t.length) return 0;
  let i = 0;
  for (let p = 0; p < e - 1; p++) i += t[p] + n;
  let a = t[e - 1],
    r = Math.max(0, (o - a) / 2);
  return Math.max(0, i - r);
}
function Ra() {
  return jsx('svg', {
    width: '16',
    height: '16',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    children: jsx('polyline', { points: '15 18 9 12 15 6' }),
  });
}
function ka() {
  return jsx('svg', {
    width: '16',
    height: '16',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    children: jsx('polyline', { points: '9 18 15 12 9 6' }),
  });
}
function La() {
  return jsx('svg', {
    width: '14',
    height: '14',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    children: jsx('polyline', { points: '18 15 12 9 6 15' }),
  });
}
function Za() {
  return jsx('svg', {
    width: '14',
    height: '14',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '2',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    children: jsx('polyline', { points: '6 9 12 15 18 9' }),
  });
}
var Ha = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '4px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: '13px',
    userSelect: 'none',
    transition: 'opacity 0.2s',
  },
  Ea = { position: 'absolute', zIndex: 100, pointerEvents: 'auto' },
  _a = {
    default: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      color: 'var(--doc-text)',
      padding: '4px 8px',
      borderRadius: '6px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
      border: '1px solid rgba(0, 0, 0, 0.1)',
    },
    compact: {
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      color: 'var(--doc-text)',
      padding: '2px 4px',
      borderRadius: '4px',
      boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(0, 0, 0, 0.08)',
      fontSize: '12px',
    },
    minimal: { backgroundColor: 'transparent', color: 'var(--doc-text-muted)', padding: '4px' },
  },
  Da = {
    'bottom-left': { bottom: '16px', left: '16px' },
    'bottom-center': { bottom: '16px', left: '50%', transform: 'translateX(-50%)' },
    'bottom-right': { bottom: '16px', right: '16px' },
    'top-left': { top: '16px', left: '16px' },
    'top-center': { top: '16px', left: '50%', transform: 'translateX(-50%)' },
    'top-right': { top: '16px', right: '16px' },
  },
  Qo = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '28px',
    height: '28px',
    padding: 0,
    border: 'none',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    color: 'var(--doc-text-muted)',
    cursor: 'pointer',
    transition: 'background-color 0.15s, color 0.15s',
  },
  en = { backgroundColor: 'var(--doc-bg-hover)', color: 'var(--doc-text)' },
  tn = { opacity: 0.4, cursor: 'not-allowed' },
  Na = {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '4px 8px',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'background-color 0.15s',
    minWidth: '80px',
    justifyContent: 'center',
  },
  qa = { backgroundColor: 'rgba(0, 0, 0, 0.04)' };
function Aa({ currentPage: e, totalPages: t, onNavigate: o, onClose: n, anchorRef: i }) {
  let [a, r] = useState(String(e)),
    [p, d] = useState(null),
    c = useRef(null),
    u = useRef(null);
  (useEffect(() => {
    (c.current?.focus(), c.current?.select());
  }, []),
    useEffect(() => {
      let R = (F) => {
        u.current &&
          !u.current.contains(F.target) &&
          i.current &&
          !i.current.contains(F.target) &&
          n();
      };
      return (
        document.addEventListener('mousedown', R),
        () => document.removeEventListener('mousedown', R)
      );
    }, [n, i]),
    useEffect(() => {
      let R = (F) => {
        F.key === 'Escape' && n();
      };
      return (
        document.addEventListener('keydown', R),
        () => document.removeEventListener('keydown', R)
      );
    }, [n]));
  let s = useCallback(() => {
      let R = parseInt(a, 10);
      if (isNaN(R)) {
        d('Please enter a number');
        return;
      }
      if (R < 1 || R > t) {
        d(`Page must be 1-${t}`);
        return;
      }
      (o(R), n());
    }, [a, t, o, n]),
    f = (R) => {
      (r(R.target.value), d(null));
    },
    m = (R) => {
      if (R.key === 'Enter') (R.preventDefault(), s());
      else if (R.key === 'ArrowUp') {
        R.preventDefault();
        let F = Math.min(parseInt(a, 10) + 1 || 1, t);
        (r(String(F)), d(null));
      } else if (R.key === 'ArrowDown') {
        R.preventDefault();
        let F = Math.max(parseInt(a, 10) - 1 || 1, 1);
        (r(String(F)), d(null));
      }
    },
    v = () => {
      (o(1), n());
    },
    g = () => {
      (o(t), n());
    },
    y = {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      padding: '12px',
      minWidth: '200px',
      zIndex: 1e3,
    },
    P = { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: p ? '4px' : '12px' },
    S = {
      flex: 1,
      padding: '8px 12px',
      fontSize: '14px',
      border: p ? '1px solid var(--doc-error)' : '1px solid var(--doc-border)',
      borderRadius: '4px',
      outline: 'none',
      textAlign: 'center',
      fontFamily: 'inherit',
    },
    I = {
      padding: '8px 16px',
      fontSize: '14px',
      fontWeight: 500,
      backgroundColor: 'var(--doc-primary)',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    _ = { color: 'var(--doc-error)', fontSize: '12px', marginBottom: '8px' },
    L = { display: 'flex', justifyContent: 'space-between', gap: '8px' },
    B = {
      flex: 1,
      padding: '6px 12px',
      fontSize: '12px',
      backgroundColor: 'var(--doc-bg-muted)',
      color: 'var(--doc-text)',
      border: '1px solid var(--doc-border-light)',
      borderRadius: '4px',
      cursor: 'pointer',
    };
  return jsxs('div', {
    ref: u,
    style: y,
    role: 'dialog',
    'aria-label': 'Go to page',
    children: [
      jsxs('div', {
        style: {
          fontSize: '12px',
          color: 'var(--doc-text-muted)',
          marginBottom: '8px',
          textAlign: 'center',
        },
        children: ['Go to page (1-', t, ')'],
      }),
      jsxs('div', {
        style: P,
        children: [
          jsx('input', {
            ref: c,
            type: 'text',
            value: a,
            onChange: f,
            onKeyDown: m,
            style: S,
            'aria-label': 'Page number',
            'aria-invalid': !!p,
          }),
          jsx('button', { onClick: s, style: I, type: 'button', children: 'Go' }),
        ],
      }),
      p && jsx('div', { style: _, children: p }),
      jsxs('div', {
        style: L,
        children: [
          jsx('button', {
            onClick: v,
            style: B,
            disabled: e === 1,
            type: 'button',
            children: 'First',
          }),
          jsx('button', {
            onClick: g,
            style: B,
            disabled: e === t,
            type: 'button',
            children: 'Last',
          }),
        ],
      }),
    ],
  });
}
function Cc({
  currentPage: e,
  totalPages: t,
  onNavigate: o,
  position: n = 'bottom-center',
  variant: i = 'default',
  floating: a = true,
  showButtons: r = true,
  disabled: p = false,
  className: d = '',
  style: c,
}) {
  let [u, s] = useState(false),
    [f, m] = useState(false),
    [v, g] = useState(false),
    [y, P] = useState(false),
    S = useRef(null),
    I = e > 1,
    _ = e < t,
    L = useCallback(() => {
      I && !p && o(e - 1);
    }, [I, p, e, o]),
    B = useCallback(() => {
      _ && !p && o(e + 1);
    }, [_, p, e, o]),
    R = useCallback(
      (x) => {
        p ||
          (x.key === 'ArrowLeft' || x.key === 'PageUp'
            ? (x.preventDefault(), L())
            : x.key === 'ArrowRight' || x.key === 'PageDown'
              ? (x.preventDefault(), B())
              : x.key === 'Home'
                ? (x.preventDefault(), o(1))
                : x.key === 'End' && (x.preventDefault(), o(t)));
      },
      [p, L, B, o, t]
    ),
    F = useCallback(() => {
      p || s((x) => !x);
    }, [p]),
    K = useCallback(() => {
      s(false);
    }, []),
    te = useCallback(
      (x) => {
        (o(x), K());
      },
      [o, K]
    ),
    M = {
      ...Ha,
      ..._a[i],
      ...(a ? Ea : {}),
      ...(a ? Da[n] : {}),
      ...(p ? { opacity: 0.5, pointerEvents: 'none' } : {}),
      ...c,
    },
    z = {
      ...Qo,
      ...(i === 'compact' ? { width: '24px', height: '24px' } : {}),
      ...(f && I ? en : {}),
      ...(I ? {} : tn),
    },
    T = {
      ...Qo,
      ...(i === 'compact' ? { width: '24px', height: '24px' } : {}),
      ...(v && _ ? en : {}),
      ...(_ ? {} : tn),
    },
    N = {
      ...Na,
      ...(i === 'compact' ? { padding: '2px 6px', minWidth: '60px' } : {}),
      ...(y && !p ? qa : {}),
      ...(p ? { cursor: 'not-allowed' } : {}),
    };
  return jsxs('div', {
    className: `docx-page-navigator docx-page-navigator-${i} ${d}`,
    style: M,
    role: 'navigation',
    'aria-label': 'Page navigation',
    onKeyDown: R,
    tabIndex: 0,
    children: [
      r &&
        jsx('button', {
          onClick: L,
          disabled: !I || p,
          style: z,
          onMouseEnter: () => m(true),
          onMouseLeave: () => m(false),
          'aria-label': 'Previous page',
          title: 'Previous page (\u2190)',
          type: 'button',
          children: jsx(Ra, {}),
        }),
      jsxs('div', {
        style: { position: 'relative' },
        children: [
          jsxs('button', {
            ref: S,
            onClick: F,
            style: N,
            onMouseEnter: () => P(true),
            onMouseLeave: () => P(false),
            'aria-haspopup': 'dialog',
            'aria-expanded': u,
            'aria-label': `Page ${e} of ${t}. Click to go to a specific page.`,
            title: 'Click to go to a specific page',
            disabled: p,
            type: 'button',
            children: [
              jsxs('span', { children: ['Page ', jsx('strong', { children: e }), ' of ', t] }),
              u ? jsx(La, {}) : jsx(Za, {}),
            ],
          }),
          u && jsx(Aa, { currentPage: e, totalPages: t, onNavigate: te, onClose: K, anchorRef: S }),
        ],
      }),
      r &&
        jsx('button', {
          onClick: B,
          disabled: !_ || p,
          style: T,
          onMouseEnter: () => g(true),
          onMouseLeave: () => g(false),
          'aria-label': 'Next page',
          title: 'Next page (\u2192)',
          type: 'button',
          children: jsx(ka, {}),
        }),
    ],
  });
}
function Tc(e) {
  let t = e.trim(),
    o = parseInt(t, 10);
  return isNaN(o) ? null : o;
}
function Ic(e, t) {
  return Number.isInteger(e) && e >= 1 && e <= t;
}
function wc(e, t) {
  return Math.min(Math.max(1, Math.round(e)), t);
}
function Pc() {
  return [
    { key: '\u2190 or PageUp', description: 'Previous page' },
    { key: '\u2192 or PageDown', description: 'Next page' },
    { key: 'Home', description: 'First page' },
    { key: 'End', description: 'Last page' },
    { key: 'Enter (in input)', description: 'Go to page' },
  ];
}
function Mc(e, t, o) {
  return e === t ? `Page ${e} of ${o}` : `Pages ${e}-${t} of ${o}`;
}
function Rc(e, t) {
  return t <= 1 ? 100 : Math.round(((e - 1) / (t - 1)) * 100);
}
var nn = 12240,
  Ct = 1440,
  Tt = 1440,
  It = 567,
  zt = 22,
  Oa = 'var(--doc-text-muted)',
  za = 'var(--doc-text-subtle)',
  on = 'rgba(0, 0, 0, 0.06)',
  Va = '#4285f4',
  $a = '#3367d6',
  Wa = '#2a56c6',
  Ne = 5;
function Ga(e, t) {
  return t === 'inch' ? (e / Tt).toFixed(2) + '"' : (e / It).toFixed(1) + ' cm';
}
function _c({
  sectionProps: e,
  zoom: t = 1,
  editable: o = false,
  onLeftMarginChange: n,
  onRightMarginChange: i,
  onFirstLineIndentChange: a,
  showFirstLineIndent: r$1 = false,
  firstLineIndent: p = 0,
  hangingIndent: d = false,
  indentLeft: c = 0,
  indentRight: u = 0,
  onIndentLeftChange: s$1,
  onIndentRightChange: f,
  unit: m = 'inch',
  className: v = '',
  style: g,
  tabStops: y,
  onTabStopRemove: P,
}) {
  let [S, I] = useState(null),
    [_, L] = useState(null),
    [B$1, R] = useState(null),
    [F, K] = useState(null),
    te = useRef(null),
    M = e?.pageWidth ?? nn,
    z = e?.marginLeft ?? Ct,
    T = e?.marginRight ?? Ct,
    N = M - z - T,
    x = r(M) * t,
    le = r(z) * t,
    Ue = r(T) * t,
    Ke = r(c) * t,
    rt = r(u) * t,
    it = d ? -p : p,
    we = r(it) * t,
    qe = le + Ke,
    at = x - Ue - rt,
    $ = le + Ke + we,
    Pe = useCallback(
      (D, Me) => {
        o && (D.preventDefault(), D.stopPropagation(), I(Me));
      },
      [o]
    ),
    Ye = useCallback(
      (D) => {
        if (!S || !te.current) return;
        let Me = te.current.getBoundingClientRect(),
          xe = D.clientX - Me.left;
        K(xe);
        let Re = s(xe / t);
        if (S === 'leftMargin') {
          let se = M - T - 720,
            Q = Math.round(Math.max(0, Math.min(Re, se)));
          (R(Q), n?.(Q));
        } else if (S === 'rightMargin') {
          let se = M - Re,
            Q = M - z - 720,
            oe = Math.round(Math.max(0, Math.min(se, Q)));
          (R(oe), i?.(oe));
        } else if (S === 'firstLineIndent') {
          let se = z + c,
            Q = Re - se,
            oe = N - c - u - 720,
            ke = Math.round(Math.max(-c, Math.min(Q, oe)));
          (R(ke), a?.(ke));
        } else if (S === 'leftIndent') {
          let se = Re - z,
            Q = N - u - 720,
            oe = Math.round(Math.max(0, Math.min(se, Q)));
          (R(oe), s$1?.(oe));
        } else if (S === 'rightIndent') {
          let Q = M - T - Re,
            oe = N - c - 720,
            ke = Math.round(Math.max(0, Math.min(Q, oe)));
          (R(ke), f?.(ke));
        }
      },
      [S, t, M, z, T, N, c, u, n, i, a, s$1, f]
    ),
    je = useCallback(() => {
      (I(null), R(null), K(null));
    }, []);
  useEffect(() => {
    if (S)
      return (
        document.addEventListener('mousemove', Ye),
        document.addEventListener('mouseup', je),
        () => {
          (document.removeEventListener('mousemove', Ye),
            document.removeEventListener('mouseup', je));
        }
      );
  }, [S, Ye, je]);
  let Pt = Xa(M, t, m);
  return jsxs('div', {
    ref: te,
    className: `docx-horizontal-ruler ${v}`,
    style: {
      position: 'relative',
      width: B(x),
      height: zt,
      backgroundColor: 'transparent',
      overflow: 'visible',
      userSelect: 'none',
      cursor: S ? 'ew-resize' : 'default',
      ...g,
    },
    role: 'slider',
    'aria-label': 'Horizontal ruler',
    'aria-valuemin': 0,
    'aria-valuemax': M,
    children: [
      jsx('div', {
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: B(le),
          height: zt,
          backgroundColor: on,
          borderRight: '1px solid rgba(0,0,0,0.12)',
          cursor: o ? 'ew-resize' : 'default',
          zIndex: 1,
        },
        onMouseDown: o && n ? (D) => Pe(D, 'leftMargin') : void 0,
      }),
      jsx('div', {
        style: {
          position: 'absolute',
          top: 0,
          right: 0,
          width: B(Ue),
          height: zt,
          backgroundColor: on,
          borderLeft: '1px solid rgba(0,0,0,0.12)',
          cursor: o ? 'ew-resize' : 'default',
          zIndex: 1,
        },
        onMouseDown: o && i ? (D) => Pe(D, 'rightMargin') : void 0,
      }),
      jsx('div', {
        style: { position: 'absolute', inset: 0, pointerEvents: 'none' },
        children: Pt.map((D, Me) => jsx(Ua, { tick: D }, Me)),
      }),
      r$1 &&
        jsx(Vt, {
          direction: 'down',
          positionPx: $,
          editable: o,
          isDragging: S === 'firstLineIndent',
          isHovered: _ === 'firstLineIndent',
          onMouseEnter: () => L('firstLineIndent'),
          onMouseLeave: () => L(null),
          onMouseDown: (D) => Pe(D, 'firstLineIndent'),
          label: 'First line indent',
        }),
      o &&
        s$1 &&
        jsx(Vt, {
          direction: 'up',
          positionPx: qe,
          editable: o,
          isDragging: S === 'leftIndent',
          isHovered: _ === 'leftIndent',
          onMouseEnter: () => L('leftIndent'),
          onMouseLeave: () => L(null),
          onMouseDown: (D) => Pe(D, 'leftIndent'),
          label: 'Left indent',
        }),
      o &&
        f &&
        jsx(Vt, {
          direction: 'down',
          positionPx: at,
          editable: o,
          isDragging: S === 'rightIndent',
          isHovered: _ === 'rightIndent',
          onMouseEnter: () => L('rightIndent'),
          onMouseLeave: () => L(null),
          onMouseDown: (D) => Pe(D, 'rightIndent'),
          label: 'Right indent',
        }),
      y?.map((D) =>
        jsx(
          ja,
          { tabStop: D, positionPx: r(D.position) * t, onDoubleClick: () => P?.(D.position) },
          D.position
        )
      ),
      S && B$1 !== null && F !== null && jsx(Ka, { value: Ga(B$1, m), positionPx: F }),
    ],
  });
}
function Ua({ tick: e }) {
  return jsxs(Fragment, {
    children: [
      jsx('div', {
        style: {
          position: 'absolute',
          left: B(e.position),
          bottom: 0,
          width: 1,
          height: e.height,
          backgroundColor: za,
        },
      }),
      e.label &&
        jsx('div', {
          style: {
            position: 'absolute',
            left: B(e.position),
            top: 3,
            transform: 'translateX(-50%)',
            fontSize: '9px',
            color: Oa,
            fontFamily: 'sans-serif',
            whiteSpace: 'nowrap',
          },
          children: e.label,
        }),
    ],
  });
}
function Vt({
  direction: e,
  positionPx: t,
  editable: o,
  isDragging: n,
  isHovered: i,
  onMouseEnter: a,
  onMouseLeave: r,
  onMouseDown: p,
  label: d,
}) {
  let c = n ? Wa : i ? $a : Va,
    u = Math.round(Ne * 1.6),
    s = {
      position: 'absolute',
      left: B(t - Ne),
      width: Ne * 2,
      height: u + 2,
      cursor: o ? 'ew-resize' : 'default',
      zIndex: n ? 10 : 4,
      ...(e === 'down' ? { top: 0 } : { bottom: 0 }),
    },
    f =
      e === 'down'
        ? {
            position: 'absolute',
            top: 1,
            left: 0,
            width: 0,
            height: 0,
            borderLeft: `${Ne}px solid transparent`,
            borderRight: `${Ne}px solid transparent`,
            borderTop: `${u}px solid ${c}`,
            transition: 'border-top-color 0.1s',
          }
        : {
            position: 'absolute',
            bottom: 1,
            left: 0,
            width: 0,
            height: 0,
            borderLeft: `${Ne}px solid transparent`,
            borderRight: `${Ne}px solid transparent`,
            borderBottom: `${u}px solid ${c}`,
            transition: 'border-bottom-color 0.1s',
          };
  return jsx('div', {
    className: 'docx-ruler-indent',
    style: s,
    onMouseEnter: a,
    onMouseLeave: r,
    onMouseDown: p,
    role: 'slider',
    'aria-label': d,
    'aria-orientation': 'horizontal',
    tabIndex: o ? 0 : -1,
    children: jsx('div', { style: f }),
  });
}
function Ka({ value: e, positionPx: t }) {
  return jsx('div', {
    style: {
      position: 'absolute',
      left: B(t),
      top: -22,
      transform: 'translateX(-50%)',
      backgroundColor: '#333',
      color: '#fff',
      fontSize: '10px',
      fontFamily: 'sans-serif',
      padding: '2px 6px',
      borderRadius: 3,
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      zIndex: 20,
    },
    children: e,
  });
}
var Ya = { left: 'L', center: 'C', right: 'R', decimal: 'D', bar: '|' };
function ja({ tabStop: e, positionPx: t, onDoubleClick: o }) {
  return jsx('div', {
    style: {
      position: 'absolute',
      left: B(t - 5),
      bottom: 0,
      width: 10,
      height: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 8,
      fontWeight: 700,
      color: '#555',
      cursor: 'pointer',
      userSelect: 'none',
    },
    onDoubleClick: (n) => {
      (n.stopPropagation(), o());
    },
    title: `${e.alignment} tab at ${(e.position / 1440).toFixed(2)}"`,
    children: Ya[e.alignment] || 'L',
  });
}
function Xa(e, t, o) {
  let n = [];
  if (o === 'inch') {
    let i = Tt / 8,
      a = Math.ceil(e / i);
    for (let r$1 = 0; r$1 <= a; r$1++) {
      let p = r$1 * i;
      if (p > e) break;
      let d = r(p) * t;
      r$1 % 8 === 0
        ? n.push({ position: d, height: 10, label: r$1 / 8 > 0 ? String(r$1 / 8) : void 0 })
        : r$1 % 4 === 0
          ? n.push({ position: d, height: 6 })
          : r$1 % 2 === 0
            ? n.push({ position: d, height: 4 })
            : n.push({ position: d, height: 2 });
    }
  } else {
    let i = It / 10,
      a = Math.ceil(e / i);
    for (let r$1 = 0; r$1 <= a; r$1++) {
      let p = r$1 * i;
      if (p > e) break;
      let d = r(p) * t;
      r$1 % 10 === 0
        ? n.push({ position: d, height: 10, label: r$1 / 10 > 0 ? String(r$1 / 10) : void 0 })
        : r$1 % 5 === 0
          ? n.push({ position: d, height: 6 })
          : n.push({ position: d, height: 3 });
    }
  }
  return n;
}
function Dc(e, t, o, n) {
  let i = s(e / n);
  return t === 'left' ? Math.max(0, i) : Math.max(0, s(o / n) - i);
}
function Nc(e, t = 1) {
  let o = e?.pageWidth ?? nn,
    n = e?.marginLeft ?? Ct,
    i = e?.marginRight ?? Ct,
    a = r(o) * t,
    r$1 = r(n) * t,
    p = r(i) * t;
  return { width: a, leftMargin: r$1, rightMargin: p, contentWidth: a - r$1 - p };
}
function qc(e, t) {
  return t === 'inch' ? (e / Tt).toFixed(2) + '"' : (e / It).toFixed(1) + ' cm';
}
function Ac(e, t) {
  let o = parseFloat(e.replace(/[^\d.]/g, ''));
  return isNaN(o) ? null : Math.round(o * (t === 'inch' ? Tt : It));
}
var be = 16;
function el() {
  return jsx(b, { name: 'table_rows', size: be, style: { transform: 'scaleY(-1)' } });
}
function tl() {
  return jsx(b, { name: 'table_rows', size: be });
}
function ol() {
  return jsx(b, { name: 'view_column', size: be, style: { transform: 'scaleX(-1)' } });
}
function nl() {
  return jsx(b, { name: 'view_column', size: be });
}
function rl() {
  return jsx(b, { name: 'delete_sweep', size: be });
}
function il() {
  return jsx(b, { name: 'delete_sweep', size: be, style: { transform: 'rotate(90deg)' } });
}
function al() {
  return jsx(b, { name: 'call_merge', size: be });
}
function ll() {
  return jsx(b, { name: 'call_split', size: be });
}
function sl() {
  return jsx(b, { name: 'delete', size: be, className: 'text-red-600' });
}
var ae = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    padding: '4px 8px',
    backgroundColor: 'var(--doc-bg-subtle)',
    borderRadius: '4px',
    border: '1px solid var(--doc-border)',
    fontSize: '12px',
  },
  containerCompact: { padding: '2px 4px', gap: '2px' },
  containerFloating: {
    position: 'absolute',
    zIndex: 1e3,
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  },
  group: { display: 'flex', alignItems: 'center', gap: '2px' },
  separator: {
    width: '1px',
    height: '20px',
    backgroundColor: 'var(--doc-border-dark)',
    margin: '0 4px',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    padding: '4px 8px',
    border: 'none',
    borderRadius: '3px',
    backgroundColor: 'transparent',
    color: 'var(--doc-text)',
    cursor: 'pointer',
    fontSize: '12px',
    lineHeight: '1',
    transition: 'background-color 0.15s, color 0.15s',
  },
  buttonCompact: { padding: '3px 5px' },
  buttonHover: { backgroundColor: 'var(--doc-border)' },
  buttonDisabled: { color: 'var(--doc-text-subtle)', cursor: 'not-allowed' },
  buttonDelete: { color: 'var(--doc-error)' },
  label: {
    fontSize: '11px',
    fontWeight: 500,
    color: 'var(--doc-text-muted)',
    marginRight: '8px',
    whiteSpace: 'nowrap',
  },
};
function ge({
  action: e,
  label: t,
  icon: o,
  disabled: n = false,
  onClick: i,
  showLabel: a = false,
  compact: r = false,
  shortcut: p,
}) {
  let [d, c] = J__default.useState(false),
    u = typeof e == 'string' && e.startsWith('delete'),
    s = {
      ...ae.button,
      ...(r ? ae.buttonCompact : {}),
      ...(d && !n ? ae.buttonHover : {}),
      ...(n ? ae.buttonDisabled : {}),
      ...(u && !n ? ae.buttonDelete : {}),
    },
    f = p ? `${t} (${p})` : t;
  return jsxs('button', {
    type: 'button',
    className: `docx-table-toolbar-button docx-table-toolbar-${typeof e == 'string' ? e : e.type}`,
    style: s,
    disabled: n,
    onClick: i,
    onMouseEnter: () => c(true),
    onMouseLeave: () => c(false),
    title: f,
    'aria-label': t,
    children: [o, a && jsx('span', { children: t })],
  });
}
function $t({ children: e, showSeparator: t = true }) {
  return jsxs(Fragment, {
    children: [
      jsx('div', { style: ae.group, children: e }),
      t && jsx('div', { style: ae.separator }),
    ],
  });
}
function Vc({
  context: e,
  onAction: t,
  disabled: o = false,
  className: n,
  style: i,
  showLabels: a = false,
  compact: r = false,
  position: p = 'top',
  children: d,
}) {
  if (!e) return null;
  let c = (y) => {
      !o && t && e && t(y, e);
    },
    u = e.rowCount > 1,
    s = e.columnCount > 1,
    f = e.hasMultiCellSelection,
    m = e.canSplitCell,
    v = {
      ...ae.container,
      ...(r ? ae.containerCompact : {}),
      ...(p === 'floating' ? ae.containerFloating : {}),
      ...i,
    },
    g = ['docx-table-toolbar'];
  return (
    n && g.push(n),
    r && g.push('docx-table-toolbar-compact'),
    p === 'floating' && g.push('docx-table-toolbar-floating'),
    jsxs('div', {
      className: g.join(' '),
      style: v,
      role: 'toolbar',
      'aria-label': 'Table editing tools',
      children: [
        jsx('span', { style: ae.label, children: 'Table:' }),
        jsxs($t, {
          children: [
            jsx(ge, {
              action: 'addRowAbove',
              label: 'Insert Row Above',
              icon: jsx(el, {}),
              disabled: o,
              onClick: () => c('addRowAbove'),
              showLabel: a,
              compact: r,
            }),
            jsx(ge, {
              action: 'addRowBelow',
              label: 'Insert Row Below',
              icon: jsx(tl, {}),
              disabled: o,
              onClick: () => c('addRowBelow'),
              showLabel: a,
              compact: r,
            }),
            jsx(ge, {
              action: 'deleteRow',
              label: 'Delete Row',
              icon: jsx(rl, {}),
              disabled: o || !u,
              onClick: () => c('deleteRow'),
              showLabel: a,
              compact: r,
            }),
          ],
        }),
        jsxs($t, {
          children: [
            jsx(ge, {
              action: 'addColumnLeft',
              label: 'Insert Column Left',
              icon: jsx(ol, {}),
              disabled: o,
              onClick: () => c('addColumnLeft'),
              showLabel: a,
              compact: r,
            }),
            jsx(ge, {
              action: 'addColumnRight',
              label: 'Insert Column Right',
              icon: jsx(nl, {}),
              disabled: o,
              onClick: () => c('addColumnRight'),
              showLabel: a,
              compact: r,
            }),
            jsx(ge, {
              action: 'deleteColumn',
              label: 'Delete Column',
              icon: jsx(il, {}),
              disabled: o || !s,
              onClick: () => c('deleteColumn'),
              showLabel: a,
              compact: r,
            }),
          ],
        }),
        jsxs($t, {
          showSeparator: false,
          children: [
            jsx(ge, {
              action: 'mergeCells',
              label: 'Merge Cells',
              icon: jsx(al, {}),
              disabled: o || !f,
              onClick: () => c('mergeCells'),
              showLabel: a,
              compact: r,
            }),
            jsx(ge, {
              action: 'splitCell',
              label: 'Split Cell',
              icon: jsx(ll, {}),
              disabled: o || !m,
              onClick: () => c('splitCell'),
              showLabel: a,
              compact: r,
            }),
            jsx(ge, {
              action: 'deleteTable',
              label: 'Delete Table',
              icon: jsx(sl, {}),
              disabled: o,
              onClick: () => c('deleteTable'),
              showLabel: a,
              compact: r,
            }),
          ],
        }),
        d,
      ],
    })
  );
}
function $c(e, t) {
  let o = e.rows.length,
    n = Wt(e),
    i = !!(
      t.selectedCells &&
      (t.selectedCells.startRow !== t.selectedCells.endRow ||
        t.selectedCells.startCol !== t.selectedCells.endCol)
    ),
    a = an(e, t.rowIndex, t.columnIndex),
    r = !!(a && ((a.formatting?.gridSpan ?? 1) > 1 || a.formatting?.vMerge === 'restart'));
  return {
    table: e,
    selection: t,
    hasMultiCellSelection: i,
    canSplitCell: r,
    rowCount: o,
    columnCount: n,
  };
}
function Wt(e) {
  if (!e.rows.length) return 0;
  let t = 0;
  for (let o of e.rows) {
    let n = 0;
    for (let i of o.cells) n += i.formatting?.gridSpan ?? 1;
    t = Math.max(t, n);
  }
  return t;
}
function an(e, t, o) {
  let n = e.rows[t];
  if (!n) return null;
  let i = 0;
  for (let a of n.cells) {
    let r = a.formatting?.gridSpan ?? 1;
    if (o >= i && o < i + r) return a;
    i += r;
  }
  return null;
}
function cl(e, t) {
  let o = [],
    n = 0;
  for (let i of e.cells) {
    let a = i.formatting?.gridSpan ?? 1;
    (o.push({
      type: 'tableCell',
      content: [{ type: 'paragraph', content: [], formatting: {} }],
      formatting: { ...i.formatting, vMerge: void 0 },
    }),
      (n += a));
  }
  for (; n < t; )
    (o.push({
      type: 'tableCell',
      content: [{ type: 'paragraph', content: [], formatting: {} }],
      formatting: {},
    }),
      n++);
  return { type: 'tableRow', cells: o, formatting: { ...e.formatting, header: false } };
}
function pl() {
  return {
    type: 'tableCell',
    content: [{ type: 'paragraph', content: [], formatting: {} }],
    formatting: {},
  };
}
function Wc(e, t, o = 'after') {
  let n = [...e.rows],
    i = o === 'before' ? t : t + 1,
    a = e.rows[t] || e.rows[0],
    r = Wt(e),
    p = cl(a, r);
  return (n.splice(i, 0, p), { ...e, rows: n });
}
function Gc(e, t) {
  if (e.rows.length <= 1) return e;
  let o = e.rows.filter((n, i) => i !== t);
  return { ...e, rows: o };
}
function Uc(e, t, o = 'after') {
  let n = o === 'before' ? t : t + 1,
    i = e.rows.map((r) => {
      let p = [...r.cells],
        d = 0,
        c = 0;
      for (let u = 0; u < r.cells.length; u++) {
        let f = r.cells[u].formatting?.gridSpan ?? 1;
        if (n <= d + f) {
          c = o === 'before' ? u : u + 1;
          break;
        }
        ((d += f), (c = u + 1));
      }
      return (p.splice(c, 0, pl()), { ...r, cells: p });
    }),
    a = e.columnWidths;
  if (e.columnWidths && e.columnWidths.length > 0) {
    a = [...e.columnWidths];
    let r = e.columnWidths[t] || e.columnWidths[0] || 1440;
    a.splice(n, 0, r);
  }
  return { ...e, rows: i, columnWidths: a };
}
function Kc(e, t) {
  if (Wt(e) <= 1) return e;
  let n = e.rows.map((a) => {
      let r = 0,
        p = [];
      for (let d of a.cells) {
        let c = d.formatting?.gridSpan ?? 1;
        (t >= r && t < r + c
          ? c > 1 && p.push({ ...d, formatting: { ...d.formatting, gridSpan: c - 1 } })
          : p.push(d),
          (r += c));
      }
      return { ...a, cells: p };
    }),
    i = e.columnWidths;
  return (
    e.columnWidths && e.columnWidths.length > t && (i = e.columnWidths.filter((a, r) => r !== t)),
    { ...e, rows: n, columnWidths: i }
  );
}
function Yc(e, t) {
  if (!t.selectedCells) return e;
  let { startRow: o, startCol: n, endRow: i, endCol: a } = t.selectedCells,
    r = i - o + 1,
    p = a - n + 1,
    d = e.rows.map((c, u) => {
      if (u < o || u > i) return c;
      let s = [],
        f = 0;
      for (let m of c.cells) {
        let v = m.formatting?.gridSpan ?? 1,
          g = f + v - 1;
        (f <= a && g >= n
          ? u === o && f === n
            ? s.push({
                ...m,
                formatting: { ...m.formatting, gridSpan: p, vMerge: r > 1 ? 'restart' : void 0 },
              })
            : u > o &&
              f === n &&
              s.push({ ...m, formatting: { ...m.formatting, gridSpan: p, vMerge: 'continue' } })
          : s.push(m),
          (f += v));
      }
      return { ...c, cells: s };
    });
  return { ...e, rows: d };
}
function jc(e, t, o) {
  let n = an(e, t, o);
  if (!n) return e;
  let i = n.formatting?.gridSpan ?? 1,
    a = n.formatting?.vMerge === 'restart';
  if (i <= 1 && !a) return e;
  let r = e.rows.map((p, d) => {
    if (d !== t && !a) return p;
    let c = [],
      u = 0;
    for (let s of p.cells) {
      let f = s.formatting?.gridSpan ?? 1;
      if (u === o || (u <= o && o < u + f))
        if (i > 1)
          for (let m = 0; m < i; m++)
            c.push({
              type: 'tableCell',
              content: m === 0 ? s.content : [{ type: 'paragraph', content: [], formatting: {} }],
              formatting: { ...s.formatting, gridSpan: void 0, vMerge: void 0 },
            });
        else
          a && d === t
            ? c.push({ ...s, formatting: { ...s.formatting, vMerge: void 0 } })
            : s.formatting?.vMerge === 'continue'
              ? c.push({
                  type: 'tableCell',
                  content: [{ type: 'paragraph', content: [], formatting: {} }],
                  formatting: { ...s.formatting, vMerge: void 0 },
                })
              : c.push(s);
      else c.push(s);
      u += f;
    }
    return { ...p, cells: c };
  });
  return { ...e, rows: r };
}
var Qc = 'application/x-docx-editor',
  j = { HTML: 'text/html', PLAIN: 'text/plain' };
async function ln(e, t = {}) {
  let { includeFormatting: o = true, onError: n } = t;
  try {
    let i = Gt(e, o);
    return await wt(i);
  } catch (i) {
    return (n?.(i), false);
  }
}
async function ep(e, t = {}) {
  let { includeFormatting: o = true, onError: n } = t;
  try {
    let i = dl(e, o);
    return await wt(i);
  } catch (i) {
    return (n?.(i), false);
  }
}
function Gt(e, t = true) {
  let o = e.map(Yt).join(''),
    n = t ? dn(e) : jt(o),
    i = JSON.stringify(e);
  return { plainText: o, html: n, internal: i };
}
function dl(e, t = true) {
  let o = e.map(yl).join(`
`),
    n = t ? Sl(e) : jt(o),
    i = JSON.stringify(e);
  return { plainText: o, html: n, internal: i };
}
async function wt(e) {
  try {
    if (navigator.clipboard && navigator.clipboard.write) {
      let t = [
        new ClipboardItem({
          [j.PLAIN]: new Blob([e.plainText], { type: j.PLAIN }),
          [j.HTML]: new Blob([e.html], { type: j.HTML }),
        }),
      ];
      return (await navigator.clipboard.write(t), !0);
    }
    return sn(e);
  } catch {
    return sn(e);
  }
}
function sn(e) {
  let t = document.createElement('div');
  ((t.innerHTML = e.html),
    (t.style.position = 'fixed'),
    (t.style.left = '-9999px'),
    document.body.appendChild(t));
  try {
    let o = window.getSelection();
    if (!o) return !1;
    let n = document.createRange();
    (n.selectNodeContents(t), o.removeAllRanges(), o.addRange(n));
    let i = document.execCommand('copy');
    return (o.removeAllRanges(), i);
  } finally {
    document.body.removeChild(t);
  }
}
async function tp(e = {}) {
  let { cleanWordFormatting: t = true, onError: o } = e;
  try {
    if (navigator.clipboard && navigator.clipboard.read) {
      let n = await navigator.clipboard.read();
      return await ml(n, t);
    }
    return null;
  } catch (n) {
    return (o?.(n), null);
  }
}
async function ml(e, t) {
  let o = '',
    n = '';
  for (let i of e)
    (i.types.includes(j.HTML) && (o = await (await i.getType(j.HTML)).text()),
      i.types.includes(j.PLAIN) && (n = await (await i.getType(j.PLAIN)).text()));
  return un(o, n, t);
}
function fl(e, t = {}) {
  let { cleanWordFormatting: o = true } = t,
    n = e.clipboardData;
  if (!n) return null;
  let i = n.getData(j.HTML),
    a = n.getData(j.PLAIN);
  return un(i, a, o);
}
function un(e, t, o = true) {
  let n = hl(e),
    i = vl(e);
  if (i) {
    let p = e.match(/data-docx-editor-content="([^"]+)"/);
    if (p)
      try {
        return {
          runs: JSON.parse(decodeURIComponent(p[1])),
          fromWord: !1,
          fromEditor: !0,
          plainText: t,
        };
      } catch {}
  }
  let a = e;
  return (n && o && (a = gl(e)), { runs: bl(a, t), fromWord: n, fromEditor: i, plainText: t });
}
function hl(e) {
  return (
    e.includes('urn:schemas-microsoft-com:office') ||
    e.includes('mso-') ||
    e.includes('MsoNormal') ||
    e.includes('class="Mso') ||
    e.includes('<!--[if gte mso')
  );
}
function vl(e) {
  return e.includes('data-docx-editor') || e.includes('docx-run') || e.includes('docx-paragraph');
}
function gl(e) {
  let t = e;
  return (
    (t = t.replace(/<!--\[if[\s\S]*?<!\[endif\]-->/gi, '')),
    (t = t.replace(/<!--[\s\S]*?-->/g, '')),
    (t = t.replace(/<\?xml[^>]*>/gi, '')),
    (t = t.replace(/<o:[^>]*>[\s\S]*?<\/o:[^>]*>/gi, '')),
    (t = t.replace(/<o:[^>]*\/>/gi, '')),
    (t = t.replace(/<w:[^>]*>[\s\S]*?<\/w:[^>]*>/gi, '')),
    (t = t.replace(/<w:[^>]*\/>/gi, '')),
    (t = t.replace(/\s*mso-[^:;]+:[^;]+;?/gi, '')),
    (t = t.replace(/\s*style="\s*"/gi, '')),
    (t = t.replace(/\s*class="[^"]*Mso[^"]*"/gi, '')),
    (t = t.replace(/<span[^>]*>\s*<\/span>/gi, '')),
    (t = t.replace(/<\/?font[^>]*>/gi, '')),
    (t = t.replace(/\s+/g, ' ').trim()),
    t
  );
}
function bl(e, t) {
  if (!e || e.trim() === '') return t ? [Kt(t)] : [];
  let o = document.createElement('div');
  o.innerHTML = e;
  let n = [];
  return (Ut(o, n, {}), n.length === 0 && t ? [Kt(t)] : n);
}
function Ut(e, t, o) {
  if (e.nodeType === Node.TEXT_NODE) {
    let r = e.textContent || '';
    (r.trim() || r.includes(' ')) && t.push(Kt(r, o));
    return;
  }
  if (e.nodeType !== Node.ELEMENT_NODE) return;
  let n = e,
    i = n.tagName.toLowerCase(),
    a = { ...o, ...xl(n) };
  switch (i) {
    case 'br':
      t.push(pn(a));
      return;
    case 'p':
    case 'div':
      for (let r of n.childNodes) Ut(r, t, a);
      n.nextSibling && t.push(pn(a));
      return;
    case 'b':
    case 'strong':
      a.bold = true;
      break;
    case 'i':
    case 'em':
      a.italic = true;
      break;
    case 'u':
      a.underline = { style: 'single' };
      break;
    case 's':
    case 'strike':
    case 'del':
      a.strike = true;
      break;
    case 'sup':
      a.vertAlign = 'superscript';
      break;
    case 'sub':
      a.vertAlign = 'subscript';
      break;
    case 'code':
    case 'pre':
      a.fontFamily = { ascii: 'Courier New' };
      break;
  }
  for (let r of n.childNodes) Ut(r, t, a);
}
function xl(e) {
  let t = {},
    o = e.style;
  ((o.fontWeight === 'bold' || parseInt(o.fontWeight) >= 700) && (t.bold = true),
    o.fontStyle === 'italic' && (t.italic = true));
  let n = o.textDecoration || o.textDecorationLine;
  if (
    (n &&
      (n.includes('underline') && (t.underline = { style: 'single' }),
      n.includes('line-through') && (t.strike = true)),
    o.fontSize)
  ) {
    let i = parseFloat(o.fontSize);
    isNaN(i) || (t.fontSize = Math.round((i / 1.333) * 2));
  }
  if (o.fontFamily) {
    let i = o.fontFamily.replace(/["']/g, '').split(',')[0].trim();
    i && (t.fontFamily = { ascii: i });
  }
  if (o.color) {
    let i = cn(o.color);
    i && (t.color = { rgb: i });
  }
  if (o.backgroundColor && o.backgroundColor !== 'transparent') {
    let i = cn(o.backgroundColor);
    i && (t.shading = { fill: { rgb: i } });
  }
  return t;
}
function cn(e) {
  if (!e || e === 'transparent' || e === 'inherit') return null;
  if (e.startsWith('#')) return e.slice(1).toUpperCase();
  let t = e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (t) {
    let o = parseInt(t[1]).toString(16).padStart(2, '0'),
      n = parseInt(t[2]).toString(16).padStart(2, '0'),
      i = parseInt(t[3]).toString(16).padStart(2, '0');
    return (o + n + i).toUpperCase();
  }
  return null;
}
function Yt(e) {
  return e.content
    .map((t) =>
      t.type === 'text'
        ? t.text
        : t.type === 'tab'
          ? '	'
          : t.type === 'break' && t.breakType === 'textWrapping'
            ? `
`
            : ''
    )
    .join('');
}
function yl(e) {
  return (e.content || []).map((t) => (t.type === 'run' ? Yt(t) : '')).join('');
}
function dn(e) {
  return e.map(Cl).join('');
}
function Sl(e) {
  return e.map((t) => `<p>${dn(t.content?.filter((o) => o.type === 'run') || [])}</p>`).join('');
}
function Cl(e) {
  let t = Yt(e);
  if (!t) return '';
  let o = jt(t),
    n = e.formatting;
  if (!n) return o;
  (n.bold && (o = `<strong>${o}</strong>`),
    n.italic && (o = `<em>${o}</em>`),
    n.underline && (o = `<u>${o}</u>`),
    n.strike && (o = `<s>${o}</s>`),
    n.vertAlign === 'superscript' && (o = `<sup>${o}</sup>`),
    n.vertAlign === 'subscript' && (o = `<sub>${o}</sub>`));
  let i = [];
  if (n.fontSize) {
    let a = n.fontSize / 2;
    i.push(`font-size: ${a}pt`);
  }
  return (
    n.fontFamily?.ascii && i.push(`font-family: "${n.fontFamily.ascii}"`),
    n.color?.rgb && i.push(`color: #${n.color.rgb}`),
    n.shading?.fill?.rgb && i.push(`background-color: #${n.shading.fill.rgb}`),
    i.length > 0 && (o = `<span style="${i.join('; ')}">${o}</span>`),
    o
  );
}
function jt(e) {
  return e
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
function Kt(e, t) {
  return { type: 'run', formatting: t, content: [{ type: 'text', text: e }] };
}
function pn(e) {
  return { type: 'run', formatting: e, content: [{ type: 'break', breakType: 'textWrapping' }] };
}
function op(e) {
  let { onCopy: t, onCut: o, onPaste: n, clipboardOptions: i = {} } = e;
  return {
    handleCopy: async (c) => {
      if (!t) return;
      let u = t();
      if (!u) return;
      c.preventDefault();
      let s = Gt(u.runs);
      c.clipboardData
        ? (c.clipboardData.setData(j.PLAIN, s.plainText), c.clipboardData.setData(j.HTML, s.html))
        : await wt(s);
    },
    handleCut: async (c) => {
      if (!o) return;
      let u = o();
      if (!u) return;
      c.preventDefault();
      let s = Gt(u.runs);
      c.clipboardData
        ? (c.clipboardData.setData(j.PLAIN, s.plainText), c.clipboardData.setData(j.HTML, s.html))
        : await wt(s);
    },
    handlePaste: (c) => {
      if (!n) return;
      c.preventDefault();
      let u = fl(c, i);
      u && n(u);
    },
    handleKeyDown: async (c) => {
      let u = c.ctrlKey || c.metaKey;
      if (u && c.key === 'c' && !c.shiftKey && t) {
        let s = t();
        s && (await ln(s.runs, i));
      }
      if (u && c.key === 'x' && !c.shiftKey && o) {
        let s = o();
        s && (await ln(s.runs, i));
      }
    },
  };
}
export {
  Yc as $,
  Pa as A,
  dc as B,
  mc as C,
  fc as D,
  hc as E,
  vc as F,
  gc as G,
  Cc as H,
  Tc as I,
  Ic as J,
  wc as K,
  Pc as L,
  Mc as M,
  Rc as N,
  _c as O,
  Dc as P,
  Nc as Q,
  qc as R,
  Ac as S,
  Vc as T,
  $c as U,
  Wt as V,
  an as W,
  Wc as X,
  Gc as Y,
  Uc as Z,
  Kc as _,
  w as a,
  jc as aa,
  oo as b,
  Qc as ba,
  G as c,
  j as ca,
  b as d,
  ln as da,
  Y as e,
  ep as ea,
  jl as f,
  Gt as fa,
  mo as g,
  dl as ga,
  He as h,
  wt as ha,
  ee as i,
  tp as ia,
  Co as j,
  fl as ja,
  Io as k,
  un as ka,
  wo as l,
  hl as la,
  Mo as m,
  vl as ma,
  ko as n,
  gl as na,
  Lo as o,
  bl as oa,
  Eo as p,
  op as pa,
  _o as q,
  No as r,
  qo as s,
  Oo as t,
  Es as u,
  re as v,
  ve as w,
  ic as x,
  ac as y,
  uc as z,
}; //# sourceMappingURL=chunk-4HBVK3KZ.js.map
//# sourceMappingURL=chunk-4HBVK3KZ.js.map
