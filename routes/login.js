'use strict';

const express = require('express');
const knex = require('../knex');
const router = express.Router();

router.get('/login', (req, res, next) => {
  res.send('Go back and register!');
});

module.exports = router;
