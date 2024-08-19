const User = require("../models/User");

// Craete
exports.createUser = async (req, res) => {
  const { name, password, email } = req.body;
  const user = new User({ name, password, email });
  try {
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await User.findOne({ email: email });
    console.log(result);
    if (result.password == password) {
      res.status(200).json({ message: "login sucessful!" });
    } else {
      res.status(500).json({ message: "Email or passwrod Incorrect!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

exports.calGpa = async (req, res) => {
  try {
    const results = await User.find();
    let total = 0;
    results.forEach((result) => {
      total += result.marks1;
      total += result.marks2;
      total += result.marks3;
    });
    res.status(200).json({ total: total });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
