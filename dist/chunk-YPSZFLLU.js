import { a as a$1, b as b$1 } from './chunk-AERG4WCW.js';
import { c } from './chunk-Y6VCTLCJ.js';
function a(e) {
  return e
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
function le(e) {
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
function ce(e) {
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
function b(e) {
  if (!e) return '';
  let t = [];
  if ((e.styleId && t.push(`<w:rStyle w:val="${a(e.styleId)}"/>`), e.fontFamily)) {
    let i = [];
    (e.fontFamily.ascii && i.push(`w:ascii="${a(e.fontFamily.ascii)}"`),
      e.fontFamily.hAnsi && i.push(`w:hAnsi="${a(e.fontFamily.hAnsi)}"`),
      e.fontFamily.eastAsia && i.push(`w:eastAsia="${a(e.fontFamily.eastAsia)}"`),
      e.fontFamily.cs && i.push(`w:cs="${a(e.fontFamily.cs)}"`),
      e.fontFamily.asciiTheme && i.push(`w:asciiTheme="${e.fontFamily.asciiTheme}"`),
      e.fontFamily.hAnsiTheme && i.push(`w:hAnsiTheme="${e.fontFamily.hAnsiTheme}"`),
      e.fontFamily.eastAsiaTheme && i.push(`w:eastAsiaTheme="${e.fontFamily.eastAsiaTheme}"`),
      e.fontFamily.csTheme && i.push(`w:csTheme="${e.fontFamily.csTheme}"`),
      i.length > 0 && t.push(`<w:rFonts ${i.join(' ')}/>`));
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
  let n = le(e.color);
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
    let i = [`w:val="${e.underline.style}"`];
    (e.underline.color &&
      (e.underline.color.rgb && i.push(`w:color="${e.underline.color.rgb}"`),
      e.underline.color.themeColor && i.push(`w:themeColor="${e.underline.color.themeColor}"`),
      e.underline.color.themeTint && i.push(`w:themeTint="${e.underline.color.themeTint}"`),
      e.underline.color.themeShade && i.push(`w:themeShade="${e.underline.color.themeShade}"`)),
      t.push(`<w:u ${i.join(' ')}/>`));
  }
  (e.effect && e.effect !== 'none' && t.push(`<w:effect w:val="${e.effect}"/>`),
    e.emphasisMark && e.emphasisMark !== 'none' && t.push(`<w:em w:val="${e.emphasisMark}"/>`));
  let r = ce(e.shading);
  return (
    r && t.push(r),
    e.vertAlign && e.vertAlign !== 'baseline' && t.push(`<w:vertAlign w:val="${e.vertAlign}"/>`),
    e.rtl && t.push('<w:rtl/>'),
    e.cs && t.push('<w:cs/>'),
    t.length === 0 ? '' : `<w:rPr>${t.join('')}</w:rPr>`
  );
}
function pe(e) {
  return !e.startsWith('<w:rPr>') || !e.endsWith('</w:rPr>') ? '' : e.slice(7, -8);
}
function fe(e) {
  let t = Number.isInteger(e.info.id) && e.info.id >= 0 ? e.info.id : 0,
    n = typeof e.info.author == 'string' ? e.info.author.trim() : '',
    r = n.length > 0 ? n : 'Unknown',
    i = typeof e.info.date == 'string' ? e.info.date.trim() : void 0,
    o = typeof e.info.rsid == 'string' ? e.info.rsid.trim() : void 0,
    l = [`w:id="${t}"`, `w:author="${a(r)}"`];
  (i && l.push(`w:date="${a(i)}"`), o && l.push(`w:rsid="${a(o)}"`));
  let s = b(e.previousFormatting) || '<w:rPr/>';
  return `<w:rPrChange ${l.join(' ')}>${s}</w:rPrChange>`;
}
function ue(e, t) {
  let n = b(e),
    r = n ? pe(n) : '',
    i = (t ?? []).map(fe).join(''),
    o = `${r}${i}`;
  return o ? `<w:rPr>${o}</w:rPr>` : '';
}
function me(e) {
  return `<w:t${e.preserveSpace || e.text.startsWith(' ') || e.text.endsWith(' ') || e.text.includes('  ') ? ' xml:space="preserve"' : ''}>${a(e.text)}</w:t>`;
}
function he(e) {
  return '<w:tab/>';
}
function de(e) {
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
function we(e) {
  return `<w:sym w:font="${a(e.font)}" w:char="${a(e.char)}"/>`;
}
function ge(e) {
  return e.type === 'footnoteRef'
    ? `<w:footnoteReference w:id="${e.id}"/>`
    : `<w:endnoteReference w:id="${e.id}"/>`;
}
function ye(e) {
  let t = [`w:fldCharType="${e.charType}"`];
  return (
    e.fldLock && t.push('w:fldLock="true"'),
    e.dirty && t.push('w:dirty="true"'),
    `<w:fldChar ${t.join(' ')}/>`
  );
}
function xe(e) {
  return `<w:instrText${e.text.startsWith(' ') || e.text.endsWith(' ') || e.text.includes('  ') ? ' xml:space="preserve"' : ''}>${a(e.text)}</w:instrText>`;
}
function $e(e) {
  return '<w:softHyphen/>';
}
function Te(e) {
  return '<w:noBreakHyphen/>';
}
function k(e) {
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
function Pe(e) {
  if (!e || e.type === 'none') return '<a:noFill/>';
  if (e.type === 'solid' && e.color) return `<a:solidFill>${k(e.color)}</a:solidFill>`;
  if (e.type === 'gradient' && e.gradient) {
    let t = e.gradient,
      n = t.stops.map((i) => `<a:gs pos="${i.position}">${k(i.color)}</a:gs>`).join(''),
      r = t.type === 'linear' ? `<a:lin ang="${(t.angle || 0) * 6e4}" scaled="1"/>` : '';
    return `<a:gradFill><a:gsLst>${n}</a:gsLst>${r}</a:gradFill>`;
  }
  return '';
}
function X(e) {
  if (!e) return '';
  let t = [];
  (e.width != null && t.push(`w="${e.width}"`), e.cap && t.push(`cap="${e.cap}"`));
  let n = [];
  return (
    e.color && n.push(`<a:solidFill>${k(e.color)}</a:solidFill>`),
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
function L(e) {
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
function O(e) {
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
function be(e) {
  let t = e.size.width,
    n = e.size.height,
    r = e.rId || 'rId1',
    i = e.id || '0',
    o = e.filename || `image${i}`,
    l = '';
  return (
    e.transform?.rotation && (l += ` rot="${Math.round(e.transform.rotation * 6e4)}"`),
    e.transform?.flipH && (l += ' flipH="1"'),
    e.transform?.flipV && (l += ' flipV="1"'),
    [
      '<a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">',
      '<a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture">',
      '<pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture">',
      '<pic:nvPicPr>',
      `<pic:cNvPr id="${i}" name="${a(o)}"${e.alt ? ` descr="${a(e.alt)}"` : ''}/>`,
      '<pic:cNvPicPr/>',
      '</pic:nvPicPr>',
      '<pic:blipFill>',
      `<a:blip r:embed="${r}"/>`,
      '<a:stretch><a:fillRect/></a:stretch>',
      '</pic:blipFill>',
      '<pic:spPr>',
      `<a:xfrm${l}>`,
      '<a:off x="0" y="0"/>',
      `<a:ext cx="${t}" cy="${n}"/>`,
      '</a:xfrm>',
      '<a:prstGeom prst="rect"><a:avLst/></a:prstGeom>',
      e.outline ? X(e.outline) : '',
      '</pic:spPr>',
      '</pic:pic>',
      '</a:graphicData>',
      '</a:graphic>',
    ].join('')
  );
}
function ve(e) {
  let t = e.image,
    n = t.wrap.type !== 'inline',
    r = t.size.width,
    i = t.size.height,
    o = t.padding?.top ?? t.wrap.distT ?? 0,
    l = t.padding?.bottom ?? t.wrap.distB ?? 0,
    s = t.padding?.left ?? t.wrap.distL ?? 0,
    p = t.padding?.right ?? t.wrap.distR ?? 0,
    c = t.id || '1',
    f = t.title || t.filename || `Picture ${c}`,
    m = be(t);
  if (!n)
    return [
      '<w:drawing>',
      `<wp:inline distT="${o}" distB="${l}" distL="${s}" distR="${p}">`,
      `<wp:extent cx="${r}" cy="${i}"/>`,
      '<wp:effectExtent l="0" t="0" r="0" b="0"/>',
      `<wp:docPr id="${c}" name="${a(f)}"${t.alt ? ` descr="${a(t.alt)}"` : ''}${t.decorative ? ' hidden="1"' : ''}/>`,
      '<wp:cNvGraphicFramePr><a:graphicFrameLocks xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" noChangeAspect="1"/></wp:cNvGraphicFramePr>',
      m,
      '</wp:inline>',
      '</w:drawing>',
    ].join('');
  let u = t.wrap.type === 'behind' ? '1' : '0',
    h = t.position
      ? L(t.position)
      : '<wp:positionH relativeFrom="column"><wp:posOffset>0</wp:posOffset></wp:positionH><wp:positionV relativeFrom="paragraph"><wp:posOffset>0</wp:posOffset></wp:positionV>',
    g = O(t.wrap);
  return [
    '<w:drawing>',
    `<wp:anchor distT="${o}" distB="${l}" distL="${s}" distR="${p}" simplePos="0" relativeHeight="251658240" behindDoc="${u}" locked="0" layoutInCell="1" allowOverlap="1">`,
    '<wp:simplePos x="0" y="0"/>',
    h,
    `<wp:extent cx="${r}" cy="${i}"/>`,
    '<wp:effectExtent l="0" t="0" r="0" b="0"/>',
    g,
    `<wp:docPr id="${c}" name="${a(f)}"${t.alt ? ` descr="${a(t.alt)}"` : ''}/>`,
    '<wp:cNvGraphicFramePr><a:graphicFrameLocks xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" noChangeAspect="1"/></wp:cNvGraphicFramePr>',
    m,
    '</wp:anchor>',
    '</w:drawing>',
  ].join('');
}
function Ce(e) {
  return e.map((t) => $(t)).join('');
}
function Fe(e) {
  let t = e.shape,
    n = t.size.width,
    r = t.size.height,
    i = t.shapeType === 'textBox',
    o = t.wrap && t.wrap.type !== 'inline',
    l = t.wrap?.distT ?? 0,
    s = t.wrap?.distB ?? 0,
    p = t.wrap?.distL ?? 0,
    c = t.wrap?.distR ?? 0,
    f = t.id || '1',
    m = t.name || (i ? `TextBox ${f}` : `Shape ${f}`),
    u = '';
  (t.transform?.rotation && (u += ` rot="${Math.round(t.transform.rotation * 6e4)}"`),
    t.transform?.flipH && (u += ' flipH="1"'),
    t.transform?.flipV && (u += ' flipV="1"'));
  let h = [
      '<wps:spPr>',
      `<a:xfrm${u}>`,
      '<a:off x="0" y="0"/>',
      `<a:ext cx="${n}" cy="${r}"/>`,
      '</a:xfrm>',
      `<a:prstGeom prst="${t.shapeType === 'textBox' ? 'rect' : t.shapeType}"><a:avLst/></a:prstGeom>`,
      Pe(t.fill),
      X(t.outline),
      '</wps:spPr>',
    ].join(''),
    g = '';
  if (t.textBody) {
    let d = t.textBody,
      x = ['rot="0"', 'vert="horz"'];
    (d.anchor && x.push(`anchor="${d.anchor === 'middle' ? 'ctr' : d.anchor}"`),
      d.anchorCenter && x.push('anchorCtr="1"'),
      d.margins &&
        (d.margins.left != null && x.push(`lIns="${d.margins.left}"`),
        d.margins.top != null && x.push(`tIns="${d.margins.top}"`),
        d.margins.right != null && x.push(`rIns="${d.margins.right}"`),
        d.margins.bottom != null && x.push(`bIns="${d.margins.bottom}"`)),
      i
        ? (g = [
            '<wps:txbx><w:txbxContent>',
            Ce(d.content),
            '</w:txbxContent></wps:txbx>',
            `<wps:bodyPr ${x.join(' ')}/>`,
          ].join(''))
        : (g = [`<wps:bodyPr ${x.join(' ')}/>`].join('')));
  }
  let j = [
    '<a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">',
    '<a:graphicData uri="http://schemas.microsoft.com/office/word/2010/wordprocessingShape">',
    ['<wps:wsp>', `<wps:cNvSpPr${i ? ' txBox="1"' : ''}/>`, h, g, '</wps:wsp>'].join(''),
    '</a:graphicData>',
    '</a:graphic>',
  ].join('');
  if (!o)
    return [
      '<w:drawing>',
      `<wp:inline distT="${l}" distB="${s}" distL="${p}" distR="${c}">`,
      `<wp:extent cx="${n}" cy="${r}"/>`,
      '<wp:effectExtent l="0" t="0" r="0" b="0"/>',
      `<wp:docPr id="${f}" name="${a(m)}"/>`,
      '<wp:cNvGraphicFramePr/>',
      j,
      '</wp:inline>',
      '</w:drawing>',
    ].join('');
  let re = t.wrap?.type === 'behind' ? '1' : '0',
    ie = t.position
      ? L(t.position)
      : '<wp:positionH relativeFrom="column"><wp:posOffset>0</wp:posOffset></wp:positionH><wp:positionV relativeFrom="paragraph"><wp:posOffset>0</wp:posOffset></wp:positionV>',
    oe = O(t.wrap);
  return [
    '<w:drawing>',
    `<wp:anchor distT="${l}" distB="${s}" distL="${p}" distR="${c}" simplePos="0" relativeHeight="251658240" behindDoc="${re}" locked="0" layoutInCell="1" allowOverlap="1">`,
    '<wp:simplePos x="0" y="0"/>',
    ie,
    `<wp:extent cx="${n}" cy="${r}"/>`,
    '<wp:effectExtent l="0" t="0" r="0" b="0"/>',
    oe,
    `<wp:docPr id="${f}" name="${a(m)}"/>`,
    '<wp:cNvGraphicFramePr/>',
    j,
    '</wp:anchor>',
    '</w:drawing>',
  ].join('');
}
function Se(e) {
  switch (e.type) {
    case 'text':
      return me(e);
    case 'tab':
      return he();
    case 'break':
      return de(e);
    case 'symbol':
      return we(e);
    case 'footnoteRef':
    case 'endnoteRef':
      return ge(e);
    case 'fieldChar':
      return ye(e);
    case 'instrText':
      return xe(e);
    case 'softHyphen':
      return $e();
    case 'noBreakHyphen':
      return Te();
    case 'drawing':
      return ve(e);
    case 'shape':
      return Fe(e);
    default:
      return '';
  }
}
function y(e) {
  let t = [],
    n = ue(e.formatting, e.propertyChanges);
  n && t.push(n);
  for (let r of e.content) {
    let i = Se(r);
    i && t.push(i);
  }
  return `<w:r>${t.join('')}</w:r>`;
}
function v(e, t) {
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
function Re(e) {
  if (!e) return '';
  let t = [];
  if (e.top) {
    let n = v(e.top, 'top');
    n && t.push(n);
  }
  if (e.left) {
    let n = v(e.left, 'left');
    n && t.push(n);
  }
  if (e.bottom) {
    let n = v(e.bottom, 'bottom');
    n && t.push(n);
  }
  if (e.right) {
    let n = v(e.right, 'right');
    n && t.push(n);
  }
  if (e.between) {
    let n = v(e.between, 'between');
    n && t.push(n);
  }
  if (e.bar) {
    let n = v(e.bar, 'bar');
    n && t.push(n);
  }
  return t.length === 0 ? '' : `<w:pBdr>${t.join('')}</w:pBdr>`;
}
function ze(e) {
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
function Ae(e) {
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
function De(e) {
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
function ke(e) {
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
function Ie(e) {
  if (!e) return '';
  let t = [];
  return (
    e.ilvl !== void 0 && t.push(`<w:ilvl w:val="${e.ilvl}"/>`),
    e.numId !== void 0 && t.push(`<w:numId w:val="${e.numId}"/>`),
    t.length === 0 ? '' : `<w:numPr>${t.join('')}</w:numPr>`
  );
}
function Be(e) {
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
function H(e, t) {
  let n = [];
  if (e) {
    (e.styleId && n.push(`<w:pStyle w:val="${a(e.styleId)}"/>`),
      e.keepNext && n.push('<w:keepNext/>'),
      e.keepLines && n.push('<w:keepLines/>'),
      e.contextualSpacing && n.push('<w:contextualSpacing/>'),
      e.pageBreakBefore && n.push('<w:pageBreakBefore/>'));
    let r = Be(e.frame);
    (r && n.push(r),
      e.widowControl === false
        ? n.push('<w:widowControl w:val="0"/>')
        : e.widowControl === true && n.push('<w:widowControl/>'));
    let i = Ie(e.numPr);
    i && n.push(i);
    let o = Re(e.borders);
    o && n.push(o);
    let l = ze(e.shading);
    l && n.push(l);
    let s = Ae(e.tabs);
    (s && n.push(s),
      e.suppressLineNumbers && n.push('<w:suppressLineNumbers/>'),
      e.suppressAutoHyphens && n.push('<w:suppressAutoHyphens/>'));
    let p = De(e);
    p && n.push(p);
    let c = ke(e);
    if (
      (c && n.push(c),
      e.bidi && n.push('<w:bidi/>'),
      e.alignment && n.push(`<w:jc w:val="${e.alignment}"/>`),
      e.outlineLevel !== void 0 && n.push(`<w:outlineLvl w:val="${e.outlineLevel}"/>`),
      e.runProperties)
    ) {
      let f = b(e.runProperties);
      f && n.push(f);
    }
  }
  return (
    t && t.length > 0 && n.push(...t.map((r) => je(r))),
    n.length === 0 ? '' : `<w:pPr>${n.join('')}</w:pPr>`
  );
}
function Ee(e) {
  return !e.startsWith('<w:pPr>') || !e.endsWith('</w:pPr>') ? '' : e.slice(7, -8);
}
function je(e) {
  let t = Number.isInteger(e.info.id) && e.info.id >= 0 ? e.info.id : 0,
    n = typeof e.info.author == 'string' ? e.info.author.trim() : '',
    r = n.length > 0 ? n : 'Unknown',
    i = typeof e.info.date == 'string' ? e.info.date.trim() : void 0,
    o = typeof e.info.rsid == 'string' ? e.info.rsid.trim() : void 0,
    l = [`w:id="${t}"`, `w:author="${a(r)}"`];
  (i && l.push(`w:date="${a(i)}"`), o && l.push(`w:rsid="${a(o)}"`));
  let s = H(e.previousFormatting) || '<w:pPr/>',
    p = Ee(s),
    c = p.length > 0 ? `<w:pPr>${p}</w:pPr>` : '<w:pPr/>';
  return `<w:pPrChange ${l.join(' ')}>${c}</w:pPrChange>`;
}
function I(e) {
  let t = [];
  (e.rId && t.push(`r:id="${e.rId}"`),
    e.anchor && t.push(`w:anchor="${a(e.anchor)}"`),
    e.tooltip && t.push(`w:tooltip="${a(e.tooltip)}"`),
    e.target && t.push(`w:tgtFrame="${a(e.target)}"`),
    e.history === false && t.push('w:history="0"'),
    e.docLocation && t.push(`w:docLocation="${a(e.docLocation)}"`));
  let n = e.children
    .map((i) =>
      i.type === 'run'
        ? y(i)
        : i.type === 'bookmarkStart'
          ? N(i)
          : i.type === 'bookmarkEnd'
            ? W(i)
            : ''
    )
    .join('');
  return `<w:hyperlink${t.length > 0 ? ' ' + t.join(' ') : ''}>${n}</w:hyperlink>`;
}
function N(e) {
  let t = [`w:id="${e.id}"`, `w:name="${a(e.name)}"`];
  return (
    e.colFirst !== void 0 && t.push(`w:colFirst="${e.colFirst}"`),
    e.colLast !== void 0 && t.push(`w:colLast="${e.colLast}"`),
    `<w:bookmarkStart ${t.join(' ')}/>`
  );
}
function W(e) {
  return `<w:bookmarkEnd w:id="${e.id}"/>`;
}
function Xe(e) {
  let t = [],
    n = e.content.find((s) => s.type === 'run'),
    r = n?.formatting ? b(n.formatting) : '',
    i = ['w:fldCharType="begin"'];
  (e.fldLock && i.push('w:fldLock="true"'), t.push(`<w:r>${r}<w:fldChar ${i.join(' ')}/></w:r>`));
  let l =
    e.instruction.startsWith(' ') || e.instruction.endsWith(' ') || e.instruction.includes('  ')
      ? ' xml:space="preserve"'
      : '';
  (t.push(`<w:r>${r}<w:instrText${l}>${a(e.instruction)}</w:instrText></w:r>`),
    t.push(`<w:r>${r}<w:fldChar w:fldCharType="separate"/></w:r>`));
  for (let s of e.content) s.type === 'run' && t.push(y(s));
  return (t.push(`<w:r>${r}<w:fldChar w:fldCharType="end"/></w:r>`), t.join(''));
}
function Le(e) {
  let t = [],
    n = e.fieldResult?.[0]?.formatting,
    r = n ? b(n) : '',
    i = ['w:fldCharType="begin"'];
  if (
    (e.fldLock && i.push('w:fldLock="true"'),
    t.push(`<w:r>${r}<w:fldChar ${i.join(' ')}/></w:r>`),
    e.fieldCode.length > 0)
  )
    t.push(...e.fieldCode.map((o) => y(o)));
  else {
    let l =
      e.instruction.startsWith(' ') || e.instruction.endsWith(' ') || e.instruction.includes('  ')
        ? ' xml:space="preserve"'
        : '';
    t.push(`<w:r>${r}<w:instrText${l}>${a(e.instruction)}</w:instrText></w:r>`);
  }
  return (
    t.push(`<w:r>${r}<w:fldChar w:fldCharType="separate"/></w:r>`),
    t.push(...e.fieldResult.map((o) => y(o))),
    t.push(`<w:r>${r}<w:fldChar w:fldCharType="end"/></w:r>`),
    t.join('')
  );
}
function Oe(e) {
  let t = e.properties,
    n = [];
  switch (
    (t.alias && n.push(`<w:alias w:val="${a(t.alias)}"/>`),
    t.tag && n.push(`<w:tag w:val="${a(t.tag)}"/>`),
    t.lock && t.lock !== 'unlocked' && n.push(`<w:lock w:val="${t.lock}"/>`),
    t.showingPlaceholder && n.push('<w:showingPlcHdr/>'),
    t.sdtType)
  ) {
    case 'plainText':
      n.push('<w:text/>');
      break;
    case 'date':
      t.dateFormat ? n.push(`<w:date w:fullDate="${a(t.dateFormat)}"/>`) : n.push('<w:date/>');
      break;
    case 'dropdown': {
      let i = (t.listItems ?? [])
        .map((o) => `<w:listItem w:displayText="${a(o.displayText)}" w:value="${a(o.value)}"/>`)
        .join('');
      n.push(`<w:dropDownList>${i}</w:dropDownList>`);
      break;
    }
    case 'comboBox': {
      let i = (t.listItems ?? [])
        .map((o) => `<w:listItem w:displayText="${a(o.displayText)}" w:value="${a(o.value)}"/>`)
        .join('');
      n.push(`<w:comboBox>${i}</w:comboBox>`);
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
    .map((i) => (i.type === 'run' ? y(i) : i.type === 'hyperlink' ? I(i) : ''))
    .join('');
  return `<w:sdt><w:sdtPr>${n.join('')}</w:sdtPr><w:sdtContent>${r}</w:sdtContent></w:sdt>`;
}
function M(e, t) {
  let n = [`w:id="${t.id}"`, `w:name="${a(t.name)}"`];
  return `<w:${e} ${n.join(' ')}/>`;
}
function z(e, t) {
  let n = t.info,
    r = Number.isInteger(n.id) && n.id >= 0 ? n.id : 0,
    i = typeof n.author == 'string' ? n.author.trim() : '',
    o = i.length > 0 ? i : 'Unknown',
    l = typeof n.date == 'string' ? n.date.trim() : void 0,
    s = [`w:id="${r}"`, `w:author="${a(o)}"`];
  l && s.push(`w:date="${a(l)}"`);
  let p = t.content
    .map((c) =>
      c.type === 'run'
        ? e === 'del' || e === 'moveFrom'
          ? y(c)
              .replace(/<w:t\b/g, '<w:delText')
              .replace(/<\/w:t>/g, '</w:delText>')
              .replace(/<w:instrText\b/g, '<w:delInstrText')
              .replace(/<\/w:instrText>/g, '</w:delInstrText>')
          : y(c)
        : c.type === 'hyperlink'
          ? I(c)
          : ''
    )
    .join('');
  return `<w:${e} ${s.join(' ')}>${p}</w:${e}>`;
}
function Me(e) {
  switch (e.type) {
    case 'run':
      return y(e);
    case 'hyperlink':
      return I(e);
    case 'bookmarkStart':
      return N(e);
    case 'bookmarkEnd':
      return W(e);
    case 'simpleField':
      return Xe(e);
    case 'complexField':
      return Le(e);
    case 'inlineSdt':
      return Oe(e);
    case 'commentRangeStart':
      return `<w:commentRangeStart w:id="${e.id}"/>`;
    case 'commentRangeEnd':
      return `<w:commentRangeEnd w:id="${e.id}"/><w:r><w:rPr><w:rStyle w:val="CommentReference"/></w:rPr><w:commentReference w:id="${e.id}"/></w:r>`;
    case 'insertion':
      return z('ins', e);
    case 'deletion':
      return z('del', e);
    case 'moveFrom':
      return z('moveFrom', e);
    case 'moveTo':
      return z('moveTo', e);
    case 'moveFromRangeStart':
      return M('moveFromRangeStart', e);
    case 'moveFromRangeEnd':
      return `<w:moveFromRangeEnd w:id="${e.id}"/>`;
    case 'moveToRangeStart':
      return M('moveToRangeStart', e);
    case 'moveToRangeEnd':
      return `<w:moveToRangeEnd w:id="${e.id}"/>`;
    case 'mathEquation':
      return e.ommlXml || '';
    default:
      return '';
  }
}
function $(e) {
  let t = [],
    n = [];
  (e.paraId && n.push(`w14:paraId="${e.paraId}"`), e.textId && n.push(`w14:textId="${e.textId}"`));
  let r = n.length > 0 ? ' ' + n.join(' ') : '',
    i = H(e.formatting, e.propertyChanges);
  i && t.push(i);
  for (let o of e.content) {
    let l = Me(o);
    l && t.push(l);
  }
  return `<w:p${r}>${t.join('')}</w:p>`;
}
function He(e) {
  let t = Number.isInteger(e.id) && e.id >= 0 ? e.id : 0,
    n = typeof e.author == 'string' ? e.author.trim() : '',
    r = n.length > 0 ? n : 'Unknown',
    i = typeof e.date == 'string' ? e.date.trim() : void 0;
  return { id: t, author: r, date: i };
}
function P(e, t) {
  let n = He(e),
    r = [`w:id="${n.id}"`, `w:author="${a(n.author)}"`];
  return (
    n.date && r.push(`w:date="${a(n.date)}"`),
    t && t.trim().length > 0 && r.push(`w:rsid="${a(t.trim())}"`),
    r.join(' ')
  );
}
function T(e, t) {
  if (!e) return '';
  let n = [`w:w="${e.value}"`, `w:type="${e.type}"`];
  return `<w:${t} ${n.join(' ')}/>`;
}
function C(e, t) {
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
function _(e, t) {
  if (!e) return '';
  let n = [];
  if (e.top) {
    let r = C(e.top, 'top');
    r && n.push(r);
  }
  if (e.left) {
    let r = C(e.left, 'left');
    r && n.push(r);
  }
  if (e.bottom) {
    let r = C(e.bottom, 'bottom');
    r && n.push(r);
  }
  if (e.right) {
    let r = C(e.right, 'right');
    r && n.push(r);
  }
  if (e.insideH) {
    let r = C(e.insideH, 'insideH');
    r && n.push(r);
  }
  if (e.insideV) {
    let r = C(e.insideV, 'insideV');
    r && n.push(r);
  }
  return n.length === 0 ? '' : `<w:${t}>${n.join('')}</w:${t}>`;
}
function G(e, t) {
  if (!e) return '';
  let n = [];
  return (
    e.top && n.push(T(e.top, 'top')),
    e.left && n.push(T(e.left, 'left')),
    e.bottom && n.push(T(e.bottom, 'bottom')),
    e.right && n.push(T(e.right, 'right')),
    n.length === 0 ? '' : `<w:${t}>${n.join('')}</w:${t}>`
  );
}
function V(e) {
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
function Ne(e) {
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
function We(e) {
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
function U(e, t) {
  let n = [];
  if (e) {
    e.styleId && n.push(`<w:tblStyle w:val="${a(e.styleId)}"/>`);
    let r = We(e.floating);
    (r && n.push(r), e.bidi && n.push('<w:bidiVisual/>'));
    let i = T(e.width, 'tblW');
    (i && n.push(i), e.justification && n.push(`<w:jc w:val="${e.justification}"/>`));
    let o = T(e.cellSpacing, 'tblCellSpacing');
    o && n.push(o);
    let l = T(e.indent, 'tblInd');
    l && n.push(l);
    let s = _(e.borders, 'tblBorders');
    s && n.push(s);
    let p = G(e.cellMargins, 'tblCellMar');
    (p && n.push(p), e.layout && n.push(`<w:tblLayout w:type="${e.layout}"/>`));
    let c = V(e.shading);
    c && n.push(c);
    let f = Ne(e.look);
    (f && n.push(f), e.overlap && n.push(`<w:tblOverlap w:val="${e.overlap}"/>`));
  }
  return (
    t && t.length > 0 && n.push(...t.map((r) => Ge(r))),
    n.length === 0 ? '' : `<w:tblPr>${n.join('')}</w:tblPr>`
  );
}
function _e(e) {
  return !e.startsWith('<w:tblPr>') || !e.endsWith('</w:tblPr>') ? '' : e.slice(9, -10);
}
function Ge(e) {
  let t = P(e.info, e.info.rsid),
    n = U(e.previousFormatting) || '<w:tblPr/>',
    r = _e(n),
    i = r.length > 0 ? `<w:tblPr>${r}</w:tblPr>` : '<w:tblPr/>';
  return `<w:tblPrChange ${t}>${i}</w:tblPrChange>`;
}
function Z(e, t, n) {
  let r = [];
  if (e) {
    if ((e.cantSplit && r.push('<w:cantSplit/>'), e.header && r.push('<w:tblHeader/>'), e.height)) {
      let i = [`w:val="${e.height.value}"`];
      (e.heightRule && i.push(`w:hRule="${e.heightRule}"`), r.push(`<w:trHeight ${i.join(' ')}/>`));
    }
    (e.justification && r.push(`<w:jc w:val="${e.justification}"/>`),
      e.hidden && r.push('<w:hidden/>'));
  }
  return (
    n &&
      (n.type === 'tableRowInsertion'
        ? r.push(`<w:ins ${P(n.info)}/>`)
        : n.type === 'tableRowDeletion' && r.push(`<w:del ${P(n.info)}/>`)),
    t && t.length > 0 && r.push(...t.map((i) => Ue(i))),
    r.length === 0 ? '' : `<w:trPr>${r.join('')}</w:trPr>`
  );
}
function Ve(e) {
  return !e.startsWith('<w:trPr>') || !e.endsWith('</w:trPr>') ? '' : e.slice(8, -9);
}
function Ue(e) {
  let t = P(e.info, e.info.rsid),
    n = Z(e.previousFormatting) || '<w:trPr/>',
    r = Ve(n),
    i = r.length > 0 ? `<w:trPr>${r}</w:trPr>` : '<w:trPr/>';
  return `<w:trPrChange ${t}>${i}</w:trPrChange>`;
}
function Ze(e) {
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
function Y(e, t, n) {
  let r = [];
  if (e) {
    let i = Ze(e.conditionalFormat);
    i && r.push(i);
    let o = T(e.width, 'tcW');
    (o && r.push(o),
      e.gridSpan && e.gridSpan > 1 && r.push(`<w:gridSpan w:val="${e.gridSpan}"/>`),
      e.vMerge &&
        (e.vMerge === 'restart' ? r.push('<w:vMerge w:val="restart"/>') : r.push('<w:vMerge/>')));
    let l = _(e.borders, 'tcBorders');
    l && r.push(l);
    let s = V(e.shading);
    (s && r.push(s), e.noWrap && r.push('<w:noWrap/>'));
    let p = G(e.margins, 'tcMar');
    (p && r.push(p),
      e.textDirection && r.push(`<w:textDirection w:val="${e.textDirection}"/>`),
      e.fitText && r.push('<w:tcFitText/>'),
      e.verticalAlign && r.push(`<w:vAlign w:val="${e.verticalAlign}"/>`),
      e.hideMark && r.push('<w:hideMark/>'));
  }
  return (
    n &&
      (n.type === 'tableCellInsertion'
        ? r.push(`<w:cellIns ${P(n.info)}/>`)
        : n.type === 'tableCellDeletion'
          ? r.push(`<w:cellDel ${P(n.info)}/>`)
          : n.type === 'tableCellMerge' && r.push(`<w:cellMerge ${P(n.info)}/>`)),
    t && t.length > 0 && r.push(...t.map((i) => qe(i))),
    r.length === 0 ? '' : `<w:tcPr>${r.join('')}</w:tcPr>`
  );
}
function Ye(e) {
  return !e.startsWith('<w:tcPr>') || !e.endsWith('</w:tcPr>') ? '' : e.slice(8, -9);
}
function qe(e) {
  let t = P(e.info, e.info.rsid),
    n = Y(e.previousFormatting) || '<w:tcPr/>',
    r = Ye(n),
    i = r.length > 0 ? `<w:tcPr>${r}</w:tcPr>` : '<w:tcPr/>';
  return `<w:tcPrChange ${t}>${i}</w:tcPrChange>`;
}
function Je(e) {
  return !e || e.length === 0
    ? ''
    : `<w:tblGrid>${e.map((n) => `<w:gridCol w:w="${n}"/>`).join('')}</w:tblGrid>`;
}
function Ke(e) {
  let t = [];
  for (let n of e) n.type === 'paragraph' ? t.push($(n)) : n.type === 'table' && t.push(S(n));
  return (t.length === 0 && t.push('<w:p/>'), t.join(''));
}
function Qe(e) {
  let t = [],
    n = Y(e.formatting, e.propertyChanges, e.structuralChange);
  return (n && t.push(n), t.push(Ke(e.content)), `<w:tc>${t.join('')}</w:tc>`);
}
function et(e) {
  let t = [],
    n = Z(e.formatting, e.propertyChanges, e.structuralChange);
  n && t.push(n);
  for (let r of e.cells) t.push(Qe(r));
  return `<w:tr>${t.join('')}</w:tr>`;
}
function S(e) {
  let t = [],
    n = U(e.formatting, e.propertyChanges);
  n && t.push(n);
  let r = Je(e.columnWidths);
  r && t.push(r);
  for (let i of e.rows) t.push(et(i));
  return `<w:tbl>${t.join('')}</w:tbl>`;
}
var w = {
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
function tt() {
  let e = {
    wpc: w.wpc,
    mc: w.mc,
    o: w.o,
    r: w.r,
    m: w.m,
    v: w.v,
    wp14: w.wp14,
    wp: w.wp,
    w10: w.w10,
    w: w.w,
    w14: w.w14,
    w15: w.w15,
    wpg: w.wpg,
    wps: w.wps,
  };
  return Object.entries(e)
    .map(([t, n]) => `xmlns:${t}="${n}"`)
    .join(' ');
}
function A(e, t) {
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
function nt(e) {
  return `<w:headerReference ${[`w:type="${e.type}"`, `r:id="${e.rId}"`].join(' ')}/>`;
}
function rt(e) {
  return `<w:footerReference ${[`w:type="${e.type}"`, `r:id="${e.rId}"`].join(' ')}/>`;
}
function it(e) {
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
function ot(e) {
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
function st(e) {
  let t = [];
  return (
    e.pageWidth !== void 0 && t.push(`w:w="${e.pageWidth}"`),
    e.pageHeight !== void 0 && t.push(`w:h="${e.pageHeight}"`),
    e.orientation === 'landscape' && t.push('w:orient="landscape"'),
    t.length === 0 ? '' : `<w:pgSz ${t.join(' ')}/>`
  );
}
function at(e) {
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
function lt(e) {
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
        .map((i) => {
          let o = [];
          return (
            i.width !== void 0 && o.push(`w:w="${i.width}"`),
            i.space !== void 0 && o.push(`w:space="${i.space}"`),
            `<w:col ${o.join(' ')}/>`
          );
        })
        .join('')),
    t.length === 0 && !n ? '' : `<w:cols${t.length > 0 ? ' ' + t.join(' ') : ''}>${n}</w:cols>`
  );
}
function ct(e) {
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
function pt(e) {
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
    let o = A(t.top, 'top');
    o && r.push(o);
  }
  if (t.left) {
    let o = A(t.left, 'left');
    o && r.push(o);
  }
  if (t.bottom) {
    let o = A(t.bottom, 'bottom');
    o && r.push(o);
  }
  if (t.right) {
    let o = A(t.right, 'right');
    o && r.push(o);
  }
  return r.length === 0
    ? ''
    : `<w:pgBorders${n.length > 0 ? ' ' + n.join(' ') : ''}>${r.join('')}</w:pgBorders>`;
}
function ft(e) {
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
function ut(e) {
  if (!e) return '';
  let t = [];
  if (e.headerReferences) for (let f of e.headerReferences) t.push(nt(f));
  if (e.footerReferences) for (let f of e.footerReferences) t.push(rt(f));
  let n = it(e.footnotePr);
  n && t.push(n);
  let r = ot(e.endnotePr);
  (r && t.push(r), e.sectionStart && t.push(`<w:type w:val="${e.sectionStart}"/>`));
  let i = st(e);
  i && t.push(i);
  let o = at(e);
  if ((o && t.push(o), e.paperSrcFirst !== void 0 || e.paperSrcOther !== void 0)) {
    let f = [];
    (e.paperSrcFirst !== void 0 && f.push(`w:first="${e.paperSrcFirst}"`),
      e.paperSrcOther !== void 0 && f.push(`w:other="${e.paperSrcOther}"`),
      t.push(`<w:paperSrc ${f.join(' ')}/>`));
  }
  let l = pt(e);
  l && t.push(l);
  let s = ct(e);
  s && t.push(s);
  let p = lt(e);
  p && t.push(p);
  let c = ft(e);
  return (
    c && t.push(c),
    e.verticalAlign && t.push(`<w:vAlign w:val="${e.verticalAlign}"/>`),
    e.bidi && t.push('<w:bidi/>'),
    e.titlePg && t.push('<w:titlePg/>'),
    e.evenAndOddHeaders && t.push('<w:evenAndOddHeaders/>'),
    t.length === 0 ? '' : `<w:sectPr>${t.join('')}</w:sectPr>`
  );
}
function q(e) {
  if (e.type === 'paragraph') return $(e);
  if (e.type === 'table') return S(e);
  if (e.type === 'blockSdt') {
    let t = e.content.map((i) => q(i)).join(''),
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
function mt(e) {
  return e.map((t) => q(t)).join('');
}
function ht(e) {
  let t = [];
  return (
    t.push(mt(e.content)),
    e.finalSectionProperties && t.push(ut(e.finalSectionProperties)),
    t.join('')
  );
}
function J(e) {
  let t = [];
  t.push('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>');
  let n = tt();
  return (
    t.push(`<w:document ${n} mc:Ignorable="w14 w15 wp14">`),
    t.push('<w:body>'),
    t.push(ht(e.package.document)),
    t.push('</w:body>'),
    t.push('</w:document>'),
    t.join('')
  );
}
var D = c(a$1(), 1);
var dt = {
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
function wt() {
  return Object.entries(dt)
    .map(([e, t]) => `xmlns:${e}="${t}"`)
    .join(' ');
}
function gt(e) {
  return e.type === 'paragraph' ? $(e) : e.type === 'table' ? S(e) : '';
}
function B(e) {
  let t = e.type === 'header' ? 'w:hdr' : 'w:ftr',
    n = wt(),
    r = e.content.map((i) => gt(i)).join('');
  return (
    r || (r = '<w:p><w:pPr/></w:p>'),
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<${t} ${n}>${r}</${t}>`
  );
}
function Q(e) {
  let t = '<w:r>',
    n = [];
  (e.formatting?.bold && n.push('<w:b/>'),
    e.formatting?.italic && n.push('<w:i/>'),
    n.length > 0 && (t += `<w:rPr>${n.join('')}</w:rPr>`));
  for (let r of e.content)
    if (r.type === 'text') {
      let i = r.text !== r.text.trim() || r.text.includes('  ');
      t += i ? `<w:t xml:space="preserve">${a(r.text)}</w:t>` : `<w:t>${a(r.text)}</w:t>`;
    } else r.type === 'break' && (t += '<w:br/>');
  return ((t += '</w:r>'), t);
}
function yt(e) {
  let t = '<w:p>';
  for (let n of e.content) n.type === 'run' && (t += Q(n));
  return ((t += '</w:p>'), t);
}
function xt(e) {
  let t = '<w:p>';
  t += '<w:r><w:rPr><w:rStyle w:val="CommentReference"/></w:rPr><w:annotationRef/></w:r>';
  for (let n of e.content) n.type === 'run' && (t += Q(n));
  return ((t += '</w:p>'), t);
}
function K(e) {
  let t = [`w:id="${e.id}"`];
  (e.author && t.push(`w:author="${a(e.author)}"`),
    e.initials && t.push(`w:initials="${a(e.initials)}"`),
    e.date && t.push(`w:date="${a(e.date)}"`));
  let n = `<w:comment ${t.join(' ')}>`;
  if (e.content && e.content.length > 0) {
    n += xt(e.content[0]);
    for (let r = 1; r < e.content.length; r++) n += yt(e.content[r]);
  } else
    n +=
      '<w:p><w:r><w:rPr><w:rStyle w:val="CommentReference"/></w:rPr><w:annotationRef/></w:r></w:p>';
  return ((n += '</w:comment>'), n);
}
function ee(e) {
  if (!e || e.length === 0) return '';
  let t = [],
    n = [];
  for (let i of e) (i.parentId == null ? t : n).push(i);
  let r = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:comments xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:w10="urn:schemas-microsoft-com:office:word" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup" xmlns:wpi="http://schemas.microsoft.com/office/word/2010/wordprocessingInk" xmlns:wne="http://schemas.microsoft.com/office/word/2006/wordml" xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape" mc:Ignorable="w14 wp14">`;
  for (let i of t) r += K(i);
  for (let i of n) r += K(i);
  return ((r += '</w:comments>'), r);
}
function E(e) {
  let t = 0;
  for (let n of e.matchAll(/Id="rId(\d+)"/g)) {
    let r = parseInt(n[1], 10);
    r > t && (t = r);
  }
  return t;
}
async function $t(e, t, n) {
  let r = e.package.document.comments;
  if (!r || r.length === 0) return;
  let i = ee(r);
  (t.file('word/comments.xml', i, { compression: 'DEFLATE', compressionOptions: { level: n } }),
    await Promise.all([Rt(t, n), zt(t, n)]));
}
function te(e) {
  let t = [];
  for (let n of e)
    if (n.type === 'paragraph') {
      for (let r of n.content)
        if (r.type === 'run')
          for (let i of r.content)
            i.type === 'drawing' && i.image.src?.startsWith('data:') && t.push(i.image);
    } else if (n.type === 'table')
      for (let r of n.rows) for (let i of r.cells) t.push(...te(i.content));
  return t;
}
var Tt = {
  'image/png': 'png',
  'image/jpeg': 'jpeg',
  'image/gif': 'gif',
  'image/bmp': 'bmp',
  'image/tiff': 'tiff',
  'image/webp': 'webp',
  'image/svg+xml': 'svg',
};
function Pt(e) {
  let t = e.match(/^data:([^;]+);base64,(.+)$/);
  if (!t) throw new Error('Invalid data URL');
  let n = atob(t[2]),
    r = new Uint8Array(n.length);
  for (let i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);
  return { data: r.buffer, extension: Tt[t[1]] || 'png' };
}
async function bt(e, t, n) {
  if (e.length === 0) return;
  let r = 'word/_rels/document.xml.rels',
    i = t.file(r);
  if (!i) return;
  let o = await i.async('text'),
    l = E(o),
    s = 0;
  t.forEach((f) => {
    let m = f.match(/^word\/media\/image(\d+)\./);
    if (m) {
      let u = parseInt(m[1], 10);
      u > s && (s = u);
    }
  });
  let p = [],
    c = new Set();
  for (let f of e) {
    let { data: m, extension: u } = Pt(f.src);
    (s++, l++);
    let h = `image${s}.${u}`,
      g = `word/media/${h}`,
      F = `rId${l}`;
    (t.file(g, m, { compression: 'DEFLATE', compressionOptions: { level: n } }),
      p.push(
        `<Relationship Id="${F}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/${h}"/>`
      ),
      c.add(u),
      (f.rId = F));
  }
  if (
    (p.length > 0 &&
      ((o = o.replace('</Relationships>', p.join('') + '</Relationships>')),
      t.file(r, o, { compression: 'DEFLATE', compressionOptions: { level: n } })),
    c.size > 0)
  ) {
    let f = t.file('[Content_Types].xml');
    if (f) {
      let m = await f.async('text');
      for (let u of c)
        if (!m.includes(`Extension="${u}"`)) {
          let h = kt(u);
          m = m.replace('</Types>', `<Default Extension="${u}" ContentType="${h}"/></Types>`);
        }
      t.file('[Content_Types].xml', m, {
        compression: 'DEFLATE',
        compressionOptions: { level: n },
      });
    }
  }
}
function ne(e) {
  let t = [];
  for (let n of e)
    if (n.type === 'paragraph')
      for (let r of n.content) r.type === 'hyperlink' && r.href && !r.rId && !r.anchor && t.push(r);
    else if (n.type === 'table')
      for (let r of n.rows) for (let i of r.cells) t.push(...ne(i.content));
  return t;
}
async function vt(e, t, n) {
  if (e.length === 0) return;
  let r = 'word/_rels/document.xml.rels',
    i = t.file(r);
  if (!i) return;
  let o = await i.async('text'),
    l = E(o),
    s = [];
  for (let p of e) {
    l++;
    let c = `rId${l}`;
    (s.push(
      `<Relationship Id="${c}" Type="${b$1.hyperlink}" Target="${a(p.href)}" TargetMode="External"/>`
    ),
      (p.rId = c));
  }
  s.length > 0 &&
    ((o = o.replace('</Relationships>', s.join('') + '</Relationships>')),
    t.file(r, o, { compression: 'DEFLATE', compressionOptions: { level: n } }));
}
async function Ct(e, t = {}) {
  if (!e.originalBuffer)
    throw new Error(
      'Cannot repack document: no original buffer for round-trip. Use createDocx() for new documents.'
    );
  let { compressionLevel: n = 6, updateModifiedDate: r = true, modifiedBy: i } = t,
    o = e,
    l = await D.default.loadAsync(e.originalBuffer),
    s = new D.default();
  for (let [u, h] of Object.entries(l.files)) {
    if (h.dir) {
      s.folder(u.replace(/\/$/, ''));
      continue;
    }
    let g = await h.async('arraybuffer');
    s.file(u, g, { compression: 'DEFLATE', compressionOptions: { level: n } });
  }
  let p = te(o.package.document.content);
  await bt(p, s, n);
  let c = ne(o.package.document.content);
  await vt(c, s, n);
  let f = J(o);
  if (
    (s.file('word/document.xml', f, { compression: 'DEFLATE', compressionOptions: { level: n } }),
    At(o, s, n),
    await $t(o, s, n),
    r)
  ) {
    let u = 'docProps/core.xml',
      h = l.file(u);
    if (h) {
      let g = await h.async('text'),
        F = Dt(g, { updateModifiedDate: r, modifiedBy: i });
      s.file(u, F, { compression: 'DEFLATE', compressionOptions: { level: n } });
    }
  }
  return await s.generateAsync({
    type: 'arraybuffer',
    compression: 'DEFLATE',
    compressionOptions: { level: n },
  });
}
var Ft = 'application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml',
  St = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments';
async function Rt(e, t) {
  let n = e.file('[Content_Types].xml');
  if (!n) return;
  let r = await n.async('text');
  r.includes('/word/comments.xml') ||
    ((r = r.replace(
      '</Types>',
      `<Override PartName="/word/comments.xml" ContentType="${Ft}"/></Types>`
    )),
    e.file('[Content_Types].xml', r, { compression: 'DEFLATE', compressionOptions: { level: t } }));
}
async function zt(e, t) {
  let n = 'word/_rels/document.xml.rels',
    r = e.file(n);
  if (!r) return;
  let i = await r.async('text');
  if (i.includes('comments.xml')) return;
  let o = `rId${E(i) + 1}`;
  ((i = i.replace(
    '</Relationships>',
    `<Relationship Id="${o}" Type="${St}" Target="comments.xml"/></Relationships>`
  )),
    e.file(n, i, { compression: 'DEFLATE', compressionOptions: { level: t } }));
}
function At(e, t, n) {
  let r = e.package.relationships;
  if (!r) return;
  let i = { level: n };
  if (e.package.headers)
    for (let [o, l] of e.package.headers.entries()) {
      let s = r.get(o);
      if (s && s.type === b$1.header && s.target) {
        let p = s.target.startsWith('/') ? s.target.slice(1) : `word/${s.target}`,
          c = B(l);
        t.file(p, c, { compression: 'DEFLATE', compressionOptions: i });
      }
    }
  if (e.package.footers)
    for (let [o, l] of e.package.footers.entries()) {
      let s = r.get(o);
      if (s && s.type === b$1.footer && s.target) {
        let p = s.target.startsWith('/') ? s.target.slice(1) : `word/${s.target}`,
          c = B(l);
        t.file(p, c, { compression: 'DEFLATE', compressionOptions: i });
      }
    }
}
function Dt(e, t) {
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
            `<cp:lastModifiedBy>${a(t.modifiedBy)}</cp:lastModifiedBy>`
          ))
        : (n = n.replace(
            '</cp:coreProperties>',
            `<cp:lastModifiedBy>${a(t.modifiedBy)}</cp:lastModifiedBy></cp:coreProperties>`
          ))),
    n
  );
}
function kt(e, t) {
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
async function It() {
  let e = new D.default();
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
async function rn(e) {
  let t = await It(),
    n = { ...e, originalBuffer: t };
  return Ct(n);
}
export { ut as a, ht as b, J as c, Ct as d, rn as e }; //# sourceMappingURL=chunk-YPSZFLLU.js.map
//# sourceMappingURL=chunk-YPSZFLLU.js.map
