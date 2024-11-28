const { Pool } = require("pg");

const connectionString = process.env.POSTGRES_URL;

//using a pool of connection instead of client because it scales better when more clients are connected
const pool = new Pool({
  connectionString,
});

async function connectToDatabase() {
  try {
    const client = await pool.connect();
    await client.query(`SELECT NOW();`);
    client.release();
    console.log(`Postgresql database has successfully connected!`);
  } catch (error) {
    console.error(error);
    throw new Error(`Postgresql database failed to connect!`);
  }
}

module.exports = { pool, connectToDatabase };
