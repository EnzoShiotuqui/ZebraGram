const express = require('express')
const router = express()

// Test Route
router.get("/",(req,res)=>{
    res.send("Api funfando ")
})

// Routes

// userRoutes
router.use("/api/users", require("./UserRoutes"))
router.use("/api/photos", require("./PhotosRoutes"))

module.exports = router