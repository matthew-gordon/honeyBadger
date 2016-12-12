'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          github_id: 22156327,
          name: 'Kyle-Gray',
          is_admin: true,
          gh_avatar_url: 'https://avatars.githubusercontent.com/u/22156327?v=3'
        }),
        knex('users').insert({
          github_id: 8294530,
          name: 'chansehorton',
          is_admin: false,
          gh_avatar_url: 'https://avatars.githubusercontent.com/u/8294530?v=3'
        }),
      ]);
    })
};
