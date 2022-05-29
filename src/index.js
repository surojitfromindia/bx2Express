const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const { UserRouter } = require("./routes/User");
const { PriceRouter } = require("./routes/Price");
const { BillRouter } = require("./routes/Bill");
const { JWTAuthM } = require("./controllers/auth");
const cors = require("cors");
const app = express();

//middlewares
(async () => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  //mongoose connect
  await mongoose
    .connect(
//       `mongodb+srv://user_surojit:passsurojit@cluster0.3yu8q.mongodb.net/productionDbOne`,
        "mongodb+srv://user_shop:1l5B98yYNc2FQaWp@cluster0.3yu8q.mongodb.net/productionDbOne",

      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => console.log(err));

  //routes
  app.get("/", (req, res) => {
    res.sendStatus(200);
  });
  app.use("/user", UserRouter);
  app.use("/price", JWTAuthM, PriceRouter);
  app.use("/bill", BillRouter);

  app.listen(process.env.PORT || 5000, () => {
    console.log("Up and running");
  });
})();
