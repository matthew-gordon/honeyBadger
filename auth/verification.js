'use strict';

const knex = require('../knex');

function ensureAuthenticated(req, res, next) {
  // return next();
  if (req.user) {
    knex('users')
    .select('github_id', req.user)
    .then((user) => {
      console.log(user);
      return user;
    }).catch(() => {
      next();
    });
    const userID = parseInt(req.user.github_id);
    console.log(userID);
    (userID, err, user) => {
      if (err){
        return next(err);
      }
      if (user.length && parseInt(user[0].github_id) === userID) {
        console.log(user[0].github_id);
        console.log('this one second');
        console.log(userID);
        return next('hey you exist!');
      } else {
        return next('User does not exist.');
      }
    }
  } else {
    return res.redirect('../login.html');
  }
}
  //   return res.redirect('../login.html');
  // }



module.exports = ensureAuthenticated;
