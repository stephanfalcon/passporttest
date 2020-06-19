const router = require("express").Router()
const path = require("path")
const userDetect = require("../authentication/userDetect")
const mongoose = require("mongoose")
// const session = require("express-session")
//login page route
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/login.html"))
})

//login route that is hit when attempting to use the login page 
router.post("/",(req,res)=>{ 
    var user = req.body
    if(userDetect(user)){
        // console.log("this is working")
        req.session.user = user.username
        // req.session.save()

        console.log(req.session)
        // req.session.save()
        res.redirect("/")
    }else{
        console.log("this is not working")
        res.redirect("/login")
    }
})

module.exports = router