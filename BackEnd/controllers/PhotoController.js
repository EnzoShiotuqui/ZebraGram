const Photo = require("../models/Photo");
const mongoose = require("mongoose");
const User = require('../models/User')

// Insert photo with an user 
const insertPhoto = async (req, res) => {
    const { title } = req.body;
    const image = req.file.filename;
    const reqUser = req.user;

    try {
        const user = await User.findById(reqUser._id);

        // create a photo
        const newPhoto = await Photo.create({
            image,
            title,
            userId: user._id,
            userName: user.name
        });

        res.status(201).json(newPhoto);
    } catch (error) {
        res.status(422).json({ errors: ["Houve um erro, por favor, tente novamente mais tarde"] });
    }
}

// delete photo
const deletePhoto = async (req, res) => {
    const { id } = req.params;
    const reqUser = req.user;

    try {
        const photo = await Photo.findById(mongoose.Types.ObjectId(id));

        // check if photo exists
        if (!photo) {
            return res.status(404).json({ errors: ["Foto não encontrada"] });
        }

        // check if photo belongs to user
        if (!photo.userId.equals(reqUser._id)) {
            return res.status(422).json({ errors: ["Ocorreu um erro, tente novamente mais tarde"] });
        }

        await Photo.findByIdAndDelete(photo._id);

        res.status(200).json({ id: photo._id, message: "Foto excluída com sucesso" });
    } catch (error) {
        res.status(500).json({ errors: ["Ocorreu um erro, tente novamente mais tarde"] });
    }
}

// get all photos
const getAllPhotos = async (req, res) => { 

  const photos = await Photo.find({})
  .sort([["createdAt", -1]])
  .exec();

return res.status(200).json(photos);

}

module.exports = {
    insertPhoto,
    deletePhoto,
    getAllPhotos
}
