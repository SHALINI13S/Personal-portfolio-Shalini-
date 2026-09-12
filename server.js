require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { testConnection } = require("./config/db");

const projectsRoutes = require("./routes/projects");
const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5000;

// ----- Middleware -----
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  })
);
app.use(express.json());

// ----- Routes -----
app.get("/", (req, res) => {
  res.json({ message: "Portfolio API is running." });
});

app.use("/api/projects", projectsRoutes);
app.use("/api/contact", contactRoutes);

// ----- 404 handler -----
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found." });
});

// ----- Global error handler -----
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.stack);
  res.status(500).json({ success: false, message: "Internal server error." });
});

// ----- Start server -----
app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  await testConnection();
});
