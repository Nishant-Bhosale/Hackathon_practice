const express = require("express");
const authMiddleware = require("../middleware/authMiddleware.js");

const {
	addStory,
	getStory,
	editStory,
	deleteStory,
} = require("../controllers/story");
const router = express.Router();

router.route("/story").post(authMiddleware, addStory);
router
	.route("/story/:id")
	.get(getStory)
	.put(authMiddleware, editStory)
	.delete(authMiddleware, deleteStory);

module.exports = router;
