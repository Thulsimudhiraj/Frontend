// export let user = {//named export
//     name:"thulsi",
//     age:20
// }


// export function sayHi(){
//     console.log("saying hiiii")
// }

//for named exports,while importing time we have to mention the name exactly what we have given
//also we can import as


// import {user as u} from "./ModuleDemo"
// console.log(u)


// import * as u from "./ModuleDemo.js"
// console.log(u.user);
// u.sayHi();



/////////////////default exports///////
//a module should not have more than one default export.
//we can give any name for default exports while importing time.


export default function sayHi(){
    console.log("saying hiiii")
}
 
export function add(){
    console.log("add calling")
}

// Named export Default export

// export class User{...}
//export default class User


// import {User} from{...}
// import User from