'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const passport = require('passport');
const session = require('express-session');

require('dotenv').config();


app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join('public')));

app.use(bodyParser.json());
// intitializing the routes

const auth = require('./routes/auth');
const login = require ('./routes/login');
const users = require('./routes/users');
const badges = require('./routes/badges');

app.use(auth);
app.use(login);
app.use(users);
app.use(badges);

//not 100% sure what this does but im pretty sure we need it. kg
// from MattG: @kg morgan is an HTTP request logger, this switches the length of the
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
// and i believe this is the error handling

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
// ^ kg


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

module.exports = app;
