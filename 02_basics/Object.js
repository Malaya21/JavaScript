//Object litrals
const obj = {
    name :"Malaya",
    branch :"ITM",
    age : 20,
    gen :"Male",
    "Full name" :"Malaya Sahoo"
}
// console.log(obj.age);   //It access the object one by one
// console.log(obj["age"]);    //it also same as . but it have some advantages
// console.log(obj["Full name"]);  //This can not be access through . oprator it can only be access through []

// We can change an object by thir key 
obj.name="TAnmaya"
// console.log(obj);   //It can access the full object

// To prevent this channge we can use freze
// Object.freeze(obj) // from this we can not change this object

obj.name = "MAlaya" // This sentece does not have any effect because we freze the object before it not showing any type of error

// console.log(obj);
// We can also add some new property to the object 
obj.Roll = 20;
// console.log(obj);
// We can also add function or array to the object 
obj.Hlo = function()
{
    console.log(`Hello - ${this.name} Good Morning`);
    return "Bye"
    
}
console.log(obj.Hlo());

