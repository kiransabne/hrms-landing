const devUrl = "mongodb://localhost:27017";
const prodUrl = "mongodb://localhost:27017";

const {Pool, Client} = require('pg');

const pool = new Pool({
  user: 'kiran',
  host: 'localhost',
  database: 'hrms_app',
  password: 'newpassword',
  port: 5432,

});

module.exports = {devUrl, prodUrl, pool};
