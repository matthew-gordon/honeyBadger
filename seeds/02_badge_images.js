'use strict';

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('badge_images').del()
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('badge_images').insert({
          id: 1,
          complete_icon_url: '/img/htmlbronze.svg',
          incomplete_icon_url: '/img/htmlbadge.svg'
        }),
        knex('badge_images').insert({
          id: 2,
          complete_icon_url: '/img/htmlsilver.svg',
          incomplete_icon_url: '/img/htmlbadge.svg'
        }),
        knex('badge_images').insert({
          id: 3,
          complete_icon_url: '/img/htmlgold.svg',
          incomplete_icon_url: '/img/htmlbadge.svg'
        })
      ]);
    })
    .then(() => {
          return knex.raw("SELECT setval('badge_images_id_seq', (SELECT MAX(id) FROM badge_images))");
        });
};
