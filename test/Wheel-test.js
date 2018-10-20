const { expect } = require('chai');
const Wheel = require('../Wheel.js');

describe('Wheel', () =>{
  let wheel;

  beforeEach(() => {
    wheel = new Wheel;
  });

   it('should have a values array of wheel data', function() {
    expect(wheel.valuesArray).to.deep.equal(data.wheel);
  })


   it('should have a current wheel value', function() {
    wheel.generateRandomValue()
    expect(wheel.currWheelValue).to.equal(wheel.currWheelValue);
  })

   it('should generate a random value from the wheel', function() {
    wheel.generateRandomValue();
    expect(wheel.generateRandomValue).to.equal(wheel.generateRandomValue);

   })
})