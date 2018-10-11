const Game = require('./Game.js')
let game;

var startButton = document.querySelector('.start-button');
var startContainer = document.querySelector('.start-container');

startButton.addEventListener('click', startGame)


function startGame() {
  startContainer.classList.add('hide');
  game = new Game();
  game.start();


}