const express = require("express");
const app = express.Router();

const {
  getInvs,
  getInv,
  updateInv,
  deleteInv,
  createInv,
} = require("../../controllers/api/invoices");

app.get("/invoices", getInvs);

app.get("/invoices/:id", getInv);

app.post("/invoices", createInv);

app.put("/invoices/:id", updateInv);

app.delete("/invoices/:id", deleteInv);

module.exports = app;
