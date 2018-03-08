// returns a random number between a max and min
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
};

// retreive and remove a random card object from the deck array and return it
function dealCard(deck) {
    let dec = Math.random();
    let index = Math.floor(dec )
    let index = getRandomNumber(0, deck.length);
    let myCard = deck.splice(index, 1);
    console.log(index);
    console.log(deck[index]);
    return myCard[0];
};

// find the name of a card image and return the filepath
function findImage(card) {
    return "images/".concat(card[0].point.toString(), card[0].suit.slice(0, 1).toUpperCase(), ".jpg")
};

// calculate the points in a hand and return it
function calcPoints(hand) {
    let sum = 0;
    hand.forEach(function (e) {
        sum += e.point;
    });
    return sum;
};

function showCard(player = "player", card, hand) {
    let cardIMG = document.createElement("IMG");
    cardIMG.setAttribute("src", findImage(card));
    cardIMG.setAttribute("class", "card");
    if (player == "dealer") {
        document.getElementById("dealer-hand").appendChild(cardIMG);
    } else {
        document.getElementById("player-hand").appendChild(cardIMG);
    };
};

// deal and display a card to the player
// function dealPlayer(hand, deck) {
//     let container = document.getElementById("player-hand");
//     let cardIMG = document.createElement("IMG");
//     let card = dealCard(deck);
//     hand.push(card);
//     cardIMG.setAttribute("src", findImage(card));
//     cardIMG.setAttribute("class", "player-card");
//     container.appendChild(cardIMG);
// };

function replaceBack(hand) {
    let replacementCard = hand[0];
    let cardIMG = document.createElement("IMG");
    cardIMG.setAttribute("src", findImage(replacementCard));
    cardIMG.setAttribute("class", "card");
    let container = document.getElementById("dealer-hand");
    let cardBack = document.getElementById("dealer-temp-card")
    document.getElementById("dealer-temp-card");
    container.replaceChild(replacementCard,cardBack);
};

// deal and display the back of a card to the dealer
function dealBack(hand) {
    let container = document.getElementById("dealer-hand");
    let cardIMG = document.createElement("IMG");
    cardIMG.setAttribute("src", "images/blue_back.jpg");
    cardIMG.setAttribute("id", "dealer-temp-card");
    container.appendChild(cardIMG);
};

// show the dealer hand
// function showCard(card, hand) {
//     let container = document.getElementById("dealer-hand");
//     let children = document.getElementsByClassName("dealer-temp-card");
//     let cardIMG = document.createElement("IMG");
//     cardIMG.setAttribute("src", findImage(card));
//     cardIMG.setAttribute("class", "dealer-card");
//     console.log(cardIMG);
//     console.log(children[0]);
//     container.replaceChild(cardIMG, children[0]);
// };

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

    var deck = [
        { point: 1, suit: "diamonds" }, { point: 1, suit: "hearts" }, { point: 1, suit: "spades" }, { point: 1, suit: "clovers" },
        { point: 2, suit: "diamonds" }, { point: 2, suit: "hearts" }, { point: 2, suit: "spades" }, { point: 2, suit: "clovers" },
        { point: 3, suit: "diamonds" }, { point: 3, suit: "hearts" }, { point: 3, suit: "spades" }, { point: 3, suit: "clovers" },
        { point: 4, suit: "diamonds" }, { point: 4, suit: "hearts" }, { point: 4, suit: "spades" }, { point: 4, suit: "clovers" },
        { point: 5, suit: "diamonds" }, { point: 5, suit: "hearts" }, { point: 5, suit: "spades" }, { point: 5, suit: "clovers" },
        { point: 6, suit: "diamonds" }, { point: 6, suit: "hearts" }, { point: 6, suit: "spades" }, { point: 6, suit: "clovers" },
        { point: 7, suit: "diamonds" }, { point: 7, suit: "hearts" }, { point: 7, suit: "spades" }, { point: 7, suit: "clovers" },
        { point: 8, suit: "diamonds" }, { point: 8, suit: "hearts" }, { point: 8, suit: "spades" }, { point: 8, suit: "clovers" },
        { point: 9, suit: "diamonds" }, { point: 9, suit: "hearts" }, { point: 9, suit: "spades" }, { point: 9, suit: "clovers" },
        { point: 10, suit: "diamonds" }, { point: 10, suit: "hearts" }, { point: 10, suit: "spades" }, { point: 10, suit: "clovers" },
        { point: 11, suit: "diamonds" }, { point: 11, suit: "hearts" }, { point: 11, suit: "spades" }, { point: 11, suit: "clovers" },
        { point: 12, suit: "diamonds" }, { point: 12, suit: "hearts" }, { point: 12, suit: "spades" }, { point: 12, suit: "clovers" },
        { point: 13, suit: "diamonds" }, { point: 13, suit: "hearts" }, { point: 13, suit: "spades" }, { point: 13, suit: "clovers" },
    ];

    var playerHand = [];
    var dealerHand = [];

    var stand = false;
    var deal = false;

    document.getElementById("deal-button").addEventListener("click", function () {
        // deal two cards each to the player and dealer if haven't already
        if (deal == false) {
            for (i = 0; i < 2; i++) {
                let playerCard = dealCard(deck);
                playerHand.push(playerCard);
                showCard(playerCard, playerHand);
                // dealPlayer(playerHand, deck);
            };

            let dealerCard1 = dealCard(deck);
            dealerHand.push(dealerCard1);
            dealBack(dealerHand);

            let dealerCard2 = dealCard(deck);
            dealerHand.push(dealerCard2);
            showCard("dealer", dealerCard2, dealerHand);
            // dealDealer(dealerHand, deck);

            document.getElementById("player-points").innerHTML = calcPoints(playerHand);
            deal = true;
        };
    });

    document.getElementById("hit-button").addEventListener("click", function () {
        // deal one card to the player on "hit"
        if (deal == true && calcPoints(playerHand) < 21 && stand == false) {
            let playerCard = dealCard(deck);
            playerHand.push(playerCard);
            showCard(playerCard, playerHand);
            document.getElementById("player-points").innerHTML = calcPoints(playerHand);
        };
    });

    document.getElementById("stand-button").addEventListener("click", function () {
        // deal cards to the dealer until dealer points reach 17
        while (calcPoints(dealerHand) < 17) {
            let dealerCard = dealCard(deck);
            dealerHand.push(dealerCard);
            showCard(dealerCard, dealerHand);
        };

        setTimeout(dealerHand.forEach(function(e) {
            showCard(e, dealerHand);
        }), 10000);

        document.getElementById("player-points").innerHTML = calcPoints(playerHand);
        document.getElementById("dealer-points").innerHTML = calcPoints(dealerHand);

        if ((calcPoints(dealerHand) > 21 && calcPoints(playerHand) > 21) || (calcPoints(dealerHand) == 21 && calcPoints(playerHand) == 21)) {
            document.getElementById("messages").innerHTML = "It's a draw.";
        } else if (calcPoints(playerHand) == 21 || (calcPoints(dealerHand) > 21 && calcPoints(playerHand) < 21) || (calcPoints(dealerHand) < 21 && calcPoints(playerHand) < 21 && calcPoints(playerHand) > calcPoints(dealerHand))) {
            document.getElementById("messages").innerHTML = "Player wins.";
        } else {
            document.getElementById("messages").innerHTML = "Dealer wins.";
        };
        stand = true;

    });

    document.getElementById("restart-button").addEventListener("click", function() {
        clearTable();
        stand = false;
        deal = false;
        dealerHand = [];
        playerHand = [];
    });
};



playBlackjack();