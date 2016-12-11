'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_achievements').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users_achievements').insert({
          id: 1,
          user_id: 2,
          achievements_id: 1,
          is_complete: false
        })
      ]);
    })
    .then(function() {
      return knex.raw("SELECT setval('users_achievements_id_seq', (SELECT MAX(id) FROM users_achievements))");
    });
};
