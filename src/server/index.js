const express = require("express");
const app = express();
const routes = require("./routes");

app.use(routes);
app.use("/*", (request, response) => {
  response.status(404).json({ status: "NOT FOUND", message: "NOT FOUND" });
});

module.exports = app;
