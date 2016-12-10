'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('badge_images', (table) => {
    table.increments();
    table.string('complete_icon_url').notNullable().defaultTo('');
    table.string('incomplete_icon_url').notNullable().defaultTo('');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('badge_images');
};
