/* eslint-disable no-console */
const { join } = require('path');

const express = require('express');
const formData = require('express-form-data');
require('dotenv').config();

const router = require('./router');

const PORT = process.env.PORT || 5000;
const app = express();

app.set('port', PORT);

app.use(express.json());
app.use(formData.parse());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(join(__dirname, '..', 'client', 'build')));
app.use('/api/v1', router);

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.log('Path', req.path);
  console.log('Error from 500', err);
  switch (err.statusCode) {
    case 404:
      res.status(404).send(err);
      break;

    default:
      res.status(500).send({ message: 'Internal Server Error', statusCode: 500 });
      break;
  }
});

module.exports = app;
