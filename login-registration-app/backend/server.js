
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173",
}));

app.use(express.json());

// API routes
app.use("/api/auth", authRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({
    message: "Login Registration API is running",
  });
});

// Start server after database connection
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
