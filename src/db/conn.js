const dotenv = require('dotenv');
const mongoose = require('mongoose');

const db = 'mongodb+srv://devendra191614:dezayn058@cluster0.1wbjqwf.mongodb.net/user?retryWrites=true&w=majority';

mongoose.connect(db).then(()=>{
    console.log('Database connected')
}).catch((e)=>{
    console.log(`Error connecting! ${e}`)
});
