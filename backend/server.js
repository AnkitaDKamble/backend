const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ Update CORS to allow your Vercel frontend URL
app.use(cors({
  origin: [
    "http://localhost:3000",
    "infinity-web-flame.vercel.app", // Replace with your Vercel URL
    "https://infinity-web-git-main-ankitas-projects-060f1bcd.vercel.app" // Your actual domain
  ],
  credentials: true
}));

app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Enquiry Schema
const enquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  subject: String,
  message: String,
}, { timestamps: true });

const Enquiry = mongoose.model("Enquiry", enquirySchema);

// API Routes
app.post("/api/enquiries", async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

app.get("/", (req, res) => {
  res.send("Infinity Web Backend Running");
});

// For Vercel deployment - use environment variable
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});