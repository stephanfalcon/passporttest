const mongoose = require("mongoose")

const Users = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    // product:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     required:true,
    //     ref: "Product"
    // },
    // quantity:{
    //     defualt:1,
    //     type:Number
    // }
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