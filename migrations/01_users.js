'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.integer('github_id').unique().notNullable();
    table.string('name').notNullable().defaultTo('');
    table.boolean('is_admin').defaultTo(false);
    table.string('gh_avatar_url').defaultTo('');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
