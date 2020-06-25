const mongoose = require("mongoose")

const Users = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("users",Users)