const express = require("express");
const router = express.Router();
const {
  getAllDrinks,
  getOneDrinks,
  createDrinks,
  updateDrinks,
  deleteDrinks,
} = require("../controllers/drinks");

router.get("/", getAllDrinks);
router.get("/:id", getOneDrinks);
router.post("/", createDrinks);
router.put("/:id", updateDrinks);
router.delete("/:id", deleteDrinks);

module.exports = router;
