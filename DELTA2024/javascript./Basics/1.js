var a = 10;
var b = 20;
var c = a + b;
console.log(c);

// var count = 10;
// for(var i = 1; i<=10; i++ ){
//     console.log(i);
// }

const persion = {
    name: "Rajeev Kumar",
    age: 21,
    isStudent: false,
    hobbies:["Cricket","cooking", "painting"]
};
console.log(persion.hobbies);


const age = [32,33,44];
const result = age.filter(checkAge);

function checkAge(age){
    return age>30
}
console.log(result)

const prompt = require('prompt-sync')();
const ages = prompt("Please Enter Your Age");
if(ages<18){
    console.log("You get a 20% discount");
}else{
    console.log("You get a 30% senior discount");
}