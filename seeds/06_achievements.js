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
          image_url: 'public/img/htmlgold.svg',
          track_id: 1
        }),
        knex('achievements').insert({
          id: 2,
          name: 'You can make a better website!',
          image_url: 'public/img/htmlgold.svg',
          track_id: 1
        }),
        knex('achievements').insert({
          id: 3,
          name: 'You can write a for loop!',
          image_url: 'public/img/jsgold.svg',
          track_id: 2
        }),
        knex('achievements').insert({
          id: 4,
          name: 'You can write constructor function!!',
          image_url: 'public/img/jsgold.svg',
          track_id: 2
        }),
        knex('achievements').insert({
          id: 5,
          name: 'You can make a database!',
          image_url: 'public/img/dbgold.svg',
          track_id: 3
        }),
        knex('achievements').insert({
          id: 6,
          name: 'You can use the crud app to talk to your database!',
          image_url: 'public/img/dbgold.svg',
          track_id: 3
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('achievements_id_seq', (SELECT MAX(id) FROM achievements))");
    });
};
