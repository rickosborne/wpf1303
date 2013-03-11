console.log("These are my notes");

var phasers = parseInt(prompt("How many phasers?"));
var setting = "stun";

if ((phasers > 3) || (setting == "kill")) {
    console.log("It's dead, Jim.");
} else {
    console.log("Run faster than the red shirt!");
}
