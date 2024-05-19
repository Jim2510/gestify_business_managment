const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema(
  {
    cliente: {
      type: String,
      require: [true, "Please enter customer name"],
    },
    data_acquisizione: {
      type: String,
      required: true,
    },
    stato: {
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

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;
