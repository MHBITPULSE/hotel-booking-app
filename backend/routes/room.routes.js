const { getRooms, createRoom } = require('../controllers/room.controllers');

const router = require('express').Router();

router.get('/', getRooms);
router.post('/', createRoom);
module.exports = router;