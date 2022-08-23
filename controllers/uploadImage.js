const path = require('path')
const fs = require('fs')
const { StatusCodes } = require('http-status-codes')
const cloudinary = require('cloudinary').v2

// upload image locally
const uploadImageLocal = async(req, res) => {
    const imageFile = req.files.image
    const filePath = path.join(__dirname, `../public/uploads/${imageFile.name}`)
    await imageFile.mv(filePath)
    res.status(StatusCodes.OK).json({
        image: {
            src: imageFile.name,
        },
    })
}

// upload image to cloud
const uploadImage = async(req, res) => {
    const imageFile = req.files.image
    const image = await cloudinary.uploader.upload(imageFile.tempFilePath, {
        use_filename: true,
        folder: 'file manager',
    })
    fs.unlinkSync(imageFile.tempFilePath)
    res.status(StatusCodes.OK).json({
        image: {
            src: image.secure_url,
        },
    })
}

module.exports = uploadImage