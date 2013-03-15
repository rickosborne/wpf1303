console.log("Running euler.js");

// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

// Find the factors
var biggestPrime = 1;
var bigNumber = 600851475143;
var currentNumber = 1;
while (currentNumber < Math.sqrt(bigNumber)) {
    // Factors are numbers that go into a larger number evenly
    if ((bigNumber % currentNumber) == 0) {
        console.log("Factor: " + currentNumber);
        // Figure out which factors are prime
        var isPrime = true;
        for (var divisor = 2 ; (divisor < Math.sqrt(currentNumber)) && isPrime; divisor++ ) {
            if ((currentNumber % divisor) == 0) {
                isPrime = false;
            } // if is a factor
        } // for divisor
        if (isPrime) {
            biggestPrime = currentNumber;
        } // if isPrime
    } // if is a factor
    currentNumber += 1;
} // while
console.log("The largest prime factor of " + bigNumber + " is " + biggestPrime);
