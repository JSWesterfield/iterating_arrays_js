(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    var names = ['Jake', 'Mike', 'Paul', 'Sean', 'Alexa'];

    console.log("There are " + names.length + " names in the names array.");

    console.log("for loop:");

    // TODO: Create log statements that will print each of the names array elements using a for loop.
    for (var i = 0; i < names.length; i++) {
        console.log("Name in index " + i + " is " + names[i]);
    }

    console.log("ForEach loop:");

    names.forEach(function (element, index, array) {
    	console.log("Name in index " + index + " is " + element);
    });

//version 1.3, created a loop through the array instead of going through the index of the array individually in 1.2, but now I have added an additional forEach loop within our script.