const express = require('express');

const router = (req, res) => {
  res.send('hi from the server');
};

const app = express();
app.use(express.json());
app.set('port', process.env.PORT || 5000);

app.use(express.json());
app.get('*', router);

module.exports = app;
