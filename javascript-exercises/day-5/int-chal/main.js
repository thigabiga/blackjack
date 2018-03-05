// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
// Answer: 232792560
function alg1() {
    let flag = "";
    let number = 2520;
    let numArray = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11]
    while (flag != true) {
        flag = numArray.every(function(e) {
            return number % e == 0;
        });
        if (flag != true) {
            number++;
        } else {
            return number;
        };  
    };
};

// Find the largest palindrome made from the product of two 3-digit numbers.
// Answer: 60069
function pallindrome() {
    var mynum = 0;
    var palstr = "";
    var mysum = 0;
    var myArray = [];
    var checksum = 0;
    for (i = 100; i < 1000; i++) {
        for (j = 100; j < 1000; j++) {
            palstr = "";
            mysum = i * j;
            myArray = mysum.toString().split("").reverse();
            myArray.forEach(function(e) {
                palstr = palstr.concat(e);
            });
            checksum = Number(palstr);
            if (mysum == checksum && checksum > mynum) {
                mynum = checksum;
            }
        };
    };
    return mynum;
};

// Write a program in JavaScript that prints out all lines of 99 Bottles of Beer all the way down to zero.
// Example: “99 Bottles of beer, take one down, pass it around, 98 bottles of beer on the wall”
// However, for numbers that are multiples of 7, replace beer with Miller
// And for numbers that are multiples of 5, replace beer with Lite beer
// Lastly, for numbers that are multiples of 7 and 5, replace beer with Miller Lite
// You are welcome to take creative liberty with the beer brands, or replace it with soft drinks.

function beer() {
    for (i = 99; i > 0; i--) {
        let beer = "beer";
        let a = i - 1;
        if (i % 7 == 0 && i & 5 == 0) {
            beer = "Miller Lite";
        } else if (i % 7 == 0) {
            beer = "Bud Lite";
        } else if (i % 5 == 0) {
            beer = "Lone Star";
        } else {
            beer = "Red Bull";
        };

        if (i == 1) {
            a = "no more";
        };

        console.log("%s bottles of %s, take one down, pass it around, %s bottles of %s on the wall", i, beer, a, beer);
    };
};

// Write a second version of your program that does the same thing, but without using any of the following keywords:
// - if
// - else

function five(e) {
    return (e % 5 == 0).toString();
}

function seven(e) {
    return (e % 7 == 0).toString();
}

function beerme() {
    let keyDict = {"truetrue" : "Miller Lite", "truefalse" : "Bud Lite", "falsetrue" : "Lone Star", "falsefalse" : "Red Bull"};
    for (i = 99; i > 0; i--) {
        let keyVar = five(i).concat(seven(i));
        console.log("%s bottles of %s, take one down, pass it around, %s bottles of %s on the wall", i, keyDict[keyVar], i - 1, keyDict[keyVar]);
    };
};