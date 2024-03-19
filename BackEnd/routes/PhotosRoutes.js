const express = require('express')
const router = express()


// controller
const {insertPhoto, deletePhoto, getAllPhotos, getUserPhotos, getPhotoById, updatePhoto, likePhoto} = require('../controllers/PhotoController')

// middlewares
const {photoInsertValidation, photoUpdateValidation} = require('../middlewares/photoValidation')
const validate = require('../middlewares/handleValidation');
const authGuard = require('../middlewares/authGuard');
const {imageUpload} = require('../middlewares/imageUpload')

// routes
router.post("/", authGuard, imageUpload.single("image"), photoInsertValidation(), validate, insertPhoto)
router.delete("/:id", authGuard, deletePhoto)
router.get('/', authGuard, getAllPhotos)
router.get('/user/:id', authGuard,getUserPhotos )
router.get('/:id', authGuard, getPhotoById)
router.put('/:id', authGuard, photoUpdateValidation(), validate, updatePhoto)
router.put('/like/:id', authGuard, likePhoto)

module.exports = router