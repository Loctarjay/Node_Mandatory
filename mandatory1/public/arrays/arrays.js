console.log("Testing Array Information");

const array = ["Jannick", "Lars", 12, "Carsten", 5, "Søren"];
document.getElementById("demo-text").innerHTML = array;

// pop array - remove last element
function arrPop(){
    array.pop();
    document.getElementById("changed-text").innerHTML = array;
}

// find the chosen index - current 2
function chooseIndex(){
    document.getElementById("changed-text").innerHTML = array[2];
}

// push to array
function arrPush(){
    array.push("Bente");
    document.getElementById("changed-text").innerHTML = array;
}