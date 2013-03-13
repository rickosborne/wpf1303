console.log("We are in loops.js");

var number = Math.round(10 * Math.random());
console.log("Number: " + number);

var guess;
var isCorrect = false;

while ( !isCorrect ) {
    guess = parseInt(prompt("What is your guess?"));
    console.log("Your guess: " + guess);
    isCorrect = (guess == number);
    if (!isCorrect) {
        alert("Wrong!");
    }
}

