console.log("Once upon a time a boy that like his grandma cakes");
var numberCakes = 1;
console.log("One day she cooked" + numberCakes + "for a birthday party");
console.log("The boy took without permission one of the cakes");
console.log("Her grandma got mad with him");
console.log('So she told him \"If you want to have a cake you\'ve to earn it\"');
console.log("He had to wash the dishes to get a cake, and for every 5 plates he washed he got a cake and a glass of milk");
var numberOfPlates = 25;
var valueOfCakes = 5;
var totalAmount = numberOfPlates / valueOfCakes;
var ownACar = false;
console.log("At the end he got" + totalAmount + "cakes");
console.log("How many plates did he washed?");

if (totalAmount > 3) // conditional
{
    console.log("You are such a fat boy!");
    if (ownACar) { // nested conditional
        console.log("Go to the gym!");
    } else {
        console.log("You should buy a bike!");
    }
}
else
{
    console.log("Good boy!");
}