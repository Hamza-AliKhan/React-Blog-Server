// routes/albumRouter.js
const express = require('express');
const router = express.Router();
const albumController = require('../controllers/albumController');

router.get('/', albumController.getAllAlbums);
router.get('/:id', albumController.getAlbumById);
//router.post('/:id', albumController.getAlbumById);
//router.post('/', albumController.createAlbum);
//router.put('/:id', albumController.updateAlbum);
//router.delete('/:id', albumController.deleteAlbum);

module.exports = router;
