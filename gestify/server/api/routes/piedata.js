const express = require("express");
const app = express.Router();

const {
  getPies,
  getPie,
  createPie,
  updatePie,
  deletePie,
} = require("../../controllers/api/piedata");

app.get("/piedata", getPies);

app.get("/piedata/:id", getPie);

app.post("/piedata", createPie);

app.put("/piedata/:id", updatePie);

app.delete("/piedata/:id", deletePie);

module.exports = app;
