const Friend = require('../models').Friend;

module.exports = (app) => {

    app.post('/api/goal/friend', (req, res) => {

        console.log(req.body);

        // Friend.create({
            
        // }).then((resp) => {
        //     res.status(200).json(resp);
        // })
    });

}