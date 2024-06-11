const express = require("express");
const router = express.Router();
const {
  getAllDecorations,
  getOneDecoration,
  createDecoration,
  updateDecoration,
  deleteDecoration,
} = require("../controllers/decorations");

router.get("/", getAllDecorations);
router.get("/:id", getOneDecoration);
router.post("/", createDecoration);
router.put("/:id", updateDecoration);
router.delete("/:id", deleteDecoration);

module.exports = router;
