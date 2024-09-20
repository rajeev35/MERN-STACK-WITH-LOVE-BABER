// function add(a,b){
//     return a + b;

// }

// var add = function(a,b){
//     return a + b;
// }
// var add = (a,b) => {return a + b};

// var add = (a,b) => a + b;
// var result  = add(2,58);
// console.log(result);

// (function(){
//     console.log("Rajeev Kumar")
// })();


function callback(){
    console.log("Rajeev is calling a callback function")
}

const add = function(a,b, callback){
      var result = a + b;
      console.log('result: '+result);
      callback(); 
}

add (3,4,callback);


var fs  = require('fs');
var os = require('os');

var user = os.userInfo();
console.log(user.username);

fs.appendFile('greeting.text', 'Hi' + user.username + '!', () =>{console.log('file is created')});

console.log(os);


const notes  = require('./notes.js');

var _ =  require('lodash');
console.log('SERVER FILE IS AVALIABLE');

var age = notes.age;
var  result  = notes.addNumber(age+16,10);

console.log(age)
console.log(+result)