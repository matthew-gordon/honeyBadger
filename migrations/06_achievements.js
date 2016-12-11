'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('achievements', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.string('image_url').notNullable().defaultTo('');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('achievements');

};
