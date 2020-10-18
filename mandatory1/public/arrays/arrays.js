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
    let tempInput = null;
    const input = document.getElementById("input-field").value;
    console.log(Number(input));
    if (Number(input)) {
        tempInput = array.indexOf(Number(input));
    } else {
         tempInput = array.indexOf(input);
    }
        console.log(tempInput);
    document.getElementById("changed-text").innerHTML = array.indexOf(tempInput);
    console.log(array);
}

// push to array
function arrPush(){
    const pushInput = document.getElementById("input-field").value;
    if (Number(pushInput)) {
        array.push(Number(pushInput));
    } else{
        array.push(pushInput);
    }
    document.getElementById("changed-text").innerHTML = array;
    console.log(array);
}