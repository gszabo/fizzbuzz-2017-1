'use strict';

const express = require('express');
const app = express();
const FizzBuzzPrinter = require('../../fizzbuzz-printer');
const format = require('../formatter');

app.get('/api/list', function(req, res) {
  const range = {
    from: parseInt(req.query.from),
    to: parseInt(req.query.to)
  };
  const printer = new FizzBuzzPrinter(range);
  const body = format(printer.getList());
  res.set('Content-Type', 'text/plain').send(body);
});

module.exports = app;
