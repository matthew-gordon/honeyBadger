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
        }),
        knex('badge_images').insert({
          id: 4,
          complete_icon_url: '/img/cssbronze.svg',
          incomplete_icon_url: '/img/cssbadge.svg'
        }),
        knex('badge_images').insert({
          id: 5,
          complete_icon_url: '/img/csssilver.svg',
          incomplete_icon_url: '/img/cssbadge.svg'
        }),
        knex('badge_images').insert({
          id: 6,
          complete_icon_url: '/img/cssgold.svg',
          incomplete_icon_url: '/img/cssbadge.svg'
        }),
        knex('badge_images').insert({
          id: 7,
          complete_icon_url: '/img/dbbronze.svg',
          incomplete_icon_url: '/img/dbbadge.svg'
        }),
        knex('badge_images').insert({
          id: 8,
          complete_icon_url: '/img/dbsilver.svg',
          incomplete_icon_url: '/img/dbbadge.svg'
        }),
        knex('badge_images').insert({
          id: 9,
          complete_icon_url: '/img/dbgold.svg',
          incomplete_icon_url: '/img/dbbadge.svg'
        })
      ]);
    })
    .then(() => {
          return knex.raw("SELECT setval('badge_images_id_seq', (SELECT MAX(id) FROM badge_images))");
        });
};
