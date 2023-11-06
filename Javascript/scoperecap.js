// //function,global,block scope

// //1--global scope
// var a=28
// console.log(a)//we can access

// function show(){
//     console.log(a)//we can access
// }
// show()


// //2
// {
//     var x=31
//     console.log(x)//we can access
// }
// console.log(x)//we can access


// //3-function scope
// function show(){
//     var p=35
//     console.log(p)//we can access
// }
// show()
// console.log(p)//we can not access


//if we declare var outside of fun it's global scope
//if we declare var inside fun it's function scope
//if we declare anything inside fun using var,const,let it's a function scope


///block scope/////applies for let and const

// function showA(){
//     let u=20;
//     var v=21;
//     const w=22
//     console.log(u,v,w)//can access
// }
// showA()
// console.log(u,v,w)//error


//lexical scoping//if we define our var globally,if we want to access variable inside fun
//which is not declared inside fun.js engine checks within fun whether it's avaiable or not and moves 
//little bit up that's to global scope and checks the availabily and assign values.
let x=20;
var y=21;
const z=22
console.log(x,y,z)//access

function show(){
    console.log(x,y,z)//access
}
show()


// var a = 100;

// function show(){
//     var a =200;
// }


// global execution context [ a=100]

//function execution context [a=200]//destroy from memory after completion.

// {
//     let x = 40;
//     console.log(x);//40
//     {
//         let x =60;
//         console.log(x);//60
//     }
//     console.log(x);//40
// }

// console.log(x);//not defined