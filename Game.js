 let round;

class Game {
	constructor(currentRound) {
		this.currentRound = 1;
		this.players = [
			];
	}

	startGame() {
		round = new Round();
		this.players.push(new Player())
		this.players.push(new Player())
		this.players.push(new Player())
		round.startRound();
	}

}

if (typeof module !== 'undefined') {
  module.exports = Game;
}