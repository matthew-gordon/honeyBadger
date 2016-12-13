'use strict';



function ensureAuthenticated(req, res, next) {
  return next();
  // console.log(req);
  // if (req.user) {
  //   const userID = parseInt(req.user.id);
    // userQueries.getSingleUserByID(userID, (err, user) => {
    //   if (err) return next(err);
    //   if (user.length && parseInt(user[0].id) === userID) {
    //     return next();
    //   } else {
    //     return next('User does not exist.');
    //   }
    // });
  // } else {
  //   req.flash('messages', {
  //     status: 'danger',
  //     value: 'You need to sign in before continuing.'
  //   });
  //   return res.redirect('/auth/log_in');
  // }
}

module.exports = ensureAuthenticated;
