const { expect } = require('chai');
const spies = require('chai-spies')
chai.use(spies);

const Puzzle = require('../Puzzle.js');
const Game = require('../Game.js');
const Wheel = require('../Wheel.js');
const Round = require('../Round.js');
global.domUpdates = require('../domUpdates.js');

chai.spy.on(global.domUpdates, [''], () => true);

