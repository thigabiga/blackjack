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

function clearTable() {
    let container1 = document.getElementById("dealer-hand");
    while (container1.firstChild) {
        container1.removeChild(container1.firstChild);
    };
    let container2 = document.getElementById("player-hand");
    while (container2.firstChild) {
        container2.removeChild(container2.firstChild);
    };
    let container3 = document.getElementById("dealer-points");
    while (container3.firstChild) {
        container3.removeChild(container3.firstChild);
    };
    let container4 = document.getElementById("player-points");
    while (container4.firstChild) {
        container4.removeChild(container4.firstChild);
    };
    let container5 = document.getElementById("messages");
    while (container5.firstChild) {
        container5.removeChild(container5.firstChild);
    };
};

function playBlackjack() {

    var deck = new Deck();
    deck.shuffle();

    var player = new Hand();
    var dealer = new Hand();

    var stand = false;
    var deal = false;

    var wins = 0;

    document.getElementById("deal-button").addEventListener("click", function () {
        // deal two cards each to the player and dealer if haven't already
        if (deal == false) {
            for (i = 0; i < 2; i++) {
                let playerCard = deck.draw();
                player.addCard(playerCard);
                let cardIMG = document.createElement("IMG");
                cardIMG.setAttribute("src", playerCard.getURL());
                cardIMG.setAttribute("class", "card");
                document.getElementById("player-hand").appendChild(cardIMG);
            };

            let dealerCard1 = deck.draw();
            dealer.addCard(dealerCard1);
            let dealerCardIMG1 = document.createElement("IMG");
            dealerCardIMG1.setAttribute("src", "images/blue_back.jpg");
            dealerCardIMG1.setAttribute("id", "dealer-temp-card");
            document.getElementById("dealer-hand").appendChild(dealerCardIMG1);

            let dealerCard2 = deck.draw();
            dealer.addCard(dealerCard2);
            let dealerCardIMG2 = document.createElement("IMG");
            dealerCardIMG2.setAttribute("src", dealerCard2.getURL());
            dealerCardIMG2.setAttribute("class", "card");
            document.getElementById("dealer-hand").appendChild(dealerCardIMG2);

            document.getElementById("player-points").innerHTML = player.getPoints();
            deal = true;
        };
    });

    document.getElementById("hit-button").addEventListener("click", function () {
        // deal one card to the player on "hit"
        if (deal == true && player.getPoints() < 21 && stand == false) {
            let playerCard = deck.draw();
            player.addCard(playerCard);
            let cardIMG = document.createElement("IMG");
            cardIMG.setAttribute("src", playerCard.getURL());
            cardIMG.setAttribute("class", "card");
            document.getElementById("player-hand").appendChild(cardIMG);

            document.getElementById("player-points").innerHTML = player.getPoints();
        };
    });

    document.getElementById("stand-button").addEventListener("click", function () {
        // deal cards to the dealer until dealer points reach 17
        while (dealer.getPoints() < 17) {
            let dealerCard2 = deck.draw();
            dealer.addCard(dealerCard2);
            let dealerCardIMG2 = document.createElement("IMG");
            dealerCardIMG2.setAttribute("src", dealerCard2.getURL());
            dealerCardIMG2.setAttribute("class", "card");
            document.getElementById("dealer-hand").appendChild(dealerCardIMG2);
        };

        let newURL = dealer.cards[0].getURL();
        document.getElementById("dealer-temp-card").setAttribute("src", newURL);

        document.getElementById("player-points").innerHTML = player.getPoints();
        document.getElementById("dealer-points").innerHTML = dealer.getPoints();

        if ((dealer.getPoints() > 21 && player.getPoints() > 21) || (dealer.getPoints() == 21 && player.getPoints() == 21)) {
            document.getElementById("messages").innerHTML = "It's a draw.";
        } else if (player.getPoints() == 21 || (dealer.getPoints() > 21 && player.getPoints() < 21) || (dealer.getPoints() < 21 && player.getPoints() < 21 && player.getPoints() > dealer.getPoints())) {
            wins++;
            document.getElementById("messages").innerHTML = "Player wins.";
        } else {
            document.getElementById("messages").innerHTML = "Dealer wins.";
        };
        document.getElementById("wins").innerHTML = "Total Player Wins: " + wins;

        stand = true;

    });

    document.getElementById("restart-button").addEventListener("click", function() {
        clearTable();
        stand = false;
        deal = false;
        dealer = new Hand();
        player = new Hand();
    });
};



playBlackjack();