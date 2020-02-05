import Phaser from 'phaser';
import Button from './button';
import TextMessage from './TextMessage';


class ConfirmBox extends Phaser.GameObjects.Container {
  constructor(scene, onConfirm = _=>0, onCancel = _=>0) {
    // Text Message Object
    const TextBox = new TextMessage(scene, 0, 0, 200, 200, 'Lorem ipsum blah blah blah');
    // Confrim Button Object
    const ConfirmButton = new Button(scene, -120, 150, 'Confirm', () => this.destroy() && onConfirm());
    // Cancel Button Object
    const CancelButton = new Button(scene, 120, 150, 'Cancel', () => this.destroy());

    // game canvas center points
    const HORIZONTAL_CENTER = scene.game.config.width / 2;
    const VERTICAL_CENTER = scene.game.config.height / 2;
    // render this object
    super(scene, HORIZONTAL_CENTER, VERTICAL_CENTER, [ TextBox, ConfirmButton, CancelButton ]);
    scene.add.existing(this);
  }
}


export default ConfirmBox;