const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  skills: { type: String, required: true },
  resume: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
