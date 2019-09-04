const express = require("express");
const app = express();
const products = require("../../db/costs/all-costs.json");
app.get("/:id", (request, response) => {
  const id = +request.params.id;
  const findedProducts = products.find(obj => obj.id === id);
  if (findedProducts) {
    response.json({ status: "success", products: findedProducts });
  } else response.json({ status: "no producuts", products: "[]" });
});
app.get("/", (request, response) => {
  const categories = request.query.category;
  if (categories) {
    const changedArr = products.filter(
      prod => `"${prod.categories[0]}"` === categories
    );
    if (changedArr.length) {
      response.json({ status: "success", products: changedArr });
    } else response.json({ status: "no producuts", products: "[]" });
  } else response.json({ status: "success", products: products });
});
module.exports = app;
