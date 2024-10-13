const express = require('express')
const app = express()
const db = require('./db')
require('dotenv').config();
const passport = require('./auth');








const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

//MiddleWare Function

const logRequest = (req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] Request Made to: ${req.originalUrl}`);
  next(); // This allows the request to continue after logging
};


const MenuItem = require('./models/MenuItem');

app.use(logRequest);

// passport.use(LocalStrategy(async (USERNAME, password, done)=>{
//      //Authontication Logic

//      try{

//       console.log('Receaved creditentials:', USERNAME, password);
//       const user = await Person.findOne({username: USERNAME});
//       if(!user)
//         return done(null, false, {message: 'Incorrect username.'});
      
//       const isPasswordMatch = user.password === password ? true : false;
//       if(isPasswordMatch){
//         return done(null,user);
//       }else{
//         return done(null, false, {message: 'Incorrect Password.'});
//       }

//      }catch(err){
//         return done(err);
//      }
// }))
// app.use(passport.initialize());

// app.get('/', passport.authenticate('local', { session: false }), (req, res, next) => {
//   if (!req.user) {
//     return res.status(401).send({ message: 'Authentication failed.' });
//   }
//   res.send('Welcome to Our Hotel');
// });


//    apna code  upar wala  

// app.use(passport.initialize());
// passport.use(new LocalStrategy(async (username, password, done) => {
//   // Authentication Logic

//   try {
//     console.log('Received credentials:', username, password);
//     const user = await Person.findOne({ username });
//     if (!user) {
//       return done(null, false, { message: 'Incorrect username.' });
//     }

//     const isPasswordMatch = user.password === password ? true : false;
//     if (isPasswordMatch) {
//       return done(null, user);
//     } else {
//       return done(null, false, { message: 'Incorrect Password.' });
//     }
//   } catch (err) {
//     return done(err);
//   }
// }));

// black box 

// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
//const bcrypt = require('bcrypt');

// passport.use(new LocalStrategy(async (USERNAME, password, done) => {
//   try {
//     console.log('Received credentials:', USERNAME, password);
//     const user = await Person.findOne({ username: USERNAME});
//     if (!user) {
//       return done(null, false, { message: 'Incorrect username.' });
//     }
    
//     const isPasswordMatch = user.password === password ? true : false;
//       if(isPasswordMatch){
//         return done(null,user);
//       }else{
//         return done(null, false, {message: 'Incorrect Password.'});
//       }
//     // const hashedPassword = user.password;
//     // const isPasswordMatch = await bcrypt.compare(password, hashedPassword);
//     // if (isPasswordMatch) {
//     //   return done(null, user);
//     // } else {
//     //   return done(null, false, { message: 'Incorrect Password.' });
//     // }
//   } catch (err) {
//     return done(err);
//   }
// }));

app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', { session: false })
app.get('/', localAuthMiddleware,(req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ message: 'Authentication failed.' });
  }
  res.send('Welcome to Our Hotel');
});

//chatgpt

// passport.use(new LocalStrategy(
//   { usernameField: 'USERNAME', passwordField: 'password' },
//   async (USERNAME, password, done) => {
//     try {
//       console.log('Received credentials:', USERNAME, password);
//       const user = await Person.findOne({ username: USERNAME });
//       if (!user) {
//         console.log('User not found');
//         return done(null, false, { message: 'Incorrect username.' });
//       }

//       const hashedPassword = user.password;
//       const isPasswordMatch = await bcrypt.compare(password, hashedPassword);
//       if (isPasswordMatch) {
//         return done(null, user);
//       } else {
//         console.log('Incorrect password');
//         return done(null, false, { message: 'Incorrect Password.' });
//       }
//     } catch (err) {
//       return done(err);
//     }
//   }
// ));

// // Authentication route
// app.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
//   res.send('Welcome to Our Hotel');
// });

// app.use(passport.initialize());

// app.get('/',passport.authenticate('local', {session: false}),function (req, res) {
//   res.send('Welcome to Our Hotel')
// })

// const express = require('express');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const bcrypt = require('bcrypt');



// // Initialize passport
// app.use(passport.initialize());

// // Configure local strategy
// passport.use(new LocalStrategy(async (username, password, done) => {
//   try {
//     console.log('Received credentials:', username, password);
//     const user = await Person.findOne({ username });
//     if (!user) {
//       return done(null, false, { message: 'Incorrect username.' });
//     }

//     // Compare hashed password
//     const isPasswordMatch = await bcrypt.compare(password, user.password);
//     if (isPasswordMatch) {
//       return done(null, user);
//     } else {
//       return done(null, false, { message: 'Incorrect password.' });
//     }
//   } catch (err) {
//     return done(err);
//   }
// }));

// // Define the authentication route
// app.get('/', passport.authenticate('local', { session: false }), function (req, res) {
//   res.send('Welcome to Our Hotel');
// });


// app.post('/', async (req,res)=>{
//     try{
//         const data = req.body
//         const newPerson = new Person(data);
//         const response = await newPerson.save();
//         console.log("Data Saved");
//         res.status(200).json(response)

//     }catch(err){
//         console.log(err);
//         res.status(500).json({error: "Internal Error"});

//     }
//     // newPerson.name = data.name;
//     // newPerson.age = data.age;
//     // newPerson.gender = data.gender;
//     // newPerson.email = data.email;
//     // newPerson.mobile = data.mobile
//     // newPerson.save((error, savedPerson)=>{
//     //     if(error){
//     //         console.log("Error saving person", error);
//     //         res.status(500).json({error: "Internal server errorr"})
//     //     }else{
//     //         console.log("Data save successfully");
//     //         res.status(200).json(savedPerson);
//     //     }
//     // })


// })


// app.get('/', async (req, res) =>{
//     try{

//         const data = await Person.find();
//         console.log('Data find');
//         res.status(200).json(data);

//     }catch(err){

//         console.log(err);
//         res.status(500).json({error: "Internal Error"});

//     }
// })

// app.get('/menu', async (req,res)=>{

//     try{
//         const data = await MenuItem.find();
//         console.log('Menu data find', data);
//         res.status(200).json(data);

//     }catch(err){

//         console.log(err);
//         res.status(500).json({error: "Internal Error"});

//     }

// });
// app.post('/menu', async (req,res)=>{
//     try{

//         const data = req.body
//         const MenuData = new MenuItem(data);
//         const response = await MenuData.save();
//         console.log("Data Saved");
//         res.status(200).json(response)


        

//     }catch(err){
//         console.log(err);
//         res.status(500).json({error: "Internal Error"});
//     }
// })


// app.get('/:workType', async (req,res)=>{
//       try{
//       const workType  = req.params.workType;  //params is like paramater. 
//       if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){

//         const response = await Person.find({work: workType});
//         console.log('Response Fetched');
//         res.status(200).json(response);

        
//       }else{
//         res.status(404).json({error: 'Invalid Work Type'})
//       }

//       }catch(err){
//         console.log(err);
//         res.status(500).json({error: "Internal Error"});

//       }
// });


//import the router file.

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

const menuItemRoutes = require('./routes/menuItemRoutes');
const Person = require('./models/person');
app.use('/menu',localAuthMiddleware,menuItemRoutes);



// app.get('/chicken', (req,res)=>{
//     res.send('Sure sir I would to liker serve Chicken')
// } );
// app.get('/idli', (req,res)=>{
//     var costomize_idli = {
//         name: 'rava idli',
//         size: '10 cm diameter',
//         is_shamber:true,
//         is_chutney:false
//     }
//     res.send(costomize_idli)
// } );




app.listen(PORT, ()=>{
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
