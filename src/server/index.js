const express = require("express");
const app = express();
const routes = require("./routers");

app.use(routes);

module.exports = app;
