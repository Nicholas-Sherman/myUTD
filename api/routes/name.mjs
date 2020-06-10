import {PythonShell} from 'python-shell';
const express = require("express");
const app = express();
const router = express.Router();

router.post('/', (req, res) => {
  const prof  = req.body.name;
  console.log(prof)
  
  PythonShell.run('RMPClass.py', {args: [prof]}, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log( results);
  })

  router.get('/', (req,res,next) => {
    res.send(total)
  })
})

module.exports=router;