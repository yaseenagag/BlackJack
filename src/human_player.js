const prompt = require('./prompt')
const formatAsMoney = require('./format_as_money')

module.exports = class HumanPlayer {
  constructor(options) {
    this.name = options.name;
    this.game = options.game;
  }

  requestBetForHand(hand){
    var bet = prompt.forNumber(this.name+'> How much would you like to bet?')
    console.log('you\'ve bet '+formatAsMoney(bet))
    return bet;
  }

  yourAction(hand){
    while (!hand.isBust()){
      var ask = this.name+'> you have '+hand+'. What would you like to do? ([h]it,[s]tand)'
      var action = prompt.forString(ask).toLowerCase()
      
      // 'hit'
      if (action === 'h' || action === 'hit'){
        this.game.dealer.dealCardToHand(hand)
        continue;
      }
      // 'stand'
      if (action === 's' || action === 'stand'){
        return
      }

      // // 'doubleDown'
      // // 'split'
      // // 'insurance'
      // // 'even money'
    }
  }
}