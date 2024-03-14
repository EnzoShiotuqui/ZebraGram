const Photo = require('../models/Photo')
const mongoose = require('mongoose')
const User = require('../models/User')



// Insert photo with an user 
const insertPhoto = async(req,res) => {
    const {title} = req.body
    const image = req.file.filename

    const reqUser = req.user

    const user = User.findById(reqUser._id)

    // create a photo
    const newPhoto = await Photo.create({
        image,
        title,
        userId: user._id,
        userName: user.name
    })

    // if photo was create, return data
     if(!newPhoto) {
        res.status(422).json({errors: ["Houve um erro, por favor, tente novamente mais tarde"]})
     }

    res.status(201).json(newPhoto)
}

module.exports = {
    insertPhoto,
}