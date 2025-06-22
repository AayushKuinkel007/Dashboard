const User = require("../models/usermodel");

exports.sendUserData = async (req, res) => {
  try {
    const { fname, lname, dateofbirth, email, password } = req.body;

    console.log("Received Data:", req.body);

    const newUser = new User({ fname, lname, dateofbirth, email, password });

    await newUser.save();

    console.log("Saved User:", newUser);

    res.status(201).json({
      message: "User Registered Successfully",
      user: newUser,
    });
  } catch (err) {
    console.error("Error Saving User:", err);
    res.status(400).json({
      message: "User Registration Failed",
      error: err.message,
    });
  }
};
