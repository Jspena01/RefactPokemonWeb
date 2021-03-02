export default class colliders {
  constructor(character, context) {
    this.characterP1 = character;
    this.context = context;
  }

  drawCollision() {
    //Margen entre el borde izquierdo y la esquina superior izquierda del personaje eje y
    this.context.beginPath();
    this.context.moveTo(0, this.characterP1.position.y - this.characterP1.size);
    this.context.lineTo(
      this.characterP1.position.x - this.characterP1.size,
      this.characterP1.position.y - this.characterP1.size
    );
    this.context.stroke();

    //Margen entre el borde superior y la esquina superior izquierda del personaje eje x
    this.context.beginPath();
    this.context.moveTo(this.characterP1.position.x - this.characterP1.size, 0);
    this.context.lineTo(
      this.characterP1.position.x - this.characterP1.size,
      this.characterP1.position.y - this.characterP1.size
    );
    this.context.stroke();

    //Margen entre el borde superior y la esquina superior derecha del personaje eje x
    this.context.beginPath();
    this.context.moveTo(this.characterP1.position.x + this.characterP1.size, 0);
    this.context.lineTo(
      this.characterP1.position.x + this.characterP1.size,
      this.characterP1.position.y - this.characterP1.size
    );
    this.context.stroke();

    //Margen entre el borde derecho y la esquina superior derecha del personaje eje x
    this.context.beginPath();
    this.context.moveTo(
      this.characterP1.position.x + this.characterP1.size,
      this.characterP1.position.y - this.characterP1.size
    );
    this.context.lineTo(
      this.characterP1.gameWidth,
      this.characterP1.position.y - this.characterP1.size
    );
    this.context.stroke();


    // Margen entre el borde izquierdo y la esquina inferior izquierda del personaje eje y

    this.context.beginPath();
    this.context.moveTo(0, this.characterP1.position.y + this.characterP1.size);
    this.context.lineTo(
      this.characterP1.position.x - this.characterP1.size,
      this.characterP1.position.y + this.characterP1.size
    );
    this.context.stroke();

    //Margen entre el borde inferior y la esquina inferior izquierda del personaje eje x
    this.context.beginPath();
    this.context.moveTo(
      this.characterP1.position.x - this.characterP1.size,
      this.characterP1.position.y + this.characterP1.size
    );
    this.context.lineTo(
      this.characterP1.position.x - this.characterP1.size,
      this.characterP1.gameHeight
    );
    this.context.stroke();

    //Margen entre el borde derecho y la esquina inferior derecha del personaje eje x
    this.context.beginPath();
    this.context.moveTo(
      this.characterP1.gameWidth,
      this.characterP1.position.y + this.characterP1.size
    );
    this.context.lineTo(
      this.characterP1.position.x + this.characterP1.size,
      this.characterP1.position.y + this.characterP1.size
    );
    this.context.stroke();

    //Margen entre el borde inferior y la esquina inferior derecha del personaje eje x
    this.context.beginPath();
    this.context.moveTo(
      this.characterP1.position.x + this.characterP1.size,
      this.characterP1.position.y + this.characterP1.size
    );
    this.context.lineTo(
      this.characterP1.position.x + this.characterP1.size,
      this.characterP1.gameHeight
    );
    this.context.stroke();
  }
}
