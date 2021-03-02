import paddle from "./paddles.js";
import inputHandler from "./input.js";
import enemy from "./enemy.js";
import collider from "./colliders.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const gameWidth = 800;
const gameHeight = 800;

const enemy1 = new enemy(gameWidth, gameHeight, context);
const characterP1 = new paddle(gameWidth, gameHeight, context, enemy1);
const input = new inputHandler(characterP1);
const colliderCharacterP1 = new collider(characterP1, context);
const colliderEnemy1 = new collider(enemy1, context);

let lastTime = 0;
const gameLoop = (timestamp) => {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  context.clearRect(0, 0, gameWidth, gameHeight);
  characterP1.update(deltaTime);
  characterP1.draw(context);
  enemy1.drawCharacter();
  enemy1.limitCollition();
  characterP1.drawCharacter();
  colliderCharacterP1.drawCollision();
  colliderEnemy1.drawCollision();
  requestAnimationFrame(gameLoop);
};

gameLoop();
