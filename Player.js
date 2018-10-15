class Player {
  constructor(name, score, grandTotal, playerSpinValue) {
    this.name = name;
    this.turn = false;
    this.score = 0;
    this.grandTotal = grandTotal;
    this.playerSpinValue = playerSpinValue;
  }

  solvePuzzle() {

  }

  buyVowel() {
    this.score = this.score - 100;

  }

  getSpinValue() {

  }

  guessConsonant() {


  }

  updatePlayerScore(wheelValue, array) {
    var total = wheelValue * array.length

    return this.score += total;
  }
  
}

if (typeof module !== 'undefined') {
  module.exports = Player;
}