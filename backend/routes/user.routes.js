const { getuser, createUser, loginUser, getUserById } = require('../controllers/user.controllers');

const router = require('express').Router();

router.get('/', getuser);
router.get('/:id', getUserById);
router.post('/signup', createUser);
router.post('/login', loginUser);
module.exports = router;