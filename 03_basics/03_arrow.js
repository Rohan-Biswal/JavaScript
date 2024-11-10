const user1={
    name:"rohan",
    age:21,

    welcomeMsg:function(){
        const age=21
        console.log(`welcome ${this.name} and your age is ${this.age}`);
    }
}
// user1.welcomeMsg()
// user1.name="suraj"
// user1.welcomeMsg()
// console.log(this);// it will return a empty object.

function one(){
    const username="rohan"
    console.log(this.username);//it will show undefined
    
}
one()

const two=function(){
    const username="rohan"
    console.log(this.username);//it will show undefined
    
}
two()

// arrow function syntax ()=>{}
const three=()=>{
    const username="rohan"
    console.log(this.username);//it will show undefined
    
}
three()

// const addTwo=(num1,num2)=>{
//     return num1+num2 //explicit return
// }

//const addTwo=(num1,num2)=>(num1+num2) //when we have to write only one line and this s called implicit return.

const addTwo=(num1,num2)=>({username:"rohan"})
console.log(addTwo(6,7));
