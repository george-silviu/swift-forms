const { Pool } = require("pg");

const connectionString = process.env.POSTGRES_URL;

//using a pool of connection instead of client because it scales better when more clients are connected
const pool = new Pool({
  connectionString,
});

async function connectToDatabase() {}

module.exports = { pool };
