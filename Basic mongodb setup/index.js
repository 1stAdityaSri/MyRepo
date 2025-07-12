const express= require('express');
const app=express();
const users = require('./routes/users');
const connectDB = require('./db');

const PORT = 3000;

app.use(express.json());
connectDB();

app.use('/api', users);
app.get('/',(req,res)=>{
    console.log("I am inside the home page route handler");
    res.send('Hello oyee');
});


app.listen(PORT,()=>{
    console.log("App started");
});   