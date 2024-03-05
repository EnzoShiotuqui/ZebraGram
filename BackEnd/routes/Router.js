const express = require('express')
const router = express()

// Test Route
router.get("/",(req,res)=>{
    res.send("Api funfando ")
})


router.use("/api/users", require("./UserRoutes"))

module.exports = router