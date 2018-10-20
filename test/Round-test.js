const { expect } = require('chai');
global.Game = require('../Game.js');
const Wheel = require('../Wheel.js');
const Data = require('../library.js');
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
    wheel = new Wheel();
  });

  it('should have a default current player set to zero', function() {
    expect(round.currPlayer).to.deep.equal(0);
  });

  it('should have a current wheel', function() {
    wheel.valuesArray = data.wheel;
    var currentWheel = wheel.randomizeWheel(wheel.valuesArray);
    expect(round.currWheel).to.equal(currentWheel);
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