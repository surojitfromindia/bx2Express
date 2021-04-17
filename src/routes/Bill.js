//simple
const router = require("express").Router();
const { createNewBill } = require("../controllers/bill");

router.get("/:billnumber", (req, res) => {
  res.send("Bills");
});

router.post("/new", (req, res) => {
  createNewBill(req, res);
});

module.exports.BillRouter = router;

 