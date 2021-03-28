const { UserValidation } = require("../validation/validation");
const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//register user
const registerUser = async (req, res) => {
  const user = req.body;
  //first validate
  await UserValidation(user)
    .then((value) => {
      //create a user from model
      let NewUser = new User(user);
      //now save the user in db
      NewUser.save({}, (err, doc) => {
        if (!err) {
          //no error - send user name as  response
          res.send(`Cong! ${value.name} you are registerd`);
        } else {
          //else send error string
          res.send(err.errors.email.message);
        }
      });
    })
    //catch validation error, send details
    .catch((err) => res.send(err.details[0].message));
};

//login
const login = async (req, res) => {
  let userPayload = req.body;
  console.log(userPayload);

  await User.findOne(
    {
      email: userPayload.email
    },
    async (err, user) => {
      if (!err) {
        if (user) {
          const result = await bcrypt.compareSync(
            userPayload.password,
            user.password
          );
          if (result) {
            const accessToken = jwt.sign(
              userPayload,
              "xhbaehbtfq4vvdgjxljsixkg5lvp1one"
            );
            console.log({ accessToken });

            res.json({ token: accessToken });
          } else res.json({ message: "Password doesn't match" });
        } else res.json({ message: "User Doesn't exist" });
      } else res.json({ message: "Error!" });
    }
  );
};

module.exports = {
  registerUser,
  login
};
