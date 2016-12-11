'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('badges', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.integer('badge_image_id').notNullable().references('id').inTable('badge_images').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('badges');
};
