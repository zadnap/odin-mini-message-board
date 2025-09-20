const pool = require('./pool');

const getAllMessages = async () => {
  const { rows } = await pool.query('SELECT * FROM messages');
  return rows;
};

const getMessage = async (id) => {
  const { rows } = await pool.query('SELECT * FROM messages WHERE id = $1', [
    id,
  ]);
  return rows[0] || null;
};

const addNewMessage = async (username, msg) => {
  await pool.query('INSERT INTO messages (username, msg) VALUES ($1, $2)', [
    username,
    msg,
  ]);
};

module.exports = { getAllMessages, getMessage, addNewMessage };
