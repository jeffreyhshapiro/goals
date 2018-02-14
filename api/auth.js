const LocalStrategy = require('passport-local').Strategy;
const models = require('../models');
const bcrypt = require('bcrypt');

let sessionInfo = {};

module.exports = (passport) => {

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

    passport.use('local-signin',
        new LocalStrategy({
            usernameField: 'emailAddress',
            passwordField: 'password'
        },
            (username, password, done) => {

                models.User.findOne({
                    where: {
                        emailAddress: username
                    }
                })
                .then((res) => {
                    return bcrypt
                        .compare(password, res.password)
                        .then((doesPasswordMatch) => {
                            if (doesPasswordMatch) {
                                return {
                                    firstName: res.firstName,
                                    lastName: res.lastName,
                                    emailAddress: res.emailAddress,
                                    _id: res.id
                                }
                            } else {
                                return false
                            }
                        })
                })
                .then((success) => {
                    sessionInfo.user = success;
                    if (success) {
                        return models.Goal.findAll({
                            where: {
                                UserId: success._id
                            },
                            include: [ models.Friend ]
                        })
                    } else {
                        return done(null, false, { message: "Your username or password is incorrect" })
                    }
                })
                .then((goals) => {
                    sessionInfo.goals = goals;
                    return sessionInfo;
                })
                .then((sessionInfo) => {
                    done(null, sessionInfo);
                })
                .catch((err) => {
                    console.log(err)
                })
            }
        )
    )

}