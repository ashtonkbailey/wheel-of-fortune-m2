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
    console.log('1-startgame', this.players)
    round.startRound();
  }

  resetRound() {
    this.currentRound++;
    round.resetPlayerScore();
    domUpdates.resetScoreDisplay();
    domUpdates.removeBoard();
    domUpdates.resetLetters();
    round = new Round();
    round.startRound();
    showBoard();
    changePlayerAnimation(round.currPlayer)
    round = new Round();
    round.startRound();

  }


}


if (typeof module !== 'undefined') {
  module.exports = Game;
}