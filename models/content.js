const mongoose = require("mongoose")

const Content = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    uId: {
        type: String,
        required: true
    },
    content: {
        type: String
    }
})

module.exports = mongoose.model("content",Content)