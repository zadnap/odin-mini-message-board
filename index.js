const express = require('express');
const path = require('node:path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

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

app.get('/', (req, res) => {
  res.render('index', { title: 'Mini Message Board', messages });
});
app.get('/new', (req, res) => {
  res.render('form');
});
app.post('/new', (req, res) => {
  messages.push({
    id: messages[messages.length - 1].id + 1,
    text: req.body.messageText,
    user: req.body.usernameText,
    added: new Date(),
  });
  res.redirect('/');
});
app.get('/message/:id', (req, res) => {
  res.render('message', {
    msg: messages.find((msg) => msg.id === Number(req.params.id)),
  });
});

const PORT = 8000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Express app is listening on port ${PORT}!`);
});
