const express = require('express')
const router = express()

// Test Route
router.get("/",(req,res)=>{
    res.send("Api funfando ")
})

module.exports = router