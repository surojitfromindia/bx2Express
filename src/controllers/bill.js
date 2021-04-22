const Bill = require("../model/Bill");

function createNewBill(req, res) {
  const bill = new Bill(req.body.data);
  bill.save((err, doc) => {
    if (!err) res.send(doc._id);
    else res.status(400).send(err);
  });
}

async function getMiniAllDetails(req, res) {
  try {
    let bills = await Bill.find(
      {},
      {
        customer_name: 1,
        customer_contact: 1,
        bill_date: 1,
        item_details: 1,
        "deposite.quantity": 1,
        payment: 1,
      }
    ).sort({ bill_date: -1 });
    res.send(bills);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function updateBill(req, res) {
  let billId = req.params.billid;
  let body = req.body;

  try {
    let bill = await Bill.findOne({ _id: billId }).exec();
    //update the bill
    bill.payment.timeline.push(body);
    //save the bill
    let updatedBill = await bill.save();
    //return the bill
    res.send(updatedBill);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createNewBill,
  updateBill,
  getMiniAllDetails,
};
