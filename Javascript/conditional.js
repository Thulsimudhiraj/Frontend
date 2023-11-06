// The if statement
// The if...else statement
// The if...else if....else statement
// The switch...case statement


//1 The if Statement
// The if statement is used to execute a block of code only if the specified condition
// evaluates to true.

// if(condition) {
// Code to be executed
//}
var age =20;
if(age>=18) {
    console.log("valid voter")
}

var a = 70,b=50;
if(a>b){
    console.log("a is greater")
}


//2 The if...else Statement
// The if...else statement allows you to execute one block of code if the specified condition is
// evaluates to true and another block of code if it is evaluates to false

// if(condition) {
// // Code to be executed if condition is true
// } else {
// // Code to be executed if condition is false
// }

var a = 30,b=50;
if(a>b){
    console.log("a is greater");
}else {
    console.log("b is greater");
}

//3 The if...else if...else Statement

// The if...else if...else a special statement that is used to combine multiple if...else statements.

// if(condition1) {
// // Code to be executed if condition1 is true
// } else if(condition2) {
// // Code to be executed if the condition1 is false and condition2 is
// true
// } else {
// // Code to be executed if both condition1 and condition2 are false
// }
var number = 0;
if(number>0){
    console.log("number is positive");
}else if(number<0){
    console.log("number is negative")
}else {
    console.log("number is equal to zero")
}

//wap to check number is even or odd
var n = 21;
if(n%2===0){
    console.log("number is even")
}else {
    console.log("number is odd")
}

// 4.switch Statement

// The switch statement is used to perform different actions based on different conditions.
// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }
// The switch expression is evaluated once.
// The value of the expression is compared with the values of each case.
// If there is a match, the associated block of code is executed.
// If there is no match, the default code block is executed.

// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }

