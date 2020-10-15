console.log("Testing Object Information")
const json = { firstname: "Jannick", lastname: "Lund", education: "Datamatiker" }
document.getElementById("demo-text").innerHTML = JSON.stringify(json);


// Retrieve value from key = Firstname
function retrieve(){
    const data = json.firstname;
    console.log(data);
    document.getElementById("changed-text").innerHTML = data;
}

// remove key = firstname
function pop(){
    delete json.firstname;
    document.getElementById("changed-text").innerHTML = JSON.stringify(json);
}

// Change Lastname
function changeLast(){
    json.lastname = "Lund-Pedersen";
    document.getElementById("changed-text").innerHTML = JSON.stringify(json);
}

