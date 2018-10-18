const { expect } = require('chai');
global.Wheel = require('../Wheel.js');
const BonusWheel = require('../BonusWheel.js');


describe('BonusWheel', () => {
  let bonusWheel;

  beforeEach(() => {
    bonusWheel = new BonusWheel();
  });

  it('should return a new wheel with only numbers', function() {

    bonusWheel.generateBonusWheel(data.wheel)

    expect(bonusWheel.bonusWheelArray).to.deep.equal([1200,
      2800,
      900,
      1000,
      900,
      950,
      800,
      1000,
      900,
      850,
      800,
      900,
      1000,
      1100,
      800,
      950,
      800,
      1200])
  })



});






