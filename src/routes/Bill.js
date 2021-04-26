//simple
const router = require("express").Router();
const {
  createNewBill,
  updateBill,
  getMiniAllDetails,
  getBillById,
} = require("../controllers/bill");

router.get("/:billnumber", (req, res) => {
  getBillById(req, res);
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
