const express = require("express");
const multer = require("multer");

const router = express.Router();

const storage = multer.memoryStorage();

const upload = multer({
  storage,
});

router.post("/upload", upload.single("resume"), async (req, res) => {

  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No file uploaded",
    });
  }

  // Dummy ATS Score
  res.json({
    success: true,
    score: 87,
    strengths: [
      "Good formatting",
      "Projects added",
      "Education section present",
    ],
    improvements: [
      "Add measurable achievements",
      "Add more technical skills",
      "Increase keyword density",
    ],
  });

});

module.exports = router;