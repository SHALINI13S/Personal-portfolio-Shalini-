const { pool } = require("../config/db");
const { validationResult } = require("express-validator");

// POST /api/contact
async function submitContact(req, res) {
  // Validation errors collected by express-validator in the route middleware
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Please fix the errors below.",
      errors: errors.array(),
    });
  }

  const { name, email, subject, message } = req.body;

  try {
    await pool.query(
      "INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)",
      [name, email, subject, message]
    );

    res.status(201).json({
      success: true,
      message: "Thank you! Your message has been sent.",
    });
  } catch (err) {
    console.error("Error saving contact message:", err.message);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
}

module.exports = { submitContact };
