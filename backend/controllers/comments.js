const asyncHandler = require("express-async-handler");
const Story = require("../models/Story");

const addComment = asyncHandler(async (req, res) => {
	const { text } = req.body;

	if (text === "" || text === undefined) {
		res.status(400);
		throw new Error("Text cannot be empty");
	}

	const story = await Story.findById(req.params.id);

	if (!story) {
		res.status(400);
		throw new Error("Story not found");
	}

	const findCommentByUser = story.comments.find((comment) => {
		return comment.commentedBy.toString() === req.user._id.toString();
	});

	if (findCommentByUser) {
		res.status(400);
		throw new Error("Can't comment more than once");
	}

	const newComment = {
		text: text,
		authorName: req.user.name,
		commentedBy: req.user._id,
	};

	story.comments.push(newComment);
	await story.save();
	res.status(201).json({ message: "Comment Added", comment: newComment });
});

const deleteComment = asyncHandler(async (req, res) => {
	const story = await Story.findByIdAndUpdate(
		req.params.id,
		{ $pull: { comments: { commentedBy: req.user._id } } },
		{ new: true },
	);

	if (!story) {
		res.status(400);
		throw new Error("Cannot delete story");
	}

	res.status(200).json({ message: "Deleted successfully" });
});

const getComments = asyncHandler(async (req, res) => {
	const story = await Story.findById(req.params.id);

	res.status(200).json({ comments: story.comments });
});

module.exports = { addComment, deleteComment, getComments };
