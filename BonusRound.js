let bonusWheel;

class BonusRound extends Round {
  constructor(currWheel, currPlayer) {
    super(currWheel, currPlayer);
  }

  startBonusRound() {
    puzzle = new Puzzle();
    wheel = new Wheel();
    bonusWheel = new BonusWheel();

    puzzle.getCategory();
    domUpdates.displayCategory();
    domUpdates.displayBonusVowels();
    domUpdates.disableRoundButtons();
    domUpdates.headerBonusRound();
    domUpdates.showBonusSpin();

    this.currWheel = bonusWheel.generateBonusWheel(wheel.valuesArray);
    puzzle.splitAnswer(puzzle.currentPuzzle.correct_answer);
    console.log('split bonus answer', puzzle.splitAnswer(puzzle.currentPuzzle.correct_answer))
  }

}

if (typeof module !== 'undefined') {
  module.exports = BonusRound;
}