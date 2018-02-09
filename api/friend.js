const Friend = require('../models').Friend;
const Goal = require('../models').Goal;

module.exports = (app) => {

    app.post('/api/friend/submitFriend', (req, res) => {

        const { firstName, phoneNumber } = req.body;
        const { UserId } = req.body.goals;
        const GoalId = req.body.goals.id;
        let friendId;

        Friend.create({
            firstName,
            phoneNumber,
            UserId
        }).then((resp) => {
            friendId = resp.id;
            return Goal.update({
                FriendId: friendId
                }, {
                    where: {
                        id: GoalId,
                        UserId
                    }
                })
        }).then((resp) => {
            res.status(200).json({status: 'success'});
        })
    });

}