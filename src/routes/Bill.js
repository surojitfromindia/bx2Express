//simple
const router = require("express").Router();
const {
  createNewBill,
  updateBill,
  getMiniAllDetails,
} = require("../controllers/bill");

router.get("/:billnumber", (req, res) => {
  res.send("Bills");
});

router.post("/new", (req, res) => {
  createNewBill(req, res);
});
router.put("/edit/:billid", (req, res) => {
  updateBill(req, res);
});

router.get("/", (req, res) => {
  getMiniAllDetails(req, res);
});

module.exports.BillRouter = router;
