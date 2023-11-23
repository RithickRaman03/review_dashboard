const express = require("express");
const router = express.Router();

const pool = require("../config/database");

router.post("/store-comments", async (req, res) => {
  try {
    console.log(req.body);
    const { file_id, answer } = req.body;

    let question_id = 6; // Initialize question_id

    const commentans = await pool.query(
      "INSERT INTO comments (question_id, file_id , answer) VALUES ($1, $2, $3) RETURNING *",
      [question_id, file_id, answer]
    );
    console.log(commentans);
    res.status(200).json({ message: "Feedback Added successfully" });
  } catch (error) {
    console.error("Error inserting feedback data:", error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the request" });
  }
});

module.exports = router;
