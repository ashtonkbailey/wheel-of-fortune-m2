let game;

const domUpdates = {
  hideStartMenu() {
    startContainer.classList.add('hide');
    gamePrompt.classList.add('show');
    currentRoundNumber.classList.add('animateRoundNumber');
    categoryDisplay.classList.add('animateCategorydisplay');
    playerOneName.classList.add('animatePlayerName');

    game = new Game;
    game.startGame();

    updatePlayerNames();
    showBoard();
  },

  displayCategory() {
    let category = puzzle.currentPuzzle.category;
    categoryDisplay.innerText = category;
  },

  displaySpinValue() {
    let wheelValue = wheel.generateRandomValue();

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
      round.bankruptPlayer();
      gamePrompt.innerHTML = 
        `YOU LANDED ON 
        <span>${wheelValue}</span>
         your score is reset and now it's next player's turn`;
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

  disableConsonant(event) {
    if (event.target.classList.contains('consonant')) { 
      event.target.classList.add('change-opacity');
    };
    let letter = event.target.innerHTML;
    puzzle.checkGuessedLetter(letter);
    puzzle.checkGuessedLettersArray();
  },

  disableVowel(event) {
    console.log('hi')
    if (event.target.classList.contains('vowel')) { 
      event.target.classList.add('change-opacity');
      console.log(game.players[round.currPlayer])
      game.players[round.currPlayer].buyVowel();
      displayScore(game.players[round.currPlayer].score)
    }
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
    puzzle.checkSolvePuzzle(playerGuess)
  },

  
};

function changePlayerAnimation(currentPlayer) {
    if (currentPlayer === 1) {
      playerOneName.classList.remove('animatePlayerName');
      playerThreeName.classList.remove('animatePlayerName');
      let playerNum = playerTwoName;
      addNameAnimation(playerNum)
    } else if (currentPlayer === 2) {
      playerOneName.classList.remove('animatePlayerName');
      playerTwoName.classList.remove('animatePlayerName');
      let playerNum = playerThreeName;
      addNameAnimation(playerNum)
    } else {
      playerTwoName.classList.remove('animatePlayerName');
      playerThreeName.classList.remove('animatePlayerName');
      let playerNum = playerOneName;
      addNameAnimation(playerNum)
    }
  }


function updatePlayerNames() {
  playerOneName.innerText = nameOneInput.value || "PLAYER 1";
  playerTwoName.innerText = nameTwoInput.value || "PLAYER 2";
  playerThreeName.innerText = nameThreeInput.value || "PLAYER 3";
};



function addNameAnimation(playerNum) {
  playerNum.classList.add('animatePlayerName');
}


function showBoard() {
  var boxes = document.querySelectorAll('.box');
    for (var i = 0; i < puzzle.currentPuzzle.correct_answer.length; i++ ) {
      if (puzzle.currentPuzzle.correct_answer.charAt(i) !== ' ') {
        boxes[i].classList.add('addWhite');
      }
    }
  }

  function displayScore(score) {
    console.log(game.players[round.currPlayer])
    if (round.currPlayer === 0) {
      playerOneScore.innerText = `$${score}`;
    } else if (round.currPlayer === 1) {
      playerTwoScore.innerText = `$${score}`;
    } else {
      playerThreeScore.innerText = `$${score}`;
    }
  }





if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}