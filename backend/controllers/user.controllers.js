const db = require('../models');
const User = db.sequelize.models.user

module.exports.getuser = (req, res) => {
    res.send("I am User")
}

module.exports.createUser = async (req, res) => {
    const user = await User.create(req.body)
        .then(response => res.status(201).send("User Created"))
}