const myArray = [10,20,30,40,50]
const arr = myArray;
// console.log(arr)
// arr[1]=90;
// console.log(myArray);
// arr.push(99);
// arr.pop();
// arr.push(999);
// console.log(arr);

// myArray.shift();
// myArray.unshift(12);

//slice & splice

// const newArray = arr.slice(1,5);
// console.log(newArray);
// console.log(arr);
// //const SpiceArray = arr.splice(1,3); //This cut the original array and returns the cut part.

// console.log(SpiceArray);
// console.log(myArray);


// console.log(myArray.indexOf(50));     // it returns index value
// console.log(arr.includes(20));  //It returns true or false

// const joinArray = arr.join()    //it returns array as a string value;
// console.log(joinArray);
// other concepts
// //joining two Array
const marvel_hero = ['Iron man',"Spider man","Ant man","Thor"];
const dc_hero = ['Supper man',"Bat man","Aqua man","Flash"];

// const all_heros=marvel_hero.concat(dc_hero);
// const all_heros  = marvel_hero.push(dc_hero);
// console.log(all_heros);
// console.log(marvel_hero[4][2]);


// // *** sprad oprator ...
// const all_heros = [...marvel_hero,...dc_hero]//
// console.log(all_heros);
// If there is a nested array then at that time we use flat array so that we can get a simple array
const nestedArray = ["India",["Odisha",["Cuttack",["Choudwar",["Sanakrpur"]]]]]
// console.log(nestedArray[1][1][1]);
//TO solve this type of problem we use flat method;
const solveNestedArray = nestedArray.flat(4); //Here 4 is representing the Number of depth tosolve the given array
//here are some methods to check the 
// console.log(solveNestedArray);
// console.log(Array.isArray("Malaya"));   //This is use to check whether this is array or not it returns boolian value

console.log(Array.of("malaya","tanmaya","dfguisgf"))//It created this as an array






