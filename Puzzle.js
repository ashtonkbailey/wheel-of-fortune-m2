class Puzzle {
	constructor() {
		this.guessedLetter = guessedLetter;
		this.currentPuzzle = null;
	}

	displayLetter() {
		//if guessed letter matches answer, show letter
	}

	changeLetters() {
		//changes letter based on guess or buy on alphabet display
	}

	resetLetters() {
		//changes alphabet back to original state
	}

	displayAnswer() {
		//if puzzle is solved correctly, show answer
	}

	generateRandomNumber(puzzleBankLength) {
		return Math.floor(Math.random() * (puzzleBankLength + 1));
	}

	getCategory() {
		if (game.currentRound = 1) {
			let puzzleBankLength = data.puzzles.one_word_answers.puzzle_bank.length
			let randomNum = this.generateRandomNumber(puzzleBankLength);
			let randomPuzzle = data.puzzles.one_word_answers.puzzle_bank[randomNum];
			this.currentPuzzle =  randomPuzzle;
		}
	}


	displayCategory() {
		//display category as a hint
	}

	bonusRoundDisplay() {
		//will display up to six consonants of new puzzle
	}

}

module.exports = Puzzle;