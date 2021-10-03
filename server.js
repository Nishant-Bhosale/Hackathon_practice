const express = require("express");
const PORT = 5000 || process.env.PORT;
const app = express();

app.listen(PORT, () => {
	console.log("Server running on " + PORT);
});
