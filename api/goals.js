const Goal = require('../models').Goal;
const passport = require('passport');

module.exports = (app) => {

    app.post('/api/goal/createGoal', (req, res) => {
        const { userId, goal } = req.body;

        Goal.create({
            UserId: userId,
            goal,
            completed: false
        }).then((resp) => {
            //update session object
            const { goals } = req.session.passport.user;

            req.session.passport.user.goals = [
                ...goals,
                resp
            ]

            res.status(200).json(resp);

        })
    });

}