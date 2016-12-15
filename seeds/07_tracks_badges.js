'use strict';

exports.seed = (knex, Promise) =>{
  // Deletes ALL existing entries
  return knex('tracks_badges').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('tracks_badges').insert({
          id: 1,
          track_id: 1,
          badge_id: 7,
          position: 1
        }),
        knex('tracks_badges').insert({
          id: 2,
          track_id: 1,
          badge_id: 6,
          position: 2
        }),
        knex('tracks_badges').insert({
          id: 3,
          track_id: 1,
          badge_id: 5,
          position: 3
        }),
        knex('tracks_badges').insert({
          id: 4,
          track_id: 1,
          badge_id: 4,
          position: 4
        }),
        knex('tracks_badges').insert({
          id: 5,
          track_id: 1,
          badge_id: 3,
          position: 5
        }),
        knex('tracks_badges').insert({
          id: 6,
          track_id: 1,
          badge_id: 2,
          position: 6
        }),
        knex('tracks_badges').insert({
          id: 7,
          track_id: 1,
          badge_id: 1,
          position: 7
        }),
        knex('tracks_badges').insert({
          id: 8,
          track_id: 2,
          badge_id: 14,
          position: 1
        }),
        knex('tracks_badges').insert({
          id: 9,
          track_id: 2,
          badge_id: 13,
          position: 2
        }),
        knex('tracks_badges').insert({
          id: 10,
          track_id: 2,
          badge_id: 12,
          position: 3
        }),
        knex('tracks_badges').insert({
          id: 11,
          track_id: 2,
          badge_id: 11,
          position: 4
        }),
        knex('tracks_badges').insert({
          id: 12,
          track_id: 2,
          badge_id: 10,
          position: 5
        }),
        knex('tracks_badges').insert({
          id: 13,
          track_id: 2,
          badge_id: 9,
          position: 6
        }),
        knex('tracks_badges').insert({
          id: 14,
          track_id: 2,
          badge_id: 8,
          position: 7
        }),
        knex('tracks_badges').insert({
          id: 15,
          track_id: 3,
          badge_id: 21,
          position: 1
        }),
        knex('tracks_badges').insert({
          id: 16,
          track_id: 3,
          badge_id: 20,
          position: 2
        }),
        knex('tracks_badges').insert({
          id: 17,
          track_id: 3,
          badge_id: 19,
          position: 3
        }),
        knex('tracks_badges').insert({
          id: 18,
          track_id: 3,
          badge_id: 18,
          position: 4
        }),
        knex('tracks_badges').insert({
          id: 19,
          track_id: 3,
          badge_id: 17,
          position: 5
        }),
        knex('tracks_badges').insert({
          id: 20,
          track_id: 3,
          badge_id: 16,
          position: 6
        }),
        knex('tracks_badges').insert({
          id: 21,
          track_id: 3,
          badge_id: 15,
          position: 7
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('tracks_badges_id_seq', (SELECT MAX(id) FROM tracks_badges))");
    });
};
