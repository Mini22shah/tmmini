const express = require('express');
const router = express.Router();
const path = require('path');
const hbs = require('hbs');

const static_path = path.join(__dirname,'../public')

router.use(express.static(static_path));

// router.get('/', (req,res)=>{
//     res.send('Hi there. I am home page from route');
// });

// const middleware = (req,res,next)=>{
//     next();
// }

router.use(express.json());

router.use('view engine','hbs');

router.use(express.urlencoded());
router.get('/form',(req,res)=>{
    console.log('File gotten');
    res.sendFile(__dirname+'/public/index.html');
})

router.post('/formPost',(req,res)=>{
    console.log(req.body);
})

module.exports = router;