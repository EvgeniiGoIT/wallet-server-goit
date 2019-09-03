const express = require("express");
const app = express();
const costs = require("../../db/costs/all-costs.json");
const products = [...costs];
app.get("/:id", (request, response, next) => {
  const id = +request.params.id;
  const findedProducts = products.find(obj => obj.id === id);
  response.json({ status: "succes", products: findedProducts });
});
app.get("/", (request, response, next) => {
  const categories = request.query.category;
  response.json(
    products.filter(prod => `"${prod.categories[0]}"` === categories)
  );
});
app.get("/", (request, response, next) => {
  response.json(costs);
});

module.exports = app;
