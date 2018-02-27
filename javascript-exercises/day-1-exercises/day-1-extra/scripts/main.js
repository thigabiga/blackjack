function madlib (name, subject) {
    let output = name + "'s favorite subject in school is " + subject + ".";
    return output;
}

function tipAmount (bill, level) {
    let tips = {
        "good" : 0.20,
        "fair" : 0.15,
        "bad" : 0.10,
    };
    let tip = bill * tips[level]
    return tip;
}

function totalAmount (bill, level) {
    let tip = tipAmount(bill, level);
    let total = bill + tip;
    return total;
}

function printNumbers (start, end) {
    for (let count=start; count <= end; count++) {
        console.log(count);
    };
}

function printNumbers2 (start, end) {
    let count = start;
    while (count <= end) {
        console.log(count);
        count++;
    };
}

function printSquare (size) {
    let count = 0;
    while (count < size) {
        let line = "*".repeat(size);
        console.log(line);
        count++;
    };
}

function printBox (l, w) {
    console.log("*".repeat(w));
    let count = 0;
    while (count < (l - 2)) {
        let spaces = w - 2
        let line = "*" + " ".repeat(spaces) + "*";
        console.log(line);
        count++;
    };
    console.log("*".repeat(w));
}

function printBanner (text) {
    let line = "*".repeat(text.length + 4);
    console.log(line);
    console.log("*", text, "*");
    console.log(line);
}


function leetspeak (text) {
    let code = {
        "a" : "4",
        "e" : "3",
        "g" : "6",
        "i" : "1",
        "o" : "0",
        "s" : "5",
        "t" : "7"
    };
    let codeKeys = Object.keys(code)
    codeKeys.forEach(function(item) {
        while (text.includes(item)) {
            text = text.replace(item, code[item]);
        }
    });
    return text;
}

function longLongVowels (text) {
    let textArray = text.split("");
    let vowelString = "aeiouAEIOU"
    let newString = "";
    textArray.forEach(function(item) {
        if (vowelString.includes(item)) {
            newString += item.repeat(5);
        }
        else {
            newString += item;
        }
    });
    return newString;
}

function positiveNumbers (myArray) {
    let positives = []
    myArray.forEach(function(item) {
        if (item > 0) {
        positives.push(item)
        }
    });
    return positives;
}

console.log("Exercise 1")
console.log(madlib("Erin", "Math"))
console.log("- - - - - - -")
console.log("Exercise 2")
console.log("Bill: $14.95, Service: good")
console.log("Tip: $", tipAmount(14.95, "good"))
console.log("- - - - - - -")
console.log("Exercise 3")
console.log("Bill: $14.95, Service: good")
console.log("Total: $", totalAmount(14.95, "good"))
console.log("- - - - - - -")
console.log("Exercise 4")
console.log("Printing Numbers 1 through 20 with a For Loop:")
printNumbers(1, 20)
console.log("- - - - - - -")
console.log("Exercise 5")
console.log("Printing Numbers 1 through 20 with a While Loop:")
printNumbers(1, 20)
console.log("- - - - - - -")
console.log("Exercise 6")
printSquare(6)
console.log("- - - - - - -")
console.log("Exercise 7")
printBox(10, 5)
console.log("- - - - - - -")
console.log("Exercise 8")
printBanner("Welcome to DigitalCrafts!")
console.log("- - - - - - -")
console.log("Exercise 9")
console.log(leetspeak("convert this string to leetspeak"))
console.log("- - - - - - -")
console.log("Exercise 10")
console.log(longLongVowels("old mcdonald had a farm"))
console.log("- - - - - - -")
console.log("Exercise 11")
console.log(positiveNumbers([1, -1, -8, 9, -10, 30]))