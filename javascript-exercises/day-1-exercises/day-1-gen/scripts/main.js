function lvl1exercise1() {
    // Declare a variable without instantiating it and return it!
    let a = 17;
    return a;
}

function lvl1exercise2() {
	// Declare and instantiate a number and return it
    var b = "this string";
    return b;
}

function lvl1exercise3() {
	// Declare and instantiate a floating point number that isn't a whole number and return it
    var c = 20.3;
    return c;
}

function lvl1exercise4() {
	// Declare and instantiate a string "Hello World!" and return it
    var d = "Hello World!";
    return d;
}

function lvl1exercise5() {
	// Declare and instantiate an array containing the string "Hello World!" and the number 4 and return it
    var e = ["Hello World!", 4]
    return e;
}

function lvl1exercise6() {
	// Declare and instantiate an object containing the key-value pairs key1 -> "Hello World!" and key2 -> 4, and return it
    var f = {
        key1 : "Hello World!",
        key2: 4,
    }
    return f;
}

function lvl1exercise7() {
	// Declare and instantiate a boolean value 'false' and return it
    var g = false;
    return g;
}

function lvl2exercise1(num1, num2) {
    // Return the sum of num1 and num2
    let sum = num1 + num2;
    return sum;
}

function lvl2exercise2(num1, num2) {
	// Return the difference of num1 and num2
    let sum = num2 - num1;
    return sum;
}

function lvl2exercise3(num1, num2) {
	// Return the multiplication of num1 and num 2
    let sum = num2 * num1;
    return sum;
}

function lvl2exercise4(num1, num2) {
	// Return the division of num1 and num2
    let sum = num2 / num1;
    return sum;
}

function lvl2exercise5(num1) {
	// Add 2 to num1 using += and return it
	return num1 += 2;
}

function lvl3exercise1() {
	// Create a "hello" and a "world", return the concatenation of the two
    let newStr = "hello" + "world";
    return newStr;
}

function lvl3exercise2() {
	// Create a "hello" and a 12, return the concatenation of the two
    let a = "hello";
    let b = 12;
    return a + b;
}

function lvl3exercise3() {
	// Create a variable that equals 12 and convert it to a string with concatenation. Return it.

}

function lvl3exercise4() {
	// Create a "hello world!" string. Return the length of the string

}

function lvl3exercise5() {
	// Create a "hello world!" string. Return the index of the word "world".
	
}

function lvl4exercise1() {
	// Return the boolean value "true"
	
}

function lvl4exercise2() {
	// Return the boolean value "false"

}

function lvl4exercise3(bool) {
	// Return the opposite of the input boolean value

}

function lvl4exercise4(bool1, bool2) {
	// Return the logical "and" of the input boolean values

}

function lvl4exercise5(bool1, bool2) {
	// Return the logical "or" of the input boolean values
	
}

function lvl4exercise6(bool1, bool2) {
	// Return the logical "equivalence" of the input boolean values
	
}

function lvl5exercise1() {
	// Push the string "hello" into the array and return it.
	var array = [1, "adam"];
	
}

function lvl5exercise2() {
	// Remove the last element from the array and return it
	var array = [1, "adam"];

}

function lvl5exercise3() {
	// Return the length of the array
	var array = [1, "adam"];

}

function lvl5exercise4() {
	// Return the index of "adam" in the array
	var array = [1, "adam"];

}

function lvl6exercise1(num) {
	// Return 'hello' if num is 1, 'world' if num is 2, otherwise return'bye'
	
}

function lvl6exercise2() {
	// Push 10 "hello" strings into the array using a for loop, then return it
	var array = [];

}

function lvl6exercise3() {
	// Empty this array using a while loop and return it
	var array = ["hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello"];

}

// Write a function that takes a number as an input. 
// Have it create an empty array and then push a string into the array as many 
// times as the input number
//
// Name the function "finalFunction"