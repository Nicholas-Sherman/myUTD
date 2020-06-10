var express =require("express");
var router= express.Router();
var mysql = require('mysql');
const app = express();
const spawn = require("child_process").spawn;

let total = {Ap: 0,A: 0,Am: 0,Bp: 0,B: 0,Bm: 0,Cp: 0,C: 0,Cm: 0,Dp: 0,D: 0,Dm: 0,F: 0,W_total: 0}

router.post('/', (req, res) => {
   var postData  = req.body.name;
    var nameS = postData.split(" ");
    firstN = nameS[0]
    lastN = nameS[1]
    console.log(firstN)
    console.log(lastN)


const connection = mysql.createConnection({
    host: 'myutd.cyxezmxoqgay.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'myUTD123',
});

connection.connect(function(error){
    if(error){
        throw error;
    }
    else{
        console.log('Connected');
    }
});
function totalfun(b)
{
    for(let item of b){
       total.Ap += item.Ap
        total.A += item.A
        total.Am += item.Am
        total.Bp += item.Bp
        total.B += item.B
        total.Bm += item.Bm
        total.Cp += item.Cp
        total.C += item.C
        total.Cm += item.Cm
        total.Dp += item.Dp
        total.D += item.D
        total.Dm += item.Dm
        total.F += item.F
        total.W += item.W_Total
    }
    return total
}
var fall = "fall"
var years = ["2017", "2018", "2019"];
total = {Ap: 0,A: 0,Am: 0,Bp: 0,B: 0,Bm: 0,Cp: 0,C: 0,Cm: 0,Dp: 0,D: 0,Dm: 0,F: 0,W: 0}
for(i = 0; i < years.length; i++)
{
connection.query("SELECT `Ap`,`A`,`Am`,`Bp`,`B`,`Bm`,`Cp`,`C`,`Cm`,`Dp`,`D`,`Dm`,`F`,`W_Total` FROM " + fall + "."+ years[i] +" WHERE LOCATE('" +lastN+ ", " +firstN+ "', Instructor_1)>0" , function(error,results) {
    if(error)
    {
     console.log(error);
    }
   else{
    console.log(total)
    total =totalfun(results)
    }
});
}

});

router.get('/', (req,res,next) => {
        res.send(total)
             
});



module.exports=router;