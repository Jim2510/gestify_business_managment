const express = require("express");
const app = express.Router();

const {
  getSales,
  getSale,
  createSale,
  updateSale,
  deleteSale,
} = require("../../controllers/api/saledata");

app.get("/saledata", getSales);

app.get("/saledata/:id", getSale);

app.post("/saledata", createSale);

app.put("/saledata/:id", updateSale);

app.delete("/saledata/:id", deleteSale);

module.exports = app;
