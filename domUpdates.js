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
    if (typeof wheelValue === 'number' ) {
    gamePrompt.innerHTML = `YOU LANDED ON <span>$${wheelValue}</span> now guess a consonant`;
  } else if 
  // need a function to change player turn
    (wheelValue === 'LOSE A TURN') {
      gamePrompt.innerHTML = `YOU LANDED ON <span>${wheelValue}</span> next player's turn`;
    } else {
// need a function to change player turn and player score
      gamePrompt.innerHTML = `YOU LANDED ON <span>${wheelValue}</span> your score is reset and now it's next player's turn`;
    }
  },

  disableLetter(event) {
     console.log(event.target.classList)
    if (event.target.classList.contains('letters')) { 
    event.target.classList.add('change-opacity');
    let letter = event.target.innerHTML
    puzzle.checkGuessedLetter(letter);
    puzzle.checkGuessedLettersArray();

  }
},

  displayScore(score) {
    console.log(game.players[round.currPlayer])
    if (round.currPlayer === 0) {
      playerOneScore.innerText = score;
    } else if (round.currPlayer === 1) {
      playerTwoScore.innerText = score;
    } else {
      playerThreeScore.innerText = score;
    }

  },

  displayBuyVowel() {
    vowels.classList.add('showVowels');
  },

  displayIncorrectGuess() {
    gamePrompt.innerHTML = '<p><span class="player-prompt">INCORRECT! </span>NEXT PLAYER\'S TURN - <span>SPIN, BUY A VOWEL, OR SOLVE THE PUZZLE</span></p> '
  },

  displayGuessedLetter(event) {
    let guessedLetter = event.target.id;
    let boxes = document.querySelectorAll('.box')
    let splitArray = puzzle.splitAnswer(puzzle.currentPuzzle.correct_answer)
    splitArray.forEach((letter, i) => {
      if (guessedLetter === letter) {
    boxes[i].innerText = letter
    
      }
    })
  }


}



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


// };


function updatePlayerNames() {
  playerOneName.innerText = nameOneInput.value || "PLAYER 1";
  playerTwoName.innerText = nameTwoInput.value || "PLAYER 2";
  playerThreeName.innerText = nameThreeInput.value || "PLAYER 3";
};


function addAnimation() {
  playerOneName.classList.add('animatePlayerName');
  currentRoundNumber.classList.add('animateRoundNumber');
  categoryDisplay.classList.add('animateCategorydisplay')
};

function showBoard() {
  var boxes = document.querySelectorAll('.box');
    for (var i = 0; i < puzzle.currentPuzzle.correct_answer.length; i++ ) {
      console.log(boxes[i]);
      if (puzzle.currentPuzzle.correct_answer.charAt(i) !== ' ') {
        boxes[i].classList.add('addWhite');
      }
      
    }
  }





if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}