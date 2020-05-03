"use strict";

var fs = require("fs");
var express = require("express");
var app = express();

app.get("/info", function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(fs.readFileSync("package.json"));
});

app.get("/teamsWithPeople", function (req, res) {
  // your code here
});

app.listen(3000);
