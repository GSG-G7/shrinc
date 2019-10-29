/* eslint-disable no-unused-vars */
const { join } = require('path');
const express = require('express');
const formData = require('express-form-data');
require('dotenv').config();

const router = require('./router');

const PORT = process.env.PORT || 5000;
const app = express();
app.use(formData.parse());

app.set('port', PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'client', 'public')));
app.use('/api/v1', router);

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'public', 'index.html'));
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: 'Internal Server Error', statusCode: 500 });
});

module.exports = app;
