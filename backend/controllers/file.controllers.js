const multer = require('multer')


const { roomStorage } = require('../middlewares/multer')

const upload = multer({ storage: roomStorage })


module.exports.uploadFile = async (req, res) => {

    upload.single('img')(req, res, function (err) {

        if (err instanceof multer.MulterError) {
            return res.status(401).send(err)
        } else if (err) {
            return res.status(401).send(err)
        }
        console.log(req.body.name)
        return res.status(201).send(req.file.filename)
    })
}