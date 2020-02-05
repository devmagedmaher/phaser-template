import Phaser from 'phaser';


class TextMessage extends Phaser.GameObjects.Container {
  constructor(scene, text, onConfirm = false) {
    const width = 500;
    const height = 350;

    // pause scene
    scene.scene.pause();

    // Rectangle Object
    const Rect = scene.add.rectangle(0, 0, width, height, 0xffffff);
    // Text Object
    const Text = scene.make.text({
      x: 0, y: -50,
      text: text,
      origin: 0.5,
      fixedWidth: width,
      fixedHeight: height-100,
      style: {
        // fontSize: '36px',
        color: '#555',
        wordWrap: { width },
        padding: {
          top: 50,
          right: 40,
          bottom: 50, 
          left: 40
        }
      },
      add: true
    });

    // render this object
    const game = scene.game.config;
    super(scene, game.width/2, game.height/2, [ Rect, Text ]);
    scene.add.existing(this);
  }
}


export default TextMessage;