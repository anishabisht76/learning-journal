// undefined vs not defined

//undefined means the memory is allocated but there is not value inserted in it (acts as a placeholder)
//where as not defined means there is not such variable declared only thus it throws and error

var a;
console.log(a);

if(a === undefined)
{
    console.log("a is undefined");
}
else
{
    console.log("a is not undefined");
}


