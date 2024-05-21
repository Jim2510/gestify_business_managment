const mongoose = require("mongoose");

// Definisci lo schema per i dati del pie chart
const PieDataSchema = new mongoose.Schema({
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
const PieData = mongoose.model("Piedata", PieDataSchema);

module.exports = PieData;
