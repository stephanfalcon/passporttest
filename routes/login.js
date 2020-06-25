const router = require("express").Router()
const path = require("path")
const userDetect = require("../authentication/userDetect")
const contentGetter = require("../authentication/contentGetter")
const session = require("express-session")
const { error } = require("console")

// async function dbWait(attempt){
//     var data = await userDetect(attempt)
//     console.log(data)
// }

//login page route
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/login.html"))
})

//login route that is hit when attempting to use the login page 
router.post("/",async (req,res)=>{ 
    var attempt = req.body

    userDetect(attempt,(result)=>{
        console.log(result)
        if(result){
            req.session.user = result
            contentGetter(req.session.user._id,(result)=>{
                req.session.content = result
                return res.redirect("/")
            })
        }
    
            // res.redirect("/login")
    })



    // if(userDetect(attempt)){
        

    //     return res.redirect("/")
    // }else{
    //     console.log("not working")
    //     error("poop")
    //     res.redirect("/login")
    // }
})

module.exports = router