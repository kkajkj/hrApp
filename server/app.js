const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const dotenv = require("dotenv");
const userRoutes = require("./Routes/index");
const connectDB = require("./Database");

dotenv.config();

const app = express();
const corsOptions = {
  origin:"https://hrapp-frontend.onrender.com/", // your actual frontend URL
  methods: ["POST"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Multer setup for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// Connect to MongoDB

connectDB();

// Routes
app.use("/api/signup", upload.single("resume"), userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
