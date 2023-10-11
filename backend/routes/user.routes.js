const { getuser, createUser, loginUser } = require('../controllers/user.controllers');

const router = require('express').Router();

router.get('/', getuser);
router.post('/signup', createUser);
router.post('/login', loginUser);
module.exports = router;