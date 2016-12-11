'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tracks').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('tracks').insert({
          id: 1,
          name: 'HTML/CSS'
        })
      ]);
    })
    .then(function() {
      return knex.raw("SELECT setval('tracks_id_seq', (SELECT MAX(id) FROM tracks))");
    });;
};
