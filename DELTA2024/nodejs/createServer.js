const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Welcome to My Hotel How can I heelp You? We have List of Menus')
})


app.get('/chicken', (req,res)=>{
    res.send('Sure sir I would to liker serve Chicken')
} );
app.get('/idli', (req,res)=>{
    var costomize_idli = {
        name: 'rava idli',
        size: '10 cm diameter',
        is_shamber:true,
        is_chutney:false
    }
    res.send(costomize_idli)
} );

app.listen(3000, ()=>{
    console.log('Listining on Port Number 3000');
})


// const express = require('express')
// const app = expresss()

// app.get('/', function(rreq, res){
//     request.send('Hello World')
// })

// app.listen(3000,() =>{
//     console.log("Server is Running at port Number 3000");
// });

// const express = require('express')
// const app = express()

// app.get('/',function(req,res){
//     request.send("Welcome to My Hotel How can I help")
// })

// app.listen(3000, ()=>{
//     console.log("Apllication is Running at Port Number 3000");
// });