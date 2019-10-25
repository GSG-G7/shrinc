const { join } = require('path');

const express = require('express');
require('dotenv').config();

const router = require('./router');

const PORT = process.env.PORT || 5000;
const app = express();

app.set('port', PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(join(__dirname, '..', 'client', 'public')));
app.use('/api/v1', router);

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'public', 'index.html'));
});

module.exports = app;
