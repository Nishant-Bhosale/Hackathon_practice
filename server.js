const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const PORT = 5000 || process.env.PORT;

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.json({ message: "Working" });
});

app.listen(PORT, () => {
	console.log("Server running on " + PORT);
});
