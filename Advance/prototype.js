// Object.prototype.Malaya = function()
// {
//     this.userName ="Hello Malaya";
// }
// const obj = {
//     userName:'Malaya',
//     Age : 20,
//     Gen :'Male'
// }



// const student = {
//     name :'Malaya',
//     age:20,
//     gen:'male'
// }
// const teacher = {
//     Tname :"Suman",
//     Tage:39,
//     Tgen:'male',
//     __proto__:student
// }
// const college ={
//     Cname :'ABIT',
//     __proto__:teacher
    

// }
// console.log(college.gen);
// console.log(college.Tname);
// console.log(college.name);


//Q- create a prototype that retuens the true length of a string
const str =String ("  Malaya   ");
String.prototype.TrueLength = ()=>{
    console.log(typeof this);
    console.log(this.length);
   
}
str.TrueLength();