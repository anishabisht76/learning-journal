//JavaScript's behavior of registering declarations before code execution, allowing them to be referenced earlier in their scope (with some differences for var, let, const, and functions).

//let/const behaviour - error unintialized
// console.log(x);
// let x = 2;

//undefined cause of execution context
// console.log(x);
// var x =2;

//functions works even before initialization
// console.log(hello);
// function hello(){
//     console.log("hello");
// }

//arrow functions behaviour undefined
console.log(hello);
var hello = ()=>{
    console.log("hello");
}





