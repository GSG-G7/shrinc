const express = require('express');

const {
  clientError, intialResult, filter, profile, signup,
} = require('../controllers');

const router = express.Router();

router.post('/signup', signup);
router.get('/intial', intialResult);
router.get('/filter', filter);
router.get('/profile/:id', profile);
router.use(clientError);

module.exports = router;
