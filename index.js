// Imports
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

// console.log( "Player", player.showHand() )
// console.log( "Dealer", dealer.showHand() )

// Repeat until player chooses to stay:
// Player chooses to hit or stay
// - If hits and bust (go over 21), automatically loses

// Dealer plays, hitting while 16 or under (17 or more, dealer stays)
// - If hits and bust, player wins

// Compare player total to dealer total, highest wins
// - If win, I get my bet, doubled








/*
const readline = require( 'readline' )

const readInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

readInterface.question( "Is this working? ", answer => {
  console.log( `You answered ${answer}` )

  readInterface.close()
})
*/
