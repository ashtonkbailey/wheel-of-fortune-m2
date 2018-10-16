class Player {
  constructor(name, score, grandTotal, playerSpinValue) {
    this.name = name;
    this.turn = false;
    this.score = 0;
    this.grandTotal = 0;
    this.playerSpinValue = playerSpinValue;
  }

  solvePuzzle() {

  }

  buyVowel() {
    console.log('SUBTRACT 100')
    this.score = this.score - 100;
    console.log(this.score)

  }

  getSpinValue() {

  }

  guessConsonant() {


  }

  updatePlayerScore(wheelValue, array) {
    var total = wheelValue * array.length
    this.score = this.score += total;
  }
  
}

if (typeof module !== 'undefined') {
  module.exports = Player;
}