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
  }
};


function updatePlayerNames() {
  playerOneName.innerText = nameOneInput.value || "PLAYER 1";
  playerTwoName.innerText = nameTwoInput.value || "PLAYER 2";
  playerThreeName.innerText = nameThreeInput.value || "PLAYER 3";;
}

	bonusRoundDisplay() {
		//will display up to six consonants of new puzzle
	},

	updatePlayerNames() {
	  playerOneName.innerText = nameOneInput.value || "PLAYER 1";
	  playerTwoName.innerText = nameTwoInput.value || "PLAYER 2";
	  playerThreeName.innerText = nameThreeInput.value || "PLAYER 3";;
	},

	addAnimation() {
	  playerOneName.classList.add('animatePlayerName');
	  currentRoundNumber.classList.add('animateRoundNumber');
	  categoryDisplay.classList.add('animateCategorydisplay')
	}

};


if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}