let round;

class Game {
	constructor(currentRound, players) {
		this.currentRound = 1;
		this.players = [
			this.player1,
			this.player2,
			this.player3
			];
		this.currPlayer = this.players[0]
	}

	startGame() {
		round = new Round();
		this.player1 = new Player();
		this.player2 = new Player();
		this.player3 = new Player();
		round.startRound();
	}

	switchPlayer() {
		if (this.currPlayer = this.players[0] || this.players[1]) {
			this.currPlayer = this.players[i + 1];
		} else {
			this.currPlayer = this.players[0];
		}
	}


}

if (typeof module !== 'undefined') {
  module.exports = Game;
}