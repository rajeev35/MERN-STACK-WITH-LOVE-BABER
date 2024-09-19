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