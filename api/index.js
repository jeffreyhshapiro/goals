const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bp = require('body-parser');
const bcrypt = require('bcrypt');
const models = require('../models');


module.exports = (app) => {

    app.use(bp.urlencoded({ extended: false }))
    app.use(bp.json())

    require('./htmlRoutes/htmlRoutes.js')(app);

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
                    return bcrypt.compare(password, res.password)
                })
                .then((doesPasswordMatch) => {
                    if(doesPasswordMatch) {
                        return done(null, username)
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
        }).then((result) => {
            res.status(200).send(true);
        }).catch((err) => {
            console.log(err)
            res.status(403).send(err);
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