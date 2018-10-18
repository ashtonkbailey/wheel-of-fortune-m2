class BonusRound extends Round {
  constructor(currWheel, currPlayer) {
    super(currWheel, currPlayer);
  }

  startBonusRound() {
    puzzle = new Puzzle;
    wheel = new Wheel;

    puzzle.getCategory();
    domUpdates.displayCategory();

    this.currWheel = bonusWheel.generateBonusArray(wheel.valuesArray);
    puzzle.splitAnswer(puzzle.currentPuzzle.correct_answer);
    console.log('split bonus answer', puzzle.splitAnswer(puzzle.currentPuzzle.correct_answer))
  }

}

if (typeof module !== 'undefined') {
  module.exports = BonusRound;
}