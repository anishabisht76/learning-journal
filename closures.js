//When a function is created, it remembers the variables that were around it when it was born.
//accurate definition - Closure is when a function retains access to its lexical scope even after the outer function has finished executing.

function createCounter(){
    let counter = 0;
    return function counterprint(){
        counter++;
        console.log(counter);
    }
}

let create = createCounter();
create();
create();
create();
create();
