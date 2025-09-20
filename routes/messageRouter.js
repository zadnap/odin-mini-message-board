const { Router } = require('express');
const { getDetailedMessage } = require('../controllers/messageController');

const messageRouter = Router();

messageRouter.get('/:id', getDetailedMessage);

module.exports = messageRouter;
