const Goal = require('../models').Goal;
const passport = require('passport');
const Friend = require('../models').Friend;

module.exports = (app) => {

    app.post('/api/goal/createGoal', (req, res) => {
        const { userId, goal, deadline } = req.body;

        const create = {
            UserId: userId,
            goal,
            deadline: deadline,
            completed: false
        }

        Goal.create(create)
            .then((resp) => {

            return [ Friend.findAll({
                    where: {
                        GoalId: resp.id
                    }
                }), resp]

            }).spread((friends, newGoal) => {

                //a less than ideal solution to put the friends array in the Goal response object but it works for now ¯\_(ツ)_/¯
                newGoal.dataValues.Friends = friends;

                //update session object
                const { goals } = req.session.passport.user;

                req.session.passport.user.goals = [
                    ...goals,
                    newGoal
                ]
                res.status(200).json(newGoal);
            })
    });

}