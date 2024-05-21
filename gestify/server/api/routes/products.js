const express = require("express");
const app = express.Router();

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../../controllers/api/products");

app.get("/products", getProducts);

app.get("/products/:id", getProduct);

app.post("/products", createProduct);

app.put("/products/:id", updateProduct);

app.delete("/products/:id", deleteProduct);

module.exports = app;
