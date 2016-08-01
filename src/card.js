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
  constructor(rank, suit) {
    if (!rank) throw new Error('rank is required')
    if (!suit) throw new Error('suit is required')
    this.suit = suit
    this.rank = rank
  }

  toString() {
    return `[${this.rank}${this.suit} ]`
  }

  value() {
    return VALUES[ this.rank ] || this.rank
  }

  isAce() {
    return this.rank === ACE
  }
}

Card.SUITS    = SUITS

Card.NUMBERS  = NUMBERS
Card.HEARTS   = HEARTS
Card.DIAMONDS = DIAMONDS
Card.CLUBS    = CLUBS
Card.SPADES   = SPADES

Card.ACE      = ACE
Card.JACK     = JACK
Card.QUEEN    = QUEEN
Card.KING     = KING
module.exports = Card