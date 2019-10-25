const express = require('express');

const { clientError } = require('../controllers');

const router = express.Router();

router.use(clientError);

module.exports = router;
