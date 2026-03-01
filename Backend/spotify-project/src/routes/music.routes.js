const express = require('express');
const router = express.Router();
const musicController = require('../controllers/music.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const multer = require('multer');

const upload = multer({
    storage: multer.memoryStorage()
})

router.post('/create', authMiddleware.authArtist, upload.single('music'), musicController.createMusic);
router.post('/create-album', musicController.createAlbum);



module.exports = router;