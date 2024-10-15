import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
})

async function runCreateTableScript() {
  try {
    const client = await pool.connect();
    try {
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS shortened_urls (
          id SERIAL PRIMARY KEY,
          long_url TEXT NOT NULL,
          short_code VARCHAR(10) UNIQUE NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `;
      await client.query(createTableQuery);
      console.log('Table created successfully');
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error creating table:', error);
  }
}

runCreateTableScript();