'use strict';

const express = require('express');
// is this supposed to be require('../knex')??
const knex = require('knex');
const route = express.Router();
const {
  camelizeKeys,
  decamelizeKeys
  } = require('humps');
const boom = require('boom');

//get all badges
route.get('/badges', (req, res, next) =>{
  knex('badges')
  //TODO: depending we might want to change how its ordered
  .orderBy('id')
  .then((badges) => {
    const camelBadges = camelizeKeys(badges);
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
    const camelBadge = camelizeKeys(badge);
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
  const decamelBadges = decamelizeKeys(req.body);
  const badgeObj = {
    //TODO: need to know what the migration looks like
  };
  knex('badges')
  .insert(badgeObj,// TODO: ^^^
[])
  .then((badge) => {
    res.set('Content-Type', 'application/json');
    res.send(camelizeKeys(badge[0]));
  })
  .catch((err) => {
    // TODO: Use boom to create a custom err
    next(err);
  });
});

//update one badge!
route.patch('/badges/:id', (req, res, next) => {
  const decamelBadges = decamelizeKeys(req.body);
  knex('badges')
  .where('id', req.params.id)
  .first()
  .then((badge) => {
    if(!badge){
      // TODO: Use boom to create a custom err
      return next();
    }
    return knex('badges')
    .update({
      // TODO: need to see migration/db to fill out


    }, '*')
    .where('id', req.params.id);
  })
  .then((badge) => {
    res.send(camelizeKeys(badge[0]));
  })
  .catch((err) => {
    next(boom.create(404, "Not Found"));
  });
});

//delete a badge
route.delete('/badges/:id', (req, res, next) => {
  let badge;
  knex('badges')
  .where('id', req.params.id)
  .first()
  .then((row) => {
    if(!row) {
      // TODO: Use boom to create a custom err
      return next();
    }
    badge = row;
    return knex('badges')
    .del()
    .where('id', req.params.id);
  })
  .then(() => {
    delete badge.id;
    res.send(camelizeKeys(badge));
  })
  .catch((err) => {
    next(boom.create(404, "Not Found"));
  });
});

module.exports = route;
