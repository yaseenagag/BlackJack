const DEFAULT_POOL = 100

class Player {
  constructor( options ) {
    this.pool = options.pool || DEFAULT_POOL
  }
}

module.exports.Player = Player
