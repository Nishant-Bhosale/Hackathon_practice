const mongoose = require('mongoose');
const userProfileSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	age: {
		type: Number,
		required: true
	},
	gender: {
		type: String,
		required: true
	},
	education: {
		type: String
	},
	profilePath: {
		type: String
	}
})
const userProfileModel = mongoose.model('userProfile', userProfileSchema)
module.exports = userProfileModel;