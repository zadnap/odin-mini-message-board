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

const renderIndex = (req, res) => {
  res.render('index', { title: 'Mini Message Board', messages });
};

module.exports = { renderIndex };
