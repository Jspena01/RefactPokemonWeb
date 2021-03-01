export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.size = 50;
    this.speed = 10;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    this.position = {
      x: gameWidth / 2,
      y: gameHeight / 2,
    };
    this.limitX = this.position.x + this.speed >= this.gameWidth + this.speed;
  }

  draw(context) {
    //Dibuja una circunferencia roja y le elimina la mitad
    context.beginPath();
    context.fillStyle = "red";
    context.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 2);
    context.fill();
    context.stroke();

    //Dibuja la mitad de una circunferencia blanca
    context.beginPath();
    context.fillStyle = "white";
    context.arc(this.position.x, this.position.y, this.size, 0, Math.PI * 1);
    context.fill();
    context.stroke();

    //Dibuja una linea en medio

    context.beginPath();
    context.fillStyle = "Black";
    context.fillRect(
      this.position.x - this.size,
      this.position.y,
      this.size * 2,
      1.5
    );

    //Realiza las lineas de un plano cartesiano para verificar el centro
    // context.beginPath();
    // context.fillRect(400,0,1,this.gameHeight);
    // context.fillRect(0,400,this.gameWidth,1);

    //Dibuja una circunferencia con una circunferencia de la 6ta parte del tamaño del tamaño total del circulo y lo llena de blanco
    context.beginPath();
    context.fillStyle = "white";
    context.arc(
      this.position.x,
      this.position.y,
      this.size / 6,
      0,
      Math.PI * 2
    );
    context.fill();
    //Dibuja una circunferencia con una circunferencia de la 6ta parte del tamaño del tamaño total del circulo y pinta el borde de negro

    context.beginPath();
    context.arc(
      this.position.x,
      this.position.y,
      this.size / 6,
      0,
      Math.PI * 2
    );
    context.stroke();

    //Repite el mismo circulo anterior, para aumentar la intensidad del color

    context.beginPath();
    context.arc(
      this.position.x,
      this.position.y,
      this.size / 6,
      0,
      Math.PI * 2
    );
    context.stroke();
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
