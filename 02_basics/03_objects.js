const user1={
    position:"manager",
    age:22,
    name:{
        fullname:{
            firstName:"Rohan",
            lastName:"biswal"
        }
    },
    city:"Jalandhar",
    state:"Punjab"
}
// console.log(user1.name.fullname);

let obj1={
    1:"a",
    2:"b",
    3:"c"
}
let obj2={
    4:"d",
    5:"e",
    6:"f"
}
let obj3=Object.assign(obj1,obj2);
console.log(obj3);

