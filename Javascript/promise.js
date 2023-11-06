//Inversion of control
//in callback we are giving control to other fun
//but in promsise-we will not give control to other fun.
//promise is a obj,it has 3 states pending,fulfilled,rejected
//promise is like a contructor function.
//to handle dependencies we use callback,promise,async await



////////////normal asyn code/////////

// function placeOrder(){
//     console.log("placing order")
//         setTimeout(()=>{
//             console.log("order placed")

//         })
//     }
//     function makePayment(){
//         console.log("making payment")
//     }

// placeOrder()
// makePayment()



//////using promise///////////-

// function placeOrder() {
//     return new Promise(function (resolve, reject) {
//         console.log("placing order")
//         setTimeout(function () {
//             console.log("order placed")
//             resolve("order placed successfully")
//         }, 2000)

//     })
// }
// function makePayment() {//make payment depends on placeorder fun
//     console.log("making payment done")
// }

// placeOrder().then(function (result) {
//    console.log(result)
//    makePayment();
// }).catch(function(err){
//    console.log("some error",err)
// })


//if we write multiple promise call,debug is tough and code doesnot looks like easy readable.
///////Async await/////////////-code looks like synchronous only
//first we have to write our code using async -it always returns a promise.
//we should resolve a promise.


// function getUser(){
//     setTimeout(function(){
//         console.log("get user")
//     })
// }
// getUser()
// console.log("afer get user")



// async function sayHello(){
//     return "hello"
// }
// function sayHi(){
//     return "hi"
// }
// sayHello().then(function(res){//resolving promise
//     console.log("result==",res)
// })
// console.log("sayHello==",sayHello())
// console.log("sayHi==",sayHi())


//using asyn await:

// function placeOrder() {
//     return new Promise(function (resolve, reject) {
//         console.log("placing order")
//         setTimeout(function () {
//             console.log("order placed")
//             resolve("order placed successfully now you can make the payment")
//         }, 2000)

//     })
// }
// async function sayHello() {
//     let result = await placeOrder()
//     console.log("I am going to make payment")
// }

// sayHello()


// //using async//easy
// let result = await placeOrder()
// let result1 = await placeOrder()
// let result2 = await placeOrder()
// console.log("finally done with all executions")

// //using promise//complex
// placeOrder().then(function (res) {
//     placeOrder().then(function (res) {
//         placeOrder().then(function (res) {
//             console.log("finally done with all executions")
//         })
//     })
// })


function sayHello(){
   return "hello"
}
async function sayHi(){
    return"hi"
}
function sayYes(){
    return new Promise(function(resolve,reject){
        resolve("Yesssss")
    })
}
function sayNo(){
    return Promise.resolve("Noooo")
}

// console.log(sayHello())//returns hello
// console.log(sayHi())//returns promise
// console.log(sayYes())//returns promise
// console.log((sayNo()))//returns promise


//to get output:with promise
// console.log(sayHello())
// sayHi().then(function(res){
//     console.log("here",res)
// })
// sayYes().then(function(res){
//     console.log("here",res)
// })
// sayNo().then(function(res){
//     console.log("here",res)
// })


//with async await

async function displayValue(){
    console.log("using async await")
    let r=sayHello()
    let r1=await sayHi();
    let r2=await sayYes();
    let r3=await sayNo();
    console.log(r,r1,r2,r3)
}
displayValue()