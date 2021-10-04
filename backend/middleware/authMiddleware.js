const jwt = require("jsonwebtoken");
const User = require("../models/User.js");

const authMiddleware = async (req, res, next) => {
	const token = req.header("x-auth-token");

	try {
		const decodedUser = await jwt.verify(token, process.env.SECRET_KEY);

		const user = await User.findOne({
			_id: decodedUser._id,
			"tokens.token": token,
		});

		if (!user) {
			throw new Error("Could not find user");
		}

		req.token = token;
		req.user = user;
		next();
	} catch (error) {
		console.log(error);
		res.status(500).send({ error: "User not found" });
	}
};

module.exports = authMiddleware;
