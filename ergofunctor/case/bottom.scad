*color("cyan", alpha=0.5)
  translate([0, 0, 0.5])
    import("./outlines/board.dxf");

*color("orange", alpha=0.5)
  import("./ch1.stl");

module MCUCut() {
  translate([175.85, -93.5])
    square([10, 50]);
  translate([178.85, -82.5])
    square([10, 50]);
}

module Bottom() {
  union() {
    difference() {
      offset(delta=3)
        import("./outlines/board.dxf");
      import("./outlines/board.dxf");
      import("./outlines/raw.dxf");
      MCUCut();
    }
    intersection() {
      difference() {
        offset(delta=3)
          import("./outlines/raw.dxf");
        import("./outlines/raw.dxf");
      }
      rotate([0, 0, 5])
        translate([28.6, -111.5, 0])
          square([20, 15]);
    }
  }
}

color("red", alpha=0.5) {
  translate([0, 0, -0.5]) {
    linear_extrude(8) {
      Bottom();
    }
  }
  translate([0, 0, -2.5]) {
    linear_extrude(3) {
      difference() {
        intersection() {
          offset(delta=1.5)
            Bottom();
          offset(delta=3) {
            import("./outlines/board.dxf");
            import("./outlines/raw.dxf");
          }
        }
        MCUCut();
      }
    }
  }
}
