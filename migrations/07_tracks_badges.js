'use strict';

exports.up = (knex, Promise) => {
  return knex.schema.createTable('tracks_badges', (table) => {
    table.increments();
    table.integer('track_id').notNullable().references('id').inTable('tracks').onDelete('CASCADE');
    table.integer('badge_id').notNullable().references('id').inTable('badges').onDelete('CASCADE');
    table.integer('position').notNullable();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('tracks_badges');
};
