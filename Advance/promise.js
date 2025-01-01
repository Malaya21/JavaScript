// // Creating a new promise that resolves after 1 second
// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Promise pending"); // Logs 'Promise pending' after 1 second
//         resolve('Malaya'); // Resolves the promise with the value 'Malaya'
//     }, 1000);
// });

// // Handling the resolved promise
// promiseOne.then((value) => {    
//     console.log(value); // Logs 'Malaya'
//     console.log('Promise resolve'); // Logs 'Promise resolve'
// });

// // Creating a new promise that resolves or rejects based on a condition
// const promiseTwo = new Promise((resolve, reject) => {
//     const err = true; // Change this to false to test the resolve case
//     setTimeout(() => {
//         (!err) ? resolve() : reject(); // Resolves or rejects based on the value of err
//     }, 1500);
// });

// // Handling the resolved or rejected promise
// promiseTwo.then((data) => {
//     console.log("Promise resolved"); // Logs 'Promise resolved' if resolved
// }).catch(() => {
//     console.log("Promise reject"); // Logs 'Promise reject' if rejected
// });

// // Promise Chaining
// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => resolve({name: "Malaya", roll: 20, age: 20}), 1000); // Resolves with an object after 1 second
// });

// // Handling the resolved promise and chaining another then
// promiseThree.then((user) => {
//     console.log(user); // Logs the user object
//     return user.name; // Returns the name property for the next then
// }).then((name) => {
//     console.log(name); // Logs 'Malaya'
// });

// // Creating a new promise that resolves immediately
// const promiseFour = new Promise((resolve, reject) => {
//     resolve("Malaya"); // Resolves immediately with the value 'Malaya'
// });

// // Handling the resolved promise and returning the data
// const tmp = promiseFour.then((data) => {
//     console.log(data); // Logs 'Malaya'
//     return data; // Returns the data for further chaining if needed
// });

// console.log(tmp); // Logs the promise object

// // Creating a new promise that resolves after a timeout
// const final = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(); // Resolves the promise after a timeout
//     });
// });

// // Handling the resolved promise and using finally
// final.then(() => {
//     console.log("The promise is resolved"); // Logs 'The promise is resolved' if resolved
// }).catch(() => {
//     console.log("The promise is rejected"); // Logs 'The promise is rejected' if rejected
// }).finally(() => {
//     console.log("This is finally block it must executed"); // Logs 'This is finally block it must executed' regardless of resolve or reject
// });

// //Use of async and await 

const promiseFive = new Promise((resolve,reject)=>
setTimeout(()=>{console.log("inside set time out");
    const err = false;
    (err)?reject('The promise is rejected'):
    resolve("The promise is resolved");
}))

const  check=async()=>{

    const result = await promiseFive ;
    console.log(result);
       
}
// check();
/**
 * Asynchronous function that handles a promise and logs the result.
 * 
 * This function demonstrates the use of async/await with try/catch/finally blocks.
 * It waits for the resolution of `promiseFive`, logs the result if successful,
 * logs the error if the promise is rejected, and always logs a cleanup message.
 * 
 * @async
 * @function check2
 * @returns {Promise<void>} A promise that resolves when the function completes.
 */
const check2 = async ()=>{
    try{
        const result = await promiseFive;
        console.log(result);
                
    }
    catch(err){
        console.log(err);      

    }
    finally{
        console.log("This contains cleanup code it is inside finally");
        

    }
}
// check2();

//Api using async await

const Api = async () =>{
const responce = await fetch("https://api.github.com/users/Malaya99");

console.log( responce);
const data = await responce.json();
console.log( data);


}
// Api();

fetch('https://api.github.com/users/Malaya99').then((responce)=>{
    const data = responce.json()
    console.log(data);
    return data;
}).then((result)=>console.log(result)).catch((err)=>console.log("Hre is an error :"+err)
)
