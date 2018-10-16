let game;

const domUpdates = {
  hideStartMenu() {
    startContainer.classList.add('hide');
    gamePrompt.classList.add('show');

    game = new Game;
    game.startGame();

    updatePlayerNames();
    addAnimation();
    console.log(puzzle.currentPuzzle.correct_answer);
    showBoard();

  },

  displayCategory() {
    let category = puzzle.currentPuzzle.category;
    categoryDisplay.innerText = category;
  },

  displaySpinValue() {
    let wheelValue = wheel.generateRandomValue();
    console.log('5-generateRandomvalue', wheelValue);
    if (typeof wheelValue === 'number' ) {
      gamePrompt.innerHTML = 
        `YOU LANDED ON 
        <span>$${wheelValue}</span>
        now guess a consonant`;
    } else if (wheelValue === 'LOSE A TURN') { 
      gamePrompt.innerHTML = 
        `YOU LANDED ON 
        <span>${wheelValue}</span>
         next player's turn`;
      round.switchPlayer();
    } else {
      // need a function to change player turn and player score
      gamePrompt.innerHTML = 
        `YOU LANDED ON 
        <span>${wheelValue}</span>
         your score is reset and now it's next player's turn`;
      round.switchPlayer();
    };
  },

  changePlayerPrompt(lettersArray) {
    if (puzzle.guessedLetters.length > 0) {
      gamePrompt.innerHTML = 
        `NICE WORK! SPIN, BUY A VOWEL,
         OR SOLVE THE PUZZLE`;
    } else {
      gamePrompt.innerHTML =
        `NOPE, NEXT PLAYER...
         SPIN, BUY A VOWEL,
         OR SOLVE THE PUZZLE`;
    };
  },

  solvePuzzleFail() {
    gamePrompt.innerHTML = 
      `NOPE, WRONG ANSWER!
       NEXT PLAYER...
       SPIN, BUY A VOWEL,
       OR SOLVE THE PUZZLE`;
  },

  disableLetter(event) {
    if (event.target.classList.contains('letters')) { 
      event.target.classList.add('change-opacity');
    }
    let letter = event.target.innerHTML;
    puzzle.checkGuessedLetter(letter);
    puzzle.checkGuessedLettersArray();
  },

  displayScore(score) {
    if (round.currPlayer === 0) {
      playerOneScore.innerText = `$${score}`;
    } else if (round.currPlayer === 1) {
      playerTwoScore.innerText = `$${score}`;
    } else {
      playerThreeScore.innerText = `$${score}`;
    }
  },

  resetScoreDisplay() {
    playerOneScore.innerText = `$${0}`;
    playerTwoScore.innerText = `$${0}`;
    playerThreeScore.innerText = `$${0}`;
  },

  displayGrandTotal(total) {
    if (round.currPlayer === 0) {
      playerOneTotal.innerText = `$${total}`;
    } else if (round.currPlayer === 1) {
      playerTwoTotal.innerText = `$${total}`;
    } else {
      playerThreeTotal.innerText = `$${total}`;
    }  
  },

  displayBuyVowel() {
    vowels.classList.add('showVowels');
    let currentPlayer = game.players[round.currPlayer];
    currentPlayer.buyVowel();

  },

  displayGuessedLetter(event) {
    let guessedLetter = event.target.id;
    let boxes = document.querySelectorAll('.box');
    let splitArray = puzzle.currAnswer;

    splitArray.forEach((letter, i) => {
      if (guessedLetter === letter) {
        boxes[i].innerText = letter
      }
    })
  },

  displayAnswer(event) {
    let guessedLetter = event.target.id;
    let boxes = document.querySelectorAll('.box');
    let splitArray = puzzle.currAnswer;

    splitArray.forEach((letter, i) => {
      boxes[i].innerText = letter
    })
  },

  displaySolvePuzzle() {
    solvePuzzle.classList.add('show-solve-puzzle-container');
  },


  hideSolvePuzzle() {
    solvePuzzle.classList.remove('show-solve-puzzle-container');
    let playerGuess = document.querySelector('.solve-puzzle-input').value;
    puzzle.checkSolvePuzzle(playerGuess);
  },

  // changePlayerAnimation(player) {
  //   if (player === 1) {
  //     let playerNum = playerTwoName;
  //     addAnimation(playerNum)
  //   } else if (player === 2) {
  //     playerNum === playerThreeName;
  //     addAnimation(playerNum)
  //   } else {
  //     playerNum == playerOneName;
  //     addAnimation(playerNum)
  //   }

  //  }



};

function updatePlayerNames() {
  playerOneName.innerText = nameOneInput.value || "PLAYER 1";
  playerTwoName.innerText = nameTwoInput.value || "PLAYER 2";
  playerThreeName.innerText = nameThreeInput.value || "PLAYER 3";
};



function addAnimation() {
  playerOneName.classList.add('animatePlayerName');
  currentRoundNumber.classList.add('animateRoundNumber');
  categoryDisplay.classList.add('animateCategorydisplay')
}

function showBoard() {
  var boxes = document.querySelectorAll('.box');
    for (var i = 0; i < puzzle.currentPuzzle.correct_answer.length; i++ ) {
      if (puzzle.currentPuzzle.correct_answer.charAt(i) !== ' ') {
        boxes[i].classList.add('addWhite');
      }
    }
  }





if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}