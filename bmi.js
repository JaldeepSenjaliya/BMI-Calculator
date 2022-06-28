const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function (req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / Math.pow(height, 2);
    var result = bmi.toFixed(1);
    res.send("<h1>Your body-mass index is " + result + ".</h1>");
})

app.listen(5000, function(){
    console.log("server has been started on port 3000.");
});