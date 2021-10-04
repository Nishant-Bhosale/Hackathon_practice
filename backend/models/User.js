const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { Schema } = mongoose;

const UserSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			maxlength: 30,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		age: {
			type: Number,
			required: true,
			min: 7,
			max: 100,
		},
		phone: {
			type: Number,
			minLength: 10,
			maxLength: 10,
		},
		gender: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
			minLength: 7,
		},
		tokens: [
			{
				token: {
					type: String,
					required: true,
				},
			},
		],
	},
	{
		timestamps: true,
	},
);

UserSchema.statics.findUserByCredentials = async (email, password) => {
	try {
		const user = await User.findOne({ email });

		if (!user) {
			throw new Error("User does not exist.");
		}

		const isPasswordCorrect = await bcrypt.compare(password, user.password);

		if (!isPasswordCorrect) {
			throw new Error("Please enter correct password.");
		}

		return user;
	} catch (error) {
		console.log(error);
	}
};

UserSchema.methods.generateAuthToken = async function () {
	const user = this;

	const payload = { _id: user._id };

	const token = await jwt.sign(payload, process.env.SECRET_KEY);

	user.tokens = user.tokens.concat({ token });

	await user.save();

	return token;
};

UserSchema.pre("save", async function (next) {
	const user = this;

	if (!user.isModified("password")) {
		next();
	}

	const hashedPassword = await bcrypt.hash(user.password, 9);

	user.password = hashedPassword;
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
