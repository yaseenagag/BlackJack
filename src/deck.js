const cards = require( './card' )
const { Card, SUITS, NUMBERS } = cards

class Deck {
  constructor() {
    this.cards = this.createDeck()
  }

  createDeck() {
    return SUITS.reduce( this.deckReducer, [] )
  }

  deckReducer( previous, current, index, array ) {
    previous.concat( NUMBERS.reduce( ( previousCard, currentCard ) => {
      previous.push( new Card({ number: currentCard, suit: current }))
    }, [] ))

    return previous
  }

  toString() {
    return this.cards.map( card => card.toString() ).concat()
  }
}

module.exports.Deck = Deck
