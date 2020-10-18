console.log("Inside Strings Information");

// Add Numbers
function addNumber(){
    const demo = document.getElementById("number-demo").innerHTML;
    const values = demo.split(" + ");
    document.getElementById("changed-text").innerHTML = Number(values[0]) + Number(values[1]);
}


// --------------------------------------
// Grab Index
function getIndex(){
    const demo = document.getElementById("demo-text").innerHTML.charAt(5);
    document.getElementById("changed-text").innerHTML = demo;
}


// --------------------------------------
// Add strings
function addExtra(){
    const demo = document.getElementById("demo-text").innerHTML;
    const add = document.getElementById("add-demo").innerHTML
    document.getElementById("changed-text").innerHTML = demo + " " + add;
}


// --------------------------------------
// Replace
function replace(){
    const demo = document.getElementById("demo-text").innerHTML;
    const temp = demo.replace("text", "TEXT");
    document.getElementById("changed-text").innerHTML = temp;
}


// --------------------------------------


// String