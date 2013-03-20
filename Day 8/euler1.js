console.log("euler1.js");

// If we list all the natural numbers below 10
// that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

var isMultipleOf = function (largerNumber, smallerNumber) {
    var isIt = (largerNumber % smallerNumber) == 0;
    return isIt;
};

var euler1 = function(targetNumber) {
    // parameters are the things we need to do the work
    var answer = 0;
    // Loop from 1 to 1000
    for (var currentNumber = 1; currentNumber < targetNumber; currentNumber++) {
        //    is it a multiple of 3 or 5?
        if (isMultipleOf(currentNumber, 3) || isMultipleOf(currentNumber, 5)) {
            //    YES: add it up
            answer += currentNumber;
        } // if
    } // for currentNumber
    return answer;
}; // function euler1

var answerFor1000 = euler1(1000);
console.log("The answer for 1000 is: ", answerFor1000);