let puzzle;
let wheel;

class Round {
	constructor(currCategory, currWheel, currPlayer) {
		this.currCategory = currCategory;
		this.currWheel = currWheel;
		this.currPlayer = currPlayer;
	}

	startRound() {
		puzzle = new Puzzle();
		wheel = new Wheel();

		this.currCategory = puzzle.getCategory();
		domUpdates.displayCategory();
		this.currWheel = wheel.randomizeWheel(wheel.valuesArray);
		//call reset player turn
	}

	updateGrandTotal(){
		//add winner's score to total
	}

	resetPlayerTurn(){
		//start at player one again
		//call reset player score
	}

	resetPlayerScore() {
		//put round score back to zero
	}

}

if (typeof module !== 'undefined') {
  module.exports = Round;
}