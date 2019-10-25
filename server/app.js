/* eslint-disable no-unused-vars */
const express = require('express');
const { join } = require('path');
require('dotenv').config();

const router = require('./controller');

const app = express();
app.use(express.json());
app.set('port', process.env.PORT || 5000);

app.use('/api/v1/', router);

app.use(express.static(join(__dirname, '..', 'client', 'public')));

app.get('*', (_req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'public', 'index.html'));
});

app.use((err, req, res, next) => {
  console.log(req.path, err);
  res.status(500).send({ message: 'Internal Server Error', statusCode: 500 });
});
module.exports = app;
