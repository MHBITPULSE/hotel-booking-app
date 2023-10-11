const { uploadFile } = require('../controllers/file.controllers');

const router = require('express').Router();

//router.get('/', getFile);
router.post('/', uploadFile);
module.exports = router;