const express = require("express");
const authMiddleware = require("../middleware/authMiddleware.js");
const {
	createUser,
	getUserProfile,
	updateUserProfile,
	loginUser,
	logoutUser,
	logoutUserFromAllDevices,
} = require("../controllers/auth.js");

const router = express.Router();

router.post("/signup", createUser);
router.post("/login", loginUser);
router.post("/logout", authMiddleware, logoutUser);
router.post("/logout/all", authMiddleware, logoutUserFromAllDevices);
router
	.route("/profile/me")
	.get(authMiddleware, getUserProfile)
	.put(authMiddleware, updateUserProfile);

module.exports = router;
