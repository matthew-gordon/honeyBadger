'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('table_name').insert({
          id: 1,
          colName: 'rowValue1'
        })
      ]);
    });
};
