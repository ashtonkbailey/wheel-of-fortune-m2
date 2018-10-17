var startButton = document.querySelector('.start-button');
var startContainer = document.querySelector('.start-container');
var gamePage = document.querySelector('.game-page')
var categoryDisplay = document.querySelector('.category-display');
var nameOneInput = document.querySelector('.name_one_input')
var nameTwoInput = document.querySelector('.name_two_input')
var nameThreeInput = document.querySelector('.name_three_input')
var playerOneName = document.querySelector('.player-one-name');
var playerTwoName = document.querySelector('.player-two-name');
var playerThreeName = document.querySelector('.player-three-name');
var currentRoundNumber = document.querySelector('h2');
var gamePrompt = document.querySelector('.game-prompt');
var spinBtn = document.querySelector('.spin-wheel-button');
var letterBank = document.querySelector('.letter-bank');
var buyVowelButton = document.querySelector('.buy-vowel-button');
var vowels = document.querySelector('.vowels');
var playerOneScore = document.querySelector('.player-one-score');
var playerTwoScore = document.querySelector('.player-two-score');
var playerThreeScore = document.querySelector('.player-three-score');
var solvePuzzleButton = document.querySelector('.solve-puzzle-button');
var solvePuzzle = document.querySelector('.solve-puzzle-container');
var solvePuzzleInput = document.querySelector('.solve-puzzle-input');
var guessPuzzleButton = document.querySelector('.solve-guess-button');
var playerOneTotal = document.querySelector('.player-one-total');
var playerTwoTotal = document.querySelector('.player-two-total');
var playerThreeTotal = document.querySelector('.player-three-total');
var newGameButton = document.querySelector('.new-game-button')
// var boxes = document.querySelector('.box');
var wonRound = document.querySelector('.won-round-modal');
var keepPlaying = document.querySelector('.keep-playing-button');



startButton.addEventListener('click', domUpdates.hideStartMenu);

spinBtn.addEventListener('click', domUpdates.displaySpinValue);

letterBank.addEventListener('click', domUpdates.disableConsonant);

vowels.addEventListener('click', domUpdates.disableVowel);

buyVowelButton.addEventListener('click', domUpdates.displayBuyVowel);

solvePuzzleButton.addEventListener('click', domUpdates.displaySolvePuzzle);

guessPuzzleButton.addEventListener('click', domUpdates.hideSolvePuzzle);

newGameButton.addEventListener('click', domUpdates.newGame);

keepPlaying.addEventListener('click', domUpdates.hideWonRound)


