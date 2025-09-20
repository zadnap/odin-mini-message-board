const db = require('../db/queries');

const getDetailedMessage = async (req, res) => {
  const msg = await db.getMessage(req.params.id);

  res.render('message', { msg });
};

module.exports = { getDetailedMessage };
