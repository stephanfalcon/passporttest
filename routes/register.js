const router = require("express").Router()
const path = require("path")
const mongoose = require("mongoose")
const Users = require("../models/users")

//user registration
router.get("/",(req,res)=>{
    console.log(req.session)
    res.sendFile(path.join(__dirname,"../public/register.html"))
})

//user register post route
router.post("/",(req,res)=>{
    // console.log(req.body)
    let userData = req.body
    // need a solution for saving without using variables
    // savedUsers.push(req.body)
    const user = new Users({
        _id: new mongoose.Types.ObjectId(),
        username: userData.username,
        password: userData.password,
        name:userData.name,
        email:userData.email
    })
    user.save()
    .then((result)=>{
        console.log("database result = " + result)
        // res.status(201).json(result)    
        res.redirect("/login")
    })
    .catch((err)=>{
        res.status(500).json(
            {error:err}
        )
    })
    console.log("i am here ")

})

module.exports = router 