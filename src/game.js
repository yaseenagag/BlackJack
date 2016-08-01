const _ = require('lodash')
const prompt = require('./prompt')
const colors = require('colors')
const Player = require('./player')
const Hand = require('./hand')
const HumanPlayer = require('./human_player')
const AiPlayer = require('./ai_player')
const AiDealer = require('./ai_dealer')
const formatAsMoney = require('./format_as_money')


module.exports = class Game {
  constructor(){

    this.minBet = 500
    this.maxBet = 5000

    this.roundIndex = 0;

    // this.dealer = new AiPlayer(this);
    this.players = []
    this.setup();
    this.startRound();
  }

  setup(){
    if (!this.numberOfHuamnPlayers){
      this.numberOfHuamnPlayers = prompt.forNumber("How many human players?");
      console.log('okay '+this.numberOfHuamnPlayers+' human players.')
      this.createHumanPlayers();
    }

    if (!this.numberOfAiPlayers){
      this.numberOfAiPlayers = prompt.forNumber("How many Ai players?");
      console.log('okay '+this.numberOfAiPlayers+' Ai players.')
      this.createAiPlayers();
    }

    this.dealer = new AiDealer({
      name: 'dealer',
      game: this,
    });
    this.players.push(this.dealer);
  }

  createHumanPlayers(){
    for (var i=0; i < this.numberOfHuamnPlayers; i++){
      var name = prompt.forString("Give player #"+(i+1)+" a name:")
      this.players.push(
        new HumanPlayer({
          game: this,
          name: name
        })
      );
      this.shuffelPlayers()
    }
  }

  createAiPlayers(){
    for (var i=0; i < this.numberOfAiPlayers; i++){
      this.players.push(new AiPlayer({
        game: this,
        name: 'Ai '+(i+1),
      }));
      this.shuffelPlayers()
    }
  }

  shuffelPlayers(){
    this.players = _.shuffle(this.players)
  }

  startRound(){
    this.roundIndex++;

    console.log('round #'+this.roundIndex+' start!')

    this.dealer.shuffleDeck()

    this.hands = this.players.map(player => new Hand({player: player}))

    this.hands.forEach( hand => {
      if (hand.player === this.dealer) return;
      hand.bet = hand.player.requestBetForHand(hand);
    })

    this.hands.forEach( hand => {
      if (hand.player === this.dealer) return;
      console.log(hand.player.name+' has bet '+formatAsMoney(hand.bet))
    })

    this.dealEveryoneOneCard();
    this.dealEveryoneOneCard();
    this.hands.forEach( hand => {
      console.log(hand.player.name+' was dealt '+hand)
    })

    // this.actingPlayer = this.players[0];
    this.hands.forEach(hand => {
      while (!hand.isBust()){
        var action = hand.player.yourAction(hand)
        if (action === 'hit'){
          this.dealer.dealCardToHand(hand)
          console.log(colors.green(hand.player.name+' Hit!'))
        }else if (action === 'stand'){
          console.log(colors.green(hand.player.name+' Stand!'))
          return;
        }else{
          console.log('UNKONWN ACTION', [action])
        }
      }
      if (hand.isBust()){
        console.log(colors.red(hand.player.name+' BUSTED! '+hand))
      }
    })

    // who won?
    var dealersHand = this.hands.find(hand => hand.player === this.dealer);

    console.log(colors.green('Dealer has '+dealersHand.value()))

    var loosingHands = this.hands.filter(hand => {
      return hand.isBust()
    })

    var pushingHands = this.hands.filter(hand => {
      return (
        hand !== dealersHand &&
        !hand.isBust() && 
        hand.value() === dealersHand.value() 
      );
    })

    var winningHands = this.hands.filter(hand => {
      return (
        hand !== dealersHand &&
        !hand.isBust() && 
        hand.value() > dealersHand.value()
      );
    })

    loosingHands.forEach(hand => {
      console.log(colors.red(hand.player.name+' lost'))
    })
    pushingHands.forEach(hand => {
      console.log(colors.yellow(hand.player.name+' pushed'))
    })
    winningHands.forEach(hand => {
      console.log(colors.green(hand.player.name+' won!'))
    })

  }

  
  dealEveryoneOneCard(){
    this.hands.forEach( hand => {
      var card = this.dealer.dealCardToHand(hand);
    });
  }

  
  // numPlayers(){
  //   sum = this.humans + this.ai
  //   if (sum > 5){
  //     throw error
  //   }
  //   else
  //   return sum
  // }

};


// const humans = rl.question("How many human players?")
// const ai = rl.question("How many AI players?")  