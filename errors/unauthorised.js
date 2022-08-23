const CustomError = require('./error')
const { StatusCodes } = require('http-status-codes')

class UnAuthorisedError extends CustomError {
    constructor(message) {
        super(message)
        this.status = StatusCodes.UNAUTHORIZED
    }
}

module.exports = UnAuthorisedError