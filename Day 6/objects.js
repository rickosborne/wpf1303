console.log("Running objects.js");

var numberVariable = 1234.567;
var stringVariable = "I am a string";
var booleanVariable = true;
var arrayVariable = [ 1, 2, "three" ];
var objectVariable = { // key-value storage
    // key    : value
    "name"    : "Rick Osborne",
    "course"  : "Web Programming Fundamentals",
    "day"     : 6,
    "awesome" : true,
    "3.1415"  : "pi",
    "a b c"   : [ "a", "b", "c" ]
};
var me = {
    "name"    : "Scott Wainman",
    "age"     : 99,
    "music"   : "Justin Bieber",
    "clothes" : [
            "grey shirt",
            "blue jeans",
            "black cheapo Target shoes",
            "commando",
            {
                "left sock": "blue",
                "right sock": "white"
            }
        ],
    "scruffy" : true,
    "nerf herder": false,
    "food" : "Chinese",
    "courses" : {
        "WPF" : "Web Programming Fundamentals",
        "PWA1" : "Programming for Web Applications I",
        "PWA2" : "Programming for Web Applications II",
        "ATW" : "Advanced Topics in Web Programming"
    }
};

// in : checks if a string is a key in an object
var lookingFor = "food";
if (lookingFor in me) {
    console.log("My age is: " + me[lookingFor]);
} else {
    console.log("I am immortal.");
}

me["awesome"] = true; // add an item to an object using array bracket syntax
console.log("Awesome: " + me["awesome"]);

delete me["awesome"]; // remove item from an object using delete
console.log(me);

// loop over objects with for..in
for (var keyName in me) {
    var value = me[keyName];
    console.log(keyName + " = " + value);
} // for in

var thingCount = me.length;
console.log("Count: " + thingCount); // object.length doesn't work