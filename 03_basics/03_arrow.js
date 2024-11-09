const user1={
    name:"rohan",
    age:21,

    welcomeMsg:function(){
        console.log(`welcome ${this.name}`);
    }
}
user1.welcomeMsg()
user1.name="suraj"
user1.welcomeMsg()
console.log(this);// it will return a empty object.
