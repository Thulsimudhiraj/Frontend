var user1 = {//user insdie window
    name:"thulsi from user",
    age:23,
    show:function(greet){//show is a method.//inside user obj
        console.log("name",this.name,greet)
    }
}
console.log(window.user1.name)
//user1.show()

let user2 = {
    name:"srinu",   
}
let user3 = {
    name:"brundha",
}
// user1.show.call(user2,"good evening")
// user1.show.apply(user3,["good night"])
// let tempShow=user1.show.bind(user3)
// tempShow("good morning")


show.call(user2,"good evening")///without user
show.apply(user3,["good night"])


function show(greet){//inside window obj
    console.log("this",this,greet)
}

var name="srinu from window"
console.log(window.name)

//using call and apply we can directly make a call
//but incase of bind-we should borrow one fun and make a call.