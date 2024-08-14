const fs = require("fs")

const highWaterMark = 30;
let chunkCount = 1;

const readStream = fs.createReadStream("70mb-sample.txt",{
    encoding: 'UTF-8',
    highWaterMark: 1024 * 1024 * 20 //20mb for maxBufferedSize
});

readStream.on('data',(chunk)=>{
    console.log(chunkCount++);
    console.log(`size ${chunk.length}`);
})