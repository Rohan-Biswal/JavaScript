// globel scope variable will be accessable to block scope but block scope varible can 
// only be accessable inside that particular block.

let a=200
if(true){
    let a=5
    // console.log("block scope or inner a-",a);
}
// console.log("global scope variable a-",a);

function one(){
    const username="Rohan"
    function two(){
        const work="studen"
        console.log(username+ " is a " + work);//here username is act as a global scope for two function. 
    }
    two()
}
// one()

if(true){
    const username="rohan"
    if(username=="rohan"){
        const work="student"
        console.log(username,"is a",work);
    }
}
// +++++++++++++++++++++++++++hoisting basic concept+++++++++++++++++++++++++++++++++++++++++++++++++
// addone(5);
console.log(addone(5));

function addone(num){
    return num+1
}

// addone(5);

// addtwo(5) //ReferenceError: Cannot access 'addtwo' before initialization.
const addtwo=function(num){
    return num+2
}
console.log(addtwo(5));
