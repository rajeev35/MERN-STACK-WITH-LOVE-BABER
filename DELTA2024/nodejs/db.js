// const mongoose = require('mongoose');
// const mongoURL = '	mongodb://127.0.0.1:27017/hotels'  //Relaace database with your database namee 
// mongoose.connect(mongoURL, {
//     useNewURLParser: true,
//     useUnifiedTopology: true

// })

// const db = mongoose.connection;

// //define event listners for database connection
// db.on('connection',()=>{
//     console.log('Connected  to MongoDB server');
// })
// db.on('error',(error)=>{
//     console.log('Connected  to MongoDB Error',error);
// })
// db.on('disconnected',()=>{
//     console.log('MongoDB Disconnected');
// })

// module.exports = db

const mongoose = require('mongoose');
require('dotenv').config();
//const mongoURL = 'mongodb://127.0.0.1:27017/hotels'; // Replace with your database name
//const mongoURL = 'mongodb+srv://rajeev35:Rajeev290@cluster0.idxgm.mongodb.net/'
//const mongoURL=mongodb+srv://rajeev35:Rajeev290@cluster0.idxgm.mongodb.net/myDatabase?retryWrites=true&w=majority

const mongoURL = process.env.MONGODB_URL;
mongoose.connect(mongoURL, {
    useNewUrlParser: true,  // Corrected option name
    useUnifiedTopology: true
});

const db = mongoose.connection;

// Define event listeners for database connection
db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (error) => {
    console.log('MongoDB connection error:', error);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

module.exports = db;  // Corrected export statement
