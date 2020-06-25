const router = require("express").Router()
const Content = require("../models/content")
const mongoose = require("mongoose")
const contentGetter = require("../authentication/contentGetter")


router.get("/",(req,res)=>{
    var user = req.session.user
    console.log(req.session)
    return res.json(req.session.content)
})

router.post("/",(req,res)=>{
    var user = req.session.user
    var content = new Content({
        _id: new mongoose.Types.ObjectId(),
        uId: user._id,
        content:req.body.content
    })

    content.save()

    res.location("/")


})

module.exports = router