function sayName(){
    console.log("R");
    console.log("O");
    console.log("H");
    console.log("A");
    console.log("N");
}
// sayName();

function addTwoNum(num1,num2){
    return num1+num2;
    //console.log("this will never exicute"); //after return statement not will execute it will come out of that block.
    
}
let sum=addTwoNum(2,4);
// console.log(`the sum of both number is- ${sum}`);
// or
// console.log("Sum is- ",sum);

function isLoggedIn(userName){
    console.log(`${userName} just logged in!`);   
}

// console.log(isLoggedIn("rohan"));
// console.log(isLoggedIn(""));// it will print just logged in.
// console.log(isLoggedIn()); // undefined just logged in.

function isLoggedInn(userName){
    if(userName===undefined){
        console.log("Pls enter the user name.");
        return;
    }
    console.log(`${userName} just logged in!`);   
}
// isLoggedInn("krishna");
// isLoggedInn();

function calPrice1(cost1,cost2){
    return cost1+cost2;
}
let totalPrice=calPrice1(300,450);
// console.log(totalPrice);

//rest operator it is used when we have to pass multiple argument randomly so at the time of calling a function
//  we can pass as many argument and it will store in that spread variable.
function calPrice2(...cost){
    return cost;
}
// console.log(calPrice2(200,300,400,500));

// we can pass object inside the function.

const user1={
    username:"rohan",
    age:21
}

function userDetails(anyObj){
    console.log(`The name of the user is ${anyObj.username} and the age is ${anyObj.age}.`);
}
// userDetails(user1);

const arr1=[100,200,300,400]
function arrayFun(anyArr){
    console.log(`the element is ${anyArr[1]}`);   
    return;
}
arrayFun(arr1);