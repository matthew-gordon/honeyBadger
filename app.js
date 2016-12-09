'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
