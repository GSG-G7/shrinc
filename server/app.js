const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');

const router = require('./router');

const PORT = process.env.PORT || 5000;
const app = express();
app.use(cookieParser());

app.set('port', PORT);
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '..', 'public')));

app.use('/api/v1', router);

module.exports = app;
