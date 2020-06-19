const router = require("express").Router()


router.get("/",(req,res)=>{
    console.log("this route is working")
    // console.log(req.session)
    res.json(req.session.user)
})

module.exports = router