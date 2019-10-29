const express = require('express');

const { clientError, intialResult } = require('../controllers');

const router = express.Router();

router.get('/intial', intialResult);
router.use(clientError);

module.exports = router;
