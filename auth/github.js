'use strict';

const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

const config = require('../config');
const init = require('./init');

passport.use(new GitHubStrategy({
  clientID: config.github.clientID,
  clientSecret: config.github.clientSecret,
  callbackURL: config.github.callbackURL
  },
 (accessToken, refreshToken, profile, done) => {
  console.log(profile);

}));

init();

module.exports = passport;
