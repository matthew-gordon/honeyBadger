'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_badges').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users_badges').insert({
          id: 1,
          user_id: 8294530,
          badge_id: 1,
          is_complete: false
        }),
        knex('users_badges').insert({
          id: 2,
          user_id: 8294530,
          badge_id: 2,
          is_complete: false
        }),
        knex('users_badges').insert({
          id: 3,
          user_id: 8294530,
          badge_id: 3,
          is_complete: false
        }),
        knex('users_badges').insert({
          id: 4,
          user_id: 8294530,
          badge_id: 4,
          is_complete: false
        }),
        knex('users_badges').insert({
          id: 5,
          user_id: 8294530,
          badge_id: 5,
          is_complete: false
        }),
        knex('users_badges').insert({
          id: 6,
          user_id: 8294530,
          badge_id: 6,
          is_complete: false
        }),
        knex('users_badges').insert({
          id: 7,
          user_id: 8294530,
          badge_id: 7,
          is_complete: false
        }),
        knex('users_badges').insert({
          id: 8,
          user_id: 8294530,
          badge_id: 8,
          is_complete: false
        }),
        knex('users_badges').insert({
          id: 9,
          user_id: 8294530,
          badge_id: 9,
          is_complete: false
        }),
        knex('users_badges').insert({
          id: 10,
          user_id: 8294530,
          badge_id: 10,
          is_complete: false
        })
      ]);
    })
    .then(function() {
      return knex.raw("SELECT setval('users_badges_id_seq', (SELECT MAX(id) FROM users_badges))");
    });
};
