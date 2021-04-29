//simple
const router = require("express").Router();
const {
  createNewBill,
  updateBill,
  getMiniAllDetails,
  getBillById,
  deleteBillById,
  getMiniAllDetailsByID,
} = require("../controllers/bill");

router.get("/mini/:id", (req, res) => {
  getMiniAllDetailsByID(req, res);
});

router.get("/:id", (req, res) => {
  getBillById(req, res);
});

router.post("/new", (req, res) => {
  createNewBill(req, res);
});
router.put("/edit/:id", (req, res) => {
  updateBill(req, res);
});

router.delete("/:id", (req, res) => {
  deleteBillById(req, res);
});

router.get("/", (req, res) => {
  getMiniAllDetails(req, res);
});

module.exports.BillRouter = router;
