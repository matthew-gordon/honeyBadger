'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const knex = require('../knex');
const boom = require('boom');
const {
  camelizeKeys,
  decamelizeKeys
  } = require('humps');
const route = express.Router();

//route to get all user information
route.get('/users', (res, req, next) => {
  knex('users')
  .orderBy('id')
  .then((users) => {
    const camelUsers = camelizeKeys(users);
    res.set('content-type', 'application/json');
    res.send(camelUsers);
  })
  .catch((err) => {
    // TODO: Use boom to create a custom err
    next(err);
  });
});

//route to get a specfic users
route.get('/users/:id', (req, res, next) =>{
  //TODO: find max id and make sure `${id}` < max id in db
  if(isNaN(req.params.id)) {
    //TODO:use boom to create a custom error
    return next();
  }
  knex('users')
  .where('id', req.params.id)
  .first()
  .then((user) => {
    if(!user){
      // TODO: Use boom to create a custom err
      return next();
    }
    const camelUser = camelizeKeys(user);
    res.set('content-type', 'application/json');
    res.send(camelUser);
  })
  .catch((err)=> {
    // TODO: Use boom to create a custom err
    next(err);
  });
});

//route to add an user with a hashed password
route.post('/users', (req, res, next) =>{
  var hash = bcrypt.hashSync(req.body.password, 8);
  knex('users')
  .where('email', req.body.email)
  .first()
  .then((results) =>{
    if(!results){
      knex('users')
      .insert({
        //TODO: need to add the user not sure exactly what the db looks like yet

        //
      }, '*')
      .then(()=>{
        knex('users')
        //TODO: need to add the user not sure exactly what the db looks like yet
        .select('id', 'name', 'email')
        //^^^
        //TODO: this could also change to user name or however you login through github
        .where('email', req.body.email)
        .then(result => {
          res.send(camelizeKeys(result[0]));
        })
        .catch((err) => {
          // TODO: Use boom to create a custom err
          next(err);
        });
      })
      .catch((err) =>{
        // TODO: Use boom to create a custom err
        next(err);
      });
    } else {
      res.status(400).send('User already exists');
    }
  });
});
//Update one user!!!
route.patch('/users/:id', (req, res, next) => {
  const decamelUsers =decamelizeKeys(req.body);
  knex('users')
  .where('id', req.params.id)
  .first()
  .then((user) =>{
    if(!user){
      // TODO: Use boom to create a custom err
      next();
    }
    return knex('users')
    .update({
      // TODO: need to see db/migration before filling this out


    })
    .where('id', req.params.id);
  })
  .then((users) => {
    res.send(camelizeKeys(users[0]));
  })
  .catch((err) => {
    next(boom.create(404, "Not Found"));
  });
});

route.delete('/users/:id', (req, res, next) =>{
  knex('users')
  .where('id', req.params.id)
  .del()
  .then(() => {
    res.sendStatus(200);
  })
  .catch(err => {
    // TODO: Use boom to create a custom err
    next(err);
  });
});

module.exports = route;
