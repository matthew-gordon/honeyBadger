'use strict';

const express = require('express');
const knex = require('../knex');
const route = express.Router();
const auth = require('../auth/verification');

const { camelizeKeys, decamelizeKeys } = require('humps');

const boom = require('boom');

route.get('/achievements', (req, res, next) => {
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
route.post('/authentication', auth, (req, res, next) => {
  const decamelAchievements = decamelizeKeys(req.body);
  console.log(decamelAchievements);
  knex('achievements')
    .where('name', req.body.id)
    .first()
    .then((results) => {
      if (!results) {
        console.log(results);
        knex('badges')
          .insert({
            id: decamelAchievements.id,
            name: decamelAchievements.name,
            image_url: decamelAchievementscamel.image_url,
            is_complete: decamelAchievements.is_complete
          }, '*')
          .then((badges) => {
            console.log(badges);
            res.set('Content-Type', 'text/plain');
            res.send(`${badges[0].name} successfully created`);
          })
          .catch((err) => {
            // TODO: Use boom to create a custom err
            next(err);
          });
      } else {
        res.status(400).send('User already exists');
      }

    });
});

//update one badge!
route.patch('/badges/:id', auth, (req, res, next) => {
  const decamelBadges = decamelizeKeys(req.body);
  knex('badges')
    .where('id', req.params.id)
    .first()
    .then((badge) => {
      if (!badge) {
        // TODO: Use boom to create a custom err
        return next();
      }
      return knex('badges')
        .update({
            user_id: decamelBadges.user_id,
            name: decamelBadges.name,
            badge_image_id: decamelBadges.badge_image_id,
            is_complete: decamelBadges.is_complete
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
route.delete('/badges/:id', auth, (req, res, next) => {
    let badge;
    knex('badges')
        .where('id', req.params.id)
        .first()
        .then((row) => {
            if (!row) {
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
