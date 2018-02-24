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
        },
        deadline: {
            type: DataTypes.DATE,
            allowNull: true
        }
    });

    Goal.associate = (models) => {
        Goal.belongsTo(models.User, {
            foriegnKey: "userId"
        })

        Goal.hasMany(models.Friend, {
            foriegnKey: "friendId"
        });
    }

    return Goal;
}