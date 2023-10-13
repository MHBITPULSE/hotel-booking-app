const useBcrypt = require('sequelize-bcrypt');
module.exports = (sequelize, DataTypes) => {
    const Booking = sequelize.define('booking', {
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    Booking.associate = (models) => {
        Booking.belongsTo(models.user);
        Booking.belongsTo(models.room);
    };
    return Booking;
};