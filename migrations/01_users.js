'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.string('email').notNullable().defaultTo('');
    table.boolean('is_admin').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
