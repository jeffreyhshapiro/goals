const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bp = require('body-parser');
const bcrypt = require('bcrypt');
const models = require('../models');


module.exports = (app) => {

    app.use(bp.urlencoded({ extended: false }))
    app.use(bp.json())

    passport.use('local',
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
                                if(doesPasswordMatch) {
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
                    if(success) {
                        done(null, success)
                    } else {
                        return done(null, false, {message: "Your username or password is incorrect"})
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
            }
        )
    )

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

    app.use(passport.initialize());
    app.use(passport.session());

    app.post('/api/register', (req, res) => {
        //db call here
        const { firstName, lastName, emailAddress, password } = req.body;

        models.User.create({
            firstName,
            lastName,
            emailAddress,
            password
        }).then((result) => {
            res.status(200).send({ authSuccess: true });
        }).catch((err) => {
            res.status(403).send({authSuccess: err});
        });

    });

    app.post('/api/authenticate', passport.authenticate('local'), (req, res) => {
        res.json({ authSuccess: true })
    });

    app.get('/api/verifyAuth', (req, res) => {
        res.json({ user: req.session.passport})
    })
}


// passport.use(
//     new LocalStrategy(
//         (username, password, done) => {
//             console.log(username, password, done)
//         }
//     )
// )