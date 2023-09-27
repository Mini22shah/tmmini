const dotenv = require('dotenv');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const user = require('./models/user');

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname,'../public')

app.use(express.static(static_path));

app.listen(port, ()=>{
   console.log(`Server runs at port ${port}`);
});

//database connection
const connectdb = ()=>{
    require('./db/conn')
 }
 connectdb();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post('/signup',(req,res)=>{

    const {name, email, password, confirm} = req.body;

    userExist = user.findOne({email:email}).then((userExist)=>{
        if(userExist){
                res.status(400).send('Username already taken');
                console.log('Username already taken. Database not updated')
            }
            else{
                const userUpdate = new user({name, email, password, confirm});
                userUpdate.save().then(()=>{
                    console.log('User recorded successfully');
                    res.render(path.join(__dirname,'../views/profile.hbs'))
        }).catch((e)=>{
            console.log(e);
        })
    }})});

    app.post('/login',async (req,res)=>{

        const {email, password} = req.body;
        userExist = await user.findOne({email:email, password:password});
        if(userExist){
            console.log('You are an user');
            res.render(path.join(__dirname,'../views/profile.hbs'));
        }
        else if(await user.findOne({email:email})){
            res.status(400).send('Password doesnt match')
        }
        else{
            res.status(400).send('Wrong Username and Password')
        }
    });
