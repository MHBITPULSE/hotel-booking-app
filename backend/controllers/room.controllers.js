const db = require('../models');
const Room = db.sequelize.models.room


module.exports.getRooms = async (req, res) => {
    const rooms = await Room.findAll()
    if (rooms) return res.status(200).send(rooms)
    return res.status(400).send("No room found! Create One")
}

module.exports.createRoom = async (req, res) => {
    const room = await Room.create(req.body)
    if (room) return res.status(201).send("Room Created")
    else return res.status(400).send("Room not Created, something wrong")
}

