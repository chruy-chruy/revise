var express = require("express");
var app = express();
var router = require("./routes/routeStudent");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use("/", router);

module.exports = app