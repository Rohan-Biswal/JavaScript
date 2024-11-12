//for of loop

// const userName="Rohan Biswal"

// for(const value of userName){
//     console.log(`charater is- ${value}`);
// }

//for array
// const arr1=[10,20,30,40,50]

// for(const num of arr1){
//     console.log(`values in array is- ${num}`);
// }

// maps it don't hold duplicate values

const map= new Map();
map.set("IN","India");
map.set("CH","China");
map.set("PAK","Pakisthan");
map.set("US","United States Of America");

// now how we can iterate in maps using for of loop
//  for(const [key,value] of map){  //we destructure the map in key and values and we can use either one of them or both.
//     console.log(`In map->${key} :- ${value}`);
//  }

//seprate use of key and value

//  for(const [key,value] of map){
//     console.log(`In map key->:- ${key}`);
//     console.log(`In map value->:- ${value}`);
//  }

 // but for object dont work the same
// lets try

//error shown->TypeError: user1 is not iterable

const user1={
    name:"Rohan",
    age:21,
    work:"student"
}

for(const [key,value] of user1){
    console.log(`the detais is ${key}->${value}`);
}