console.log("These are my notes");

var phasers = parseInt(prompt("How many phasers?"));
var setting = "stun";

console.log("phasers:" + phasers);
console.log("setting:" + setting);

var atLeast3Phasers = (phasers > 3);
var setToKill = (setting == "kill");

if (atLeast3Phasers || setToKill) {
    console.log("It's dead, Jim.");
} else if (setting == "stun") {
    console.log("That won't be enough");
} else {
    console.log("Run faster than the red shirt!");
}
