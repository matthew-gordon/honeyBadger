'use strict';

const express = require('express');
const route = express.Router();

const passportGitHub = require('../auth/github');


route.get('/auth/github', passportGitHub.authenticate('github', { scope: [ 'user: email' ] }));

route.get('/auth/github/callback', passportGitHub.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
  res.redirect(`/badges/${req.user.github_id}`);
});

module.exports = route;
