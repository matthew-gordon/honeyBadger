'use strict';

const express = require('express');
const knex = require('../knex');
const route = express.Router();
const auth = require('../auth/verification');

const { camelizeKeys, decamelizeKeys } = require('humps');

const boom = require('boom');

route.get('/achievements', auth, (req, res, next) => {
  knex('achievements')
    .orderBy('track_id')
    .orderBy('id')
    .then((achievements) => {
      const camelAchievements = camelizeKeys(achievements);
      res.send(camelAchievements);
    })
    .catch((err) => {
      // TODO: Use boom to create a custom err
      next(err);
    });
});


// make a new badge!
route.post('/achievements', auth, (req, res, next) => {
  console.log(req.body);
  const decamelAchievements = decamelizeKeys(req.body);
  knex('achievements')
    .where('name', req.body.name)
    .first()
    .then((row) => {
      if (!row) {
        return knex('achievements')
          .insert({
            name: decamelAchievements.name,
            image_url: decamelAchievements.image_url,
            track_id: decamelAchievements.track_id
          }, '*')
          .then((achievement) => {
            console.log(achievement);
            res.send(`${achievement[0].name} successfully created`);
          })
          .catch((err) => {
            // TODO: Use boom to create a custom err
            next(err);
          });
      } else {
        res.status(400).send('Achievement already exists');
      }

    });
});

//update one badge!
route.patch('/achievements/:id', auth, (req, res, next) => {
  const decamelAchievements = decamelizeKeys(req.body);
  knex('achievements')
    .where('id', req.params.id)
    .first()
    .then((row) => {
      if (!row) {
        // TODO: Use boom to create a custom err
        return next();
      }
      return knex('achievements')
        .update({
          id: decamelAchievements.id,
          name: decamelAchievements.name,
          image_url: decamelAchievements.image_url,
          track_id: decamelAchievements.track_id
        }, '*')
        .where('id', req.params.id);
    })
    .then((achievement) => {
      res.send(camelizeKeys(achievement[0]));
    })
    .catch((err) => {
      next(boom.create(404, "Not Found"));
    });
});

//delete a badge
route.delete('/achievements/:id', auth, (req, res, next) => {
  let delAchievement;
  knex('achievements')
    .where('id', req.params.id)
    .first()
    .then((row) => {
      if (!row) {
        // TODO: Use boom to create a custom err
        return next();
      }
      delAchievement = row;
      return knex('achievements')
        .del()
        .where('id', req.params.id);
    })
    .then(() => {
      delete delAchievement.id;
      res.send(camelizeKeys(delAchievement));
    })
    .catch((err) => {
      next(boom.create(404, "Not Found"));
    });
});

module.exports = route;
