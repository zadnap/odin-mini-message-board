const messages = [
  {
    id: 1,
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    id: 2,
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

const getMessageForm = (req, res) => {
  res.render('form');
};

const postMessage = (req, res) => {
  messages.push({
    id: messages[messages.length - 1].id + 1,
    text: req.body.messageText,
    user: req.body.usernameText,
    added: new Date(),
  });
  res.redirect('/');
};

const getDetailedMessage = (req, res) => {
  res.render('message', {
    msg: messages.find((msg) => msg.id === Number(req.params.id)),
  });
};

module.exports = { getMessageForm, postMessage, getDetailedMessage };
