const HEARTS = '❤️'
const DIAMONDS = '♦️'
const CLUBS = '♣️'
const SPADES = '♠️'
const ACE = 'A'
const JACK = 'J'
const QUEEN = 'Q'
const KING = 'K'

const SUITS = [ HEARTS, DIAMONDS, CLUBS, SPADES ]
const NUMBERS = [ ACE, 2, 3, 4, 5, 6, 7, 8, 9, 10, JACK, QUEEN, KING ]
const VALUES = {
  [ACE]: 11,
  [JACK]: 10,
  [QUEEN]: 10,
  [KING]: 10
}

class Card {
  constructor( options ) {
    this.number = options.number
    this.suit = options.suit
  }

  toString() {
    return `${this.number} ${this.suit} `
  }

  value() {
    return VALUES[ this.number ] || this.number
  }
}

module.exports.Card = Card
module.exports.SUITS = SUITS
module.exports.NUMBERS = NUMBERS
