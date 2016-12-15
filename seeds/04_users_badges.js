'use strict';

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('users_badges').del()
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('users_badges').insert({
          id: 1,
          user_id: 8294530,
          badge_id: 1,
          is_complete: true
        }),
        knex('users_badges').insert({
          id: 2,
          user_id: 8294530,
          badge_id: 2,
          is_complete: true
        }),
        knex('users_badges').insert({
          id: 3,
          user_id: 8294530,
          badge_id: 3,
          is_complete: true
        }),
        knex('users_badges').insert({
          id: 4,
          user_id: 8294530,
          badge_id: 4,
          is_complete: true
        }),
        knex('users_badges').insert({
          id: 5,
          user_id: 8294530,
          badge_id: 5,
          is_complete: true
        }),
        knex('users_badges').insert({
          id: 6,
          user_id: 8294530,
          badge_id: 6,
          is_complete: true
        }),
        knex('users_badges').insert({
          id: 7,
          user_id: 8294530,
          badge_id: 7,
          is_complete: true
        }),
        knex('users_badges').insert({
          id: 8,
          user_id: 8294530,
          badge_id: 8,
          is_complete: true
        }),
        knex('users_badges').insert({
          id: 9,
          user_id: 8294530,
          badge_id: 9,
          is_complete: true
        }),
        knex('users_badges').insert({
          id: 10,
          user_id: 8294530,
          badge_id: 10,
          is_complete: true
        }),
        knex('users_badges').insert({
          id: 11,
          user_id: 8294530,
          badge_id: 11,
          is_complete: true
        }),
        knex('users_badges').insert({
          id: 12,
          user_id: 8294530,
          badge_id: 12,
          is_complete: true
        }),
        knex('users_badges').insert({
          id: 13,
          user_id: 8294530,
          badge_id: 13,
          is_complete: true
        }),
        knex('users_badges').insert({
          id: 14,
          user_id: 8294530,
          badge_id: 14,
          is_complete: true
        }),
        knex('users_badges').insert({
          id: 15,
          user_id: 8294530,
          badge_id: 15,
          is_complete: true
        }),
        knex('users_badges').insert({
          id: 16,
          user_id: 8294530,
          badge_id: 16,
          is_complete: true
        }),
        knex('users_badges').insert({
          id: 17,
          user_id: 8294530,
          badge_id: 17,
          is_complete: true
        }),
        knex('users_badges').insert({
          id: 18,
          user_id: 8294530,
          badge_id: 18,
          is_complete: true
        }),
        knex('users_badges').insert({
          id: 19,
          user_id: 8294530,
          badge_id: 19,
          is_complete: true
        }),
        knex('users_badges').insert({
          id: 20,
          user_id: 8294530,
          badge_id: 20,
          is_complete: true
        }),
        knex('users_badges').insert({
          id: 21,
          user_id: 8294530,
          badge_id: 21,
          is_complete: true
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('users_badges_id_seq', (SELECT MAX(id) FROM users_badges))");
    });
};
