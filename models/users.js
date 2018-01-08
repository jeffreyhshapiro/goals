const bcrypt = require('bcrypt');
const saltRounds = 10;
const sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        emailAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6, 32]
            }
        }
    }, {
            hooks: {
                beforeCreate: (user, options) => {
                    return bcrypt
                        .hash(user.password, saltRounds)
                        .then(function (hash) {
                            return user.password = hash;
                        });
                },
                beforeUpdate: (user, options) => {
                    return bcrypt
                        .hash(user.password, saltRounds)
                        .then(function (hash) {
                            return user.password = hash;
                        });
                }
            }, 
            classMethods: {
                associate: (models) => {
                    User.hasMany(models.Goal)
                }
            }
        });

    return User
}