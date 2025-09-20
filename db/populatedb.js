const dotenv = require('dotenv');

dotenv.config();

const { Client } = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  msg TEXT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (username, msg) 
VALUES
  ('Bryan', 'Hello, World!'),
  ('Odin', 'Wish you all the best!');
`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=require`,
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
