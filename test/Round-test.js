const expect = require('chai').expect;
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');

describe('Round', function(){
    beforeEach(function(){
        testCard11 = new Card(11, "Sample Question1", ["Option1", "Option2", "Option3"], "Option1")
        testCard12 = new Card(22, "Sample Question2", ["Option4", "Option5", "Option6"], "Option5")
        testCard13 = new Card(33, "Sample Question3", ["Option7", "Option8", "Option9"], "Option9")
        testDeck1 = new Deck([testCard11,testCard12,testCard13])
        testCard21 = new Card(44, "Sample Question4", ["Option1", "Option2", "Option3"], "Option3")
        testCard22 = new Card(55, "Sample Question5", ["Option4", "Option5", "Option6"], "Option4")
        testCard23 = new Card(66, "Sample Question6", ["Option7", "Option8", "Option9"], "Option7")
        testDeck2 = new Deck([testCard21,testCard22,testCard23])
        testDeck3 = new Deck([testCard11,testCard12,testCard13,testCard21,testCard22,testCard23])  
    })
})