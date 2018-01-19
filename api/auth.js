const LocalStrategy = require('passport-local').Strategy;
const models = require('../models');
const bcrypt = require('bcrypt');

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
                    if (success) {
                        done(null, success)
                    } else {
                        return done(null, false, { message: "Your username or password is incorrect" })
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
            }
        )
    )

}