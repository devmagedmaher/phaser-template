import Phaser from 'phaser';


class Button extends Phaser.GameObjects.Container {
  constructor(scene, x, y, width, height text, onPress = _=>0) {
    // Create Rectangle
    const Rect = scene.add.rectangle(0, 0, 200, 80, 0xffffff);
    // Create Text
    const Text = scene.add.text(0, 0, text, {color: '#555', fontSize: '36px'}).setOrigin(0.5);
    
    // set Rectangle to interactive
    Rect.setInteractive().on('pointerup', onPress);

    super(scene, x, y, [ Rect, Text ]);
    // render Button
    scene.add.existing(this);
  }
}


export default Button;