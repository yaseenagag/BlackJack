const expect = require('expect.js')
const Card = require('../src/card')

describe('Card', function() {
  describe('.all', function() {

    it('should return all 52 cards', function() {
      var cards = Card.all();
      expect(cards.length).to.be(52);
    });
  })
});