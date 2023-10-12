const db = require('../models');
const Room = db.sequelize.models.room

const multer = require('multer')
const { roomStorage } = require('../middlewares/multer')
const upload = multer({ storage: roomStorage })

const { Op } = require("sequelize");


module.exports.getRooms = async (req, res) => {
    const rooms = await Room.findAll()
    if (rooms) return res.status(200).send(rooms)
    return res.status(400).send("No room found! Create One")
}

module.exports.createRoom = async (req, res) => {


    upload.single('image')(req, res, async function (err) {
        console.log(req)
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

module.exports.filterRooms = async (req, res) => {
    let filter = {}

    if (Object.hasOwn(req.body, 'priceGt'))
        filter.price = {
            [Op.between]: [req.body.priceGt, req.body.priceLt],
        }
    if (Object.hasOwn(req.body, 'sizeGt'))
        filter.size = {
            [Op.gte]: req.body.sizeGt
        }
    if (Object.hasOwn(req.body, 'hasTv'))
        filter.hasTv = true

    if (Object.hasOwn(req.body, 'hasButhTub'))
        filter.hasTv = true

    if (Object.hasOwn(req.body, 'TV'))
        filter.hasTv = true
    if (Object.hasOwn(req.body, 'TV'))
        filter.hasTv = true

    const rooms = await Room.findAll({
        where: {
            size: {

            },
            price: {

            }
        }
    })
    if (rooms) return res.status(200).send(rooms)
    return res.status(400).send("No room found! Create One")
}


