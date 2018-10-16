class Puzzle {
	constructor(guessedLetters, currentPuzzle, currAnswer) {
		this.guessedLetters = [];
		this.currentPuzzle = null;
		this.currAnswer = null;
		this.solved = false;
	}

	displayLetter() {
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
		return Math.floor(Math.random() * (puzzleBankLength));
	}

	getCategory() {
		if (game.currentRound = 1) {
			let puzzleBankLength = data.puzzles.one_word_answers.puzzle_bank.length
			let randomNum = this.generateRandomNumber(puzzleBankLength);
			let randomPuzzle = data.puzzles.one_word_answers.puzzle_bank[randomNum];

			this.currentPuzzle = randomPuzzle;
			console.log(this.currentPuzzle)

		} else if (game.currentRound = 2) {
			let puzzleBankLength = data.puzzles.two_word_answers.puzzle_bank.length
			let randomNum = this.generateRandomNumber(puzzleBankLength);
			let randomPuzzle = data.puzzles.two_word_answers.puzzle_bank[randomNum];

			this.currentPuzzle = randomPuzzle;

		} else if (game.currentRound = 3) {
			let puzzleBankLength = data.puzzles.three_word_answers.puzzle_bank.length
			let randomNum = this.generateRandomNumber(puzzleBankLength);
			let randomPuzzle = data.puzzles.three_word_answers.puzzle_bank[randomNum];

			this.currentPuzzle = randomPuzzle;

		} else if (game.currentRound = 4)	{
			let puzzleBankLength = data.puzzles.four_word_answers.puzzle_bank.length
			let randomNum = this.generateRandomNumber(puzzleBankLength);
			let randomPuzzle = data.puzzles.four_word_answers.puzzle_bank[randomNum];

			this.currentPuzzle = randomPuzzle;

		} //what to do for bonusround?
	}

	splitAnswer(answer) {
		let uppedAnswer = answer.toUpperCase();
		this.currAnswer = uppedAnswer.split('');
		return this.currAnswer;
	}

	checkGuessedLetter(letter) {
		let guess = letter.toUpperCase();
    this.guessedLetters = this.currAnswer.filter((currentIndex) => {	
			return currentIndex.includes(guess);
		});

		if (this.guessedLetters.length > 0) {
			game.currPlayer.updatePlayerScore(wheel.currWheelValue, this.guessedLetters);
		} else {
			this.switchPlayer();
		};

    return this.guessedLetters;
	}

	checkGuessedLettersArray() {
		if (this.guessedLetters.length > 0) {
			game.players[round.currPlayer].updatePlayerScore(wheel.currWheelValue, this.guessedLetters)
			console.log(game.players[round.currPlayer].score)
			domUpdates.displayScore(game.players[round.currPlayer].score)
			domUpdates.displayGuessedLetter(event)
			} else {
			round.switchPlayer();
			domUpdates.displayIncorrectGuess();
			console.log(round.currPlayer);
			// domUpdates.changePlayerAnimation(round.currPlayer)
	
		}
	}

	checkGuessedVowel(letter) {
		let guess = letter.toUpperCase();
		this.guessedLetters = this.currAnswer.filter((currentIndex) => {
			return currentIndex.includes(guess);
		});
		return this.guessedLetters;
	}


	checkSolvePuzzle(string) {
		let upperCaseString = string.toUpperCase();
		let upperCaseAnswer = this.currentPuzzle.correct_answer.toUpperCase();
		 if (upperCaseString === upperCaseAnswer) {
			this.solved = true;	

		}
	}
}

	

if (typeof module !== 'undefined') {
  module.exports = Puzzle;
}