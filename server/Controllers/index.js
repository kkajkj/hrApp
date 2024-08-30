const User = require("../Model/index");

const signupUser = async (req, res) => {
  const { firstname, lastname, email, dob, gender, phone, location, skills } = req.body;
  const resume = req.file ? req.file.filename : "";

  try {
    const user = new User({
      firstname,
      lastname,
      email,
      dob,
      gender,
      phone,
      location,
      skills,
      resume,
    });
    await user.save();
    res.status(200).json({ message: "User signed up successfully!" });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already exists. Please use a different email." });
    }
    console.error("Error signing up user:", error);
    res.status(400).json({ message: "Error signing up user" });
  }
};

module.exports = { signupUser };
