//simple
const router = require("express").Router();
const { createNewBill, updateBill } = require("../controllers/bill");

router.get("/:billnumber", (req, res) => {
  res.send("Bills");
});

router.post("/new", (req, res) => {
  createNewBill(req, res);
});
router.put("/edit/:billid", (req, res) => {
  updateBill(req, res);
});

module.exports.BillRouter = router;
