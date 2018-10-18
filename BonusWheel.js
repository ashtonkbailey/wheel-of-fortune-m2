class BonusWheel extends Wheel {
  constructor(currWheelValue, valuesArray, generateRandomValue) {
    super(currWheelValue, valuesArray, generateRandomValue);
    this.bonusWheelArray = null;
  }

  generateBonusWheel(valuesArray) {
    let wheelArray = []
    valuesArray.forEach((element) => {
      if (typeof element === 'number') {
        wheelArray.push(element)
      }
    })
    this.bonusWheelArray = wheelArray.map((element) => {
      return element + 300
    })
  }
}



if (typeof module !== 'undefined') {
  module.exports = BonusWheel;
}
