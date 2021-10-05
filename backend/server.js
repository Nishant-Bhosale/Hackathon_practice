const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const authRouter = require("./routes/auth");
const commentRouter = require("./routes/comments");
const storyRouter = require("./routes/story");
const { errorMiddleware, notFound } = require("./middleware/errorMiddleware");
const PORT = process.env.PORT;

//Importing Routers
const profileRouter = require('./routes/addProfile');

//Importing and initializing connection to the database
const connectDB = require("./config/db");
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.use(authRouter);
app.use(storyRouter);
app.use(commentRouter);

app.use(notFound);
app.use(errorMiddleware);

app.listen(PORT, () =>
	console.log(`Server running at http://127.0.0.1:${PORT}`),
);
