'use strict';

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('badges').del()
    .then(() => {
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
          name: "HTML Silver 1",
          badge_image_id: 2
        }),
        knex('badges').insert({
          id: 4,
          name: "HTML Silver 2",
          badge_image_id: 2
        }),
        knex('badges').insert({
          id: 5,
          name: "HTML Silver 3",
          badge_image_id: 2
        }),
        knex('badges').insert({
          id: 6,
          name: "HTML Gold 1",
          badge_image_id: 3
        }),
        knex('badges').insert({
          id: 7,
          name: "HTML Gold 2",
          badge_image_id: 3
        }),knex('badges').insert({
          id: 8,
          name: "Javascript Bronze 1",
          badge_image_id: 4
        }),
        knex('badges').insert({
          id: 9,
          name: "Javascript Bronze 2",
          badge_image_id: 4
        }),
        knex('badges').insert({
          id: 10,
          name: "Javascript Silver 1",
          badge_image_id: 5
        }),
        knex('badges').insert({
          id: 11,
          name: "Javascript Silver 2",
          badge_image_id: 5
        }),
        knex('badges').insert({
          id: 12,
          name: "Javascript Silver 3",
          badge_image_id: 5
        }),
        knex('badges').insert({
          id: 13,
          name: "Javascript Gold 1",
          badge_image_id: 6
        }),
        knex('badges').insert({
          id: 14,
          name: "Javascript Gold 2",
          badge_image_id: 6
        }),knex('badges').insert({
          id: 15,
          name: "Postgres Bronze 1",
          badge_image_id: 7
        }),
        knex('badges').insert({
          id: 16,
          name: "Postgres Bronze 2",
          badge_image_id: 7
        }),
        knex('badges').insert({
          id: 17,
          name: "Postgres Silver 1",
          badge_image_id: 8
        }),
        knex('badges').insert({
          id: 18,
          name: "Postgres Silver 2",
          badge_image_id: 8
        }),
        knex('badges').insert({
          id: 19,
          name: "Postgres Silver 3",
          badge_image_id: 8
        }),
        knex('badges').insert({
          id: 20,
          name: "Postgres Gold 1",
          badge_image_id: 9
        }),
        knex('badges').insert({
          id: 21,
          name: "Postgres Gold 2",
          badge_image_id: 9
        }),
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('badges_id_seq', (SELECT MAX(id) FROM badges))");
    });
};
