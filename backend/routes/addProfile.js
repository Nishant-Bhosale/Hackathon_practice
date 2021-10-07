const express = require('express');
//Importing controllers
const profileHandler = require('../controllers/profileHandler');
//Importing middlewares
const upload = require('../middleware/uploadMiddleware');

const profileRouter = express.Router();
profileRouter.route('/api/addProfile').post(upload, profileHandler);

module.exports = profileRouter;