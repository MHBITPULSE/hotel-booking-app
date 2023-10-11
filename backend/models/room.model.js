module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define('room', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        size: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        hasAc: {
            type: DataTypes.BOOLEAN
        },
        hasTv: {
            type: DataTypes.BOOLEAN
        },
        hasButhTub: {
            type: DataTypes.BOOLEAN
        },
        hasBalcony: {
            type: DataTypes.BOOLEAN
        },
        hasDressingTable: {
            type: DataTypes.BOOLEAN
        },
        hasLocker: {
            type: DataTypes.BOOLEAN
        },
        hasFridge: {
            type: DataTypes.BOOLEAN
        }
    });
    return Room;
}