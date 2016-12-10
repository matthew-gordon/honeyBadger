'use strict';
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const morgan = require('morgon');

app.get('/', (req, res, next) => {
  res.send('Hello world!');
});

app.use(bodyParser.json());
// intitializing the routes
const users = require('./routes/users');

app.use(users);


//not 100% sure what this does but im pretty sure we need it. kg
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
