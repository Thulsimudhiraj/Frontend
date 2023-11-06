function getUsers(){//db kind of call,returns user data nd takes some tym to process and return.
    console.log("calling getuser")
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("got the users now")
            resolve({
                name:"thulsi",
                age:23,
                id:1
                
            })

        },8000)
    })
   
}
function getRoles(){
    console.log("calling getRoles")
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("got roles now")
            resolve({
                role:"admin",//if we use other name its prints not a admin
            })

        },8000)
    })
}
function printRole(role){
    console.log("printing role");
    if(role==='admin'){
        console.log("i am admin")
    }
    else{
        console.log("not a admin")
    }
}


///////Normal call//////
// getUsers()
// getRoles()
// printRole()


/////using promise/////////
function getUsersRolesAndPrintUsingPromise(){
    getUsers().then(function(res){
        console.log("result from users==",res)
        getRoles().then(function(res){
            console.log("result from roles==",res)
            printRole(res.role)//res is a obj
        })
    })
}
//getUsersRolesAndPrintUsingPromise()


//using async await
async function getUsersRolesAndPrintUsingAyncAwait(){
    let users=await getUsers()
    console.log("users received",users)
    let role=await getRoles()
    console.log("role received",role)
    printRole(role.role)
}
getUsersRolesAndPrintUsingAyncAwait()