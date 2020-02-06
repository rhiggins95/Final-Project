const express = require("express");
const router = express.Router();
const fs = require("fs");

const multer = require("multer");
const upload = multer({ dest: "./assets/upload" });
const Image = require("../models/Image");

router.post("/:id", upload.single("file"), async (req, res) => {
  const image = req.file;

  const newImage = {
    name: image.path,
    data: "",
    mimetype: image.mimetype
  };
  fs.readFile(newImage.name, async (err, data) => {
    if (err) {
      throw err;
    }
    newImage.data = data;
    const savedImage = await Image.create(newImage);
    res.json(savedImage);
  });
});

module.exports = router;
