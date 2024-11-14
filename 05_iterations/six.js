const arr1=[1,2,3,4,5,6,7,8,9,10]
// let value=arr1.map((num)=> num+10)
// console.log(value);


//this is called chaining we can use multiple maps or filter
const newArr=arr1
                .map((num)=> num*10)
                .map((num)=>num+2)
                .filter((num)=>num>40)
// console.log(newArr);

//reducer

let arr2=[1,2,3]
// const total=arr2.reduce(function(acc,cur){
//     console.log(`the value of acc:${acc} and cur:${cur}`);

//     return acc+cur
// },5)//after the comma this is the accumalator value or we can say the starting value
// console.log(total);

//in arrow function

// let myTotal=arr2.reduce((acc,cur)=>{
//     console.log(`the value of acc:${acc} and cur:${cur}`);
//     return acc+cur
// },0)
// console.log(myTotal);

//basic functionality of reducer

let books=[
    {
        course:"javascript",
        price:8999
    },
    {
        course:"react",
        price:5999
    },
    {
        course:"node",
        price:3999
    },
    {
        course:"mongoDb",
        price:12999
    }
]
const totalPrice=books.reduce((acc,item)=>acc+item.price,0)
console.log(`the total price of the full stack course is ${totalPrice}`);
