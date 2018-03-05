// POSITIVE NUMBERS

var a = [-3, -2, -1, 0, 1, 2, 3];
function positiveNumbers(myArray) {
    return myArray.filter(function(element) {
        return element > 0;
    });
};
console.log(positiveNumbers(a));

// var newArr = arr.filter(function(element) {
//     return element > 0;
// });
// console.log(newArr);


// EVEN NUMBERS

var b = [1, 2, 3, 4];
function evenNumbers(myArray) {
    return myArray.filter(function(element) {
        return element % 2 === 0;
    });
};
console.log(evenNumbers(b));

// var newArr1 = arr1.filter(function(element) {
//     return element % 2 === 0;
// });
// console.log(newArr1);


// SQUARE NUMBERS

var c = [1, 2, 3, 4];
function squareNumbers(myArray) {
    return myArray.map(function(element) {
        return element ** 2;
    });
};
console.log(squareNumbers(c));


// CITIES 1

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
];

function temperature(myArray) {
    return myArray.filter(function(element) {
        return element.temperature < 70.0;
    });
};
console.log(temperature(cities));


// CITIES 2

var cities2 = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
];

function temperature2(myArray) {
    let myCities = myArray.filter(function(element) {
        return element.temperature < 70.0;
    });
    return myCities.map(function(element) {
        return element.name;
    });
};
console.log(temperature2(cities2));


// GOOD JOB!

var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
];

function goodJob(myArray) {
    myArray.forEach(function(element) {
        console.log("Good Job, " + element + "!");
    });
};
goodJob(people);


// SORT AN ARRAY

var peopleToSort = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
];

function sortArray(myArray) {
    return myArray.sort();
};
sortArray(peopleToSort);
console.log(peopleToSort);


// SORT AN ARRAY 2

function sortByLength(myArray) {
    let tempArray = myArray.map(function(element) {
        return element.length + element;
    }).sort();
    return tempArray.map(function(element) {
        return element.slice(1);
    });
};
console.log(sortByLength(peopleToSort));


// SORT AN ARRAY 3

var myNumbers = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6]
];

function makeObj(myArray) {
    let myObj = [];
    let sum = myArray.reduce(function(a, b) {
        a + b;
        });
        myObj.push({
            "sum" : sum,
            "list" : element
        });
    });  
    myObj.sort(function(a, b) {
        return a.sum - b.sum
    });
    return myObj.map(function(element) {
        return element.list;
    });
};
console.log(makeObj(myNumbers))



// THREE TIMES

function call3Times(fun) {
    fun();
    fun();
    fun();
};

call3Times(function(e) {
    console.log("Hello, world!");
});


// N TIMES

function callNTimes(times, fun) {
    let n = 0
    while (n < times) {
        fun();
        n++;
    };
};

callNTimes(7, function(e) {
    console.log("Hello, world!");
});


// SUM AN ARRAY

sumArray = [1, 2, 3, 4, 5];
function getSum(myArray) {
    return myArray.reduce(function(a, b) {
        return a + b;
    });
};
console.log(getSum(sumArray));


// ACRONYM

var acronymArray = ['national', 'aeronautics', 'space', 'administration']
function makeAcronym(myArray) {
    let acronym = "";
    myArray.forEach(function(e) {
        acronym += e.slice(0, 1);
    });
    return acronym.toUpperCase();
};
console.log(makeAcronym(acronymArray));


// BONUS FOR EACH

var namesArray = [
    { name: 'Bob' },
    { name:'Alice' },
    { name:'Joe' }
];

namesArray.forEach(function(element) {
    console.log('Hello, ' + element.name + '!');
});

// BONUS MAP


// BONUS CAESAR CIPHER

function cipher(text) {
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    var result = '';
    text = text.toUpperCase();
    var textArray = text.split('');
    var newChar = '';

    let newArray = textArray.map(function(element) {
        console.log(alphabet.indexOf(element));
        if (alphabet.indexOf(element) > 13) {
            newChar = 
        }

        if (alphabet.indexOf(element) > 0) {
            if (alphabet.indexOf(element) + 13 > 26) {
                let newIndex = alphabet.indexOf(element) + 13 - 26;
                result.concat(alphabet[newIndex]);
            } else {
                let newIndex = alphabet.indexOf(element) + 13;
                result.concat(alphabet[newIndex]);
            };
        } else {
            result.concat(element);
        }
    });
    console.log(newArray);
    return result;
};

console.log(cipher("Hey now girl"));