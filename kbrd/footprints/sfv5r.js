module.exports = {
    params: {
      designator: 'CONN',
      side: 'F',
      pad_1: {type: 'net', value: 'RAW'},
      pad_2: {type: 'net', value: 'GND'},
      reverse: true,
    },
    body: p => {
      const top = `
      (
      footprint AMPHENOL_SFV5R-4STE1HLF (layer F.Cu) (tedit 68C5A1F9)
        (descr "")
        (attr smd)
        (fp_text reference REF** (at -0.075 -6.135 0) (layer F.SilkS)
          (effects (font (size 1.0 1.0) (thickness 0.15)))
        )
        (fp_text value AMPHENOL_SFV5R-4STE1HLF (at 11.355 -4.635 0) (layer F.Fab)
          (effects (font (size 1.0 1.0) (thickness 0.15)))
        )
        ${p.at /* parametric position */}
      `
      const front = `
        (pad 1 smd rect (at -1.0 -2.4) (size 0.3 1.4) (layers F.Cu F.Mask F.Paste) (solder_mask_margin 0.102))
          (pad 2 smd rect (at -0.5 -2.4) (size 0.3 1.4) (layers F.Cu F.Mask F.Paste) (solder_mask_margin 0.102))
          (pad 3 smd rect (at 0.0 -2.4) (size 0.3 1.4) (layers F.Cu F.Mask F.Paste) (solder_mask_margin 0.102))
          (pad 4 smd rect (at 0.5 -2.4) (size 0.3 1.4) (layers F.Cu F.Mask F.Paste) (solder_mask_margin 0.102))
          (pad 5 smd rect (at 1.0 -2.4) (size 0.3 1.4) (layers F.Cu F.Mask F.Paste) (solder_mask_margin 0.102))
          (pad SH1 smd custom (at -2.425 -1.5) (size 1.0 1.0) (layers F.Cu) (options (clearance outline) (anchor rect))
            (primitives
              (gr_poly
                (pts
                  (xy -0.975 -0.8)
                  (xy 0.975 -0.8)
                  (xy 0.975 1.5)
                  (xy -0.275 1.5)
                  (xy -0.275 0.8)
                  (xy -1.675 0.8)
                  (xy -1.675 -0.3)
                  (xy -0.975 -0.3)
                ) (width 0.01)
              )
            )
          )
          (pad SH2 smd custom (at 2.425 -1.5) (size 1.0 1.0) (layers F.Cu) (options (clearance outline) (anchor rect))
            (primitives
              (gr_poly
                (pts
                  (xy 0.975 -0.8)
                  (xy -0.975 -0.8)
                  (xy -0.975 1.5)
                  (xy 0.275 1.5)
                  (xy 0.275 0.8)
                  (xy 1.675 0.8)
                  (xy 1.675 -0.3)
                  (xy 0.975 -0.3)
                ) (width 0.01)
              )
            )
          )
      `
      const back = `
        (pad 1 smd rect (at -1.0 -2.4) (size 0.3 1.4) (layers B.Cu B.Mask B.Paste) (solder_mask_margin 0.102))
          (pad 2 smd rect (at -0.5 -2.4) (size 0.3 1.4) (layers B.Cu B.Mask B.Paste) (solder_mask_margin 0.102))
          (pad 3 smd rect (at 0.0 -2.4) (size 0.3 1.4) (layers B.Cu B.Mask B.Paste) (solder_mask_margin 0.102))
          (pad 4 smd rect (at 0.5 -2.4) (size 0.3 1.4) (layers B.Cu B.Mask B.Paste) (solder_mask_margin 0.102))
          (pad 5 smd rect (at 1.0 -2.4) (size 0.3 1.4) (layers B.Cu B.Mask B.Paste) (solder_mask_margin 0.102))
          (pad SH1 smd custom (at -2.425 -1.5) (size 1.0 1.0) (layers B.Cu) (options (clearance outline) (anchor rect))
            (primitives
              (gr_poly
                (pts
                  (xy -0.975 -0.8)
                  (xy 0.975 -0.8)
                  (xy 0.975 1.5)
                  (xy -0.275 1.5)
                  (xy -0.275 0.8)
                  (xy -1.675 0.8)
                  (xy -1.675 -0.3)
                  (xy -0.975 -0.3)
                ) (width 0.01)
              )
            )
          )
          (pad SH2 smd custom (at 2.425 -1.5) (size 1.0 1.0) (layers B.Cu) (options (clearance outline) (anchor rect))
            (primitives
              (gr_poly
                (pts
                  (xy 0.975 -0.8)
                  (xy -0.975 -0.8)
                  (xy -0.975 1.5)
                  (xy 0.275 1.5)
                  (xy 0.275 0.8)
                  (xy 1.675 0.8)
                  (xy 1.675 -0.3)
                  (xy 0.975 -0.3)
                ) (width 0.01)
              )
            )
          )
      `

      const bottom = `
      ${'' /* Add parts that should be on both sides here (closing bracket) */}
      )
      `

      let final = top;

      if(p.side == "F" || p.reverse) {
        final += front;
      }
      if(p.side == "B" || p.reverse) {
        final += back;
      }

      final += bottom;

      return final;
    }
  }
