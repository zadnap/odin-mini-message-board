const { Router } = require('express');
const {
  getMessageForm,
  postMessage,
} = require('../controllers/addNewController');

const messageRouter = Router();

messageRouter.get('/', getMessageForm);
messageRouter.post('/', postMessage);

module.exports = messageRouter;
