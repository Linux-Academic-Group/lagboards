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
    const flip = p.side === "B";
    if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

    fp.push(`(footprint AMPHENOL_SFV5R-4STE1HLF`);
    fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
    fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);

    fp.push(`(descr "")`);
    fp.push(`(attr smd)`);

    // Pads
    fp.push(`(pad "1" smd rect (at -1.0 ${flipN(flip, -2.4)} ${flipR(flip, p.r + 0)}) (size 0.3 1.4) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.VCC})`);
    fp.push(`(pad "2" smd rect (at -0.5 ${flipN(flip, -2.4)} ${flipR(flip, p.r + 0)}) (size 0.3 1.4) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.y_axis})`);
    fp.push(`(pad "3" smd rect (at 0.0 ${flipN(flip, -2.4)} ${flipR(flip, p.r + 0)}) (size 0.3 1.4) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.SW})`);
    fp.push(`(pad "4" smd rect (at 0.5 ${flipN(flip, -2.4)} ${flipR(flip, p.r + 0)}) (size 0.3 1.4) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.GND})`);
    fp.push(`(pad "5" smd rect (at 1.0 ${flipN(flip, -2.4)} ${flipR(flip, p.r + 0)}) (size 0.3 1.4) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste") (solder_mask_margin 0.102) ${p.x_axis})`);
    fp.push(`(pad "SH1" smd custom (at -2.425 ${flipN(flip, -1.5)} ${flipR(flip, p.r + 0)}) (size 1.0 1.0) (layers "${(flip ? "B" : "F")}.Cu") (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.975 ${flipN(flip, -0.8)}) (xy 0.975 ${flipN(flip, -0.8)}) (xy 0.975 ${flipN(flip, 1.5)}) (xy -0.275 ${flipN(flip, 1.5)}) (xy -0.275 ${flipN(flip, 0.8)}) (xy -1.675 ${flipN(flip, 0.8)}) (xy -1.675 ${flipN(flip, -0.3)}) (xy -0.975 ${flipN(flip, -0.3)})) (width 0.01))) ${p.SH1})`);
    fp.push(`(pad "SH2" smd custom (at 2.425 ${flipN(flip, -1.5)} ${flipR(flip, p.r + 0)}) (size 1.0 1.0) (layers "${(flip ? "B" : "F")}.Cu") (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.975 ${flipN(flip, -0.8)}) (xy -0.975 ${flipN(flip, -0.8)}) (xy -0.975 ${flipN(flip, 1.5)}) (xy 0.275 ${flipN(flip, 1.5)}) (xy 0.275 ${flipN(flip, 0.8)}) (xy 1.675 ${flipN(flip, 0.8)}) (xy 1.675 ${flipN(flip, -0.3)}) (xy 0.975 ${flipN(flip, -0.3)})) (width 0.01))) ${p.SH2})`);

    // Drawings on F.SilkS
    fp.push(`(fp_line (start -3.2 ${flipN(flip, -0.38)}) (end -3.2 ${flipN(flip, 0.7)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.127))`);
    fp.push(`(fp_line (start -3.2 ${flipN(flip, 0.7)}) (end -4.0 ${flipN(flip, 0.7)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.127))`);
    fp.push(`(fp_line (start -4.0 ${flipN(flip, 0.7)}) (end -4.0 ${flipN(flip, 2.1)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.127))`);
    fp.push(`(fp_line (start -4.0 ${flipN(flip, 2.1)}) (end 4.0 ${flipN(flip, 2.1)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.127))`);
    fp.push(`(fp_line (start 4.0 ${flipN(flip, 2.1)}) (end 4.0 ${flipN(flip, 0.7)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.127))`);
    fp.push(`(fp_line (start 4.0 ${flipN(flip, 0.7)}) (end 3.2 ${flipN(flip, 0.7)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.127))`);
    fp.push(`(fp_line (start 3.2 ${flipN(flip, 0.7)}) (end 3.2 ${flipN(flip, -0.38)}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") (width 0.127))`);

    // Vias
    // fp.push(`(pad "V1" thru_hole circle (at -1.4 ${flipN(flip, 3)} ${flipR(flip, p.r + 0)}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.VCC})`);
    // fp.push(`(pad "V2" thru_hole circle (at -0.7 ${flipN(flip, 1.5)} ${flipR(flip, p.r + 0)}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.y_axis})`);
    // fp.push(`(pad "V3" thru_hole circle (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0)}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.SW})`);
    // fp.push(`(pad "V4" thru_hole circle (at 0.7 ${flipN(flip, 1.5)} ${flipR(flip, p.r + 0)}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.GND})`);
    // fp.push(`(pad "V5" thru_hole circle (at 1.4 ${flipN(flip, 3)} ${flipR(flip, p.r + 0)}) (size 0.8 0.8) (drill 0.4) (layers *.Cu *.Mask) ${p.x_axis})`);
    

    fp.push(`(layer "${(flip ? "F.Cu" : "B.Cu")}")`);

    fp.push(`(descr "")`);
    fp.push(`(attr smd)`);

    // Pads
    fp.push(`(pad "6" smd rect (at 1.0 ${flipN(flip, -2.4)} ${flipR(flip, p.r + 0)}) (size 0.3 1.4) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (solder_mask_margin 0.102) ${p.VCC})`);
    fp.push(`(pad "7" smd rect (at 0.5 ${flipN(flip, -2.4)} ${flipR(flip, p.r + 0)}) (size 0.3 1.4) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (solder_mask_margin 0.102) ${p.y_axis})`);
    fp.push(`(pad "8" smd rect (at 0.0 ${flipN(flip, -2.4)} ${flipR(flip, p.r + 0)}) (size 0.3 1.4) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (solder_mask_margin 0.102) ${p.SW})`);
    fp.push(`(pad "9" smd rect (at -0.5 ${flipN(flip, -2.4)} ${flipR(flip, p.r + 0)}) (size 0.3 1.4) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (solder_mask_margin 0.102) ${p.GND})`);
    fp.push(`(pad "10" smd rect (at -1.0 ${flipN(flip, -2.4)} ${flipR(flip, p.r + 0)}) (size 0.3 1.4) (layers "${(flip ? "F" : "B")}.Cu" "${(flip ? "F" : "B")}.Mask" "${(flip ? "F" : "B")}.Paste") (solder_mask_margin 0.102) ${p.x_axis})`);
    fp.push(`(pad "SH3" smd custom (at -2.425 ${flipN(flip, -1.5)} ${flipR(flip, p.r + 0)}) (size 1.0 1.0) (layers "${(flip ? "F" : "B")}.Cu") (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.975 ${flipN(flip, -0.8)}) (xy 0.975 ${flipN(flip, -0.8)}) (xy 0.975 ${flipN(flip, 1.5)}) (xy -0.275 ${flipN(flip, 1.5)}) (xy -0.275 ${flipN(flip, 0.8)}) (xy -1.675 ${flipN(flip, 0.8)}) (xy -1.675 ${flipN(flip, -0.3)}) (xy -0.975 ${flipN(flip, -0.3)})) (width 0.01))) ${p.SH1})`);
    fp.push(`(pad "SH4" smd custom (at 2.425 ${flipN(flip, -1.5)} ${flipR(flip, p.r + 0)}) (size 1.0 1.0) (layers "${(flip ? "F" : "B")}.Cu") (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.975 ${flipN(flip, -0.8)}) (xy -0.975 ${flipN(flip, -0.8)}) (xy -0.975 ${flipN(flip, 1.5)}) (xy 0.275 ${flipN(flip, 1.5)}) (xy 0.275 ${flipN(flip, 0.8)}) (xy 1.675 ${flipN(flip, 0.8)}) (xy 1.675 ${flipN(flip, -0.3)}) (xy 0.975 ${flipN(flip, -0.3)})) (width 0.01))) ${p.SH2})`);

    // Drawings on F.SilkS
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
function flipR(flip, r) { return normalizeAngle(flip ? (180 - r) : r) }
function flipN(flip, n) { return flip ? -n : n }

