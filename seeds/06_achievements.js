'use strict';

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('achievements').del()
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('achievements').insert({
          id: 1,
          name: 'You can make a website!',
          image_url: 'website/achievment/location.img',
          track_id: 1
        }),
        knex('achievements').insert({
          id: 2,
          name: 'You can make a better website!',
          image_url: 'better_website/achievment/location.img',
          track_id: 1
        }),
        knex('achievements').insert({
          id: 3,
          name: 'You can make the best website!',
          image_url: 'best_website/achievment/location.img',
          track_id: 1
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('achievements_id_seq', (SELECT MAX(id) FROM achievements))");
    });
};
