const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');
const Round = require('../src/Round.js');
const Turn = require('../src/Turn.js');
const util = require('./util');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
let currentDeck = prototypeQuestions;




class Game {
  constructor(rawDeckArray) {
    this.rawDeckArray = rawDeckArray || currentDeck;
    this.deck;
    this.currentRound;
  }
  start(){
    let rawDeck = this.rawDeckArray;
    let instanciatedCardsArray = this.rawDeckArray.map(function(card, index){
      return new Card(rawDeck[index].id, rawDeck[index].question, rawDeck[index].answers, rawDeck[index].correctAnswer)
    })
    this.deck = new Deck(instanciatedCardsArray)
    this.currentRound = new Round(this.deck)
    this.printMessage(this.deck)
    this.printQuestion(this.currentRound)

  }

  printMessage(deck) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;