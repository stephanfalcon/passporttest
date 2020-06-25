const Users = require("../models/users")
//logic for checking if user is registed

// function must be async or will return false first, then when finish will return true.
// keep async keyword in or will not work correctly
async function userDetect (data,callback){

    Users.find({username:data.username})
    .then((result)=>{
        if(result.length == 0 ){
            callback(false)
        }else{
            result = result[0]
            if(data.username==result.username){
                if(data.password==result.password){
                    callback(result)
                }else{
                    callback(false)
                }
            }else{
                callback(false)
            }   
        }
    })
    .catch((err)=>{
        callback(err)
        return
    })

    // User.find({username:data.username})
    // .then((result)=>{
    //              
    // })
}

// userDetect("jenkins",(result)=>{
//     console.log(result)
// })

module.exports = userDetect