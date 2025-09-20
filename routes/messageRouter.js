const { Router } = require('express');
const {
  getMessageForm,
  postMessage,
  getDetailedMessage,
} = require('../controllers/messageController');

const messageRouter = Router();

messageRouter.get('/', getMessageForm);
messageRouter.post('/', postMessage);
messageRouter.get('/:id', getDetailedMessage);

module.exports = messageRouter;
