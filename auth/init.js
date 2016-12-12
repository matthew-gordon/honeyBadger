'use strict';
//this file still broken
const passport = require('passport');
const knex = require('../knex');


module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.github_id);
  });

  passport.deserializeUser((id, done) => {
    return knex('users')
      .where('github_id', id)
      .then((user) => {
        done(null, user[0]);
      })
      .catch((err) => {
        done(err);
      });
  });

};
