const express = require("express");
const app = express.Router();

const {
  getCustomers,
  getCustomer,
  addCustomer,
  updateCustomers,
  deleteCustomer,
} = require("../../controllers/api/customers");

app.get("/customers", getCustomers);

app.get("/customers/:id", getCustomer);

app.post("/customers", addCustomer);

app.put("/customers/:id", updateCustomers);

app.delete("/customers/:id", deleteCustomer);

module.exports = app;
