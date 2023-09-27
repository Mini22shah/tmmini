const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const app = express();

const userSchema = require('./models/user');

//database connection
const connectdb = ()=>{
    require('./db/conn')
}
connectdb();

const port = process.env.PORT || 3000;

//link router files to route
app.use(require('../router/auth'));

app.listen(port, ()=>{
    console.log(`Server runs at port ${port}`);
});



