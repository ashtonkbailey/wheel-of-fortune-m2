const { expect } = require('chai');

const Game = require('../Game.js');
const Puzzle = require('../Puzzle.js');
const Round = require('../Round.js');

describe('Game', function() {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should return true', function() {
    expect(true).to.equal(true);
  });


});