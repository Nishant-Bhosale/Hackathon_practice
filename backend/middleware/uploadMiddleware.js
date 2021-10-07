const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', '..', 'frontend', 'public', 'profilePics'))
    },
    filename: (req, file, cb) => {
        const fileName = req.body.username + path.extname(file.originalname);
        cb(null, fileName)
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg"
        ) {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('invalid format'))
        }
    },

}).single('php');
module.exports = upload;