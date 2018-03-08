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
};

Hand.prototype.addCard = function(card) {
    this.cards.push(card);
}

Hand.prototype.getPoints = function() {
    let sum = 0;
    this.cards.forEach(function(e) {
        if (e.point > 10) {
            sum += 10;
        } else {
            sum += e.point;
        };
    })
    return sum;
}

Hand.prototype.bust = function() {
    if (this.prototype.getPoints > 21) {
        return true;
    };
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
    $("#dealer-hand").empty();
    $("#player-hand").empty();;
    $("#dealer-points").empty();;
    $("#player-points").empty();;
    $("#messages").empty();
    $("#deal-button").empty().append("Play");
};

function render(cardURL, hand) {
    $("<img>", {
        "src": cardURL,
        "class": "card"
    }).appendTo($(hand));
};

function dealMe(deal, dealer, player, deck, stand, wins) {
    $("#deal-button").click(function() {
        // deal two cards each to the player and dealer if haven't already
        if (player.length == 0) {
            // deal the dealer first card face down
            dealer.addCard(deck.draw());
            $("<img>", {
                "src": "images/blue_back.jpg",
                "class": "dealer-temp-card"
            }).appendTo($("#dealer-hand"));

            let dealerCard2 = deck.draw();
            dealer.addCard(dealerCard2);
            render(dealerCard2.getURL(), "#dealer-hand");

            let playerCard1 = deck.draw();
            player.addCard(playerCard1);
            render(playerCard1.getURL(), "#player-hand");

            let playerCard2 = deck.draw();
            player.addCard(playerCard2);
            render(playerCard2.getURL(), "#player-hand");

            // display player points
            $("#player-points").append(player.getPoints());
            };

            return player.bust();

    });
};

function hitMe(deal, dealer, player, deck, stand, wins) {
    $("#hit-button").click(function() {
        // deal one card to the player when they click the "hit me" button
        if (deal == true && player.bust() == false && stand == false) {
            let playerCard1 = deck.draw();
            player.addCard(playerCard1);
            render(playerCard1.getURL(), "#player-hand");
            $("#player-points").empty().append(player.getPoints());
            return player.bust();
        };
    });
};

function end(deal, dealer, player, deck, stand, wins) {
    if (deal == true && stand == true) {
        $("#deal-button").empty().append("Restart");
        // flip dealer hole card
        if (dealer.length > 0) {
            let newURL = dealer.cards[0].getURL();
            $(".dealer-temp-card").attr("src", newURL);
        };
        $("#player-points").empty().append(player.getPoints());
        $("#dealer-points").append(dealer.getPoints());
        if ((dealer.getPoints() > 21 && player.getPoints() > 21) || (dealer.getPoints() == 21 && player.getPoints() == 21)) {
            $("#messages").empty().append("It's a draw.");
        } else if (player.getPoints() == 21 || (dealer.getPoints() > 21 && player.getPoints() < 21) || (dealer.getPoints() < 21 && player.getPoints() < 21 && player.getPoints() > dealer.getPoints())) {
            wins++;
            $("#messages").empty().append("Player wins.");
        } else if (dealer.getPoints() == 21 || (player.getPoints() > 21 && dealer.getPoints() < 21) || (player.getPoints() < 21 && dealer.getPoints() < 21 && dealer.getPoints() > player.getPoints())) {
            $("#messages").empty().append("Dealer wins.");
        };
        $("#wins-button").empty().append(wins);
        return wins;
    };
};

function stay(deal, dealer, player, deck, stand, wins) {
    $("#stand-button").click(function() {
        // deal cards to the dealer until dealer points reach 17
        while (dealer.getPoints() < 17) {
            let dealerCard2 = deck.draw();
            dealer.addCard(dealerCard2);
            render(dealerCard2.getURL(), "#dealer-hand");
        };
        return true;
    });
}; 

function playBlackjack() {

    var deck = new Deck();
    deck.shuffle();

    var player = new Hand();
    var dealer = new Hand();

    var stand = false;
    var deal = false;
    var wins = 0;
    var bust = false;

    dealMe(deal, dealer, player, deck, stand, wins);
    deal = true;
    hitMe(deal, dealer, player, deck, stand, wins);
    stay(deal, dealer, player, deck, stand, wins);
    stand = true;
    wins = end(deal, dealer, player, deck, stand, wins);

    $("#restart-button").click(function() {
        clearTable();
        stand = false;
        deal = false;
        bet = 0;
        dealer = new Hand();
        player = new Hand();
    });
};



playBlackjack();