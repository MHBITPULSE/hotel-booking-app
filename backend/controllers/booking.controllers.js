const db = require('../models');
const Booking = db.sequelize.models.booking
const Room = db.sequelize.models.room

var jwt = require('jsonwebtoken');

module.exports.getBookingDetails = (req, res) => {
    res.send("I am User")
}

module.exports.createBooking = async (req, res) => {
    const booking = await Booking.create(req.body)
        .then(async (response) => {
            await Room.increment({ booked: 1 }, { where: { id: req.body.roomId } })
                .then(response => {
                    return res.status(201).send("Booking Created")
                })
        })
}

