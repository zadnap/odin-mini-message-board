const db = require('../db/queries');

const renderIndex = async (req, res) => {
  const messages = await db.getAllMessages();

  res.render('index', {
    title: 'Mini Message Board',
    messages,
  });
};

module.exports = { renderIndex };
