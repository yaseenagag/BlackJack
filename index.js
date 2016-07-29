// Imports
const rl = require( 'readline-sync' )
const Deck = require( './src/deck' ).Deck
const Player = require( './src/player' ).Player
const cards = require( './src/card' )

// Deck is created
const deck = new Deck()

// - shuffle the deck
deck.shuffle()

//Test code to see whole Deck
// console.log( deck.toString() )
const player = new Player()
const dealer = new Player()

// Dealer gives out:
// - one card face down to player
player.giveCard( deck.playCard() )
// - one card face down to Dealer
dealer.giveCard( deck.playCard() )
// - one card face up to player
player.giveCard( deck.playCard() )
// - one card face up to Dealer
dealer.giveCard( deck.playCard() )

// Repeat until player chooses to stay:
// Player chooses to hit or stay
// - If hits and bust (go over 21), automatically loses

//PLAYER CODE
let answer = 'H'
let playerTotal = player.handValue()

console.log( 'Player Hand: ', player.showHand() )

if( playerTotal === 21 ) {
  console.log( 'PLAYER GETS BLACKJACK!' )
  answer = 'S'
}

while( answer !== 'S'  ) {
  answer = rl.question( '[H]it or [S]tay? ').toUpperCase()

  switch( answer ) {
    case 'H':
    player.giveCard( deck.playCard() )
    playerTotal = player.handValue()
    console.log( 'Player Hand: ', player.showHand() )
    break
    case 'S':
    break
    default:
    console.log( answer + ' is not a valid response!' )
  }

  if( playerTotal > 21 ) {
    answer = 'S'
  }
}

//DEALER CODE
let dealerTotal = dealer.handValue()

while( dealerTotal <= 16 && playerTotal < 21 ) {
  dealer.giveCard( deck.playCard() )

  dealerTotal = dealer.handValue()
  console.log( 'Dealer Hand: ', dealer.showHand() )
}

if ( dealerTotal === 21 ) { //&& playerTotal !== 21
  console.log( '\nYOU THE BESTEREST DEALER. DEALER WINS BECAUSE OF NATURAL' )
}

//if statements for player and dealer that do not change values
if ( playerTotal > 21 ) {
  console.log( '\nPLAYER BUSTS\nDEALER WINS\nYOU NEED PRACTICE' )
} else if ( dealerTotal > 21) {
  console.log( '\nPLAYER WINS!\nDEALER WENT OVER 21' );
} else if ( dealerTotal > playerTotal ) {
  console.log( '\nPLAYER LOSES!\nDEALER HAS HIGHER SCORE')
}

// Dealer plays, hitting while 16 or under (17 or more, dealer stays)
// - If hits and bust, player wins

// Compare player total to dealer total, highest wins
// - If win, I get my bet, doubled
