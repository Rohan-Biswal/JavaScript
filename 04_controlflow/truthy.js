// const userEmail="user1@mail.com"
// const userEmail=""
const userEmail=0
// const userEmail=[]

if(userEmail){
    console.log("got user email succesfully");   
}else{
    console.log("not get user email");
}

// falsy values
// false,0,-0,bigInt 0n,"",null,undefined,NaN

// truthy value
// "0", "false", " ", [], {}, functions(){}

const arr1=[]
if(arr1.length==0){
    console.log("empty array");
}

const emtObj={}
if(Object.keys(emtObj).length==0){
    console.log("object is empty");
}

//*************************nullish coalescing operator(??) only for null and undefined************** */

let var1;
// var1= null??10// it is basically if it encountered a null or undefined value so it assigned the next true value.
// var1=undefined??20??40
// var1=undefined??null//it will give null because it skip the first value.
var1=null??undefined??10//it will give 10
console.log(var1);

/***********************************Terniary operator************************************************* */

//condition?true:false

let age=21
age>=18?console.log("eligable to vote"):console.log("not eligable to vote");


