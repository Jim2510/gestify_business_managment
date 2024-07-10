const express = require("express");
const app = express.Router();

const { getOrders, updateOrder } = require("../../controllers/api/orders");

app.get("/orders", getOrders);

app.put("/orders/:id", updateOrder);

module.exports = app;
