'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('badges').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('badges').insert({
          id: 1,
          name: "Badge 1",
          badge_image_id: 1,
          is_complete: false
        })
      ]);
    })
    .then(function() {
      return knex.raw("SELECT setval('badges_id_seq', (SELECT MAX(id) FROM badges))");
    });
};
