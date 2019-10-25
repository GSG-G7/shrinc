const express = require('express');
// call controllers modules here
const { clientError, serverError } = require('../controllers');

const router = express.Router();
// write down your routes

router.use(clientError);
router.use(serverError);

module.exports = router;
