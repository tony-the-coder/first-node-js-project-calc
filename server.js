const bodyParser = require('body-parser');
const express = require('express')
const app = express()
//Rember to use bodyParse. You wasted like 15 minutes trying to figure out why you had an error. 
app.use(bodyParser.urlencoded({ extended: true }))


app.get("/", function (req, res) {
    res.send("<h1>HHHHello, world I guess!!!!</h1>")
});



app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", function (req, res) {
    console.log(req.body.weight)
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var bmi = weight / (height * height);
    res.send("The BMI is " + bmi)
})

app.listen(3003, function () {
    console.log("Server is running")
})