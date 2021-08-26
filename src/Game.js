const Deck = require('../src/Deck.js');
const Card = require('../src/Card.js');
const Round = require('../src/Round.js');
const Turn = require('../src/Turn.js');
const util = require('./util');
const data = require('./data');
const prototypeQuestions = data.prototypeData;
let currentDeck = prototypeQuestions;




class Game {
  constructor() {
    this.rawDeckArray = currentDeck;
    this.instanciatedCardsArray = undefined;
    this.deck;
  }
  start(){
    this.instanciatedDeckArray = this.rawDeckArray.map(function(rawQuestionObj){
      new Card(rawQuestionObj.id, rawQuestionObj.question, rawQuestionObj.answers, rawQuestionObj.correctAnswer)
    })

  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;