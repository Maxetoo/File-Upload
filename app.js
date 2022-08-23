// console.log('working')
require('express-async-errors')
require('dotenv').config()
const express = require('express')
const app = express()
const fileUploader = require('express-fileupload')
const Router = require('./routes/routes')
const mongoose = require('mongoose')
const cloudinary = require('cloudinary').v2
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
})
const NotFoundController = require('./middlewares/not-found')

// middlewares
app.use(fileUploader({ useTempFiles: true }))
app.use(express.json())
app.use('/api/v1/entries', Router)
app.use(NotFoundController)

const port = process.env.PORT || 3000
const startApp = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        app.listen(port, () => console.log(`app is listening at port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

startApp()