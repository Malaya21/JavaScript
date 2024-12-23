//control statement - if statement is used to execute a block of code only if the condition is true
//Syntax: if(condition){ code to be executed} else{ code to be executed}
//Example:
if(4>3){
    console.log("4 is greater than 3");
}
else{    
    console.log("4 is not greater than 3");
}
//Output: 4 is greater than 3

//comparison operators are used to compare two values
// == equal to < less than > greater than <= less than or equal to >= greater than or equal to != not equal to === equal value and equal type !== not equal value or not equal type
//Example:
if(4==3){
    console.log("4 is equal to 3");
}
else{    
    console.log("4 is not equal to 3");
}   
//Output: 4 is not equal to 3
let a = 4;
let b = "4";
if(a!==b){
    console.log("True");
}   
else{    
    console.log("False");
}
//Output: True


//Logical operators are used to determine the logic between variables or values
// && and || or ! not
//Example:
let y = 6;
if(y>0 && y<10){
    console.log("y is between 0 and 10");
}
else{
    console.log("y is not between 0 and 10");
}
//Output: y is between 0 and 10
let p = 6;
if(p>0 || p<10){
    console.log("p is either greater than 0 or less than 10");
}
else{
    console.log("p is neither greater than 0 nor less than 10");
}
//Output: p is either greater than 0 or less than 10

//Nullish coalescing operator (??) is used to provide a default value if the value is null or undefined
//Example:
let z = null;
let result = z ?? "default value";
console.log(result);
//Output: default value

//Ternary operator is used to assign a value to a variable based on a condition
//Syntax: condition ? value1 : value2
//Example:
let age = 20;
let status = (age>=18) ? "Adult" : "Child";
console.log(status);
//Output: Adult
