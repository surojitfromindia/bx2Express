const mongoose = require("mongoose");

const GoldPriceSchema = new mongoose.Schema({
  day: { type: String, required: true },
  tfk: { type: Number, require: true, min: 2000 },
  ttk: { type: Number, require: true, min: 2000 },
  hm: { type: Number, require: true, min: 2000 }
});

const GoldPrice = mongoose.model("gold", GoldPriceSchema);

const SilverPriceSchema = new mongoose.Schema({
  day: { type: String, required: true },
  slab: { type: Number, require: true, min: 100 },
  tinker: { type: Number, require: true, min: 100 }
});

const SilverPrice = mongoose.model("silver", SilverPriceSchema);

module.exports = {
  GoldPrice,
  SilverPrice
};
