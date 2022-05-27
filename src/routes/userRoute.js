const express = require('express');
const router = express.Router();

const controller = require('../controllers/userController');

router.get('/', controller.getUser);
router.post('/', controller.postUser);
router.delete('/', controller.deleteUser);
router.patch('/', controller.patchUser);
router.get('/:userId', controller.getSingleUser);
router.get('/:userId/inventory/:inventoryId', controller.getSingleUserSpecificInventory);

module.exports = router;