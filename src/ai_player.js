module.exports = class AiPlayer {
  constructor(options) {
    this.name = options.name;
    this.game = options.game;
  }

  requestBetForHand(hand){
    return 500;
  }

  yourAction(hand){
    return 'stand'
  }
}