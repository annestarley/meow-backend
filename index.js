'use strict';

const env = 'development';
const config = require('./knexfile')[env];
const knex = require('knex')(config);

const sql = knex('meow').toString();

console.log(sql);

knex.destroy();
