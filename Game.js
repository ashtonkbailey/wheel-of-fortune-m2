let round;

class Game {
  constructor(currentRound) {
    this.currentRound = 1;
    this.players = [];
    this.currPlayer = this.players[0]
  }

  startGame() {
    round = new Round();
    console.log('starting round is: ' + this.currentRound)
    this.players.push(new Player())
    this.players.push(new Player())
    this.players.push(new Player())
    round.startRound();
  }

  winRound() {
    this.players[round.currPlayer].updateGrandTotal();
    this.resetRound();
  }

  resetRound() {
    this.currentRound++;
    domUpdates.updateRoundNumber();
    console.log('current round is: ' + this.currentRound)
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