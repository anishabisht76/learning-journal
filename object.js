// A collection of key–value pairs used to store related data and functionality.

function Is_Empty(obj){
    for(let keys in obj)
    {
        return false;
    }
    return true;
}

let user = new Object();
user['name'] = "John";
user['surname'] = "Smith";

// for(key in user){
//     console.log(`${key}:${user[key]}`);
// }

user.name = 'Pete';
// for(key in user){
//     console.log(`${key}:${user[key]}`);
// }

delete user.name;
delete user.surname;
// console.log("after deletion")
// for(key in user){
//     console.log(`${key}:${user[key]}`);
// }

const empty = Is_Empty(user);
// console.log("empty:",empty);



function sum(obj)
{
    let sum_salary = 0;
    for(salary in obj)
    {
        sum_salary += obj[salary];
    }
    return sum_salary;

}
let salaries = {
    // John: 100,
    // Ann: 160,
    // Pete: 130
}
let Sum_result = sum(salaries);
// console.log(Sum_result);

function multiplyNumeric(obj)
{
    for(let key in obj)
    {
        if(typeof obj[key] === "number")
        {
            obj[key] *= 2; 
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "my menu"
}
console.log("before");
for(key in menu)
{
    console.log(menu[key]);
}
multiplyNumeric(menu);
console.log("after");
for(key in menu)
{
    console.log(menu[key]);
}