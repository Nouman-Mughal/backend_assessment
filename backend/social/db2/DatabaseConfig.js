const environment = 'development';
const config = require('../database/knexfile.js');
const environmentConfig = config[environment];
const knex = require('knex');
const connection = knex(environmentConfig);
module.exports = connection;