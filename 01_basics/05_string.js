let name="rohan"
let score=100
// console.log(name+" score is "+score);
// or we can write in another form inside this ``.
// console.log(`${name} score is ${score}`);

const gameName=new String("rohan")
// console.log(gameName[1]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('h'));

let str="hello_world"
let newStr1=str.substring(1,8);//it is used to print sub part of a string
//console.log(newStr1);
let newStr2=str.slice(-10,-1)
//console.log(newStr2);

let nname="  rohan  "
console.log(nname.trim());//used to remove extra spaces from front and back.
let url="http://rohan-biswal.com%05biswal"
console.log(url);
console.log(url.replace("%05","-"));
console.log(url.includes("biswal"));//it will check if biswal is present or not in the url and return true or false
console.log(url.includes("biSWal"));//false
let strr="roh-an-bis-wal-03"
console.log(strr.split(""));





