// routes/commentRouter.js
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.get('/', commentController.checker);
router.post('/', commentController.createComment);
//router.put('/:id', commentController.updateComment);
//router.delete('/:id', commentController.deleteComment);

module.exports = router;
