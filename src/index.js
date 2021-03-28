const dotenv = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { UserRouter } = require("./routes/User");
const { PriceRouter } = require("./routes/Price");
const cors = require("cors");
dotenv.config();

//middlewares
(async () => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  //mongoose connect
  await mongoose
    .connect(
      `mongodb+srv://user_surojit:passsurojit@cluster0.3yu8q.mongodb.net/productionDbOne`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    .then(() => {
      app.use("/", express.static("public"));
      console.log("Connected to database");
    })
    .catch((err) => console.log(err));

  //routes
  app.use("/user", UserRouter);
  app.use("/price", PriceRouter);

  app.listen(3000, () => {
    console.log("Up and running");
  });
})();
