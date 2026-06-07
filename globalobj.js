//by defualt every programs creates three things
//- global execution context 
//- global object (stores many methods,variable objects etc which is acessible in the global level)
//- this (keyword which at the global level points to global object)

// global object is referred as window



function a() { //present in global object
    let b = 2;  //not present in global object
}

const x = 5; //present in global object
