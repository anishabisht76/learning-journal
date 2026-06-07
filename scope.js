//scope determines wheather a variable can be accessed in your code

// types of scope-
// 1. global scope - variable declared outside function or block
// 2. function - variable declared inside function
// 3. block - declared inside if/else block
// 4. Lexical - means JavaScript determines scope based on where functions are written in the code, not where they are called.


// lexical - in order, in sequence
// lexical enviorment - is the local memory along with its parent lexical environment
// lexical enviorment is created whenever a execution context is created
// what is lexical environment?
// It is local memory + lexical environment of parent(basically parent menory)

// by defualt lexical memory of glocal object (window) is null

function a()
{
    const x = 5;
    console.log("inside a:"+x); // will print beacuse it is present in its local memory
    console.log("inside a:"+y) //prints y because it is present in its lexical environment
}
a();
const y =7;
console.log("inside global:");
console.log(x); //cannot find x because it is not present in its local as well as lexical environment