let puzzle;

class Round {
	constructor(currCategory, currWheel, currPlayer) {
		this.currCategory;
		this.currWheel;
		this.currPlayer;
	}

	startRound() {
		puzzle = new Puzzle();
		puzzle.getCategory();
		domUpdates.displayCategory();
		// Wheel.newWheel();
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