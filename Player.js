class Player {
  constructor(score, grandTotal) {
    this.score = 0;
    this.grandTotal = 0;
  }

  buyVowel() {
    this.score = this.score - 100;
  }

  updatePlayerScore(wheelValue, array) {
    var total = wheelValue * array.length
    this.score = this.score += total;
  }

  updateGrandTotal() {
    this.grandTotal = this.grandTotal += this.score;
    domUpdates.displayGrandTotal(game.players[round.currPlayer].grandTotal);
  }
  
}

if (typeof module !== 'undefined') {
  module.exports = Player;
}