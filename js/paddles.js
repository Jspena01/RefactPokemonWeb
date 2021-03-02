export default class paddle {
  constructor(gameWidth, gameHeight, context) {
    this.context = context;
    this.size = 50;
    this.speed = 10;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.colorUp = "#f00";
    this.colorBottom = "#fff";
    this.time = 0;
    this.position = {
      x: gameWidth / 2,
      y: gameHeight / 2,
    };
  }
  draw(context) {}
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
  drawCharacter() {
    //Dibuja una circunferencia roja y le elimina la mitad
    this.context.beginPath();
    this.context.fillStyle = this.colorUp;
    this.context.arc(
      this.position.x,
      this.position.y,
      this.size,
      0,
      Math.PI * 2
    );
    this.context.fill();
    this.context.stroke();

    //Dibuja la mitad de una circunferencia blanca
    this.context.beginPath();
    this.context.fillStyle = this.colorBottom;
    this.context.arc(
      this.position.x,
      this.position.y,
      this.size,
      0,
      Math.PI * 1
    );
    this.context.fill();
    this.context.stroke();

    //Dibuja una linea en medio

    this.context.beginPath();
    this.context.fillStyle = "Black";
    this.context.fillRect(
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
    this.context.beginPath();
    this.context.fillStyle = "white";
    this.context.arc(
      this.position.x,
      this.position.y,
      this.size / 6,
      0,
      Math.PI * 2
    );
    this.context.fill();
    //Dibuja una circunferencia con una circunferencia de la 6ta parte del tamaño del tamaño total del circulo y pinta el borde de negro

    this.context.beginPath();
    this.context.arc(
      this.position.x,
      this.position.y,
      this.size / 6,
      0,
      Math.PI * 2
    );
    this.context.stroke();

    //Repite el mismo circulo anterior, para aumentar la intensidad del color

    this.context.beginPath();
    this.context.arc(
      this.position.x,
      this.position.y,
      this.size / 6,
      0,
      Math.PI * 2
    );
    this.context.stroke();
  }
}
