const expect = require('expect.js')
const Deck = require('../src/deck')

describe('Deck', function() {
  describe('new', function() {
    it('should have all 52 cards', function() {
      var deck = new Deck()
      expect(deck.cards.length).to.be(52)
    });
  })
});