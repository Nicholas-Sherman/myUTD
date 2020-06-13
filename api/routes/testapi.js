var express =require("express");
var router= express.Router();
var mysql = require('mysql');
const { promisify } = require('util')
const sleep = promisify(setTimeout)
//const app = express();
//const spawn = require("child_process").spawn;

/*const pythonProcess = spawn('python',["./RMPClass.py", 'Bing Lv'])
pythonProcess.stdout.on('data', (data) => {
    console.log(data.toString());
});*/

router.post('/', (req, res) => {
    var seasons = ["fall","spring"]
    var years = ["2017", "2018", "2019" ];
    global.total = [{Ap: 0,A: 0,Am: 0,Bp: 0,B: 0,Bm: 0,Cp: 0,C: 0,Cm: 0,Dp: 0,D: 0,Dm: 0,F: 0,W: 0},{Ap: 0,A: 0,Am: 0,Bp: 0,B: 0,Bm: 0,Cp: 0,C: 0,Cm: 0,Dp: 0,D: 0,Dm: 0,F: 0,W: 0},{Ap: 0,A: 0,Am: 0,Bp: 0,B: 0,Bm: 0,Cp: 0,C: 0,Cm: 0,Dp: 0,D: 0,Dm: 0,F: 0,W: 0}]
    console.log(req.body)
    var postData  = req.body.name;
    var cat = req.body.cat;
    var sub = req.body.sub;
   /* var nameS = postData.split(" ");
    firstN = nameS[0]
    lastN = nameS[1]*/



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
function totalfun(item,j)
{
        total[j].Ap += item.Ap
        total[j].A += item.A
        total[j].Am += item.Am
        total[j].Bp += item.Bp
        total[j].B += item.B
        total[j].Bm += item.Bm
        total[j].Cp += item.Cp
        total[j].C += item.C
        total[j].Cm += item.Cm
        total[j].Dp += item.Dp
        total[j].D += item.D
        total[j].Dm += item.Dm
        total[j].F += item.F
        total[j].W += item.W_Total
}

    for(i = 0; i < years.length; i++)
    {

        connection.query("SELECT `Ap`,`A`,`Am`,`Bp`,`B`,`Bm`,`Cp`,`C`,`Cm`,`Dp`,`D`,`Dm`,`F`,`W_Total` FROM fall."+ years[i] +" WHERE( LOCATE('" +postData+ "', Instructor_1)>0 AND `Subject` = '" + sub + "' AND `Catalog_Nbr` = '" + cat + "');" , function(error,results) {
            if(!error){
                for(k = 0; k < results.length; k++)
                {
                totalfun(results[k],0)
                }
            }
            else
            {
               console.log(error)
            }
        });
        
    }
    sleep(50).then(() => {
        for(i = 1; i < years.length; i++)
        {
            connection.query("SELECT `Ap`,`A`,`Am`,`Bp`,`B`,`Bm`,`Cp`,`C`,`Cm`,`Dp`,`D`,`Dm`,`F`,`W_Total` FROM spring."+ years[i] +" WHERE( LOCATE('" +postData+ "', Instructor_1)>0 AND `Subject` = '" + sub + "' AND `Catalog_Nbr` = '" + cat + "');" , function(error,results) {
                if(!error){
                    for(k = 0; k < results.length; k++)
                    {
                    totalfun(results[k],1)
                    }
                }
                else
                {
                    console.log(error)
                }
            });
            
        }
    })
    sleep(50).then(() => {
        for(i = 1; i < years.length; i++)
        {
            connection.query("SELECT `Ap`,`A`,`Am`,`Bp`,`B`,`Bm`,`Cp`,`C`,`Cm`,`Dp`,`D`,`Dm`,`F`,`W_Total` FROM summer."+ years[i] +" WHERE( LOCATE('" +postData+ "', Instructor_1)>0 AND `Subject` = '" + sub + "' AND `Catalog_Nbr` = '" + cat + "');" , function(error,results) {
                if(!error){
                    for(k = 0; k < results.length; k++)
                    {
                    totalfun(results[k],2)
                    }
                }
                else
                {
                    console.log(error)
                }
            });
            
        }
    })
});

router.get('/', (req,res,next) => {
    sleep(1000).then(() => {
           res.send(total)

    })
             
});
router.delete('/', (req,res,next) => {
    global.total = [{Ap: 0,A: 0,Am: 0,Bp: 0,B: 0,Bm: 0,Cp: 0,C: 0,Cm: 0,Dp: 0,D: 0,Dm: 0,F: 0,W: 0},{Ap: 0,A: 0,Am: 0,Bp: 0,B: 0,Bm: 0,Cp: 0,C: 0,Cm: 0,Dp: 0,D: 0,Dm: 0,F: 0,W: 0},{Ap: 0,A: 0,Am: 0,Bp: 0,B: 0,Bm: 0,Cp: 0,C: 0,Cm: 0,Dp: 0,D: 0,Dm: 0,F: 0,W: 0}]
    res.send(total);
})


module.exports=router;