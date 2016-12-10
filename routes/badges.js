'use strict';

const express = require('express');
// is this supposed to be require('../knex')??
const knex = require('knex');
const route = express.Router();
const humps = require('humps');
const boom = require('boom');

//get all badges
route.get('/badges', (req, res, next) =>{
  knex('badges')
  //TODO: depending we might want to change how its ordered
  .orderBy('id')
  .then((badges) => {
    const camelBadges = humps.camelizeKeys(badges);
    res.set('content-type', 'application/json');
    res.send(camelBadges);
  })
  .catch((err) => {
    // TODO: Use boom to create a custom err
    next(err);
  });
});

//get specific badges
route.get('/badges/:id', (req, res, next) => {
  if(isNaN(req.params.id)){
    // TODO: Use boom to create a custom err
    return next();
  }
  knex('badges')
  .where('id', req.params.id)
  .first()
  .then((badge) => {
    if(!badge){
      // TODO: Use boom to create a custom err
      return next();
    }
    const camelBadge = humps.camelizeKeys(badge);
    res.set('content-type', 'application/json');
    res.send(camelBadge);
  })
  .catch((err) => {
    // TODO: Use boom to create a custom err
    next(err);
  });
});

// make a new badge!
route.post('/badges', (req, res, next) => {
  const decamelBadges = humps.decamelizeKeys(req.body);
  const badgeObj = {
    //TODO: need to know what the migration looks like
  };
  knex('badges')
  .insert(badgeObj,// TODO: ^^^
[])
  .then((badge) => {
    res.set('Content-Type', 'application/json');
    res.send(humps.camelizeKeys(badge[0]));
  })
  .catch((err) => {
    // TODO: Use boom to create a custom err
    next(err);
  });
});
