class Puzzle {
	constructor(guessedLetters, currentPuzzle, currAnswer) {
		this.guessedLetters = [];
		this.currentPuzzle = null;
		this.currAnswer = null;
		this.solved = false;
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
			console.log('2-getcategory', this.currentPuzzle)

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
		console.log('buyvowel3', this.guessedLetters)
    return this.guessedLetters;
	}

	checkGuessedLettersArray() {
		console.log('buyvowel4, currentplayerlog', game.players[round.currPlayer])
		let currentPlayer = game.players[round.currPlayer];

		if (this.guessedLetters.length > 0) {
			currentPlayer.updatePlayerScore(wheel.currWheelValue, this.guessedLetters);
			console.log(currentPlayer.score);
			displayScore(currentPlayer.score);
			domUpdates.changePlayerPrompt();
			domUpdates.displayGuessedLetter(event);
		} else {
			round.switchPlayer();
			changePlayerAnimation(round.currPlayer)
			domUpdates.displayIncorrectGuess();
			domUpdates.changePlayerPrompt();
		};
	}

	checkGuessedVowel(letter) {
		let guess = letter.toUpperCase();
		this.guessedLetters = this.currAnswer.filter((currentIndex) => {
			return currentIndex.includes(guess);
		});
		return this.guessedLetters;
	}


	checkSolvePuzzle(guess) {
		let upperCaseGuess = guess.toUpperCase();
		let upperCaseAnswer = this.currentPuzzle.correct_answer.toUpperCase();
		
		if (upperCaseGuess === upperCaseAnswer) {
			this.solved = true;	
			//display answer on puzzle
			//update grand total
			//finish round
		} else {
			domUpdates.solvePuzzleFail();
			round.switchPlayer();
		}
	}
}

	

if (typeof module !== 'undefined') {
  module.exports = Puzzle;
}