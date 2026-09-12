const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const { submitContact } = require("../controllers/contactController");

// POST /api/contact
router.post(
  "/",
  [
    body("name").trim().notEmpty().withMessage("Name is required."),
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required.")
      .isEmail()
      .withMessage("Please enter a valid email address."),
    body("subject").trim().notEmpty().withMessage("Subject is required."),
    body("message")
      .trim()
      .notEmpty()
      .withMessage("Message is required.")
      .isLength({ min: 10 })
      .withMessage("Message should be at least 10 characters long."),
  ],
  submitContact
);

module.exports = router;
