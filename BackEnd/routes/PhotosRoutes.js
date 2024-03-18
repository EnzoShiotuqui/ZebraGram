const express = require('express')
const router = express()


// controller
const {insertPhoto, deletePhoto, getAllPhotos} = require('../controllers/PhotoController')

// middlewares
const {photoInsertValidation} = require('../middlewares/photoValidation')
const validate = require('../middlewares/handleValidation');
const authGuard = require('../middlewares/authGuard');
const {imageUpload} = require('../middlewares/imageUpload')

// routes
router.post("/", authGuard, imageUpload.single("image"), photoInsertValidation(), validate, insertPhoto)
router.delete("/:id", authGuard, deletePhoto)
router.get('/', authGuard, getAllPhotos)

module.exports = router