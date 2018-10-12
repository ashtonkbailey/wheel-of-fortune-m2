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
	}

};


function updatePlayerNames() {
  playerOneName.innerText = nameOneInput.value || "PLAYER 1";
  playerTwoName.innerText = nameTwoInput.value || "PLAYER 2";
  playerThreeName.innerText = nameThreeInput.value || "PLAYER 3";;
}


function addAnimation() {
  playerOneName.classList.add('animatePlayerName');
  currentRoundNumber.classList.add('animateRoundNumber');
  categoryDisplay.classList.add('animateCategorydisplay')
}




if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}