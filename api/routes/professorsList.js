var express =require("express");
var router= express.Router();
var mysql = require('mysql');
const { promisify } = require('util')
const sleep = promisify(setTimeout)



const connection = mysql.createConnection({
    host: 'myutd.cyxezmxoqgay.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'myUTD123',
});

connection.connect(function(error){
    if(error){
        throw error;
    }
});
//var postData  = req.body.name;
var years = ["2017","2018","2019"]

function update(results)
{
    for(j = 0; j < results.length; j++)
    {
    list.push(results[j].Instructor_1)
    }
}

router.post('/', (req, res) => {
    global.sub = ""
    global.cat = ""
    global.list = []
    var postData  = req.body.input;
    var nameS = postData.split(" ");
    global.sub = nameS[0]
    global.cat = nameS[1]
    for(i = 0; i < years.length; i++)
    {
    connection.query("SELECT `Instructor_1` FROM fall.`"+ years[i] +"` WHERE (`Subject` = '" + sub + "' AND `Catalog_Nbr` = '" + cat + "');", function(error,results) {
        if(!error){
            update(results)
        }
        else
        {
             console.log(error)
        }
    });
    }
    for(i = 1; i < years.length; i++)
    {
    connection.query("SELECT `Instructor_1` FROM spring.`"+ years[i] +"` WHERE (`Subject` = '" + sub + "' AND `Catalog_Nbr` = '" + cat + "');", function(error,results) {
        if(!error){
            update(results)
        }
        else
        {
             console.log(error)
        }
    });
    }

    for(i = 1; i < years.length; i++)
    {
    connection.query("SELECT `Instructor_1` FROM summer.`"+ years[i] +"` WHERE (`Subject` = '" + sub + "' AND `Catalog_Nbr` = '" + cat + "');", function(error,results) {
        if(!error){
            update(results)
        }
        else
        {
             console.log(error)
        }
    });
    }
    
});


router.get('/', (req, res) => {
    sleep(500).then(() => {
        var done = list.filter((item,index) =>{ return list.indexOf(item) >= index})
        res.send([done,sub,cat])
    })
})


module.exports=router;