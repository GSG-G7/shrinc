const express = require('express');

const { clientError, signup } = require('../controllers');

const router = express.Router();

router.post('/signup', signup);
router.use('*', clientError);

module.exports = router;
