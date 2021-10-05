const mongoose = require("mongoose");

const { Schema } = mongoose;

const CommentSchema = new Schema(
	{
		text: {
			type: String,
		},
		authorName: {
			type: String,
			required: true,
		},
		commentedBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		timestamps: true,
	},
);

module.exports = CommentSchema;
