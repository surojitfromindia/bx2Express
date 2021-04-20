const mongoose = require("mongoose");

const BillSchema = new mongoose.Schema({
  bill_date: { type: Date, required: true, default: Date.now },
  customer_name: { type: String, required: true },
  customer_contact: { type: String, required: false },
  item_details: {
    name: { type: String, required: true },
    type: { type: String, required: true },
    price_pg: { type: Number, required: true },
    quantity: { type: Number, required: true },
    unit: { type: String, required: true },
  },
  deposite: {
    quantity: { type: Number },
    unit: { type: String },
  },
  prices: {
    st: { type: Number, required: true },
    mc: { type: Number, required: true },
    gst: { type: Number, required: true },
    gt: { type: Number, required: true },
  },
  payment: {
    tp: { type: Number },
    timeline: [
      {
        date: { type: Date, required: true, default: Date.now },
        paid: { type: Number, required: true },
      },
    ],
    paidU: {
      type: Number,
    },
    remain: { type: Number },
    status: { type: String },
  },
});

//before save calculate everything
BillSchema.pre("save", function (next) {
  this.payment.paidU = this.payment.timeline.reduce(
    (sum, x) => sum + x.paid,
    0
  );
  this.payment.remain = this.payment.tp - this.payment.paidU;
  this.payment.status = this.payment.remain <= 5 ? "paid" : "unpaid";
  next();
});

const Bill = mongoose.model("Bill", BillSchema);

module.exports = Bill;
