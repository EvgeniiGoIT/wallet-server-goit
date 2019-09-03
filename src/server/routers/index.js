const express = require("express");
const costs = require("./costs");

const app = express();

app.use("/costs", costs);

module.exports = app;
