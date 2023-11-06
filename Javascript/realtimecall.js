function userDb(){//api returning user data
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("getting user")
            resolve({
                name:"thulsi",
                age:23,
                id:"3",
                address:"hyd"
            })
        },6000)
    })
}

///////////Using promise//////////////
function getUserFromDb(){//get the user
    userDb().then(function(res){
        console.log("hello iam displaying user",res)
        displayUserOnScreen()
    })
}
//getUserFromDb()


//////using async await////////////////
async function getUserFromDbUsingAsyncAwait(){
    let res = await userDb();
    console.log("hello iam displaying user",res)
    displayUserOnScreen()
}


function displayUserOnScreen(){//once we get the user,we display the user
    console.log("user displayed successsfully")
}

getUserFromDbUsingAsyncAwait()