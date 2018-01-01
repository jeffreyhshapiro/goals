module.exports = (app) => {
    app.post('/api/register', (req, res) => {
        res.status(200).send('hey man')
    })
}