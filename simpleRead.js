const fs = require('fs')
fs.readFile('100mb-sample.txt','utf-8',function(err,data){
    if(err) console.log(err.message)
    console.log(data);
})