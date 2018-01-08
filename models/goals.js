const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Goal = sequelize.define('Goal', {
        goal: {
            type: DataTypes.STRING,
            required: true
        },
        completed: {
            type: DataTypes.BOOLEAN,
            required: true
        }
    }, {
        classMethods: {
            associate: (models) => {
                Goal.hasOne(models.User, {
                    foreignKey: "userId"
                })
            }
        }
    });

    return Goal;
}