// object .create (constructor methord) singleton

// object literals

const mySym=Symbol("key1")
const user1={
    name:"rohan",
    age:21,
    [mySym]:"pass123",
    location:"jalandhar",
    email:"rohan.google.com",
    isLoggedIn:false,
    lastLogginDay:["monday","saturday"]
}
console.log(user1.location);
// or
console.log(user1["email"]);
console.log(user1[mySym]);
user1.email="rohan.abc.com"
//Object.freeze(user1)//after freezing the object their value cant be changed.
user1.email="rohan.chat.com"
console.log(user1);
user1.greeting=function(){
    console.log("Hello Users");
}
user1.greetingTwo=function(){
    console.log(`Hello Users ${this.name}`);
}
user1.greeting()
user1.greetingTwo()


