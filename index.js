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
let playerTotal = player.handValue()

console.log( 'Player Hand: ', player.showHand() )

if( playerTotal === 21 ) {
  console.log( 'PLAYER WINS!' )
  answer = 'S'
}

while( answer !== 'S'  ) {
  answer = rl.question( '[H]it or [S]tay? ').toUpperCase()

  switch( answer ) {
    case 'H':
      player.getCard( deck.playCard() )
      playerTotal = player.handValue()
      console.log( 'Player Hand: ', player.showHand() )
      break
    case 'S':
      break
    default:
      console.log( answer + ' is not a valid response!' )
  }

  if( playerTotal > 21 ) {
    console.log( 'PLAYER SUCKS!' )
    answer = 'S'
  }
}

let dealerTotal = dealer.handValue()

console.log( 'Dealer Hand: ', dealer.showHand() )

if( dealerTotal === 21 ) {
  console.log( 'YOU THE BESTEREST DEALER' )
}

while( dealerTotal <= 16 ) {
  dealer.getCard( deck.playCard() )

  dealerTotal = dealer.handValue()
  console.log( 'Dealer Hand: ', dealer.showHand() )

  if( dealerTotal > 21 ) {
    console.log( 'PLAYER WINS!' );
  } else if ( dealerTotal > 16 && dealerTotal > player.handValue() ) {
    console.log( 'PLAYER LOSES!')
  } else if (playerTotal > 21 && dealerTotal < 21) {
    console.log( 'DEALER WINS!' );
  }
}

// Dealer plays, hitting while 16 or under (17 or more, dealer stays)
// - If hits and bust, player wins

// Compare player total to dealer total, highest wins
// - If win, I get my bet, doubled
