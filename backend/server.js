const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const PORT = process.env.PORT;

//Initializing connection to the database
connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.json({ message: "Working" });
});

app.listen(PORT, () => console.log(`Server running at http://127.0.0.1:${PORT}`));