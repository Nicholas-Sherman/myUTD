import {PythonShell} from 'python-shell';

  PythonShell.run('RMPClass.py', {args: ['hey']}, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log( results);
  });