let puzzle;
let wheel;

class Round {
	constructor(currWheel) {
		this.currWheel = currWheel;
		this.currPlayer = 0;
	}

	startRound() {
		puzzle = new Puzzle();
		wheel = new Wheel();

		puzzle.getCategory();
		domUpdates.displayCategory();

		this.currWheel = wheel.randomizeWheel(wheel.valuesArray);
		console.log('3-randomizeWheel', this.currWheel)
		puzzle.splitAnswer(puzzle.currentPuzzle.correct_answer)
		console.log('4-splitanswer', puzzle.currAnswer)
	}

	switchPlayer() {
		if (game.players[this.currPlayer + 1]) {
			this.currPlayer++;
		} else {
			this.currPlayer = 0;
		}
	}

	resetRound() {
		game.currentRound++;
		this.resetPlayerScore();
		domUpdates.resetScoreDisplay();
		round = new Round();
	}

	resetPlayerScore() {
		game.players.forEach(player => {
			player.score = 0;
		});
	}

}

if (typeof module !== 'undefined') {
  module.exports = Round;
}