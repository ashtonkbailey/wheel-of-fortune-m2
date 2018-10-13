class Player {
  constructor(name, score, grandTotal, playerSpinValue) {
    this.name = name;
    this.turn = false;
    this.score = score;
    this.grandTotal = grandTotal;
    this.playerSpinValue = playerSpinValue;
  }

  solvePuzzle() {

  }

  buyVowel() {

  }

  getSpinValue() {

  }

  guessConsonant() {


  }

  updatePlayerScore(wheelValue, array) {
    var total = wheelValue * array.length
    return this.score = total;


  }
  
}

if (typeof module !== 'undefined') {
  module.exports = Player;
}