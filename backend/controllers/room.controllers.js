const db = require('../models');
const Room = db.sequelize.models.room

const multer = require('multer')
const { roomStorage } = require('../middlewares/multer')
const upload = multer({ storage: roomStorage })

const { Op } = require("sequelize");


module.exports.getRooms = async (req, res) => {
    const rooms = await Room.findAll({ order: [['price', 'DESC']] })
    if (rooms) return res.status(200).send(rooms)
    return res.status(400).send("No room found! Create One")
}

module.exports.getRoomById = async (req, res) => {
    console.log(req.params)
    const rooms = await Room.findByPk(req.params.id)
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
        req.body.hasTv === true ?
            filter.hasTv = true : filter.hasTv = false

    if (Object.hasOwn(req.body, 'hasButhTub'))
        req.body.hasButhTub === true ?
            filter.hasButhTub = true : filter.hasButhTub = false

    if (Object.hasOwn(req.body, 'hasBalcony'))
        req.body.hasBalcony === true ?
            filter.hasBalcony = true : filter.hasBalcony = false

    if (Object.hasOwn(req.body, 'hasDressingTable'))
        req.body.hasDressingTable === true ?
            filter.hasDressingTable = true : filter.hasDressingTable = false

    if (Object.hasOwn(req.body, 'hasLocker'))
        req.body.hasLocker === true ?
            filter.hasLocker = true : filter.hasLocker = false

    if (Object.hasOwn(req.body, 'hasFridge'))
        req.body.hasFridge === true ?
            filter.hasFridge = true : filter.hasFridge = false


    const rooms = await Room.findAll({ where: filter })
    if (rooms) return res.status(200).send(rooms)
    return res.status(400).send("No room found!")
}


