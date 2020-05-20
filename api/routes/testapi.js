var express =require("express");
var router= express.Router();
var mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Nick160400!',
    database: 'spring2018scheme'
});

connection.connect(function(error){
    if(error){
        throw error;
    }
    else{
        console.log('Connected');
    }
});


router.get('/', (req,res,next) => {
    connection.query("SELECT `Ap`,`A`,`Am`,`Bp`,`B`,`Bm`,`Cp`,`C`,`Cm`,`Dp`,`D`,`Dm`,`F`,`W_Total` FROM spring2018scheme.spring2019 WHERE Instructor_1 = 'Heins, Matthew S'", function(error,results) {
        if(error)
        {
           return res.send(error);
        }
       else{
        res.json(results);
       }
    });
});

module.exports=router;