const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getOneUser,
  loginUser,
  signUpUser,
} = require("../controllers/user");

router.get("/", getAllUsers);
router.get("/:id", getOneUser);
//Login
router.post("/login", loginUser);

//Signup
router.post("/signup", signUpUser);

module.exports = router;
