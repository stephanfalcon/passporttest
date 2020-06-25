const content = require("../models/content")

async function contentGetter (uId,cb) {
    content.find({uId:uId})
    .then((result)=>{
        cb(result)
    })
}

module.exports = contentGetter