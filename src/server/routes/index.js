const express = require("express");
const products = require("./products");

const app = express();

app.use("/costs", products);

module.exports = app;
