'use strict';

exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', (table) => {
    table.integer('github_id').unique().notNullable();
    table.string('name').notNullable().defaultTo('');
    table.boolean('is_admin').defaultTo(false);
    table.string('gh_avatar_url').defaultTo('');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users');
};
