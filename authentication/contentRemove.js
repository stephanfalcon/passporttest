const content = require("../models/content")

async function contentRemove (obj,cb){
    content.deleteOne(obj)
    .then(cb("object deleted"))
    .catch((err)=>{
        throw err
    })

}

module.exports = contentRemove

