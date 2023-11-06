/////////synchronous--code blocks

// console.log("1")
// console.log("2")
// console.log("3")

/////////asynchrounous---code doesnot block

// console.log("1")
// setTimeout(function(){//this block of code is called asyn code
//     console.log("2")
// })
// console.log("3")


// function printmyfile(){
//     console.log("i am printing")
// }

// function calculateSomeHeavy(){

//     for(let i=0;i<1000000000;i++){

//     }
//     console.log("calculating some heavy")
// }
// printmyfile();
//calculateSomeHeavy();//it takes some time to execute.so next line has to wait until it executes
//that is the reason we write in asyn nature,so that it no need to wait.
//setTimeout(calculateSomeHeavy,0)
//console.log("done")



///there is also a drawback in asynchornous codes
//to handle this asyn we use callback,promise,asyn await
//why we handle asyn code,if we want to perform some oprations in present fun,
// which depends on previous fun result

//callback:when we pass fun as a parameter to other fun,from there we are calling it is callback.


// • // function---EXAMPLE
//  function greet(msg,fn) {
//  console.log("",msg);
//  fn();
//  }

//  // callback function
//  function callMe() {
//  console.log("I am callback function calling from greet");
//  }

//  // passing function as an argument
//  greet("good morning", callMe);


//1--async nature

//function placeOrder(){// n/w call,call goes to server side,and data is stored in db-which is tym consuming
//     console.log("placing order")
//     setTimeout(()=>{
//         console.log("order placed")
//     })
// }
// function orderAgain(){
//     console.log("order Again")
// }
// function makePayment(){
//     console.log("payment done")
// }

// placeOrder()
// orderAgain()
// makePayment()


function placeOrder(fn){
console.log("placing order")
    setTimeout(()=>{
        console.log("order placed")
        fn()
        
    })
}
function orderAgain(){
    console.log("order Again")
}
function makePayment(){
    console.log("payment done")
}

placeOrder(makePayment)
//orderAgain()










// • Synchronous JavaScript: As the name suggests synchronous
// means to be in a sequence, i.e. every statement of the code gets
// executed one by one. So, basically a statement has to wait for the
// earlier statement to get executed.
// Let us understand this with the help of an example.
// • Synchronous code runs in sequence. This means that each
// operation must wait for the previous one to complete before
// executing.
// • console.log('One');
// • console.log('Two');
// • console.log('Three');
// • // LOGS: 'One', 'Two', 'Three'


// • Asynchronous JavaScript: Asynchronous code allows the program
// to be executed immediately where the synchronous code will block
// further execution of the remaining code until it finishes the current one
// • Asynchronous code runs in parallel. This means that an operation can
// occur while another one is still being processed.

// • console.log('One');
// • setTimeout(() => console.log('Two'), 100);
// • console.log('Three');
// • // LOGS: 'One', 'Three', 'Two’
// • Asynchronous code execution is often preferable in situations where
// execution can be blocked indefinitely. Some examples of this are
// network requests, long-running calculations, file system operations
// etc. Using asynchronous code in the browser ensures the page
// remains responsive and the user experience is mostly unaffected.


// • Callbacks:
// • In JavaScript, functions are objects. So we can pass objects to functions as
// parameters.
// • We can also pass functions as parameters to other functions and call them
// inside the outer functions. So callback is a function that is passed to
// another function. When the first function is done, it will run the second
// function.
// • Let's take an example of callback function:
// • In JavaScript, you can also pass a function as an argument to a
// function. This function that is passed as an argument inside of
// another function is called a callback function. For example,

