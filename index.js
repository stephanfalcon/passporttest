//imports for hitting routes and express and stuff
const express = require("express")
const app = express()
const path = require("path")
const axios = require("axios")
const bodyparser = require("body-parser")
const session = require("express-session")
const mongoose = require("mongoose")
const MongoStore = require('connect-mongo')(session);

//routes that are required
const home = require("./routes/home")
const login = require("./routes/login")
const register = require("./routes/register")
const logged = require("./routes/logged")

const port = 3001

mongoose.connect("mongodb://localhost/poop",{useNewUrlParser:true,useUnifiedTopology:true})

app.use(session({
    secret:"poop",
    resave: false,
    saveUninitialized:false,
    cookie:{
    }
}))

app.use((req,res,next)=>{
    res.locals.session = req.session
    // console.log(req.session)
    next()
})  
//middleware functions
getRoute = require("./middleware/getRoute")

//functions
userDetect = require("./authentication/userDetect")


//middleware for processing json data and severing public as static
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static("public"))

app.use(getRoute)

app.use("/",home)
app.use("/login",login)
app.use("/register",register)
app.use("/logged",logged)



//need solution to saving useres
//users that are registed
const savedUsers = [{
    username:"jenkins",
    password:"poop"
}]

//the name and password that are being checked
let user = {}

//sends user data to the main page

app.listen(port,()=>{
    console.log(`listening on port: ${port}`)
})

