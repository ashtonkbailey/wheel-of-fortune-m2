let game;


const domUpdates = {
  hideStartMenu() {
	  startContainer.classList.add('hide');
	  game = new Game;
	  game.startGame();
	},

	displayCategory() {
		let category = puzzle.currentPuzzle.category;

		categoryDisplay.innerText = category;
	}

};


if (typeof module !== 'undefined') {
  module.exports = domUpdates;
}