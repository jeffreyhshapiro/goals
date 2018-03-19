const Friend = require('../models').Friend;
const Goal = require('../models').Goal;

module.exports = (app) => {

    app.post('/api/friend/submitFriend', (req, res) => {

        const { firstName, phoneNumber } = req.body;
        const UserId = req.body.goals.UserId;
        const GoalId = req.body.goals.id;

        Friend.create({
            firstName,
            phoneNumber,
            UserId,
            GoalId
        }).then((resp) => {

            const { goals } = req.session.passport.user;

            for (let i in goals) {
                if (goals[i].id === GoalId) {
                    goals[i].Friends.push(resp);
                    break;
                }
            }

            

            res.status(200).json(resp);
        })
    });


    app.get('/api/friend/friends', (req, res) => {
        Friend.findAll({
            where: {
                UserId: req.session.passport.user.user._id
            }
        }).then(resp => {
            res.json(resp);
        })
    })

}