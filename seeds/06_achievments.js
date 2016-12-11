'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('achievements').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('achievements').insert({
          id: 1,
          name: 'You can make a website!',
          image_url: 'website/achievment/location.img'
        })
      ]);
    })
    .then(function() {
      return knex.raw("SELECT setval('achievements_id_seq', (SELECT MAX(id) FROM achievements))");
    });
};
