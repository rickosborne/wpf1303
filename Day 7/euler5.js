console.log("euler5.js");

// 2520 is the smallest number that can be divided by each of
// the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible
// by all of the numbers from 1 to 20?

// 1 2 3 4 5 6 7 8 9 10
// 2520 = 252 * 10
// 252 = 28 * 9
// 28 = 4 * 7
// 4 = 2 * 2

var targetNumber = 2520;
var bigNumber = 10;
var factors = {};
for (var divisor = 2; divisor <= bigNumber; divisor++) {
    if ((targetNumber % divisor) == 0) {
        factors[divisor] = true;
    }
}
console.log(factors);


var factors = {};
for (var i = 2; i <= bigNumber; i++) {
    for (var j = 2; j <= i; j++) {
        if (i % j == 0) {
            factors[j] = true;
        }
    }
}




// we're going to start at 1, and keep looking for numbers
//var foundIt = false;
//var number = 1;
//var target = 20;
//while (!foundIt) { // keep looking until we find the right number
//    //   loop from 1 to 10 (or 20)
//    var gotRemainder = false; // assume no remainders
//    for (var i = 1; (i <= target) && !gotRemainder; i++) { // try each number
//    //      check for remainders
//        gotRemainder = ((number % i) !== 0); // is it divisible by that number?
//    }
//    //   if no remainders EVAR
//    if (!gotRemainder) { // if we never got any remainders
//    //      this is the number we want
//        foundIt = true; // we found it!
//    } else { // try the next number
//        number++;
//    }
//}
//console.log(number);


















