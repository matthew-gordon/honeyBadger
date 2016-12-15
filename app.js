'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const authenticate = require('./auth/verification');

if (process.env.NODE_ENV !== 'production') {
 require('dotenv').config();
}

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//protection our static pages
app.use('/badges.html', authenticate, (req, res, next) =>{
  if(!req.user){
    res.redirect('/login.html');
  } else {
    next();
  }
});
app.use('/dailyplan.html', authenticate, (req, res, next) =>{
  if(!req.user){
    res.redirect('/login.html');
  } else {
    next();
  }
});
app.use('/index.html', authenticate, (req, res, next) =>{
  if(!req.user){
    res.redirect('/login.html');
  } else {
    next();
  }
});
app.use('/dashboard.html', authenticate, (req, res, next) =>{
  if(!req.user){
    res.redirect('/login.html');
  } else {
    next();
  }
});
app.use(express.static(path.join('public')));

app.use(bodyParser.json());
// intitializing the routes

const auth = require('./routes/auth');
const login = require ('./routes/login');
const users = require('./routes/users');
const badges = require('./routes/badges');
const achievements = require('./routes/achievements');

app.use(auth);
app.use(login);
app.use(users);
app.use(badges);
app.use(achievements);


// output to the logger depending on what environmnt the app is in

switch (app.get('env')) {
  case 'development':
    app.use(morgan('dev'));
    break;

  case 'production':
    app.use(morgan('short'));
    break;

  default:
}

app.use((err, req, res, next) => {
  if (err.output && err.output.statusCode) {
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }
  console.error(err.stack);
  res.sendStatus(500);
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
