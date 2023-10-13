const db = require('../models');
const User = db.sequelize.models.user
const Booking = db.sequelize.models.booking
const Room = db.sequelize.models.room

var jwt = require('jsonwebtoken');

module.exports.getuser = (req, res) => {
    res.send("I am User")
}

module.exports.getUserById = async (req, res) => {
    console.log(req.params)
    const user = await User.findByPk(req.params.id, { include: { model: Booking, include: Room } })
    if (user) return res.status(200).send(user)
    return res.status(400).send("No room found! Create One")
}

module.exports.createUser = async (req, res) => {
    const user = await User.create(req.body)
        .then(response => res.status(201).send("User Created"))
}

module.exports.loginUser = async (req, res) => {
    const user = await User.findOne({ where: { phone: req.body.phone } })
    if (!user) return res.status(400).send("Number not found!, please register.")

    if (user.authenticate(req.body.password)) {
        var token = jwt.sign({ id: user.id, name: user.name, phone: user.phone }, 'vdnskjnfvodsjngklewngpoijdvklsn');
        return res.status(200).send(token)
    }
    else return res.status(400).send("Wrong Password")
}