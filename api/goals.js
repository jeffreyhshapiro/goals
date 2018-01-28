const Goal = require('../models').Goal;

module.exports = (app) => {

    app.post('/api/goal/createGoal', (req, res) => {
        console.log(req.body)

        const { userId, goal } = req.body;

        Goal.create({
            UserId: userId,
            goal,
            completed: false            
        }).then((resp) => {
            res.status(200).json(resp);
        })
    });

}