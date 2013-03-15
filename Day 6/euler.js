console.log("Running euler.js");

// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

// Find the factors
var factors = []; // declaring the array
var bigNumber = 600851475143;
console.log(bigNumber);
var currentNumber = 1;
while (currentNumber < Math.sqrt(bigNumber)) {
    // Factors are numbers that go into a larger number evenly
    if ((bigNumber % currentNumber) == 0) {
        console.log("Factor: " + currentNumber);
        factors.push(currentNumber);
    }
    currentNumber += 1;
}
console.log(factors);

// Figure out which factors are prime
// Prime numbers are only divisible by 1 and that number
var primeFactors = [];
for (var arrayIndex = 0 ; arrayIndex < factors.length ; arrayIndex++ ) {
    // For each item in my array ...
    var factor = factors[arrayIndex];
    var isPrime = true;
    for (var divisor = 2 ; (divisor < Math.sqrt(factor)) && isPrime; divisor++ ) {
        if ((factor % divisor) == 0) {
            isPrime = false;
        } // if is a factor
    } // for divisor
    if (isPrime) {
        primeFactors.push(factor);
    } // if isPrime
} // for arrayIndex
console.log(primeFactors);

// Find the largest prime
var biggestPrime = primeFactors.pop();
console.log("The largest prime factor of " + bigNumber + " is " + biggestPrime);
