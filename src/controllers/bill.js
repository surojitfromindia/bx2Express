const Bill = require("../model/Bill");

function createNewBill(req, res) {
  const bill = new Bill(req.body);
  bill.save((err, doc) => {
    console.log(doc);
  });
  res.send("Hoo");
}

module.exports = {
  createNewBill,
};
