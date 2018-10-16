let game;

const domUpdates = {
  hideStartMenu() {
    startContainer.classList.add('hide');
    gamePrompt.classList.add('show');

    game = new Game;
    game.startGame();

    updatePlayerNames();
    addAnimation();
  },

  displayCategory() {
    let category = puzzle.currentPuzzle.category;
    categoryDisplay.innerText = category;
  },

  displaySpinValue() {
    let wheelValue = wheel.generateRandomValue();
    console.log('5-generateRandomvalue', wheelValue)
    if (typeof wheelValue === 'number' ) {
      gamePrompt.innerHTML = 
        `YOU LANDED ON 
        <span>$${wheelValue}</span>
        now guess a consonant`;
    } else if (wheelValue === 'LOSE A TURN') { 
      // need a function to change player turn
      gamePrompt.innerHTML = 
        `YOU LANDED ON 
        <span>${wheelValue}</span>
         next player's turn`;
    } else {
      // need a function to change player turn and player score
      gamePrompt.innerHTML = 
        `YOU LANDED ON 
        <span>${wheelValue}</span>
         your score is reset and now it's next player's turn`;
    }
  },

  disableLetter(event) {
    if (event.target.classList.contains('letters')) { 
      event.target.classList.add('change-opacity');
      let letter = event.target.innerHTML;
      puzzle.checkGuessedLetter(letter);
      puzzle.checkGuessedLettersArray();
    }
  },

  displayScore(score) {
    if (game.players[round.currPlayer] === 0) {
      playerOneScore.innerText = score;
    }
  },

  displayBuyVowel() {
    vowels.classList.add('showVowels');
    domUpdates.disableLetter(event);
  }



};

function updatePlayerNames() {
  playerOneName.innerText = nameOneInput.value || "PLAYER 1";
  playerTwoName.innerText = nameTwoInput.value || "PLAYER 2";
  playerThreeName.innerText = nameThreeInput.value || "PLAYER 3";
}

function addAnimation() {
  playerOneName.classList.add('animatePlayerName');
  currentRoundNumber.classList.add('animateRoundNumber');
  categoryDisplay.classList.add('animateCategorydisplay')
}




if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}