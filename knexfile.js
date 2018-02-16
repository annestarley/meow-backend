'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/meow'
  },
  production: {
    client: 'postgresql',
    connection: prcoess.env.DATABASE_URL
  }
};
