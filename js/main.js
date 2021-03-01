import Paddle from "./paddles.js";
import inputHandler from "./input.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const gameWidth = 800;
const gameHeight = 800;

const characterP1 = new Paddle(gameWidth, gameHeight);
const input = new inputHandler(characterP1);

let lastTime = 0;

const gameLoop = (timestamp) => {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  context.clearRect(0, 0, gameWidth, gameHeight);
  characterP1.update(deltaTime);
  characterP1.draw(context);

  requestAnimationFrame(gameLoop);
};

gameLoop();
