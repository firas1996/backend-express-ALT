const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "The name is required !!!"],
  },
  email: {
    type: String,
    required: [true, "The email is required !!!"],
    unique: true,
    validate: [validator.isEmail, "The email is not valid !!!"],
    lowercase: true,
    // uppercase:true
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
