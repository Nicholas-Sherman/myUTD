const {PythonShell} = require('python-shell')
const express = require("express");
const app = express();
const router = express.Router();
const { promisify } = require('util')
const sleep = promisify(setTimeout)

router.post('/', function (req, res) {
  global.tid = "";
  postData = req.body.name;
  nameS = postData.split(" ");
  firstN = nameS[1]
  lastN = nameS[0]
 temp = lastN.split(",")
 lastN = temp[0]
  fullname = firstN +" "+ lastN

  const options = {
    mode: 'text',
    pythonOptions: ['-u'],
    scriptPath: './helpers',
    args: [fullname],
  };

  PythonShell.run('RMPClass.py', options, (err, results) => {
    if (err) throw err;
    tid = results;
    console.log("py: ", tid)
    res.send(tid)
   });

});

router.get('/', (req,res,next) => {
  sleep(4000).then(() => {
      console.log(tid)
         res.send(tid)
  })
           
});


  module.exports=router;