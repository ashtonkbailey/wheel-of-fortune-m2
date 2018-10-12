class Wheel {
  constructor(currWheelValue, valuesArray) {
    this.currWheelValue = currWheelValue;
    this.valuesArray = data.wheel;

  }

  generateRandomValue() {
		this.currWheelValue = Math.floor(Math.random() * (this.valuesArray.length + 1));

		return this.currWheelValue;
  }

  randomizeWheel(valuesArray) {
    let currentIndex = valuesArray.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

    	// Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = valuesArray[currentIndex];
	    valuesArray[currentIndex] = valuesArray[randomIndex];
	    valuesArray[randomIndex] = temporaryValue;
	  }

    return valuesArray;
  }

}

if (typeof module !== 'undefined') {
  module.exports = Wheel;
}