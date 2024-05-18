const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Definisci lo schema per i dati del pie chart
const PieDataSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

// Crea il modello basato sullo schema
const PieData = mongoose.model("PieData", PieDataSchema);

module.exports = PieData;
