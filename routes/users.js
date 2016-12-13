'use strict';

const auth = require('../auth/verification');
const express = require('express');
const knex = require('../knex');
const boom = require('boom');
const {
    camelizeKeys,
    decamelizeKeys
} = require('humps');
const route = express.Router();

//route to get all user information
route.get('/users', auth,(req, res, next) => {
    knex('users')
        .orderBy('github_id')
        .then((users) => {
            const camelUsers = camelizeKeys(users);
            res.send(camelUsers);
        })
        .catch((err) => {
            // TODO: Use boom to create a custom err
            next(err);
        });
});

route.get('/users/current', auth, (req, res, next) => {
  res.send(req.user);
});

//route to get a specfic users
route.get('/users/:id', auth, (req, res, next) => {
    //TODO: find max id and make sure `${id}` < max id in db
    if (isNaN(req.params.id)) {
        //TODO:use boom to create a custom error
        return next();
    }
    knex('users')
        .where('id', req.params.id)
        .first()
        .then((user) => {
            if (!user) {
                // TODO: Use boom to create a custom err
                return next();
            }
            const camelUser = camelizeKeys(user);
            // res.set('content-type', 'application/json');
            res.send(camelUser);
        })
        .catch((err) => {
            // TODO: Use boom to create a custom err
            next(err);
        });
});

//route to add an user with a hashed password
route.post('/users', auth, (req, res, next) => {

    const decamelBadges = decamelizeKeys(req.body);
    // var hash = bcrypt.hashSync(req.body.password, 8);
    knex('users')
        .where('email', req.body.email)
        .first()
        .then((results) => {
            if (!results) {
                knex('users')
                    .insert({
                        email: decamelBadges.email,
                        is_admin: decamelBadges.is_admin,
                        name: decamelBadges.name
                    }, ['id', 'email', 'is_admin'])
                    .then((users) => {

                      res.set('Content-Type', 'text/plain');
                      res.send(`${users[0].email} successfully created`);
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

//Update one user!!!
route.patch('/users/:id', auth, (req, res, next) => {
    const decamelUsers = decamelizeKeys(req.body);
    knex('users')
        .where('id', req.params.id)
        .first()
        .then((user) => {
            if (!user) {
                // TODO: Use boom to create a custom err
                next();
            }
            return knex('users')
                .update({
                    name: decamelUsers.name,
                    email: decamelUsers.email,
                    is_admin: decamelUsers.isAdmin
                }, '*')
                .where('id', req.params.id);
        })
        .then((users) => {
            res.send(camelizeKeys(users[0]));
        })
        .catch((err) => {
            next(boom.create(404, "Not Found"));
        });
});

route.delete('/users/:id', auth, (req, res, next) => {
    let user;
    knex('users')
        .where('id', req.params.id)
        .first()
        .then((row) => {
            if (!row) {
                return next();
            }
            user = row;
            return knex('users')
                .del()
                .where('id', req.params.id);
        })
        .then(() => {
            delete user.id;
            res.send(camelizeKeys(user));
        })
        .catch((err) => {
            next(boom.create(404, "Not Found"));
        });
});

module.exports = route;
