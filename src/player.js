const DEFAULT_POOL = 100

class Player {
  constructor( options={} ) {
    this.pool = options.pool || DEFAULT_POOL
    this.cards = []
  }

  getCard( card ) {
    this.cards.push( card )
  }

  newHand() {
    this.cards = []
  }

  showHand() {
    return this.cards.map( card => card.toString() ).join( ' ' )
  }

  handValue() {
    return this.cards.reduce( (total, card ) => total + card.value(), 0 )
  }
}

module.exports.Player = Player
