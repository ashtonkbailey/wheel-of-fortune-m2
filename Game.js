let round;
let bonusRound;

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

  winRound() {
    this.players[round.currPlayer].updateGrandTotal();
  }

  resetRound() {
      this.currentRound++;
      round.resetPlayerScore();
      domUpdates.resetScoreDisplay();
      domUpdates.removeBoard();
      domUpdates.resetLetters();

    if (this.currentRound <= 4) {
      domUpdates.updateRoundNumber();
      round = new Round();
      round.startRound();
      showBoard();
      changePlayerAnimation(round.currPlayer);
    } else {
      bonusRound = new BonusRound();
      bonusRound.startBonusRound();
      showBoard();
      enableLetters();
    };

  }


}


if (typeof module !== 'undefined') {
  module.exports = Game;
}