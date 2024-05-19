const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Definisci lo schema per i dati della pagina
const PageDataSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  uv: {
    type: Number,
    required: true,
  },
  pv: {
    type: Number,
    required: true,
  },
  amt: {
    type: Number,
    required: true,
  },
});

// Crea il modello basato sullo schema
const SaleData = mongoose.model("PageData", PageDataSchema);

module.exports = SaleData;
