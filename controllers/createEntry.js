const Entry = require('../model/entrySchema')
const { StatusCodes } = require('http-status-codes')

const createList = async(req, res) => {
    const entry = await Entry.create(req.body)
    res.status(StatusCodes.OK).json({
        entry,
    })
}

const getAllLists = async(req, res) => {
    const entry = await Entry.find({})
    res.status(StatusCodes.OK).json({ entry })
}

module.exports = {
    createList,
    getAllLists,
}