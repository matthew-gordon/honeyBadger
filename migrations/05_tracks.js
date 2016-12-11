'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tracks', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tracks');

};
