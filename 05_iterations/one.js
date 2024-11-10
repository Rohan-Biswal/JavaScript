// for (let index = 0; index <= 10; index++) {
//     console.log(`current index is ${index} `);
// }


// table of 1 to 10
// for(let i=1;i<=10;i++){
//     console.log(`table of ${i}`);
//     for(let j=1;j<=10;j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

// let arr1=["batman","superman","spiderman","shaktiman"]
// for(let i=0;i<arr1.length;i++){
//     console.log(arr1[i]);
// }

//break and continue

//break will end the loop completly and come out of it.

// for (let index = 0; index < 10; index++) {
//     if(index==5){
//         console.log("5 is detceted");
//         break;
//     }
//     console.log(`the index is ${index}`);
// }

//continue will skip one iteration at the time of encountering continue statement.
for (let index = 0; index < 10; index++) {
    if(index==5){
        console.log("5 is detceted");
        continue;
    }
    console.log(`the index is ${index}`);
}
