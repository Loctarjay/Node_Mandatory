const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/public/index/info.html")
});

app.get("/strings", (req, res) => {
    return res.sendFile(__dirname + "/public/strings/strings.html");
});

app.get("/objects", (req, res) => {
    return res.sendFile(__dirname + "/public/objects/objects.html");
});

app.get("/arrays", (req, res) => {
    return res.sendFile(__dirname + "/public/arrays/arrays.html");
});

app.get("/functions", (req, res) => {
    return res.sendFile(__dirname + "/public/functions/functions.html");
});

app.get("/snippets", (req, res) => {
    return res.sendFile(__dirname + "/public/snippets/snippets.html");
});



// port selection
const port = process.env.PORT || 8080;
app.listen(port, (error) => {
    if ( error ) {
        console.log("Server couldn't start", error);
    }
    console.log("Server started on port", Number(port));
});