module.exports = (app) => {
    app.post('/api/register', (req, res) => {
        //db call here
        res.status(200).send('hey man')
    })
}