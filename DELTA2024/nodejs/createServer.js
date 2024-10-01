const express = require('express')
const app = express()
const db = require('./db')

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const Person = require('./models/person');
const MenuItem = require('./models/MenuItem');

  

app.get('/', function (req, res) {
  res.send('Welcome to My Hotel How can I heelp You? We have List of Menus')
})


app.post('/person', async (req,res)=>{
    try{
        const data = req.body
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("Data Saved");
        res.status(200).json(response)

    }catch(err){
        console.log(err);
        res.status(500).json({error: "Internal Error"});

    }
    // newPerson.name = data.name;
    // newPerson.age = data.age;
    // newPerson.gender = data.gender;
    // newPerson.email = data.email;
    // newPerson.mobile = data.mobile
    // newPerson.save((error, savedPerson)=>{
    //     if(error){
    //         console.log("Error saving person", error);
    //         res.status(500).json({error: "Internal server errorr"})
    //     }else{
    //         console.log("Data save successfully");
    //         res.status(200).json(savedPerson);
    //     }
    // })


})


app.get('/person', async (req, res) =>{
    try{

        const data = await Person.find();
        console.log('Data find');
        res.status(200).json(data);

    }catch(err){

        console.log(err);
        res.status(500).json({error: "Internal Error"});

    }
})


app.get('/chicken', (req,res)=>{
    res.send('Sure sir I would to liker serve Chicken')
} );
// app.get('/idli', (req,res)=>{
//     var costomize_idli = {
//         name: 'rava idli',
//         size: '10 cm diameter',
//         is_shamber:true,
//         is_chutney:false
//     }
//     res.send(costomize_idli)
// } );

app.listen(3000, ()=>{
    console.log('Listining on Port Number 3000');
})

// app.post('/items',(req,res)=>{
//     res.send('data is saved');
// })


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