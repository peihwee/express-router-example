const express = require('express');
const router = express.Router();

const messageRoute = require('./messageRoute');
const userRoute = require('./userRoute');

router.use("/message", messageRoute);
router.use('/user', userRoute);

module.exports = router;