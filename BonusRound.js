class BonusRound extends Round {
  constructor(currCategory, currWheel, currPlayer, bonusWheel) {
    super(currCategory, currWheel, currPlayer);
    this.bonusWheel = bonusWheel;
  }

  getBonusWheel() {
    //call bonusWheel from Wheel
  }

}

if (typeof module !== 'undefined') {
  module.exports = BonusRound;
}