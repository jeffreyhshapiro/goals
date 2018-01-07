module.exports = (app) => {

    app.get('/signup', (req, res) => {
        res.sendFile('../../components/SignUp.js');
    })

}