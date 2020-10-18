console.log("Testing Function Information");

// Function declaration
function chosenName( parameter ){
    // Enter Code here
}


// Anonymous Function
const func = function ( paramater ){
    // Enter code here
}
func();


// Callback function
function firstFunction( number, parameter ){
    // Enter code here
    parameter(number)
}
function secondFunction( number ) {
    // something with the number
}
firstFunction(2, secondFunction);