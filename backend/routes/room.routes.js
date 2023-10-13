const { getRooms, createRoom, filterRooms, getRoomById } = require('../controllers/room.controllers');

const router = require('express').Router();

router.get('/', getRooms);
router.get('/:id', getRoomById);
router.post('/', createRoom);
router.post('/filter', filterRooms);
module.exports = router;