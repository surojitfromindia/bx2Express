const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const setPassword = (passVal) => {
  return bcrypt.hashSync(passVal, 10);
};

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    set: setPassword
  }
});

const User = mongoose.model("User", userSchema);

userSchema.path("email").validate(async function (n) {
  //true if alread exist
  const exist = await User.exists({ email: n });
  //trigger validation error if exist
  return !exist;
}, "User Already Exist");

module.exports = User;
