import "./styles.css";

import Scene, { SceneConfig } from "./scene";

function main() {
  const scene = Scene.getInstance();

  scene.init();
  scene.render("intro");
}

main();
