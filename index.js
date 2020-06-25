//imports for hitting routes and express and stuff
const express = require("express")
const app = express()
const path = require("path")
const axios = require("axios")
const bodyparser = require("body-parser")
const session = require("express-session")
const mongoose = require("mongoose")
const MongoStore = require('connect-mongo')(session);

const port = 3001

mongoose.connect("mongodb://localhost/poop",{useNewUrlParser:true,useUnifiedTopology:true})

//routes that are required
const home = require("./routes/home")
const login = require("./routes/login")
const register = require("./routes/register")
const logged = require("./routes/logged")
const content = require("./routes/content")

const getRoute = require("./middleware/getRoute")

const thirty = 1000 * 30 * 60

//middleware for processing json data and severing public as static
app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static("public"))

app.use(session({
    secret:"poop",
    resave: false,
    saveUninitialized:false,
    cookie:{
        maxAge: thirty
    }
}))

app.use((req,res,next)=>{
    res.locals.session = req.session
    next()
})  

app.use(getRoute)

app.use("/",home)
app.use("/login",login)
app.use("/register",register)
app.use("/logged",logged)
app.use("/content",content)

app.listen(port,()=>{
    console.log(`listening on port: ${port}`)
})

