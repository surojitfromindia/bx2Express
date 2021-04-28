const Bill = require("../model/Bill");

function createNewBill(req, res) {
  const bill = new Bill(req.body);
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

async function getBillById(req, res) {
  try {
    let bills = await Bill.findOne({ _id: req.params.id });
    if (bills) res.send(bills);
    else res.sendStatus(404);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function updateBill(req, res) {
  let billId = req.params.id;
  let body = req.body;

  try {
    let bill = await Bill.findOne({ _id: billId }).exec();
    //update the bill

    if (bill.payment.remain >= body.paid) bill.payment.timeline.push(body);
    else throw new Error("Can't performe update");
    //save the bill
    let updatedBill = await bill.save();
    //return the bill
    res.send(updatedBill);
  } catch (err) {
    res.status(404).send(err);
  }
}

async function deleteBillById(req, res) {
  let id = req.params.id;
  Bill.deleteOne({ _id: id }).then((deB) => {
    res.send(deB.deletedCount === 1 ? true : false);
  });
}
module.exports = {
  createNewBill,
  updateBill,
  getMiniAllDetails,
  getBillById,
  deleteBillById,
};
