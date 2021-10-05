const express = require("express");
require("dotenv").config();
const cors = require('cors')
const PORT = process.env.PORT;

//Importing Routers
const profileRouter = require('./routes/addProfile');

//Importing and initializing connection to the database
const connectDB = require("./config/db");
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use(profileRouter);

app.listen(PORT, () =>
	console.log(`Server running at http://127.0.0.1:${PORT}`),
);
