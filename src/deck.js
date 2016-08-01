const Card = require( './card' )

module.exports = class Deck {
  constructor() {
    this.cards = Card.all()
  }

  shuffle() {
    var cardCount = this.cards.length

    if (cardCount !== 52){
      throw new Error('refusing to shuffle partial deck');
    }

    for( let index = 0; index < cardCount; index++ ) {
      var randomIndex = Math.floor( Math.random() * cardCount )

      var temp = this.cards[ index ]
      this.cards[ index ] = this.cards[ randomIndex ]
      this.cards[ randomIndex ] = temp
    }
  }

  toString() {
    return this.cards.map( card => card.toString() ).concat()
  }

  playCard() {
    return this.cards.pop()
  }
}
