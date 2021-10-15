const attack = function () { console.log(this.name + ' Fight...') }
const arenas = document.querySelector('.arenas');

const player1 = {
  player: 1,
  name: 'SCORPION',
  hp: 85,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['Kunai', 'Shuriken', 'Katana'],
  attack: attack,
}

const player2 = {
  player: 2,
  name: 'SUB-ZERO',
  hp: 90,
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

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));