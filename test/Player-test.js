const { expect } = require('chai');
const Player = require('../Player.js');
const Wheel = require('../Wheel.js');
global.data = require('../library.js');
const Puzzle = require('../Puzzle.js');


describe('Player', function() {

  it.skip('should have a name', function() {
    var player = new Player('Ashley');
    expect(player.name).to.equal('Ashley');
  });

  it.skip('should have a score', function() {
    var player = new Player('Ashton', 500);
    expect(player.score).to.equal(500);
  });

  it.skip('should have a grand total', function() {
    var player = new Player('John', 600, 15000)
    expect(player.grandTotal).to.equal(15000);
  });

  it.skip('should receieve a value from the wheel after spinning the wheel', function() {
    var wheel = new Wheel;
    var num = wheel.generateRandomValue()
    var player = new Player('Daniel', 100, 5000, );
    expect(player.playerSpinValue).to.equal(num);
  })

  it.skip('should update the player\'s score based on the length of the guessedlettersArray', () => {
    var wheel = new Wheel();
    var puzzle = new Puzzle();
    var player = new Player;
    var wheelValue = wheel.currWheelValue = 400;
    var guessedLetter = puzzle.guessedLetters = ['M'];
    player.updatePlayerScore(wheelValue, guessedLetter)
    expect(player.score).to.equal(400);
  });

  it('should update player\'s score after buying a vowel', () => {
    var player = new Player('John', 600, 15000)
    player.buyVowel();
    expect(player.score).to.equal(500);

  });


});

if (typeof module !== 'undefined') {
  module.exports = Player;
}