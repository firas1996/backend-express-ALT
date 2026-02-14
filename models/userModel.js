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
  },
  password: {
    type: String,
    required: [true, "The password is required !!!"],
    minlength: 8,
    // validate: validator.isStrongPassword,
  },
  confirm_password: {
    type: String,
    required: [true, "The password is required !!!"],
    minlength: 8,
    validate: {
      validator: (cPass) => {
        return cPass === this.password;
      },
      message: "Pass and cPass does not match !!!",
    },
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
  pass_changed_at: {
    type: Date,
    default: Date.now(),
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
