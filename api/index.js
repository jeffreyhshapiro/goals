const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bp = require('body-parser');
const bcrypt = require('bcrypt');
const models = require('../models');
const saltRounds = 10;


module.exports = (app) => {

    app.use(bp.urlencoded({ extended: false }))
    app.use(bp.json())

    passport.use('local',
        new LocalStrategy({
            usernameField: 'emailAddress',
            passwordField: 'password'
        },
            (username, password, done) => {

                return models.User.findOne({
                    where: {
                        emailAddress: username
                    }
                })
                .then((res) => {
                    // console.log(res)
                    console.log(res.emailAddress)
                    console.log(res.password)

                    return bcrypt.compare(res.password, password)
                })
                .then((doesPasswordMatch) => {
                    console.log(doesPasswordMatch)
                    if(doesPasswordMatch) {
                        return done(null, user)
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

    app.post('/api/register', (req, res) => {
        //db call here
        const { firstName, lastName, emailAddress, password } = req.body;

        models.User.create({
            firstName,
            lastName,
            emailAddress,
            password
        }).then((res) => {
            console.log(res)
            console.log('success')
        }).catch((err) => {
            console.log(err)
        });

    });

    app.post('/api/authenticate', passport.authenticate('local', 
            {
                successRedirect: "/",
                failureRedirect: "/signup"
            }
        )
    );
}


// passport.use(
//     new LocalStrategy(
//         (username, password, done) => {
//             console.log(username, password, done)
//         }
//     )
// )