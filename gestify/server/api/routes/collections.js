const express = require("express");
const app = express.Router();
const getCollections = require("../../controllers/api/collections");

app.get("/collections", getCollections);

module.exports = app;
