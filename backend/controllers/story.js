const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Story = require("../models/Story");

const addStory = asyncHandler(async (req, res) => {
	const { title, category, content, imageLink } = req.body;

	const story = await Story.findOne({ title });

	if (story) {
		res.status(400);
		throw new Error("Please choose unique title");
	}

	const newStory = new Story({
		title,
		category,
		content,
		imageLink: imageLink ? imageLink : null,
		author: req.user._id,
	});

	await newStory.save();
	res.status(201).json({ message: "Story added successfully", newStory });
});

const getStory = asyncHandler(async (req, res) => {
	const story = await Story.findById(req.params.id)
		.populate("author", ["name", "phone", "age", "gender", "email"])
		.exec();

	if (!story) {
		res.status(400);
		throw new Error("Story doesn't exist");
	}

	res.status(200).json({ story });
});

module.exports = { addStory, getStory };
