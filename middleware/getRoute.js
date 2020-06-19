getRoute = (req,res,next)=>{
    console.log(req.path)
    next()
}

module.exports = getRoute