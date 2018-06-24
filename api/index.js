const passport = require('passport');
const auth = require('./auth.js');
const bp = require('body-parser');
const bcrypt = require('bcrypt');
const models = require('../models');

module.exports = (app) => {
    
    app.use(bp.urlencoded({ extended: false }))
    app.use(bp.json())
    app.use(passport.initialize());
    app.use(passport.session());

    //all routes relating to goals
    require('./goals.js')(app);
    require('./friend.js')(app);


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

    app.post('/api/authenticate', 

        function(req, res, next) {
            passport.authenticate('local-signin', (err, user, info) => {
                if(err) {
                    res.send(err);
                } else {
                    req.login( user, function(err) {
                        console.log(user);
                        if (err) throw err;
                        res.json({user: user});
                    })
                }
            })(req, res, next);
        }
);

    app.get('/api/verifyAuth', (req, res) => {
        console.log(req.session.passport, "this is verification")
        res.json(req.session.passport);
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.status(200).json({status: true});
    })
}