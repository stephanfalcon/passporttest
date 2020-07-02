class Document {
    constructor(){
        this.state={
            name:"jon",
            content:[]
        }
    }

    setState = (change) =>{
        Object.assign(this.state,change)

    }

    returnState = () =>{
        console.log(this.state)
    }

    getEle = (ele) =>{
        for(let [key,value] of Object.entries(this.state)){
            if (key == ele){
                // return {key} = this.state{ele}
            }
        }
    }
}

var state = new Document()

logUser = () => {
    fetch("/logged")
    //tells how data from the route should be interpreted
    .then((data)=>data.json())
    //welcomes use who just logged in
    .then(data=>{
        state.setState({user:data})
    })
}

getCont = () =>{
    fetch("/content")
    //the fetch api is very dumb and needs this exact syntax otherwise wont work
    .then((data)=>data.json())
    .then((data)=>{
        state.setState({content:data})
        setCont()
    })
}

setCont = () =>{
            for(var i = 0;i<state.state.content.length;i++){
            var node = document.createElement("li")
            node.innerHTML = state.state.content[i].content
            document.getElementById("content").appendChild(node)
            }
            document.getElementById("username").innerHTML = "welcome " + state.state.user.username
            // console.log(state.getEle(user))
}
logUser()
getCont()
// console.log(state.getEle("name"))
// setCont()

// state.setState({age:56})

// state.returnState()



// document.getElementById("username").innerHTML = "welcome " + window.localStorage.getItem("username")