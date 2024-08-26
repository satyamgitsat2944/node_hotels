
const express = require('express')
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());   //req.body



const MenuItem = require('./models/MenuItem');

app.get('/', function(req,res){
    res.send('Welcome to HOTEL PARADISE');
})
/*

app.get('/chicken', (req,res) => {
    res.send('Sure sir I would like to serve chicken');
})

app.get('/idli', (req,res) => {
    res.send('Sure sir I would like to serve IDLI');
})
    */

/*
//POST route to add a person
app.post('/person', async (req,res)=>{
   
    try{
        const data = req.body //Assuming the request body contains the person data

        //create a new Person document using the Mongoose model
        const newPerson = new Person(data);

        //Save the new person to the database
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
            
    
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
    
})

//GET method to get the person
app.get('/person',async (req,res) => {
    try{
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

app.post('/menu' , async (req,res) =>{
    try{
        const data  = req.body;
        const newItem = new MenuItem(data);

        //Save the new item to the database
        const response = await newItem.save();
        console.log('data saved');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

app.get('/menu',async (req,res) => {
    try{
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

app.get('/person/:workType' ,async (req,res) => {
    try{
        const workType = req.params.workType; //Extract the work type from the url parameter
        if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
            const response = await Person.find({work:workType});
            console.log('response fetched');
            res.status(200).json(response);
        }
        else{
           res.status(404).json({error: 'Invalid work type'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})   */

//Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// Use the routers
app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);

app.listen(3000 , ()=> {
    console.log('Listening on port 3000');
})