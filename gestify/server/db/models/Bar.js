const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Definisci lo schema per i dati KPI per paese
const CountryKpiDataSchema = new Schema({
  country: {
    type: String,
    required: true,
  },
  sales: {
    type: Number,
    required: true,
  },
  profit: {
    type: Number,
    required: true,
  },
  growth: {
    type: Number,
    required: true,
  },
  market_share: {
    type: Number,
    required: true,
  },
  customer_satisfaction: {
    type: Number,
    required: true,
  },
  employee_engagement: {
    type: Number,
    required: true,
  },
});

// Crea il modello basato sullo schema
const BarData = mongoose.model("CountryKpiData", CountryKpiDataSchema);

module.exports = BarData;
