const { expect } = require('chai');
global.Game = require('../Game.js');
const Puzzle = require('../Puzzle.js');
const Round = require('../Round.js');
const Player = require('../Player.js');

describe('Round', () => {

  let game;
  let round;
  let puzzle;

  beforeEach(() => {
    game = new Game();
    round = new Round();
    puzzle = new Puzzle();
    player = new Player();
  });

  it.skip('should bankrupt players', function() {

    player.score = 100;
    round.bankruptPlayer();
    expect(player.score).to.equal(0);

  });


  it.skip('should switch players', function() {
    game.currPlayer = 1;
    round.switchPlayer();
    expect(round.currPlayer).to.equal(2);
  });


  
})