const { uploadFile, downloadFile } = require('../controllers/file.controllers');

const router = require('express').Router();

//router.get('/', getFile);
router.post('/', uploadFile);
router.get('/', downloadFile);
module.exports = router;