import paddle from "./paddles.js";
import inputHandler from "./input.js";
import enemy from "./enemy.js";
import collider from "./colliders.js";

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const score = document.getElementById("mainInfoScore");
const time = document.getElementById("mainInfoTime");
const play = document.getElementById("startGame");
const menu = document.getElementById("mainMenu");
const sound = document.getElementById("sound");
const bgSound = document.getElementById("background-sound");
const nickname = document.getElementById("nickname");
bgSound.volume = .2;
play.addEventListener("click",() =>{
  setTimeout(()=>{gameLoop()},850);
  menu.classList.add("main-menu-off");
  menu.firstElementChild.classList.add("main-menu-items-off");
  menu.firstElementChild.nextElementSibling.classList.add("main-menu-items-off");
  menu.firstElementChild.nextElementSibling.nextElementSibling.classList.add("main-menu-items-off");
  }
  )


const gameWidth = canvas.width;
const gameHeight = canvas.height;

const enemy1 = new enemy(gameWidth, gameHeight, context);
const characterP1 = new paddle(gameWidth, gameHeight, context, enemy1);
const input = new inputHandler(characterP1);
const colliderCharacterP1 = new collider(characterP1, context, enemy1, score,time);
const colliderEnemy1 = new collider(enemy1, context, characterP1);
if(bgSound.paused){bgSound.play()}

let lastTime = 0;
const gameLoop = (timestamp) => {
let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  //Limpia el lienzo y los dibujos realizados
  context.clearRect(0, 0, gameWidth, gameHeight);
  //Funcion para ejecutar codigo cada frame
  characterP1.update(deltaTime);
  //Dibuja el enemigo
  enemy1.drawCharacter();
  //Comprueba si el enemigo esta haciendo colision con algun borde
  enemy1.limitCollition();
  //Dibuja el personaje
  characterP1.drawCharacter();
  //Dibuja colisiones para comprobar los border de las colisiones del personaje
  // colliderCharacterP1.drawCollision();
  //Dibuja colisiones para comprobar los border de las colisiones del enemigo
  // colliderEnemy1.drawCollision();
  //Comprueba si el personaje 1 esta colisionando con el enemigo
  colliderCharacterP1.colliderCollision(timestamp,sound,menu,nickname.value);
  //Llama a la funcion cada frame
  requestAnimationFrame(gameLoop);
};

  // gameLoop();