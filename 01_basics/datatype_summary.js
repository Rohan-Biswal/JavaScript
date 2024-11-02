/**
 * we have two types of datatyped one is premitive and another is non premitive
 * PRIMITIVE(when the variable is passed in any block only the value is passed of code and its get modified orginal vlaue didn't change).
 * string,number,bollean,bigint,null,undefined,symbol
 * NON PREMITIVE(When the value passed to any block of code it pass its reference and when we modified the value the orignal value get changed).
 * array,object,function
 */
let score=100
let radai=4.05
let isloggedIn=false
let id1=Symbol("123")
let id2=Symbol("123")
// console.log(id1===id2);//it will show false because they are not equal


let heros=["saktiamn","batman","bheam"]
let obj={
    name:"Rohan",
    age:12,
    city:"Jalandhar"
}
const myFun=function(){
    console.log("Hello World");
}
/*******************************************memory*****************************************************/
//STACK(premitive) and HEAP(non premitive)
let userName1="rohan"
let userName2=userName1
userName2="krishna"
// console.log(userName1);
// console.log(userName2);
//here the value is passed as a new copy of username1 to username2 thatswhy when the vlaue of username1
//has not changed after we modify username2 to krishna.

let user1={
    name:"Rohan",
    email:"rohan@gmail.com",
    age:21
}
let user2=user1
user2.email="krish@gmail.com"
console.log(user1.email);
console.log(user2.email);
//here the email of user1 has also changed because of changed in user2 email.This is only because the
// object has passed its reference and if reference is same so any thing we changed in one will changed
// for another also.




