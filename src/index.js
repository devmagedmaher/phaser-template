import Phaser from "phaser";
// imoprt Scenes
import MainScene from "./scenes/main";


const config = {
  type: Phaser.AUTO,
  parent: "phaser",
  width: 720,
  height: 1280,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  scene: [
    MainScene
  ]
};


const game = new Phaser.Game(config);