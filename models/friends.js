const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Friend = sequelize.define('Friend', {
        firstName: {
            type: DataTypes.STRING,
            required: true
        },
        lastName: {
            type: DataTypes.STRING,
            required: true 
        },
        phoneNumber: {
            type: DataTypes.STRING,
            required: true
        }
    });

    Friend.associate = (models) => {
        Friend.belongsTo(models.User, {
            foriegnKey: "userId"
        })
    }

    return Friend;
}