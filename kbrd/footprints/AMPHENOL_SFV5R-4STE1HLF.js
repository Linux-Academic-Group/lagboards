module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    GND: { type: 'net', value: 'GND' },
    SH1: { type: 'net', value: '' },
    SH2: { type: 'net', value: '' },
    SW: { type: 'net', value: '' },
    VCC: { type: 'net', value: 'VCC' },
    x_axis: { type: 'net', value: '' },
    y_axis: { type: 'net', value: '' },
  },
  body: p => {
    const fp = [];
    flip = p.side === "B";
    if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

    fp.push(`(footprint AMPHENOL_SFV5R-4STE1HLF`);
    fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
    fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
    fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
    fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
    fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
    fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

    fp.push(`(descr "")`);
    fp.push(`(attr smd)`);

    // Unknown to kicad2ergogen

    // Pads
    fp.push(`(pad "1" smd rect (at -1.0 ${flipN(flip, -2.4)} ${flipR(flip, p.r + 0)}) (size 0.3 1.4) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.VCC})`);
    fp.push(`(pad "2" smd rect (at -0.5 ${flipN(flip, -2.4)} ${flipR(flip, p.r + 0)}) (size 0.3 1.4) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.y_axis})`);
    fp.push(`(pad "3" smd rect (at 0.0 ${flipN(flip, -2.4)} ${flipR(flip, p.r + 0)}) (size 0.3 1.4) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.SW})`);
    fp.push(`(pad "4" smd rect (at 0.5 ${flipN(flip, -2.4)} ${flipR(flip, p.r + 0)}) (size 0.3 1.4) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.GND})`);
    fp.push(`(pad "5" smd rect (at 1.0 ${flipN(flip, -2.4)} ${flipR(flip, p.r + 0)}) (size 0.3 1.4) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.x_axis})`);
    fp.push(`(pad "SH1" smd custom (at -2.425 ${flipN(flip, -1.5)} ${flipR(flip, p.r + 0)}) (size 1.0 1.0) (layers "${(flip ? "B" : "F")}.Cu") (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.975 ${flipN(flip, -0.8)}) (xy 0.975 ${flipN(flip, -0.8)}) (xy 0.975 ${flipN(flip, 1.5)}) (xy -0.275 ${flipN(flip, 1.5)}) (xy -0.275 ${flipN(flip, 0.8)}) (xy -1.675 ${flipN(flip, 0.8)}) (xy -1.675 ${flipN(flip, -0.3)}) (xy -0.975 ${flipN(flip, -0.3)})) (width 0.01))) ${p.SH1})`);
    fp.push(`(pad "SH2" smd custom (at 2.425 ${flipN(flip, -1.5)} ${flipR(flip, p.r + 0)}) (size 1.0 1.0) (layers "${(flip ? "B" : "F")}.Cu") (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.975 ${flipN(flip, -0.8)}) (xy -0.975 ${flipN(flip, -0.8)}) (xy -0.975 ${flipN(flip, 1.5)}) (xy 0.275 ${flipN(flip, 1.5)}) (xy 0.275 ${flipN(flip, 0.8)}) (xy 1.675 ${flipN(flip, 0.8)}) (xy 1.675 ${flipN(flip, -0.3)}) (xy 0.975 ${flipN(flip, -0.3)})) (width 0.01))) ${p.SH2})`);

    // fp.push(`(pad "11" smd rect (at -1.0 ${flipN(!flip, -2.4)} ${flipR(!flip, p.r + 0)}) (size 0.3 1.4) (layers "${(!flip ? "B" : "F")}.Cu" "${(!flip ? "B" : "F")}.Mask" "${(!flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.VCC})`);
    // fp.push(`(pad "12" smd rect (at -0.5 ${flipN(!flip, -2.4)} ${flipR(!flip, p.r + 0)}) (size 0.3 1.4) (layers "${(!flip ? "B" : "F")}.Cu" "${(!flip ? "B" : "F")}.Mask" "${(!flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.y_axis})`);
    // fp.push(`(pad "13" smd rect (at 0.0 ${flipN(!flip, -2.4)} ${flipR(!flip, p.r + 0)}) (size 0.3 1.4) (layers "${(!flip ? "B" : "F")}.Cu" "${(!flip ? "B" : "F")}.Mask" "${(!flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.SW})`);
    // fp.push(`(pad "14" smd rect (at 0.5 ${flipN(!flip, -2.4)} ${flipR(!flip, p.r + 0)}) (size 0.3 1.4) (layers "${(!flip ? "B" : "F")}.Cu" "${(!flip ? "B" : "F")}.Mask" "${(!flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.GND})`);
    // fp.push(`(pad "15" smd rect (at 1.0 ${flipN(!flip, -2.4)} ${flipR(!flip, p.r + 0)}) (size 0.3 1.4) (layers "${(!flip ? "B" : "F")}.Cu" "${(!flip ? "B" : "F")}.Mask" "${(!flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.x_axis})`);
    // fp.push(`(pad "SH11" smd custom (at -2.425 ${flipN(!flip, -1.5)} ${flipR(!flip, p.r + 0)}) (size 1.0 1.0) (layers "${(!flip ? "B" : "F")}.Cu") (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.975 ${flipN(!flip, -0.8)}) (xy 0.975 ${flipN(!flip, -0.8)}) (xy 0.975 ${flipN(!flip, 1.5)}) (xy -0.275 ${flipN(!flip, 1.5)}) (xy -0.275 ${flipN(!flip, 0.8)}) (xy -1.675 ${flipN(!flip, 0.8)}) (xy -1.675 ${flipN(!flip, -0.3)}) (xy -0.975 ${flipN(!flip, -0.3)})) (width 0.01))) ${p.SH1})`);
    // fp.push(`(pad "SH12" smd custom (at 2.425 ${flipN(!flip, -1.5)} ${flipR(!flip, p.r + 0)}) (size 1.0 1.0) (layers "${(!flip ? "B" : "F")}.Cu") (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.975 ${flipN(!flip, -0.8)}) (xy -0.975 ${flipN(!flip, -0.8)}) (xy -0.975 ${flipN(!flip, 1.5)}) (xy 0.275 ${flipN(!flip, 1.5)}) (xy 0.275 ${flipN(!flip, 0.8)}) (xy 1.675 ${flipN(!flip, 0.8)}) (xy 1.675 ${flipN(!flip, -0.3)}) (xy 0.975 ${flipN(!flip, -0.3)})) (width 0.01))) ${p.SH2})`);

    // Drawings on F.CrtYd
    fp.push(`(fp_line (start -4.35 ${flipN(flip, -3.35)}) (end 4.35 ${flipN(flip, -3.35)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
    fp.push(`(fp_line (start 4.35 ${flipN(flip, -3.35)}) (end 4.35 ${flipN(flip, 3.75)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
    fp.push(`(fp_line (start 4.35 ${flipN(flip, 3.75)}) (end -4.35 ${flipN(flip, 3.75)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);
    fp.push(`(fp_line (start -4.35 ${flipN(flip, 3.75)}) (end -4.35 ${flipN(flip, -3.35)}) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") (width 0.05))`);

    // Drawings on F.Fab
    fp.push(`(fp_line (start -3.2 ${flipN(flip, -2.1)}) (end 3.2 ${flipN(flip, -2.1)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.127))`);
    fp.push(`(fp_line (start 3.2 ${flipN(flip, -2.1)}) (end 3.2 ${flipN(flip, 0.7)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.127))`);
    fp.push(`(fp_line (start 3.2 ${flipN(flip, 0.7)}) (end 4.0 ${flipN(flip, 0.7)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.127))`);
    fp.push(`(fp_line (start 4.0 ${flipN(flip, 0.7)}) (end 4.0 ${flipN(flip, 2.1)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.127))`);
    fp.push(`(fp_line (start 4.0 ${flipN(flip, 2.1)}) (end -4.0 ${flipN(flip, 2.1)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.127))`);
    fp.push(`(fp_line (start -4.0 ${flipN(flip, 2.1)}) (end -4.0 ${flipN(flip, 0.7)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.127))`);
    fp.push(`(fp_line (start -4.0 ${flipN(flip, 0.7)}) (end -3.2 ${flipN(flip, 0.7)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.127))`);
    fp.push(`(fp_line (start -3.2 ${flipN(flip, 0.7)}) (end -3.2 ${flipN(flip, -2.1)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.127))`);
    fp.push(`(fp_line (start 4.0 ${flipN(flip, 2.1)}) (end 4.0 ${flipN(flip, 3.5)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.127))`);
    fp.push(`(fp_line (start 4.0 ${flipN(flip, 3.5)}) (end -4.0 ${flipN(flip, 3.5)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.127))`);
    fp.push(`(fp_line (start -4.0 ${flipN(flip, 3.5)}) (end -4.0 ${flipN(flip, 2.1)}) (layer "${(flip ? "B.Fab" : "F.Fab")}") (width 0.127))`);

    // Drawings on F.Mask
    fp.push(`(fp_poly (pts (xy -3.5 ${flipN(flip, -2.4)}) (xy -1.35 ${flipN(flip, -2.4)}) (xy -1.35 ${flipN(flip, 0.1)}) (xy -2.8 ${flipN(flip, 0.1)}) (xy -2.8 ${flipN(flip, -0.6)}) (xy -4.2 ${flipN(flip, -0.6)}) (xy -4.2 ${flipN(flip, -1.9)}) (xy -3.5 ${flipN(flip, -1.9)})) (layer "${(flip ? "B.Mask" : "F.Mask")}") (width 0.01))`);
    fp.push(`(fp_poly (pts (xy 3.5 ${flipN(flip, -2.4)}) (xy 1.35 ${flipN(flip, -2.4)}) (xy 1.35 ${flipN(flip, 0.1)}) (xy 2.8 ${flipN(flip, 0.1)}) (xy 2.8 ${flipN(flip, -0.6)}) (xy 4.2 ${flipN(flip, -0.6)}) (xy 4.2 ${flipN(flip, -1.9)}) (xy 3.5 ${flipN(flip, -1.9)})) (layer "${(flip ? "B.Mask" : "F.Mask")}") (width 0.01))`);

    // Drawings on F.Paste
    fp.push(`(fp_poly (pts (xy -3.4 ${flipN(flip, -2.3)}) (xy -1.45 ${flipN(flip, -2.3)}) (xy -1.45 ${flipN(flip, 0.0)}) (xy -2.7 ${flipN(flip, 0.0)}) (xy -2.7 ${flipN(flip, -0.7)}) (xy -4.1 ${flipN(flip, -0.7)}) (xy -4.1 ${flipN(flip, -1.8)}) (xy -3.4 ${flipN(flip, -1.8)})) (layer "${(flip ? "B.Paste" : "F.Paste")}") (width 0.01))`);
    fp.push(`(fp_poly (pts (xy 3.4 ${flipN(flip, -2.3)}) (xy 1.45 ${flipN(flip, -2.3)}) (xy 1.45 ${flipN(flip, 0.0)}) (xy 2.7 ${flipN(flip, 0.0)}) (xy 2.7 ${flipN(flip, -0.7)}) (xy 4.1 ${flipN(flip, -0.7)}) (xy 4.1 ${flipN(flip, -1.8)}) (xy 3.4 ${flipN(flip, -1.8)})) (layer "${(flip ? "B.Paste" : "F.Paste")}") (width 0.01))`);

    // Drawings on F.SilkS
    fp.push(`(fp_line (start -3.2 ${flipN(flip, -0.38)}) (end -3.2 ${flipN(flip, 0.7)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.127))`);
    fp.push(`(fp_line (start -3.2 ${flipN(flip, 0.7)}) (end -4.0 ${flipN(flip, 0.7)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.127))`);
    fp.push(`(fp_line (start -4.0 ${flipN(flip, 0.7)}) (end -4.0 ${flipN(flip, 2.1)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.127))`);
    fp.push(`(fp_line (start -4.0 ${flipN(flip, 2.1)}) (end 4.0 ${flipN(flip, 2.1)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.127))`);
    fp.push(`(fp_line (start 4.0 ${flipN(flip, 2.1)}) (end 4.0 ${flipN(flip, 0.7)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.127))`);
    fp.push(`(fp_line (start 4.0 ${flipN(flip, 0.7)}) (end 3.2 ${flipN(flip, 0.7)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.127))`);
    fp.push(`(fp_line (start 3.2 ${flipN(flip, 0.7)}) (end 3.2 ${flipN(flip, -0.38)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.127))`);


    fp.push(`(pad "11" smd rect (at -1.0 ${flipN(flip, -2.4)} ${flipR(flip, p.r + 0)}) (size 0.3 1.4) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (solder_mask_margin 0.102) ${p.x_axis})`);
    fp.push(`(pad "12" smd rect (at -0.5 ${flipN(flip, -2.4)} ${flipR(flip, p.r + 0)}) (size 0.3 1.4) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (solder_mask_margin 0.102) ${p.GND})`);
    fp.push(`(pad "13" smd rect (at 0.0 ${flipN(flip, -2.4)} ${flipR(flip, p.r + 0)}) (size 0.3 1.4) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (solder_mask_margin 0.102) ${p.SW})`);
    fp.push(`(pad "14" smd rect (at 0.5 ${flipN(flip, -2.4)} ${flipR(flip, p.r + 0)}) (size 0.3 1.4) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (solder_mask_margin 0.102) ${p.y_axis})`);
    fp.push(`(pad "15" smd rect (at 1.0 ${flipN(flip, -2.4)} ${flipR(flip, p.r + 0)}) (size 0.3 1.4) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (solder_mask_margin 0.102) ${p.VCC})`);
    fp.push(`(pad "SH11" smd custom (at -2.425 ${flipN(flip, -1.5)} ${flipR(flip, p.r + 0)}) (size 1.0 1.0) (layers "${(flip ? "F" : "B")}.Cu") (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.975 ${flipN(flip, -0.8)}) (xy 0.975 ${flipN(flip, -0.8)}) (xy 0.975 ${flipN(flip, 1.5)}) (xy -0.275 ${flipN(flip, 1.5)}) (xy -0.275 ${flipN(flip, 0.8)}) (xy -1.675 ${flipN(flip, 0.8)}) (xy -1.675 ${flipN(flip, -0.3)}) (xy -0.975 ${flipN(flip, -0.3)})) (width 0.01))) ${p.SH1})`);
    fp.push(`(pad "SH12" smd custom (at 2.425 ${flipN(flip, -1.5)} ${flipR(flip, p.r + 0)}) (size 1.0 1.0) (layers "${(flip ? "F" : "B")}.Cu") (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.975 ${flipN(flip, -0.8)}) (xy -0.975 ${flipN(flip, -0.8)}) (xy -0.975 ${flipN(flip, 1.5)}) (xy 0.275 ${flipN(flip, 1.5)}) (xy 0.275 ${flipN(flip, 0.8)}) (xy 1.675 ${flipN(flip, 0.8)}) (xy 1.675 ${flipN(flip, -0.3)}) (xy 0.975 ${flipN(flip, -0.3)})) (width 0.01))) ${p.SH2})`);

    // Drawings on B.CrtYd
    fp.push(`(fp_line (start -4.35 ${flipN(flip, -3.35)}) (end 4.35 ${flipN(flip, -3.35)}) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") (width 0.05))`);
    fp.push(`(fp_line (start 4.35 ${flipN(flip, -3.35)}) (end 4.35 ${flipN(flip, 3.75)}) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") (width 0.05))`);
    fp.push(`(fp_line (start 4.35 ${flipN(flip, 3.75)}) (end -4.35 ${flipN(flip, 3.75)}) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") (width 0.05))`);
    fp.push(`(fp_line (start -4.35 ${flipN(flip, 3.75)}) (end -4.35 ${flipN(flip, -3.35)}) (layer "${(flip ? "F.CrtYd" : "B.CrtYd")}") (width 0.05))`);

    // Drawings on B.Fab
    fp.push(`(fp_line (start -3.2 ${flipN(flip, -2.1)}) (end 3.2 ${flipN(flip, -2.1)}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (width 0.127))`);
    fp.push(`(fp_line (start 3.2 ${flipN(flip, -2.1)}) (end 3.2 ${flipN(flip, 0.7)}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (width 0.127))`);
    fp.push(`(fp_line (start 3.2 ${flipN(flip, 0.7)}) (end 4.0 ${flipN(flip, 0.7)}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (width 0.127))`);
    fp.push(`(fp_line (start 4.0 ${flipN(flip, 0.7)}) (end 4.0 ${flipN(flip, 2.1)}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (width 0.127))`);
    fp.push(`(fp_line (start 4.0 ${flipN(flip, 2.1)}) (end -4.0 ${flipN(flip, 2.1)}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (width 0.127))`);
    fp.push(`(fp_line (start -4.0 ${flipN(flip, 2.1)}) (end -4.0 ${flipN(flip, 0.7)}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (width 0.127))`);
    fp.push(`(fp_line (start -4.0 ${flipN(flip, 0.7)}) (end -3.2 ${flipN(flip, 0.7)}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (width 0.127))`);
    fp.push(`(fp_line (start -3.2 ${flipN(flip, 0.7)}) (end -3.2 ${flipN(flip, -2.1)}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (width 0.127))`);
    fp.push(`(fp_line (start 4.0 ${flipN(flip, 2.1)}) (end 4.0 ${flipN(flip, 3.5)}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (width 0.127))`);
    fp.push(`(fp_line (start 4.0 ${flipN(flip, 3.5)}) (end -4.0 ${flipN(flip, 3.5)}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (width 0.127))`);
    fp.push(`(fp_line (start -4.0 ${flipN(flip, 3.5)}) (end -4.0 ${flipN(flip, 2.1)}) (layer "${(flip ? "F.Fab" : "B.Fab")}") (width 0.127))`);

    // Drawings on B.Mask
    fp.push(`(fp_poly (pts (xy -3.5 ${flipN(flip, -2.4)}) (xy -1.35 ${flipN(flip, -2.4)}) (xy -1.35 ${flipN(flip, 0.1)}) (xy -2.8 ${flipN(flip, 0.1)}) (xy -2.8 ${flipN(flip, -0.6)}) (xy -4.2 ${flipN(flip, -0.6)}) (xy -4.2 ${flipN(flip, -1.9)}) (xy -3.5 ${flipN(flip, -1.9)})) (layer "${(flip ? "F.Mask" : "B.Mask")}") (width 0.01))`);
    fp.push(`(fp_poly (pts (xy 3.5 ${flipN(flip, -2.4)}) (xy 1.35 ${flipN(flip, -2.4)}) (xy 1.35 ${flipN(flip, 0.1)}) (xy 2.8 ${flipN(flip, 0.1)}) (xy 2.8 ${flipN(flip, -0.6)}) (xy 4.2 ${flipN(flip, -0.6)}) (xy 4.2 ${flipN(flip, -1.9)}) (xy 3.5 ${flipN(flip, -1.9)})) (layer "${(flip ? "F.Mask" : "B.Mask")}") (width 0.01))`);

    // Drawings on B.Paste
    fp.push(`(fp_poly (pts (xy -3.4 ${flipN(flip, -2.3)}) (xy -1.45 ${flipN(flip, -2.3)}) (xy -1.45 ${flipN(flip, 0.0)}) (xy -2.7 ${flipN(flip, 0.0)}) (xy -2.7 ${flipN(flip, -0.7)}) (xy -4.1 ${flipN(flip, -0.7)}) (xy -4.1 ${flipN(flip, -1.8)}) (xy -3.4 ${flipN(flip, -1.8)})) (layer "${(flip ? "F.Paste" : "B.Paste")}") (width 0.01))`);
    fp.push(`(fp_poly (pts (xy 3.4 ${flipN(flip, -2.3)}) (xy 1.45 ${flipN(flip, -2.3)}) (xy 1.45 ${flipN(flip, 0.0)}) (xy 2.7 ${flipN(flip, 0.0)}) (xy 2.7 ${flipN(flip, -0.7)}) (xy 4.1 ${flipN(flip, -0.7)}) (xy 4.1 ${flipN(flip, -1.8)}) (xy 3.4 ${flipN(flip, -1.8)})) (layer "${(flip ? "F.Paste" : "B.Paste")}") (width 0.01))`);

    // Drawings on B.SilkS
    fp.push(`(fp_line (start -3.2 ${flipN(flip, -0.38)}) (end -3.2 ${flipN(flip, 0.7)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.127))`);
    fp.push(`(fp_line (start -3.2 ${flipN(flip, 0.7)}) (end -4.0 ${flipN(flip, 0.7)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.127))`);
    fp.push(`(fp_line (start -4.0 ${flipN(flip, 0.7)}) (end -4.0 ${flipN(flip, 2.1)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.127))`);
    fp.push(`(fp_line (start -4.0 ${flipN(flip, 2.1)}) (end 4.0 ${flipN(flip, 2.1)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.127))`);
    fp.push(`(fp_line (start 4.0 ${flipN(flip, 2.1)}) (end 4.0 ${flipN(flip, 0.7)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.127))`);
    fp.push(`(fp_line (start 4.0 ${flipN(flip, 0.7)}) (end 3.2 ${flipN(flip, 0.7)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.127))`);
    fp.push(`(fp_line (start 3.2 ${flipN(flip, 0.7)}) (end 3.2 ${flipN(flip, -0.38)}) (layer "${(flip ? "F.SilkS" : "B.SilkS")}") (width 0.127))`);

    fp.push(')');
    return fp.join('\n');
  }
}
function normalizeAngle(angle) {
  angle = angle % 360;
  if (angle <= -180) angle += 360;
  else if (angle > 180) angle -= 360;
  return angle;
}
function flipR(flip, r) { return normalizeAngle(flip ? 180-r : r) }
function flipN(flip, n) { return flip ? -n : n }

