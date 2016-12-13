'use strict';
exports.up = (knex, Promise) => {
  return knex.schema.createTable('achievements', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.string('image_url').notNullable().defaultTo('');
    table.integer('track_id').notNullable().references('id').inTable('tracks');
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('achievements');
};
