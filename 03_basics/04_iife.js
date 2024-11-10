// immediately invoke function execution

(function connection(){
    // this is name iife.
    console.log("database connected");
})(); //it is must to put a ; to end the iife else it will show error 

//for iife ()() we bind a function inside first () and second () to execut immidetly
//IIFEs create a new scope, which helps in avoiding polluting the global scope with variables. Variables
// inside an IIFE are not accessible outside of it, reducing the risk of variable conflicts.

(()=>{
    console.log("database connected sucessfully throug arrrow function.");
    // this is called simple iife
})();

((name)=>{
    console.log(`welcome ${name}`);
    
})("Rohan"); //we can pass variable like this in iife.