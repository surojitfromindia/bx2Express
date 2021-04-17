const mongoose = require("mongoose");

const BillSchema = new mongoose.Schema({
  bill_date: { type: Date, required: true },
  customer_name: { type: String, required: true },
  customer_contact: { type: String, required: false },
});

const Bill = mongoose.model("Bill", BillSchema);

module.exports = Bill;
