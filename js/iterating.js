(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    var names = ['Jake', 'Mike', 'Paul', 'Sean', 'Alexa'];

    // TODO: Create log statements that will print each of the names array elements using a for loop.
    for (var i = 0; i < names.length; i++) {
        console.log("Name in index " + i + " is " + names[i]);
    }

})();

//version 1.2, created a loop through the array instead of going through the index of the array individually.//