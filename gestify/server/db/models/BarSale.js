const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SalesSchema = new Schema({
  country: { type: String, required: true },
  total_sales: { type: Number, required: true },
  total_salesColor: { type: String, required: true },
  online_sales: { type: Number, required: true },
  online_salesColor: { type: String, required: true },
  in_store_sales: { type: Number, required: true },
  in_store_salesColor: { type: String, required: true },
  new_customers: { type: Number, required: true },
  new_customersColor: { type: String, required: true },
  repeat_customers: { type: Number, required: true },
  repeat_customersColor: { type: String, required: true },
  returns: { type: Number, required: true },
  returnsColor: { type: String, required: true },
});

const BarSale = mongoose.model("Sales", SalesSchema);
module.exports = BarSale;
