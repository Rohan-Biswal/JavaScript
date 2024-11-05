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
// console.log(obj3);


// const user2=new Object() //when we declare in this form this is called Singleton object
const user2={}
user2.id="01"
user2.name="Rohan"
user2.age=22
// console.log(user2);
// console.log(Object.keys(user1));
// console.log(Object.values(user1));
// console.log(Object.entries(user1));
// console.log(user2.hasOwnProperty("name"));

// object destructring

const course={
    courseName:"JavaScript Basics",
    cousreFees:1999,
    courseInstructor:"Hitesh",
    courseStartDate:"04-25-2022",
    courseEndDate:"10-30-2030"
}
const {courseName}=course;
console.log(courseName);
// or
const {courseName:name}=course;//we can give another name to access.
console.log(name);


//api basics
//the data will mostly in json format or in array format
// {
//     key:values
// }

// or like this array and inside that objects
// [
//     {},
//     {},
//     {}
// ]

// we can use randomuser me api to get free api data and we can format or understand by using json
//  formator in google and breakdown the api in various object and multiple array so understand better.
