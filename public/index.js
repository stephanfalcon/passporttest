logUser = () => {
    fetch("/logged")
    //tells how data from the route should be interpreted
    .then((data)=>data.json())
    //welcomes use who just logged in
    .then(data=>{
        console.log(data)
        document.getElementById("username").innerHTML = "welcome " + data
    })
}
logUser()
// document.getElementById("username").innerHTML = "welcome " + window.localStorage.getItem("username")