class Round {
	constructor(currCategory, currWheel, currPlayer) {
		this.currCategory;
		this.currWheel;
		this.currPlayer;
	}

	startRound() {
		Puzzle.getCategory();
		//call new wheel
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

module.exports = Round;