const router = require("express").Router();
const { registerUser, login } = require("../controllers/user");
const { JWTAuthM } = require("../controllers/auth");

router.post("/register", async (req, res) => {
  registerUser(req, res);
});

router.post("/login", async (req, res) => {
  login(req, res);
});

router.get("/getuser", (req, res) => {
  res.send({ message: "Got it" });
});

module.exports.UserRouter = router;
