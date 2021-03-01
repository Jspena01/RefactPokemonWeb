export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.width = 20;
    this.height = 20;
    this.speed = 10;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: gameHeight / 2 - this.height / 2,
    };
    this.limitX = this.position.x + this.speed >= this.gameWidth + this.speed;
  }

  draw(context) {
    context.fillStyle = "#f00";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update(deltaTime) {
    if (!deltaTime) return;
  }
  moveRight() {
    this.position.x += this.speed;
  }
  moveLeft() {
    this.position.x -= this.speed;
  }
  moveUp() {
    this.position.y -= this.speed;
  }
  moveBottom() {
    this.position.y += this.speed;
  }
}
