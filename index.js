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

//Game Intro
console.log( "Welcome to Yaseen, Jrob & Harman's BlackJack" )
console.log( "\nYour goal is to get a score of 21" )
console.log( "\nIf you go over 21, you automatically lose" )
//Card Values Explanation
console.log( "\nCard Values:" )
console.log( "\nCards 2-9 are Face Value" )
console.log( "\nJack, Queen, King are worth 10 Points each" )
console.log( "\nAce can be either 11 or 1 depending on current score" )
console.log( "\nType H to Hit (Get more cards) or S to Stay\n" )


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

if ( dealerTotal === 21 ) { //&& playerTotal !== 21
  console.log( '\nYOU THE BESTEREST DEALER. DEALER WINS BECAUSE OF NATURAL' )
  answer = 'S'
}

while( answer !== 'S'  ) {
  answer = rl.question( '\n[H]it or [S]tay? ').toUpperCase()

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
// Dealer plays, hitting while 16 or under (17 or more, dealer stays)
// - If hits and bust, player wins
while( dealerTotal <= 16 && playerTotal < 21 ) {
  dealer.giveCard( deck.playCard() )

  dealerTotal = dealer.handValue()
  console.log( 'Dealer Hand: ', dealer.showHand() )
}

//Show Scores and Hands for Player and Dealer
console.log( '\nPLayer: ', player.showHand() )
console.log( 'Score: ', playerTotal )
console.log( '\nDealer: ', dealer.showHand() )
console.log( 'Score: ', dealerTotal )

//if statements for player and dealer that do not change values
if ( playerTotal > 21 ) {
  console.log( '\nPLAYER WENT OVER 21\nDEALER WINS\nPLAYER NEEDS PRACTICE' )
} else if ( dealerTotal > 21) {
  console.log( '\nYOU ROCK! YOU SHOULD HIT UP VEGAS\nDEALER WENT OVER 21' )
// Compare player total to dealer total, highest wins
} else if ( dealerTotal > playerTotal ) {
  console.log( '\nLIFE IS ABOUT TAKING RISKS! YOU SHOULD HAVE HIT AGAIN!\nDEALER WINS\n')
} else if ( playerTotal > dealerTotal ) {
  console.log( '\nGOOD JOB! YOU SCORED HIGHER THEN DEALER!\nDEALER LOSES\n')
}
