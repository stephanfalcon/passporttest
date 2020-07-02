
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

// removeEle = (event) =>{
//     console.log(event)
//     console.log(this)
// }
async function removeFunc(url,id) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'DELETE',
      body: id
    });
    return response // parses JSON response into native JavaScript objects
  }

setCont = () =>{
            for(var i = 0;i<state.state.content.length;i++){
            var obj = state.state.content[i]
            var node = document.createElement("div")
                
            var inner = `<li data-_id="${obj._id}">${obj.content}</li>`

            node.addEventListener("click",(event)=>{
                var id = event.target.getAttribute("data-_id")
                removeFunc("/content", id)
                event.target.remove()
            })

            node.innerHTML = inner
            document.getElementById("content").appendChild(node)
            }
            document.getElementById("username").innerHTML = "welcome " + state.state.user.username
}
logUser()
getCont()
// console.log(state.getEle("name"))
// setCont()

// state.setState({age:56})

// state.returnState()



// document.getElementById("username").innerHTML = "welcome " + window.localStorage.getItem("username")