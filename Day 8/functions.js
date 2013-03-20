console.log("functions.js");

// this code finds the factors (divisors) of a number
var getFactors = function (targetNumber) { // parameter
    var factors = [];
    for (var currentNumber = 2; currentNumber < targetNumber; currentNumber++) {
        if ((targetNumber % currentNumber) == 0) {
            factors.push(currentNumber);
        } // if no remainder
    } // for currentNumber
    return factors; // return gives a value back where the function was called
}; // function getFactors
var isPrime = function(someNumber) {
    var allFactors = getFactors(someNumber); // functions can CALL other functions
    if (allFactors.length == 0) {
        return true;
    } else {
        return false;
    }
}; // function isPrime

//console.log("The number 13 is prime: ", isPrime(13));
//console.log("The number 8 is prime: ", isPrime(8));
//
//
//var factorsOf13 = getFactors(13);
//console.log("The factors of " + 13 + " are:", factorsOf13);
//
//var factorsOf1234567 = getFactors(1234567);
//console.log("The factors of " + 1234567 + " are:", factorsOf1234567);
//var factorsOf2520 = getFactors(2520);
//console.log("The factors of " + 2520 + " are:", factorsOf2520);


// Basic building blocks of functions
// 1. Functions are just variables
// 2. Function have parameters that accept arguments
//    a. Parameters are variables that the function must have to work
//    b. Arguments are the values given to functions that become the parameters
// 3. Functions have a block of code that runs when they are called
//    (which can be as simple or complex as you need it to be)
// 4. Functions MAY return a value that takes the place of where the function was called
//    a. We call functions with parentheses: ()
// 5. Functions provide ENCAPSULATION, which means:
//    the code outside doesn't care about the code inside
//    (we can change the inside without worrying if the outside will break)
//    a. Variables made INSIDE of functions are not viewable from the outside
//    b. Variables OUTSIDE are visible from the inside // SCOPE
// 6. Functions should do ONE thing, and do it well
//    a. ONE thing is easier to debug when there are problems
//    b. ONE thing is easier to optimize if it needs to go faster, be better, etc
//    c. ONE thing is easier to reuse in other places
//    d. Functions _should_ take up one screen and no more (rule of thumb)

var showStuffInConsole = false;
var d = function(message) {
    if (showStuffInConsole == true) {
        console.log(message);
    }
}; // debug function

d("I like cake.");
d("The cake is a lie.");
d("Fine, then I like pie.");
