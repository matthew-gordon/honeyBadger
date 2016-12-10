'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          id: 1,
          name: 'Bill Murray',
          email: 'billmurray@caddyshack.com',
          is_admin: true
        }),
        knex('users').insert({
          id: 2,
          name: 'Peter Venkman',
          email: 'peter@ghostbusters.com',
          is_admin: false
        }),
      ]);
    })
    .then(function() {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))");
    });
};
