let bonusWheel;

class BonusRound extends Round {
  constructor(currWheel, currPlayer) {
    super(currWheel, currPlayer);
    this.bonusConsonants = null;
  }

  startBonusRound() {
    this.checkCurrPlayer();

    puzzle = new Puzzle();
    bonusWheel = new BonusWheel();

    bonusWheel.generateBonusWheel(wheel.valuesArray);  
    this.currWheel = bonusWheel.bonusWheelArray;

    puzzle.getCategory();
    domUpdates.displayCategory();
    // domUpdates.displayBonusVowels();
    domUpdates.disableRoundButtons();
    domUpdates.headerBonusRound();
    domUpdates.showBonusSpin();

    puzzle.splitAnswer(puzzle.currentPuzzle.correct_answer);
    this.getConsonants(puzzle.currAnswer);
    domUpdates.displayBonusConsonants(this.bonusConsonants);
  }

  checkCurrPlayer() {
    let sortedPlayers = game.players.sort((a, b) => {
      return a.grandTotal - b.grandTotal;
    })

    this.currPlayer = sortedPlayers[0]
  }

  getConsonants(puzzleAnswer) {
    let vowels = 'AEIOU';
    let consonants = puzzleAnswer.reduce((arr, letter) => {
      if (!(vowels.includes(letter))) {
        arr.push(letter)
      }
    return arr
    }, [])

    this.bonusConsonants = consonants;
    console.log(this.bonusConsonants)
  }

}

if (typeof module !== 'undefined') {
  module.exports = BonusRound;
}