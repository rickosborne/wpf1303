console.log("main.js");

var names = [ "Vid", "Scott", "Joe", "Eric", "Lee" ]; // array
console.log(names);

var firstGuy = names[0];
console.log(firstGuy);

var guyCount = names.length; // always one more than the last element
console.log("There are " + guyCount + " guys in the back row.");

var lastGuy = names[ names.length - 1 ]; // get the last element
console.log("The last guy is " + lastGuy);

var middleNumber = Math.floor(names.length / 2); // floor because arrays only
var middleGuy = names[ middleNumber ]; // understand whole numbers
console.log(middleGuy);
