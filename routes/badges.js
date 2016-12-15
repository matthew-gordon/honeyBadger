'use strict';

const express = require('express');
const knex = require('../knex');
const route = express.Router();
const auth = require('../auth/verification');

const {
    camelizeKeys,
    decamelizeKeys
} = require('humps');

const boom = require('boom');


//from user id get all info related to selected user
route.get('/badges/:userid', auth, (req, res, next) => {
    if (isNaN(req.params.userid)) {
        // TODO: Use boom to create a custom err
        return next();
    }
    knex.select(['users.name as userName', 'tracks.name as trackName', 'badges.name as badgeName', 'tracks_badges.position as badgeTrackPosition', 'users_badges.is_complete as badgeComplete', 'badge_images.complete_icon_url as badgeCompleteLocation', 'badge_images.incomplete_icon_url as badgeIncompleteLocation', 'badges.id as badgeId']).from('users')
        .where('users.github_id', req.params.userid)
        .join('users_badges', 'users.github_id', 'users_badges.user_id')
        .join('badges', 'badges.id', 'users_badges.badge_id')
        .join('badge_images', 'badge_images.id', 'badges.badge_image_id')
        .join('tracks_badges', 'tracks_badges.badge_id', 'badges.id')
        .join('tracks', 'tracks.id', 'tracks_badges.track_id')
        .orderBy('trackName')
        .orderBy('tracks_badges.position')
        .then((badges) => {
            if (!badges) {
                // TODO: Use boom to create a custom err
                return next();
            }
            res.send(badges);
        })
        .catch((err) => {
            // TODO: Use boom to create a custom err
            next(err);
        });
});

// make a new badge!
route.post('/badges', auth, (req, res, next) => {
    const decamelBadges = decamelizeKeys(req.body);
    knex('badges')
        .where('name', req.body.name)
        .first()
        .then((results) => {
            if (!results) {
                knex('badges')
                    .insert({
                        user_id: decamelBadges.user_id,
                        name: decamelBadges.name,
                        badge_image_id: decamelBadges.badge_image_id,
                        is_complete: decamelBadges.is_complete
                    }, '*')
                    .then((badges) => {
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
