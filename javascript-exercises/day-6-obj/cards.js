function Card(point, suit) {
    this.point = point;
    this.suit = suit;
}

Card.prototype.getURL = function() {
    let letter = this.suit[0].toUpperCase();
    let url = "images/".concat(this.point.toString(), letter, ".jpg");
    return url;
};

function Hand() {
    this.cards = [];
}

Hand.prototype.addCard = function(card) {
    this.cards.push(card);
}

Hand.prototype.getPoints = function() {
    let sum = 0;
    this.cards.forEach(function(e) {
        sum += e.point;
    })
    return sum;
};

function Deck() {
    this.cards = [];
    this.createDeck();
}

Deck.prototype.createDeck = function() {
    for (points = 1; points <= 13; points++) {
        this.cards.push(new Card(points, "hearts"));
        this.cards.push(new Card(points, "diamonds"));
        this.cards.push(new Card(points, "spades"));
        this.cards.push(new Card(points, "clubs"));
    };
}

Deck.prototype.draw = function() {
    return this.cards.pop();
}

Deck.prototype.cardsLeft = function() {
    return this.cards.length;
}

Deck.prototype.shuffle = function() {
    let newArray = [];
    let tempArray = this.cards.slice();
    while (tempArray.length !== 0) {
        let roll = Math.floor(Math.random() * tempArray.length);
        newArray.push(tempArray[roll]);
        tempArray.splice(roll, 1);
    }
    this.cards = newArray;
};