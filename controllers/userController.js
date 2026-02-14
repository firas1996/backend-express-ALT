const User = require("../models/userModel");

exports.createUser = async (req, res) => {
  try {
    // console.log(req.body.password === req.body.confirm_password);
    const newUser = await User.create(req.body);
    res.status(201).json({
      message: "User Created !!!",
      data: { user: newUser, test: "Hello !" },
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
