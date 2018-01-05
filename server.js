const express = require('express');
const app = express();
const bp = require('body-parser');
const models = require('./models');
const PORT = process.env.NODE_ENV || 3000;

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())

require('./api')(app)

models.sequelize.sync({ force: true }).then(() => app.listen(PORT, () => console.log(`Listening on ${PORT}`)));