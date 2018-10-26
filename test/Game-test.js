const { expect } = require('chai');
global.Player = require('../Player.js');
global.Game = require('../Game.js');
global.Puzzle = require('../Puzzle.js');
global.Round = require('../Round.js');


describe('Game', function() {
  var game;
  var player;
  var puzzle;

  beforeEach(() => {
    game = new Game();
    player = new Player();
    puzzle = new Puzzle();
  });

  it('should return true', function() {
    expect(true).to.equal(true);
  });

  it('should have a default round one 1', function() {
    expect(game.currentRound).to.equal(1);
  });

  it('should have three players at the start of the game', function() {
    game.startGame();
    expect(game.players.length).to.equal(3);
  });

  it('should have a current player that defaults to the first player', function() {
    expect(game.currPlayer).to.equal(game.players[0]);
  });


});