let puzzle;
let wheel;

class Round {
	constructor(currCategory, currWheel) {
		this.currCategory = currCategory;
		this.currWheel = currWheel;
		this.currPlayer = 0;
	}

	startRound() {
		puzzle = new Puzzle();
		wheel = new Wheel();

		this.currCategory = puzzle.getCategory();
		domUpdates.displayCategory();
		console.log(wheel.valuesArray)
		this.currWheel = wheel.randomizeWheel(wheel.valuesArray);
		puzzle.splitAnswer(puzzle.currentPuzzle.correct_answer)
		console.log(wheel.valuesArray)
		//call reset player turn
	}

	switchPlayer() {
		if (game.players[this.currentPlayer] + 1) {
			this.currentPlayer++
		} else {
			this.currentPlayer = 0;
		}
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