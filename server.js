const express = require('express');
const app = express();
const api = require('./api')(app)
const PORT = process.env.NODE_ENV || 3000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));