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

//Update all badges!!!
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
