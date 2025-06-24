const {
    createMessage,
    getMessage,
    getAllMessages,
    updateMessage,
} = require('./../controllers/Message.controller');
const express = require('express');

const router = express.Router();

router.post('/', createMessage);
router.get('/', getAllMessages);
// router.delete('/', somthing)
router.get('/:id', getMessage);
router.patch('/:id', updateMessage);

// router.route('/').post(createMessage).get(getAllMessages).delete(somthing);
// router.route('/:id').get(getMessage).patch(updateMessage)

module.exports = router;