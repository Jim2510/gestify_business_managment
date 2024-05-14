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

/**
 * @path /api/orders
 */
app.use("/customers", require("./routes/customers"));

module.exports = app;
