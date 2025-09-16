const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Search users
router.get("/", protect, allUsers);

// Register
router.post("/", registerUser);

// Login
router.post("/login", authUser);


module.exports = router;
