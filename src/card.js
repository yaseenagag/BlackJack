const HEARTS = '❤️'
const DIAMONDS = '♦️'
const CLUBS = '♣️'
const SPADES = '♠️'
const ACE = 'Ace'
const JACK = 'Jack'
const QUEEN = 'Queen'
const KING = 'King'

const SUITS = [ HEARTS, DIAMONDS, CLUBS, SPADES ]
const NUMBERS = [ ACE, 2, 3, 4, 5, 6, 7, 8, 9, 10, JACK, QUEEN, KING ]

class Card {
  constructor( options ) {
    this.number = options.number
    this.suit = options.suit
  }

  toString() {
    return `[ ${this.number} ${this.suit} ]`
  }
}

module.exports.Card = Card
module.exports.SUITS = SUITS
module.exports.NUMBERS = NUMBERS
