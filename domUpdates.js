const domUpdates = {
  hideStartMenu() {
    startContainer.classList.add('hide');
    gamePrompt.classList.add('show');
    currentRoundNumber.classList.add('animateRoundNumber');
    categoryDisplay.classList.add('animateCategorydisplay');
    playerOneName.classList.add('animatePlayerName');
    gamePage.classList.remove('game-blur');

    game = new Game;
    game.startGame();

    updatePlayerNames();
    showBoard();
  },

  displayCategory() {
    let category = puzzle.currentPuzzle.category;
    categoryDisplay.innerText = category;
  },

  //handle player prompts//
  displaySpinValue() {
    if (game.currentRound < 5) {
      let wheelValue = wheel.generateRandomValue();
      enableLetters();

      if (typeof wheelValue === 'number' ) {
        gamePrompt.innerHTML = 
          `You landed on 
          <span>$${wheelValue}</span>
          now <span>GUESS A CONSONANT</span>`;
      } else if (wheelValue === 'LOSE A TURN') { 
        disableLetters();
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
           your score is reset! <span class='player-prompt'>
           NEXT PLAYER... </span>
           <span>SPIN, BUY A VOWEL, OR SOLVE 
          THE PUZZLE</span>`;
      }

    } else {
      let wheelValue = bonusWheel.currWheelValue;
      gamePrompt.innerHTML = 
        `You landed on 
        <span>$${wheelValue}</span>
        now <span>Guess THREE CONSONANTS
         and ONE VOWEL</span>`;
    }
  },

  changePlayerPrompt(lettersArray) {
    if (puzzle.guessedLetters.length > 0) {
      gamePrompt.innerHTML = 
        `NICE WORK! <span>SPIN, BUY A VOWEL,
         OR SOLVE THE PUZZLE</span>`;
    } else {
      gamePrompt.innerHTML =
        `<span>WRONG!</span>
         <span class='player-prompt'>
        NEXT PLAYER... </span>
        <span>SPIN, BUY A VOWEL, OR SOLVE
         THE PUZZLE</span>`;
    }
  },

  solvePuzzleFail() {
    gamePrompt.innerHTML = 
      `WRONG ANSWER!
       <span class='player-prompt'>NEXT PLAYER... </span>
       <span>SPIN, BUY A VOWEL, OR SOLVE
       THE PUZZLE</span>`;
  },

  showBonusSpin() {
    gamePrompt.innerHTML = 
      `Bonus Round!
      <span>SPIN THE WHEEL</span>`;
  },

  //handle show/hide letters//
  disableConsonant(event) {
    if (event.target.classList.contains('consonant')) { 
      event.target.classList.add('change-opacity');
    }
    let letter = event.target.innerHTML;
    puzzle.checkGuessedLetter(letter);
    puzzle.checkGuessedLettersArray();
    disableLetters();
  },

  disableVowel(event) {
    if (event.target.classList.contains('vowel')) { 
      event.target.classList.add('change-opacity');
      let letter = event.target.innerHTML;

      puzzle.checkGuessedLetter(letter)
      puzzle.checkGuessedVowelsArray();
      vowels.classList.add('hide');
    }
  },
  
  displayBuyVowel() {
    vowels.classList.add('showVowels');
    let currentPlayer = game.players[round.currPlayer];
    currentPlayer.buyVowel();
    displayScore(game.players[round.currPlayer].score);
  },

  //handle score displays// 
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

  //handle board//
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

  //handle solve puzzle//
  displaySolvePuzzle() {
    solvePuzzle.classList.add('show-solve-puzzle-container');
    solvePuzzleInput.focus();
  },

  hideSolvePuzzle() {
    solvePuzzle.classList.remove('show-solve-puzzle-container');
    let playerGuess = document.querySelector('.solve-puzzle-input').value;
    puzzle.checkSolvePuzzle(playerGuess)
  },

  //handle end of round//
  showWonRound() {
    gamePage.classList.add('game-blur');
    wonRound.classList.remove('hide');
  },

  hideWonRound() {
    wonRound.classList.add('hide');
    gamePage.classList.remove('game-blur');
    game.resetRound();
  },
    
  //misc. game functionality//
  newGame() {
    location.reload();
  },

  updateRoundNumber() {
    let rounds = [1, 2, 3, 4];
    rounds.forEach((round) => {
      if (game.currentRound === round) {
        currentRoundNumber.innerHTML = `ROUND ${round}`;
      }
    })
  },

  //handle bonus round//
  headerBonusRound() {
    currentRoundNumber.innerHTML = `${'Bonus Round'}`;
  },

  displayBonusVowels() {
    bonusVowels.classList.remove('hide');
    bonusVowels.classList.add('show-bonus-vowels');
  },

  displayBonusConsonants() {
    let boxes = document.querySelectorAll('.box');
    let consonants = bonusRound.bonusConsonants;
    let splitArray = puzzle.currAnswer;

    for (var i = 0; i < 3; i++) {
      splitArray.forEach(letter => {
        if (letter === consonants[i]) {
          boxes[i].innerText = consonants[i];
        }
      })
    }   
  },

  disableRoundButtons() {
    guessPuzzleButton.classList.add('avoid-clicks');
    guessPuzzleButton.classList.add('disabled');
    buyVowelButton.classList.add('avoid-clicks');
    buyVowelButton.classList.add('disabled');
  }

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
}


function showBoard() {
  var boxes = document.querySelectorAll('.box');
  for (var i = 0; i < puzzle.currentPuzzle.correct_answer.length; i++ ) {
    if (puzzle.currentPuzzle.correct_answer.charAt(i) !== ' ') {
      boxes[i].classList.add('addWhite');
    }
    if (puzzle.currentPuzzle.correct_answer.charAt(i) === '-') {
      boxes[i].innerText = '-';
    }
    if (puzzle.currentPuzzle.correct_answer.charAt(i) === '\'') {
      boxes[i].innerText = '\'';
    }
    if (puzzle.currentPuzzle.correct_answer.charAt(i) === '&') {
      boxes[i].innerText = '&';
    }
  }
}


function displayScore(score) {
  if (round.currPlayer === 0) {
    playerOneScore.innerText = `$${score}`;
  } else if (round.currPlayer === 1) {
    playerTwoScore.innerText = `$${score}`;
  } else {
    playerThreeScore.innerText = `$${score}`;
  }
}

function enableLetters() {
  letterBank.classList.remove('avoid-clicks');
}

function disableLetters() {
  letterBank.classList.add('avoid-clicks');
}





if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}