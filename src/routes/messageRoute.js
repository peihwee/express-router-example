const express = require('express');
const router = express.Router();

const controller = require('../controllers/messageController');

router.get('/', controller.getMessage);
router.post('/', controller.postMessage);
router.delete('/', controller.deleteMessage);
router.patch('/', controller.patchMessage);

module.exports = router;