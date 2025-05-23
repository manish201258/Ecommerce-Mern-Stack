const router = require("express").Router();
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getUserProfile,
  updateUserProfile,
  getAllUsers,
} = require("../controllers/userController");

router.get("/profile", authMiddleware, getUserProfile);
router.put("/profile", authMiddleware, updateUserProfile);
router.get("/all", authMiddleware, getAllUsers);

module.exports = router;
