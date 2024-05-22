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
/**
 * @path /api/users
 */
app.use("/users", require("./routes/users"));

/**
 * @path /api/orders
 */
app.use("/collections", require("./routes/collections"));

/**
 * @path /api/orders
 */
app.use("/invoices", require("./routes/invoices"));

/**
 * @path /api/orders
 */
app.use("/saledata", require("./routes/saledata"));

/**
 * @path /api/orders
 */
app.use("/piedata", require("./routes/piedata"));

/**
 * @path /api/orders
 */
app.use("/bardata", require("./routes/bardata"));

module.exports = app;
