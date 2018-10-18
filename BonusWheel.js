class BonusWheel extends Wheel {
  constructor(currWheelValue, valuesArray, generateRandomValue) {
    super(currWheelValue, valuesArray, generateRandomValue);
    this.bonusWheelArray = null;
  }

  generateBonusWheel(valuesArray) {
    let wheelArray = [];

    valuesArray.forEach((element) => {
      if (typeof element === 'number') {
        wheelArray.push(element)
      }
    });

    this.newBonusWheelArray = wheelArray.map((element) => {
      return element + 300
    });

    domUpdates.displaySpinValue();
  }



}

if (typeof module !== 'undefined') {
  module.exports = BonusWheel;
}
