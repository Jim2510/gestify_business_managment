const express = require("express");
const app = express.Router();

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../../controllers/api/products");

app.get("/", getProducts);

app.get("/:id", getProduct);

app.post("/", createProduct);

app.put("/:id", updateProduct);

app.delete("/:id", deleteProduct);

module.exports = app;
