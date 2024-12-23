//This is a simple example of an IIFE (Immediately Invoked Function Expression)


(function(){
    console.log("This an IIFE function");
    })();
    //It must end with semicolon to avoid errors.
    //It avoids polluting the global scope.
    //It is a function that is executed immediately after it is created.
    //It is also known as a self-invoking function.
    //It is used to create a private scope.
    //It is used to avoid naming conflicts.
    (()=>{
        console.log("This is an arrow function with IIFE function");

        })();
    //This is an self invoking function with arrow function.
   
    //It can also take arguments and return values.
     const ans = (function(a,b){
        console.log(a+b);
        return a+b;      
        })(2,3);
       console.log(ans);
       //It will return 5.
        