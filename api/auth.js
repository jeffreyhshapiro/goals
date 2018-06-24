const LocalStrategy = require('passport-local').Strategy;
const models = require('../models');
const bcrypt = require('bcrypt');

let sessionInfo = {};

module.exports = (passport) => {

    passport.serializeUser(function (user, done) {
        console.log("serialize", user)
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

                    if(!!res) {
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
                                    done({err: "Your username or password is not correct"});
                                }
                            })
                    } else {
                        done({ err: "Your username or password is not correct" });
                    }

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
                    return done(err);
                })
            }
        )
    )

}