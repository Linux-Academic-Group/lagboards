module.exports = {
  params: {
    designator: 'XX',
    side: 'F',
    AD1: { type: 'net', value: "AD1" },
    AD2: { type: 'net', value: "AD2" },
    GND: { type: 'net', value: "GND" },
    GND: { type: 'net', value: "GND" },
    SW: { type: 'net', value: "SW" },
    VCC: { type: 'net', value: "VCC" },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "joystick"`);
fp.push(`(at ${p.x} ${p.y} ${flipR(flip, p.r)})`);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Value" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Datasheet" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);
fp.push(`(property "Description" "" hide (at 0 0 ${flipR(flip, p.r) % 180}) (layer "${p.side}.Fab") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(attr smd)`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "1" thru_hole oval (at 21.75 ${flipN(flip, -5.8)} ${flipR(flip, p.r + 180)}) (size 2.54 1.27) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.VCC})`);
fp.push(`(pad "2" thru_hole oval (at 21.75 ${flipN(flip, -7.8)} ${flipR(flip, p.r + 180)}) (size 2.54 1.27) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GND})`);
fp.push(`(pad "3" thru_hole oval (at 21.75 ${flipN(flip, -9.8)} ${flipR(flip, p.r + 180)}) (size 2.54 1.27) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.AD2})`);
fp.push(`(pad "4" thru_hole oval (at 21.75 ${flipN(flip, -11.8)} ${flipR(flip, p.r + 180)}) (size 2.54 1.27) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.SW})`);
fp.push(`(pad "5" thru_hole oval (at 21.75 ${flipN(flip, -13.8)} ${flipR(flip, p.r + 180)}) (size 2.54 1.27) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GND})`);
fp.push(`(pad "6" thru_hole oval (at 21.75 ${flipN(flip, -15.8)} ${flipR(flip, p.r + 0)}) (size 2.54 1.27) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.AD1})`);
fp.push(`(pad "7" thru_hole circle (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 90)}) (size 3 3) (drill 2) (layers "*.Cu" "*.Mask") (remove_unused_layers no))`);

// Drawings on F.Fab
fp.push(`(fp_text user "\${REFERENCE}" (at -14.5 ${flipN(flip, 13)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

// Properties
// fp.push(`(property "Reference" "REF**" (at -16 ${flipN(flip, 15)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 1 1) (thickness 0.1)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "joystick" (at -14.5 ${flipN(flip, 11)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 ${flipN(flip, 0)} ${flipR(flip, p.r + 0) % 180}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

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

