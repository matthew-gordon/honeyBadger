'use strict';
// Update with your config settings.

module.exports = {

  test: {
    client: 'pg',
    connection: 'postgres://localhost/honeyBadger_test'
  },

  development: {
      client: 'pg',
      connection: 'postgres://localhost/honeyBadger_dev'
  }

};
