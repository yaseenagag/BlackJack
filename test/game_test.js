const expect = require('expect.js')
const Game = require('../src/game')

describe('Game', function() {
  it('should be a constructor', function() {
    expect(Game).to.be.a('function')
  });
});