'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_badges').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users_badges').insert({
          id: 1,
          user_id: 2,
          badge_id: 1
        })
      ]);
    })
    .then(function() {
      return knex.raw("SELECT setval('users_badges_id_seq', (SELECT MAX(id) FROM users_badges))");
    });
};
