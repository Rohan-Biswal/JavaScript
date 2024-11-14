//for in loop specially used to iterating the object.
let user1={
    name:"Rohan",
    age:21,
    city:"jalandhar",
    state:"punjab"
}

// for(let key in user1){ // only to iterate for keys
//     console.log(key);
// }

// for(let key in user1){
//     console.log(` the key is ${key} and value is ${user1[key]}`);
// }

//for in loop in array
let arr1=["Javascript","Java","Pyhton","Cpp","C"]
for(let key in arr1){
    console.log(arr1[key]);
}


const programming=["Javascript","Java","Pyhton","Cpp","C"]

// programming.forEach((item)=>{
//     console.log(item);
// })

const books=[
    {title:"book one",genre:"science",publish:2003,edition:2013},
    {title:"book two",genre:"history",publish:1983,edition:2000},
    {title:"book three",genre:"friction",publish:2009,edition:2017},
    {title:"book five",genre:"science",publish:2001,edition:2012},
    {title:"book six",genre:"non-friction",publish:2005,edition:2011},
    {title:"book seven",genre:"history",publish:1980,edition:2016},
    {title:"book eight",genre:"friction",publish:1991,edition:2018}
]

let userBook=books.filter((bk)=> bk.genre=="friction")//it we are writting arrow function without {} or
// in one line no need to write return.
userBook=books.filter((bk)=>{return bk.publish>=2000 && bk.genre=="friction"})
// console.log(userBook);
