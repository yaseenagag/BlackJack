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
      hand.player.yourAction(hand)
      if (hand.isBust()){
        console.log(colors.red(hand.player.name+' BUSTED! '+hand))
      }
    })

    // steps per round
    // everyone bets in order (min..max)
    // dealer gives 2 cards to each player
    // everyone takes their turn (hitting, splitting, doubling down, staying)
    
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