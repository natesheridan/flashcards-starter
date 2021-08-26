const expect = require('chai').expect;
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Round = require('../src/Round.js')

describe('Round', function(){
    beforeEach(function(){
        testCard11 = new Card(11, "Sample Question1", ["Option1", "Option2", "Option3"], "Option1")
        testCard12 = new Card(22, "Sample Question2", ["Option4", "Option5", "Option6"], "Option5")
        testCard13 = new Card(33, "Sample Question3", ["Option7", "Option8", "Option9"], "Option9")
        testCard21 = new Card(44, "Sample Question4", ["Option1", "Option2", "Option3"], "Option3")
        testCard22 = new Card(55, "Sample Question5", ["Option4", "Option5", "Option6"], "Option4")
        testCard23 = new Card(66, "Sample Question6", ["Option7", "Option8", "Option9"], "Option7")
        testDeck1 = new Deck([testCard11,testCard12,testCard13])
        testDeck2 = new Deck([testCard21,testCard22,testCard23])
        testDeck3 = new Deck([testCard11,testCard12,testCard13,testCard21,testCard22,testCard23])
        testRound1 = new Round(testDeck1)
        testRound2 = new Round(testDeck2)
        testRound3 = new Round(testDeck3)
    })

    it('Should be able to return the current deck', function() {
        expect(testRound1.deck).to.deep.equal(testDeck1.deck)
        expect(testRound2.deck).to.deep.equal(testDeck2.deck)
        expect(testRound3.deck).to.deep.equal(testDeck3.deck)
    })

    it('Should be able to return the current card being played', function() {
        expect(testRound1.returnCurrentCard()).to.be.instanceOf(Card)
        expect(testRound1.returnCurrentCard()).to.deep.equal(testCard11)
        expect(testRound2.returnCurrentCard()).to.deep.equal(testCard21)
        expect(testRound3.returnCurrentCard()).to.deep.equal(testCard11)
    })

    it('Should allow a user to take a turn with method in class', function() {
        expect(testRound1.takeTurn("Option1")).to.deep.equal("Correct!")
        expect(testRound2.takeTurn("Option2")).to.deep.equal("Incorrect!")
        expect(testRound3.takeTurn("Option1")).to.deep.equal("Correct!")
    })

    it('Should move to the next card after a turn has been taken', function() {

        expect(testRound1.currentCard).to.deep.equal(testCard11)
        testRound1.takeTurn("Sample Guess")
        expect(testRound1.turns).to.deep.equal(1)

        expect(testRound1.currentCard).to.deep.equal(testCard12)
        testRound1.takeTurn("Sample Guess")
        expect(testRound1.turns).to.deep.equal(2)






        expect(testRound3.turns).to.deep.equal(0)
        testRound3.takeTurn("Option1");
        testRound3.takeTurn("Option1");
        testRound3.takeTurn("Option1");
        testRound3.takeTurn("Option1");
        expect(testRound3.turns).to.deep.equal(4)
        expect(testRound3.currentCard).to.deep.equal(testCard22)

    })

    it('It should be able to return whether guesses are correct or incorrect', function() {
        expect(testRound3.takeTurn("Option1")).to.deep.equal("Correct!");
        expect(testRound3.takeTurn("InvalidAnswer")).to.deep.equal("Incorrect!")
        expect(testRound3.takeTurn("InvalidAnswer")).to.deep.equal("Incorrect!")
    })

    it('Should be able to count incorrect and correct guesses', function() {
        testRound1.takeTurn("InvalidAnswer")
        testRound1.takeTurn("InvalidAnswer")
        expect(testRound1.incorrectGuesses.length).to.equal(2)

        testRound2.takeTurn("Option3")
        testRound2.takeTurn("Option4")
        testRound2.takeTurn("Option7")
        expect(testRound2.incorrectGuesses.length).to.equal(0)
        expect(testRound2.correctGuesses.length).to.equal(3)
        expect(testRound2.correctGuesses[0]).to.deep.equal(testCard21)
        expect(testRound2.correctGuesses[2]).to.deep.equal(testCard23)

        testRound3.takeTurn("InvalidAnswer")
        testRound3.takeTurn("InvalidAnswer")
        testRound3.takeTurn("InvalidAnswer")
        testRound3.takeTurn("Option3")
        testRound3.takeTurn("Option4")
        testRound3.takeTurn("Option7")
        expect(testRound2.correctGuesses[0]).to.deep.equal(testCard21)
        expect(testRound3.incorrectGuesses[2]).to.deep.equal(testCard13)



    })

    it('Should be able to return the win percentage', function() {
        testRound2.takeTurn("Option3")
        testRound2.takeTurn("Option4")
        testRound2.takeTurn("Option7")
        expect(testRound2.calculatePercentCorrect()).to.deep.equal("Percentage Correct : 100%")

        testRound3.takeTurn("InvalidAnswer")
        testRound3.takeTurn("InvalidAnswer")
        testRound3.takeTurn("InvalidAnswer")
        testRound3.takeTurn("Option3")
        testRound3.takeTurn("Option4")
        testRound3.takeTurn("Option7")
        expect(testRound3.calculatePercentCorrect()).to.deep.equal("Percentage Correct : 50%")
        
    })
    


})