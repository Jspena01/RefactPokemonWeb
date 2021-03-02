import paddle from "./paddles.js";
export default class enemy extends paddle {
  constructor(
    position,
    drawCharacter,
    context,
    size,
    speed,
    colorUp,
    colorBottom,
    limitX,
    deltaTime
  ) {
    super(
      position,
      position,
      drawCharacter,
      context,
      size,
      speed,
      colorUp,
      colorBottom,
      limitX,
      deltaTime
    );
    this.colorUp = "#a1a";
    this.size = 40;
    this.context = context;
    this.position.x = Math.round(Math.random() * 800);
    this.position.y = Math.round(Math.random() * 800);
  }
  limitRX = () => {
    return this.position.x + this.size >= this.gameWidth;
  };
  limitBY = () => {
    return this.position.y + this.size >= this.gameHeight;
  };
  limitLX = () => {
    return this.position.x - this.size <= 0;
  };
  limitUY = () => {
    return this.position.y - this.size <= 0;
  };
  limitCollition() {
    if (this.limitUY()) this.position.y = 0 + this.size + 5;
    if (this.limitBY()) this.position.y = this.gameHeight - this.size;
    if (this.limitRX()) this.position.x = this.gameWidth - this.size;
    if (this.limitLX()) this.position.x = 0 + this.size + 10;
  }
}
