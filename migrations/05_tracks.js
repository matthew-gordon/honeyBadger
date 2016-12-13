'use strict';
exports.up = (knex, Promise) => {
  return knex.schema.createTable('tracks', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('tracks');
};
