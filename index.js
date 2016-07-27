// Imports
const rl = require( 'readline-sync' )
const Deck = require( './src/deck' ).Deck
const Player = require( './src/player' ).Player

// Deck is created
const deck = new Deck()

// - shuffle the deck
deck.shuffle()
// console.log( deck.toString() )

// Player places bet
const player = new Player()
const dealer = new Player()

// Dealer gives out:
// - one card face down to player
player.getCard( deck.playCard() )
// - one card face down to Dealer
dealer.getCard( deck.playCard() )
// - one card face up to player
player.getCard( deck.playCard() )
// - one card face up to Dealer
dealer.getCard( deck.playCard() )

// Repeat until player chooses to stay:
// Player chooses to hit or stay
// - If hits and bust (go over 21), automatically loses
let answer = 'H'

console.log( 'Player Hand: ', player.showHand() )

if ( player.handValue() === 21 ) {
  console.log( 'YOU WIN!' )
  answer = 'S'
}

while( answer !== 'S'  ) {
  answer = rl.question( '[H]it or [S]tay? ').toUpperCase()

  switch( answer ) {
    case 'H':
      player.getCard( deck.playCard() )
      console.log( 'Player Hand: ', player.showHand() )
      break
    case 'S':
      break;
    default:
      console.log( answer + ' is not a valid response!' )
  }

  if( player.handValue() > 21 ) {
    console.log( 'YOU SUCK!' )
    answer = 'S'
  }
}

// Dealer plays, hitting while 16 or under (17 or more, dealer stays)
// - If hits and bust, player wins

// Compare player total to dealer total, highest wins
// - If win, I get my bet, doubled
