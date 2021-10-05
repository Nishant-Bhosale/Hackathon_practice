const express = require("express");
const {
	addComment,
	deleteComment,
	getComments,
} = require("../controllers/comments");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router
	.route("/story/:id/comment")
	.post(authMiddleware, addComment)
	.delete(authMiddleware, deleteComment)
	.get(getComments);

module.exports = router;
