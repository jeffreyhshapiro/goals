const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bp = require('body-parser');
const bcrypt = require('bcrypt');
const models = require('../models');
const saltRounds = 10;


module.exports = (app) => {

    app.use(bp.urlencoded({ extended: false }))
    app.use(bp.json())

    app.post('/api/register', (req, res) => {
        //db call here
        const { firstName, lastName, emailAddress, password } = req.body;

        console.log(firstName)
        console.log(lastName)
        console.log(emailAddress)
        console.log(password)

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
        })

        

    })
}


// passport.use(
//     new LocalStrategy(
//         (username, password, done) => {
//             console.log(username, password, done)
//         }
//     )
// )