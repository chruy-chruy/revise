const { Pool } = require("pg");

const db = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "Troy1116",
  database: "lougeh",
});

module.exports = db;