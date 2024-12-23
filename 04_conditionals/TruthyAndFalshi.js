
//There are two types of values in JavaScript: truthy and falsy
//Falsy values are: false, 0, "", null, undefined, NaN
//Truthy values are: true, 1, "0", "false", [], {}, function(){}," ", "null", "undefined", "NaN"
//Example:
let x ='0';
if(x){
    console.log("Truthy");
}
else{
    console.log("Falsy");
}
//Output: Truthy
if(x==0){
    console.log("Truthy");
}
else{
    console.log("Falsy");
}
//Output: Truthy 
if(x===0){
    console.log("Truthy");
}   
else{
    console.log("Falsy");
}   
//Output: Falsy because === checks for both value and type
//Falsy value are : null,0,false,undefined,NaN,''
//Truthy value are: " ","0",1,"false","NaN",[],{},function(){}