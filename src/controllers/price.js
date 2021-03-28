const { GoldPrice, SilverPrice } = require("../model/Price");

const goldPriceAll = async () => {
  //return a array
  let res = await GoldPrice.find({}).sort({ day: -1 });
  return res;
};

const goldPriceOne = async (qDate) => {
  //return a single object
  let res = await GoldPrice.findOne({ day: qDate });
  return res;
};

const silverPriceAll = async () => {
  //return a array
  let res = await SilverPrice.find({}).sort({ day: -1 });
  return res;
};

const silverPriceOne = async (qDate) => {
  let res = await SilverPrice.findOne({ day: qDate });
  return res;
};

module.exports = {
  goldPriceOne,
  goldPriceAll,
  silverPriceAll,
  silverPriceOne
};
