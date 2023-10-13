const { createBooking } = require('../controllers/booking.controllers');
const { getuser, createUser, loginUser } = require('../controllers/user.controllers');

const router = require('express').Router();

router.get('/', getuser);
router.post('/', createBooking);
module.exports = router;