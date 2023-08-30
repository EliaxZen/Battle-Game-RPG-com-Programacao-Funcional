const defaultCharacter = {
  name: "",
  life: 1,
  maxLife: 1,
  attack: 0,
  defense: 0,
};

//Criando a factory ( posso usar o function ou o const)

const createNinja = (name) => {
  return {
    ...defaultCharacter,
    name: "Ninja",
    life: 100,
    maxLife: 100,
    attack: 10,
    defense: 8,
  };
};

const createSorcerer = (name) => {
  return {
    ...defaultCharacter,
    name: "Sorcerer",
    life: 100,
    maxLife: 100,
    attack: 19,
    defense:5,
  };
};

const createZombie = (name) => {
  return {
    ...defaultCharacter,
    name: "Zombie",
    life: 40,
    maxLife: 40,
    attack: 4,
    defense: 4,
  };
};

const createSpider = (name) => {
  return {
    ...defaultCharacter,
    name: "Spider",
    life: 100,
    maxLife: 100,
    attack: 19,
    defense: 5,
  };
};

const stage = {
  fighter1: null,
  fighter2: null,
  fighter1El: null,
  fighter2El: null,

  start(fighter1, fighter2, fighter1El, fighter2El) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.fighter1El = fighter1El;
    this.fighter2El = fighter2El;

    this.fighter1El
      .querySelector(".attackButton")
      .addEventListener("click", () =>
        this.doAttack(this.fighter1, this.fighter2)
      );
    this.fighter2El
      .querySelector(".attackButton")
      .addEventListener("click", () =>
        this.doAttack(this.fighter2, this.fighter1)
      );

    this.update();
  },

  update() {
    //fighter 1
    this.fighter1El.querySelector(".name").innerHTML = `${
      this.fighter1.name
    } - ${this.fighter1.life.toFixed(1)} HP`;
    let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
    this.fighter1El.querySelector(".bar").style.width = `${f1Pct}%`;

    //fighter 2
    this.fighter2El.querySelector(".name").innerHTML = `${
      this.fighter2.name
    } - ${this.fighter2.life.toFixed(1)} HP`;
    let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
    this.fighter2El.querySelector(".bar").style.width = `${f2Pct}%`;
  },

  doAttack(attacking, attacked) {
    if (attacking.life <= 0 || attacked.life <= 0) {
      if(attacked.life <= 0) {
        alert(`${attacked.name} ${",perdeu a luta e está morto 😢😢😢😢"}`);
      } else if(attacking.life <= 0) {
        alert(`${attacking.name} ${",perdeu a luta e está morto 😢😢😢😢"}`);
      } 
      return;
    }

    const attackedFactor = (Math.random() * 2).toFixed(2);
    const defenseFactor = (Math.random() * 2).toFixed(2);

    const actualAttack = attacking.attack * attackedFactor;
    const actualDefense = attacked.attack * defenseFactor;

    if (actualAttack > actualDefense) {
      attacked.life -= actualAttack;
      attacked.life = attacked.life < 0 ? 0 : attacked.life;
      log.addMessage(
        `${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${
          attacked.name
        }`
      );
    } else {
      log.addMessage(`${attacked.name} conseguiu defender...`);
    }

    this.update();
  },
};

const log = {
  list: [],
  addMessage(msg) {
    this.list.unshift(msg);
    this.render();
  },
  render() {
    const logEl = document.querySelector(".log");
    logEl.innerHTML = "";

    for (let i in this.list) {
      logEl.innerHTML += `<li>${this.list[i]}</li>`;
    }
  },
};
