const db = require('../models');
const User = db.sequelize.models.user

var jwt = require('jsonwebtoken');

module.exports.getuser = (req, res) => {
    res.send("I am User")
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