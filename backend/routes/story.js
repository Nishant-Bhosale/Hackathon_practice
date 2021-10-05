const express = require("express");
const authMiddleware = require("../middleware/authMiddleware.js");

const { addStory, getStory, editStory } = require("../controllers/story");
const router = express.Router();

router.route("/story").post(authMiddleware, addStory);
router.route("/story/:id").get(getStory).put(authMiddleware, editStory);
module.exports = router;
