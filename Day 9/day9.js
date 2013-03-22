console.log("day9.js");

// write a function: compareTwo
// * take 2 numbers, a and b
var compareTwo = function (a, b) {
// return:
//   1 if a > b
    if (a > b) { return 1; }
//   -1 if a < b
    if (a < b) { return -1; }
//   0 if a equals b
    return 0;
};
var compareTwoReverse = function(a, b) {
    return compareTwo(b, a);
};
//console.log("compare: ", compareTwo(4, 6));
//console.log("compare: ", compareTwo(6, 4));
//console.log("compare: ", compareTwo(4, 4));
var prices = [ 2.99, 2.49, 3.09, 9.99, 0.99  ];
console.log("prices: ", prices);
var sortedPrices = prices.sort(compareTwoReverse);
console.log("sorted prices: ", sortedPrices);

var sortGenerator = function (keyName) {
    console.log("Generating sort for " + keyName);
    return function (objectA, objectB) {
        var valueA = objectA[keyName];
        var valueB = objectB[keyName];
        console.log("Comparing " + valueA + " to " + valueB);
        if (valueA > valueB) { return 1; }
        if (valueA < valueB) { return -1; }
        return 0;
    };
};
var groceries = [
    { "name": "eggs",   "price": 2.50, "aisle": 3  },
    { "name": "milk",   "price": 4.00, "aisle": 1  },
    { "name": "butter", "price": 0.99, "aisle": 12  },
    { "name": "gumball", "price": 0.25, "aisle": 99  },
    { "name": "cookie", "price": 0.75, "aisle": 99  },
    { "name": "fireball", "price": 0.25, "aisle": 99  },
    { "name": "ringpop", "price": 0.25, "aisle": 99  }
];
console.log(groceries);
//console.log("sorted groceries by aisle: ", groceries.sort(sortGenerator("aisle")));
//console.log("sorted groceries by name: ", groceries.sort(sortGenerator("name")));
//console.log("sorted groceries by price: ", groceries.sort(sortGenerator("price")));

var cheapGroceries = function (groceries) {
    // return an array that has only the groceries less than $1
    var cheap = [];
    // for each item in the groceries ...
    groceries.forEach(function(item) {
        if (item["price"] < 1) {
            cheap.push(item);
        } // if
    }); // forEach
    return cheap;
};
console.log("cheap groceries: ", cheapGroceries(groceries));
