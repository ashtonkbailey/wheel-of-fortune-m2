var startButton = document.querySelector('.start-button');
var startContainer = document.querySelector('.start-container');
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

startButton.addEventListener('click', domUpdates.hideStartMenu);

spinBtn.addEventListener('click', domUpdates.displaySpinValue);

