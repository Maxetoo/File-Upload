const CustomError = require('./error')
const { StatusCodes } = require('http-status-codes')

class BadRequestError extends CustomError {
    constructor(message) {
        super(message)
        this.status = StatusCodes.BAD_REQUEST
    }
}

module.exports = BadRequestError