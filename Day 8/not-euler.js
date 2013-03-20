console.log("not-euler.js");

var sayHello = function() { // no parameters
    console.log("Hellooooooo!");
    // no return value
}; // function sayHello

var sayHelloTo = function (personName) { // one parameter
    console.log("Hello, " + personName);
}; // function sayHelloTo

var sayHelloInAnotherLanguageTo = function (personName, language) {
    if (language == undefined) {
        console.log("You did not give me a language!");
        return; // return early
    }
    if (personName == undefined) {
        console.log("You did not give me a person name!");
        return;
    }
    if (language == "English") {
        sayHelloTo(personName);
    } else if(language == "Spanish") {
        console.log("Hola, " + personName);
    } else {
        console.log("I don't know that language: " + language);
    }
}; // sayHelloInAnotherLanguageTo

var sayHelloInAnotherLanguageTo2 = function (personName, language) {
    var greetings = {
        "English"  : "Hello, ",
        "Spanish"  : "Hola, ",
        "Russian"  : "Здравствуйте, ",
        "Icelandic": "Góðan daginn, ",
        "Chinese"  : "你好, ",
        "Japanese" : "おはよう, ",
        "Hawaiian" : "Aloha, "
    };
    var greeting = "I don't know that language: " + language;
    if (language in greetings) {
        greeting = greetings[language];
        greeting += personName;
    }
    return greeting;
};

//sayHello(); // call the function
//sayHelloTo("Carlos");
//sayHelloTo("Arturo");
//console.log(sayHelloInAnotherLanguageTo2());
//console.log(sayHelloInAnotherLanguageTo2("Scott", "English"));
//console.log(sayHelloInAnotherLanguageTo2("Eric", "Spanish"));
//console.log(sayHelloInAnotherLanguageTo2("Vid", "Pig-Latin"));
//var greetRanma = sayHelloInAnotherLanguageTo2("Ranma", "Japanese");
//console.log(greetRanma);
//console.log(sayHelloInAnotherLanguageTo2("Zhang Ziyi", "Chinese"));
//console.log(sayHelloInAnotherLanguageTo2("Lyndon", "Hawaiian"));
//console.log(sayHelloInAnotherLanguageTo2("Björk", "Icelandic"));

var getGroceries = function (money, list) {
    var answer = {
        "change": 0,
        "groceries": [],
        "gotEverything": true
    };
    var store = {
        "butter": 0.99,
        "eggs": 2.99,
        "milk": 3.99
    };
    var totalCost = 0;
    for (var item in list) {
        var howMany = list[item];
        console.log("Looking for " + howMany + " " + item);
        if (item in store) {
            var price = store[item];
            console.log("The price of " + item + " is $" + price);
            var howMuch = price * howMany;
            totalCost += howMuch;
            console.log("My total cost is now $" + totalCost);
            answer["groceries"].push(item);
        } else {
            console.log("I can't find the " + item);
            answer["gotEverything"] = false;
        }
    } // for
    answer["change"] = money - totalCost;
    return answer;
}; // function getGroceries
var groceryList = {
    "eggs": 1,
    "milk": 2,
    "flour": 1,
    "butter": 4,
    "sugar": 3
};
var response = getGroceries(25, groceryList);
console.log(response);
