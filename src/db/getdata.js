const express = require('express');

const mongoose = require('mongoose');

const app = express();

const path = require('path');

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hi there. This is node js');
})

let database;

const db = 'mongodb+srv://devendra191614:dezayn058@cluster0.1wbjqwf.mongodb.net/user?retryWrites=true&w=majority';

app.listen(8000, ()=>{
    const connection = mongoose.connect(db);
    if(connection){
        console.log('Connected to database')
    }
    
});

