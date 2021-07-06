class Deck {
    cards = [];

    constructor() {
      numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
      suits = ['♣', '♦', '♥', '♠'];
      this.suits.forEach(symbol => {
        this.numbers.forEach(number => {
          this.cards.push({number, symbol});
        });
      });
    }
  
    dispatchCards(size) {
      return new Array(size)
        .fill()
        .map(
          () =>
            this.cards.splice(parseInt(Math.random() * this.cards.length), 1)[0]
        );
    }

    
  }
  
  class Hand {
    cards = [];
    constructor(deck, size) {
      this.cards = deck.dispatchCards(size);
    }
  }
  
  export {
    Deck,
    Hand,
  };
  