/*jslint es6 */
const { Pool } = require("pg");

const pool = new Pool({
  database: "texta",
  host: "localhost",
  password: "904793",
  port: 5432,
  user: "postgres",
});

module.exports = pool;
