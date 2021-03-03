export default class colliders {
  constructor(character, context, enemy, score, time) {
    this.characterP1 = character;
    this.enemy = enemy;
    this.context = context;
    this.score = score;
    this.scorePoints = 0;
    this.time = time;
    this.sec = 0;
    this.sec2 = undefined;
    this.screenTime = 15;
    this.min = 0;
    this.scoreGoal = 10;
    this.respawn = 0;
  }

  colliderCollision(timestamp, sound, menu, nickname, screenTime) {
    this.timeNow = timestamp / 1000;
    if (this.sec <= Math.trunc(this.timeNow)) {
      this.sec++;
      this.respawn++;
      this.screenTime--;
      if (this.respawn >= 5) {
        this.respawn = 0;
        this.enemy.position.x = Math.round(Math.random() * 800);
        this.enemy.position.y = Math.round(Math.random() * 800);
      }
      if (
        this.screenTime <= 9 &&
        this.screenTime > 0 &&
        this.scorePoints < this.scoreGoal
      ) {
        this.time.innerHTML = `<span class="main-info-time" id="mainInfoTime">Time: 0${this.min}:0${this.screenTime} </span>  `;
      } else {
        if (this.screenTime >= 60 && this.scorePoints < this.scoreGoal) {
          this.min++;
          this.screenTime = this.screenTime - 60;
          this.time.innerHTML = `<span class="main-info-time" id="mainInfoTime">Time: 0${this.min}:0${this.screenTime} </span>  `;
        } else if (this.screenTime >= 10 && this.scorePoints < this.scoreGoal) {
          this.time.innerHTML = `<span class="main-info-time" id="mainInfoTime">Time: 0${this.min}:${this.screenTime} </span>  `;
        } else if (
          this.screenTime < 0 &&
          this.min > 0 &&
          this.scorePoints < this.scoreGoal
        ) {
          this.min--;
          this.screenTime += 60;
          this.time.innerHTML = `<span class="main-info-time" id="mainInfoTime">Time: 0${this.min}:${this.screenTime} </span>  `;
        } else if (this.scorePoints >= this.scoreGoal && this.screenTime > 0) {
          this.scorePoints = 0;
          this.screenTime = 15;
          this.enemy.position.x = Math.round(Math.random() * 800);
          this.enemy.position.y = Math.round(Math.random() * 800);
          menu.classList.remove("main-menu-off");
          menu.firstElementChild.classList.remove("main-menu-items-off");
          menu.firstElementChild.nextElementSibling.nextElementSibling.classList.remove(
            "main-menu-items-off"
          );
          menu.firstElementChild.innerHTML = `Congratulations ${nickname.toLowerCase()} you win! `;
          menu.firstElementChild.nextElementSibling.nextElementSibling.value =
            "Play again!";
          this.characterP1.position.x = this.characterP1.gameWidth / 2;
          this.characterP1.position.y = this.characterP1.gameHeight / 2;
        } else if (this.scorePoints <= this.scoreGoal && this.screenTime <= 0) {
          this.scorePoints = 0;
          this.screenTime = 15;
          this.enemy.position.x = Math.round(Math.random() * 800);
          this.enemy.position.y = Math.round(Math.random() * 800);
          menu.classList.remove("main-menu-off");
          menu.firstElementChild.classList.remove("main-menu-items-off");
          menu.firstElementChild.nextElementSibling.nextElementSibling.classList.remove(
            "main-menu-items-off"
          );
          menu.firstElementChild.innerHTML = `Game over!`;
          menu.firstElementChild.nextElementSibling.nextElementSibling.value =
            "Play again!";
          this.characterP1.position.x = this.characterP1.gameWidth / 2;
          this.characterP1.position.y = this.characterP1.gameHeight / 2;
        }
      }
    }

    this.score.innerHTML = `<span class="main-score" id="mainScore">Score: ${this.scorePoints} / ${this.scoreGoal}</span>`;
    if (
      this.characterP1 &&
      this.enemy &&
      this.characterP1.position.x + this.characterP1.size >=
        this.enemy.position.x + this.enemy.size
    ) {
      if (this.enemy.position.x + 5 >= this.characterP1.position.x) {
        if (
          this.characterP1 &&
          this.enemy &&
          this.characterP1.position.y <= this.enemy.position.y + 5
        ) {
          if (
            this.characterP1.position.y + this.characterP1.size + 5 >=
            this.enemy.position.y + this.enemy.size
          ) {
            ++this.scorePoints;
            sound.play();
            this.score.innerHTML = `<span class="main-score" id="mainScore">Score: ${this.scorePoints}</span>`;
            this.screenTime += 5;
            this.enemy.position.x = Math.round(Math.random() * 800);
            this.enemy.position.y = Math.round(Math.random() * 800);
          }
        }
      }
    }
  }
  resetTime = () => {
    this.screenTime = 15;
    this.time.innerHTML = `<span class="main-info-time" id="mainInfoTime">Time: 0${this.min}:${this.screenTime} </span>  `;
  };
}
