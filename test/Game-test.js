const expect = require('chai').expect;
const Game = require('../src/Game.js');
const Card = require('../src/Card.js');
const Round = require('../src/Round.js');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

describe('Game', function(){
    beforeEach(function(){
        testGame1 = new Game();
    })
    it('Should be able to create a deck based off of rawDeckArray arr (prototypeData / data.js)', function(){
        expect(testGame1.deck).to.deep.equal(undefined)
        testGame1.start();
        expect(testGame1.deck.countCards()).to.deep.equal(30);
    })
    it('Should have a deck of instances of cards', function(){

        testGame1.start();
        expect(testGame1.deck.deck[1]).to.be.instanceOf(Card)
        expect(testGame1.deck.deck[2].id).to.deep.equal(3)
        expect(testGame1.deck.deck[3].question).to.deep.equal("What type of prototype method does not modify the existing array but returns a particular representation of the array?")
    })
    it('Should create a new round on .start() using provided deck', function(){
        testGame1.start();
        expect(testGame1.deck.deck[2].id).to.deep.equal(3)
        expect(testGame1.currentRound).to.be.instanceof(Round)
    })
    it('Should iterate to next question after one has been answered', function(){
        testGame1.start()
        testGame1.currentRound.takeTurn("InvalidAnswer")
        testGame1.currentRound.takeTurn("InvalidAnswer")
        testGame1.currentRound.takeTurn("InvalidAnswer")
        expect(testGame1.currentRound.turns).to.deep.equal(3)
    })
    it('Should keep track of the score through the round class', function(){
        testGame1.start()
        testGame1.currentRound.takeTurn("InvalidAnswer")
        testGame1.currentRound.takeTurn("InvalidAnswer")
        testGame1.currentRound.takeTurn("InvalidAnswer")
        expect(testGame1.currentRound.correctGuesses.length).to.deep.equal(0)
        expect(testGame1.currentRound.incorrectGuesses.length).to.deep.equal(3)
    })
    it('It should allow use of other decks with an instanciation argument', function(){
        var testQuestions = [{
            "id": 4,
            "question": "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
            "answers": ["mutator method", "accessor method", "iteration method"],
            "correctAnswer": "accessor method"
          }, {
            "id": 5,
            "question": "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
            "answers": ["mutator method", "accessor method", "iteration method"],
            "correctAnswer": "iteration method"
          }, {
            "id": 6,
            "question": "What is an example of a mutator method?",
            "answers": ["sort()", "map()", "join()"],
            "correctAnswer": "sort()"
          }]

        let testGame2 = new Game(testQuestions)
        testGame2.start()
        expect(testGame2.deck.deck[1].id).to.deep.equal(5)
    })
    it('', function(){

    })

})