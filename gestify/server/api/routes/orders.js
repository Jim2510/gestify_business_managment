const express = require("express");
const app = express.Router();

const { getOrders, updateOrder } = require("../../controllers/api/orders");

app.get("/", getOrders);

app.put("/:id", updateOrder);

module.exports = app;
