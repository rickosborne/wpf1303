console.log("Project Euler #4");

// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 * 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

var largestPalindrome = 0;
var loopCounter = 0;
// Loop over all numbers
for (var firstNumber = 1 ; firstNumber <= 999 ; firstNumber++ ) {
    // Loop over all numbers ... again!
    for (var secondNumber = 1 ; secondNumber <= 999 ; secondNumber++ ) {
        // Multiply them together
        var result = firstNumber * secondNumber;
        // convert to a string
        result += "";
        var isPalindrome = true;
        // See if the result is a palindrome
        for (var stringIndex = 0; stringIndex < result.length / 2; stringIndex++ ) {
            var firstCharacter = result.charAt(stringIndex);
            var lastCharacter = result.charAt(result.length - stringIndex - 1);
            if (firstCharacter !== lastCharacter) {
                isPalindrome = false;
            } // if is palindrome
            loopCounter++;
        } // for stringIndex
        // If it is, is it the biggest we've seen?
        if (isPalindrome &&  (Math.floor(result) > Math.floor(largestPalindrome))) {
            largestPalindrome = result;
        } // if palindrome
    } // for secondNumber
} // for firstNumber
console.log("The largest palindrome is: " + largestPalindrome);
console.log("We looped " + loopCounter + " times.");
