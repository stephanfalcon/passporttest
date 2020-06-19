const mongoose = require("mongoose")
const User = require("../models/users")
//logic for checking if user is registed
async function userDetect (data){
    User.find({username:data.username})
    .then((result)=>{
        result = result[0]
        // console.log(result)
        // console.log(data)        
        if(data.username==result.username){
            if(data.password==result.password){
                console.log(true)
                // console.log(`welcome valued user ${data.username}`)
                return true
            }
        }else{
            console.log(false)
            return false
        }
    })

    // for(var i = 0;i<savedUsers.length;i++){

    
    // }

}

module.exports = userDetect