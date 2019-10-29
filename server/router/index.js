const express = require('express');

const {
  clientError, intialResult, filter, profile,
} = require('../controllers');

const router = express.Router();

router.get('/intial', intialResult);
router.get('/filter', filter);
router.get('/profile/:id', profile);
router.use(clientError);

module.exports = router;
