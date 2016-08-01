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
    while(true){
      var ask = this.name+'> you have '+hand+'. What would you like to do? ([h]it,[s]tand)'
      var action = prompt.forString(ask).toLowerCase()
      
      // 'hit'
      if (action === 'h' || action === 'hit'){
        return 'hit'
      }
      // 'stand'
      if (action === 's' || action === 'stand'){
        return 'stand'
      }
    }
  }
}