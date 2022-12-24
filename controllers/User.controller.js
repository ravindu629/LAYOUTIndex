const User = require("../models/User.model");

//Add a new user
const addUser = (req, res) => {
  const { name, email, password } = req.body;

  const user = new User({
    name,
    email,
    password,
  });

  user
    .save()
    .then((createdUser) => {
      res.json(createdUser);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

//Login functionality for users
const validateUser = async (req, res) => {
  const userMail = req.body.email;
  const pass = req.body.password;

  try {
    const foundUser = await User.findOne({ email: userMail });

    if (!foundUser) {
      return res.status(404).json("invalid user");
    } else if (foundUser.password === pass) {
      return res.status(200).json(true);
    } else {
      return res.status(404).json("incorrect password");
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  addUser,
  validateUser,
};
