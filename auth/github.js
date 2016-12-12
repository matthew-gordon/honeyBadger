'use strict';

const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
require('dotenv').config();

const init = require('./init');

passport.use(new GitHubStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL
  },
 (accessToken, refreshToken, profile, done) => {
  console.log(profile);

}));

init();

module.exports = passport;
