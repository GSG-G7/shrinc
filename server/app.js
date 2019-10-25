/* eslint-disable no-unused-vars */
const express = require('express');
const { join } = require('path');
require('dotenv').config();

const router = require('./controller');

const PORT = process.env.PORT || 5000;
const app = express();

app.set('port', PORT);
app.use(express.json());
app.use(express.static(join(__dirname, '..', '..', 'public')));

app.use('/api/v1', router);

app.use((err, req, res, next) => {
  console.log(req.path, err);
  res.status(500).send({ message: 'Internal Server Error', statusCode: 500 });
});
module.exports = app;
