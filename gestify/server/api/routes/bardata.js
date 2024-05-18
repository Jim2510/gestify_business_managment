const express = require("express");
const app = express.Router();

const {
  getBars,
  getBar,
  createBar,
  updateBar,
  deleteBar,
} = require("../../controllers/api/bardata");

app.get("/bardata", getBars);

app.get("/bardata/:id", getBar);

app.post("/bardata", createBar);

app.put("/bardata/:id", updateBar);

app.delete("/bardata/:id", deleteBar);

module.exports = app;
