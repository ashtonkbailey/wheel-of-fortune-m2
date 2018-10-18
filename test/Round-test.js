const { expect } = require('chai');
const Game = require('../Game.js');
const Puzzle = require('../Puzzle.js');
const Round = require('../Round.js');

describe('Round', () => {

  let game;
  let round;
  let puzzle;

  beforeEach(() => {
    game = new Game();
    round = new Round();
    puzzle = new Puzzle();
  });

  it('should bankrupt players', function() {

    player.score = 100;
    round.bankruptPlayer();
    expect(player.score).to.equal(0);

  });


  it('should switch players', function() {
    game.currPlayer = 1;
    round.switchPlayer();
    expect(round.currPlayer).to.equal(2);
  });


  
})