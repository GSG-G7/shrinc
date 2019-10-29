const express = require('express');

const { clientError, intialResult, filter } = require('../controllers');

const router = express.Router();

router.get('/intial', intialResult);
router.get('/filter', filter);
router.use(clientError);

module.exports = router;
