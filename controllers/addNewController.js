const db = require('../db/queries');

const getMessageForm = (req, res) => {
  res.render('form');
};

const postMessage = async (req, res) => {
  const { messageText, usernameText } = req.body;
  await db.addNewMessage(usernameText, messageText);
  res.redirect('/');
};

module.exports = { getMessageForm, postMessage };
