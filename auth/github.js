'use strict';

const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
require('dotenv').config();

const init = require('./init');

passport.use(new GitHubStrategy({
  clientID: process.env.CLIENTID,
  clientSecret: process.env.CLIENTSECRET,
  callbackURL: process.env.CALLBACKURL
  },
 (accessToken, refreshToken, profile, done) => {
  console.log(profile);

}));

init();

module.exports = passport;
