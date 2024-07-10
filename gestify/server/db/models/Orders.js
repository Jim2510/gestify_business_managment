const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema(
  {
    numero: {
      type: String,
      require: true,
    },
    sigla: {
      type: String,
      require: false,
    },
    cliente: {
      type: String,
      require: true,
    },
    totale: {
      type: String,
      require: true,
    },
    data: {
      type: String,
      require: true,
    },
    stato_q: {
      type: String,
      require: false,
    },
    pagamento: {
      type: String,
      require: true,
    },
    vettore: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
    strict: true,
    versionKey: false,
  }
);

const Orders = mongoose.model("Orders", OrderSchema);

module.exports = Orders;
