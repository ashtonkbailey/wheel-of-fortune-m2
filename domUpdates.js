let game;


const domUpdates = {
  hideStartMenu() {
	  startContainer.classList.add('hide');
	  game = new Game;
	  game.startGame();
    updatePlayerNames();

	},

	displayCategory() {
		let category = puzzle.currentPuzzle.category;
		categoryDisplay.innerText = category;
	}

};


function updatePlayerNames() {
  playerOneName.innerText = nameOneInput.value;
  playerTwoName.innerText = nameTwoInput.value;
  playerThreeName.innerText = nameThreeInput.value;
  
}


if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}