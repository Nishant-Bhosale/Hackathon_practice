const bcrypt = require('bcrypt');
const userProfileModel = require('../models/userProfile');

const profileHandler = async (req, res) => {
    const data = req.body;
    try {
        data.password = await bcrypt.hash(data.password, 10);
        if (req.file) {
            data.profilePath = `/profilePics/${req.file.filename}`;
        }
        const newUser = new userProfileModel(data);
        await newUser.save();
        res.status(200).json({ message: 'Profile added successfully' })
    }
    catch (err) {
        res.status(500).send();
    }
}
module.exports = profileHandler;