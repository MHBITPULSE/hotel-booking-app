const db = require('../models');
const Room = db.sequelize.models.room

const multer = require('multer')
const { roomStorage } = require('../middlewares/multer')
const upload = multer({ storage: roomStorage })


module.exports.getRooms = async (req, res) => {
    const rooms = await Room.findAll()
    if (rooms) return res.status(200).send(rooms)
    return res.status(400).send("No room found! Create One")
}

module.exports.createRoom = async (req, res) => {

    upload.single('image')(req, res, async function (err) {

        if (err instanceof multer.MulterError) {
            return res.status(401).send(err)
        } else if (err) {
            return res.status(401).send(err)
        }
        const room = await Room.create(req.body)
        room.image = req.file.filename;
        await room.save();
        return res.status(201).send(room)
    })
}


