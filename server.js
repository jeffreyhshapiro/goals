const express = require('express');
const app = express();
const session = require('express-session');
const bp = require('body-parser');
const models = require('./models');
const PORT = process.env.NODE_ENV || 3000;

app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: null } }))

require('./api')(app)

models.sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on ${PORT}`))
})