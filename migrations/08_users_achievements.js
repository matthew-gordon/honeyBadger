'use strict';
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_achievements', (table) => {
    table.increments();
    table.integer('user_id').notNullable().references('github_id').inTable('users').onDelete('CASCADE');
    table.integer('achievement_id').notNullable().references('id').inTable('achievements').onDelete('CASCADE');
    table.boolean('is_complete').notNullable().defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_achievements');
};
