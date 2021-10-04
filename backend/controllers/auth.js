const User = require("../models/User.js");
const asyncHandler = require("express-async-handler");

// @desc Register User
// @route /signup
// @access Public
const createUser = asyncHandler(async (req, res) => {
	const { name, email, password, phone, age, gender } = req.body;

	if (
		!name ||
		!(
			gender.toLowerCase() === "male" ||
			gender.toLowerCase() === "female" ||
			gender.toLowerCase() === "other"
		)
	) {
		res.status(404);
		throw new Error("Please provide valid details");
	}

	const isUser = await User.findOne({ email });

	if (isUser) {
		res.status(404);
		throw new Error("User already exists.");
	}

	const user = new User({
		name,
		email,
		password,
		gender,
		age,
		phone: phone ? phone : null,
	});

	const token = await user.generateAuthToken();

	res.status(201).json({ name, email, token });
});

// @desc Login User
// @route /login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findUserByCredentials(email, password);

	if (!user) {
		res.status(404).send();
		throw new Error("Please enter correct email and password.");
	}

	const token = await user.generateAuthToken();

	res.status(200).json({
		name: user.name,
		email: user.email,
		phone: user.phone,
		gender: user.gender,
		age: user.age,
		token,
	});
});

//@desc Get user Profile
//@route /profile/me
//@access private
const getUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);

	if (!user) {
		res.status(404);
		throw new Error("Can't get user profile");
	}

	res.json({
		_id: user._id,
		name: user.name,
		email: user.email,
		age: user.age,
		phone: user.phone,
		gender: user.gender,
	});
});

//@desc Update User Profile
//@route /profile/me
//@access private
const updateUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);

	const { name, email, phone, age } = req.body;

	if (user) {
		user.name = name || user.name;
		user.email = email || user.email;
		user.age = age || user.age;
		user.phone = phone || user.phone;

		if (req.body.password) {
			user.password = req.body.password;
		}

		await user.save();
		res.status(200).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			age: user.age,
			phone: user.phone,
			gender: user.gender,
		});
	} else {
		res.status(404);
		throw new Error("User not found");
	}
});

// @desc Logout User
// @route /logout
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
	req.user.tokens = req.user.tokens.filter((token) => {
		return token.token != req.token;
	});

	await req.user.save();
	res.status(200).send();
});

// @desc Logout User From all devices
// @route /logout/all
// @access Private
const logoutUserFromAllDevices = async (req, res) => {
	req.user.tokens = [];
	await req.user.save();
	res.status(200).send();
};

module.exports = {
	createUser,
	getUserProfile,
	updateUserProfile,
	loginUser,
	logoutUser,
	logoutUserFromAllDevices,
};
