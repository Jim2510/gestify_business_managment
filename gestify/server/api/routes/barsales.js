const express = require("express");
const app = express.Router();

const {
  getBarSales,
  getBarSale,
  createBarSale,
  updateBarSale,
  deleteBarSale,
} = require("../../controllers/api/barsales");

app.get("/barsales", getBarSales);

app.get("/barsales/:id", getBarSale);

app.post("/barsales", createBarSale);

app.put("/barsales/:id", updateBarSale);

app.delete("/barsales/:id", deleteBarSale);

module.exports = app;
