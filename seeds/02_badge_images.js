'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('badge_images').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('badge_images').insert({
          id: 1,
          complete_icon_url: 'complete_location_1',
          incomplete_icon_url: 'incomplete_location_1'
        })
      ]);
    })
    .then(function() {
          return knex.raw("SELECT setval('badge_images_id_seq', (SELECT MAX(id) FROM badge_images))");
        });
};
