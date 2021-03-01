import Paddle from "./paddles.js";

export default class inputHandler {
  constructor(characterP1) {
    //Detect if the character will collide with a border wall/floor
    this.limitRX = () => {
      return (
        characterP1.position.x + characterP1.speed >= characterP1.gameWidth
      );
    };
    this.limitBY = () => {
      return (
        characterP1.position.y + characterP1.speed >= characterP1.gameHeight
      );
    };
    this.limitLX = () => {
      return characterP1.position.x - characterP1.speed <= 0;
    };
    this.limitUY = () => {
      return characterP1.position.y - characterP1.speed <= 0;
    };

    document.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case 87:
          characterP1.moveUp();
          if (this.limitUY()) characterP1.position.y = 0;
          break;
        case 83:
          characterP1.moveBottom();
          if (this.limitBY())
            characterP1.position.y =
              characterP1.gameHeight - characterP1.height;
          break;
        case 68:
          characterP1.moveRight();
          if (this.limitRX())
            characterP1.position.x = characterP1.gameWidth - characterP1.width;
          break;
        case 65:
          characterP1.moveLeft();
          if (this.limitLX()) characterP1.position.x = 0;
          break;
      }
    });
  }
}