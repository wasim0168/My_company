const express = require("express");
const router = express.Router();
const { handleContactSubmission, getHealth } = require("../controllers/contactController");

router.get("/health", getHealth);
router.post("/send", handleContactSubmission);

module.exports = router;
