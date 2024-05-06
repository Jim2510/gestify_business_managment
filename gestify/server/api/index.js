const express = require("express");
const app = express.Router();

/**
 * @path /api/products
 */
app.use("/products", require("./routes/products"));

/**
 * @path /api/orders
 */
app.use("/orders", require("./routes/orders"));

module.exports = app;
