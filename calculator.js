const express = require('express')
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
    // console.log(__dirname)
    // console.log("Hello there")
});

app.post("/", function (req, res) {
    console.log(req.body.num1);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2)

    var result = num1 + num2;


    res.send("The result is " + result)
})


app.listen(3002, function () {
    console.log("Service is running now")
})