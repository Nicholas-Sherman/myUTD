const {PythonShell} = require('python-shell')
const express = require("express");
const app = express();
const router = express.Router();

let tid = ''
router.post('/', (req, res) => {  

  let prof = req.body.name;
  console.log("post: ",prof)

 let options = {
      mode :'text',
      pythonOptions: ['-u'], 
      scriptPath: './helpers',
      args: [prof]
  }

  
  PythonShell.run('RMPClass.py', options , function (err, results) {
      if (err) throw err;     
      tid = results
    })

  console.log("py: ", tid)
})

 router.get('/', (req,res,next) => {
    console.log("get: " ,tid);
    res.send(tid)
 })



  module.exports=router;