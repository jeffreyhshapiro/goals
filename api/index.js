const passport = require('passport');
const auth = require('./auth.js');
const bp = require('body-parser');
const bcrypt = require('bcrypt');
const models = require('../models');

module.exports = (app) => {

    //all routes relating to goals
    require('./goals.js')(app);

    app.use(bp.urlencoded({ extended: false }))
    app.use(bp.json())
    app.use(passport.initialize());
    app.use(passport.session());

    //require passport auth schemes
    auth(passport)

    app.post('/api/register', (req, res) => {
        //db call here
        const { firstName, lastName, emailAddress, password } = req.body;

        models.User.create({
            firstName,
            lastName,
            emailAddress,
            password
        }).then((result) => {
            passport.authenticate('local-signin')(req, res, () => {
                res.status(200).json(req.session.passport);
            })
        }).catch((err) => {
            res.status(403).send({authSuccess: err});
        });

    });

    app.post('/api/authenticate', passport.authenticate('local-signin'), (req, res) => {
        res.json(req.session.passport)
    });

    app.get('/api/verifyAuth', (req, res) => {
        res.json(req.session.passport)
    });
}