const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ Allowed Origins
const allowedOrigins = [
  "http://localhost:3000",
  "https://frontend-seven-amber-63.vercel.app"
];

// ✅ CORS Configuration
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests without an origin (e.g. Postman)
    if (!origin) return callback(null, true);

    if (
      allowedOrigins.includes(origin) ||
      origin.endsWith(".vercel.app")
    ) {
      return callback(null, true);
    }

    return callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());

// ✅ Logging Middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log("Body:", req.body);
  next();
});

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// ✅ Enquiry Schema
const enquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  subject: String,
  message: String,
}, { timestamps: true });

const Enquiry = mongoose.model("Enquiry", enquirySchema);

// ✅ Test Route
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "API is working!",
    timestamp: new Date().toISOString()
  });
});

// ✅ Submit Enquiry
app.post("/api/enquiries", async (req, res) => {
  console.log("📩 Received enquiry:", req.body);

  try {
    if (
      !req.body.name ||
      !req.body.mobile ||
      !req.body.subject ||
      !req.body.message
    ) {
      return res.status(400).json({
        success: false,
        message: "Name, mobile, subject, and message are required"
      });
    }

    const enquiry = new Enquiry(req.body);
    await enquiry.save();

    console.log("✅ Enquiry saved successfully");

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully"
    });

  } catch (error) {
    console.error("❌ Error saving enquiry:", error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// ✅ Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Infinity Web Backend Running",
    status: "Active",
    timestamp: new Date().toISOString()
  });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});