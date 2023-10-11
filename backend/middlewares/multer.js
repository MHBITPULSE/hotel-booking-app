const multer = require('multer')

const roomStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/room')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1])
    }
})

const imgStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/img')
    },
    filename: function (req, file, cb) {
        console.log(file)
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1])
    }
})

module.exports = {
    roomStorage
}

// module.exports = multer({
//     storage: roomStorage
// }).single('img')
