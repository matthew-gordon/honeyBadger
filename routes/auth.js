'use strict';

const express = require('express');
const route = express.Router();
const authenticate = require('../auth/verification');
const passportGitHub = require('../auth/github');


route.get('/auth/github', passportGitHub.authenticate('github', { scope: [ 'user: email' ] }));

route.get('/auth/github/callback', passportGitHub.authenticate('github', { failureRedirect: '/login' }), (req, res) => {
  res.redirect(`/badges.html`);
});
//allow user to logout maybe add a message telling them they have done so
route.get('/log_out',
  authenticate,
  function(req, res, next) {
  req.logout();
  res.redirect('/login.html');
});


module.exports = route;
