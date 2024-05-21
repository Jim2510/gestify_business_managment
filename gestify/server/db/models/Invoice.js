const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  tot: {
    type: Number,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
});

const Invoice = mongoose.model("Invoices", dataSchema);

module.exports = Invoice;
