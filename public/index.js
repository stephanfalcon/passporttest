logUser = () => {
    fetch("/logged")
    //tells how data from the route should be interpreted
    .then((data)=>data.json())
    //welcomes use who just logged in
    .then(data=>{
        console.log(data)
        document.getElementById("username").innerHTML = "welcome " + data.username
    })
}
logUser()
getCont = () =>{
    fetch("/content")
    //the fetch api is very dumb and needs this exact syntax otherwise wont work
    .then((data)=>data.json())
    .then((data)=>{
        console.log(data)
        for(var i = 0;i<data.length;i++){
            console.log(data[i])

            var node = document.createElement("li")
            node.innerHTML = data[i].content

            document.getElementById("content").appendChild(node)
        }
    })
}
getCont()
// document.getElementById("username").innerHTML = "welcome " + window.localStorage.getItem("username")