const mongoose = require("mongoose");
const { Schema } = mongoose;

//Created Schema for Users
const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

module.exports = User = mongoose.model("User", userSchema);
