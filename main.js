const attack = function () { console.log(this.name + ' Fight...') }
const arenas = document.querySelector('.arenas');
const randomBtn = document.querySelector('.button');

const player1 = {
  player: 1,
  name: 'SCORPION',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['Kunai', 'Shuriken', 'Katana'],
  attack: attack,
}

const player2 = {
  player: 2,
  name: 'SUB-ZERO',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['Kunai', 'Shuriken', 'Katana'],
  attack: attack,
}

function createElement(tag, className) {
  const el = document.createElement(tag);
  if(className) {
    el.classList.add(className);
  }
  return el;
}

function createPlayer(playerObj) {
  const player = createElement('div', 'player'+playerObj.player)
  const progressBar = createElement('div', 'progressbar');
  const character = createElement('div', 'character');
  const life = createElement('div', 'life');
  const name = createElement('div', 'name');
  const img = createElement('img');

  life.style.width = playerObj.hp + '%';
  name.innerText = playerObj.name;
  img.src = playerObj.img;

  progressBar.appendChild(life);
  progressBar.appendChild(name);

  character.appendChild(img);

  player.appendChild(progressBar);
  player.appendChild(character);

  return player;
}

function changeHp(player) {
  const playerLife = document.querySelector('.player' + player.player + ' .life');
  player.hp -= randomDamage();
  if(player.hp <= 0) {
    player.hp = 0;
    randomBtn.disabled = true;
  }
  playerLife.style.width = player.hp + '%';
}

function playerLose(name, text) {
  const loseTitle = createElement('div', 'loseTitle');
  if(name === null) {
    loseTitle.innerText = text;
  } else {
    loseTitle.innerText = name + ' ' + text;
  }
  return loseTitle;
}

function randomDamage() {
  return Math.ceil(Math.random() * 20);
}

randomBtn.addEventListener('click', () => {
  changeHp(player1);
  changeHp(player2);

  if (player1.hp <= 0 && player2.hp <= 0) {
    arenas.appendChild(playerLose(null, 'draw'));
  } else if(player2.hp <= 0) {
    arenas.appendChild(playerLose(player1.name, 'wins'));
  } else if(player1.hp <= 0) {
    arenas.appendChild(playerLose(player2.name, 'wins'));
  }
});

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));