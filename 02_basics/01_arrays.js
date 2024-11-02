let arr1=[0,1,2,3,4]
let arr2=new Array(10,20,30,40)
// console.log(arr2);

//to add and delete element in last we use push and pop resp.
//to add and delete element at start we use unshift and shift

arr1.push(5);
arr2.unshift(5)
// console.log(arr1);
// console.log(arr2);
let arr3=arr1.join()//it will convert to string.
// console.log(typeof(arr3));

//slice and splice
let arr4=[11,22,33,44,55,66,77,88,99]
let arr5=arr4.slice(1,5)
// console.log(arr4);
// console.log(arr5);
let arr6=arr4.splice(3,2)
// console.log(arr4);
// console.log(arr6);
//main difference is when we use slice it took the sub part and the orignal array remain same.
//but in splice when we took the splice part from orignal array it remove that element from the orignal array.

//joining multiple arrays
let marvel_heros=["thor","spiderman","ironman"]
let dc_heros=["superman","flash","batman"]
//marvel_heros.push(dc_heros)//it will push whole array in marvel_heros as an single element including [].
//so better is to use concat
let all_heros1=marvel_heros.concat(dc_heros)
// console.log(all_heros1);

// another best methord is via spread operator (...)
// console.log(...marvel_heros,...dc_heros);


// some more array methords
console.log(Array.isArray("rohan"));//its return true or false that it is an array or not
console.log(Array.isArray(arr4));
console.log(Array.from("rohan"));
console.log(Array.from({name:"rohan"}));//this can't directly convert key value pair into an array. 

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));//it convet element into an array.

