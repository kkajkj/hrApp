const express = require("express");
const { signupUser } = require("../Controllers/index");

const router = express.Router();

// Define the route and use the controller
router.post("/", signupUser);

module.exports = router;
