const useBcrypt = require('sequelize-bcrypt');
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    useBcrypt(User,
        {
            field: 'password', // secret field to hash, default: 'password'
            rounds: 12, // used to generate bcrypt salt, default: 12
            compare: 'authenticate', // method used to compare secrets, default: 'authenticate'
        });

    return User;
};