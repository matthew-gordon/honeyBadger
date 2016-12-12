'use strict';

const express = require('express');
const route = express.Router();

const passportGitHub = require('../auth/github');


route.get('/auth/github', passportGitHub.authenticate('github', { scope: [ 'user: email' ] }));

route.get('/auth/github/callback', passportGitHub.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
  res.json(req.user);
});

module.exports = route;
