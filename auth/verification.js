'use strict';

const knex = require('../knex');

function ensureAuthenticated(req, res, next) {
  if (req.user) {
    knex('users')
    .select('github_id', req.user)
    .then((user) => {
      console.log(user);
      return user;
    }).catch(() => {
      next();
    });
  } else {
    return res.redirect('../login.html');
  }
}



module.exports = ensureAuthenticated;
