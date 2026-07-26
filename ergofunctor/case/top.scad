screw_pin_h = 3;

translate([0, 0, screw_pin_h / 2]) {
  linear_extrude(5) {
    difference() {
      import("./outlines/raw.dxf");
      offset(delta=-1)
        import("./outlines/keys.dxf");
    }
  }
  translate([0, 0, 4]) {
    linear_extrude(1) {
      difference() {
        import("./outlines/raw.dxf");
        offset(delta=-2)
          import("./outlines/keys.dxf");
      }
    }
  }

  color("red") {
    // H1
    translate([56.77, -68.33, -screw_pin_h / 2])
      cylinder(h=screw_pin_h, r=1.1, center=true);
    // H2
    translate([134.84, -55.99, -screw_pin_h / 2])
      cylinder(h=screw_pin_h, r=1.1, center=true);
    // H3
    translate([96.84, -48.38, -screw_pin_h / 2])
      cylinder(h=screw_pin_h, r=1.1, center=true);
    // H4
    translate([96.84, -86.48, -screw_pin_h / 2])
      cylinder(h=screw_pin_h, r=1.1, center=true);
    // H5
    translate([146.27, -120.11, -screw_pin_h / 2])
      cylinder(h=screw_pin_h, r=1.1, center=true);
  }
}
