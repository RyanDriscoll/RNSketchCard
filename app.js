'use strict';

const express = require('express');
const path = require('path');
const router = require('./server/gameData').router;

const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router);

app.use(function(err, req, res, next) {
  console.error(err, err.stack);
  res.status(err.status || 500).send(err);
});

app.listen(3001, function() {
  console.log('Server is listening on port 3001');
});

module.exports = app;
