export help = function{

console.log( "Your goal is to get a score of 21" )
console.log( "\nIf you go over 21, you automatically lose" )
//Card Values Explanation
console.log( "\nCard Values:" )
console.log( "\nCards 2-10 are Face Value" )
console.log( "\nJack, Queen, King are worth 10 Points each." )
console.log( "\nAce can be either 11 or 1 depending on current score." )
console.log( "\nType 'H' to Hit (Get another card) or 'S' to Stay\n" )
//Advanced Rules Explanations
//::Double Down::
console.log( "\nExplanation of Casino Rules" )
console.log( "\nDouble Down:" )
console.log( "\nYou may choose to double down on either of your first two cards")
console.log( "\nDouble your bet and get 1 additional card." )
console.log( "\nor if your hand has a value of 9 10 or 11")
//::Split::
console.log( "\nSplit:" )
console.log( "\nIf you are dealt a pair you have the option to split them into two hands" )
console.log( "\nIf you choose to split your original bet is doubled" )
console.log( "\nYou then play each hand as if it were a normal one" )
//::Insurance::
console.log( "\nInsurance:" )
console.log( "\nIf the dealer's upcard is an Ace they will offer you insurance" )
console.log( "\nIf you accept the insurance offer:)"
console.log( "\nYou'll put up an additional 50% of your orignal wager as side bet" )
console.log( "\nIf the dealer has blackjack the insurance pays 2:1 canceling out your original wager" )
// ::Even Money::
console.log( "\nEven Money:" )
console.log( "\nThis is essentially a special isntance of insurance" )
console.log( "\nIt applies when you have a Natural blackjack (Ace + 10)" )
console.log( "\nAnd the dealer's upcard is an Ace" )
console.log( "\nYou'll put up an additional 50% of your orignal wager" )
console.log( "\nIf the dealer has blackjack and pushes you will be payed out at 2:1" )
}