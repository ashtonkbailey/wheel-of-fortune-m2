const { expect } = require('chai');
const Puzzle = require('../Puzzle.js');
const Game = require('../Game.js');
const Wheel = require('../Wheel.js');


describe('Puzzle', () => {

	let puzzle;
	let game;

	beforeEach(() => {
		puzzle = new Puzzle();
		game = new Game();
	});

//getCategory()
	it.skip('should get random puzzle from one-word-puzzles for round one', () => {

		puzzle.getCategory();
	});

	it.skip('should get random puzzle from two-word-puzzles for round two', () => {
		game = new Game(2);

		puzzle.getCategory();
	});

	it.skip('should get random puzzle from three-word-puzzles for round three', () => {
		game = new Game(3);

		puzzle.getCategory();
	});

	it.skip('should get random puzzle from four-word-puzzles for round four', () => {
		game = new Game(4);

		puzzle.getCategory();
	});

	it('should split answer into array', () => {
		let game = new Game();
    puzzle.currentPuzzle = {  
      category: 'Around The House',
      number_of_words: 1,
      total_number_of_letters: 8,
      first_word: 8, 
      description:'Location or object(s) found within a typical house.',
      correct_answer: 'Armchair',
    };
		
		let array = puzzle.splitAnswer(puzzle.currentPuzzle.correct_answer);

		expect(array).to.deep.equal(['A', 'R', 'M', 'C', 'H', 'A', 'I', 'R'])
	});

	it('should check guessed letter against answer array', () => {
    puzzle.currentPuzzle = {  
      category: 'Around The House',
      number_of_words: 1,
      total_number_of_letters: 8,
      first_word: 8, 
      description:'Location or object(s) found within a typical house.',
      correct_answer: 'Armchair',
    };
    let guessedLetter = 'm';

    let array = puzzle.splitAnswer(puzzle.currentPuzzle.correct_answer);

   	let letterCheck = puzzle.checkGuessedLetter(guessedLetter);
   	expect(letterCheck).to.deep.equal(['M']);
	});

	it('', () => {


	})

  it('should check guessed vowel against answer array', () => {
    puzzle.currentPuzzle = {  
      category: 'Around The House',
      number_of_words: 1,
      total_number_of_letters: 8,
      first_word: 8, 
      description:'Location or object(s) found within a typical house.',
      correct_answer: 'Armchair',
    };

    let guessedVowel= 'a';
    let letterCheck = puzzle.checkGuessedVowel(guessedVowel);
    expect(letterCheck).to.deep.equal(['A', 'A']);

  });

  it('should check guessed phrase against correct answer'), () => {
    puzzle.currentPuzzle = {  
      category: 'Around The House',
      number_of_words: 1,
      total_number_of_letters: 8,
      first_word: 8, 
      description:'Location or object(s) found within a typical house.',
      correct_answer: 'Armchair',
    };

    let guessedPhrase = 'armchair'
    checkSolvePuzzle(guessedPhrase);
    expect(guessedPhrase).to.equal(true)


  }


})