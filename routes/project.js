const express = require("express");
const db = require("../db/MongoDB");

/* Upload image */
const upload = require("../services/file-upload");
const singleUpload = upload.single("image");

const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.body);
  const success = await db.postProject(req.body.project);
  res.status(success ? 200 : 500).end();
});

/* Post image one at a time. */
router.post("/image", (req, res) => {
  singleUpload(req, res, error => {
    if (error) {
      console.log(error);
      res.status(500).end();
    } else {
      return res.status(200).json({ url: req.file.location });
    }
  });
});

module.exports = router;
