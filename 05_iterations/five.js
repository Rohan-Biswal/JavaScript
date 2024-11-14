//for each loop

let arr1=["Javascript","Java","Pyhton","Cpp","C","Ruby"]

// arr1.forEach((val)=>{
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }
// arr1.forEach(printMe)

//in for each we have three parameters item,index and the whole array

// arr1.forEach((val,index,array)=>{
//     console.log(`value is ${val} at index-${index} from this array ${array}`);
// })

//but foreach loop dont return any thing where as filter do return

//foreach

arr1.forEach((val)=>{
    return val;//this will return nothing
})

const myNum=[1,2,3,4,5,6,7,8,9,10]
// let vlaue=myNum.filter((num)=> num)// this will return the myNum array

// let vlaue=myNum.filter((num)=> num>4)
// let vlaue=myNum.filter((num)=> {
//     return num<7
// })
// console.log(vlaue);

let newNum=[]
myNum.forEach((num)=>{
    if(num>4){
        newNum.push(num)
    }
})
console.log(newNum);
