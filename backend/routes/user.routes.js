const { getuser, createUser } = require('../controllers/user.controllers');

const router = require('express').Router();

router.get('/', getuser);
router.post('/signup', createUser);
module.exports = router;