const express = require("express");
const router = express.Router();
const {
  getAllFood,
  getOneFood,
  createFood,
  updateFood,
  deleteFood,
} = require("../controllers/food");

router.get("/", getAllFood);
router.get("/:id", getOneFood);
router.post("/", createFood);
router.put("/:id", updateFood);
router.delete("/:id", deleteFood);

module.exports = router;
