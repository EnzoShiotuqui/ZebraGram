const express = require('express')
const router = express.router


// controller

// middlewares
const {photoInsertValidation} = require('../middlewares/photoValidation')
const {authGuard} = require("../middlewares/authGuard")
const {validate} = require('../middlewares/handleValidation')
// routes


module.exports = router