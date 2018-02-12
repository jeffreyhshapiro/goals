const Friend = require('../models').Friend;
const Goal = require('../models').Goal;

module.exports = (app) => {

    app.post('/api/friend/submitFriend', (req, res) => {

        console.log(req.body);

        const { firstName, phoneNumber } = req.body;
        const UserId = req.body.goals.UserId;
        const GoalId = req.body.goals.id;

        Friend.create({
            firstName,
            phoneNumber,
            UserId,
            GoalId
        }).then((resp) => {
            res.status(200).json(resp);
        })
    });

}