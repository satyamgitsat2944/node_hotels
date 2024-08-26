const mongoose = require('mongoose');

//Define the MOngoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels'

//Set up MongoDB connection
mongoose.connect(mongoURL , {
        useNewUrlParser:true,
        useUnifiedTopology:true
})


//Mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection ;


//Define event listeners for database connection

db.on('connected' , () => {
    console.log('Connected to MongoDB server');
});

db.on('error' , () => {
    console.log('MongoDB connection error');
});

db.on('disconnected' , () => {
    console.log('DisConnected to MongoDB server');
});

//Export the database connection
module.exports =  db;