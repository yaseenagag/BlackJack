const DEFAULT_POOL = 100

class Player {
  constructor( options={} ) {
    this.pool = options.pool || DEFAULT_POOL
    this.cards = []
  }

  giveCard( card ) {
    this.cards.push( card )
  }

  newHand() {
    this.cards = []
  }

  showHand() {
    return this.cards.map( card => card.toString() ).join( ' ' )
  }

  handValue() {
    const sum = this.cards.reduce( (total, card ) => total + card.value(), 0 )

    if( sum > 21 && this.handContainsAce() ) {
      return sum - 10
    } else {
      return sum
    }
  }

  handContainsAce() {
    return this.cards.find( card => card.isAce() )
  }
}

module.exports.Player = Player
