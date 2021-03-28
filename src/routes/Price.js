const router = require("express").Router();
const moment = require("moment");
const {
  goldPriceAll,
  goldPriceOne,
  silverPriceAll,
  silverPriceOne
} = require("../controllers/price");

function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


router.get("/gold", async (req, res) => {
  let today = moment().format("DD-MM-YYYY");
  //first check any query
  let q = req.query.d;
  if (q) res.send(await goldPriceOne(q));
  else {
    let bn = await goldPriceAll();
    if (bn[0].day === today) {
      bn[0].day = "Today";
      bn[1].day = "Yesteday";
    }
    res.send(bn);
  }

  // res.json(bn);
});

router.get("/silver", async (req, res) => {
  let today = moment().format("DD-MM-YYYY");
  //first check any query
  let q = req.query.d;
  if (q) res.send(await silverPriceOne(q));
  else {
    let bn = await silverPriceAll();
    if (bn[0].day === today) {
      bn[0].day = "Today";
      bn[1].day = "Yesteday";
    }
    res.send(bn);
  }
});

module.exports.PriceRouter = router;
