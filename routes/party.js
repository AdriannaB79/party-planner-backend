const express = require("express");
const router = express.Router();
const {
  getAllParties,
  getOneParty,
  createParty,
  updateParty,
  deleteParty,
} = require("../controllers/party");

// Definiowanie ścieżek dla operacji przyjęcia
router.post("/all-parties", getAllParties);
router.get("/:id", getOneParty);
router.post("/", createParty);
router.put("/:id", updateParty);
router.delete("/:id", deleteParty);

module.exports = router;
