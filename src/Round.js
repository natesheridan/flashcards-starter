class Round{
    constructor(deck){
        this.deck = deck.deck;
        this.incorrectGuesses = [];
        this.correctGuesses = [];
        this.turns = 0;
        this.currentCard = this.deck[this.turns]
        this.isCompleted = false;
    }
    returnCurrentCard(){
        return this.currentCard;
    }
    takeTurn(guess){
        this.currentCard = this.deck[this.turns]
        let check = (guess===this.currentCard.correctAnswer)
        if(this.turns===this.deck.length){
            this.isCompleted = true
        }
        switch(check){
            case true:
                this.correctGuesses.push(this.currentCard)
                this.endRound()
                return `Correct!`;
            case false:
                this.incorrectGuesses.push(this.currentCard)
                this.endRound()
                return `Incorrect!`;
                
        }
    }
    calculatePercentCorrect(){
        let percentage = `${(this.correctGuesses.length/this.deck.length*100)}%`
        return `Percentage Correct : ${percentage}`
    }
    endRound(){
        switch(this.isCompleted){
            case (true):
                console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()} of the questions correctly!`);
            default: 
                this.turns++;
                this.currentCard = this.deck[this.turns]
        }
    }

}

module.exports = Round;