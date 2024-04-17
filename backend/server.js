require('dotenv').config()

const express = require('express')
const machineStatusRouter = require('./routes/machineStatus')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/machineStatus',machineStatusRouter)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to DB and listening to port 4000')
        })
    })
    .catch((error) => {
        console.log(error)
    })
