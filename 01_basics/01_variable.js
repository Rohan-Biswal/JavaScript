const accountId=2001;
let email="rohanbis3@gmail.com";
var city="jalandhar";
state="punjab";
let country;//it will show undefine.

/**
 don't use var because of issue in block and functional scope.
 let is a scope variable which can be modify inside a block and has no impact on the outside of it scope.
 const can not be modify ever.
 */
// lets change values
// accountId=2002; //we can't modify the const variable 
email="abc@email.com";
city="jaipur";
state="UP"
// console.log(accountId);
console.table([accountId,email,city,state,country]);