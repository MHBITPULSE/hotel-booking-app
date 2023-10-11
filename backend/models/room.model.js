module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define('room', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        desc: {
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
        booked: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        hasAc: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        hasTv: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        hasButhTub: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        hasBalcony: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        hasDressingTable: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        hasLocker: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        hasFridge: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        image: {
            type: DataTypes.STRING
        }
    });
    return Room;
}