const router = require("express").Router()
const path = require("path")

router.get("/",(req,res)=>{
    console.log("poop")
    // console.log(req.session)
    res.sendFile(path.join(__dirname,"../public/index.html"))
})

module.exports = router