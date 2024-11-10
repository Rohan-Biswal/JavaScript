const isLoggedIn=false
// if(isLoggedIn){
//     console.log(`user is sucessfully logged in.`);
// }else{
//     console.log(`please check your credential.`);
// }

const balance=3000;
// if(balance>=1000) console.log("you have 1000rs or more than that.");


const userLoggedIn=true
const debitCard=false
// and (&&)
// if(userLoggedIn && debitCard) console.log("you can now shop any thing.");
// else console.log("please fullfil the required task to shop.");

if(userLoggedIn || debitCard) console.log("you can now shop any thing."); // either any of one condition should be true.
else console.log("please fullfil the required task to shop.");


