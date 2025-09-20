const express = require('express');
const path = require('node:path');
const indexRouter = require('./routes/indexRouter');
const messageRouter = require('./routes/messageRouter');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/new', messageRouter);

const PORT = 8000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Express app is listening on port ${PORT}!`);
});
