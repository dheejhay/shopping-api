// requring express
const { Router } = require('express')
const express = require('express')
const cors = require('cors')
require('dotenv').config();

// creating an app
const app = express();
app.use(express.json())
app.use(cors())

const productRoute = require('./server/routes/productRoute');
app.use('/', productRoute)

//setting a port
const PORT = process.env.port || 5500
app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
})