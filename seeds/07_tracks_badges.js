
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tracks_badges').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('tracks_badges').insert({
          id: 1,
          track_id: 1,
          badge_id: 10,
          position: 1
        }),
        knex('tracks_badges').insert({
          id: 2,
          track_id: 1,
          badge_id: 9,
          position: 2
        }),
        knex('tracks_badges').insert({
          id: 3,
          track_id: 1,
          badge_id: 8,
          position: 3
        }),
        knex('tracks_badges').insert({
          id: 4,
          track_id: 1,
          badge_id: 6,
          position: 4
        }),
        knex('tracks_badges').insert({
          id: 5,
          track_id: 1,
          badge_id: 5,
          position: 5
        }),
        knex('tracks_badges').insert({
          id: 6,
          track_id: 1,
          badge_id: 4,
          position: 6
        }),
        knex('tracks_badges').insert({
          id: 7,
          track_id: 1,
          badge_id: 2,
          position: 7
        }),
        knex('tracks_badges').insert({
          id: 8,
          track_id: 1,
          badge_id: 1,
          position: 8
        }),
      ]);
    })
    .then(function() {
      return knex.raw("SELECT setval('tracks_badges_id_seq', (SELECT MAX(id) FROM tracks_badges))");
    });
};
