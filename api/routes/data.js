const {PythonShell} = require('python-shell')
const express = require("express");
const app = express();
const router = express.Router();
const { promisify } = require('util')
const sleep = promisify(setTimeout)

router.post('/', function (req, res) {
  let tid = "";
  const { name } = req.body;
  console.log(name)

  const options = {
    mode: 'text',
    pythonOptions: ['-u'],
    scriptPath: './helpers',
    args: [name],
  };

  PythonShell.run('RMPClass.py', options, (err, results) => {
    if (err) throw err;
    tid = results;
    console.log("py: ", tid)
    res.send(tid)
   });

});


  module.exports=router;