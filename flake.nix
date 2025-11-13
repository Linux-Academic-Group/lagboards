{
  description = "Flake with shell for LagBoards Project";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  };

  outputs = {
    self,
    nixpkgs,
    ...
  } @ inputs: let
    system = "x86_64-linux";
    pkgs = nixpkgs.legacyPackages.${system};
  in {
    devShells.x86_64-linux.default = pkgs.mkShell {
      shellHook = ''
        alias efbo="ergogen . && open output/pcbs/lagbord.kicad_pcb"
        alias watch="echo config.yaml | entr ./skypcik.sh"
      '';

      packages = with pkgs; [
        ergogen
        git
      ];
    };
  };
}
