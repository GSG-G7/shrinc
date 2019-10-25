const express = require('express');
require('dotenv').config();

const router = require('./controller');

const app = express();
app.use(express.json());
app.set('port', process.env.PORT || 5000);

app.use(express.json());
app.get('*', router);

module.exports = app;
