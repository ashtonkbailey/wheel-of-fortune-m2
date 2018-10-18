let bonusWheel;

class BonusRound extends Round {
  constructor(currWheel, currPlayer) {
    super(currWheel, currPlayer);
    this.bonusConsonants = null;
  }

  startBonusRound() {
    puzzle = new Puzzle();
    bonusWheel = new BonusWheel();

    bonusWheel.generateBonusWheel(wheel.valuesArray);  
    this.currWheel = bonusWheel.bonusWheelArray;

    puzzle.getCategory();
    domUpdates.displayCategory();
    domUpdates.displayBonusVowels();
    domUpdates.disableRoundButtons();
    domUpdates.headerBonusRound();
    domUpdates.showBonusSpin();

    puzzle.splitAnswer(puzzle.currentPuzzle.correct_answer);
    this.getConsonants();
    domUpdates.displayBonusConsonants(this.consonants);
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
  }

}

if (typeof module !== 'undefined') {
  module.exports = BonusRound;
}