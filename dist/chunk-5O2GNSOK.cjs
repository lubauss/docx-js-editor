'use strict';
var chunkGILLFIXY_cjs = require('./chunk-GILLFIXY.cjs'),
  chunkQEBO3EQP_cjs = require('./chunk-QEBO3EQP.cjs');
function s(e) {
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
function v(e) {
  if (!e) return '';
  let t = [];
  if ((e.styleId && t.push(`<w:rStyle w:val="${s(e.styleId)}"/>`), e.fontFamily)) {
    let i = [];
    (e.fontFamily.ascii && i.push(`w:ascii="${s(e.fontFamily.ascii)}"`),
      e.fontFamily.hAnsi && i.push(`w:hAnsi="${s(e.fontFamily.hAnsi)}"`),
      e.fontFamily.eastAsia && i.push(`w:eastAsia="${s(e.fontFamily.eastAsia)}"`),
      e.fontFamily.cs && i.push(`w:cs="${s(e.fontFamily.cs)}"`),
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
    l = [`w:id="${t}"`, `w:author="${s(r)}"`];
  (i && l.push(`w:date="${s(i)}"`), o && l.push(`w:rsid="${s(o)}"`));
  let c = v(e.previousFormatting) || '<w:rPr/>';
  return `<w:rPrChange ${l.join(' ')}>${c}</w:rPrChange>`;
}
function ue(e, t) {
  let n = v(e),
    r = n ? pe(n) : '',
    i = (t ?? []).map(fe).join(''),
    o = `${r}${i}`;
  return o ? `<w:rPr>${o}</w:rPr>` : '';
}
function me(e) {
  return `<w:t${e.preserveSpace || e.text.startsWith(' ') || e.text.endsWith(' ') || e.text.includes('  ') ? ' xml:space="preserve"' : ''}>${s(e.text)}</w:t>`;
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
  return `<w:sym w:font="${s(e.font)}" w:char="${s(e.char)}"/>`;
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
  return `<w:instrText${e.text.startsWith(' ') || e.text.endsWith(' ') || e.text.includes('  ') ? ' xml:space="preserve"' : ''}>${s(e.text)}</w:instrText>`;
}
function $e(e) {
  return '<w:softHyphen/>';
}
function Te(e) {
  return '<w:noBreakHyphen/>';
}
function B(e) {
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
  if (e.type === 'solid' && e.color) return `<a:solidFill>${B(e.color)}</a:solidFill>`;
  if (e.type === 'gradient' && e.gradient) {
    let t = e.gradient,
      n = t.stops.map((i) => `<a:gs pos="${i.position}">${B(i.color)}</a:gs>`).join(''),
      r = t.type === 'linear' ? `<a:lin ang="${(t.angle || 0) * 6e4}" scaled="1"/>` : '';
    return `<a:gradFill><a:gsLst>${n}</a:gsLst>${r}</a:gradFill>`;
  }
  return '';
}
function L(e) {
  if (!e) return '';
  let t = [];
  (e.width != null && t.push(`w="${e.width}"`), e.cap && t.push(`cap="${e.cap}"`));
  let n = [];
  return (
    e.color && n.push(`<a:solidFill>${B(e.color)}</a:solidFill>`),
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
function O(e) {
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
function M(e) {
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
      `<pic:cNvPr id="${i}" name="${s(o)}"${e.alt ? ` descr="${s(e.alt)}"` : ''}/>`,
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
      e.outline ? L(e.outline) : '',
      '</pic:spPr>',
      '</pic:pic>',
      '</a:graphicData>',
      '</a:graphic>',
    ].join('')
  );
}
function Ce(e) {
  let t = e.image,
    n = t.wrap.type !== 'inline',
    r = t.size.width,
    i = t.size.height,
    o = t.padding?.top ?? t.wrap.distT ?? 0,
    l = t.padding?.bottom ?? t.wrap.distB ?? 0,
    c = t.padding?.left ?? t.wrap.distL ?? 0,
    p = t.padding?.right ?? t.wrap.distR ?? 0,
    a = t.id || '1',
    f = t.title || t.filename || `Picture ${a}`,
    u = be(t);
  if (!n)
    return [
      '<w:drawing>',
      `<wp:inline distT="${o}" distB="${l}" distL="${c}" distR="${p}">`,
      `<wp:extent cx="${r}" cy="${i}"/>`,
      '<wp:effectExtent l="0" t="0" r="0" b="0"/>',
      `<wp:docPr id="${a}" name="${s(f)}"${t.alt ? ` descr="${s(t.alt)}"` : ''}${t.decorative ? ' hidden="1"' : ''}/>`,
      '<wp:cNvGraphicFramePr><a:graphicFrameLocks xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" noChangeAspect="1"/></wp:cNvGraphicFramePr>',
      u,
      '</wp:inline>',
      '</w:drawing>',
    ].join('');
  let m = t.wrap.type === 'behind' ? '1' : '0',
    g = t.position
      ? O(t.position)
      : '<wp:positionH relativeFrom="column"><wp:posOffset>0</wp:posOffset></wp:positionH><wp:positionV relativeFrom="paragraph"><wp:posOffset>0</wp:posOffset></wp:positionV>',
    w = M(t.wrap);
  return [
    '<w:drawing>',
    `<wp:anchor distT="${o}" distB="${l}" distL="${c}" distR="${p}" simplePos="0" relativeHeight="251658240" behindDoc="${m}" locked="0" layoutInCell="1" allowOverlap="1">`,
    '<wp:simplePos x="0" y="0"/>',
    g,
    `<wp:extent cx="${r}" cy="${i}"/>`,
    '<wp:effectExtent l="0" t="0" r="0" b="0"/>',
    w,
    `<wp:docPr id="${a}" name="${s(f)}"${t.alt ? ` descr="${s(t.alt)}"` : ''}/>`,
    '<wp:cNvGraphicFramePr><a:graphicFrameLocks xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" noChangeAspect="1"/></wp:cNvGraphicFramePr>',
    u,
    '</wp:anchor>',
    '</w:drawing>',
  ].join('');
}
function ve(e) {
  return e.map((t) => T(t)).join('');
}
function Fe(e) {
  let t = e.shape,
    n = t.size.width,
    r = t.size.height,
    i = t.shapeType === 'textBox',
    o = t.wrap && t.wrap.type !== 'inline',
    l = t.wrap?.distT ?? 0,
    c = t.wrap?.distB ?? 0,
    p = t.wrap?.distL ?? 0,
    a = t.wrap?.distR ?? 0,
    f = t.id || '1',
    u = t.name || (i ? `TextBox ${f}` : `Shape ${f}`),
    m = '';
  (t.transform?.rotation && (m += ` rot="${Math.round(t.transform.rotation * 6e4)}"`),
    t.transform?.flipH && (m += ' flipH="1"'),
    t.transform?.flipV && (m += ' flipV="1"'));
  let g = [
      '<wps:spPr>',
      `<a:xfrm${m}>`,
      '<a:off x="0" y="0"/>',
      `<a:ext cx="${n}" cy="${r}"/>`,
      '</a:xfrm>',
      `<a:prstGeom prst="${t.shapeType === 'textBox' ? 'rect' : t.shapeType}"><a:avLst/></a:prstGeom>`,
      Pe(t.fill),
      L(t.outline),
      '</wps:spPr>',
    ].join(''),
    w = '';
  if (t.textBody) {
    let h = t.textBody,
      $ = ['rot="0"', 'vert="horz"'];
    (h.anchor && $.push(`anchor="${h.anchor === 'middle' ? 'ctr' : h.anchor}"`),
      h.anchorCenter && $.push('anchorCtr="1"'),
      h.margins &&
        (h.margins.left != null && $.push(`lIns="${h.margins.left}"`),
        h.margins.top != null && $.push(`tIns="${h.margins.top}"`),
        h.margins.right != null && $.push(`rIns="${h.margins.right}"`),
        h.margins.bottom != null && $.push(`bIns="${h.margins.bottom}"`)),
      i
        ? (w = [
            '<wps:txbx><w:txbxContent>',
            ve(h.content),
            '</w:txbxContent></wps:txbx>',
            `<wps:bodyPr ${$.join(' ')}/>`,
          ].join(''))
        : (w = [`<wps:bodyPr ${$.join(' ')}/>`].join('')));
  }
  let C = [
    '<a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main">',
    '<a:graphicData uri="http://schemas.microsoft.com/office/word/2010/wordprocessingShape">',
    ['<wps:wsp>', `<wps:cNvSpPr${i ? ' txBox="1"' : ''}/>`, g, w, '</wps:wsp>'].join(''),
    '</a:graphicData>',
    '</a:graphic>',
  ].join('');
  if (!o)
    return [
      '<w:drawing>',
      `<wp:inline distT="${l}" distB="${c}" distL="${p}" distR="${a}">`,
      `<wp:extent cx="${n}" cy="${r}"/>`,
      '<wp:effectExtent l="0" t="0" r="0" b="0"/>',
      `<wp:docPr id="${f}" name="${s(u)}"/>`,
      '<wp:cNvGraphicFramePr/>',
      C,
      '</wp:inline>',
      '</w:drawing>',
    ].join('');
  let k = t.wrap?.type === 'behind' ? '1' : '0',
    ie = t.position
      ? O(t.position)
      : '<wp:positionH relativeFrom="column"><wp:posOffset>0</wp:posOffset></wp:positionH><wp:positionV relativeFrom="paragraph"><wp:posOffset>0</wp:posOffset></wp:positionV>',
    oe = M(t.wrap);
  return [
    '<w:drawing>',
    `<wp:anchor distT="${l}" distB="${c}" distL="${p}" distR="${a}" simplePos="0" relativeHeight="251658240" behindDoc="${k}" locked="0" layoutInCell="1" allowOverlap="1">`,
    '<wp:simplePos x="0" y="0"/>',
    ie,
    `<wp:extent cx="${n}" cy="${r}"/>`,
    '<wp:effectExtent l="0" t="0" r="0" b="0"/>',
    oe,
    `<wp:docPr id="${f}" name="${s(u)}"/>`,
    '<wp:cNvGraphicFramePr/>',
    C,
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
      return Ce(e);
    case 'shape':
      return Fe(e);
    default:
      return '';
  }
}
function x(e) {
  let t = [],
    n = ue(e.formatting, e.propertyChanges);
  n && t.push(n);
  for (let r of e.content) {
    let i = Se(r);
    i && t.push(i);
  }
  return `<w:r>${t.join('')}</w:r>`;
}
function F(e, t) {
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
    let n = F(e.top, 'top');
    n && t.push(n);
  }
  if (e.left) {
    let n = F(e.left, 'left');
    n && t.push(n);
  }
  if (e.bottom) {
    let n = F(e.bottom, 'bottom');
    n && t.push(n);
  }
  if (e.right) {
    let n = F(e.right, 'right');
    n && t.push(n);
  }
  if (e.between) {
    let n = F(e.between, 'between');
    n && t.push(n);
  }
  if (e.bar) {
    let n = F(e.bar, 'bar');
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
function Ie(e) {
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
function De(e) {
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
function ke(e) {
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
function N(e, t) {
  let n = [];
  if (e) {
    (e.styleId && n.push(`<w:pStyle w:val="${s(e.styleId)}"/>`),
      e.keepNext && n.push('<w:keepNext/>'),
      e.keepLines && n.push('<w:keepLines/>'),
      e.contextualSpacing && n.push('<w:contextualSpacing/>'),
      e.pageBreakBefore && n.push('<w:pageBreakBefore/>'));
    let r = Be(e.frame);
    (r && n.push(r),
      e.widowControl === false
        ? n.push('<w:widowControl w:val="0"/>')
        : e.widowControl === true && n.push('<w:widowControl/>'));
    let i = ke(e.numPr);
    i && n.push(i);
    let o = Re(e.borders);
    o && n.push(o);
    let l = ze(e.shading);
    l && n.push(l);
    let c = Ae(e.tabs);
    (c && n.push(c),
      e.suppressLineNumbers && n.push('<w:suppressLineNumbers/>'),
      e.suppressAutoHyphens && n.push('<w:suppressAutoHyphens/>'));
    let p = Ie(e);
    p && n.push(p);
    let a = De(e);
    if (
      (a && n.push(a),
      e.bidi && n.push('<w:bidi/>'),
      e.alignment && n.push(`<w:jc w:val="${e.alignment}"/>`),
      e.outlineLevel !== void 0 && n.push(`<w:outlineLvl w:val="${e.outlineLevel}"/>`),
      e.runProperties)
    ) {
      let f = v(e.runProperties);
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
    l = [`w:id="${t}"`, `w:author="${s(r)}"`];
  (i && l.push(`w:date="${s(i)}"`), o && l.push(`w:rsid="${s(o)}"`));
  let c = N(e.previousFormatting) || '<w:pPr/>',
    p = Ee(c),
    a = p.length > 0 ? `<w:pPr>${p}</w:pPr>` : '<w:pPr/>';
  return `<w:pPrChange ${l.join(' ')}>${a}</w:pPrChange>`;
}
function E(e) {
  let t = [];
  (e.rId && t.push(`r:id="${e.rId}"`),
    e.anchor && t.push(`w:anchor="${s(e.anchor)}"`),
    e.tooltip && t.push(`w:tooltip="${s(e.tooltip)}"`),
    e.target && t.push(`w:tgtFrame="${s(e.target)}"`),
    e.history === false && t.push('w:history="0"'),
    e.docLocation && t.push(`w:docLocation="${s(e.docLocation)}"`));
  let n = e.children
    .map((i) =>
      i.type === 'run'
        ? x(i)
        : i.type === 'bookmarkStart'
          ? W(i)
          : i.type === 'bookmarkEnd'
            ? _(i)
            : ''
    )
    .join('');
  return `<w:hyperlink${t.length > 0 ? ' ' + t.join(' ') : ''}>${n}</w:hyperlink>`;
}
function W(e) {
  let t = [`w:id="${e.id}"`, `w:name="${s(e.name)}"`];
  return (
    e.colFirst !== void 0 && t.push(`w:colFirst="${e.colFirst}"`),
    e.colLast !== void 0 && t.push(`w:colLast="${e.colLast}"`),
    `<w:bookmarkStart ${t.join(' ')}/>`
  );
}
function _(e) {
  return `<w:bookmarkEnd w:id="${e.id}"/>`;
}
function Xe(e) {
  let t = [],
    n = e.content.find((c) => c.type === 'run'),
    r = n?.formatting ? v(n.formatting) : '',
    i = ['w:fldCharType="begin"'];
  (e.fldLock && i.push('w:fldLock="true"'), t.push(`<w:r>${r}<w:fldChar ${i.join(' ')}/></w:r>`));
  let l =
    e.instruction.startsWith(' ') || e.instruction.endsWith(' ') || e.instruction.includes('  ')
      ? ' xml:space="preserve"'
      : '';
  (t.push(`<w:r>${r}<w:instrText${l}>${s(e.instruction)}</w:instrText></w:r>`),
    t.push(`<w:r>${r}<w:fldChar w:fldCharType="separate"/></w:r>`));
  for (let c of e.content) c.type === 'run' && t.push(x(c));
  return (t.push(`<w:r>${r}<w:fldChar w:fldCharType="end"/></w:r>`), t.join(''));
}
function Le(e) {
  let t = [],
    n = e.fieldResult?.[0]?.formatting,
    r = n ? v(n) : '',
    i = ['w:fldCharType="begin"'];
  if (
    (e.fldLock && i.push('w:fldLock="true"'),
    t.push(`<w:r>${r}<w:fldChar ${i.join(' ')}/></w:r>`),
    e.fieldCode.length > 0)
  )
    t.push(...e.fieldCode.map((o) => x(o)));
  else {
    let l =
      e.instruction.startsWith(' ') || e.instruction.endsWith(' ') || e.instruction.includes('  ')
        ? ' xml:space="preserve"'
        : '';
    t.push(`<w:r>${r}<w:instrText${l}>${s(e.instruction)}</w:instrText></w:r>`);
  }
  return (
    t.push(`<w:r>${r}<w:fldChar w:fldCharType="separate"/></w:r>`),
    t.push(...e.fieldResult.map((o) => x(o))),
    t.push(`<w:r>${r}<w:fldChar w:fldCharType="end"/></w:r>`),
    t.join('')
  );
}
function Oe(e) {
  let t = e.properties,
    n = [];
  switch (
    (t.alias && n.push(`<w:alias w:val="${s(t.alias)}"/>`),
    t.tag && n.push(`<w:tag w:val="${s(t.tag)}"/>`),
    t.lock && t.lock !== 'unlocked' && n.push(`<w:lock w:val="${t.lock}"/>`),
    t.showingPlaceholder && n.push('<w:showingPlcHdr/>'),
    t.sdtType)
  ) {
    case 'plainText':
      n.push('<w:text/>');
      break;
    case 'date':
      t.dateFormat ? n.push(`<w:date w:fullDate="${s(t.dateFormat)}"/>`) : n.push('<w:date/>');
      break;
    case 'dropdown': {
      let i = (t.listItems ?? [])
        .map((o) => `<w:listItem w:displayText="${s(o.displayText)}" w:value="${s(o.value)}"/>`)
        .join('');
      n.push(`<w:dropDownList>${i}</w:dropDownList>`);
      break;
    }
    case 'comboBox': {
      let i = (t.listItems ?? [])
        .map((o) => `<w:listItem w:displayText="${s(o.displayText)}" w:value="${s(o.value)}"/>`)
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
    .map((i) => (i.type === 'run' ? x(i) : i.type === 'hyperlink' ? E(i) : ''))
    .join('');
  return `<w:sdt><w:sdtPr>${n.join('')}</w:sdtPr><w:sdtContent>${r}</w:sdtContent></w:sdt>`;
}
function H(e, t) {
  let n = [`w:id="${t.id}"`, `w:name="${s(t.name)}"`];
  return `<w:${e} ${n.join(' ')}/>`;
}
function A(e, t) {
  let n = t.info,
    r = Number.isInteger(n.id) && n.id >= 0 ? n.id : 0,
    i = typeof n.author == 'string' ? n.author.trim() : '',
    o = i.length > 0 ? i : 'Unknown',
    l = typeof n.date == 'string' ? n.date.trim() : void 0,
    c = [`w:id="${r}"`, `w:author="${s(o)}"`];
  l && c.push(`w:date="${s(l)}"`);
  let p = t.content
    .map((a) =>
      a.type === 'run'
        ? e === 'del' || e === 'moveFrom'
          ? x(a)
              .replace(/<w:t\b/g, '<w:delText')
              .replace(/<\/w:t>/g, '</w:delText>')
              .replace(/<w:instrText\b/g, '<w:delInstrText')
              .replace(/<\/w:instrText>/g, '</w:delInstrText>')
          : x(a)
        : a.type === 'hyperlink'
          ? E(a)
          : ''
    )
    .join('');
  return `<w:${e} ${c.join(' ')}>${p}</w:${e}>`;
}
function Me(e) {
  switch (e.type) {
    case 'run':
      return x(e);
    case 'hyperlink':
      return E(e);
    case 'bookmarkStart':
      return W(e);
    case 'bookmarkEnd':
      return _(e);
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
      return A('ins', e);
    case 'deletion':
      return A('del', e);
    case 'moveFrom':
      return A('moveFrom', e);
    case 'moveTo':
      return A('moveTo', e);
    case 'moveFromRangeStart':
      return H('moveFromRangeStart', e);
    case 'moveFromRangeEnd':
      return `<w:moveFromRangeEnd w:id="${e.id}"/>`;
    case 'moveToRangeStart':
      return H('moveToRangeStart', e);
    case 'moveToRangeEnd':
      return `<w:moveToRangeEnd w:id="${e.id}"/>`;
    case 'mathEquation':
      return e.ommlXml || '';
    default:
      return '';
  }
}
function T(e) {
  let t = [],
    n = [];
  (e.paraId && n.push(`w14:paraId="${e.paraId}"`), e.textId && n.push(`w14:textId="${e.textId}"`));
  let r = n.length > 0 ? ' ' + n.join(' ') : '',
    i = N(e.formatting, e.propertyChanges);
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
function b(e, t) {
  let n = He(e),
    r = [`w:id="${n.id}"`, `w:author="${s(n.author)}"`];
  return (
    n.date && r.push(`w:date="${s(n.date)}"`),
    t && t.trim().length > 0 && r.push(`w:rsid="${s(t.trim())}"`),
    r.join(' ')
  );
}
function P(e, t) {
  if (!e) return '';
  let n = [`w:w="${e.value}"`, `w:type="${e.type}"`];
  return `<w:${t} ${n.join(' ')}/>`;
}
function S(e, t) {
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
function G(e, t) {
  if (!e) return '';
  let n = [];
  if (e.top) {
    let r = S(e.top, 'top');
    r && n.push(r);
  }
  if (e.left) {
    let r = S(e.left, 'left');
    r && n.push(r);
  }
  if (e.bottom) {
    let r = S(e.bottom, 'bottom');
    r && n.push(r);
  }
  if (e.right) {
    let r = S(e.right, 'right');
    r && n.push(r);
  }
  if (e.insideH) {
    let r = S(e.insideH, 'insideH');
    r && n.push(r);
  }
  if (e.insideV) {
    let r = S(e.insideV, 'insideV');
    r && n.push(r);
  }
  return n.length === 0 ? '' : `<w:${t}>${n.join('')}</w:${t}>`;
}
function V(e, t) {
  if (!e) return '';
  let n = [];
  return (
    e.top && n.push(P(e.top, 'top')),
    e.left && n.push(P(e.left, 'left')),
    e.bottom && n.push(P(e.bottom, 'bottom')),
    e.right && n.push(P(e.right, 'right')),
    n.length === 0 ? '' : `<w:${t}>${n.join('')}</w:${t}>`
  );
}
function U(e) {
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
function Z(e, t) {
  let n = [];
  if (e) {
    e.styleId && n.push(`<w:tblStyle w:val="${s(e.styleId)}"/>`);
    let r = We(e.floating);
    (r && n.push(r), e.bidi && n.push('<w:bidiVisual/>'));
    let i = P(e.width, 'tblW');
    (i && n.push(i), e.justification && n.push(`<w:jc w:val="${e.justification}"/>`));
    let o = P(e.cellSpacing, 'tblCellSpacing');
    o && n.push(o);
    let l = P(e.indent, 'tblInd');
    l && n.push(l);
    let c = G(e.borders, 'tblBorders');
    c && n.push(c);
    let p = V(e.cellMargins, 'tblCellMar');
    (p && n.push(p), e.layout && n.push(`<w:tblLayout w:type="${e.layout}"/>`));
    let a = U(e.shading);
    a && n.push(a);
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
  let t = b(e.info, e.info.rsid),
    n = Z(e.previousFormatting) || '<w:tblPr/>',
    r = _e(n),
    i = r.length > 0 ? `<w:tblPr>${r}</w:tblPr>` : '<w:tblPr/>';
  return `<w:tblPrChange ${t}>${i}</w:tblPrChange>`;
}
function Y(e, t, n) {
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
        ? r.push(`<w:ins ${b(n.info)}/>`)
        : n.type === 'tableRowDeletion' && r.push(`<w:del ${b(n.info)}/>`)),
    t && t.length > 0 && r.push(...t.map((i) => Ue(i))),
    r.length === 0 ? '' : `<w:trPr>${r.join('')}</w:trPr>`
  );
}
function Ve(e) {
  return !e.startsWith('<w:trPr>') || !e.endsWith('</w:trPr>') ? '' : e.slice(8, -9);
}
function Ue(e) {
  let t = b(e.info, e.info.rsid),
    n = Y(e.previousFormatting) || '<w:trPr/>',
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
function q(e, t, n) {
  let r = [];
  if (e) {
    let i = Ze(e.conditionalFormat);
    i && r.push(i);
    let o = P(e.width, 'tcW');
    (o && r.push(o),
      e.gridSpan && e.gridSpan > 1 && r.push(`<w:gridSpan w:val="${e.gridSpan}"/>`),
      e.vMerge &&
        (e.vMerge === 'restart' ? r.push('<w:vMerge w:val="restart"/>') : r.push('<w:vMerge/>')));
    let l = G(e.borders, 'tcBorders');
    l && r.push(l);
    let c = U(e.shading);
    (c && r.push(c), e.noWrap && r.push('<w:noWrap/>'));
    let p = V(e.margins, 'tcMar');
    (p && r.push(p),
      e.textDirection && r.push(`<w:textDirection w:val="${e.textDirection}"/>`),
      e.fitText && r.push('<w:tcFitText/>'),
      e.verticalAlign && r.push(`<w:vAlign w:val="${e.verticalAlign}"/>`),
      e.hideMark && r.push('<w:hideMark/>'));
  }
  return (
    n &&
      (n.type === 'tableCellInsertion'
        ? r.push(`<w:cellIns ${b(n.info)}/>`)
        : n.type === 'tableCellDeletion'
          ? r.push(`<w:cellDel ${b(n.info)}/>`)
          : n.type === 'tableCellMerge' && r.push(`<w:cellMerge ${b(n.info)}/>`)),
    t && t.length > 0 && r.push(...t.map((i) => qe(i))),
    r.length === 0 ? '' : `<w:tcPr>${r.join('')}</w:tcPr>`
  );
}
function Ye(e) {
  return !e.startsWith('<w:tcPr>') || !e.endsWith('</w:tcPr>') ? '' : e.slice(8, -9);
}
function qe(e) {
  let t = b(e.info, e.info.rsid),
    n = q(e.previousFormatting) || '<w:tcPr/>',
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
  for (let n of e) n.type === 'paragraph' ? t.push(T(n)) : n.type === 'table' && t.push(R(n));
  return (t.length === 0 && t.push('<w:p/>'), t.join(''));
}
function Qe(e) {
  let t = [],
    n = q(e.formatting, e.propertyChanges, e.structuralChange);
  return (n && t.push(n), t.push(Ke(e.content)), `<w:tc>${t.join('')}</w:tc>`);
}
function et(e) {
  let t = [],
    n = Y(e.formatting, e.propertyChanges, e.structuralChange);
  n && t.push(n);
  for (let r of e.cells) t.push(Qe(r));
  return `<w:tr>${t.join('')}</w:tr>`;
}
function R(e) {
  let t = [],
    n = Z(e.formatting, e.propertyChanges);
  n && t.push(n);
  let r = Je(e.columnWidths);
  r && t.push(r);
  for (let i of e.rows) t.push(et(i));
  return `<w:tbl>${t.join('')}</w:tbl>`;
}
var d = {
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
    wpc: d.wpc,
    mc: d.mc,
    o: d.o,
    r: d.r,
    m: d.m,
    v: d.v,
    wp14: d.wp14,
    wp: d.wp,
    w10: d.w10,
    w: d.w,
    w14: d.w14,
    w15: d.w15,
    wpg: d.wpg,
    wps: d.wps,
  };
  return Object.entries(e)
    .map(([t, n]) => `xmlns:${t}="${n}"`)
    .join(' ');
}
function I(e, t) {
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
    let o = I(t.top, 'top');
    o && r.push(o);
  }
  if (t.left) {
    let o = I(t.left, 'left');
    o && r.push(o);
  }
  if (t.bottom) {
    let o = I(t.bottom, 'bottom');
    o && r.push(o);
  }
  if (t.right) {
    let o = I(t.right, 'right');
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
  let c = ct(e);
  c && t.push(c);
  let p = lt(e);
  p && t.push(p);
  let a = ft(e);
  return (
    a && t.push(a),
    e.verticalAlign && t.push(`<w:vAlign w:val="${e.verticalAlign}"/>`),
    e.bidi && t.push('<w:bidi/>'),
    e.titlePg && t.push('<w:titlePg/>'),
    e.evenAndOddHeaders && t.push('<w:evenAndOddHeaders/>'),
    t.length === 0 ? '' : `<w:sectPr>${t.join('')}</w:sectPr>`
  );
}
function J(e) {
  if (e.type === 'paragraph') return T(e);
  if (e.type === 'table') return R(e);
  if (e.type === 'blockSdt') {
    let t = e.content.map((i) => J(i)).join(''),
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
  return e.map((t) => J(t)).join('');
}
function ht(e) {
  let t = [];
  return (
    t.push(mt(e.content)),
    e.finalSectionProperties && t.push(ut(e.finalSectionProperties)),
    t.join('')
  );
}
function K(e) {
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
var D = chunkQEBO3EQP_cjs.c(chunkGILLFIXY_cjs.a(), 1);
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
  return e.type === 'paragraph' ? T(e) : e.type === 'table' ? R(e) : '';
}
function j(e) {
  let t = e.type === 'header' ? 'w:hdr' : 'w:ftr',
    n = wt(),
    r = e.content.map((i) => gt(i)).join('');
  return (
    r || (r = '<w:p><w:pPr/></w:p>'),
    `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<${t} ${n}>${r}</${t}>`
  );
}
function ee(e) {
  let t = '<w:r>',
    n = [];
  (e.formatting?.bold && n.push('<w:b/>'),
    e.formatting?.italic && n.push('<w:i/>'),
    n.length > 0 && (t += `<w:rPr>${n.join('')}</w:rPr>`));
  for (let r of e.content)
    if (r.type === 'text') {
      let i = r.text !== r.text.trim() || r.text.includes('  ');
      t += i ? `<w:t xml:space="preserve">${s(r.text)}</w:t>` : `<w:t>${s(r.text)}</w:t>`;
    } else r.type === 'break' && (t += '<w:br/>');
  return ((t += '</w:r>'), t);
}
function yt(e) {
  let t = '<w:p>';
  for (let n of e.content) n.type === 'run' && (t += ee(n));
  return ((t += '</w:p>'), t);
}
function xt(e) {
  let t = '<w:p>';
  t += '<w:r><w:rPr><w:rStyle w:val="CommentReference"/></w:rPr><w:annotationRef/></w:r>';
  for (let n of e.content) n.type === 'run' && (t += ee(n));
  return ((t += '</w:p>'), t);
}
function Q(e) {
  let t = [`w:id="${e.id}"`];
  (e.author && t.push(`w:author="${s(e.author)}"`),
    e.initials && t.push(`w:initials="${s(e.initials)}"`),
    e.date && t.push(`w:date="${s(e.date)}"`));
  let n = `<w:comment ${t.join(' ')}>`;
  if (e.content && e.content.length > 0) {
    n += xt(e.content[0]);
    for (let r = 1; r < e.content.length; r++) n += yt(e.content[r]);
  } else
    n +=
      '<w:p><w:r><w:rPr><w:rStyle w:val="CommentReference"/></w:rPr><w:annotationRef/></w:r></w:p>';
  return ((n += '</w:comment>'), n);
}
function te(e) {
  if (!e || e.length === 0) return '';
  let t = [],
    n = [];
  for (let i of e) (i.parentId == null ? t : n).push(i);
  let r = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:comments xmlns:wpc="http://schemas.microsoft.com/office/word/2010/wordprocessingCanvas" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:m="http://schemas.openxmlformats.org/officeDocument/2006/math" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" xmlns:w10="urn:schemas-microsoft-com:office:word" xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:w14="http://schemas.microsoft.com/office/word/2010/wordml" xmlns:wpg="http://schemas.microsoft.com/office/word/2010/wordprocessingGroup" xmlns:wpi="http://schemas.microsoft.com/office/word/2010/wordprocessingInk" xmlns:wne="http://schemas.microsoft.com/office/word/2006/wordml" xmlns:wps="http://schemas.microsoft.com/office/word/2010/wordprocessingShape" mc:Ignorable="w14 wp14">`;
  for (let i of t) r += Q(i);
  for (let i of n) r += Q(i);
  return ((r += '</w:comments>'), r);
}
function X(e) {
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
  let i = te(r);
  (t.file('word/comments.xml', i, { compression: 'DEFLATE', compressionOptions: { level: n } }),
    await Promise.all([Rt(t, n), zt(t, n)]));
}
function ne(e) {
  let t = [];
  for (let n of e)
    if (n.type === 'paragraph') {
      for (let r of n.content)
        if (r.type === 'run')
          for (let i of r.content)
            i.type === 'drawing' &&
              !i.image.rId &&
              i.image.src?.startsWith('data:') &&
              t.push(i.image);
    } else if (n.type === 'table')
      for (let r of n.rows) for (let i of r.cells) t.push(...ne(i.content));
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
    l = X(o),
    c = 0;
  t.forEach((f) => {
    let u = f.match(/^word\/media\/image(\d+)\./);
    if (u) {
      let m = parseInt(u[1], 10);
      m > c && (c = m);
    }
  });
  let p = [],
    a = new Set();
  for (let f of e) {
    let { data: u, extension: m } = Pt(f.src);
    (c++, l++);
    let g = `image${c}.${m}`,
      w = `word/media/${g}`,
      y = `rId${l}`;
    (t.file(w, u, { compression: 'DEFLATE', compressionOptions: { level: n } }),
      p.push(
        `<Relationship Id="${y}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/${g}"/>`
      ),
      a.add(m),
      (f.rId = y));
  }
  if (
    (p.length > 0 &&
      ((o = o.replace('</Relationships>', p.join('') + '</Relationships>')),
      t.file(r, o, { compression: 'DEFLATE', compressionOptions: { level: n } })),
    a.size > 0)
  ) {
    let f = t.file('[Content_Types].xml');
    if (f) {
      let u = await f.async('text');
      for (let m of a)
        if (!u.includes(`Extension="${m}"`)) {
          let g = Dt(m);
          u = u.replace('</Types>', `<Default Extension="${m}" ContentType="${g}"/></Types>`);
        }
      t.file('[Content_Types].xml', u, {
        compression: 'DEFLATE',
        compressionOptions: { level: n },
      });
    }
  }
}
function re(e) {
  let t = [];
  for (let n of e)
    if (n.type === 'paragraph')
      for (let r of n.content) r.type === 'hyperlink' && r.href && !r.rId && !r.anchor && t.push(r);
    else if (n.type === 'table')
      for (let r of n.rows) for (let i of r.cells) t.push(...re(i.content));
  return t;
}
async function Ct(e, t, n) {
  if (e.length === 0) return;
  let r = 'word/_rels/document.xml.rels',
    i = t.file(r);
  if (!i) return;
  let o = await i.async('text'),
    l = X(o),
    c = [];
  for (let p of e) {
    l++;
    let a = `rId${l}`;
    (c.push(
      `<Relationship Id="${a}" Type="${chunkGILLFIXY_cjs.b.hyperlink}" Target="${s(p.href)}" TargetMode="External"/>`
    ),
      (p.rId = a));
  }
  c.length > 0 &&
    ((o = o.replace('</Relationships>', c.join('') + '</Relationships>')),
    t.file(r, o, { compression: 'DEFLATE', compressionOptions: { level: n } }));
}
async function vt(e, t = {}) {
  if (!e.originalBuffer)
    throw new Error(
      'Cannot repack document: no original buffer for round-trip. Use createDocx() for new documents.'
    );
  let {
      compressionLevel: n = 6,
      updateModifiedDate: r = true,
      modifiedBy: i,
      modifiedHeaderFooterIds: o,
      serializeComments: l = true,
    } = t,
    c = e,
    p = await D.default.loadAsync(e.originalBuffer),
    a = new D.default();
  for (let [w, y] of Object.entries(p.files)) {
    if (y.dir) {
      a.folder(w.replace(/\/$/, ''));
      continue;
    }
    let C = await y.async('arraybuffer');
    a.file(w, C, { compression: 'DEFLATE', compressionOptions: { level: n } });
  }
  let f = ne(c.package.document.content);
  await bt(f, a, n);
  let u = re(c.package.document.content);
  await Ct(u, a, n);
  let m = K(c);
  if (
    (a.file('word/document.xml', m, { compression: 'DEFLATE', compressionOptions: { level: n } }),
    At(c, a, n, o),
    l && (await $t(c, a, n)),
    r)
  ) {
    let w = 'docProps/core.xml',
      y = p.file(w);
    if (y) {
      let C = await y.async('text'),
        k = It(C, { updateModifiedDate: r, modifiedBy: i });
      a.file(w, k, { compression: 'DEFLATE', compressionOptions: { level: n } });
    }
  }
  return await a.generateAsync({
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
  let o = `rId${X(i) + 1}`;
  ((i = i.replace(
    '</Relationships>',
    `<Relationship Id="${o}" Type="${St}" Target="comments.xml"/></Relationships>`
  )),
    e.file(n, i, { compression: 'DEFLATE', compressionOptions: { level: t } }));
}
function At(e, t, n, r) {
  let i = e.package.relationships;
  if (!i) return;
  let o = { level: n },
    l = r ? new Set(r) : null;
  if (e.package.headers)
    for (let [c, p] of e.package.headers.entries()) {
      if (l && !l.has(c)) continue;
      let a = i.get(c);
      if (a && a.type === chunkGILLFIXY_cjs.b.header && a.target) {
        let f = a.target.startsWith('/') ? a.target.slice(1) : `word/${a.target}`,
          u = j(p);
        t.file(f, u, { compression: 'DEFLATE', compressionOptions: o });
      }
    }
  if (e.package.footers)
    for (let [c, p] of e.package.footers.entries()) {
      if (l && !l.has(c)) continue;
      let a = i.get(c);
      if (a && a.type === chunkGILLFIXY_cjs.b.footer && a.target) {
        let f = a.target.startsWith('/') ? a.target.slice(1) : `word/${a.target}`,
          u = j(p);
        t.file(f, u, { compression: 'DEFLATE', compressionOptions: o });
      }
    }
}
function It(e, t) {
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
            `<cp:lastModifiedBy>${s(t.modifiedBy)}</cp:lastModifiedBy>`
          ))
        : (n = n.replace(
            '</cp:coreProperties>',
            `<cp:lastModifiedBy>${s(t.modifiedBy)}</cp:lastModifiedBy></cp:coreProperties>`
          ))),
    n
  );
}
function Dt(e, t) {
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
async function kt() {
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
  let t = await kt(),
    n = { ...e, originalBuffer: t };
  return vt(n);
}
exports.a = ut;
exports.b = ht;
exports.c = K;
exports.d = vt;
exports.e = rn; //# sourceMappingURL=chunk-5O2GNSOK.cjs.map
//# sourceMappingURL=chunk-5O2GNSOK.cjs.map
