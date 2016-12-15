'use strict';

const express = require('express');
const route = express.Router();
const passportGitHub = require('../auth/github');


route.get('/auth/github', passportGitHub.authenticate('github', {
    scope: ['user: email']
}));

route.get('/auth/github/callback', passportGitHub.authenticate('github', {
    failureRedirect: '/login'
}), (req, res) => {
    if (req.user.is_admin) {
        res.redirect('/badges_admin.html');
    } else {
        res.redirect(`/badges.html`);
    }
});

//allow user to logout
route.get('/log_out/', function(req, res) {
    req.logout();
    res.clearCookie('connect.sid', {
        path: '/'
    });
    res.redirect('/login.html');
});


module.exports = route;
