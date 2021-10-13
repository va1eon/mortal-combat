const attack = function () { console.log(this.name + ' Fight...') }

const alex = {
  name: 'SCORPION',
  hp: 85,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['Kunai', 'Shuriken', 'Katana'],
  attack: attack,
}

const mike = {
  name: 'SUB-ZERO',
  hp: 90,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['Kunai', 'Shuriken', 'Katana'],
  attack: attack,
}

function createPlayer(playerClass, playerObj) {
  const arenas = document.querySelector('.arenas');

  const player = document.createElement('div');
  const progressBar = document.createElement('div');
  const character = document.createElement('div');
  const life = document.createElement('div');
  const name = document.createElement('div');
  const img = document.createElement('img');

  player.classList.add(playerClass);
  progressBar.classList.add('progressbar');
  character.classList.add('character');
  life.classList.add('life');
  name.classList.add('name');

  life.style.width = playerObj.hp + '%';
  name.innerText = playerObj.name;
  img.setAttribute('src', playerObj.img);

  progressBar.appendChild(life);
  progressBar.appendChild(name);

  character.appendChild(img);

  player.appendChild(progressBar);
  player.appendChild(character);

  arenas.appendChild(player);
}

createPlayer('player1', alex);
createPlayer('player2', mike);