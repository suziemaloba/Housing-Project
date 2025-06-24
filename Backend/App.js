const express = require('express');
const { createUser, sendEmails } = require('./controller/user.controller');
const userRoutes = require('./Route/user.route')
const cors = require("cors")

const app = express();
app.use(express.json())
app.use(cors())

app.use('/user', userRoutes)
app.post('/email', sendEmails)

module.exports = app;