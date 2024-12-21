// function name()
// {
//     console.log("M");
//     console.log("a");
//     console.log("l");
//     console.log("a");
//     console.log("y");
//     console.log("a");
//     return "Bye"
    
// }
// name();
// function add(num1,num2)
// {
//     return num1+num2;
// }
// console.log(add(10,20));

//* we can provide the default argument to the fuction parameters */
// function defaultPrams(name="Malaya"){ //If any name is not pass in the argument then by it take the default argument
//     return name;
// }
// result = defaultPrams("Tanmaya");//This overides the default argument
// result2 = defaultPrams();//Here it returns the default argument
// console.log(result);//It prints Tanmaya
// console.log(result2); // It prints Malaya
//***Use of rest or sprade oprator
// function Marks(mark)
// {
//     return mark;
// }
//  result = Marks(99,30,50,70) // Here in this function it can returns only one of the mark which pressent in starting 

// function allMarks(...mark)
// {
//     return mark;
// }
//  result2 = allMarks(99,30,50,70) // In this function it returns all the marks as an array
// console.log(result); // This return only 99
// console.log(result2); //This return [99,30,50,70]

//We can also use object as an parameters 
const user ={
    name : "Malaya",
    gen : "Male",
    age :20
}

function asAnArgument(users)
{
    return `User name is ${users.name} age is ${users.age} and gender is ${users.gen}`

}
console.log(asAnArgument(user)); // Here we pass the object as an argument 
console.log(asAnArgument({name:'Ankit',age:21,gen:'Male'})); // here we pass the objectly directly
//Also send array as an argument
//Here we learn about the functions and how to pass the arguments in the functions



