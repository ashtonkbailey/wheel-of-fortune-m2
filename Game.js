let round;

class Game {
  constructor(currentRound) {
    this.currentRound = 1;
    this.players = [];
    this.currPlayer = this.players[0]
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