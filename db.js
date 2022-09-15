const { Pool } = require("pg");
require('dotenv').config()
const db = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  port: process.env.PORT,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

module.exports = db;