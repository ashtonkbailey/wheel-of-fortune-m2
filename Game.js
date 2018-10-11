let round;

class Game {
	constructor(playerTurn) {
		this.currentRound = 1;
		this.playerTurn = playerTurn;
	}

	startGame() {
		round = new Round();
		round.startRound();
	}

}

if (typeof module !== 'undefined') {
  module.exports = Game;
}