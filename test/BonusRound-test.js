const { expect } = require('chai');
const Game = require('../Game.js');
global.Wheel = require('../Wheel.js');
const BonusWheel = require('../BonusWheel.js');

describe('BonusRound', function() {

var bonusRound;

beforeEach(() => {
    bonusRound = new BonusRound();
  });

it('should have a bonus consonants array defaulted to null', function() {
    expect(bonusRound.bonusConsonants).to.equal(null);
});

});








global.Round = require('../Round.js');
const BonusRound = require('../BonusRound.js');


