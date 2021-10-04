const mongoose = require("mongoose");

const { Schema } = mongoose;

const StorySchema = new Schema(
	{
		title: {
			type: String,
			required: true,
			maxLength: 50,
			minLength: 3,
			unique: true,
		},
		category: {
			type: String,
			required: true,
		},
		author: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		content: {
			type: String,
			required: true,
			minLength: 10,
		},
		imageLink: {
			type: String,
		},
		ratings: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "User",
			},
		],
		comments: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Comment",
			},
		],
	},
	{
		timestamps: true,
	},
);

const Story = mongoose.model("Story", StorySchema);
module.exports = Story;
