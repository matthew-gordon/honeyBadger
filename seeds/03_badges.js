'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('badges').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('badges').insert({
          id: 1,
          name: "HTML Bronze 1",
          badge_image_id: 1
        }),
        knex('badges').insert({
          id: 2,
          name: "HTML Bronze 2",
          badge_image_id: 1
        }),
        knex('badges').insert({
          id: 3,
          name: "HTML Bronze 3",
          badge_image_id: 1
        }),
        knex('badges').insert({
          id: 4,
          name: "HTML Silver 1",
          badge_image_id: 2
        }),
        knex('badges').insert({
          id: 5,
          name: "HTML Silver 2",
          badge_image_id: 2
        }),
        knex('badges').insert({
          id: 6,
          name: "HTML Silver 3",
          badge_image_id: 2
        }),
        knex('badges').insert({
          id: 7,
          name: "HTML Gold 1",
          badge_image_id: 3
        }),
        knex('badges').insert({
          id: 8,
          name: "HTML Gold 2",
          badge_image_id: 3
        }),
        knex('badges').insert({
          id: 9,
          name: "HTML Gold 3",
          badge_image_id: 3
        }),
        knex('badges').insert({
          id: 10,
          name: "HTML Master Badge",
          badge_image_id: 3
        }),
      ]);
    })
    .then(function() {
      return knex.raw("SELECT setval('badges_id_seq', (SELECT MAX(id) FROM badges))");
    });
};
