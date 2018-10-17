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
        `You landed on 
        <span>$${wheelValue}</span>
        now <span>GUESS A CONSONANT</span>`;
    } else if (wheelValue === 'LOSE A TURN') { 
      gamePrompt.innerHTML = 
        `You landed on 
        <span>${wheelValue}</span>
         <span class='player-prompt'>NEXT PLAYER... </span>
         <span>SPIN, BUY A VOWEL,
         OR SOLVE THE PUZZLE</span>`;
      round.switchPlayer();
    } else {
      round.bankruptPlayer();
      gamePrompt.innerHTML = 
        `You landed on 
        <span>${wheelValue}</span>
         your score is reset! <span class='player-prompt'>NEXT PLAYER... </span>
         <span>SPIN, BUY A VOWEL, OR SOLVE 
        THE PUZZLE</span>`;
    };
  },

  changePlayerPrompt(lettersArray) {
    if (puzzle.guessedLetters.length > 0) {
      gamePrompt.innerHTML = 
        `NICE WORK! <span>SPIN, BUY A VOWEL,
         OR SOLVE THE PUZZLE</span>`;
    } else {
      gamePrompt.innerHTML =
        `WRONG! <span class='player-prompt'>
        NEXT PLAYER... </span>
        <span>SPIN, BUY A VOWEL, OR SOLVE
         THE PUZZLE</span>`;
    };
  },

  solvePuzzleFail() {
    gamePrompt.innerHTML = 
      `WRONG ANSWER!
       <span class='player-prompt'>NEXT PLAYER... </span>
       <span>SPIN, BUY A VOWEL, OR SOLVE
       THE PUZZLE</span>`;
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
      // game.players[round.currPlayer].buyVowel();

      let letter = event.target.innerHTML;
      puzzle.checkGuessedLetter(letter)
      puzzle.checkGuessedVowelsArray();
      vowels.classList.add('hide');

      // domUpdates.displayGuessedLetter(event)
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
    displayScore(game.players[round.currPlayer].score);


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

  removeBoard() {
    var boxes = document.querySelectorAll('.box');
    for (var i = 0; i < puzzle.currentPuzzle.correct_answer.length; i++ ) {
      boxes[i].classList.remove('addWhite');
      boxes[i].innerText = ''
    }
  },

  resetLetters() {
    let letters = document.querySelectorAll('.letters');
    letters.forEach(letter => {
      if (letter.classList.contains('change-opacity')) {
        letter.classList.remove('change-opacity')
      }
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

function addNameAnimation(playerNum) {
  playerNum.classList.add('animatePlayerName');
}

function updatePlayerNames() {
  playerOneName.innerText = nameOneInput.value || "PLAYER 1";
  playerTwoName.innerText = nameTwoInput.value || "PLAYER 2";
  playerThreeName.innerText = nameThreeInput.value || "PLAYER 3";
};





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