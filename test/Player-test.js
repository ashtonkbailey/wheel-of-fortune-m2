const { expect } = require('chai');
const Player = require('../Player.js');
const Wheel = require('../Wheel.js');
const data = require('../library.js');

describe('Player', function() {

  it('should have a name', function() {
    var player = new Player('Ashley');
    expect(player.name).to.equal('Ashley');
  });

  it('should have a score', function() {
    var player = new Player('Ashton', 500);
    expect(player.score).to.equal(500);
  });

  it('should have a grand total', function() {
    var player = new Player('John', 600, 15000)
    expect(player.grandTotal).to.equal(15000);
  });

  it('should receieve a value from the wheel after spinning the wheel', function() {
    var wheel = new Wheel;
    var num = wheel.generateRandomValue()
    var player = new Player('Daniel', 100, 5000, );
    expect(player.playerSpinValue).to.equal(num);
  })




});