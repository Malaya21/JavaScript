//We can aslo create object with the help of constructor
const obj = new Object();
//const  obj = {}   // This is an object literal it is exactly same as object above but having some difference it is non singletone object
// obj.id = "20"
// obj.name="MAlaya"
// obj.age =21;

// console.log(typeof obj);
// console.log( obj);

//Object can store it self an object 
const nestedObj = {
    Abit:{
        engineering:{
            btech:{
                one:"Mechanical",
                two:"ELectrical",
                three:"Computer Science"

            },
            Bsc:{
                one:"ITM",
                two:"BCA",

            }
        },
        Masters:{
            one:"Mca",
            two:"MBA"
        }
    }
}
// console.log(nestedObj.Abit.engineering.btech);


const obj1 = {1:"a",2:"b"};
const obj2 = {3:"c",4:"d"};


// const obj3 = Object.assign({},obj1,obj2)// This can be use to join to or more objects 
const obj4  = {...obj1,...obj2} //This also doing the same f
// console.log(obj4);

//We can also abstract key and also values 
// console.log(Object.keys(obj4)); //This returns keys as an array
// console.log(Object.values(obj4)); //This returns values as an array

// console.log(Object.entries(obj4));  //This returns both key and values asa an array first is the key and second is value
// console.log(obj4.hasOwnProperty(3));   //It returns the value in boolean if it present it returns true or false


//***********Destructuring JS objects ***********/
const demoObj =  {
    name:"ANKIT",
    age :'21',
    gen:'MALE',
    Branch : "BSC itm"
}
// console.log(demoObj);
// const {name,age,gen,Branch} = demoObj; //This is use to destructuring the object..
//We can also use short form for long name properties for easy acces
const {Branch:b} =demoObj;//Here we use b for the branch

console.log(b);




