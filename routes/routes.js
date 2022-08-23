const express = require('express')
const Router = express.Router()

const { createList, getAllLists } = require('../controllers/createEntry')
const uploadImage = require('../controllers/uploadImage')
Router.route('/').get(getAllLists).post(createList)
Router.route('/upload').post(uploadImage)

module.exports = Router